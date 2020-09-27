// Pass the Message

const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg);
messageIn.addEventListener('keyup', enterEvent);

function sendMsg() {
  let content = messageIn.value;
  if (content == '') {
    alert('Please Enter Valid Value');
  } else {
    messageOut.innerHTML = content;
    messageIn.value = '';
  }
}

//makes the enter button work so you can submit the message with pressing Enter

function enterEvent() {
  let content = messageIn.value;
  if (content == '' && event.key === 'Enter') {
    alert('Please Enter Valid Value');
  } else {
    messageOut.innerHTML = messageIn.value;
    messageIn.value = '';
  }
}

// Quote Generator

const quotes = [
  {
    name: 'Stephan King',
    quote: 'Get busy living or get busy dying.',
  },
  {
    name: 'John F. Kennedy',
    quote: 'Those who dare to fail miserably can achieve greatly.',
  },
  {
    name: 'Abraham Lincoln',
    quote:
      "I'm a success today because I had a freind who beieved in me and I didn't have the heart to let him down.",
  },
  {
    name: 'Leonardo Da Vinci',
    quote:
      'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. The went out and happend to things.',
  },
  {
    name: 'Leo Tolstoy',
    quote: 'If you want to be happy, be.',
  },
];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);

  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
