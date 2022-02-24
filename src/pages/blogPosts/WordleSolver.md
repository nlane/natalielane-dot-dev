# Wordle Solver

_February 23, 2022_

Some people love it and play every day while others avoid getting sucked into the trend. Either way, I bet you've heard a lot about [Wordle](https://www.nytimes.com/games/wordle/index.html). Personally I'm a fan of the 5-letter word guessing game. In a world of Netflix-bingeing, there is something very refreshing about having a finite piece of entertainment that is gifted to me once a day. It also presents an interesting algorithmic challenge: what are the optimal guesses you can make at each step of the game?

<img class="post-gif" src="https://media.giphy.com/media/KJkcM89SJwbrm0jSJ1/giphy.gif" alt="ghosts talking about wordle"/><p class="img-caption">New York Times Ghost GIF by Unpopular Cartoonist</p>

So here is [my attempt](https://github.com/nlane/wordle-solver) at writing a program designed to efficiently solve Wordle puzzles. It's also my first real attempt to learn [Go](https://go.dev/). Why Go? Well without "go"-ing off on a tangent (heh) I want be strong in at least one statically typed language (I see you and appreciate you TypeScript, but you don't exactly count ❤️).

## My Approach: A Mapping of Strings to a 5-Element Array of More Arrays of... Strings 😅

My approach starts with a pretty complicated data structure that takes all the possible 5 letter words and indexes them by letters and their placement. A reduced example looks something like this:

```
{ "a": [ ["apple", "after"], ["water"], ["small"], ["today", "human"], ["extra"] ], ... }
```

The map has 26 keys, one for each letter of the alphabet. The values are split up into arrays of 5 elements where the first element is an array of words where that letter shows up as the first letter in the word, the second element is an array of words where that letter shows up as the second letter in the word, etc. This means that each 5-letter word gets stored 5 times, that is one time for each letter and placement. I like this structure because you can get access to "the set of words where letter X is in place Y" in constant time.

## Scoring the Words ➕

Each word is scored based on the popularity and placement of its letters as well as the diversity of letters in the word. This helps us make the most optimal guess at each step of our Wordle puzzle. It mimicks my strategy when playing the game. For example, I'm way more likely to guess "salty" than I am to guess "sassy" because I don't want to waste three spots on the letter "s" if I don't have to. I'm also more likely to guess "alike" than "amaze" because I assume there is almost no chance the word has the letter "z".

## Starting Word 🌱

Based on my scoring method above, the highest scoring word is "cares". This is why it's my default starting word. I do allow users to overwrite this when running the Wordle Solver since I personally love to mix up my starting word day-to-day.

## The Algorithm 🤓

After each guess, the result comes back in a string format like "YNMNY" where each character represents the accuracy of the letter guessed:

- Y: correct letter and placement
- N: letter does not show up in the remaining spots in the word
- M: correct letter but wrong placement in the word

My algorithm takes the results of its last guess and uses those clues to filter down the list of possible words. Given the three possible letters above, the algorithm does one of three things when it processes each of the letters:

- If the letter is "Y", it filters the words to only those that have that letter in that spot. Remember the map above? This is a contant time operation to find the list of words that satify the condition. Then it requires a simple loop to find the intersection of those words with the current list of possible words.
- If the letter is "M", we find all the word that contain that letter (again using the map) but skipping the ones that have the letter in the spot we already guessed. Then we do another intersection.
- If the letter is "N", we filter out the words that have that letter. We have to be careful though: if that letter was already guessed and assigned a "Y" in a different spot, we don't want to filter out the words with the correctly placed letter.

## Limitations 🧐

This algorithm makes every guess a potential winner. That means it never guesses a word that it knows is wrong in hopes of uncovering facts about other letters. Ideally the best strategy for Wordle involves this trade-off happening every once in a while. I remember when the Wordle one day was "swill" and I _almost_ lost. My board quickly filled up with "skill", "shill", and "spill" before I got "swill" on my last row. A better strategy in this case may have been to guess a word containing some combination of "h", "k", "p", and "w" as to eliminate those letters from my guess in one row.

## Final Thoughts

My wordle algorithm is not breaking records anytime soon. In fact, it's not even guaranteed to guess the word correctly in 6 attempts. But I think it does about as well as me in terms of average number of guesses and it does so virtually instantly. I don't think I'll use my algorithm to solve the daily Wordle - that would take out the fun for me! It is a good benchmark for comparison, though. I end up winning either way: either I'm smarter than my code or my code is smarter than me 🧠 💪
