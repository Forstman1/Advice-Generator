


const dice = document.getElementById("dice-image");
const quote = document.getElementById("quote");
const advice = document.getElementById("advice");
let count = 0;


dice.addEventListener('click', async function (){
	const row_data = await fetch("https://api.adviceslip.com/advice");
	let clean_data = await row_data.json();
	clean_data = clean_data.slip.advice;
	quote.innerHTML = "'" + clean_data + "'";
	count++;
	advice.innerHTML = "ADVICE #" + count;
});