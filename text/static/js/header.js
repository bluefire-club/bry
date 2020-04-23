Vue.component('header-item', {
	template: `
		<div class="bry_header">
			<!-- 导航条 -->
			<div class="bry_header_nav">
				<ul class="inner clearfix">
					<li><a href="/view/index.html">首页</a></li>
					<li :class="{nav_active: getUrl('bry_information')}"><a href="/view/bry_information.html">资讯</a></li>
					<li :class="{nav_active: getUrl('bry_Movies')}"><a href="/view/bry_Movies.html">视频</a>
						<ul>
							<li><a href="/view/bry_Movies.html">影视</a></li>
							<li><a href="/view/bry_Movies_Open_class.html">公开课</a></li>
							<li><a href="/view/bry_Movies_special.html">专题</a></li>
							<li><a href="/view/bry_Movies_activity.html">活动</a></li>
							<li><a href="/view/bry_Movies_Lecture_Hall.html">大讲堂</a></li>
							<li><a href="/view/bry_photograph.html">美拍</a></li>
						</ul>
					</li>
					<li :class="{nav_active: getUrl('bry_audio')}"><a href="/view/bry_audioFrequency.html">音频</a></li>
					<li :class="{nav_active: getUrl('bry_forum')}"><a href="/view/bry_forum.html">论坛</a></li>
					<li :class="{nav_active: getUrl('encyc')}"><a href="/view/encyclopedias.html">百科</a></li>
					<li :class="{nav_active: getUrl('book')}"><a href="/view/book.html">电子书</a></li>
				</ul>
			</div>
			<!-- /导航条 -->
			<div class="bry_header_wrap">
				<div class="inner clearfix">
					<!-- logo -->
					<div class="bry_logo fl">
						<a href="index.html"><img src="/assets/icon/header/logo.png"></a>
					</div>
					<!-- 搜索框 -->
					<div class="bry_search fl">
						<input class="fl" type="text" placeholder="搜索 新闻 视频">
						<button class="fr bry_search_btn">搜 索</button>
					</div>

					<div class="bry_header_share fl">
						<ul class="clearfix">
							<li class="fl">
								<img src="/assets/icon/header/share.png">
								<div>分享</div>
							</li>
							<li class="fl">
								<img src="/assets/icon/header/msg.png">
								<div>消息</div>
							</li>
							<li class="fl">
								<img src="/assets/icon/header/seed.png">
								<div>听过</div>
							</li>
							<li class="fl">
								<img src="/assets/icon/header/login.png">
								<div>Think</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	`,
	props: [''],
	methods: {
		getUrl(name) {
			return window.location.href.indexOf(name) != -1
		}	
	}
});