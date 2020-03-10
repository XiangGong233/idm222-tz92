
console.log('javascript start')

// ------------------------
// https://codepen.io/Ruworks/pen/jPKZXR
// https://codepen.io/gt-26/pen/Vbawmx
// ---------------------


const dark = document.getElementById('dark');
const light = document.getElementById('light');
const main = document.getElementById('main');
const p = document.querySelectorAll('#paragraph');




dark.onclick = function themeDark() {
    dark.classList.add('hidden');
	light.classList.remove('hidden');
	main.classList.add('darkcolor');
	p.classList.add('lightcolor');

}

light.onclick = function themeLight() {
    light.classList.add('hidden');
	dark.classList.remove('hidden');
	main.classList.remove('darkcolor');
	p.classList.remove('lightcolor');


}






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