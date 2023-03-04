var arrayQuotes = [
  {
    author: "- Jim Rohn",
    quote: "Beware what you become in pursuit of what you want.",
  },
  {
    author: "- Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  {
    author: "- Confucius",
    quote: "Silence is a true friend who never betrays.",
  },
  {
    author: "- Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for nyout enemies to die.",
  },
  {
    author: "- Ray Bradbury",
    quote: "First, find out what your hero wants, then just follow him!",
  },
  {
    author: "- Terry Pratchett",
    quote: "The first draft is just you telling yourself the story.",
  },
  {
    author: "- Steven Pressfield",
    quote: "Start before you’re ready.",
  },
  {
    author: "- Mike Rich",
    quote: "Write your first draft with your heart. Rewrite with your head.",
  },
  {
    author: "- Malcolm X",
    quote: "If you have no critics, you’ll likely have no success.",
  },
  {
    author: "- Margaret Atwood",
    quote: "If I waited for perfection, I would never write a word.",
  },
  {
    author: "- Winston Churchill",
    quote: "Difficulties mastered are opportunities won.",
  },
  {
    author: "- C.S. Lewis",
    quote: "You can make anything by writing.",
  },
];

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let randomHamid = Math.floor(Math.random() * arrayQuotes.length);
  document.getElementById("quoteOutput").innerHTML =
    '"' + arrayQuotes[randomHamid].quote + '"';
  document.getElementById("authorOutput").innerHTML =
    arrayQuotes[randomHamid].author;
});
