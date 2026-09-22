const quotes=[
{text:"The future depends on what you do today.",author:"Mahatma Gandhi"},
{text:"Success is not final, failure is not fatal.",author:"Winston Churchill"},
{text:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},
{text:"The only way to do great work is to love what you do.",author:"Steve Jobs"},
{text:"It always seems impossible until it's done.",author:"Nelson Mandela"},
{text:"Dream big and dare to fail.",author:"Norman Vincent Peale"},
{text:"Do something today that your future self will thank you for.",author:"Unknown"},
{text:"Small steps every day lead to big results.",author:"Unknown"},
{text:"Don't watch the clock; do what it does. Keep going.",author:"Sam Levenson"},
{text:"Great things are done by a series of small things brought together.",author:"Vincent van Gogh"}
];
const quoteElement=document.getElementById("quote");
const authorElement=document.getElementById("author");
const button=document.getElementById("newQuoteBtn");
let lastIndex=-1;
function showRandomQuote(){
let i;
do{i=Math.floor(Math.random()*quotes.length)}while(quotes.length>1&&i===lastIndex);
lastIndex=i;
quoteElement.textContent=quotes[i].text;
authorElement.textContent="— "+quotes[i].author;
}
button.addEventListener("click",showRandomQuote);
showRandomQuote();