(function($){
	$.fn.imagezoom01=function(options){
		var settings={xzoom:400,yzoom:400,offset:10,position:"BTR",preload:1};

		if(options){
			$.extend(settings,options);
		}

		var noalt='';
		var self=this;

		$(this).bind("mouseenter",function(ev){
			var imageLeft=$(this).offset().left;
			var imageTop=$(this).offset().top;

			var imageWidth=$(this).get(0).offsetWidth;
			var imageHeight=$(this).get(0).offsetHeight;

			var boxLeft=$(this).parent().offset().left;
			var boxTop=$(this).parent().offset().top;

			var boxWidth=$(this).parent().width();
			var boxHeight=$(this).parent().height();

			noalt=$(this).attr("alt");

			var bigimage=$(this).attr("rel");

			if($("div.zoomDiv").get().length==0){
				$(document.body).append("<div class='zoomMask'></div>");
				$(this).parent().parent().parent().append("<div class='zoomDiv'><img class='bigimg' src='"+bigimage+"'/></div>")
			}
			
			$("div.zoomDiv").height($("div.zoomDiv").width());

			if($(window).width()>760){
				$("div.zoomDiv").show();
			}
			

			$(this).css('cursor','pointer');

			$(document.body).mousemove(function(e){
				mouse=new MouseEvent(e);
				if(mouse.x<imageLeft||mouse.x>imageLeft+imageWidth||mouse.y<imageTop||mouse.y>imageTop+imageHeight){
					mouseOutImage();
					return;
				}
				var bigwidth=$(".bigimg").get(0).offsetWidth;
				var bigheight=$(".bigimg").get(0).offsetHeight;
				var scaley='x';
				var scalex='y';
				if(isNaN(scalex)|isNaN(scaley)){
					var scalex=(bigwidth/imageWidth);
					var scaley=(bigheight/imageHeight);
					$("div.zoomMask").width(($("div.zoomDiv").width())/scalex);
					$("div.zoomMask").height(($("div.zoomDiv").height())/scaley);
					if($(window).width()>760){
						$("div.zoomMask").css('visibility','visible');
					}
				}

				//点击查看大图
				$('.zoomMask').click(function(event) {
					$('.View_Img01>img').attr('src',bigimage);
					$('.View_Img01').show();
					$('.gray').show();
				});
				$('.jqzoom01').click(function(event) {
					$('.View_Img01>img').attr('src',bigimage);
					$('.View_Img01').show();
					$('.gray').show();
				});
				// $(".qck_view").offset().top-$("body").scrollTop();

				console.log($(window).height);

				xpos=mouse.x-$("div.zoomMask").width()/2;
				ypos=mouse.y-$("div.zoomMask").height()/2;
				xposs=mouse.x-$("div.zoomMask").width()/2-imageLeft;
				yposs=mouse.y-$("div.zoomMask").height()/2-imageTop;
				xpos=(mouse.x-$("div.zoomMask").width()/2<imageLeft)?imageLeft:(mouse.x+$("div.zoomMask").width()/2>imageWidth+imageLeft)?(imageWidth+imageLeft-$("div.zoomMask").width()):xpos;
				ypos=(mouse.y-$("div.zoomMask").height()/2<imageTop)?imageTop:(mouse.y+$("div.zoomMask").height()/2>imageHeight+imageTop)?(imageHeight+imageTop-$("div.zoomMask").height()):ypos;
				$("div.zoomMask").css({top:ypos,left:xpos});
				$("div.zoomDiv").get(0).scrollLeft=xposs*scalex;
				$("div.zoomDiv").get(0).scrollTop=yposs*scaley;
			});
		});
		function mouseOutImage(){
			$(self).attr("alt",noalt);
			$(document.body).unbind("mousemove");
			$("div.zoomMask").remove();
			$("div.zoomDiv").remove();
		}
		count=0;
		if(settings.preload){
			$('body').append("<div style='display:none;' class='jqPreload"+count+"'></div>");
			$(this).each(function(){
				var imagetopreload=$(this).attr("rel");
				var content=jQuery('div.jqPreload'+count+'').html();
				jQuery('div.jqPreload'+count+'').html(content+'<img src=\"'+imagetopreload+'\">');
			});
		}
	}
})(jQuery);
function MouseEvent(e){
	this.x=e.pageX;
	this.y=e.pageY;
}