/**
 * Created by Cooper on 2017/09/22.
 */
let _ = require('lodash');
let cheerio = require('cheerio');

let body = `
<!DOCTYPE HTML>

<html>
<head>
	<script async="async" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script>
  		(adsbygoogle = window.adsbygoogle || []).push({
    		google_ad_client: "ca-pub-9621763795680386",
    		enable_page_level_ads: true
  		});
	</script>
    <title>虫代理-专业免费代理IP库</title>
    <meta name="baidu-site-verification" content="GYDmKlnTbf" />
    <meta name="baidu_union_verify" content="1c5cab16827f70f1cf2e5840aabfe255" />
    <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="keywords" content="免费HTTP代理,免费高匿代理,免费匿名代理,隐藏IP,免费代理ip,国外代理ip,国外代理ip,高匿代理ip,可用代理IP,专业代理IP,HTTP代理IP" />
    <meta name="description" content="专业提供免费高匿HTTP代理、HTTPS代理、国内外高匿可用代理,IP时时更新，提供API接口" />
    <link rel="shortcut icon" type="image/png" href="img/favicon.png" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/layer.css" />
    <link rel="stylesheet" href="css/animate.min.css" />
    <script src="js/jquery-1.11.3.min.js"></script>
</head>
<body>
<div class="container">
	<div>
	<div class="header" style="margin-bottom:0">
		<div class="header-left">
			<a href="/"><img src="img/logo.png" alt="logo" /></a>
		</div>
		<div class="header-middle">
			<div class="header-item" id="index">
				<a href="/">首页</a>
			</div>
			<div class="header-item" id="gnpt">
				<a href="/gnpt">国内普通代理</a>
			</div>
			<div class="header-item" id="gngn">
				<a href="/gngn">国内高匿代理</a>
			</div>
			<div class="header-item" id="api">
				<a href="/api">API接口</a>
			</div>
			<div class="header-item" id="help">
				<a href="/help">帮助中心</a>
			</div>
		</div>
		<div class="header-right">
		<!-- 
			<div class="login" onclick="login()">登录</div>
			<span> | </span>
			<div class="register" onclick="register()">注册</div>
		 -->	
		</div>
	</div>
	
	<script>
		$("#"+'index').addClass("active");
	</script>

</div>
	
	<div id="newIndex">
		<div class="bottom">
			<div class="container itemlists"></div>
		</div>	
	</div>

	<div class="main-title">
		<div style="text-align:right;margin-top:14px;">
		<span style="font-size:22px; float: left; color:#333;">最新 20个 免费代理IP（当前可用&nbsp;<font style="color: red;"><span>6115</span></font>&nbsp;个，数据<span>1</span>分前更新，每20分钟更新一次。）</span>
		<span style="display: inline-block; ">
			<a href="/api" style="color: red;">创建免费API接口</a>
		</span>
		</div>
	</div>

	<div class="main">
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 style="text-align:center;">免费高速HTTP代理IP列表（<span>2017-09-22</span>）</h3>
			</div>
			<div id="table1">
				<table class="table table-striped table-bordered">
					<thead>
					<tr>
						<td>IP</td>
						<td>PORT</td>
						<td>匿名度</td>
						<td>类型</td>
						<td>get/post支持</td>
						<td>位置</td>
						<td>响应速度(秒)</td>
						<td>最后验证时间</td>
					</tr>
					</thead>
					<tbody id="target">   
					<tr>
      				    <td>58.20.246.206</td>
                  		<td>53281</td>
                  		<td>透明</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 湖南益阳</td>
                  		<td>4.75秒</td>
                  		<td>2017-09-22 08:50</td>
   					</tr>   
					<tr>
      				    <td>218.106.98.166</td>
                  		<td>53281</td>
                  		<td>透明</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 江苏扬州</td>
                  		<td>6.837秒</td>
                  		<td>2017-09-22 09:33</td>
   					</tr>   
					<tr>
      				    <td>101.231.182.6</td>
                  		<td>8080</td>
                  		<td>高匿</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 上海</td>
                  		<td>1.82秒</td>
                  		<td>2017-09-22 12:44</td>
   					</tr>   
					<tr>
      				    <td>117.64.239.246</td>
                  		<td>808</td>
                  		<td>高匿</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 安徽合肥</td>
                  		<td>0.183秒</td>
                  		<td>2017-09-22 13:02</td>
   					</tr>   
					<tr>
      				    <td>36.102.62.45</td>
                  		<td>80</td>
                  		<td>高匿</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 浙江</td>
                  		<td>0.11秒</td>
                  		<td>2017-09-22 13:02</td>
   					</tr>   
					<tr>
      				    <td>183.159.2.87</td>
                  		<td>80</td>
                  		<td>高匿</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 浙江杭州</td>
                  		<td>3.068秒</td>
                  		<td>2017-09-22 13:22</td>
   					</tr>   
					<tr>
      				    <td>120.132.71.212</td>
                  		<td>80</td>
                  		<td>透明</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 北京</td>
                  		<td>5.573秒</td>
                  		<td>2017-09-22 13:51</td>
   					</tr>   
					<tr>
      				    <td>139.129.166.68</td>
                  		<td>3128</td>
                  		<td>透明</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 北京</td>
                  		<td>0.28秒</td>
                  		<td>2017-09-22 14:01</td>
   					</tr>   
					<tr>
      				    <td>121.31.101.149</td>
                  		<td>8123</td>
                  		<td>高匿</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 广西防城港</td>
                  		<td>6.022秒</td>
                  		<td>2017-09-22 14:01</td>
   					</tr>   
					<tr>
      				    <td>101.68.73.54</td>
                  		<td>53281</td>
                  		<td>高匿</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 浙江杭州</td>
                  		<td>0.218秒</td>
                  		<td>2017-09-22 14:03</td>
   					</tr>   
					<tr>
      				    <td>118.178.124.33</td>
                  		<td>3128</td>
                  		<td>透明</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 </td>
                  		<td>0.142秒</td>
                  		<td>2017-09-22 14:10</td>
   					</tr>   
					<tr>
      				    <td>114.247.209.130</td>
                  		<td>8080</td>
                  		<td>透明</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 北京</td>
                  		<td>0.496秒</td>
                  		<td>2017-09-22 14:10</td>
   					</tr>   
					<tr>
      				    <td>180.168.179.193</td>
                  		<td>8080</td>
                  		<td>透明</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 上海</td>
                  		<td>0.184秒</td>
                  		<td>2017-09-22 14:11</td>
   					</tr>   
					<tr>
      				    <td>61.135.217.7</td>
                  		<td>80</td>
                  		<td>高匿</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 北京</td>
                  		<td>0.324秒</td>
                  		<td>2017-09-22 14:11</td>
   					</tr>   
					<tr>
      				    <td>183.18.165.34</td>
                  		<td>3128</td>
                  		<td>透明</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 广东肇庆</td>
                  		<td>0.185秒</td>
                  		<td>2017-09-22 14:11</td>
   					</tr>   
					<tr>
      				    <td>122.72.32.74</td>
                  		<td>80</td>
                  		<td>高匿</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 甘肃</td>
                  		<td>0.412秒</td>
                  		<td>2017-09-22 14:11</td>
   					</tr>   
					<tr>
      				    <td>122.72.32.88</td>
                  		<td>80</td>
                  		<td>高匿</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 甘肃</td>
                  		<td>0.41秒</td>
                  		<td>2017-09-22 14:12</td>
   					</tr>   
					<tr>
      				    <td>117.78.37.198</td>
                  		<td>8000</td>
                  		<td>高匿</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 辽宁鞍山</td>
                  		<td>0.032秒</td>
                  		<td>2017-09-22 14:13</td>
   					</tr>   
					<tr>
      				    <td>221.7.49.209</td>
                  		<td>53281</td>
                  		<td>透明</td>
                  		<td>HTTP</td>
                  		<td>GET/POST</td>
                  		<td>中国 甘肃天水</td>
                  		<td>4.608秒</td>
                  		<td>2017-09-22 14:13</td>
   					</tr>   
					<tr>
      				    <td>180.175.120.26</td>
                  		<td>53281</td>
                  		<td>高匿</td>
                  		<td>HTTPS</td>
                  		<td>GET/POST</td>
                  		<td>中国 上海</td>
                  		<td>0.881秒</td>
                  		<td>2017-09-22 05:22</td>
   					</tr>
              </tbody>
             </table>
           </div>
         </div>
         <p class="info-p">注 : 表中响应速度是中国测速服务器的测速数据，仅供参考。响应速度根据您机器所在的地理位置不同而有差异。</p>
      </div>
      
	<div>
	<div class="footer">
		<div class="footer-info">
			<p>
				<span>Copyright © 2017-2019 Suyee技术团队版权所有  备案号：<a href="http://www.miitbeian.gov.cn" target="_blank" style="color:#868686">闽ICP备17013056号-1</a></span>
				<p style="margin-top:20px;">声明：本站资源仅限用来计算机技术学习及大数据抓取、爬虫研究等合法行为。</p>
				<p style="margin-top:20px;">声明：利用本站资源从事任何违反中国法律法规的行为，由此引起的一切后果与本站无关。</p>
			</p>
		</div>
	</div>	
</div>
</div>
</body>
</html>`;

let $ = cheerio.load(body);
let proxys = []
// $("p[style='display: none;']").remove();
// $("p[style='display:none;']").remove();
$('#target').find('tr').each(function (i, e) {
    proxys.push($(e).find('td').eq(3).text() + '://'
        + $(e).find('td').eq(0).text() + ':'
        + $(e).find('td').eq(1).text());
});

console.log(proxys);

