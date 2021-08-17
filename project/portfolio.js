
console.log('javascript start')



var projectinput = document.getElementById('projectinput')

projectinput.onclick = function projectinputmove() {
	console.log('projectinput moved to close');

	if (projectinput.length < 1) {
		projectinput.classList.add('movedclose');
	} else {
		projectinput.classList.remove('movedclose')
	}

}

// ------------------------
// https://codepen.io/Ruworks/pen/jPKZXR
// https://codepen.io/gt-26/pen/Vbawmx
// ---------------------

// const dark = document.getElementById('dark');
// const light = document.getElementById('light');
// const main = document.getElementById('main');
// const text = document.getElementById('text');
// const pdtitle = document.getElementById('pdtitle1')
// const topbox = document.getElementById('top')
// const footer = document.getElementById('footer')

// dark.onclick = function themeDark() {
// 	console.log('main');
//     dark.classList.add('hidden');
// 	light.classList.remove('hidden');
// 	main.classList.add('darkcolor');
// 	header002.classList.add('darkcolor');

// 	text.classList.add('lightcolor');
// 	pdtitle.classList.add('lightcolor');
// 	topbox.classList.add('darkcolor');
// 	footer.classList.add('darkcolorfooter');
	


// }

// light.onclick = function themeLight() {
//     light.classList.add('hidden');
// 	dark.classList.remove('hidden');
// 	main.classList.remove('darkcolor');
// 	header002.classList.remove('darkcolor');

// 	text.classList.remove('lightcolor');
// 	pdtitle.classList.remove('lightcolor')
// 	topbox.classList.remove('darkcolor')
// 	footer.classList.remove('darkcolorfooter')


// }


// const header002 = document.getElementById('header002')


// dark.onclick = function aboutDark() {
// 	console.log('aboutme');
// 	header002.classList.add('darkcolor');
// 	dark.classList.add('hidden');
// 	light.classList.remove('hidden');
// 	main.classList.add('darkcolor');
// 	footer.classList.add('darkcolorfooter');

// }

// light.onclick = function aboutLight() {
// 	header002.classList.remove('darkcolor');
//     light.classList.add('hidden');
// 	dark.classList.remove('hidden');
// 	main.classList.remove('darkcolor');
// 	footer.classList.remove('darkcolorfooter')

// }























// $(document).ready(function() {
//     var change1 = $('#change');
// 	var change2 = $('#sections li, .brand');
// 	var button1 = $('.button1');
// 	var button2 = $('.button2');
// 	var button3 = $('.button3');
	
// 	button1.click(function(){
// 		change1.css("background","#3498DB");
// 		change2.css("color","#3498DB");
// 		});
// 	button2.click(function(){
// 		change1.css("background","#E74C3C");
// 		change2.css("color","#E74C3C");
// 		});
// 	button3.click(function(){
// 		change1.css("background","#52BE7F");
// 		change2.css("color","#52BE7F");
// 		});
// });