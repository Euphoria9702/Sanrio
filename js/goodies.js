/*
* @Author: Administrator
* @Date:   2018-07-01 19:16:24
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-01 19:18:45
*/
$('.yourself_main .main_nav ul li').hover(function(){
	$(this).toggleClass('ul_li_hover');
	// $(this).children('img').toggleClass('img_block');
	$(this).children('div').toggleClass('listshow_block');
})