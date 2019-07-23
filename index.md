---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
date: 2019-07-09 01:28:37 +0900
last_modified_at: 2019-07-12 01:28:37 +0900
---


<body>
<!--
	<div id="loader-bg">
		<div id="loader">
			<img src="img/img-loading-3.png" width="50" height="50" alt="Now Loading..." /><br>
			<img src="img/img-loading.gif" width="200" height="200" alt="Now Loading..." />
			<p>Now Loading...</p>
		</div>
	</div>
	-->
	<div class="container-original">

		<!-- side div -->
		<div class="side">
			<!-- Navigation -->
  			<header class="">
				<div class="header-logo-div">
					<div class="logo_favicon">
	  					<a href=""><img src="favicon.png" alt="Shoya Iwanami" /></a>
					</div>
					<a href=""><h4 class="logo-original">ShoyaIWANAMI.com</h4></a>
				</div>
				<div class="nav-div">
					<nav>
      					<ul>
        					<a href="#hero">
								<li>
									<div class="nav-icon"><p class="p_top"></p></div>
									<h4>TOP</h4>
									<div class="nav-text">TOP<br><span class="nav-list-smalltext">トップ</span></div>
								</li>
							</a>
							<a href="#about">
								<li>
									<div class="nav-icon"><p class="p_about"></p></div>
									<h4>ABOUT</h4>
									<div class="nav-text">ABOUT<br><span class="nav-list-smalltext">来歴</span></div>
								</li>
							</a>
							<a href="#news">
								<li>
									<div class="nav-icon"><p class="p_news"></p></div>
									<h4>NEWS</h4>
									<div class="nav-text">NEWS<br><span class="nav-list-smalltext">新着情報</span></div>
								</li>
							</a>
							<a href="#achievements">
								<li>
									<div class="nav-icon"><p class="p_achievements"></p></div>
									<h4>ACHIEVEMENTS</h4>
									<div class="nav-text">ACHIEVEMENTS<br><span class="nav-list-smalltext">業績など</span></div>
								</li>
							</a>
							<a href="#contact">
								<li>
									<div class="nav-icon"><p class="p_contact"></p></div>
									<h4>CONTACT</h4>
									<div class="nav-text">CONTACT<br><span class="nav-list-smalltext">連絡先・リンク</span></div>
								</li>
							</a>
      					</ul>
    				</nav>
				</div>
  			</header>
		</div><!-- //side div -->

		<!-- Hero Section -->
  		<section class="hero" id="hero">
		<div class="blank_box"></div>
			<div class="hero_box">
				<div class="hero_inline_box">
					<p class="tagline"><span class="tagline_blue">ShoyaIWANAMI.com</span></p>
					<h2 class="hero_header">Welcome to<br> <span class="light">Shoya Iwanami</span>'s web page</h2>
    				<p class="tagline">A researcher of <span class="tagline_blue">M</span>athematical <span class="tagline_blue">B</span>iology</p>
				</div>
			</div>
		</section><!-- //Hero Section -->

		<!-- main div -->
		<div class="main">
  			<!-- About Section -->
  			<section class="about" id="about">
    			<h2 class="hidden">About</h2>
    			<div class="about_column-white">
					<div class="about_column">
						<h4>BASIC INFORMATION</h4>
						<p>岩波翔也 / Shoya Iwanami<br>
							一貫制博士課程4年<br>
							九州大学数理生物学研究室<br>
							Mathematical biology laboratory, Kyushu University<br>
							九州大学大学院システム生命科学府<br>
							Graduate School of Systems Life Sciences, Kyushu University
						</p>
						<h4>EDUCATION</h4>
						<table>
							<tr>
								<th>2015.4</th>
								<td>九州大学数理生物学研究室配属</td>
							</tr>
							<tr>
								<th>2016.3</th>
								<td>九州大学理学部生物学科卒業</td>
							</tr>
							<tr>
								<th>2016.4</th>
								<td>九州大学大学院システム生命科学府入学</td>
							</tr>
						</table>
						<h4>PROFESSIONAL EXPERIENCE</h4>
						<table>
							<tr>
								<th>2016.4-2018.3</th>
								<td>九州大学理学部ティーチング・アシスタント（数理生物学演習）</td>
							</tr>
							<tr>
								<th>2019.4-2021.3</th>
								<td>日本学術振興会特別研究員DC2</td>
							</tr>
						</table>
					</div>
				</div>
    			<!--<p class="text_column">1日一更新を目標に頑張ります </p>-->
  			</section>
  			<!-- Stats Gallery Section -->
  			<div class="gallery">
    			<div class="thumbnail">
      				<p class="stats">6</p>
      				<h4>Publications</h4>
      				<p>英語/日本語学術論文・総説</p>
    			</div>
    			<div class="thumbnail">
      				<p class="stats">26</p>
      				<h4>Presentations</h4>
      				<p>国際/国内学術会議での発表</p>
    			</div>
    			<div class="thumbnail">
      				<p class="stats">1</p>
      				<h4>Competitive research funds</h4>
      				<p>現在/過去の競争的獲得資金</p>
    			</div>
    			<div class="thumbnail">
      				<p class="stats">2</p>
      				<h4>Workshop and Symposium</h4>
      				<p>ワークショップやシンポジウムの開催</p>
    			</div>
  			</div>
  			<!-- news Section -->
  			{% include selectednews.html %}

			<div class="achievements" id="achievements">
				<div class="publications">
					<h2>Achievements</h2>
					{% include selectedachievements.html %}
				</div>
			</div>
				<!-- More Info Section -->
		{% include footer.html %}
			</div>

		<div style="height: 130px; background-color: #717070;"></div>
		<div id="page_top"><a href="#"></a></div>
		<div id="about_button"><a href="#about"></a></div>
		<div id="contact_button"><a href="#contact"></a></div>

	</div>
	<!-- Main Container -->

<!-- Main Container Ends -->
</body>
