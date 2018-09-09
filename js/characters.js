/*
* @Author: admin
* @Date:   2018-06-23 17:18:33
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-02 22:33:07
*/

// 中部商品分类导航栏，鼠标经过显示
$('.gvw-con_nav .con_nav li').hover(function() {
	var flag=$(this).index();
	$('.nav_ifo').eq(flag).css('display', 'block');
	$('.nav_ifo').eq(flag).siblings('.nav_ifo').css('display', 'none');
	$(this).css('background', '#eaf7fe');
}, function() {
	$('.nav_ifo').css('display', 'none');
	$(this).css('background', '#fff');
});
$('.nav_ifo').hover(function() {
	var i=$(this).index();
	$(this).css('display', 'block');
	$('.gvw-con_nav .con_nav li').eq(i-1).css('background', '#eaf7fe');

}, function() {
	var i=$(this).index();
	$(this).css('display', 'none');
	$('.gvw-con_nav .con_nav li').css('background', '#fff');
});





$('.shopmain_header .shopmain_header_right span').click(function(){
	$(this).toggleClass('newestshow_span');
	$(this).children('ul').toggleClass('newestshow');
	return false;
});
$(document).click(function(){
	$('.shopmain_header .shopmain_header_right span ul').removeClass('newestshow');
	$('.shopmain_header .shopmain_header_right span').removeClass('newestshow_span')
})
$('.shopcontent_picks .picks_main .picks_maincontent .row .thumbnail').hover(function(){
	$(this).children('.picks_imgbox').children('.quick_view').toggleClass('q_viewshow'); 
})
$('.shopcontent_main .shopmain_main .row .thumbnail').hover(function(){
	$(this).children('.main_imgbox').children('.quick_view').toggleClass('q_viewshow'); 
})