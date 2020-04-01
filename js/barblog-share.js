/** Barblog分享
 *  author: Bar blog
    Create: 2019-05-23 19:05:21
*/

var Barblogshare = {

    InitWeixin: function (options) {
        wx.config({
			debug: false,            
			appId: '',
			timestamp: '',
			nonceStr: '',
			signature: '',
			jsApiList: [
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo' 
			]
        });
        wx.ready(function () {
			//分享给朋友
			wx.onMenuShareAppMessage({
				title: options.title,
			  	desc: options.subtitle,
			 	link: options.link,
			  	imgUrl: options.imgUrl
			});
			//分享到朋友圈
			wx.onMenuShareTimeline({
                title: options.title,
                desc: options.subtitle,
               link: options.link,
                imgUrl: options.imgUrl
			});
			//分享到QQ
			wx.onMenuShareQQ({
				title: options.title,
			  	desc: options.subtitle,
			 	link: options.link,
			  	imgUrl: options.imgUrl
			});
			//分享到微博
			wx.onMenuShareWeibo({
				title: options.title,
			  	desc: options.subtitle,
			 	link: options.link,
			  	imgUrl: options.imgUrl
			});
	  	});
    }
}
