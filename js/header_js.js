/*
* @Author: Mo
* @Date:   2018-07-02 00:04:36
* @Last Modified by:   admin
* @Last Modified time: 2018-07-05 16:26:20
*/
$('.index_fixed').click(function(event) {
	$('html,body').animate({'scrollTop': 0}, 500);
});
$(window).scroll(function(event) {
	if($(window).width()>767&&$(window).scrollTop()>=300){
		$('.index_fixed').fadeIn(200);
	}else{
		$('.index_fixed').fadeOut(200);
	}
});
/*---------------fix--------------------*/

$('.small_title').click(function(event) {
	$(this).parent().children('.small_main').slideToggle(50);
	if($(this).children('span').html()=='-'){
		$(this).css('border-bottom', '1px solid #000');
		$(this).children('span').html("+");
	}else{
		$(this).children('span').html("-");
		$(this).css('border', '0');
	}
});
/*--------------下面菜单--------------*/

$('.navbar-header .glyphicon-menu-hamburger').click(function(event) {
	$('.head_in').animate({'left': '0px'}, 300)
});
$('.in_close').click(function(event) {
	$('.head_in').animate({'left': '-100%'}, 300)
});
$('.head_in li').hover(function() {
	$(this).children('a').addClass('acolor');
}, function() {
	$(this).children('a').removeClass('acolor');
});
$('.shop_li').click(function(event) {
	$('.top2,.main2').show();
	$('.big_inmain').animate({'left': '-100%'}, 200)
});
$('.top2').click(function(event) {
	$('.top2,.main2,.main3').hide();
	$('.head_in').css({'overflow-y': 'hidden','padding-right':'0px'});
	$('.big_inmain').animate({'left': '0'}, 200)
});
$('.head_next').click(function(event) {
	$('.main3').show();
	$('.head_in').css({'overflow-y': 'scroll','padding-right':'1px'});
	$('.big_inmain').animate({'left': '-200%'}, 200)
});
/*------------小nav----------------*/
$('.index_nav_right input,.navbar-header .glyphicon-search').click(function(event) {
	$('.head_search').show();
	$('.index_nav_right').hide();
	$('.index_nav .container').removeClass('index_nav_container');
	$('.index_nav .navbar').css('margin', '0');
});
$('.head_search span').click(function(event) {
	$('.head_search').hide();
	$('.index_nav_right').show();
	$('.index_nav .container').addClass('index_nav_container');
	$('.index_nav .navbar').css('margin', '5px auto');
});
/*-------------nav------------------*/

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
/*中部商品分类导航栏，鼠标经过显示*/