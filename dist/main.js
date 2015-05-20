function updateTime () {
	var time = document.getElementById('clock');
	var date = new Date();
	var now  = date.getHours().toString() + " : " + date.getMinutes().toString() 
		+ " : " + date.getSeconds().toString();

	time.innerHTML = now;
}

setInterval(updateTime, 1000);

var mySection = document.querySelector('section');
mySection.style.backgroundColor = 'rgb(118, 112, 30)';

function changeBackground () {
	if (mySection.style.backgroundColor == 'rgb(118, 112, 30)') {
		mySection.style.backgroundColor = 'rgb(121, 130, 210)';
		mySection.style.transition = 'background-color 4s ease';
	} else {
		mySection.style.backgroundColor = 'rgb(118, 112, 30)';
		mySection.style.transition = 'background-color 4s ease';
	}

}
setInterval (changeBackground, 4000);

var myLine = document.querySelector('#line');
myLine.style.paddingRight = '0';
myLine.style.paddingLeft = '0';

function changeLine () {
	myLine.style.paddingRight = parseInt(myLine.style.paddingRight) + 10 + 'px';
	myLine.style.paddingLeft = parseInt(myLine.style.paddingLeft) + 10 + 'px';
	if (myLine.style.paddingRight == '180px' && myLine.style.paddingLeft == '180px') {
		myLine.style.paddingRight = '0';
		myLine.style.paddingLeft = '0';
	}
}
setInterval (changeLine, 1000);