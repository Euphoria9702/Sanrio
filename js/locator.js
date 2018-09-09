/*
* @Author: Administrator
* @Date:   2018-06-30 21:45:05
* @Last Modified by:   admin
* @Last Modified time: 2018-07-03 10:48:50
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




function show_way(){
		var h_window=$(window).height();
		var div_top=$('.locator_main .main_bottom .bottom_country .more_details').offset().top;
		var h_div=$('.locator_main .main_bottom .bottom_country .more_details').height();
		var h_scroll=$(document).scrollTop();


		var div_range_top=$('.locator_main .main_bottom .bottom_range .more_details').offset().top;
		var h_div_range=$('.locator_main .main_bottom .bottom_range .more_details').height();
		// console.log(h_window);
		// console.log(div_top);
		// console.log(h_div);
		// console.log(h_scroll);
		var h_top=div_top-h_scroll;
		var h_bottom=h_window-h_div-div_top+h_scroll;

		var h_bottom3=h_window-h_div_range-div_range_top+h_scroll;
		console.log(h_top);
		console.log(h_bottom);
		

		if(h_bottom>482){
			$('.locator_main .main_bottom .more_details .united_box').css({'max-height':'482px','top':'40px'});
		}
	    else if(h_bottom<482&&h_bottom>h_top){
			$('.locator_main .main_bottom .more_details .united_box').css({'max-height':h_bottom-20,'top':'40px'});
		}
		else if(h_bottom<482&&h_bottom<h_top&&h_top<482){
			$('.locator_main .main_bottom .more_details .united_box').css({'max-height':h_top,'top':-h_top});
		}
		else if(h_bottom<482&&h_top>482){
			$('.locator_main .main_bottom .more_details .united_box').css({'max-height':'482px','top':'-482px'});
		}
		



		if(h_bottom3<98){
			$('.locator_main .main_bottom .more_details .within_box').css('top','-98px');
		}else{
			$('.locator_main .main_bottom .more_details .within_box').css('top','40px');
		}
	}

$(window).scroll(function(){
	show_way();
})

$('.locator_main .main_bottom .bottom_country .more_details').click(function() {
	$('.locator_main .main_bottom .more_details .united_box').toggleClass('box_show');
	$('.locator_main .main_bottom .more_details .within_box').removeClass('box_show');
	return false;
});

$('.locator_main .main_bottom .bottom_range .more_details').click(function() {
	$('.locator_main .main_bottom .more_details .united_box').removeClass('box_show');
	$('.locator_main .main_bottom .more_details .within_box').toggleClass('box_show');
	return false;
});
$(document).click(function() {
	$('.locator_main .main_bottom .more_details .united_box').removeClass('box_show');
	$('.locator_main .main_bottom .more_details .within_box').removeClass('box_show');
});
$(window).scroll(function(){
	$('.locator_main .main_bottom .more_details .united_box').removeClass('box_show');
	$('.locator_main .main_bottom .more_details .within_box').removeClass('box_show');
})

$('.locator_main .main_bottom .more_details .united_box li').hover(function(){
	$(this).addClass('box_ul_li_hover');
	$(this).siblings('.united_box li').removeClass('box_ul_li_hover');
})
$('.locator_main .main_bottom .more_details .within_box li').hover(function(){
	$(this).addClass('box_ul_li_hover');
	$(this).siblings('.within_box li').removeClass('box_ul_li_hover');
})

// var h1=$('.locator_main .main_bottom .bottom_country .more_details').offset().top;
// console.log(h1);


show_way();
