/*
* @Author: admin
* @Date:   2018-07-03 14:41:43
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-08 10:13:05
*/
// 鼠标移入快速查看
$('.shopcontent_picks .picks_main .picks_maincontent .row .thumbnail').hover(function(){
	$(this).children('.picks_imgbox').children('.quick_view').toggleClass('q_viewshow'); 
})


$('.jqzoom01').imagezoom01();


$('.qck_view .samll_img li').click(function(event) {
	var i=$(this).index();
	var osrc=$(this).children('img').attr('src');
	var orel=$(this).children('img').attr('rel');
	$(this).parent().parent().children('a').children('.jqzoom01').attr({'src': osrc,'rel': orel});
	
});

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

