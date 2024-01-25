let adviceIdEl = document.getElementById('advice-id');
let adviceEl = document.getElementById('advice');
let adviceBtnEl = document.getElementById('advice-btn');

async function getAdvice() {
	const res = await fetch('https://api.adviceslip.com/advice');
	const data = await res.json();
	return { ...data.slip };
}

async function displayAdvice() {
	const adviceObj = await getAdvice();
	adviceIdEl.textContent = adviceObj.id;
	adviceEl.textContent = `"${adviceObj.advice}"`;
}

adviceBtnEl.addEventListener('click', () => displayAdvice());

window.addEventListener('resize', function () {
	if (window.innerWidth < 400) {
		document.getElementById('divider').src =
			'./images/pattern-divider-mobile.svg';
	} else {
		document.getElementById('divider').src =
			'./images/pattern-divider-desktop.svg';
	}
});

displayAdvice();
