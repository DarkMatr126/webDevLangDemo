window.addEventListener('load', () => {
	
})

window.addEventListener('scroll', () => {
	var p1 = document.getElementById('p1');
	var rect = p1.getBoundingClientRect();
	seeP1: if (window.scrollY + document.documentElement.clientHeight >= rect.top + rect.height/5) {
		if (p1.dataset.visible === 'true') {
			break seeP1;
		}
		p1.dataset.visible = 'true';

		p1.getElementsByTagName('p')[0].style.animation = 'popText 1s'
		p1.getElementsByTagName('p')[0].style.top = '50%';

		p1.getElementsByTagName('img')[0].style.animation = 'popImg 1s'
		p1.getElementsByTagName('img')[0].style.transform = 'translate(-50%,0%)';

	} else if (window.scrollY + document.documentElement.clientHeight <= rect.top + rect.height/2) {
		if (p1.dataset.visible === 'false') {
			break seeP1;
		}
		p1.dataset.visible = 'false';
	
		p1.getElementsByTagName('p')[0].style.animation = ''
		p1.getElementsByTagName('p')[0].style.top = '200%';

		p1.getElementsByTagName('img')[0].style.animation = ''
		p1.getElementsByTagName('img')[0].style.transform = 'translate(-50%,200%)';
	}
});

//Popup
var termsChecked = false;
function changeTerms () {
	var chk = document.getElementById('annoyingPopup').getElementsByClassName('inpDiv')[0].getElementsByClassName('check')[0];

	var btn = document.getElementById('annoyingPopup').getElementsByClassName('inpDiv')[0].getElementsByTagName('button')[0];
	if (chk.checked === true) {
		btn.style.cursor = 'pointer';
		btn.style.backgroundColor = '#f44';
		termsChecked = true;
	} else {
		btn.style.cursor = 'not-allowed';
		btn.style.backgroundColor = '#ccc';
		termsChecked = false;
	}
}
function signUp () {
	if (!termsChecked) {
		return;
	}
	var pop = document.getElementById('annoyingPopup');
	var main = pop.getElementsByClassName('main')[0];
	var inpDiv = main.getElementsByClassName('inpDiv')[0];
	var email = inpDiv.getElementsByTagName('input')[0]
	var pass = inpDiv.getElementsByTagName('input')[1]
	
	if (email.value === '' || pass.value === '') {
		alert('Please enter your email and password');
		return;
	}

	
	var signed = pop.getElementsByClassName('signed')[0];
	signed.hidden = false;
	main.hidden = true;


	setTimeout(() => {
		pop.style.display = 'none';
		document.body.style.overflow = 'scroll';
	},1000)
}
function terms(back = false) {
	var pop = document.getElementById('annoyingPopup');
	if (back) {
		pop.getElementsByClassName('terms')[0].hidden = true;
		pop.getElementsByClassName('main')[0].hidden = false;
	} else {
		pop.getElementsByClassName('terms')[0].hidden = false;
		pop.getElementsByClassName('main')[0].hidden = true;
	}
}