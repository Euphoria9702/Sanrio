/*
* @Author: Administrator
* @Date:   2018-07-07 21:06:35
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-07 22:01:16
*/
// 查看商品大图,点击小图切换大图


$('.jqzoom01').imagezoom01();


$('.qck_view .samll_img li').click(function(event) {
	var i=$(this).index();
	var osrc=$(this).children('img').attr('src');
	var orel=$(this).children('img').attr('rel');
	$(this).parent().parent().children('a').children('.jqzoom01').attr({'src': osrc,'rel': orel});
});


// 鼠标移入快速查看

$('.shopmain_main .quick_view').click(function(event) {
	var flag=$(this).parent().parent().parent().index();
	console.log(flag);
	$('.gray').show();
	var y=event.pageY-200;
	$('.S_main .qck_view').css({'top':y});
	$('.View_Img01').css({'top':y});
	console.log(y);
	$('.S_main .qck_view').eq(flag).show();
});

$('.picks_main .quick_view').click(function(event) {
	var flag=$(this).parent().parent().parent().index();
	$('.gray').show();
	var y=event.pageY-200;
	$('.P_main .qck_view').css({'top':y});
	$('.View_Img01').css({'top':y});
	console.log(y);
	$('.P_main .qck_view').eq(flag).show();
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

// 点击查看超大图
$('.View_Img span').click(function(event) {
	$('.View_Img').hide();
	$('.gray').hide();
});



