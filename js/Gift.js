/*
* @Author: admin
* @Date:   2018-06-29 08:50:50
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-07 22:27:36
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

// 图片放大效果
$('.jqzoom').imagezoom();

$('.jqzoom01').imagezoom01();



$('.qck_view .samll_img li').click(function(event) {
	var i=$(this).index();
	var osrc=$(this).children('img').attr('src');
	var orel=$(this).children('img').attr('rel');
	$(this).parent().parent().children('a').children('.jqzoom01').attr({'src': osrc,'rel': orel});
	
});

// 鼠标移入快速查看
$('.shopcontent_picks .picks_main .picks_maincontent .row .thumbnail').hover(function(){
	$(this).children('.picks_imgbox').children('.quick_view').toggleClass('q_viewshow'); 
})
$('.quick_view').click(function(event) {
	var flag=$(this).parent().parent().parent().index();
	$('.gray').show();
	var y=event.pageY-200;
	$('.qck_view').css({'top':y});
	$('.View_Img01').css({'top':y});
	$('.qck_view').eq(flag).show();
});

// close
$('.clo_btn').click(function(event) {
	var Orel=$(this).parent().children('.media').children('.media-left').children('.samll_img').children('li').eq(0).children('img').attr('rel');
	var Osrc=$(this).parent().children('.media').children('.media-left').children('.samll_img').children('li').eq(0).children('img').attr('src');
	$(this).parent().hide();
	$('.gray').hide();
	$(this).parent().children('.media').children('.media-left').children('a').children('img').attr({
		'rel': Orel,
		'src': Osrc
	});
});

$('.View_Img01 span').click(function(event) {
	$('.View_Img01').hide();
});

// 点击切换下拉导航栏
$('.dropdown-menu li').click(function(event) {
	/* Act on the event */
	var txt=$(this).children('a').html();
	console.log(txt);
	$('.dropdown-toggle .ifo').html(txt);
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
});

$('.dropdown-menu li').hover(function() {
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
}, function() {
	/* Stuff to do when the mouse leaves the element */
});


// 点击删除猫
$('.b_close').click(function(event) {
	$('.b_cat').fadeOut(500);
});