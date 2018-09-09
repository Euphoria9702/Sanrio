/*
* @Author: Administrator
* @Date:   2018-07-01 18:00:38
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-07 13:31:50
*/
$('.yourself_main .main_nav ul li').hover(function(){
	$(this).toggleClass('ul_li_hover');
	// $(this).children('img').toggleClass('img_block');
	$(this).children('div').toggleClass('listshow_block');
})

var h1=$('.yourself_main .recipes h3').offset().top;
var h2=$('.yourself_main .how_tos h3').offset().top;
var h3=$('.yourself_main .download h3').offset().top;
// console.log(h1);
// console.log(h2);
// console.log(h3);

$('.yourself_main .main_nav .scroll ul li').eq(0).click(function(){
	$(window).scrollTop(h1);
})
$('.yourself_main .main_nav .scroll ul li').eq(1).click(function(){
	$(window).scrollTop(h2);
})
$('.yourself_main .main_nav .scroll ul li').eq(2).click(function(){
	$(window).scrollTop(h3);
})