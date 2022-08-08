let q_array = [
    [`I think it's possible to ordinary people to choose to be extraordinary`],
    ['I find that the harder I work, the more luck I seem to have.'],
    ['Motivation is what gets you started. Habit is what keeps you going'],
    ['Success is the sum of small efforts, repeated'],
    ['The best way to predict your future is to create it.'],
    ['You are braver than you believe, stronger than you seem and smarter than you think'],
    [`Today a reader. Tomorrow a leader`],
    ['If you want to go fast, go alone. If you want to go far, go together'],
    [`It's OK to not be OK, as long as you don't stay that way.`],
    [`Those who don't believe in magic will never find it.`],
    [`There is no elevator to success  you have to take the stairs`],
    [`Do what you feel in your heart to be right, for you'll be criticized anyway`],
    [`It's supposed to be hard. If it were easy, everyone would do it.`],
    [`In 20 years, you probably won't even remember this`],
    [`A lion does not concern himself with the opinion of sheep`],
    [`When you are wrong, admit it. When you are right, be quiet.`],
    [`If nobody hates you, nobody knows you`],
    [`If you don’t play to win, don’t play at all.`],
    ['If you want a thing done well, do it yourself'],
    [`Show me a good loser, and I’ll show you a loser`],
    [`Be obsessed or be average.`],
    [`Blood, sweat, & respect. The first two you give. Last one you earn.`],
    [`Victory has a thousand fathers, but defeat is an orphan.`],
    [`It’s so easy to be great these days, because everyone else is so weak.`],
    [`Lower your standards for no one.`]
];
let val = document.getElementById('quote');
let btn = document.getElementById('button');
btn.addEventListener('click', show_quote);
btn.addEventListener('click', bgColorChange);

// function show_quote() {
//     let randam = Math.floor(Math.random() * (100));
//     val.innerText = q_array[random];
// }
function show_quote() {
    console.log(Math.floor(Math.random() * (q_array.length) + 0));
    let cal = Math.floor(Math.random() * (q_array.length) + 0);
    val.innerText = q_array[cal];
}

function bgColorChange() {
    let red = Math.floor(Math.random() * (255) + 0);
    let green = Math.floor(Math.random() * (255) + 0);
    let blue = Math.floor(Math.random() * (255) + 0);
    document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}
// console.log(Math.floor(Math.random() * (6) + 0));
// let cal = Math.floor(Math.random() * (6) + 0);
// val.innerText = q_array[cal];