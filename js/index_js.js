/*
* @Author: admin
* @Date:   2018-06-26 09:10:28
* @Last Modified by:   Mo
* @Last Modified time: 2018-08-22 21:17:49
*/
var num=0;
$('.characters_right').click(function(event) {
	num++;
	if($(window).width()<960){
		if(num>8) num=8;
		$('.characters_main ul').animate({'left': -num*25+'%'}, 500)
	}else{
		if(num>6) num=6;
		$('.characters_main ul').animate({'left': -num*16.66667+'%'}, 500)
	}
});
$('.characters_left').click(function(event) {
	num--;
	if($(window).width()<960){
		if(num<0) num=0;
		$('.characters_main ul').animate({'left': -num*25+'%'}, 500)
	}else{
		if(num<0) num=0;
		$('.characters_main ul').animate({'left': -num*16.66667+'%'}, 500)
	}
	
});
// $(window).resize(function(event) {
// 	if($(window).width()<960){
// 		if(num>1){
// 			num=num+2;
// 			$('.characters_main ul').css({'left': -num*25+'%'})
// 		}else{
// 			num=0;
// 			$('.characters_main ul').css({'left': '0'})
// 		}
// 		console.log('<980 '+num)
		
// 	}else{
// 		if(num>=2){
// 			num=num-2;
// 			$('.characters_main ul').css({'left': -num*16.66667+'%'})
// 		}else{
// 			num=0;
// 			$('.characters_main ul').css({'left': '0'})
// 		}
// 		console.log('>980 '+num)
// 	}
// });
/*-------------------图片移动--------------*/

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

// $('.small_title').click(function(event) {
// 	$(this).parent().children('.small_main').slideToggle(50);
// 	if($(this).children('span').html()=='-'){
// 		$(this).css('border-bottom', '1px solid #000');
// 		$(this).children('span').html("+");
// 	}else{
// 		$(this).children('span').html("-");
// 		$(this).css('border', '0');
// 	}
// });
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