var page = require('webpage').create();
page.open('<!DOCTYPE html>
<html lang="en" xmlns:m="http://schemas.microsoft.com/office/2004/12/omml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!-- Facebook Pixel Code --><script>
	  !function(f,b,e,v,n,t,s)
	  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	  n.queue=[];t=b.createElement(e);t.async=!0;
	  t.src=v;s=b.getElementsByTagName(e)[0];
	  s.parentNode.insertBefore(t,s)}(window, document,'script',
	  'https://connect.facebook.net/en_US/fbevents.js');
	  fbq('init', '231768217940949');
	  fbq('track', 'PageView');
	</script><noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=231768217940949&amp;ev=PageView&amp;noscript=1"></noscript>
<!-- End Facebook Pixel Code --><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=11">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>COVID-19 Locations &amp; Demographics - LA County Department of Public Health</title>
<meta name="Microsoft Border" content="none, default">
</head>
<body>

    <!-- CSS and JS section:  Required : Please don't delete -->
    <link rel="shortcut icon" href="http://www.publichealth.lacounty.gov/images/2008/PHlogo.ico" type="image/x-icon">
<link rel="stylesheet" type="text/css" href="http://www.publichealth.lacounty.gov/css/dphmain.css">
<link href="http://www.publichealth.lacounty.gov/css/dphmaster.css" rel="alternate stylesheet" type="text/css" title="normal">
<link href="http://www.publichealth.lacounty.gov/css/dphmastermedium.css" rel="alternate stylesheet" type="text/css" title="large">
<link href="http://www.publichealth.lacounty.gov/css/dphmasterlarge.css" rel="alternate stylesheet" type="text/css" title="largest">
<script type="text/javascript" src="http://www.publichealth.lacounty.gov/JS/styleswitcher.js"></script><script src="http://www.publichealth.lacounty.gov/JS/main.js" language="javascript"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="css/bootstrap-grid.min.css">
<link rel="stylesheet" href="css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=News+Cycle:400,700&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/cv-style-v2.css">
<script type="text/javascript" src="http://publichealth.lacounty.gov/js/jquery-1.4.2.js"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><script type="text/javascript" src="js/bootstrap.bundle.min.js"></script><script type="text/javascript" src="js/casecounter.js"></script><link rel="stylesheet" type="text/css" href="StickyTableHeaders/css/normalize.css">
<link rel="stylesheet" type="text/css" href="StickyTableHeaders/css/component.css">
<!--[if IE]>
  	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]--><script type="text/javascript">
				$( document ).ready(function() {
				var now = new Date();
				var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
				var lastSunday = new Date(today.setDate(today.getDate()-today.getDay()));
				
				var dtft=((lastSunday.getMonth() > 8) ? (lastSunday.getMonth() + 1) : ('0' + (lastSunday.getMonth() + 1))) + '/' + ((lastSunday.getDate() > 9) ? lastSunday.getDate() : ('0' + lastSunday.getDate())) + '/' + lastSunday.getFullYear();
				
				//$('#now').html(now .toString());
				$('#lastSunday').html(dtft.toString());
				});
	</script><!-- end of CSS and JS Section --><!-- NAV --><div class="media-nav-div">
        <!--webbot bot="Include" U-Include="../mediahead-covid19.htm" TAG="BODY" startspan -->
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script><style>

.dropdown-toggle::after {
  border: none!important;
  font: normal normal normal 20px/1 FontAwesome;
  content: "\f107"!important; 
  vertical-align: 0; 
  text-decoration:none;
  font-weight: bold;
}

li.dropdown.show a.dropdown-toggle::after {
  content: "\f106"!important 
}


/* Nav sub Nenu for Mobile */
a .collapseMainSubMenu::before {font-family: 'FontAwesome'; content: "\f106"; font-weight: bold;}
a.collapsed .collapseMainSubMenu::before {font-family: 'FontAwesome'; content: "\f105"; font-weight: bold;}

</style>
<div id="header">
	
		<!-- DESKTOP NAVIGATION MENU -->
		<div id="desktop-menu">
		
			<!-- end of indexDivMedia -->
			<div class="indexDivMedia">
				<div class="colTranslate">
					
					<!-- Google Translate -->
					<div class="colTranslate">
						<div id="google_translate_wrapper">
        					<a href="#" id="google_translate_element-show" class="translateBtn" onclick="showTranslate('google_translate_element');return false;"><i class="fa fa-globe fa-lg" aria-hidden="true"></i> Translate</a>
							<div id="google_translate_element" class="opentranslate">
								<div align="right">
 									<a href="#" id="google_translate_element-hide" class="translateBox" onclick="hideTranslate('google_translate_element');return false;"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
   								</div>
   							</div>
						</div>
					</div>
					<!-- End Google Translate -->
				</div>

				<div class="colAtoZ1"><span class="contTitle">A-Z Index</span></div>

				<div class="colAtoZ2">
					<a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=A">A</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=B">B</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=C">C</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=D">D</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=E">E</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=F">F</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=G">G</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=H">H</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=I">I</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=J">J</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=K">K</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=L">L</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=M">M</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=N">N</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=O">O</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=P">P</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=Q">Q</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=R">R</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=S">S</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=T">T</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=U">U</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=V">V</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=W">W</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=X">X</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=Y">Y</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=Z">Z</a><a class="aTozH3" href="http://publichealth.lacounty.gov/phcommon/public/AtoZTopics/AtoZpubDisplayAll.cfm?alpha=ALL">ALL</a>
				</div>

				<div class="colFontSize" align="right">
					<div class="globalNav">
						<a href="http://publichealth.lacounty.gov/ADA.htm" style="text-decoration:none"><img width="20" src="http://publichealth.lacounty.gov/images/icons/ADA-disabilities.png">  </a>Font Size |
						<a href="#" onclick="setActiveStyleSheet('normal');return false;" onkeypress="setActiveStyleSheetKeyPress('normal');return false;"><strong><font size="1" face="Arial Narrow">A</font></strong></a>
						<a href="#" onclick="setActiveStyleSheet('large');return false;" onkeypress="setActiveStyleSheetKeyPress('large');return false;"><strong><font size="2" face="Arial Narrow">A</font></strong></a>
						<a href="#" onclick="setActiveStyleSheet('largest');return false;" onkeypress="setActiveStyleSheetKeyPress('largest');return false;"><strong><font size="3" face="Arial Narrow">A</font></strong></a>
					</div>
				</div>
			</div>
			<!-- end of indexDivMedia -->

			<!-- globalNavGreyDivMedia -->
			<div class="globalNavGreyDivMedia">
				<div class="colGrey1Media">
					<a href="http://publichealth.lacounty.gov/index.htm"><img src="http://www.publichealth.lacounty.gov/images/2016/PublicHealthHE-Blue.gif" alt="LA County" width="115" border="0"></a>
				</div>

				<div class="colGrey2">
					<form name="gosearch_top" action="http://publichealth.lacounty.gov/gsearch/">
						<input type="hidden" name="cof" value="FORID:11"><input type="hidden" name="cx" value="012881317483563061371:vdhgk7yx4bk"><input name="q" aria-label="search" size="12" title="Enter text here to search"><input type="submit" aria-label="search button" name="sa" value="" class="googleSearchButton" title="Enter text in the search box and press go button to search"><script src="http://www.google.com/coop/cse/brand?form=gosearch_top"></script>
</form>
				</div>

				<div class="colGrey4Media">
					<div class="globalNavGreyMedia"><a href="http://www.publichealth.lacounty.gov/media/index.htm">Communications &amp; Public Affairs</a></div>
				</div>

				<div class="colGrey3">
					<a href="https://www.instagram.com/lapublichealth/"><img src="http://www.publichealth.lacounty.gov/images/2016/instagram.gif" alt="Instagram" width="30" height="30" border="0"></a>
					<a href="https://www.facebook.com/lapublichealth"><img src="http://www.publichealth.lacounty.gov/images/2016/facebook.gif" alt="Facebook" width="30" height="30" border="0"></a>
					<a href="https://twitter.com/lapublichealth"><img src="http://www.publichealth.lacounty.gov/images/2016/twitter.gif" alt="Twitter" width="30" height="30" border="0"></a>
					<a href="https://www.youtube.com/user/lapublichealth"><img src="http://www.publichealth.lacounty.gov/images/2016/youtube.gif" alt="Youtube" width="30" height="30" border="0"></a>
				</div>
			</div>
			<!-- end of globalNavGreyDivMedia -->
			
			<!-- globalNavGreyBlueDivMedia -->
			<div class="container-fluid site-title p-0">
				<div class="container-xl">
					<div class="row blue">
						<div class="col p-0">
							<nav class="navbar navbar-expand-md yamm p-0"><div id="navbar-collapse-grid" class="navbar-collapse collapse">
									<ul class="nav navbar-nav nav-justified w-100">
<li class="nav-item dropdown pb-0">
<a href="#" data-toggle="dropdown" class="nav-link text-white font-weight-bold dropdown-toggle" aria-expanded="false">COVID-19</a>
											<div class="dropdown-menu w-100 p-0" style="border-top: 1px solid #fff; background-image: linear-gradient(to right, #000 , #002454); background-repeat: no-repeat; background-position: left}">
												<div class="row m-0 mt-3 mb-3">
													<div class="col-lg-3 d-none d-lg-block col-image">
														<img class="img-fluid" id="featured1" src="images/menu1-thumb0.png">
</div>
													<div class="col-lg-3 col-md-12 col-primary-links">
														<ul class="list-unstyled m-lg-0">
<li class="p-0"><a class="dropdown-item secondNavLinks" onmouseover="menu1Img1(this)" onmouseout="menu1outImg(this)" href="index.htm">COVID-19 Homepage</a></li>

															<li class="p-0"><a class="dropdown-item secondNavLinks" onmouseover="menu1Img2(this)" onmouseout="menu1outImg(this)" href="reopening-la.htm#orders">Health Officer Orders</a></li>

															<li class="p-0"><a class="dropdown-item secondNavLinks" onmouseover="menu1Img3(this)" onmouseout="menu1outImg(this)" href="about-covid.htm">About COVID-19</a></li>

															<li class="p-0"><a class="dropdown-item secondNavLinks" onmouseover="menu1Img4(this)" onmouseout="menu1outImg(this)" href="data">COVID-19 Data Page</a></li>
														</ul>
</div>
													<div class="col-lg-6 col-md-12 col-secondary-links">
														<ul class="list-unstyled">
<li class="p-0"><a href="guidances.htm" class="dropdown-item">Guidances</a></li>

															<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/masks/" class="dropdown-item">Masks</a></li>

															<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/reducingrisk/" class="dropdown-item">Reduce Your Risk</a></li>

															<li class="p-0"><a href="traveladvisory.htm" class="dropdown-item">Travel Advisory</a></li>

															<li class="p-0"><a href="locations.htm" class="dropdown-item">Locations &amp; Demographics</a></li>

															<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/covidisolation/" class="dropdown-item">Home Isolation</a></li>

															<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/covidquarantine/" class="dropdown-item">Home Quarantine</a></li>

															<li class="p-0"><a href="index.htm#news" class="dropdown-item">News Updates</a></li>
														</ul>
</div>
												</div>
											</div>
										</li>

										<li class="nav-item dropdown pb-0">
<a href="#" data-toggle="dropdown" class="nav-link text-white font-weight-bold dropdown-toggle" aria-expanded="false">Vaccine</a>
											<div class="dropdown-menu w-100 p-0" style="border-top: 1px solid #fff; background-image: linear-gradient(to right, #061f5c , #ae3b72); background-repeat: no-repeat; background-position: left}">
												<div class="row m-0 mt-3 mb-3">
													<div class="col-lg-3 d-none d-lg-block col-image">
														<img class="img-fluid" id="featured2" src="images/menu2-thumb0.png">
</div>
													<div class="col-lg-3 col-md-12 col-primary-links">
														<ul class="list-unstyled m-lg-0">
<li class="p-0"><a class="dropdown-item secondNavLinks" onmouseover="menu2Img1(this)" onmouseout="menu2outImg(this)" href="vaccine">Vaccine Homepage</a></li>

															<li class="p-0"><a class="dropdown-item secondNavLinks" onmouseover="menu2Img2(this)" onmouseout="menu2outImg(this)" href="vaccine/index-es.htm">Vacuna página web</a></li>

															<li class="p-0 d-none d-xs-none d-sm-none d-md-none d-lg-block"><br></li>

															<li class="p-0"><a class="dropdown-item secondNavLinks" onmouseover="menu2Img3(this)" onmouseout="menu2outImg(this)" href="http://publichealth.lacounty.gov/acd/ncorona2019/vaccine/hcwsignup/">How to Get Vaccinated</a></li>

															<li class="p-0"><a class="dropdown-item secondNavLinks" onmouseover="menu2Img4(this)" onmouseout="menu2outImg(this)" href="http://publichealth.lacounty.gov/acd/ncorona2019/vaccine/hcwsignup/Spanish.htm">Cómo vacunarse</a></li>
														</ul>
</div>
													<div class="col-lg-6 col-md-12 col-secondary-links">
														<ul class="list-unstyled">
<li class="p-0"><a href="vaccine/index.htm#FAQs" class="dropdown-item">FAQs</a></li>

															<li class="p-0"><a href="vaccine/index-es.htm#FAQs" class="dropdown-item">Preguntas más frecuentes</a></li>

															<li class="p-0"><a href="vaccine/resources.htm#GeneralInfo" class="dropdown-item">General Information</a></li>

															<li class="p-0"><a href="vaccine/resources.htm#Misinformation" class="dropdown-item">Misinformation</a></li>

															<li class="p-0"><a href="vaccine/resources.htm#GetVaccine" class="dropdown-item">Getting the Vaccine</a></li>

															<li class="p-0"><a href="vaccine/resources.htm#FAQs" class="dropdown-item">Vaccine Safety</a></li>

															<li class="p-0"><a href="vaccine/resources.htm" class="dropdown-item">Vaccine Information &amp;<br>Community Resources</a></li>

															<li class="p-0"><a href="vaccine/vaccine-dashboard.htm" class="dropdown-item">Vaccine Data Dashboard</a></li>

															<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/vaccine/vaccinationrecords/" class="dropdown-item">Vaccination Records</a></li>
														</ul>
</div>
												</div>
											</div>
										</li>

										<li class="nav-item dropdown pb-0">
<a href="#" data-toggle="dropdown" class="nav-link text-white font-weight-bold dropdown-toggle" aria-expanded="false">Reopening LA County</a>
											<div class="dropdown-menu w-100 p-0" style="border-top: 1px solid #fff; background-image: linear-gradient(to right, #002454 , #007481); background-repeat: no-repeat; background-position: left}">
												<div class="row m-0 mt-3 mb-3">
													<div class="col-lg-3 d-none d-lg-block col-image">
														<img class="img-fluid" id="featured3" src="images/menu3-thumb0.png">
</div>
													<div class="col-lg-3 col-md-12 col-primary-links">
														<ul class="list-unstyled m-lg-0">
<li class="p-0"><a class="dropdown-item secondNavLinks" onmouseover="menu3Img1(this)" onmouseout="menu3outImg(this)" href="reopening-la.htm">Reopening LA County<br> Homepage</a></li>

															<li class="p-0"><a class="dropdown-item secondNavLinks" onmouseover="menu3Img2(this)" onmouseout="menu3outImg(this)" href="http://publichealth.lacounty.gov/acd/ncorona2019/BestPractices/">Best Practices for<br>Businesses</a></li>

															<li class="p-0"><a class="dropdown-item secondNavLinks" onmouseover="menu3Img3(this)" onmouseout="menu3outImg(this)" href="data/reopening-dashboard.htm">Reopening Dashboard</a></li>
														</ul>
</div>
													<div class="col-lg-6 col-md-12 col-secondary-links">
														<ul class="list-unstyled">
<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/workplaceresponse/" class="dropdown-item">Responding to COVID-19<br> in the Workplace</a></li>

															<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/masks/" class="dropdown-item">Masks</a></li>

															<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/reducingrisk/" class="dropdown-item">Reducing Risk</a></li>

															<li class="p-0"><a href="traveladvisory.htm" class="dropdown-item">Travel Advisory</a></li>

															<li class="p-0"><a href="reopening-la.htm#hoo-appendices" class="dropdown-item">Health Officer<br>Order Appendices</a></li>

															<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/covidisolation/" class="dropdown-item">Home Isolation</a></li>

															<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/covidquarantine/" class="dropdown-item">Home Quarantine</a></li>

															<li class="p-0"><a href="index.htm#news" class="dropdown-item">News Updates</a></li>
														</ul>
</div>
												</div>
											</div>
										</li>
									</ul>
</div>
							</nav>
</div>
					</div>
				</div>
			</div>
			<!-- end of globalNavGreyBlueDivMedia -->
		</div>
		<!-- end of DESKTOP NAVIGATION MENU -->
			
		<!-- MOBILE MENU ELEMENTS -->
		<div id="mobile-nav-div" class="row">
			<div class="col-2 p-0" style="align-items: center; display: grid">
				<p id="mobile-icon" class="h1"><img class="cursor" src="images/icon-menu.png" alt="menu icon"></p>
			</div>
			<!--<div class="col-2 p-0 center" style="align-items: center; display: grid">
				<!-- Google Translate --
				<div class="colTranslate" style="float: left">
					<div id="google_translate_wrapper">
    					<a href="#" id="google_translate_element-show" class="translateBtn"  onclick="showTranslate('google_translate_element');return false;"><i class="fa fa-globe fa-lg" style="font-size: 35px" aria-hidden="true"></i><span class="d-none d-sm-none d-md-block">&nbsp;Translate</span></a>
						<div id="google_translate_element" class="opentranslate">
							<div align="right">
								<a href="#" id="google_translate_element-hide" class="translateBox" onclick="hideTranslate('google_translate_element');return false;"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
				</div>
				<!-- End Google Translate --
			</div>-->
			<div class="col-4 p-0 center" style="align-items: center; display: grid">
				<!-- ADA -->
				<div class="colFontSize">
					<div class="globalNav">
						<a href="#" onclick="setActiveStyleSheet('normal');return false;" onkeypress="setActiveStyleSheetKeyPress('normal');return false;"><strong><font size="3" face="Arial Narrow">A</font></strong></a>
						<a href="#" onclick="setActiveStyleSheet('large');return false;" onkeypress="setActiveStyleSheetKeyPress('large');return false;"><strong><font size="4" face="Arial Narrow">A</font></strong></a>
						<a href="#" onclick="setActiveStyleSheet('largest');return false;" onkeypress="setActiveStyleSheetKeyPress('largest');return false;"><strong><font size="5" face="Arial Narrow">A</font></strong></a>
					</div>
				</div>
				<!-- ADA -->
			</div>
			<div class="col-6 p-0" style="align-items: center; display: grid">
				<div class="right">
<!--CHANGED TO RIGHT ALIGN-->
					<a href="http://publichealth.lacounty.gov/index.htm"><img class="dph-logo dontprint" src="http://www.publichealth.lacounty.gov/images/2016/PublicHealthHE-Blue.gif" alt="Department of Public Health logo"></a>
				</div>
			</div>
		</div>
		<!-- end of MOBILE MENU ELEMENTS -->
		
	</div>
<!-- end of HEADER -->

	<!-- MOBILE OPEN MENU -->
	<div id="mobile-menu-div" style="background:#fff">
		<div id="open-header">
			<div class="media-nav-div">
				<div>
					<p class="h1"><img class="cursor" src="images/icon-x.png" alt="close mobile menu icon"></p>
				</div>
				<div class="right logo-placement">
<!--CHANGED TO RIGHT ALIGN-->
					<a href="http://publichealth.lacounty.gov/index.htm"><img class="dph-logo dontprint" src="http://www.publichealth.lacounty.gov/images/2016/PublicHealthHE-Blue.gif" alt="Department of Public Health logo"></a>
				</div>
			</div>
		</div>

		<!-- MOBILE NAVIGATION MENU -->
		<div id="menu">
			<div class="media-nav-div">
				<div class="mobile-menu mb-4">
					<p class="contTitle4_Blue2 mb-0">
						<br><a href="http://publichealth.lacounty.gov" style="text-decoration: none">Public Health Home</a>
					</p>


					<p class="contTitle4_Blue2 mt-3 mb-0">
						<a href="http://publichealth.lacounty.gov/media/" style="text-decoration: none">Communications &amp; Public Affairs Home</a>
					</p>


					<p class="contTitle4_Blue2 mt-3 mb-0">
						<a class="collapsed" style="text-decoration: none" data-toggle="collapse" href="#menu-covid" aria-expanded="false" aria-controls="menu-covid">COVID-19 <span class="collapseMainSubMenu text-right"></span>

						</a>
					</p>
					<div class="collapse" id="menu-covid">
						<ul class="list-unstyled">
<li class="p-0"><a href="index.htm">COVID-19 Homepage</a></li>
							<li class="p-0"><a href="reopening-la.htm#orders">Health Officer Orders</a></li>
							<li class="p-0"><a href="about-covid.htm">About COVID-19</a></li>
							<li class="p-0"><a href="data">COVID-19 Data Page</a></li>
						</ul>
</div>

					<p class="contTitle4_Blue2 mt-3 mb-0">
						<a class="collapsed" style="text-decoration: none" data-toggle="collapse" href="#menu-vaccine" aria-expanded="false" aria-controls="menu-vaccine">Vaccine <span class="collapseMainSubMenu text-right"></span>

						</a>
					</p>
					<div class="collapse" id="menu-vaccine">
						<ul class="list-unstyled">
<li class="p-0"><a href="vaccine">Vaccine Homepage</a></li>
							<li class="p-0"><a href="vaccine/index-es.htm">Vacuna página web</a></li>
							<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/vaccine/hcwsignup/">How to Get Vaccinated</a></li>
							<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/vaccine/hcwsignup/Spanish.htm">Cómo vacunarse</a></li>
						</ul>
</div>


					<p class="contTitle4_Blue2 mt-3 mb-0">
						<a class="collapsed" style="text-decoration: none" data-toggle="collapse" href="#menu-reopening" aria-expanded="false" aria-controls="menu-reopening">Reopening LA County <span class="collapseMainSubMenu text-right"></span>

						</a>
					</p>
					<div class="collapse" id="menu-reopening">
						<ul class="list-unstyled">
<li class="p-0"><a href="reopening-la.htm">Reopening LA County Homepage</a></li>
							<li class="p-0"><a href="http://publichealth.lacounty.gov/acd/ncorona2019/BestPractices/">Best Practices for Businesses</a></li>
							<li class="p-0"><a href="data/reopening-dashboard.htm">Reopening Dashboard</a></li>
						</ul>
</div>

				</div>

				<p>
					County of Los Angeles<br><strong>Department of Public Health<br></strong>
					Communications &amp; Public Affairs<br>
					313 N. Figueroa Street, Room 806<br>
					Los Angeles, CA 90012<br><br>
					Phone: (213) 240-8144<br>
					Fax: (213) 481-1406<br><a href="mailto:media@ph.lacounty.gov">media@ph.lacounty.gov</a>
				</p>
			</div>
		</div>
	</div>
<!-- end of menu -->

<!--webbot bot="Include" i-checksum="27985" endspan -->
    </div>


    <div id="content" class="container-fluid">

		<div class="dph-width" style="margin-top:0px">

			<div class="container-xl mt-0 pt-0 mb-5">
				<div class="row mb-4">
					<div class="col">
						<h1 class="h1 center text-grey text-M-700 text-spacing">Locations &amp; Demographics</h1>
					</div>
				</div>

				<!-- DIRECT TO TABLES SECTION-->
				<!-- DIRECT TO TABLES MOBILE-->
				<div class="d-block d-sm-block d-md-none d-lg-none row row-cols-1 row-cols-md-2 row-cols-lg-3">
					<div class="col-12 center">
						<p class="h5">Jump to a section:</p>
					</div>
					<div class="col mb-2">
						<a href="#case-summary" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>Case Summary</strong></a>
					</div>
					<!--<div class="col mb-2">
						<a href="#top-25" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>Highest COVID-19 Case Rates by City/Community</strong></a>
					</div>
					<div class="col mb-2">
						<a href="#recent-trends" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>Recent Trends</strong></a>
					</div>
					<div class="col mb-2">
						<a href="#vaccinated" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>Percent Vaccinated by City/Community</strong></a>
					</div>-->
					<div class="col mb-2">
						<a href="#residential-settings" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>Residential Congregate Settings</strong></a>
					</div>
					<div class="col mb-2">
						<a href="#snf-deaths" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>Skilled Nursing Facility Deaths</strong></a>
					</div>
					<div class="col mb-2">
						<a href="#nonres-settings" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>Non-Residential Settings</strong></a>
					</div>
					<div class="col mb-2">
						<a href="#peh-settings" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>Homeless Service Settings</strong></a>
					</div>
					<div class="col mb-2">
						<a href="#educational-settings" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>Educational Settings</strong></a>
					</div>
					<div class="col mb-2">
						<a href="#correctional-settings" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>Correctional Settings</strong></a>
					</div>
					<div class="col mb-2">
						<a href="#citations" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>Citations</strong></a>
					</div>
					<div class="col mb-2">
						<a href="docs/SummaryReport_People_Experiencing_Homelessness.pdf" class="btn btn-sm grey btn-outline-dark" style="text-decoration: none; width: 100%; height: 100%; align-items: center; display: grid"><strong>People Experiencing Homelessness (PDF)</strong></a>
					</div>
				</div>
				<!-- End of DIRECT TO TABLES MOBILE-->

				<!-- DIRECT TO TABLES DESKTOP -->
				<div class="d-none d-sm-none d-md-block d-lg-block row">
					<div class="col center">
						<p class="h5">Jump to a section:</p>
					</div>
				</div>
				<div class="d-none d-sm-none d-md-block d-lg-block row">
					<div class="col center mb-2">
						<a href="#case-summary" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>Case Summary</strong></a>

						<!--<a href="#top-25" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>Highest COVID-19 Case Rates by City/Community</strong></a>

						<a href="#recent-trends" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>Recent Trends</strong></a>

						<a href="#vaccinated" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>Percent Vaccinated by City/Community</strong></a>

						--><a href="#residential-settings" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>Residential Congregate Settings</strong></a>

						<a href="#snf-deaths" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>Skilled Nursing Facility Deaths</strong></a>

						<a href="#nonres-settings" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>Non-Residential Settings</strong></a>

						<a href="#peh-settings" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>Homeless Service Settings</strong></a>

						<a href="#educational-settings" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>Educational Settings</strong></a>

						<a href="#correctional-settings" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>Correctional Settings</strong></a>

						<a href="#citations" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>Citations</strong></a>

						<a href="docs/SummaryReport_People_Experiencing_Homelessness.pdf" class="btn btn-sm grey btn-outline-dark m-1" style="text-decoration: none"><strong>People Experiencing Homelessness (PDF)</strong></a>
					</div>
				</div>
				<!-- End of DIRECT TO TABLES DESKTOP -->
				<!-- End of DIRECT TO TABLES SECTION-->

				<!--DATE UPDATE -->
				<!--<div class="row">
                	<div class="col center">
                		<p><i>#</i></p>
                	</div>
                </div>-->


                <div class="row">
                	<div class="col center">
                		<p><span id="dte"></span> Update<br>
                		Data <span id="cse"></span></p>
                		<!--<p class="bg-warning center p-2"><strong>DISCLAIMER:</strong>
						<br>The number of new cases reported today include a backlog of 100 test results received from the State and a few hundred cases from a lab that delayed reporting yesterday. Backlog cases from the state electronic lab report (ELR) are still anticipated. Data sources that track other key indicators, including hospitalizations and deaths, are not affected by this reporting issue.					
						</p>-->
                	</div>
                </div>

				<div class="row">
					<div class="col-md-5 mx-auto center">
						<select class="custom-select center font-weight-bold grey" style="border: 1px solid #000; border-radius: 0" onchange="location = this.value;"><option selected value="">View Other Data Pages</option>
<option value="data/index.htm">Daily COVID-19 Data Page</option>
<!--<option value="locations.htm">Locations & Demographics</option>--><option value="http://dashboard.publichealth.lacounty.gov/covid19_surveillance_dashboard/">COVID-19 Data Dashboard</option>
<option value="data/reopening-dashboard.htm">Reopening LA County Dashboard</option>
<option value="data/contact-tracing.htm">Contact Tracing Dashboard</option>
<option value="http://publichealth.lacounty.gov/snfdashboard.htm">Skilled Nursing Facility Dashboard</option>
<option value="vaccine/vaccine-dashboard.htm">COVID-19 Vaccine Distribution Dashboard</option>
<option value="education/index.htm">TK-12 School COVID-19 Data Dashboard</option></select>
</div>
				</div>

			</div>




			<!-- LOCATIONS LISTING section -->
			<div id="case-summary" class="container-xl mt-5 pt-2 pb-0 mb-3 aqua">
				<div class="row center mb-4">
					<div class="col">
						<h2 class="h5 text-white text-M-700">Los Angeles County Case Summary</h2>
					</div>
				</div>
			</div>
			<div class="container-xl pb-4">
				<div class="row">
					<div class="col" style="left: -1px; top: 0px">

						<!-- CASE SUMMARY TABLE section -->




<table class="table table-striped table-bordered table-sm">
<thead class="bg-dark"><tr>
<td class="text-white">New Daily Counts</td>
<td class="text-white">Cases</td>
</tr></thead>
<tr>
<td>Cases**</td>
<td>34827</td>
</tr>
<tr>
<td>Deaths</td>
<td>15</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<thead class="bg-dark"><tr>
<td class="text-white">Laboratory Confirmed Cases </td>
<td class="text-white">2046208</td>
</tr></thead>
<tr>
<td>-- Los Angeles County (excl. LB and Pas)*</td>
<td>1942856</td>
</tr>
<tr>
<td>-- Long Beach</td>
<td>83946</td>
</tr>
<tr>
<td>-- Pasadena</td>
<td>19406</td>
</tr>
<thead class="bg-dark"><tr>
<td class="text-white">Deaths</td>
<td class="text-white">27812</td>
</tr></thead>
<tr>
<td>-- Los Angeles County (excl. LB and Pas)</td>
<td>26359</td>
</tr>
<tr>
<td>-- Long Beach</td>
<td>1080</td>
</tr>
<tr>
<td>-- Pasadena</td>
<td>373</td>
</tr>
<thead class="bg-dark"><tr id="age">
<td class="text-white">Age Group (Los Angeles County Cases Only-excl LB and Pas)</td>
<td class="text-white"></td>
</tr></thead>
<tr>
<td>- 0 to 4</td>
<td>53125</td>
</tr>
<tr>
<td>- 5 to 11</td>
<td>137806</td>
</tr>
<tr>
<td>- 12 to 17</td>
<td>143774</td>
</tr>
<tr>
<td>- 18 to 29</td>
<td>461679</td>
</tr>
<tr>
<td>- 30 to 49</td>
<td>641250</td>
</tr>
<tr>
<td>- 50 to 64</td>
<td>333285</td>
</tr>
<tr>
<td>- 65 to 79</td>
<td>127718</td>
</tr>
<tr>
<td>-  over 80</td>
<td>42938</td>
</tr>
<tr>
<td>-  Under Investigation</td>
<td>1281</td>
</tr>
<thead class="bg-dark"><tr id="gender">
<td class="text-white">Gender (Los Angeles County Cases Only-excl LB and Pas)</td>
<td class="text-white"></td>
</tr></thead>
<tr>
<td>-  Female</td>
<td>985326</td>
</tr>
<tr>
<td>-  Male</td>
<td>905979</td>
</tr>
<tr>
<td>-  Other</td>
<td>837</td>
</tr>
<tr>
<td>-  Under Investigation</td>
<td>50714</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<thead class="bg-dark"><tr id="race">
<td class="text-white">Race/Ethnicity (Los Angeles County Cases Only-excl LB and Pas)</td>
<td class="text-white"></td>
</tr></thead>
<tr>
<td>-  American Indian/Alaska Native</td>
<td>3328</td>
</tr>
<tr>
<td>-  Asian</td>
<td>105467</td>
</tr>
<tr>
<td>-  Black</td>
<td>100267</td>
</tr>
<tr>
<td>-  Hispanic/Latino</td>
<td>923373</td>
</tr>
<tr>
<td>-  Native Hawaiian/Pacific Islander</td>
<td>9013</td>
</tr>
<tr>
<td>-  White</td>
<td>255617</td>
</tr>
<tr>
<td>-  Other</td>
<td>189771</td>
</tr>
<tr>
<td>-  Under Investigation</td>
<td>356020</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<thead class="bg-dark"><tr id="hospitalization">
<td class="text-white">Hospitalization LAC cases only (excl Long Beach and Pasadena)</td>
<td class="text-white"></td>
</tr></thead>
<tr>
<td>-  Hospitalized (Ever)</td>
<td>113204</td>
</tr>
<thead class="bg-dark text-white"><tr id="race-d">
<td class="text-white">Deaths Race/Ethnicity (Los Angeles County Cases Only-excl LB and Pas)</td>
<td class="text-white"></td>
</tr></thead>
<tr>
<td>-  American Indian/Alaska Native</td>
<td>62</td>
</tr>
<tr>
<td>-  Asian</td>
<td>3393</td>
</tr>
<tr>
<td>-  Black</td>
<td>2359</td>
</tr>
<tr>
<td>-  Hispanic/Latino</td>
<td>13910</td>
</tr>
<tr>
<td>-  Native Hawaiian/Pacific Islander</td>
<td>97</td>
</tr>
<tr>
<td>-  White</td>
<td>6296</td>
</tr>
<tr>
<td>-  Other</td>
<td>206</td>
</tr>
<tr>
<td>-  Under Investigation</td>
<td>36</td>
</tr>
</table>
<table class="table table-striped table-bordered table-sm overflow-y">
<thead class="bg-dark text-white"><tr>
<th>CITY/COMMUNITY**</th>
<th>Cases</th>
<th>Case Rate<sup>1</sup>
</th>
<th>Deaths</th>
<th>Death Rate<sup>2</sup>
</th>
</tr></thead>
<tbody>
<tr>
<td>City of Agoura Hills</td>
<td>2356</td>
<td>11282</td>
<td>20</td>
<td>96</td>
</tr>
<tr>
<td>City of Alhambra</td>
<td>11922</td>
<td>13747</td>
<td>224</td>
<td>258</td>
</tr>
<tr>
<td>City of Arcadia</td>
<td>5487</td>
<td>9501</td>
<td>150</td>
<td>260</td>
</tr>
<tr>
<td>City of Artesia</td>
<td>3047</td>
<td>18142</td>
<td>81</td>
<td>482</td>
</tr>
<tr>
<td>City of Avalon</td>
<td>45</td>
<td>1163</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>City of Azusa</td>
<td>10025</td>
<td>20034</td>
<td>140</td>
<td>280</td>
</tr>
<tr>
<td>City of Baldwin Park</td>
<td>17853</td>
<td>23255</td>
<td>352</td>
<td>459</td>
</tr>
<tr>
<td>City of Bell</td>
<td>9706</td>
<td>26715</td>
<td>129</td>
<td>355</td>
</tr>
<tr>
<td>City of Bell Gardens</td>
<td>10612</td>
<td>24638</td>
<td>124</td>
<td>288</td>
</tr>
<tr>
<td>City of Bellflower</td>
<td>17103</td>
<td>22002</td>
<td>220</td>
<td>283</td>
</tr>
<tr>
<td>City of Beverly Hills</td>
<td>6120</td>
<td>17729</td>
<td>36</td>
<td>104</td>
</tr>
<tr>
<td>City of Bradbury</td>
<td>47</td>
<td>4397</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>City of Burbank</td>
<td>16478</td>
<td>15374</td>
<td>271</td>
<td>253</td>
</tr>
<tr>
<td>City of Calabasas</td>
<td>2868</td>
<td>11791</td>
<td>35</td>
<td>144</td>
</tr>
<tr>
<td>City of Carson</td>
<td>18155</td>
<td>19346</td>
<td>276</td>
<td>294</td>
</tr>
<tr>
<td>City of Cerritos</td>
<td>5877</td>
<td>11738</td>
<td>64</td>
<td>128</td>
</tr>
<tr>
<td>City of Claremont</td>
<td>4297</td>
<td>11778</td>
<td>66</td>
<td>181</td>
</tr>
<tr>
<td>City of Commerce*</td>
<td>3357</td>
<td>25687</td>
<td>42</td>
<td>321</td>
</tr>
<tr>
<td>City of Compton</td>
<td>24499</td>
<td>24523</td>
<td>293</td>
<td>293</td>
</tr>
<tr>
<td>City of Covina</td>
<td>10926</td>
<td>22283</td>
<td>186</td>
<td>379</td>
</tr>
<tr>
<td>City of Cudahy</td>
<td>7014</td>
<td>28808</td>
<td>68</td>
<td>279</td>
</tr>
<tr>
<td>City of Culver City</td>
<td>5155</td>
<td>12931</td>
<td>119</td>
<td>299</td>
</tr>
<tr>
<td>City of Diamond Bar</td>
<td>6244</td>
<td>10856</td>
<td>94</td>
<td>163</td>
</tr>
<tr>
<td>City of Downey</td>
<td>26750</td>
<td>23411</td>
<td>334</td>
<td>292</td>
</tr>
<tr>
<td>City of Duarte</td>
<td>3782</td>
<td>17178</td>
<td>105</td>
<td>477</td>
</tr>
<tr>
<td>City of El Monte</td>
<td>23804</td>
<td>20299</td>
<td>474</td>
<td>404</td>
</tr>
<tr>
<td>City of El Segundo</td>
<td>2063</td>
<td>12290</td>
<td>11</td>
<td>66</td>
</tr>
<tr>
<td>City of Gardena</td>
<td>11513</td>
<td>18778</td>
<td>229</td>
<td>374</td>
</tr>
<tr>
<td>City of Glendale</td>
<td>34135</td>
<td>16531</td>
<td>735</td>
<td>356</td>
</tr>
<tr>
<td>City of Glendora</td>
<td>8679</td>
<td>16449</td>
<td>212</td>
<td>402</td>
</tr>
<tr>
<td>City of Hawaiian Gardens</td>
<td>3173</td>
<td>21620</td>
<td>27</td>
<td>184</td>
</tr>
<tr>
<td>City of Hawthorne</td>
<td>17028</td>
<td>19178</td>
<td>251</td>
<td>283</td>
</tr>
<tr>
<td>City of Hermosa Beach</td>
<td>2544</td>
<td>12933</td>
<td>11</td>
<td>56</td>
</tr>
<tr>
<td>City of Hidden Hills</td>
<td>206</td>
<td>10899</td>
<td>2</td>
<td>106</td>
</tr>
<tr>
<td>City of Huntington Park</td>
<td>15883</td>
<td>26701</td>
<td>192</td>
<td>323</td>
</tr>
<tr>
<td>City of Industry</td>
<td>244</td>
<td>55835</td>
<td>5</td>
<td>1144</td>
</tr>
<tr>
<td>City of Inglewood</td>
<td>22641</td>
<td>19934</td>
<td>361</td>
<td>318</td>
</tr>
<tr>
<td>City of Irwindale</td>
<td>411</td>
<td>28170</td>
<td>7</td>
<td>480</td>
</tr>
<tr>
<td>City of La Canada Flintridge</td>
<td>2054</td>
<td>9926</td>
<td>17</td>
<td>82</td>
</tr>
<tr>
<td>City of La Habra Heights</td>
<td>140</td>
<td>2566</td>
<td>2</td>
<td>37</td>
</tr>
<tr>
<td>City of La Mirada</td>
<td>7488</td>
<td>15097</td>
<td>144</td>
<td>290</td>
</tr>
<tr>
<td>City of La Puente</td>
<td>9378</td>
<td>23043</td>
<td>137</td>
<td>337</td>
</tr>
<tr>
<td>City of La Verne</td>
<td>5346</td>
<td>16063</td>
<td>67</td>
<td>201</td>
</tr>
<tr>
<td>City of Lakewood</td>
<td>13384</td>
<td>16655</td>
<td>137</td>
<td>170</td>
</tr>
<tr>
<td>City of Lancaster*</td>
<td>36903</td>
<td>22840</td>
<td>369</td>
<td>228</td>
</tr>
<tr>
<td>City of Lawndale</td>
<td>6025</td>
<td>17924</td>
<td>60</td>
<td>178</td>
</tr>
<tr>
<td>City of Lomita</td>
<td>3041</td>
<td>14670</td>
<td>47</td>
<td>227</td>
</tr>
<tr>
<td>City of Lynwood*</td>
<td>18239</td>
<td>25315</td>
<td>267</td>
<td>371</td>
</tr>
<tr>
<td>City of Malibu</td>
<td>1440</td>
<td>11110</td>
<td>13</td>
<td>100</td>
</tr>
<tr>
<td>City of Manhattan Beach</td>
<td>3725</td>
<td>10348</td>
<td>20</td>
<td>56</td>
</tr>
<tr>
<td>City of Maywood</td>
<td>7364</td>
<td>26254</td>
<td>99</td>
<td>353</td>
</tr>
<tr>
<td>City of Monrovia</td>
<td>5769</td>
<td>14869</td>
<td>87</td>
<td>224</td>
</tr>
<tr>
<td>City of Montebello</td>
<td>14765</td>
<td>22936</td>
<td>246</td>
<td>382</td>
</tr>
<tr>
<td>City of Monterey Park</td>
<td>8000</td>
<td>12849</td>
<td>210</td>
<td>337</td>
</tr>
<tr>
<td>City of Norwalk</td>
<td>24040</td>
<td>22337</td>
<td>429</td>
<td>399</td>
</tr>
<tr>
<td>City of Palmdale</td>
<td>38327</td>
<td>24110</td>
<td>385</td>
<td>242</td>
</tr>
<tr>
<td>City of Palos Verdes Estates</td>
<td>1131</td>
<td>8364</td>
<td>10</td>
<td>74</td>
</tr>
<tr>
<td>City of Paramount</td>
<td>14072</td>
<td>25118</td>
<td>180</td>
<td>321</td>
</tr>
<tr>
<td>City of Pico Rivera</td>
<td>15925</td>
<td>24773</td>
<td>297</td>
<td>462</td>
</tr>
<tr>
<td>City of Pomona</td>
<td>37811</td>
<td>24249</td>
<td>514</td>
<td>330</td>
</tr>
<tr>
<td>City of Rancho Palos Verdes</td>
<td>3573</td>
<td>8358</td>
<td>69</td>
<td>161</td>
</tr>
<tr>
<td>City of Redondo Beach</td>
<td>7153</td>
<td>10412</td>
<td>58</td>
<td>84</td>
</tr>
<tr>
<td>City of Rolling Hills</td>
<td>146</td>
<td>7526</td>
<td>3</td>
<td>155</td>
</tr>
<tr>
<td>City of Rolling Hills Estates</td>
<td>721</td>
<td>8887</td>
<td>8</td>
<td>99</td>
</tr>
<tr>
<td>City of Rosemead</td>
<td>7522</td>
<td>13590</td>
<td>169</td>
<td>305</td>
</tr>
<tr>
<td>City of San Dimas*</td>
<td>5831</td>
<td>16894</td>
<td>103</td>
<td>298</td>
</tr>
<tr>
<td>City of San Fernando</td>
<td>7834</td>
<td>31830</td>
<td>73</td>
<td>297</td>
</tr>
<tr>
<td>City of San Gabriel</td>
<td>5220</td>
<td>12746</td>
<td>220</td>
<td>537</td>
</tr>
<tr>
<td>City of San Marino</td>
<td>976</td>
<td>7351</td>
<td>10</td>
<td>75</td>
</tr>
<tr>
<td>City of Santa Clarita</td>
<td>39785</td>
<td>18049</td>
<td>313</td>
<td>142</td>
</tr>
<tr>
<td>City of Santa Fe Springs</td>
<td>4585</td>
<td>24967</td>
<td>49</td>
<td>267</td>
</tr>
<tr>
<td>City of Santa Monica</td>
<td>12223</td>
<td>13222</td>
<td>198</td>
<td>214</td>
</tr>
<tr>
<td>City of Sierra Madre</td>
<td>1080</td>
<td>9828</td>
<td>14</td>
<td>127</td>
</tr>
<tr>
<td>City of Signal Hill</td>
<td>2086</td>
<td>17682</td>
<td>11</td>
<td>93</td>
</tr>
<tr>
<td>City of South El Monte</td>
<td>4810</td>
<td>23031</td>
<td>77</td>
<td>369</td>
</tr>
<tr>
<td>City of South Gate</td>
<td>27114</td>
<td>27624</td>
<td>270</td>
<td>275</td>
</tr>
<tr>
<td>City of South Pasadena</td>
<td>2794</td>
<td>10724</td>
<td>49</td>
<td>188</td>
</tr>
<tr>
<td>City of Temple City</td>
<td>4205</td>
<td>11535</td>
<td>130</td>
<td>357</td>
</tr>
<tr>
<td>City of Torrance</td>
<td>15860</td>
<td>10625</td>
<td>255</td>
<td>171</td>
</tr>
<tr>
<td>City of Vernon</td>
<td>191</td>
<td>91388</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>City of Walnut</td>
<td>3281</td>
<td>10746</td>
<td>42</td>
<td>138</td>
</tr>
<tr>
<td>City of West Covina</td>
<td>21259</td>
<td>19642</td>
<td>310</td>
<td>286</td>
</tr>
<tr>
<td>City of West Hollywood</td>
<td>6135</td>
<td>16603</td>
<td>48</td>
<td>130</td>
</tr>
<tr>
<td>City of Westlake Village</td>
<td>210</td>
<td>2512</td>
<td>1</td>
<td>12</td>
</tr>
<tr>
<td>City of Whittier</td>
<td>17317</td>
<td>19806</td>
<td>290</td>
<td>332</td>
</tr>
<tr>
<td>Los Angeles</td>
<td>844746</td>
<td>20886</td>
<td>10963</td>
<td>271</td>
</tr>
<tr>
<td>Los Angeles - Adams-Normandie</td>
<td>1805</td>
<td>22007</td>
<td>18</td>
<td>219</td>
</tr>
<tr>
<td>Los Angeles - Alsace</td>
<td>2557</td>
<td>20546</td>
<td>23</td>
<td>185</td>
</tr>
<tr>
<td>Los Angeles - Angeles National Forest</td>
<td>6</td>
<td>15000</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Los Angeles - Angelino Heights</td>
<td>471</td>
<td>18825</td>
<td>6</td>
<td>240</td>
</tr>
<tr>
<td>Los Angeles - Arleta</td>
<td>10230</td>
<td>29764</td>
<td>127</td>
<td>370</td>
</tr>
<tr>
<td>Los Angeles - Atwater Village</td>
<td>2586</td>
<td>17633</td>
<td>29</td>
<td>198</td>
</tr>
<tr>
<td>Los Angeles - Baldwin Hills</td>
<td>5296</td>
<td>17015</td>
<td>82</td>
<td>263</td>
</tr>
<tr>
<td>Los Angeles - Bel Air</td>
<td>1081</td>
<td>12825</td>
<td>3</td>
<td>36</td>
</tr>
<tr>
<td>Los Angeles - Beverly Crest</td>
<td>1711</td>
<td>13661</td>
<td>7</td>
<td>56</td>
</tr>
<tr>
<td>Los Angeles - Beverlywood</td>
<td>2170</td>
<td>16473</td>
<td>4</td>
<td>30</td>
</tr>
<tr>
<td>Los Angeles - Boyle Heights*</td>
<td>24041</td>
<td>27670</td>
<td>331</td>
<td>381</td>
</tr>
<tr>
<td>Los Angeles - Brentwood</td>
<td>4076</td>
<td>13168</td>
<td>21</td>
<td>68</td>
</tr>
<tr>
<td>Los Angeles - Brookside</td>
<td>72</td>
<td>12392</td>
<td>2</td>
<td>344</td>
</tr>
<tr>
<td>Los Angeles - Cadillac-Corning</td>
<td>1300</td>
<td>18256</td>
<td>11</td>
<td>154</td>
</tr>
<tr>
<td>Los Angeles - Canoga Park</td>
<td>14708</td>
<td>22528</td>
<td>185</td>
<td>283</td>
</tr>
<tr>
<td>Los Angeles - Carthay</td>
<td>2183</td>
<td>15199</td>
<td>79</td>
<td>550</td>
</tr>
<tr>
<td>Los Angeles - Central</td>
<td>10571</td>
<td>27111</td>
<td>144</td>
<td>369</td>
</tr>
<tr>
<td>Los Angeles - Century City</td>
<td>1565</td>
<td>12234</td>
<td>16</td>
<td>125</td>
</tr>
<tr>
<td>Los Angeles - Century Palms/Cove</td>
<td>9609</td>
<td>28458</td>
<td>115</td>
<td>341</td>
</tr>
<tr>
<td>Los Angeles - Chatsworth</td>
<td>6782</td>
<td>18300</td>
<td>92</td>
<td>248</td>
</tr>
<tr>
<td>Los Angeles - Cheviot Hills</td>
<td>1144</td>
<td>12474</td>
<td>9</td>
<td>98</td>
</tr>
<tr>
<td>Los Angeles - Chinatown</td>
<td>1404</td>
<td>17504</td>
<td>16</td>
<td>199</td>
</tr>
<tr>
<td>Los Angeles - Cloverdale/Cochran</td>
<td>2810</td>
<td>19309</td>
<td>29</td>
<td>199</td>
</tr>
<tr>
<td>Los Angeles - Country Club Park</td>
<td>2554</td>
<td>16855</td>
<td>84</td>
<td>554</td>
</tr>
<tr>
<td>Los Angeles - Crenshaw District</td>
<td>2759</td>
<td>19951</td>
<td>37</td>
<td>268</td>
</tr>
<tr>
<td>Los Angeles - Crestview</td>
<td>2100</td>
<td>18473</td>
<td>47</td>
<td>413</td>
</tr>
<tr>
<td>Los Angeles - Del Rey</td>
<td>4397</td>
<td>14688</td>
<td>35</td>
<td>117</td>
</tr>
<tr>
<td>Los Angeles - Downtown*</td>
<td>8326</td>
<td>30269</td>
<td>58</td>
<td>211</td>
</tr>
<tr>
<td>Los Angeles - Eagle Rock</td>
<td>6469</td>
<td>16340</td>
<td>123</td>
<td>311</td>
</tr>
<tr>
<td>Los Angeles - East Hollywood</td>
<td>5244</td>
<td>17906</td>
<td>136</td>
<td>464</td>
</tr>
<tr>
<td>Los Angeles - Echo Park</td>
<td>2411</td>
<td>16912</td>
<td>24</td>
<td>168</td>
</tr>
<tr>
<td>Los Angeles - El Sereno</td>
<td>9718</td>
<td>23244</td>
<td>119</td>
<td>285</td>
</tr>
<tr>
<td>Los Angeles - Elysian Park</td>
<td>989</td>
<td>17314</td>
<td>5</td>
<td>88</td>
</tr>
<tr>
<td>Los Angeles - Elysian Valley</td>
<td>1989</td>
<td>19556</td>
<td>28</td>
<td>275</td>
</tr>
<tr>
<td>Los Angeles - Encino</td>
<td>7434</td>
<td>16457</td>
<td>78</td>
<td>173</td>
</tr>
<tr>
<td>Los Angeles - Exposition</td>
<td>649</td>
<td>19513</td>
<td>7</td>
<td>210</td>
</tr>
<tr>
<td>Los Angeles - Exposition Park</td>
<td>9919</td>
<td>22083</td>
<td>94</td>
<td>209</td>
</tr>
<tr>
<td>Los Angeles - Faircrest Heights</td>
<td>630</td>
<td>17500</td>
<td>3</td>
<td>83</td>
</tr>
<tr>
<td>Los Angeles - Figueroa Park Square</td>
<td>2218</td>
<td>25433</td>
<td>32</td>
<td>367</td>
</tr>
<tr>
<td>Los Angeles - Florence-Firestone</td>
<td>13789</td>
<td>29063</td>
<td>139</td>
<td>293</td>
</tr>
<tr>
<td>Los Angeles - Glassell Park</td>
<td>5786</td>
<td>18308</td>
<td>64</td>
<td>203</td>
</tr>
<tr>
<td>Los Angeles - Gramercy Place</td>
<td>2424</td>
<td>22520</td>
<td>35</td>
<td>325</td>
</tr>
<tr>
<td>Los Angeles - Granada Hills</td>
<td>11734</td>
<td>20165</td>
<td>208</td>
<td>357</td>
</tr>
<tr>
<td>Los Angeles - Green Meadows</td>
<td>5962</td>
<td>27724</td>
<td>57</td>
<td>265</td>
</tr>
<tr>
<td>Los Angeles - Hancock Park</td>
<td>2435</td>
<td>14291</td>
<td>7</td>
<td>41</td>
</tr>
<tr>
<td>Los Angeles - Harbor City</td>
<td>4781</td>
<td>16447</td>
<td>39</td>
<td>134</td>
</tr>
<tr>
<td>Los Angeles - Harbor Gateway</td>
<td>8453</td>
<td>19388</td>
<td>89</td>
<td>204</td>
</tr>
<tr>
<td>Los Angeles - Harbor Pines</td>
<td>325</td>
<td>13491</td>
<td>2</td>
<td>83</td>
</tr>
<tr>
<td>Los Angeles - Harvard Heights</td>
<td>3698</td>
<td>20505</td>
<td>73</td>
<td>405</td>
</tr>
<tr>
<td>Los Angeles - Harvard Park</td>
<td>10816</td>
<td>28512</td>
<td>113</td>
<td>298</td>
</tr>
<tr>
<td>Los Angeles - Highland Park</td>
<td>9508</td>
<td>19648</td>
<td>116</td>
<td>240</td>
</tr>
<tr>
<td>Los Angeles - Historic Filipinotown</td>
<td>3090</td>
<td>22278</td>
<td>83</td>
<td>598</td>
</tr>
<tr>
<td>Los Angeles - Hollywood</td>
<td>11901</td>
<td>17436</td>
<td>84</td>
<td>123</td>
</tr>
<tr>
<td>Los Angeles - Hollywood Hills</td>
<td>3908</td>
<td>13277</td>
<td>27</td>
<td>92</td>
</tr>
<tr>
<td>Los Angeles - Hyde Park</td>
<td>6541</td>
<td>22918</td>
<td>95</td>
<td>333</td>
</tr>
<tr>
<td>Los Angeles - Jefferson Park</td>
<td>1828</td>
<td>22643</td>
<td>18</td>
<td>223</td>
</tr>
<tr>
<td>Los Angeles - Koreatown</td>
<td>8689</td>
<td>16809</td>
<td>132</td>
<td>255</td>
</tr>
<tr>
<td>Los Angeles - Lafayette Square</td>
<td>874</td>
<td>19171</td>
<td>9</td>
<td>197</td>
</tr>
<tr>
<td>Los Angeles - Lake Balboa</td>
<td>8946</td>
<td>21196</td>
<td>75</td>
<td>178</td>
</tr>
<tr>
<td>Los Angeles - Lakeview Terrace</td>
<td>3489</td>
<td>26567</td>
<td>45</td>
<td>343</td>
</tr>
<tr>
<td>Los Angeles - Leimert Park</td>
<td>3025</td>
<td>19856</td>
<td>25</td>
<td>164</td>
</tr>
<tr>
<td>Los Angeles - Lincoln Heights</td>
<td>7399</td>
<td>22698</td>
<td>198</td>
<td>607</td>
</tr>
<tr>
<td>Los Angeles - Little Armenia</td>
<td>1685</td>
<td>20997</td>
<td>91</td>
<td>1134</td>
</tr>
<tr>
<td>Los Angeles - Little Bangladesh</td>
<td>4540</td>
<td>16018</td>
<td>36</td>
<td>127</td>
</tr>
<tr>
<td>Los Angeles - Little Tokyo</td>
<td>716</td>
<td>22853</td>
<td>12</td>
<td>383</td>
</tr>
<tr>
<td>Los Angeles - Longwood</td>
<td>963</td>
<td>22375</td>
<td>9</td>
<td>209</td>
</tr>
<tr>
<td>Los Angeles - Los Feliz</td>
<td>2662</td>
<td>12320</td>
<td>29</td>
<td>134</td>
</tr>
<tr>
<td>Los Angeles - Manchester Square</td>
<td>1760</td>
<td>20619</td>
<td>17</td>
<td>199</td>
</tr>
<tr>
<td>Los Angeles - Mandeville Canyon</td>
<td>359</td>
<td>11492</td>
<td>1</td>
<td>32</td>
</tr>
<tr>
<td>Los Angeles - Mar Vista</td>
<td>5129</td>
<td>12076</td>
<td>37</td>
<td>87</td>
</tr>
<tr>
<td>Los Angeles - Marina Peninsula</td>
<td>473</td>
<td>10849</td>
<td>2</td>
<td>46</td>
</tr>
<tr>
<td>Los Angeles - Melrose</td>
<td>14681</td>
<td>18895</td>
<td>231</td>
<td>297</td>
</tr>
<tr>
<td>Los Angeles - Mid-city</td>
<td>2400</td>
<td>15968</td>
<td>46</td>
<td>306</td>
</tr>
<tr>
<td>Los Angeles - Miracle Mile</td>
<td>2494</td>
<td>13867</td>
<td>20</td>
<td>111</td>
</tr>
<tr>
<td>Los Angeles - Mission Hills</td>
<td>7035</td>
<td>29162</td>
<td>135</td>
<td>560</td>
</tr>
<tr>
<td>Los Angeles - Mt. Washington</td>
<td>4600</td>
<td>19052</td>
<td>67</td>
<td>277</td>
</tr>
<tr>
<td>Los Angeles - North Hills</td>
<td>14575</td>
<td>23670</td>
<td>166</td>
<td>270</td>
</tr>
<tr>
<td>Los Angeles - North Hollywood</td>
<td>34429</td>
<td>22737</td>
<td>408</td>
<td>269</td>
</tr>
<tr>
<td>Los Angeles - Northridge</td>
<td>13589</td>
<td>19469</td>
<td>199</td>
<td>285</td>
</tr>
<tr>
<td>Los Angeles - Pacific Palisades</td>
<td>2211</td>
<td>10385</td>
<td>15</td>
<td>70</td>
</tr>
<tr>
<td>Los Angeles - Pacoima</td>
<td>23969</td>
<td>31137</td>
<td>252</td>
<td>327</td>
</tr>
<tr>
<td>Los Angeles - Palisades Highlands</td>
<td>395</td>
<td>10270</td>
<td>1</td>
<td>26</td>
</tr>
<tr>
<td>Los Angeles - Palms</td>
<td>5822</td>
<td>13269</td>
<td>70</td>
<td>160</td>
</tr>
<tr>
<td>Los Angeles - Panorama City</td>
<td>19631</td>
<td>26088</td>
<td>299</td>
<td>397</td>
</tr>
<tr>
<td>Los Angeles - Park La Brea</td>
<td>1524</td>
<td>11222</td>
<td>1</td>
<td>7</td>
</tr>
<tr>
<td>Los Angeles - Pico-Union</td>
<td>9907</td>
<td>23677</td>
<td>251</td>
<td>600</td>
</tr>
<tr>
<td>Los Angeles - Playa Del Rey</td>
<td>321</td>
<td>10044</td>
<td>1</td>
<td>31</td>
</tr>
<tr>
<td>Los Angeles - Playa Vista</td>
<td>1637</td>
<td>14954</td>
<td>12</td>
<td>110</td>
</tr>
<tr>
<td>Los Angeles - Porter Ranch</td>
<td>5029</td>
<td>14131</td>
<td>49</td>
<td>138</td>
</tr>
<tr>
<td>Los Angeles - Rancho Park</td>
<td>987</td>
<td>15046</td>
<td>2</td>
<td>30</td>
</tr>
<tr>
<td>Los Angeles - Regent Square</td>
<td>489</td>
<td>17590</td>
<td>3</td>
<td>108</td>
</tr>
<tr>
<td>Los Angeles - Reseda</td>
<td>18340</td>
<td>23937</td>
<td>325</td>
<td>424</td>
</tr>
<tr>
<td>Los Angeles - Reseda Ranch</td>
<td>1049</td>
<td>22627</td>
<td>5</td>
<td>108</td>
</tr>
<tr>
<td>Los Angeles - Reynier Village</td>
<td>583</td>
<td>13789</td>
<td>2</td>
<td>47</td>
</tr>
<tr>
<td>Los Angeles - San Pedro*</td>
<td>14139</td>
<td>18118</td>
<td>143</td>
<td>183</td>
</tr>
<tr>
<td>Los Angeles - Shadow Hills</td>
<td>735</td>
<td>16547</td>
<td>6</td>
<td>135</td>
</tr>
<tr>
<td>Los Angeles - Sherman Oaks</td>
<td>13476</td>
<td>15445</td>
<td>126</td>
<td>144</td>
</tr>
<tr>
<td>Los Angeles - Silverlake</td>
<td>6832</td>
<td>15498</td>
<td>130</td>
<td>295</td>
</tr>
<tr>
<td>Los Angeles - South Carthay</td>
<td>1688</td>
<td>15932</td>
<td>6</td>
<td>57</td>
</tr>
<tr>
<td>Los Angeles - South Park</td>
<td>10555</td>
<td>27805</td>
<td>113</td>
<td>298</td>
</tr>
<tr>
<td>Los Angeles - St Elmo Village</td>
<td>1023</td>
<td>22317</td>
<td>43</td>
<td>938</td>
</tr>
<tr>
<td>Los Angeles - Studio City</td>
<td>3240</td>
<td>14439</td>
<td>49</td>
<td>218</td>
</tr>
<tr>
<td>Los Angeles - Sun Valley</td>
<td>14202</td>
<td>27060</td>
<td>175</td>
<td>333</td>
</tr>
<tr>
<td>Los Angeles - Sunland</td>
<td>3809</td>
<td>18664</td>
<td>67</td>
<td>328</td>
</tr>
<tr>
<td>Los Angeles - Sycamore Square</td>
<td>84</td>
<td>12983</td>
<td>2</td>
<td>309</td>
</tr>
<tr>
<td>Los Angeles - Sylmar*</td>
<td>24949</td>
<td>30279</td>
<td>270</td>
<td>328</td>
</tr>
<tr>
<td>Los Angeles - Tarzana</td>
<td>5844</td>
<td>18927</td>
<td>87</td>
<td>282</td>
</tr>
<tr>
<td>Los Angeles - Temple-Beaudry</td>
<td>7897</td>
<td>20002</td>
<td>119</td>
<td>301</td>
</tr>
<tr>
<td>Los Angeles - Thai Town</td>
<td>1598</td>
<td>16291</td>
<td>25</td>
<td>255</td>
</tr>
<tr>
<td>Los Angeles - Toluca Lake</td>
<td>1235</td>
<td>14189</td>
<td>6</td>
<td>69</td>
</tr>
<tr>
<td>Los Angeles - Toluca Terrace</td>
<td>264</td>
<td>20214</td>
<td>8</td>
<td>613</td>
</tr>
<tr>
<td>Los Angeles - Toluca Woods</td>
<td>235</td>
<td>12648</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Los Angeles - Tujunga</td>
<td>4993</td>
<td>17954</td>
<td>84</td>
<td>302</td>
</tr>
<tr>
<td>Los Angeles - University Hills</td>
<td>509</td>
<td>14844</td>
<td>3</td>
<td>87</td>
</tr>
<tr>
<td>Los Angeles - University Park</td>
<td>5809</td>
<td>21157</td>
<td>65</td>
<td>237</td>
</tr>
<tr>
<td>Los Angeles - Valley Glen</td>
<td>6484</td>
<td>21602</td>
<td>83</td>
<td>277</td>
</tr>
<tr>
<td>Los Angeles - Valley Village</td>
<td>4425</td>
<td>17900</td>
<td>86</td>
<td>348</td>
</tr>
<tr>
<td>Los Angeles - Van Nuys*</td>
<td>22279</td>
<td>23906</td>
<td>376</td>
<td>403</td>
</tr>
<tr>
<td>Los Angeles - Venice</td>
<td>4877</td>
<td>14393</td>
<td>20</td>
<td>59</td>
</tr>
<tr>
<td>Los Angeles - Vermont Knolls</td>
<td>4503</td>
<td>26180</td>
<td>65</td>
<td>378</td>
</tr>
<tr>
<td>Los Angeles - Vermont Square</td>
<td>2250</td>
<td>29385</td>
<td>29</td>
<td>379</td>
</tr>
<tr>
<td>Los Angeles - Vermont Vista</td>
<td>11227</td>
<td>27259</td>
<td>119</td>
<td>289</td>
</tr>
<tr>
<td>Los Angeles - Vernon Central</td>
<td>15435</td>
<td>29684</td>
<td>176</td>
<td>338</td>
</tr>
<tr>
<td>Los Angeles - Victoria Park</td>
<td>1604</td>
<td>19098</td>
<td>14</td>
<td>167</td>
</tr>
<tr>
<td>Los Angeles - View Heights</td>
<td>532</td>
<td>14402</td>
<td>7</td>
<td>189</td>
</tr>
<tr>
<td>Los Angeles - Watts</td>
<td>11278</td>
<td>26428</td>
<td>118</td>
<td>277</td>
</tr>
<tr>
<td>Los Angeles - Wellington Square</td>
<td>986</td>
<td>20061</td>
<td>11</td>
<td>224</td>
</tr>
<tr>
<td>Los Angeles - West Adams</td>
<td>6115</td>
<td>22132</td>
<td>161</td>
<td>583</td>
</tr>
<tr>
<td>Los Angeles - West Hills</td>
<td>6160</td>
<td>15193</td>
<td>124</td>
<td>306</td>
</tr>
<tr>
<td>Los Angeles - West Los Angeles</td>
<td>5586</td>
<td>14842</td>
<td>57</td>
<td>151</td>
</tr>
<tr>
<td>Los Angeles - West Vernon</td>
<td>14810</td>
<td>27608</td>
<td>209</td>
<td>390</td>
</tr>
<tr>
<td>Los Angeles - Westchester</td>
<td>6374</td>
<td>12352</td>
<td>61</td>
<td>118</td>
</tr>
<tr>
<td>Los Angeles - Westlake</td>
<td>11770</td>
<td>19830</td>
<td>324</td>
<td>546</td>
</tr>
<tr>
<td>Los Angeles - Westwood</td>
<td>6735</td>
<td>12447</td>
<td>30</td>
<td>55</td>
</tr>
<tr>
<td>Los Angeles - Wholesale District*</td>
<td>11299</td>
<td>31274</td>
<td>121</td>
<td>335</td>
</tr>
<tr>
<td>Los Angeles - Wilmington</td>
<td>13423</td>
<td>23763</td>
<td>107</td>
<td>189</td>
</tr>
<tr>
<td>Los Angeles - Wilshire Center</td>
<td>8935</td>
<td>17809</td>
<td>140</td>
<td>279</td>
</tr>
<tr>
<td>Los Angeles - Winnetka</td>
<td>11014</td>
<td>21268</td>
<td>103</td>
<td>199</td>
</tr>
<tr>
<td>Los Angeles - Woodland Hills</td>
<td>10527</td>
<td>15468</td>
<td>101</td>
<td>148</td>
</tr>
<tr>
<td>Unincorporated - Acton</td>
<td>1070</td>
<td>13424</td>
<td>13</td>
<td>163</td>
</tr>
<tr>
<td>Unincorporated - Agua Dulce</td>
<td>569</td>
<td>13684</td>
<td>5</td>
<td>120</td>
</tr>
<tr>
<td>Unincorporated - Altadena</td>
<td>6015</td>
<td>13790</td>
<td>83</td>
<td>190</td>
</tr>
<tr>
<td>Unincorporated - Anaverde</td>
<td>222</td>
<td>14721</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Angeles National Forest</td>
<td>53</td>
<td>4257</td>
<td>1</td>
<td>80</td>
</tr>
<tr>
<td>Unincorporated - Arcadia</td>
<td>1037</td>
<td>12993</td>
<td>16</td>
<td>200</td>
</tr>
<tr>
<td>Unincorporated - Athens-Westmont</td>
<td>10365</td>
<td>24422</td>
<td>130</td>
<td>306</td>
</tr>
<tr>
<td>Unincorporated - Athens Village</td>
<td>1635</td>
<td>33388</td>
<td>32</td>
<td>653</td>
</tr>
<tr>
<td>Unincorporated - Avocado Heights</td>
<td>1645</td>
<td>24280</td>
<td>15</td>
<td>221</td>
</tr>
<tr>
<td>Unincorporated - Azusa</td>
<td>3648</td>
<td>22910</td>
<td>48</td>
<td>301</td>
</tr>
<tr>
<td>Unincorporated - Bassett</td>
<td>3619</td>
<td>24425</td>
<td>49</td>
<td>331</td>
</tr>
<tr>
<td>Unincorporated - Bouquet Canyon</td>
<td>100</td>
<td>9320</td>
<td>1</td>
<td>93</td>
</tr>
<tr>
<td>Unincorporated - Bradbury</td>
<td>54</td>
<td>50000</td>
<td>24</td>
<td>22222</td>
</tr>
<tr>
<td>Unincorporated - Canyon Country</td>
<td>1834</td>
<td>23732</td>
<td>7</td>
<td>91</td>
</tr>
<tr>
<td>Unincorporated - Castaic*</td>
<td>5694</td>
<td>20941</td>
<td>23</td>
<td>85</td>
</tr>
<tr>
<td>Unincorporated - Cerritos</td>
<td>104</td>
<td>17717</td>
<td>1</td>
<td>170</td>
</tr>
<tr>
<td>Unincorporated - Charter Oak</td>
<td>1</td>
<td>5000</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Claremont</td>
<td>72</td>
<td>10256</td>
<td>5</td>
<td>712</td>
</tr>
<tr>
<td>Unincorporated - Covina</td>
<td>3672</td>
<td>21832</td>
<td>49</td>
<td>291</td>
</tr>
<tr>
<td>Unincorporated - Covina (Charter Oak)</td>
<td>2602</td>
<td>19796</td>
<td>23</td>
<td>175</td>
</tr>
<tr>
<td>Unincorporated - Del Aire</td>
<td>666</td>
<td>15160</td>
<td>3</td>
<td>68</td>
</tr>
<tr>
<td>Unincorporated - Del Rey</td>
<td>67</td>
<td>21069</td>
<td>1</td>
<td>314</td>
</tr>
<tr>
<td>Unincorporated - Del Sur</td>
<td>369</td>
<td>15280</td>
<td>3</td>
<td>124</td>
</tr>
<tr>
<td>Unincorporated - Desert View Highlands</td>
<td>564</td>
<td>22623</td>
<td>9</td>
<td>361</td>
</tr>
<tr>
<td>Unincorporated - Duarte</td>
<td>1175</td>
<td>26536</td>
<td>13</td>
<td>294</td>
</tr>
<tr>
<td>Unincorporated - East Covina</td>
<td>60</td>
<td>18237</td>
<td>1</td>
<td>304</td>
</tr>
<tr>
<td>Unincorporated - East La Mirada</td>
<td>877</td>
<td>16572</td>
<td>9</td>
<td>170</td>
</tr>
<tr>
<td>Unincorporated - East Lancaster</td>
<td>23</td>
<td>20175</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - East Los Angeles</td>
<td>35047</td>
<td>27977</td>
<td>483</td>
<td>386</td>
</tr>
<tr>
<td>Unincorporated - East Pasadena</td>
<td>261</td>
<td>4076</td>
<td>10</td>
<td>156</td>
</tr>
<tr>
<td>Unincorporated - East Rancho Dominguez</td>
<td>3757</td>
<td>24543</td>
<td>56</td>
<td>366</td>
</tr>
<tr>
<td>Unincorporated - East Whittier</td>
<td>775</td>
<td>14606</td>
<td>10</td>
<td>188</td>
</tr>
<tr>
<td>Unincorporated - El Camino Village</td>
<td>1386</td>
<td>15766</td>
<td>15</td>
<td>171</td>
</tr>
<tr>
<td>Unincorporated - El Monte</td>
<td>38</td>
<td>26207</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Elizabeth Lake</td>
<td>152</td>
<td>9151</td>
<td>1</td>
<td>60</td>
</tr>
<tr>
<td>Unincorporated - Florence-Firestone</td>
<td>18886</td>
<td>29188</td>
<td>240</td>
<td>371</td>
</tr>
<tr>
<td>Unincorporated - Franklin Canyon</td>
<td>1</td>
<td>8333</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Glendora</td>
<td>125</td>
<td>18939</td>
<td>3</td>
<td>455</td>
</tr>
<tr>
<td>Unincorporated - Hacienda Heights</td>
<td>8267</td>
<td>14782</td>
<td>108</td>
<td>193</td>
</tr>
<tr>
<td>Unincorporated - Harbor Gateway</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Hawthorne</td>
<td>455</td>
<td>18099</td>
<td>3</td>
<td>119</td>
</tr>
<tr>
<td>Unincorporated - Hi Vista</td>
<td>88</td>
<td>8015</td>
<td>2</td>
<td>182</td>
</tr>
<tr>
<td>Unincorporated - Kagel/Lopez Canyons</td>
<td>387</td>
<td>27408</td>
<td>2</td>
<td>142</td>
</tr>
<tr>
<td>Unincorporated - La Crescenta-Montrose</td>
<td>2163</td>
<td>10924</td>
<td>20</td>
<td>101</td>
</tr>
<tr>
<td>Unincorporated - La Habra Heights</td>
<td>17</td>
<td>2515</td>
<td>1</td>
<td>148</td>
</tr>
<tr>
<td>Unincorporated - La Rambla</td>
<td>459</td>
<td>22120</td>
<td>21</td>
<td>1012</td>
</tr>
<tr>
<td>Unincorporated - La Verne*</td>
<td>337</td>
<td>16520</td>
<td>1</td>
<td>49</td>
</tr>
<tr>
<td>Unincorporated - Ladera Heights</td>
<td>935</td>
<td>13223</td>
<td>15</td>
<td>212</td>
</tr>
<tr>
<td>Unincorporated - Lake Hughes</td>
<td>104</td>
<td>15569</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Lake Los Angeles</td>
<td>2416</td>
<td>18593</td>
<td>22</td>
<td>169</td>
</tr>
<tr>
<td>Unincorporated - Lake Manor</td>
<td>249</td>
<td>15155</td>
<td>2</td>
<td>122</td>
</tr>
<tr>
<td>Unincorporated - Lakewood</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Lennox</td>
<td>4886</td>
<td>21675</td>
<td>60</td>
<td>266</td>
</tr>
<tr>
<td>Unincorporated - Leona Valley</td>
<td>214</td>
<td>12222</td>
<td>4</td>
<td>228</td>
</tr>
<tr>
<td>Unincorporated - Littlerock</td>
<td>832</td>
<td>20691</td>
<td>6</td>
<td>149</td>
</tr>
<tr>
<td>Unincorporated - Littlerock/Juniper Hills</td>
<td>211</td>
<td>16268</td>
<td>3</td>
<td>231</td>
</tr>
<tr>
<td>Unincorporated - Littlerock/Pearblossom</td>
<td>763</td>
<td>21379</td>
<td>13</td>
<td>364</td>
</tr>
<tr>
<td>Unincorporated - Llano</td>
<td>72</td>
<td>8210</td>
<td>2</td>
<td>228</td>
</tr>
<tr>
<td>Unincorporated - Marina del Rey</td>
<td>1282</td>
<td>13622</td>
<td>4</td>
<td>43</td>
</tr>
<tr>
<td>Unincorporated - Miracle Mile</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Monrovia</td>
<td>630</td>
<td>16233</td>
<td>1</td>
<td>26</td>
</tr>
<tr>
<td>Unincorporated - Newhall</td>
<td>74</td>
<td>33636</td>
<td>1</td>
<td>455</td>
</tr>
<tr>
<td>Unincorporated - North Lancaster</td>
<td>242</td>
<td>20200</td>
<td>3</td>
<td>250</td>
</tr>
<tr>
<td>Unincorporated - North Whittier</td>
<td>1755</td>
<td>20993</td>
<td>29</td>
<td>347</td>
</tr>
<tr>
<td>Unincorporated - Northeast San Gabriel</td>
<td>2833</td>
<td>11786</td>
<td>46</td>
<td>191</td>
</tr>
<tr>
<td>Unincorporated - Padua Hills</td>
<td>17</td>
<td>7907</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Palmdale</td>
<td>161</td>
<td>19121</td>
<td>5</td>
<td>594</td>
</tr>
<tr>
<td>Unincorporated - Palos Verdes Peninsula</td>
<td>48</td>
<td>7729</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Pearblossom/Llano</td>
<td>229</td>
<td>11708</td>
<td>2</td>
<td>102</td>
</tr>
<tr>
<td>Unincorporated - Pellissier Village</td>
<td>235</td>
<td>37964</td>
<td>1</td>
<td>162</td>
</tr>
<tr>
<td>Unincorporated - Placerita Canyon</td>
<td>8</td>
<td>1739</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Pomona</td>
<td>104</td>
<td>5366</td>
<td>2</td>
<td>103</td>
</tr>
<tr>
<td>Unincorporated - Quartz Hill</td>
<td>2282</td>
<td>17682</td>
<td>29</td>
<td>225</td>
</tr>
<tr>
<td>Unincorporated - Rancho Dominguez</td>
<td>654</td>
<td>24577</td>
<td>5</td>
<td>188</td>
</tr>
<tr>
<td>Unincorporated - Roosevelt</td>
<td>141</td>
<td>15145</td>
<td>1</td>
<td>107</td>
</tr>
<tr>
<td>Unincorporated - Rosewood</td>
<td>289</td>
<td>22473</td>
<td>5</td>
<td>389</td>
</tr>
<tr>
<td>Unincorporated - Rosewood/East Gardena</td>
<td>303</td>
<td>25398</td>
<td>6</td>
<td>503</td>
</tr>
<tr>
<td>Unincorporated - Rosewood/West Rancho Dominguez</td>
<td>787</td>
<td>23416</td>
<td>18</td>
<td>536</td>
</tr>
<tr>
<td>Unincorporated - Rowland Heights</td>
<td>5775</td>
<td>11319</td>
<td>85</td>
<td>167</td>
</tr>
<tr>
<td>Unincorporated - San Clemente Island</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - San Francisquito Canyon/Bouquet Canyon</td>
<td>28</td>
<td>3263</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - San Jose Hills</td>
<td>4748</td>
<td>23481</td>
<td>86</td>
<td>425</td>
</tr>
<tr>
<td>Unincorporated - San Pasqual</td>
<td>50</td>
<td>2457</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Sand Canyon</td>
<td>34</td>
<td>11039</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Santa Catalina Island</td>
<td>410</td>
<td>153558</td>
<td>3</td>
<td>1124</td>
</tr>
<tr>
<td>Unincorporated - Santa Monica Mountains*</td>
<td>1791</td>
<td>9618</td>
<td>18</td>
<td>97</td>
</tr>
<tr>
<td>Unincorporated - Saugus</td>
<td>239</td>
<td>154194</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Saugus/Canyon Country</td>
<td>66</td>
<td>18539</td>
<td>1</td>
<td>281</td>
</tr>
<tr>
<td>Unincorporated - South Antelope Valley</td>
<td>73</td>
<td>16044</td>
<td>1</td>
<td>220</td>
</tr>
<tr>
<td>Unincorporated - South El Monte</td>
<td>487</td>
<td>27131</td>
<td>6</td>
<td>334</td>
</tr>
<tr>
<td>Unincorporated - South San Gabriel</td>
<td>1439</td>
<td>16264</td>
<td>51</td>
<td>576</td>
</tr>
<tr>
<td>Unincorporated - South Whittier</td>
<td>12486</td>
<td>21083</td>
<td>172</td>
<td>290</td>
</tr>
<tr>
<td>Unincorporated - Southeast Antelope Valley</td>
<td>147</td>
<td>18822</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Stevenson Ranch</td>
<td>2881</td>
<td>13741</td>
<td>9</td>
<td>43</td>
</tr>
<tr>
<td>Unincorporated - Sun Village</td>
<td>1320</td>
<td>21869</td>
<td>14</td>
<td>232</td>
</tr>
<tr>
<td>Unincorporated - Sunrise Village</td>
<td>302</td>
<td>23302</td>
<td>1</td>
<td>77</td>
</tr>
<tr>
<td>Unincorporated - Twin Lakes/Oat Mountain</td>
<td>223</td>
<td>13450</td>
<td>4</td>
<td>241</td>
</tr>
<tr>
<td>Unincorporated - Val Verde</td>
<td>592</td>
<td>17891</td>
<td>3</td>
<td>91</td>
</tr>
<tr>
<td>Unincorporated - Valencia</td>
<td>485</td>
<td>15788</td>
<td>2</td>
<td>65</td>
</tr>
<tr>
<td>Unincorporated - Valinda</td>
<td>5627</td>
<td>24077</td>
<td>83</td>
<td>355</td>
</tr>
<tr>
<td>Unincorporated - View Park/Windsor Hills</td>
<td>1780</td>
<td>15299</td>
<td>17</td>
<td>146</td>
</tr>
<tr>
<td>Unincorporated - Walnut Park</td>
<td>4393</td>
<td>27213</td>
<td>58</td>
<td>359</td>
</tr>
<tr>
<td>Unincorporated - West Antelope Valley</td>
<td>94</td>
<td>6221</td>
<td>1</td>
<td>66</td>
</tr>
<tr>
<td>Unincorporated - West Carson</td>
<td>3943</td>
<td>17853</td>
<td>148</td>
<td>670</td>
</tr>
<tr>
<td>Unincorporated - West Chatsworth</td>
<td>4</td>
<td>33333</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - West LA</td>
<td>343</td>
<td>36029</td>
<td>18</td>
<td>1891</td>
</tr>
<tr>
<td>Unincorporated - West Puente Valley</td>
<td>2477</td>
<td>25186</td>
<td>28</td>
<td>285</td>
</tr>
<tr>
<td>Unincorporated - West Rancho Dominguez</td>
<td>301</td>
<td>22149</td>
<td>6</td>
<td>442</td>
</tr>
<tr>
<td>Unincorporated - West Whittier/Los Nietos</td>
<td>6226</td>
<td>23123</td>
<td>96</td>
<td>357</td>
</tr>
<tr>
<td>Unincorporated - Westfield/Academy Hills</td>
<td>118</td>
<td>9077</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>Unincorporated - Westhills</td>
<td>93</td>
<td>11085</td>
<td>1</td>
<td>119</td>
</tr>
<tr>
<td>Unincorporated - White Fence Farms</td>
<td>525</td>
<td>14255</td>
<td>9</td>
<td>244</td>
</tr>
<tr>
<td>Unincorporated - Whittier</td>
<td>534</td>
<td>14112</td>
<td>9</td>
<td>238</td>
</tr>
<tr>
<td>Unincorporated - Whittier Narrows</td>
<td>58</td>
<td>483333</td>
<td>1</td>
<td>8333</td>
</tr>
<tr>
<td>Unincorporated - Willowbrook</td>
<td>10073</td>
<td>28852</td>
<td>113</td>
<td>324</td>
</tr>
<tr>
<td>Unincorporated - Wiseburn</td>
<td>1045</td>
<td>17339</td>
<td>12</td>
<td>199</td>
</tr>
<tr>
<td>-  Under Investigation</td>
<td>39037</td>
<td></td>
<td>70</td>
<td></td>
</tr>
</tbody>
</table>
<caption><small class="text-muted">As of 6:00pm 01/10/2021<br>* Case and death numbers include cases associated with Correctional Facility Outbreaks located in the City/Community. Due to reporting delays numbers may not align with outbreak investigation counts presented for Correctional Facilities on the list of Los Angeles Residential Congregate Settings with One or More Positive COVID-19 Cases.<br>**These numbers are subject to change based on further investigation.<br>(1) No. of cases per 100,000 residents<br>(2) No. of deaths per 100,000 residents</small></caption>














						<!-- CASE SUMMARY TABLE section -->
						<!-- Footnote for historical data-->
						<br><br><small class="text-muted">For more information on how LA County Department of Public Health counts COVID-19 cases, please visit the “About” tab on the <a href="http://dashboard.publichealth.lacounty.gov/covid19_surveillance_dashboard/">COVID-19 Surveillance Dashboard</a>.</small>


					</div>
				</div>
			</div>
			<!-- END of LOCATIONS LISTING Section -->
			
	

		
			
			<!-- TOP 25 section -->
			<!--<div id="top-25" class="container-xl mt-5 pt-2 pb-0 mb-3 aqua">
				<div class="row center mb-4">
					<div class="col">
						<h2 class="h5 text-white text-M-700">LAC DPH Laboratory Confirmed COVID-19<br>Recent 14-day Cumulative Case and Rate per 100,000 by the Top 25 Cities/Communities<sup>1,2</sup></h2>
					</div>
				</div>
			</div>
			<div class="container-xl pb-4">
				<div class="row center mb-3">
					<div class="col">
						Time period: March 21 - April 3, 2021
					</div>
				</div>
				<div class="row">
					<div class="col">

					--><!-- TOP 25 TABLE section -->


					<!-- TOP 25 TABLE section --
					</div>
				</div>
			</div>-->
			<!-- END of TOP 25 Section -->

			
			
			<!-- RECENT TRENDS section -->
			<!--<div id="recent-trends" class="container-xl mt-5 pt-2 pb-0 mb-3 aqua">
				<div class="row center mb-4">
					<div class="col">
						<h2 class="h5 text-white text-M-700">LAC DPH Laboratory Confirmed COVID-19<br>14-day Cumulative Case and Rate Recent Trends by City/Community<sup>1,2</sup><br>
						</h2>
					</div>
				</div>
			</div>
			<div class="container-xl pb-4">
				<div class="row center mb-3">
					<div class="col">
						Time period: March 21 - April 3, 2021
					</div>
				</div>
				<div class="row">
					<div class="col">

					--><!-- RECENT TRENDS TABLE section -->



					<!-- RECENT TRENDS TABLE section -->
					<!--</div>
				</div>
			</div>
			<!-- END of RECENT TRENDS Section -->

			


			<!-- RESIDENTIAL SETTINGS section -->
			<div id="residential-settings" class="container-xl mt-5 pt-2 pb-0 mb-3 aqua">
				<div class="row center mb-4">
					<div class="col">
						<h2 class="h5 text-white text-M-700">Active Outbreaks at Residential Congregate and Acute Care Settings with (1) At Least One <nobr>Laboratory-Confirmed</nobr> Resident, or (2) Two or More <nobr>Laboratory-Confirmed</nobr> Staff in <nobr>Long-Term</nobr> Care Facilities that are not Skilled Nursing Facilities, or (3) Three or More <nobr>Laboratory-Confirmed</nobr> Staff within 10 days in Skilled Nursing Facilities, or (4) Three or More <nobr>Laboratory-Confirmed</nobr> Staff in Shared Housing</h2>
					</div>
				</div>
			</div>
			<div class="container-xl pb-4">
				<div class="row">
					<div class="col">

						<!-- RESIDENTIAL SETTINGS TABLE section -->


						


<table class="table table-striped table-bordered table-sm overflow-y">
<thead class="text-white"><tr>
<th>Obs</th>
<th>Setting Name</th>
<th>City</th>
<th>Number of Confirmed Staff</th>
<th>Number of Confirmed Residents</th>
<th>Total Deaths</th>
</tr></thead>
<tbody>
<tr>
<td>1</td>
<td>Aegis Living Granada Hills</td>
<td>Granada Hills, CA</td>
<td>13</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>2</td>
<td>Affinity Healthcare Center</td>
<td>Paramount, CA</td>
<td>2</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>3</td>
<td>Alcoholism Center For Women</td>
<td>Los Angeles, CA</td>
<td>3</td>
<td>26</td>
<td>0</td>
</tr>
<tr>
<td>4</td>
<td>Alexandria Care Center</td>
<td>Los Angeles, CA</td>
<td>19</td>
<td>25</td>
<td>0</td>
</tr>
<tr>
<td>5</td>
<td>Alhambra Hospital Medical Center D/P SNF</td>
<td>Alhambra, CA</td>
<td>1</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>6</td>
<td>All Care - Amalfi</td>
<td>Woodland Hills, CA</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>7</td>
<td>Ambitions - 219th Facility</td>
<td>Torrance, CA</td>
<td>4</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>8</td>
<td>Ambitions - Rose House 2</td>
<td>Burbank, CA</td>
<td>4</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>9</td>
<td>Ambitions - Van Ruiten Street</td>
<td>Bellflower, CA</td>
<td>5</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>10</td>
<td>Amistad de Los Angeles</td>
<td>Los Angeles, CA</td>
<td>3</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>11</td>
<td>Amity Beacon Transitional Housing</td>
<td>Los Angeles, CA</td>
<td>0</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>12</td>
<td>Andover Home</td>
<td>Claremont, CA</td>
<td>4</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>13</td>
<td>Angel Step Too</td>
<td>Bellflower, CA</td>
<td>4</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>14</td>
<td>Antelope Valley Care Center</td>
<td>Lancaster, CA</td>
<td>7</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>15</td>
<td>Ararat Nursing Facility</td>
<td>Mission Hills, CA</td>
<td>22</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>16</td>
<td>Arcadia Care Center (Previously Arcadia Health Care Center)</td>
<td>Arcadia, CA</td>
<td>24</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>17</td>
<td>Artesia Christian Home (RCFE)</td>
<td>Artesia, CA</td>
<td>7</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>18</td>
<td>Assisted Living and Wellness - Naomi</td>
<td>Arcadia, CA</td>
<td>2</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>19</td>
<td>Astoria Nursing and Rehab Center</td>
<td>Sylmar, CA</td>
<td>2</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>20</td>
<td>Atherton Baptist Homes (RCFE)</td>
<td>Alhambra, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>21</td>
<td>Aurora Charter Oak (Acute Psychiatric Hospital)</td>
<td>Covina, CA</td>
<td>2</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>22</td>
<td>Aurora Charter Oak, Building A-East</td>
<td>Covina, CA</td>
<td>14</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>23</td>
<td>Aurora Charter Oak, Building C-North</td>
<td>Covina, CA</td>
<td>9</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>24</td>
<td>Autumn Hills Health Care Center</td>
<td>Glendale, CA</td>
<td>20</td>
<td>25</td>
<td>2</td>
</tr>
<tr>
<td>25</td>
<td>Avalon Villa Care Center</td>
<td>Los Angeles, CA</td>
<td>11</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>26</td>
<td>Baldwin Gardens Nursing Center</td>
<td>Temple City, CA</td>
<td>4</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>27</td>
<td>Bay Crest Care Center</td>
<td>Torrance, CA</td>
<td>9</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>28</td>
<td>Beit T'shuvah</td>
<td>Los Angeles, CA</td>
<td>11</td>
<td>27</td>
<td>0</td>
</tr>
<tr>
<td>29</td>
<td>Bel Tooren Villa Convalescent Hospital</td>
<td>Bellflower, CA</td>
<td>19</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>30</td>
<td>Bell Gardens Manor</td>
<td>Bell Gardens, CA</td>
<td>1</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>31</td>
<td>Bellflower Post Acute</td>
<td>Bellflower, CA</td>
<td>7</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>32</td>
<td>Belmont Village Hollywood</td>
<td>Los Angeles, CA</td>
<td>6</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>33</td>
<td>Belmont Village Rancho Palos Verdes</td>
<td>Rancho Palos Verdes, CA</td>
<td>7</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>34</td>
<td>Belmont Village Westwood</td>
<td>Los Angeles, CA</td>
<td>13</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>35</td>
<td>Berkley East Healthcare Center (Previously Berkley East Convalescent Hospital)</td>
<td>Santa Monica, CA</td>
<td>28</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>36</td>
<td>Berkley Valley Post-Acute (Previously Berkley Valley Convalescent Hospital)</td>
<td>Van Nuys, CA</td>
<td>6</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>37</td>
<td>Bridges To Recovery - Foothill Road</td>
<td>Beverly Hills, CA</td>
<td>4</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>38</td>
<td>Brier Oak on Sunset</td>
<td>Los Angeles, CA</td>
<td>25</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>39</td>
<td>Brittany's Place., Inc.</td>
<td>Los Angeles, CA</td>
<td>1</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>40</td>
<td>Broadway Healthcare Center</td>
<td>San Gabriel, CA</td>
<td>12</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>41</td>
<td>Brookdale Alhambra</td>
<td>Alhambra, CA</td>
<td>8</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>42</td>
<td>Brookdale Central Whittier</td>
<td>Whittier, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>43</td>
<td>Brookfield Healthcare Center</td>
<td>Downey, CA</td>
<td>20</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>44</td>
<td>Burbank Retirement Villa West (Previously Le Bleu Chateau - Gold)</td>
<td>Burbank, CA</td>
<td>2</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>45</td>
<td>California Healthcare and Rehabilitation Center</td>
<td>Van Nuys, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>46</td>
<td>California Mentor Meadcliff Home</td>
<td>Diamond Bar, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>47</td>
<td>California Post Acute Convalescent Center</td>
<td>Los Angeles, CA</td>
<td>12</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>48</td>
<td>Canon Human Services</td>
<td>Los Angeles, CA</td>
<td>0</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>49</td>
<td>Canyon Trails at Topanga Senior Living</td>
<td>Canoga Park, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>50</td>
<td>Casa Bonita Convalescent Hospital</td>
<td>San Dimas, CA</td>
<td>8</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>51</td>
<td>Casitas Care Center</td>
<td>Granada Hills, CA</td>
<td>9</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>52</td>
<td>Cedars Assisted Living</td>
<td>Northridge, CA</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>53</td>
<td>Center For Discovery - Whittier</td>
<td>Whittier, CA</td>
<td>10</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>54</td>
<td>Center For Discovery and Adolescent Change IV</td>
<td>La Habra Heights, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>55</td>
<td>Centinela Skilled Nursing &amp; Wellness Centre West</td>
<td>Inglewood, CA</td>
<td>5</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>56</td>
<td>Chandler Convalescent Hospital</td>
<td>Glendale, CA</td>
<td>5</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>57</td>
<td>Chatsworth Park Health Care Center</td>
<td>Chatsworth, CA</td>
<td>25</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>58</td>
<td>Chino Valley Health Care Center</td>
<td>Pomona, CA</td>
<td>2</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>59</td>
<td>Choices R Us - Woodhue</td>
<td>Pico Rivera, CA</td>
<td>1</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>60</td>
<td>Claremont Care Center</td>
<td>Pomona, CA</td>
<td>4</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>61</td>
<td>Claremont Manor Care Center</td>
<td>Claremont, CA</td>
<td>4</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>62</td>
<td>Claremont Place</td>
<td>Claremont, CA</td>
<td>7</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>63</td>
<td>Clearwater at South Bay</td>
<td>Torrance, CA</td>
<td>4</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>64</td>
<td>College Medical Center</td>
<td>Hawthorne, CA</td>
<td>13</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>65</td>
<td>College Vista Post-Acute</td>
<td>Los Angeles, CA</td>
<td>4</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>66</td>
<td>Country Manor Healthcare</td>
<td>Lake View Terrace, CA</td>
<td>13</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>67</td>
<td>Country Villa East Nursing Center</td>
<td>Los Angeles, CA</td>
<td>15</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>68</td>
<td>Country Villa North Convalescent Center</td>
<td>Los Angeles, CA</td>
<td>8</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>69</td>
<td>Country Villa Sheraton Nursing and Rehab Center</td>
<td>North Hills, CA</td>
<td>5</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>70</td>
<td>Country Villa South Convalescent Center</td>
<td>Los Angeles, CA</td>
<td>7</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>71</td>
<td>Country Villa Terrace Assisted Living</td>
<td>Los Angeles, CA</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>72</td>
<td>Country Villa Wilshire Convalescent Center</td>
<td>Los Angeles, CA</td>
<td>14</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>73</td>
<td>Courtyard Care Center</td>
<td>Signal Hill, CA</td>
<td>8</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>74</td>
<td>Covina Rehabilitation Center</td>
<td>Covina, CA</td>
<td>9</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>75</td>
<td>Crenshaw Nursing Home</td>
<td>Los Angeles, CA</td>
<td>3</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>76</td>
<td>CRI-Help, Inc. - Pfleger Residential</td>
<td>North Hollywood, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>77</td>
<td>Desert Canyon Post Acute SNF</td>
<td>Lancaster, CA</td>
<td>22</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>78</td>
<td>Dimondale Adolescent Care Facility #7</td>
<td>Lancaster, CA</td>
<td>2</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>79</td>
<td>Downey Community Health Center</td>
<td>Downey, CA</td>
<td>4</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>80</td>
<td>Downey Post Acute</td>
<td>Downey, CA</td>
<td>20</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>81</td>
<td>Downey Retirement Center</td>
<td>Downey, CA</td>
<td>5</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>82</td>
<td>DSH - Metropolitan State Hospital Forensic Unit 407</td>
<td>Norwalk, CA</td>
<td>2</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>83</td>
<td>DSH - Metropolitan State Hospital Forensic Unit 409</td>
<td>Norwalk, CA</td>
<td>6</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>84</td>
<td>DSH - Metropolitan State Hospital Forensic Unit 411</td>
<td>Norwalk, CA</td>
<td>7</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>85</td>
<td>DSH - Metropolitan State Hospital SNF Unit 406</td>
<td>Norwalk, CA</td>
<td>6</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>86</td>
<td>DSH - Metropolitan State Hospital Unit 102</td>
<td>Norwalk, CA</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>87</td>
<td>DSH - Metropolitan State Hospital Unit 106</td>
<td>Norwalk, CA</td>
<td>5</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>88</td>
<td>DSH - Metropolitan State Hospital Unit 402</td>
<td>Norwalk, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>89</td>
<td>DSH - Metropolitan State Hospital Unit 412</td>
<td>Norwalk, CA</td>
<td>3</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>90</td>
<td>Eastland Subacute and Rehabilitation Center</td>
<td>El Monte, CA</td>
<td>14</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>91</td>
<td>El Rancho Vista Health Care Center</td>
<td>Pico Rivera, CA</td>
<td>4</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>92</td>
<td>Elwyn NC Barnwall</td>
<td>La Mirada, CA</td>
<td>7</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>93</td>
<td>Elwyn NC Scenic</td>
<td>Whittier, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>94</td>
<td>Emanate Health Inter-Community Hospital D/P APH</td>
<td>Covina, CA</td>
<td>5</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>95</td>
<td>Evolve Treatment Centers - Vanalden</td>
<td>Tarzana, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>96</td>
<td>Exodus Recovery - Crisis Residential Treatment Program</td>
<td>Los Angeles, CA</td>
<td>4</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>97</td>
<td>Fireside Health Care Center</td>
<td>Santa Monica, CA</td>
<td>9</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>98</td>
<td>Foster Avenue Home</td>
<td>Norwalk, CA</td>
<td>0</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>99</td>
<td>Founder's House of Hope</td>
<td>Artesia, CA</td>
<td>6</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>100</td>
<td>Fountainview at Gonda Westside</td>
<td>Los Angeles, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>101</td>
<td>Gardena Convalescent Center</td>
<td>Gardena, CA</td>
<td>11</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>102</td>
<td>Gilmar Manor</td>
<td>Van Nuys, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>103</td>
<td>Glen Park at Glendale - Boynton St</td>
<td>Glendale, CA</td>
<td>1</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>104</td>
<td>Glendale Healthcare Center</td>
<td>Glendale, CA</td>
<td>7</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>105</td>
<td>Glendale Post Acute Center</td>
<td>Glendale, CA</td>
<td>6</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>106</td>
<td>Glendora Canyon Transitional Care Unit</td>
<td>Glendora, CA</td>
<td>1</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>107</td>
<td>Glendora Grand Convalescent Hospital</td>
<td>Glendora, CA</td>
<td>34</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>108</td>
<td>Golden State Colonial Healthcare Center</td>
<td>North Hollywood, CA</td>
<td>7</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>109</td>
<td>Grand Valley Health Care Center</td>
<td>Van Nuys, CA</td>
<td>2</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>110</td>
<td>Green Acres Healthcare Center</td>
<td>Rosemead, CA</td>
<td>8</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>111</td>
<td>Griffith Park Healthcare Center</td>
<td>Glendale, CA</td>
<td>7</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>112</td>
<td>Harbor UCLA Medical Center #1</td>
<td>Torrance, CA</td>
<td>0</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>113</td>
<td>Harbor UCLA Medical Center #2</td>
<td>Torrance, CA</td>
<td>0</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>114</td>
<td>Haskell House</td>
<td>North Hills, CA</td>
<td>5</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>115</td>
<td>Hathaway-Sycamores Child and Family Services</td>
<td>Altadena, CA</td>
<td>5</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>116</td>
<td>Hawthorne Healthcare &amp; Wellness Centre</td>
<td>Hawthorne, CA</td>
<td>10</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>117</td>
<td>HealthRIGHT 360 - Prototypes Residential DMC</td>
<td>Pomona, CA</td>
<td>3</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>118</td>
<td>HealthRIGHT 360 - Walden House</td>
<td>Los Angeles, CA</td>
<td>7</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>119</td>
<td>Helen Evans Home</td>
<td>Hacienda Heights, CA</td>
<td>4</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>120</td>
<td>Hollywood Premier Healthcare Center</td>
<td>Los Angeles, CA</td>
<td>17</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>121</td>
<td>Hope House For The Multiple-Handicapped - Hope House</td>
<td>El Monte, CA</td>
<td>5</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>122</td>
<td>Humble Haven RCFE II</td>
<td>Palmdale, CA</td>
<td>0</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>123</td>
<td>Huntington Healthcare Center</td>
<td>Los Angeles, CA</td>
<td>31</td>
<td>31</td>
<td>0</td>
</tr>
<tr>
<td>124</td>
<td>Huntington Park Nursing Center</td>
<td>Huntington Park, CA</td>
<td>14</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>125</td>
<td>Huntington Retirement Hotel</td>
<td>Torrance, CA</td>
<td>13</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>126</td>
<td>Hyde Park Healthcare Center (Previously Hyde Park Convalescent Hospital)</td>
<td>Los Angeles, CA</td>
<td>7</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>127</td>
<td>Infinity Care of East Los Angeles</td>
<td>Los Angeles, CA</td>
<td>8</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>128</td>
<td>Inland Valley Care and Rehabilitation Center</td>
<td>Pomona, CA</td>
<td>15</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>129</td>
<td>Inspire Malibu</td>
<td>Agoura Hills, CA</td>
<td>5</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>130</td>
<td>Ivy Creek Healthcare &amp; Wellness Centre</td>
<td>San Gabriel, CA</td>
<td>10</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>131</td>
<td>Ivy Park at Culver City (Previously Sunrise Villa Culver City)</td>
<td>Los Angeles, CA</td>
<td>3</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>132</td>
<td>Joyce Eisenberg-Keefer Medical Center D/P SNF</td>
<td>Reseda, CA</td>
<td>20</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>133</td>
<td>JWCH Institute, Inc. - Mini House</td>
<td>Los Angeles, CA</td>
<td>4</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>134</td>
<td>Kedren Community Mental Health Center</td>
<td>Los Angeles, CA</td>
<td>18</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>135</td>
<td>Kei-Ai Los Angeles Healthcare Center</td>
<td>Los Angeles, CA</td>
<td>26</td>
<td>7</td>
<td>1</td>
</tr>
<tr>
<td>136</td>
<td>Kei-Ai South Bay Healthcare Center</td>
<td>Gardena, CA</td>
<td>11</td>
<td>46</td>
<td>8</td>
</tr>
<tr>
<td>137</td>
<td>Kennedy Post Acute Care Center</td>
<td>Los Angeles, CA</td>
<td>5</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>138</td>
<td>Kingsley Manor Assisted Living</td>
<td>Los Angeles, CA</td>
<td>13</td>
<td>11</td>
<td>2</td>
</tr>
<tr>
<td>139</td>
<td>LA CADA Allen House</td>
<td>Santa Fe Springs, CA</td>
<td>9</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>140</td>
<td>Lakeview Terrace</td>
<td>Los Angeles, CA</td>
<td>23</td>
<td>25</td>
<td>0</td>
</tr>
<tr>
<td>141</td>
<td>Lakewood Healthcare Center</td>
<td>Downey, CA</td>
<td>8</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>142</td>
<td>Landmark Medical Center</td>
<td>Pomona, CA</td>
<td>15</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>143</td>
<td>Las Flores Convalescent Hospital</td>
<td>Gardena, CA</td>
<td>21</td>
<td>41</td>
<td>1</td>
</tr>
<tr>
<td>144</td>
<td>Lawndale Healthcare &amp; Wellness Centre, LLC</td>
<td>Lawndale, CA</td>
<td>22</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>145</td>
<td>Lee Adult Home</td>
<td>Torrance, CA</td>
<td>1</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>146</td>
<td>Lighthouse Healthcare Center</td>
<td>Los Angeles, CA</td>
<td>10</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>147</td>
<td>Little House</td>
<td>Bellflower, CA</td>
<td>1</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>148</td>
<td>Lomita Post-Acute Care Center</td>
<td>Lomita, CA</td>
<td>16</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>149</td>
<td>Los Palos Post-Acute Care Center</td>
<td>San Pedro, CA</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>150</td>
<td>Lynwood Post Acute Care Center (Previously Lynwood Healthcare Center)</td>
<td>Lynwood, CA</td>
<td>2</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>151</td>
<td>Maclay Healthcare Center</td>
<td>Sylmar, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>152</td>
<td>Marina Pointe Healthcare &amp; Subacute</td>
<td>Culver City, CA</td>
<td>11</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>153</td>
<td>Marycrest Manor</td>
<td>Culver City, CA</td>
<td>16</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>154</td>
<td>Masonic Homes</td>
<td>Covina, CA</td>
<td>5</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>155</td>
<td>Mayflower Care Center</td>
<td>El Monte, CA</td>
<td>5</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>156</td>
<td>Maywood Skilled Nursing &amp; Wellness Centre</td>
<td>Maywood, CA</td>
<td>11</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>157</td>
<td>MDH Davenrich</td>
<td>Santa Fe Springs, CA</td>
<td>2</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>158</td>
<td>MDH Specialized Care Homes 3 - Pasada</td>
<td>Whittier, CA</td>
<td>3</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>159</td>
<td>Meadowbrook Behavioral Health Center</td>
<td>Los Angeles, CA</td>
<td>10</td>
<td>26</td>
<td>0</td>
</tr>
<tr>
<td>160</td>
<td>Meadowbrook Senior Living Agoura Hills</td>
<td>Agoura Hills, CA</td>
<td>3</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>161</td>
<td>Memorial Hospital of Gardena D/P SNF</td>
<td>Gardena, CA</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>162</td>
<td>Merrill Gardens at Rolling Hills Estates</td>
<td>Rolling Hills Estates, CA</td>
<td>4</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>163</td>
<td>Mesa Glen Care Center</td>
<td>Glendora, CA</td>
<td>11</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>164</td>
<td>Mindful Growth Foundation</td>
<td>Los Angeles, CA</td>
<td>7</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>165</td>
<td>Mirada Hills Rehabilitation and Convalescent Hospital</td>
<td>La Mirada, CA</td>
<td>11</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>166</td>
<td>Momentum (Previously UCPLA) Harbor Home</td>
<td>Lomita, CA</td>
<td>11</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>167</td>
<td>Momentum (Previously UCPLA) Hubbard</td>
<td>Sylmar, CA</td>
<td>2</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>168</td>
<td>Monrovia Post Acute</td>
<td>Duarte, CA</td>
<td>6</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>169</td>
<td>Monte Vista Healthcare Center</td>
<td>Duarte, CA</td>
<td>3</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>170</td>
<td>Monterey Park Convalescent Hospital</td>
<td>Monterey Park, CA</td>
<td>9</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>171</td>
<td>Mt. San Antonio Gardens</td>
<td>Pomona, CA</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>172</td>
<td>Nazareth House</td>
<td>Los Angeles, CA</td>
<td>4</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>173</td>
<td>NeuroRestorative California (Oso South)</td>
<td>Chatsworth, CA</td>
<td>5</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>174</td>
<td>New Vista Nursing and Rehabilitation Center</td>
<td>Sunland, CA</td>
<td>18</td>
<td>36</td>
<td>0</td>
</tr>
<tr>
<td>175</td>
<td>North Valley Nursing Center</td>
<td>Tujunga, CA</td>
<td>13</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>176</td>
<td>North Walk Villa Convalescent Hospital</td>
<td>Norwalk, CA</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>177</td>
<td>Northridge Care Center</td>
<td>Reseda, CA</td>
<td>3</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>178</td>
<td>Northridge Hospital Medical Center D/P APH</td>
<td>Northridge, CA</td>
<td>0</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>179</td>
<td>Norwalk Community Hospital</td>
<td>Norwalk, CA</td>
<td>0</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>180</td>
<td>Norwalk Skilled Nursing &amp; Wellness Centre</td>
<td>Norwalk, CA</td>
<td>11</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>181</td>
<td>Nuestra Casa - Recovery Bridge Housing</td>
<td>South Gate, CA</td>
<td>15</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>182</td>
<td>Oakmont of Torrance</td>
<td>Torrance, CA</td>
<td>7</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>183</td>
<td>Oakmont of Valencia</td>
<td>Valencia, CA</td>
<td>5</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>184</td>
<td>Ocean Pointe Healthcare Center</td>
<td>Santa Monica, CA</td>
<td>2</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>185</td>
<td>Olive View UCLA Medical Center</td>
<td>Sylmar, CA</td>
<td>0</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>186</td>
<td>Olympia Convalescent Hospital</td>
<td>Los Angeles, CA</td>
<td>5</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>187</td>
<td>Pacific Post Acute</td>
<td>Santa Monica, CA</td>
<td>18</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>188</td>
<td>Pacifica Hospital of the Valley D/P APH</td>
<td>Sun Valley, CA</td>
<td>2</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>189</td>
<td>Pacifica Senior Living Hollywood Hills</td>
<td>Los Angeles, CA</td>
<td>3</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>190</td>
<td>Palazzo Post Acute</td>
<td>Los Angeles, CA</td>
<td>23</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>191</td>
<td>Panorama Gardens Nursing and Rehabilitation Center</td>
<td>Panorama City, CA</td>
<td>10</td>
<td>14</td>
<td>1</td>
</tr>
<tr>
<td>192</td>
<td>Paradigm Malibu - Point Dume</td>
<td>Malibu, CA</td>
<td>5</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>193</td>
<td>Park Avenue Healthcare &amp; Wellness Center</td>
<td>Pomona, CA</td>
<td>7</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>194</td>
<td>Parkwest Healthcare Center</td>
<td>Reseda, CA</td>
<td>16</td>
<td>42</td>
<td>0</td>
</tr>
<tr>
<td>195</td>
<td>Pasadena Park Healthcare &amp; Wellness Center</td>
<td>Pasadena, CA</td>
<td>13</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>196</td>
<td>Pearl of West Hills</td>
<td>West Hills, CA</td>
<td>1</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>197</td>
<td>Peck House ICF/DD-H</td>
<td>Torrance, CA</td>
<td>3</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>198</td>
<td>People's Care Ferrero</td>
<td>La Puente, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>199</td>
<td>People's Care Lomitas</td>
<td>La Puente, CA</td>
<td>14</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>200</td>
<td>People's Care Monterey Park Home</td>
<td>Monterey Park, CA</td>
<td>3</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>201</td>
<td>People's Care Viola</td>
<td>Pomona, CA</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>202</td>
<td>Percy Village</td>
<td>Los Angeles, CA</td>
<td>3</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>203</td>
<td>Phoenix House - Venice</td>
<td>Venice, CA</td>
<td>3</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>204</td>
<td>Pilgrim Place Health Services Center</td>
<td>Claremont, CA</td>
<td>1</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>205</td>
<td>Primrose Post-Acute</td>
<td>Inglewood, CA</td>
<td>16</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>206</td>
<td>Providence Holy Cross Medical Center D/P SNF</td>
<td>Mission Hills, CA</td>
<td>20</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>207</td>
<td>Providence Little Company of Mary Medical Center - San Pedro</td>
<td>San Pedro, CA</td>
<td>0</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>208</td>
<td>Providence Little Company of Mary Medical Center - Torrance</td>
<td>Torrance, CA</td>
<td>5</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>209</td>
<td>Providence Little Company of Mary Subacute Care Center D/P SNF</td>
<td>San Pedro, CA</td>
<td>13</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>210</td>
<td>Providence Little Company of Mary Transitional Care Center D/P SNF</td>
<td>Torrance, CA</td>
<td>3</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>211</td>
<td>Providence St. Elizabeth Care Center</td>
<td>North Hollywood, CA</td>
<td>21</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>212</td>
<td>Ramona Nursing and Rehabilitation Center</td>
<td>El Monte, CA</td>
<td>11</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>213</td>
<td>Rancho San Antonio Boys Home</td>
<td>Chatsworth, CA</td>
<td>26</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>214</td>
<td>Regency Grand at West Covina (Assisted Living and Memory Care)</td>
<td>West Covina, CA</td>
<td>5</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>215</td>
<td>REM California - Bellflower</td>
<td>Lakewood, CA</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>216</td>
<td>Rinaldi Convalescent Hospital</td>
<td>Granada Hills, CA</td>
<td>9</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>217</td>
<td>Rio Hondo Subacute &amp; Nursing Center</td>
<td>Montebello, CA</td>
<td>11</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>218</td>
<td>Riviera Healthcare Center</td>
<td>Pico Rivera, CA</td>
<td>12</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>219</td>
<td>Rosecrans Care Center</td>
<td>Gardena, CA</td>
<td>11</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>220</td>
<td>Royal Gardens Healthcare</td>
<td>Alhambra, CA</td>
<td>16</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>221</td>
<td>Royal Oaks (Independent Living)</td>
<td>Duarte, CA</td>
<td>8</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>222</td>
<td>Royal Palms Post Acute</td>
<td>Glendale, CA</td>
<td>21</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>223</td>
<td>Sakura Gardens of Los Angeles</td>
<td>Los Angeles, CA</td>
<td>6</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>224</td>
<td>San Dimas Retirement Center</td>
<td>San Dimas, CA</td>
<td>13</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>225</td>
<td>San Gabriel Convalescent Center</td>
<td>Rosemead, CA</td>
<td>12</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>226</td>
<td>Santa Fe Heights Healthcare Center LLC</td>
<td>Compton, CA</td>
<td>18</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>227</td>
<td>Santa Monica Convalescent Center I</td>
<td>Santa Monica, CA</td>
<td>8</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>228</td>
<td>Santa Monica Convalescent Center II</td>
<td>Santa Monica, CA</td>
<td>17</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>229</td>
<td>Sharon Care Center</td>
<td>Los Angeles, CA</td>
<td>18</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>230</td>
<td>Sherman Oaks Health &amp; Rehabilitation Center</td>
<td>Sherman Oaks, CA</td>
<td>12</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>231</td>
<td>Sherman Village Healthcare Center</td>
<td>Valley Village, CA</td>
<td>9</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>232</td>
<td>Sierra View Care Center</td>
<td>Baldwin Park, CA</td>
<td>9</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>233</td>
<td>Silverado Beach Cities</td>
<td>Redondo Beach, CA</td>
<td>9</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>234</td>
<td>Silverado Beverly Place</td>
<td>Los Angeles, CA</td>
<td>9</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>235</td>
<td>Silverado The Huntington Memory Care Community</td>
<td>Alhambra, CA</td>
<td>6</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>236</td>
<td>SoCal Post-Acute Care</td>
<td>Whittier, CA</td>
<td>6</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>237</td>
<td>Solheim Senior Community (SNF)</td>
<td>Los Angeles, CA</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>238</td>
<td>Southland Care Center</td>
<td>Norwalk, CA</td>
<td>19</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>239</td>
<td>Sparr Heights Estates</td>
<td>Montrose, CA</td>
<td>2</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>240</td>
<td>St. Anne's STRTP</td>
<td>Los Angeles, CA</td>
<td>11</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>241</td>
<td>Star View Adolescent Center</td>
<td>Torrance, CA</td>
<td>31</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>242</td>
<td>Star View Adolescent Center, Acute Psychiatric Hospital</td>
<td>Torrance, CA</td>
<td>14</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>243</td>
<td>Stoney Point Healthcare Center</td>
<td>Chatsworth, CA</td>
<td>27</td>
<td>37</td>
<td>0</td>
</tr>
<tr>
<td>244</td>
<td>Studio City Rehabilitation Center</td>
<td>Studio City, CA</td>
<td>17</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>245</td>
<td>Sunny Village Care Center</td>
<td>Alhambra, CA</td>
<td>3</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>246</td>
<td>Sunnyside Nursing Center</td>
<td>Torrance, CA</td>
<td>27</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>247</td>
<td>Sunnyview Care Center</td>
<td>Los Angeles, CA</td>
<td>4</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>248</td>
<td>Sunrise at Palos Verdes</td>
<td>Torrance, CA</td>
<td>13</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>249</td>
<td>Sunrise at Sterling Canyon</td>
<td>Santa Clarita, CA</td>
<td>10</td>
<td>3</td>
<td>1</td>
</tr>
<tr>
<td>250</td>
<td>Sunrise of Beverly Hills</td>
<td>Beverly Hills, CA</td>
<td>8</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>251</td>
<td>Sunrise of Hermosa Beach</td>
<td>Hermosa Beach, CA</td>
<td>20</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>252</td>
<td>Sunrise of Santa Monica</td>
<td>Santa Monica, CA</td>
<td>4</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>253</td>
<td>Sunrise of Studio City</td>
<td>Studio City, CA</td>
<td>8</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>254</td>
<td>Sunrise of West Hills</td>
<td>West Hills, CA</td>
<td>10</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>255</td>
<td>Sunset Manor Convalescent Hospital</td>
<td>El Monte, CA</td>
<td>12</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>256</td>
<td>Sylmar Health and Rehabilitation Center</td>
<td>Sylmar, CA</td>
<td>14</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>257</td>
<td>Tarzana Health and Rehabilitation Center</td>
<td>Tarzana, CA</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>258</td>
<td>Ternus Adult - Home #1</td>
<td>Lancaster, CA</td>
<td>2</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>259</td>
<td>The Beacon House Association of San Pedro</td>
<td>San Pedro, CA</td>
<td>8</td>
<td>23</td>
<td>0</td>
</tr>
<tr>
<td>260</td>
<td>The Canterbury (RCFE)</td>
<td>Rancho Palos Verdes, CA</td>
<td>12</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>261</td>
<td>The Claremont Hacienda (Previously Oak Park Manor)</td>
<td>Claremont, CA</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>262</td>
<td>The Earlwood</td>
<td>Torrance, CA</td>
<td>6</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>263</td>
<td>The Ellison John Transitional Care Center</td>
<td>Lancaster, CA</td>
<td>24</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>264</td>
<td>The Grove at Cerritos (RCFE)</td>
<td>Cerritos, CA</td>
<td>4</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>265</td>
<td>The Kensington Redondo Beach</td>
<td>Redondo Beach, CA</td>
<td>16</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>266</td>
<td>The Kensington Sierra Madre</td>
<td>Sierra Madre, CA</td>
<td>25</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>267</td>
<td>The Meadows Post Acute</td>
<td>Panorama City, CA</td>
<td>11</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>268</td>
<td>The Olive Leaf ICF</td>
<td>Reseda, CA</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>269</td>
<td>The Orchard Post Acute Care</td>
<td>Whittier, CA</td>
<td>26</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>270</td>
<td>The Pointe Malibu Residential Treatment Center</td>
<td>Malibu, CA</td>
<td>5</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>271</td>
<td>The Preserve at Woodland Hills</td>
<td>Woodland Hills, CA</td>
<td>3</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>272</td>
<td>The Rehabilitation Centre of Beverly Hills</td>
<td>Los Angeles, CA</td>
<td>32</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>273</td>
<td>The Terraces at Via Verde - Memory Care</td>
<td>San Dimas, CA</td>
<td>2</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>274</td>
<td>The Village at Northridge</td>
<td>Northridge, CA</td>
<td>6</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>275</td>
<td>The Village at Sherman Oaks</td>
<td>Sherman Oaks, CA</td>
<td>8</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>276</td>
<td>Thoreau House 2</td>
<td>Los Angeles, CA</td>
<td>4</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>277</td>
<td>Twelve Oaks Senior Living</td>
<td>La Crescenta, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>278</td>
<td>University Park Healthcare Center</td>
<td>Los Angeles, CA</td>
<td>7</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>279</td>
<td>VA Greater LA Healthcare System</td>
<td>Los Angeles, CA</td>
<td>12</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>280</td>
<td>Valley Palms Care Center</td>
<td>North Hollywood, CA</td>
<td>5</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>281</td>
<td>Valley Village Care Center (Previously Windsor Gardens Healthcare Center of the Valley)</td>
<td>North Hollywood, CA</td>
<td>34</td>
<td>64</td>
<td>0</td>
</tr>
<tr>
<td>282</td>
<td>Valley Vista Nursing and Transitional Care LLC</td>
<td>North Hollywood, CA</td>
<td>22</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>283</td>
<td>Vernon Healthcare Center</td>
<td>Los Angeles, CA</td>
<td>0</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>284</td>
<td>Veterans Home of California - West Los Angeles</td>
<td>Los Angeles, CA</td>
<td>64</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>285</td>
<td>Victoria Care Center</td>
<td>Baldwin Park, CA</td>
<td>10</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>286</td>
<td>View Heights Convalescent Hospital</td>
<td>Los Angeles, CA</td>
<td>30</td>
<td>33</td>
<td>0</td>
</tr>
<tr>
<td>287</td>
<td>View Park Convalescent Hospital</td>
<td>Los Angeles, CA</td>
<td>1</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>288</td>
<td>Villa Del Rio Convalescent Center</td>
<td>Bell Gardens, CA</td>
<td>3</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>289</td>
<td>Villa Elena Healthcare Center</td>
<td>Norwalk, CA</td>
<td>4</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>290</td>
<td>Visions Treatment Center</td>
<td>Woodland Hills, CA</td>
<td>5</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>291</td>
<td>Vista Del Mar Child and Family Services, Community Treatment Center</td>
<td>Los Angeles, CA</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>292</td>
<td>Wayfinder Family Services - TSCF</td>
<td>View Park, CA</td>
<td>3</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>293</td>
<td>West Gardena Post Acute (Previously Greenfield Care Center of Gardena)</td>
<td>Gardena, CA</td>
<td>18</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>294</td>
<td>West Haven Healthcare Center</td>
<td>West Covina, CA</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>295</td>
<td>West Hills Health and Rehabilitation Center</td>
<td>Canoga Park, CA</td>
<td>4</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>296</td>
<td>West Valley Post Acute</td>
<td>West Hills, CA</td>
<td>22</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>297</td>
<td>Westlake Convalescent Hospital</td>
<td>Los Angeles, CA</td>
<td>14</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>298</td>
<td>Whittier Glen Assisted Living</td>
<td>Whittier, CA</td>
<td>6</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>299</td>
<td>Whittier Hills Health Care Center</td>
<td>Whittier, CA</td>
<td>27</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>300</td>
<td>Windsor Palms Care Center of Artesia</td>
<td>Artesia, CA</td>
<td>27</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>301</td>
<td>Windsor Terrace Healthcare Center</td>
<td>Van Nuys, CA</td>
<td>7</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>302</td>
<td>Woodland Care Center</td>
<td>Reseda, CA</td>
<td>18</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>303</td>
<td>York Healthcare &amp; Wellness Centre</td>
<td>Los Angeles, CA</td>
<td>8</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>Total</td>
<td></td>
<td></td>
<td>2748</td>
<td>1702</td>
<td>16</td>
</tr>
</tbody>
</table>
<caption><small class="text-muted">These data are dynamic and may not reflect real-time investigation counts for these settings. Data will change based on daily information gathered by public health investigators overseeing, supervising, and closing each investigation. As of March 24, outbreaks that have met criteria for closure (no new cases identified for at least two weeks) but are pending final documentation have been removed from our active outbreak listings. As outbreaks continue to decrease, we will be able to identify those that have met criteria for closure more quickly. Confirmed case data reflect aggregate counts abstracted from IRIS's COVID-19 outbreak details for current COVID-19 outbreaks in Los Angeles County. These include cases reported since the beginning of the current active outbreak and may include some cases that have since recovered. The number of confirmed deaths reflects individual-level counts abstracted from IRIS's COVID-19 disease incidents that have known links to each outbreak setting’s current active outbreak. Acute care facilities include hospitals and psychiatric hospitals. Residential congregate settings include Skilled Nursing, Assisted Living, Other Long-Term Care, and Group Home facilities. All resident cases and deaths are counted for the city/community in which the facility is located. This list is intended to inform the public of the current COVID-19 community outbreaks in Los Angeles County. Inclusion on this list does not suggest neglect or wrongdoing on the part of the setting.<br>*Beginning 12/29/21, Skilled Nursing Facility outbreak definition will be updated to at least one case in a resident who has been at the facility for at least 7 days.</small></caption>










						<!-- End of RESIDENTIAL SETTINGS TABLE section -->
					</div>
				</div>
			</div>
			<!-- End of RESIDENTIAL SETTINGS section -->
			
			




			<!-- SNF -->
			<div id="snf-deaths" class="container-xl mt-5 pt-2 pb-0 mb-3 aqua">
				<div class="row center mb-4">
					<div class="col">
						<h2 class="h5 text-white text-M-700">7-day Average Daily Total and Skilled Nursing Facility-Associated COVID-19 Laboratory Confirmed Case Deaths by Date of Death<sup>1,2,3,4,5</sup>
</h2>
					</div>
				</div>
			</div>
			<div class="container-xl pb-4">
				<div class="row">
					<div class="col">
						<p class="center">
							This figure uses a 7-day rolling average to show the daily number of all COVID-19 deaths and COVID-19 deaths among residents of skilled nursing facilities (SNFs) over time. The 7-day rolling average is calculated for each day by averaging the number of deaths that occurred on that day, and the six days before. This approach prevents daily ups-and-downs from skewing the data and shows a clearer picture of death trends. Recent death data are shown within gray shading due to a time lag in death reporting; trend lines within the gray area should be interpreted with caution.
						</p>

						<!-- GRAPH section -->
						<div class="center">
							<img src="images/graph-snfdeaths.png" width="80%" alt="7-day Average Daily Total and Skilled Nursing Facility-Associated COVID-19 Laboratory Conrfirmed Case Deaths by Date of Death">
</div>

						<small class="text-muted">
							1 Cumulative since January 31, 2020. Data may be updated in between reports on LAC website and/or press releases.<br>
							2 Reflective of data for day before report date through 8:00pm.<br>
							3 Deaths reported by Date of Death or Date Received if Date of Death is missing<br>
							4 Skilled Nursing Facility (SNF) Death- includes deaths of those who developed COVID-19 symptoms 48 hours before or after discharge from a skilled nursing facility; excludes deaths among staff working at SNFs<br></small>
						<br><!-- End of GRAPH section -->
</div>
				</div>
			</div>
			<!-- End of SNF -->





			<!-- NON-RES SETTINGS section -->
			<div id="nonres-settings" class="container-xl mt-5 pt-2 pb-0 mb-3 aqua">
				<div class="row center mb-4">
					<div class="col">
						<h2 class="h5 text-white text-M-700">Active Outbreaks at <nobr>Non-Residential</nobr> Settings with Three or More <nobr>Laboratory-Confirmed</nobr><nobr>COVID-19</nobr> Cases</h2>
					</div>
				</div>
			</div>
			<div class="container-xl pb-4">
				<div class="row">
					<div class="col">
						<p class="center">
							(including workplaces, food and retail stores)
						</p>

						<!-- NON-RES TABLE section -->

						


<table class="table table-striped table-bordered table-sm overflow-y">
<thead class="text-white"><tr>
<th>Obs</th>
<th>Setting Name</th>
<th>Address</th>
<th>Total Confirmed Staff</th>
<th>Total Confirmed Non-Staff</th>
</tr></thead>
<tbody>
<tr>
<td>1</td>
<td>7 Leaves Cafe - Artesia</td>
<td>12154 Artesia Blvd, Artesia, CA, 90701</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>2</td>
<td>7 Leaves Cafe - Cerritos</td>
<td>20226 Pioneer Blvd, Cerritos, CA, 90703</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>3</td>
<td>99 Cents Only Stores Warehouse and Corporate Office</td>
<td>4000 Union Pacific Ave, Commerce, CA, 90023</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>4</td>
<td>Academy Museum of Motion Pictures</td>
<td>6067 Wilshire Blvd, Los Angeles, CA, 90036</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>5</td>
<td>ACCESS Specialty Animal Hospitals - Los Angeles</td>
<td>9599 Jefferson Blvd, Culver City, CA, 90232</td>
<td>33</td>
<td>0</td>
</tr>
<tr>
<td>6</td>
<td>ACCESS Specialty Animal Hospitals - San Fernando Valley</td>
<td>20051 Ventura Blvd, Woodland Hills, CA, 91364</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>7</td>
<td>ACCO Engineered Systems - Culver City Construction Site</td>
<td>9336 Washington Blvd, Culver City, CA, 90232</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>8</td>
<td>Action Property Management - Los Angeles</td>
<td>600 Wilshire Blvd, Ste 1660, Los Angeles, CA, 90017</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>9</td>
<td>Air Lease Corporation - Los Angeles</td>
<td>2000 Ave of The Stars, Los Angeles, CA, 90067</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>10</td>
<td>Alias</td>
<td>503 N Fairfax Ave, Los Angeles, CA, 90036</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>11</td>
<td>All Time Restaurant</td>
<td>2040 Hillhurst Ave, Los Angeles, CA, 90027</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>12</td>
<td>Amazon LAX22</td>
<td>9336 Washington Blvd, Culver City, CA, 90232</td>
<td>50</td>
<td>0</td>
</tr>
<tr>
<td>13</td>
<td>American Airlines</td>
<td>1 World Way, Los Angeles, CA, 90045</td>
<td>117</td>
<td>0</td>
</tr>
<tr>
<td>14</td>
<td>Americold - City of Industry 14840 West</td>
<td>14840 Proctor Ave, City of Industry, CA, 91746</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>15</td>
<td>Amplus Group</td>
<td>400 Crenshaw Blvd, Ste 100/200, Torrance, CA, 90503</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>16</td>
<td>APM Terminals Pacific LLC</td>
<td>2500 Navy Way, San Pedro, CA, 90731</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>17</td>
<td>Apple Store, Tower Theatre</td>
<td>802 S Broadway, Los Angeles, CA, 90014</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>18</td>
<td>Apple, Inc. - Corporate Office</td>
<td>1205 Colorado Ave, Santa Monica, CA, 90404</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>19</td>
<td>Arcadia Fire Department</td>
<td>710 S Santa Anita Ave, Arcadia, CA, 91006</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>20</td>
<td>Arktura LLC - Global HQ</td>
<td>18225 S Figueroa St, Gardena, CA, 90248</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>21</td>
<td>Ascend Group</td>
<td>6251 Bandini Blvd, Commerce, CA, 90040</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>22</td>
<td>AT&amp;T Mobility Services LLC</td>
<td>24236 Valencia Blvd, Valencia, CA, 91355</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>23</td>
<td>Athens Services - LANO Yard</td>
<td>12303 Montague St, Pacoima, CA, 91331</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>24</td>
<td>Athens Services - LASO Yard</td>
<td>1301 W 228th St, Torrance, CA, 90501</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>25</td>
<td>Athens Services - Salt Lake Yard</td>
<td>15045 Salt Lake Ave, La Puente, CA, 91746</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>26</td>
<td>Audi, Santa Monica</td>
<td>1020 Santa Monica Blvd, Santa Monica, CA, 90401</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>27</td>
<td>AV Escrow</td>
<td>44140 20th St W, Ste 107, Lancaster, CA, 93534</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>28</td>
<td>Bakkavor Foods</td>
<td>18201 Central Ave, Carson, CA, 90746</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>29</td>
<td>Baldwin Real Estate Management</td>
<td>50 E Foothill Blvd, Ste 200, Arcadia, CA, 91006</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>30</td>
<td>Bambee Headquarters</td>
<td>755 S Los Angeles St, Floor 4, Los Angeles, CA, 90014</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>31</td>
<td>Bar Verde at Nordstrom, Westfield Century City</td>
<td>10250 Santa Monica Blvd, Los Angeles, CA, 90067</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>32</td>
<td>Baseline Theatrical - Eliza Tour/Hamilton</td>
<td>6233 Hollywood Blvd, Los Angeles, CA, 90028</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>33</td>
<td>Bavel Restaurant DTLA</td>
<td>500 Mateo St, Los Angeles, CA, 90013</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>34</td>
<td>Benchmark Contractors</td>
<td>900 Corporate Pointe, Culver City, CA, 90230</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>35</td>
<td>Beverly Hills Hotel</td>
<td>9641 Sunset Blvd, Beverly Hills, CA, 90210</td>
<td>33</td>
<td>0</td>
</tr>
<tr>
<td>36</td>
<td>Bicycle Transit Systems</td>
<td>1349 Channing St, Los Angeles, CA, 90021</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>37</td>
<td>Big Blue Bus of Santa Monica</td>
<td>1660 7th St, Santa Monica, CA, 90401</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>38</td>
<td>Black Angus Steakhouse</td>
<td>15500 Whittier Blvd, Whittier, CA, 90603</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>39</td>
<td>BMW, Bob Smith (Robert A. Smith Inc.)</td>
<td>24500 Calabasas Rd, Calabasas, CA, 91302</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>40</td>
<td>BNBuilders, Inc. - Kite Pharma Project</td>
<td>2383 Utah Ave, El Segundo, CA, 90245</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>41</td>
<td>Bob's Discount Furniture Mid-City LA</td>
<td>4550 W Pico Blvd, Los Angeles, CA, 90019</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>42</td>
<td>Bottega Louie DTLA</td>
<td>700 S Grand Ave, Los Angeles, CA, 90017</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>43</td>
<td>Bottega Louie West Hollywood</td>
<td>8936 Santa Monica Blvd, West Hollywood, CA, 90069</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>44</td>
<td>Bright Event Rentals</td>
<td>1640 W 190th St, Torrance, CA, 90501</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>45</td>
<td>Buffalo Wild Wings, Burbank Town Center</td>
<td>127 E Palm Ave, Burbank, CA, 91502</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>46</td>
<td>Buffalo Wild Wings, Northridge Fashion Center</td>
<td>9301 Tampa Ave, Northridge, CA, 91324</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>47</td>
<td>Burbank Fire Department</td>
<td>311 E Orange Grove Ave, Burbank, CA, 91502</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>48</td>
<td>Bush Interiors, Inc.</td>
<td>169 N La Brea Ave, Ste D, Los Angeles, CA, 90036</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>49</td>
<td>California DMV - Bell Gardens</td>
<td>6801 Garfield Ave, Bell Gardens, CA, 90201</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>50</td>
<td>California DMV - Compton</td>
<td>2111 S Santa Fe Ave, Compton, CA, 90221</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>51</td>
<td>California DMV - Culver City</td>
<td>11400 W Washington Blvd, Los Angeles, CA, 90066</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>52</td>
<td>California DMV - Los Angeles</td>
<td>3615 S Hope St, Los Angeles, CA, 90007</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>53</td>
<td>California DMV - Pasadena</td>
<td>49 S Rosemead Blvd, Pasadena, CA, 91107</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>54</td>
<td>California Herbal Remedies</td>
<td>5470 Valley Blvd, Los Angeles, CA, 90032</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>55</td>
<td>California Highway Patrol - Los Angeles Communications Center</td>
<td>2901 W Broadway, Los Angeles, CA, 90041</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>56</td>
<td>California Pro Sports</td>
<td>1740 Palos Verdes Dr N, Harbor City, CA, 90710</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>57</td>
<td>California State Assembly</td>
<td>5601 W Slauson Ave, Ste 200, Culver City, CA, 90230</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>58</td>
<td>Calstar Motors</td>
<td>622 S Brand Blvd, Glendale, CA, 91204</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>59</td>
<td>Caltrans Maintenance Station Commerce</td>
<td>7300 Bandini Blvd, Commerce, CA, 90040</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>60</td>
<td>Caltrans Maintenance Station Foothill</td>
<td>850 E Huntington Dr, Monrovia, CA, 91016</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>61</td>
<td>Cantina FRIDA Mexican Cuisine &amp; Bar - Beverly Hills</td>
<td>252 N Beverly Dr, Beverly Hills, CA, 90210</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>62</td>
<td>Canyon Theatre Guild</td>
<td>24242 Main St, Newhall, CA, 91321</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>63</td>
<td>Care Ambulance Service</td>
<td>12160 Mora Dr, Santa Fe Springs, CA, 90670</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>64</td>
<td>CarMax Canoga Park #7124</td>
<td>21300 Roscoe Blvd, Canoga Park, CA, 91304</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>65</td>
<td>CarMax Duarte #7136</td>
<td>1131 Central Ave, Duarte, CA, 91010</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>66</td>
<td>CarMax Palmdale #6003</td>
<td>405 W Technology Dr, Palmdale, CA, 93551</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>67</td>
<td>Carmelized Productions</td>
<td>207 W Beach Ave, Inglewood, CA, 90302</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>68</td>
<td>Cast &amp; Crew Payroll, LLC</td>
<td>2300 W Empire Ave, 5th Floor, Burbank, CA, 91504</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>69</td>
<td>Castaway Restaurant</td>
<td>1250 E Harvard Rd, Burbank, CA, 91501</td>
<td>22</td>
<td>0</td>
</tr>
<tr>
<td>70</td>
<td>CEMCO Headquarters</td>
<td>13191 Crossroads Pkwy N, City of Industry, CA, 91746</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>71</td>
<td>Center For Autism and Related Disorders</td>
<td>1000 Corporate Center Dr, Ste 120, Monterey Park, CA, 91754</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>72</td>
<td>Center Theatre Group - Annex</td>
<td>601 W Temple St, Los Angeles, CA, 90012</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>73</td>
<td>Century Park Place Condominium Association</td>
<td>2106 Century Park Ln, Los Angeles, CA, 90067</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>74</td>
<td>Charles Schwab - Schwab Branch, Century City</td>
<td>1900 Ave of The Stars, Ste 101, Los Angeles, CA, 90067</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>75</td>
<td>Chart House</td>
<td>231 Yacht Club Way, Redondo Beach, CA, 90277</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>76</td>
<td>Chevrolet of Puente Hills</td>
<td>17300 Gale Ave, City of Industry, CA, 91748</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>77</td>
<td>Chevron El Segundo Refinery</td>
<td>324 W El Segundo Blvd, El Segundo, CA, 90245</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>78</td>
<td>Chick-fil-A Devonshire &amp; Reseda</td>
<td>18521 Devonshire St, Northridge, CA, 91324</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>79</td>
<td>Chick-fil-A Jefferson &amp; 405</td>
<td>11750 Jefferson Blvd, Los Angeles, CA, 90230</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>80</td>
<td>Chick-fil-A Santa Clarita</td>
<td>24180 Magic Mountain Pkwy, Santa Clarita, CA, 91355</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>81</td>
<td>Chick-fil-A White Oak &amp; Ventura</td>
<td>17660 Ventura Blvd, Encino, CA, 91316</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>82</td>
<td>Chili's Grill &amp; Bar, West Hills</td>
<td>6775 Fallbrook Ave, West Hills, CA, 91307</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>83</td>
<td>CIM Group</td>
<td>4700 Wilshire Blvd, Los Angeles, CA, 90010</td>
<td>21</td>
<td>0</td>
</tr>
<tr>
<td>84</td>
<td>City National Bank - Beverly Hills Wilshire</td>
<td>8641 Wilshire Blvd, Ste 101, Beverly Hills, CA, 90211</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>85</td>
<td>City of Arcadia Public Works - Services Department</td>
<td>11800 Goldring Rd, Arcadia, CA, 91006</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>86</td>
<td>City of Claremont</td>
<td>207 Harvard Ave, Claremont, CA, 91711</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>87</td>
<td>City of Manhattan Beach - City Hall</td>
<td>1400 Highland Ave, Manhattan Beach, CA, 90266</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>88</td>
<td>City of Norwalk Transportation Department - Norwalk Transit System</td>
<td>12650 Imperial Hwy, Norwalk, CA, 90650</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>89</td>
<td>City of Santa Fe Springs Department of Fire and Rescue</td>
<td>11300 Greenstone Ave, Santa Fe Springs, CA, 90670</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>90</td>
<td>City Storage Systems - Figueroa St</td>
<td>777 S Figueroa St, Ste 4100, Los Angeles, CA, 90017</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>91</td>
<td>Clearman's Gallery</td>
<td>7215 Rosemead Blvd, San Gabriel, CA, 91775</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>92</td>
<td>Clearman's North Woods Inn</td>
<td>540 N Azusa Ave, Covina, CA, 91722</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>93</td>
<td>Coco's Mission Hills</td>
<td>10841 Sepulveda Blvd, Mission Hills, CA, 91345</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>94</td>
<td>Comedy Club of Los Angeles</td>
<td>8162 Melrose Ave, Los Angeles, CA, 90046</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>95</td>
<td>Compton Creamery</td>
<td>1100 W Artesia Blvd, Compton, CA, 90220</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>96</td>
<td>Corcoran Global Living</td>
<td>2065 N Indian Hill Blvd, Claremont, CA, 91711</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>97</td>
<td>Costco Business Center Warehouse, Burbank #653</td>
<td>11428 Sherman Way, North Hollywood, CA, 91605</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>98</td>
<td>Costco Business Center Warehouse, Hawthorne #564</td>
<td>12530 Prairie Ave, Hawthorne, CA, 90250</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>99</td>
<td>Costco Warehouse, Azusa #412</td>
<td>1220 W Foothill Blvd, Azusa, CA, 91702</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>100</td>
<td>Costco Warehouse, Burbank #677</td>
<td>1051 W Burbank Blvd, Burbank, CA, 91506</td>
<td>45</td>
<td>0</td>
</tr>
<tr>
<td>101</td>
<td>Costco Warehouse, Hawthorne #671</td>
<td>14501 Hindry Ave, Hawthorne, CA, 90250</td>
<td>66</td>
<td>0</td>
</tr>
<tr>
<td>102</td>
<td>Costco Warehouse, Norwalk #410</td>
<td>12324 Hoxie Ave, Norwalk, CA, 90650</td>
<td>33</td>
<td>0</td>
</tr>
<tr>
<td>103</td>
<td>Costco Warehouse, San Dimas #1015</td>
<td>520 N Lone Hill Ave, San Dimas, CA, 91773</td>
<td>32</td>
<td>0</td>
</tr>
<tr>
<td>104</td>
<td>Costco Warehouse, Santa Clarita #447</td>
<td>18649 Via Princessa, Santa Clarita, CA, 91387</td>
<td>32</td>
<td>0</td>
</tr>
<tr>
<td>105</td>
<td>Costco Warehouse, Torrance #1202</td>
<td>2640 Lomita Blvd, Torrance, CA, 90505</td>
<td>34</td>
<td>0</td>
</tr>
<tr>
<td>106</td>
<td>Costco Warehouse, Westlake Village #117</td>
<td>5700 Lindero Canyon Rd, Westlake Village, CA, 91362</td>
<td>24</td>
<td>0</td>
</tr>
<tr>
<td>107</td>
<td>Costco Warehouse, Woodland Hills #1205</td>
<td>21800 Victory Blvd, Woodland Hills, CA, 91367</td>
<td>29</td>
<td>0</td>
</tr>
<tr>
<td>108</td>
<td>Cotton On Group</td>
<td>16511 Trojan Way, La Mirada, CA, 90638</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>109</td>
<td>Cotton On, Westfield Santa Anita</td>
<td>400 S Baldwin Ave Shop B9, Arcadia, CA, 91007</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>110</td>
<td>CR Laurence of Southern California</td>
<td>2503 E Vernon Ave, Vernon, CA, 90058</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>111</td>
<td>Craig's Restaurant</td>
<td>8826 Melrose Ave, West Hollywood, CA, 90069</td>
<td>19</td>
<td>0</td>
</tr>
<tr>
<td>112</td>
<td>Crypto.com Arena</td>
<td>1111 S Figueroa St, Ste 3100, Los Angeles, CA, 90015</td>
<td>61</td>
<td>0</td>
</tr>
<tr>
<td>113</td>
<td>Culver City Fire Department</td>
<td>9600 Culver Blvd, Culver City, CA, 90232</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>114</td>
<td>Curative - San Dimas</td>
<td>464 S Cataract Ave, San Dimas, CA, 91773</td>
<td>30</td>
<td>0</td>
</tr>
<tr>
<td>115</td>
<td>CVS Pharmacy #9707</td>
<td>14735 Ventura Blvd, Sherman Oaks, CA, 91403</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>116</td>
<td>Danone North America</td>
<td>18247 Arenth Ave, City of Industry, CA, 91748</td>
<td>22</td>
<td>0</td>
</tr>
<tr>
<td>117</td>
<td>Department of Social Services</td>
<td>101 N Brand Blvd, Glendale, CA, 91203</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>118</td>
<td>Din Tai Fung Glendale</td>
<td>177 Caruso Ave, Glendale, CA, 91210</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>119</td>
<td>Dodge Chrysler Jeep Ram, Rydell</td>
<td>700 San Fernando Rd, San Fernando, CA, 91340</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>120</td>
<td>Edward Myers &amp; Associates, Inc.</td>
<td>27202 Turnberry Ln Ste 200, Valencia, CA, 91355</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>121</td>
<td>El Clasificado</td>
<td>11205 Imperial Hwy, Norwalk, CA, 90650</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>122</td>
<td>Elephante (The Pelican, LLC)</td>
<td>1332 2nd St, Santa Monica, CA, 90401</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>123</td>
<td>Elite Property Management</td>
<td>3191 Casitas Ave, Ste 200, Los Angeles, CA, 90039</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>124</td>
<td>Enagic USA, Inc. - Los Angeles Torrance Office</td>
<td>4115 Spencer St, Torrance, CA, 90503</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>125</td>
<td>Encino Veterinary Center</td>
<td>17009 Ventura Blvd, Encino, CA, 91316</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>126</td>
<td>Envoy Air</td>
<td>6022 Avion Dr, Los Angeles, CA, 90045</td>
<td>37</td>
<td>0</td>
</tr>
<tr>
<td>127</td>
<td>Erewhon Market - Los Angeles</td>
<td>7660 Beverly Blvd, Los Angeles, CA, 90036</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>128</td>
<td>Erewhon Market - Silver Lake</td>
<td>4121 Santa Monica Blvd # 103, Los Angeles, CA, 90029</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>129</td>
<td>Erewhon Market - Studio City</td>
<td>12833 Ventura Blvd, Studio City, CA, 91604</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>130</td>
<td>European Wax Center, Marina Del Rey</td>
<td>4371 Glencoe Ave, Marina Del Rey, CA, 90292</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>131</td>
<td>Fabletics</td>
<td>555 N Aviation Blvd, El Segundo, CA, 90245</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>132</td>
<td>Fairmont Century Plaza</td>
<td>2025 Avenue of the Stars, Los Angeles, CA, 90067</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>133</td>
<td>Fashion Nova, Inc. Santa Fe Springs</td>
<td>12588 Lakeland Rd, Santa Fe Springs, CA, 90670</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>134</td>
<td>Fashion Nova, Inc. Vernon</td>
<td>2801 E 46th St, Vernon, CA, 90058</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>135</td>
<td>FedEx Express Hangar</td>
<td>7401 World Way W, Los Angeles, CA, 90045</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>136</td>
<td>FedEx Ground - Carson 905</td>
<td>1725 Charles Willard St, Carson, CA, 90746</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>137</td>
<td>FedEx Office</td>
<td>1006 Wilshire Blvd, Santa Monica, CA, 90401</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>138</td>
<td>FedEx Trade Networks Transport &amp; Brokerage</td>
<td>17210 S Main St, Gardena, CA, 90248</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>139</td>
<td>Fia Restaurant</td>
<td>2454 Wilshire Blvd, Santa Monica, CA, 90403</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>140</td>
<td>First Entertainment Credit Union</td>
<td>6735 Forest Lawn Dr, Hollywood, CA, 90068</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>141</td>
<td>Fleming's Steakhouse &amp; Wine Bar, LA Live</td>
<td>800 W Olympic Blvd, A135, Los Angeles, CA, 90015</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>142</td>
<td>Flying Embers Taproom</td>
<td>1581 Industrial St, Los Angeles, CA, 90021</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>143</td>
<td>FNS, Inc.</td>
<td>1545 Francisco St, Torrance, CA, 90501</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>144</td>
<td>Foot Locker, Westfield Topanga &amp; The Village</td>
<td>6600 Topanga Canyon Blvd, Canoga Park, CA, 91303</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>145</td>
<td>Forever 21 Headquarters</td>
<td>3880 N Mission Rd, Los Angeles, CA, 90031</td>
<td>19</td>
<td>0</td>
</tr>
<tr>
<td>146</td>
<td>Four Seasons Hotel Westlake Village</td>
<td>2 Dole Dr, Westlake Village, CA, 91362</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>147</td>
<td>Fox Sports Deportes</td>
<td>1440 S Sepulveda Blvd, Floor 3, Los Angeles, CA, 90025</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>148</td>
<td>Fox Sports Stage A</td>
<td>10201 W Pico Blvd, Los Angeles, CA, 90064</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>149</td>
<td>Fox Studios, Building 101</td>
<td>10201 W Pico Blvd, Bldg 101, Los Angeles, CA, 90064</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>150</td>
<td>Fred Segal - Sunset</td>
<td>8500 W Sunset Blvd, Los Angeles, CA, 90069</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>151</td>
<td>FRIDA Mexican Cuisine - Cerritos</td>
<td>11169 183rd St, Cerritos, CA, 90703</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>152</td>
<td>FRIDA Mexican Cuisine - Torrance</td>
<td>21438 Hawthorne Blvd, Torrance, CA, 90503</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>153</td>
<td>General Lee's</td>
<td>475 Gin Ling Way, Los Angeles, CA, 90012</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>154</td>
<td>Georgia-Pacific</td>
<td>15500 Valley View Ave, La Mirada, CA, 90638</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>155</td>
<td>Gibson Overseas</td>
<td>2410 Yates Ave, Commerce, CA, 90040</td>
<td>19</td>
<td>0</td>
</tr>
<tr>
<td>156</td>
<td>Gilead Sciences - La Verne</td>
<td>1800 Wheeler St, La Verne, CA, 91750</td>
<td>33</td>
<td>0</td>
</tr>
<tr>
<td>157</td>
<td>Gilead Sciences - San Dimas</td>
<td>650 Cliffside Dr, San Dimas, CA, 91773</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>158</td>
<td>Glasswerks LA, Inc.</td>
<td>8600 Rheem Ave, South Gate, CA, 90280</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>159</td>
<td>Glossier</td>
<td>8523 Melrose Ave, West Hollywood, CA, 90069</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>160</td>
<td>Golden Bolt LLC</td>
<td>9371 Canoga Ave, Chatsworth, CA, 91311</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>161</td>
<td>Golden Hippo</td>
<td>23251 Mulholland Dr, Woodland Hills, CA, 91364</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>162</td>
<td>Goodwill Southern California - Atwater Village #13</td>
<td>3150 N San Fernando Rd, Los Angeles, CA, 90065</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>163</td>
<td>Goodwill Southern California - E-Commerce</td>
<td>3150 N San Fernando Rd, Los Angeles, CA, 90065</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>164</td>
<td>Granville West Hollywood</td>
<td>8701 Beverly Blvd, West Hollywood, CA, 90048</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>165</td>
<td>Green Onion Mexican Restaurant - San Pedro</td>
<td>145 W 6th St, San Pedro, CA, 90731</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>166</td>
<td>Greenbox Loans, Inc.</td>
<td>3250 Wilshire Blvd, Ste 1900, Los Angeles, CA, 90010</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>167</td>
<td>Griffith Company</td>
<td>12200 Bloomfield Ave, Santa Fe Springs, CA, 90670</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>168</td>
<td>GUCCI Beverly Hills Flagship</td>
<td>347 N Rodeo Dr, Beverly Hills, CA, 90210</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>169</td>
<td>Guitar Center - Hollywood</td>
<td>7425 W Sunset Blvd, Los Angeles, CA, 90046</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>170</td>
<td>Guitar Center - Monterey Park</td>
<td>3000 Market Place Dr, Monterey Park, CA, 91755</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>171</td>
<td>Guitar Center - Sherman Oaks</td>
<td>14209 Ventura Blvd, Sherman Oaks, CA, 91423</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>172</td>
<td>Guitar Center - Westlake Village</td>
<td>30730 Russell Ranch Rd, Westlake Village, CA, 91362</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>173</td>
<td>Hallmark Aviation Services</td>
<td>5757 W Century Blvd, Los Angeles, CA, 90045</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>174</td>
<td>Hathaway Dinwiddie Construction Company</td>
<td>1280 Main St, Studio City, CA, 91604</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>175</td>
<td>Healthy Spot Beverly Grove</td>
<td>8126 Beverly Blvd, Los Angeles, CA, 90048</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>176</td>
<td>Hennessey's Tavern - Hermosa Beach</td>
<td>8 Pier Ave, Hermosa Beach, CA, 90254</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>177</td>
<td>Here and Now</td>
<td>300 S Santa Fe Ave, Ste N, Los Angeles, CA, 90013</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>178</td>
<td>Hermes of Paris, Inc. - Beverly Hills</td>
<td>434 N Rodeo Dr, Beverly Hills, CA, 90210</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>179</td>
<td>Heyday Skincare - Beverly</td>
<td>7228 Beverly Blvd, Los Angeles, CA, 90036</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>180</td>
<td>Heyday Skincare - Silver Lake</td>
<td>3505 W Sunset Blvd, Los Angeles, CA, 90026</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>181</td>
<td>High Times</td>
<td>3728 Fruitland Ave, Maywood, CA, 90270</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>182</td>
<td>Hill Street Café</td>
<td>1004 Foothill Blvd, La Canada, CA, 91011</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>183</td>
<td>Hillcrest Country Club</td>
<td>10000 W Pico Blvd, Los Angeles, CA, 90064</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>184</td>
<td>Hilton, The Beverly Hilton</td>
<td>9876 Wilshire Blvd, Beverly Hills, CA, 90210</td>
<td>23</td>
<td>0</td>
</tr>
<tr>
<td>185</td>
<td>Hinoki &amp; the Bird</td>
<td>10 W Century Dr, Los Angeles, CA, 90067</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>186</td>
<td>Hollywood Burbank Airport, Southwest Airlines</td>
<td>2627 N Hollywood Way, Burbank, CA, 91505</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>187</td>
<td>Honda, Airport Marina</td>
<td>5850 W Centinela Ave, Los Angeles, CA, 90045</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>188</td>
<td>Honda, Culver City</td>
<td>9055 Washington Blvd, Culver City, CA, 90232</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>189</td>
<td>Honda, Goudy</td>
<td>1400 W Main St, Alhambra, CA, 91801</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>190</td>
<td>Honda, Hamer</td>
<td>7514 Reseda Blvd, Reseda, CA, 91335</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>191</td>
<td>IDF Studio Scenery</td>
<td>13618 Vaughn St, San Fernando, CA, 91340</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>192</td>
<td>IKEA Burbank</td>
<td>600 Ikea Way, Burbank, CA, 91502</td>
<td>38</td>
<td>0</td>
</tr>
<tr>
<td>193</td>
<td>IKEA Carson</td>
<td>20700 Avalon Blvd, Carson, CA, 90746</td>
<td>26</td>
<td>0</td>
</tr>
<tr>
<td>194</td>
<td>IKEA Covina</td>
<td>848 S Barranca Ave, Covina, CA, 91723</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>195</td>
<td>In-N-Out Burger #1</td>
<td>13850 Francisquito Ave, Baldwin Park, CA, 91706</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>196</td>
<td>In-N-Out Burger #2</td>
<td>1371 N Grand Ave, Covina, CA, 91724</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>197</td>
<td>In-N-Out Burger #12</td>
<td>11455 Laurel Canyon Blvd, San Fernando, CA, 91340</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>198</td>
<td>In-N-Out Burger #15</td>
<td>21133 Golden Springs Dr, Diamond Bar, CA, 91789</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>199</td>
<td>In-N-Out Burger #27</td>
<td>420 N Santa Anita Ave, Arcadia, CA, 91006</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>200</td>
<td>In-N-Out Burger #64</td>
<td>2940 E Garvey Ave S, West Covina, CA, 91791</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>201</td>
<td>In-N-Out Burger #102</td>
<td>7009 W Sunset Blvd, Hollywood, CA, 90028</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>202</td>
<td>In-N-Out Burger #117</td>
<td>9149 S Sepulveda Blvd, Los Angeles, CA, 90045</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>203</td>
<td>In-N-Out Burger #119</td>
<td>922 Gayley Ave, Los Angeles, CA, 90024</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>204</td>
<td>In-N-Out Burger #178</td>
<td>19901 Rinaldi St, Porter Ranch, CA, 91326</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>205</td>
<td>In-N-Out Burger #206</td>
<td>6841 Topanga Canyon Blvd, Canoga Park, CA, 91303</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>206</td>
<td>In-N-Out Burger #305</td>
<td>10900 Alondra Blvd, Cerritos, CA, 90703</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>207</td>
<td>In-N-Out Burger #310</td>
<td>1701 W Artesia Blvd, Gardena, CA, 90248</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>208</td>
<td>In-N-Out Burger #337</td>
<td>5500 Market Place Dr, Monterey Park, CA, 91755</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>209</td>
<td>In-N-Out Burger #343</td>
<td>988 E Alosta Ave, Azusa, CA, 91702</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>210</td>
<td>Islands, Manhattan Village</td>
<td>3200 N Sepulveda Blvd, Manhattan Beach, CA, 90266</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>211</td>
<td>J. Paul Getty Trust, Getty Center</td>
<td>1200 Getty Center Dr, Los Angeles, CA, 90049</td>
<td>23</td>
<td>0</td>
</tr>
<tr>
<td>212</td>
<td>Jacob Supplies, Inc.</td>
<td>2424 E 26th St, Vernon, CA, 90058</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>213</td>
<td>Joan's on Third</td>
<td>8346 W 3rd St, Los Angeles, CA, 90048</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>214</td>
<td>JOEY DTLA</td>
<td>700 W 7th St, Los Angeles, CA, 90017</td>
<td>19</td>
<td>0</td>
</tr>
<tr>
<td>215</td>
<td>JOEY Woodland Hills</td>
<td>6344 Topanga Canyon Blvd Ste 1010, Woodland Hills, CA, 91367</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>216</td>
<td>Jon &amp; Vinny's Brentwood</td>
<td>11938 San Vicente Blvd, Los Angeles, CA, 90049</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>217</td>
<td>Jon &amp; Vinny's Fairfax</td>
<td>412 N Fairfax Ave, Los Angeles, CA, 90036</td>
<td>19</td>
<td>0</td>
</tr>
<tr>
<td>218</td>
<td>Jones Bell Abbott Fleming &amp; Fitzgerald Llp</td>
<td>601 S Figueroa St, Los Angeles, CA, 90017</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>219</td>
<td>Jones Wholesale Lumber Co.</td>
<td>10711 Alameda St, Lynwood, CA, 90262</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>220</td>
<td>Kaiser Permanente Central Refill Pharmacy Center</td>
<td>9521 Dalen St, Downey, CA, 90242</td>
<td>24</td>
<td>0</td>
</tr>
<tr>
<td>221</td>
<td>Kaiser Permanente Regional Laboratories</td>
<td>11668 Sherman Way, North Hollywood, CA, 91605</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>222</td>
<td>Karl Storz Endoscopy</td>
<td>2151 E Grand Ave, El Segundo, CA, 90245</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>223</td>
<td>Katana Restaurant - West Hollywood</td>
<td>8439 W Sunset Blvd, West Hollywood, CA, 90069</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>224</td>
<td>Kia of Carson</td>
<td>22020 Recreation Rd, Carson, CA, 90745</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>225</td>
<td>Kia of Cerritos</td>
<td>18201 Studebaker Rd, Cerritos, CA, 90703</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>226</td>
<td>King's Fish House</td>
<td>4798 Commons Way, Calabasas, CA, 91302</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>227</td>
<td>King's Hawaiian Manufacturing Plant</td>
<td>19161 Harborgate Way, Torrance, CA, 90501</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>228</td>
<td>Kohl's #633</td>
<td>2650 Carson St, Lakewood, CA, 90712</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>229</td>
<td>Krismar Construction Co, Inc. - Project</td>
<td>2901 Warner Blvd, Burbank, CA, 91505</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>230</td>
<td>L'Antica Pizzeria Da Michele</td>
<td>1534 N McCadden Pl, Los Angeles, CA, 90028</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>231</td>
<td>L'Ermitage Beverly Hills</td>
<td>9291 Burton Way, Beverly Hills, CA, 90210</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>232</td>
<td>LA Apparel #3</td>
<td>1020 E 59th St, Los Angeles, CA, 90001</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>233</td>
<td>LA City Animal Services - East Valley Animal Shelter</td>
<td>14409 Vanowen St, Van Nuys, CA, 91405</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>234</td>
<td>LA City Piper Tech Space 140</td>
<td>555 Ramirez St, Space 140, Los Angeles, CA, 90012</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>235</td>
<td>LA County DCFS - Belvedere</td>
<td>5835 S Eastern Ave, Commerce, CA, 90040</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>236</td>
<td>LA County DCFS - Metro North</td>
<td>1933 S Broadway, Los Angeles, CA, 90007</td>
<td>26</td>
<td>0</td>
</tr>
<tr>
<td>237</td>
<td>LA County DCFS - Pomona</td>
<td>801 Corporate Center Dr, Pomona, CA, 91768</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>238</td>
<td>LA County DCFS - Santa Fe Springs</td>
<td>10355 Slusher Dr, Santa Fe Springs, CA, 90670</td>
<td>19</td>
<td>0</td>
</tr>
<tr>
<td>239</td>
<td>LA County DCFS - Torrance</td>
<td>2325 Crenshaw Blvd, Torrance, CA, 90501</td>
<td>21</td>
<td>0</td>
</tr>
<tr>
<td>240</td>
<td>LA County DCFS - Van Nuys</td>
<td>7555 Van Nuys Blvd, Van Nuys, CA, 91405</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>241</td>
<td>LA County Department of Mental Health</td>
<td>510 S Vermont Ave, 20th Floor, Los Angeles, CA, 90020</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>242</td>
<td>LA County DPH - SAPC</td>
<td>1000 S Fremont Ave, Bldg A-9 E, Alhambra, CA, 91803</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>243</td>
<td>LA County DPSS - Bureau of Human Resources</td>
<td>12851 Crossroads Pkwy S, City of Industry, CA, 91746</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>244</td>
<td>LA County DPSS - Compton</td>
<td>211 E Alondra Blvd, Compton, CA, 90220</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>245</td>
<td>LA County DPSS - Crossroads West</td>
<td>12820 Crossroads Pkwy S, City of Industry, CA, 91746</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>246</td>
<td>LA County DPSS - Hawthorne Medi-Cal</td>
<td>12000 Hawthorne Blvd, Hawthorne, CA, 90250</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>247</td>
<td>LA County DPSS - Helpline &amp; FOD</td>
<td>12801 Crossroads Pkwy S, City of Industry, CA, 91746</td>
<td>27</td>
<td>0</td>
</tr>
<tr>
<td>248</td>
<td>LA County DPSS - Lancaster</td>
<td>349 E Ave K6 Ste B, Lancaster, CA, 93535</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>249</td>
<td>LA County DPSS - Metro Special and Metro IHSS</td>
<td>2707 S Grand Ave, Los Angeles, CA, 90007</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>250</td>
<td>LA County DPSS - Rancho Park</td>
<td>11110 W Pico Blvd, Los Angeles, CA, 90064</td>
<td>22</td>
<td>0</td>
</tr>
<tr>
<td>251</td>
<td>LA County DPSS - South Special</td>
<td>17600 S Santa Fe Ave, Ste B, Compton, CA, 90221</td>
<td>29</td>
<td>0</td>
</tr>
<tr>
<td>252</td>
<td>LA County DPW - Road Maintenance, Road Division 551</td>
<td>4859 W Ave L12, Quartz Hill, CA, 93536</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>253</td>
<td>LA County DPW - Waterworks, North Maintenance Area</td>
<td>260 E Ave K8, Lancaster, CA, 93535</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>254</td>
<td>LA County Registrar-Recorder/County Clerk Norwalk</td>
<td>12400 Imperial Hwy, Ste 2204, Norwalk, CA, 90650</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>255</td>
<td>LA County Registrar-Recorder/County Clerk Santa Fe Springs</td>
<td>12680 Corral Pl, Santa Fe Springs, CA, 90670</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>256</td>
<td>LA Metro Central Maintenance Facility</td>
<td>490 Bauchet St, Los Angeles, CA, 90012</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>257</td>
<td>LA Metro Division 20</td>
<td>320 S Santa Fe Ave, Los Angeles, CA, 90013</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>258</td>
<td>Lakers El Segundo Training Center and Staples Center</td>
<td>2275 E Mariposa Ave, El Segundo, CA, 90245</td>
<td>52</td>
<td>0</td>
</tr>
<tr>
<td>259</td>
<td>Lakeshore Learning Materials - Corporate Offices/Purchase Orders</td>
<td>2695 E Dominguez St, Carson, CA, 90895</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>260</td>
<td>Las Virgenes Municipal Water District</td>
<td>4232 Las Virgenes Rd, Calabasas, CA, 91302</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>261</td>
<td>LAX Terminal 1 - Southwest Airlines</td>
<td>100 World Way, Los Angeles, CA, 90045</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>262</td>
<td>LAX Terminal 5 - JetBlue Airways</td>
<td>500 World Way, Los Angeles, CA, 90045</td>
<td>37</td>
<td>0</td>
</tr>
<tr>
<td>263</td>
<td>LAX Terminal 5 - LA Times Newsstand</td>
<td>500 World Way, Los Angeles, CA, 90045</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>264</td>
<td>Lazy Dog Restaurant &amp; Bar, Del Amo Fashion Center</td>
<td>3525 W Carson St, #162, Torrance, CA, 90503</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>265</td>
<td>Lexus Glendale</td>
<td>1221 S Brand Blvd, Glendale, CA, 91204</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>266</td>
<td>Liberty Ambulance LLC</td>
<td>9441 Washburn Rd, Downey, CA, 90242</td>
<td>21</td>
<td>0</td>
</tr>
<tr>
<td>267</td>
<td>Lief Organics LLC</td>
<td>28903 Ave Paine, Valencia, CA, 91355</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>268</td>
<td>Little Beach House Malibu</td>
<td>22716 Pacific Coast Hwy, Malibu, CA, 90265</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>269</td>
<td>Little Pine Restaurant</td>
<td>2870 Rowena Ave, Los Angeles, CA, 90039</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>270</td>
<td>Logix Federal Credit Union</td>
<td>27918 Franklin Parkway, Valencia, CA, 91355</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>271</td>
<td>Los Angeles Production Center</td>
<td>1011 S Figueroa St, Los Angeles, CA, 90015</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>272</td>
<td>Louis Vuitton, Beverly Hills Rodeo Drive</td>
<td>295 N Rodeo Dr, Beverly Hills, CA, 90210</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>273</td>
<td>Louis Vuitton, Westfield Topanga &amp; The Village</td>
<td>6600 Topanga Canyon Blvd, Unit 183, Canoga Park, CA, 91303</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>274</td>
<td>Lucky's Malibu</td>
<td>3835 Cross Creek Rd, Ste 18, Malibu, CA, 90265</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>275</td>
<td>Lumens-Hathaway Dinwiddie Construction</td>
<td>11355 W Olympic Blvd, Los Angeles, CA, 90064</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>276</td>
<td>Majordomo</td>
<td>1725 Naud St, Los Angeles, CA, 90012</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>277</td>
<td>Mama Shelter Los Angeles</td>
<td>6500 Selma Ave, Los Angeles, CA, 90028</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>278</td>
<td>Manuela</td>
<td>907 E 3rd St, Los Angeles, CA, 90013</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>279</td>
<td>Marina Del Rey Hotel</td>
<td>13534 Bali Way, Marina Del Rey, CA, 90292</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>280</td>
<td>Markwins Beauty Brands</td>
<td>22067 Ferrero, City of Industry, CA, 91789</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>281</td>
<td>Marriott Hotel, Beverly Hills Marriott</td>
<td>1150 S Beverly Dr, Los Angeles, CA, 90035</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>282</td>
<td>Marriott Hotel, Los Angeles Airport Marriott</td>
<td>5855 W Century Blvd, Los Angeles, CA, 90045</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>283</td>
<td>Marsh &amp; McLennan Companies</td>
<td>633 W 5th St, Los Angeles, CA, 90071</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>284</td>
<td>Marshalls #190</td>
<td>2735 E Eastland Center Dr, West Covina, CA, 91791</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>285</td>
<td>Mastro's Steakhouse - Beverly Hills Steakhouse</td>
<td>246 N Canon Dr, Beverly Hills, CA, 90210</td>
<td>34</td>
<td>0</td>
</tr>
<tr>
<td>286</td>
<td>Maywood L'Chaim/Cookies Maywood</td>
<td>5815 Maywood Ave, Maywood, CA, 90270</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>287</td>
<td>McDonald's #2639</td>
<td>131 E Palmdale Blvd, Palmdale, CA, 93550</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>288</td>
<td>MedReach Ambulance</td>
<td>1303 Kona Dr, Compton, CA, 90220</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>289</td>
<td>Mejuri</td>
<td>8404 Melrose Ave, Los Angeles, CA, 90069</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>290</td>
<td>Mercury Air Cargo Building 213</td>
<td>6040 Avion Dr, Los Angeles, CA, 90045</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>291</td>
<td>Metropolitan Animal Specialty Hospital</td>
<td>6565 Santa Monica Blvd, Los Angeles, CA, 90038</td>
<td>31</td>
<td>0</td>
</tr>
<tr>
<td>292</td>
<td>Meyer, Olson, Lowy &amp; Meyers, LLP</td>
<td>10100 Santa Monica Blvd, Ste 1425, Los Angeles, CA, 90067</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>293</td>
<td>Michael Kors Distribution Center #2</td>
<td>3735 Workman Mill Rd, Whittier, CA, 90601</td>
<td>23</td>
<td>0</td>
</tr>
<tr>
<td>294</td>
<td>Midnight Oil Agency</td>
<td>3800 W Vanowen St, Burbank, CA, 91505</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>295</td>
<td>Mimosas</td>
<td>16435 Whittier Blvd, Whittier, CA, 90603</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>296</td>
<td>Mission Foods, Panorama</td>
<td>14200 Arminta St, Panorama City, CA, 91402</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>297</td>
<td>Mob Scene LLC</td>
<td>5750 Wilshire Blvd Ste 530, Los Angeles, CA, 90036</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>298</td>
<td>Monrovia Fire Department - Fire Stations 101, 102</td>
<td>141 E Lemon Ave, Monrovia, CA, 91016</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>299</td>
<td>Montebello Bus Lines</td>
<td>400 S Taylor Ave, Montebello, CA, 90640</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>300</td>
<td>Morrison Express Corporation</td>
<td>2000 S Hughes Way, El Segundo, CA, 90245</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>301</td>
<td>Morton Capital Management</td>
<td>27200 Agoura Rd, 200, Calabasas, CA, 91301</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>302</td>
<td>Morton's, The Steakhouse - Los Angeles (Downtown)</td>
<td>735 S Figueroa St, Los Angeles, CA, 90017</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>303</td>
<td>Mr. C Hotels Beverly Hills</td>
<td>1224 Beverwil Dr, Los Angeles, CA, 90035</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>304</td>
<td>Neiman Marcus-Beverly Hills</td>
<td>9700 Wilshire Blvd, Beverly Hills, CA, 90212</td>
<td>19</td>
<td>0</td>
</tr>
<tr>
<td>305</td>
<td>New Milani Group, LLC</td>
<td>2035 E 49th St, Vernon, CA, 90058</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>306</td>
<td>NFL Media</td>
<td>10950 Washington Blvd, Culver City, CA, 90232</td>
<td>75</td>
<td>0</td>
</tr>
<tr>
<td>307</td>
<td>Nordstrom, The Americana at Brand</td>
<td>102 Caruso Ave, Glendale, CA, 91210</td>
<td>23</td>
<td>0</td>
</tr>
<tr>
<td>308</td>
<td>Nordstrom, The Grove</td>
<td>189 The Grove Dr Ste P80, Los Angeles, CA, 90036</td>
<td>41</td>
<td>0</td>
</tr>
<tr>
<td>309</td>
<td>Nordstrom, Westfield Century City</td>
<td>10250 Santa Monica Blvd Dept 3, Los Angeles, CA, 90067</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>310</td>
<td>Nordstrom, Westfield Santa Anita</td>
<td>400 S Baldwin Ave, Arcadia, CA, 91007</td>
<td>46</td>
<td>0</td>
</tr>
<tr>
<td>311</td>
<td>Northrop Grumman - Palmdale</td>
<td>3520 E Ave M, Palmdale, CA, 93550</td>
<td>35</td>
<td>0</td>
</tr>
<tr>
<td>312</td>
<td>Nusr-Et</td>
<td>184 N Canon Dr, Beverly Hills, CA, 90210</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>313</td>
<td>Oceana USA, Inc.</td>
<td>14888 Los Angeles St, Irwindale, CA, 91706</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>314</td>
<td>Old Republic Title, Glendale Galleria</td>
<td>101 N Brand Blvd Fl 14, Glendale, CA, 91203</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>315</td>
<td>Olive Garden, Burbank Empire Center</td>
<td>1741 N Victory Pl, Burbank, CA, 91502</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>316</td>
<td>Olive Garden, Los Angeles Midtown</td>
<td>4835 Venice Blvd, Los Angeles, CA, 90019</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>317</td>
<td>Olive Garden, Stonewall Mall</td>
<td>9253 Firestone Blvd, Downey, CA, 90241</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>318</td>
<td>Olive Garden, Stonewood Center</td>
<td>6000 Sepulveda Blvd, Ste 1220, Culver City, CA, 90230</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>319</td>
<td>Open Bank</td>
<td>1000 Wilshire Blvd Ste 500, Los Angeles, CA, 90017</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>320</td>
<td>Orly International, Inc.</td>
<td>7834 Haskell Ave, Van Nuys, CA, 91406</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>321</td>
<td>Osteria Mozza</td>
<td>6602 Melrose Ave, Los Angeles, CA, 90038</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>322</td>
<td>Outpost VFX</td>
<td>3500 W Olive Ave, Ste 1450, Burbank, CA, 91505</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>323</td>
<td>P/S - LAX</td>
<td>6871 W Imperial Hwy, Los Angeles, CA, 90045</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>324</td>
<td>Pacific City Bank</td>
<td>3701 Wilshire Blvd, Ste 409, Los Angeles, CA, 90010</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>325</td>
<td>Pacific Palms Resort</td>
<td>1 Industry Hills Pkwy, City of Industry, CA, 91744</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>326</td>
<td>Palisades Ranch, Inc. (Previously Goldberg &amp; Solovy Foods)</td>
<td>5925 Alcoa Ave, Vernon, CA, 90058</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>327</td>
<td>Panda Restaurant Group Support Center</td>
<td>1683 Walnut Grove Ave, Rosemead, CA, 91770</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>328</td>
<td>Paramount Exclusive Insurance</td>
<td>15760 Ventura Blvd, Ste 500, Encino, CA, 91436</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>329</td>
<td>Pavilions #2229</td>
<td>727 Vine St, Los Angeles, CA, 90038</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>330</td>
<td>Pearlman, Brown &amp; Wax</td>
<td>15910 Ventura Blvd, Fl 18, Encino, CA, 91436</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>331</td>
<td>Phillips 66 Los Angeles Refinery</td>
<td>1660 W Anaheim St, Wilmington, CA, 90744</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>332</td>
<td>Plaskolite West, LLC</td>
<td>2225 E Del Amo Blvd, Compton, CA, 90220</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>333</td>
<td>Porsche Downtown LA</td>
<td>1900 S Figueroa St, Los Angeles, CA, 90007</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>334</td>
<td>Premier Pharmacy Service</td>
<td>410 Cloverleaf Dr, Baldwin Park, CA, 91706</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>335</td>
<td>Princess Polly USA, Inc.</td>
<td>750 N San Vicente Blvd, Ste Re1450, West Hollywood, CA, 90069</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>336</td>
<td>Printful, Inc.</td>
<td>19749 Dearborn St, Chatsworth, CA, 91311</td>
<td>24</td>
<td>0</td>
</tr>
<tr>
<td>337</td>
<td>Progressive Gaming - The Commerce Casino &amp; Hotel</td>
<td>6131 Telegraph Rd, Commerce, CA, 90040</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>338</td>
<td>Proper Hotel</td>
<td>700 Wilshire Blvd, Santa Monica, CA, 90401</td>
<td>22</td>
<td>0</td>
</tr>
<tr>
<td>339</td>
<td>Puratos</td>
<td>18831 S Laurel Park Rd, Compton, CA, 90220</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>340</td>
<td>QSPAC Industries</td>
<td>15020 Marquardt Ave, Santa Fe Springs, CA, 90670</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>341</td>
<td>Ralphs #53</td>
<td>9470 Las Tunas Dr, Temple City, CA, 91780</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>342</td>
<td>Rancho Dominguez AJCC operated by Community Career Development</td>
<td>2909 E Pacific Commerce Dr, Compton, CA, 90221</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>343</td>
<td>Republic Services - Sun Valley</td>
<td>9200 Glenoaks Blvd, Sun Valley, CA, 91352</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>344</td>
<td>Reyes Coca-Cola Bottling, Los Angeles</td>
<td>1334 S Central Ave, Los Angeles, CA, 90021</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>345</td>
<td>Romeo Power</td>
<td>4380 Ayers Ave, Vernon, CA, 90058</td>
<td>21</td>
<td>0</td>
</tr>
<tr>
<td>346</td>
<td>Royal Paper Box</td>
<td>1105 S Maple Ave, Montebello, CA, 90640</td>
<td>21</td>
<td>0</td>
</tr>
<tr>
<td>347</td>
<td>Royal Plywood Company</td>
<td>14171 Park Pl, Cerritos, CA, 90703</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>348</td>
<td>Safran Passenger Solutions</td>
<td>1500 Glenn Curtiss St, Carson, CA, 90746</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>349</td>
<td>Sameday Health</td>
<td>523 Victoria Ave, Venice, CA, 90291</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>350</td>
<td>Sammy's Woodfire Pizza - LAX Terminal 4</td>
<td>400 World Way, Los Angeles, CA, 90045</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>351</td>
<td>San Gabriel Valley Water Company</td>
<td>11142 Garvey Ave, El Monte, CA, 91733</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>352</td>
<td>Santa Anita Race Track</td>
<td>285 W Huntington Dr, Arcadia, CA, 91007</td>
<td>26</td>
<td>0</td>
</tr>
<tr>
<td>353</td>
<td>Santa Monica Public Works - Resource Recovery &amp; Recycling Division</td>
<td>2500 Michigan Ave, Santa Monica, CA, 90404</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>354</td>
<td>Santa Monica Public Works - Water Resources</td>
<td>2500 Michigan Ave Bldg 1, Santa Monica, CA, 90404</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>355</td>
<td>Santa Monica Swim Center</td>
<td>2225 16th St, Santa Monica, CA, 90405</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>356</td>
<td>Second Order Effects</td>
<td>711 Hawaii St, El Segundo, CA, 90245</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>357</td>
<td>Shakey's Pizza Parlor - LA Olympic</td>
<td>6052 W Olympic Blvd, Los Angeles, CA, 90036</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>358</td>
<td>Shane Veterinary Medical Center</td>
<td>4816 Lincoln Blvd, Marina Del Rey, CA, 90292</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>359</td>
<td>Sheraton Universal Hotel</td>
<td>333 Universal Hollywood Dr, Universal City, CA, 91608</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>360</td>
<td>Shin-Sen-Gumi Hakata Ramen - Gardena</td>
<td>2015 W Redondo Beach Blvd # 1d, Gardena, CA, 90247</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>361</td>
<td>Shore Hotel</td>
<td>1515 Ocean Ave, Santa Monica, CA, 90401</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>362</td>
<td>Shutters on the Beach</td>
<td>1 Pico Blvd, Santa Monica, CA, 90405</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>363</td>
<td>Sierra Madre Fire Department - Fire Station 41</td>
<td>242 W Sierra Madre Blvd, Sierra Madre, CA, 91024</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>364</td>
<td>Skechers USA Corporate Headquarters</td>
<td>225 S Sepulveda Blvd, Manhattan Beach, CA, 90266</td>
<td>33</td>
<td>0</td>
</tr>
<tr>
<td>365</td>
<td>SKIMS Body, Inc.</td>
<td>3113 S La Cienega Blvd, Los Angeles, CA, 90016</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>366</td>
<td>Smart LLC</td>
<td>14108 S Western Ave, Gardena, CA, 90249</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>367</td>
<td>Snap, Inc.</td>
<td>3340 Ocean Park Blvd, Santa Monica, CA, 90405</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>368</td>
<td>Sodexo/Star Alliance</td>
<td>380 World Way, Los Angeles, CA, 90045</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>369</td>
<td>Sofitel Los Angeles</td>
<td>8555 Beverly Blvd, Los Angeles, CA, 90048</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>370</td>
<td>Soho Warehouse DTLA</td>
<td>1000 S Santa Fe Ave, Los Angeles, CA, 90021</td>
<td>40</td>
<td>0</td>
</tr>
<tr>
<td>371</td>
<td>Son of A Gun</td>
<td>8370 W 3rd St, Los Angeles, CA, 90048</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>372</td>
<td>Sony Pictures Studios</td>
<td>9050 Washington Blvd, Culver City, CA, 90232</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>373</td>
<td>South Pasadena Fire Department</td>
<td>817 Mound Ave, South Pasadena, CA, 91030</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>374</td>
<td>Southern California Edison - Catalina Island Service Center &amp; Power Plant</td>
<td>1 Pebbly Beach, Avalon, CA, 90704</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>375</td>
<td>Southern California Edison - Covina Service Center</td>
<td>800 W Cienega Ave, San Dimas, CA, 91773</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>376</td>
<td>Southern California Edison - South Bay Service Center</td>
<td>505 Maple Ave, Torrance, CA, 90503</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>377</td>
<td>SpaceX Corporate Headquarters</td>
<td>1 Rocket Rd, Hawthorne, CA, 90250</td>
<td>217</td>
<td>0</td>
</tr>
<tr>
<td>378</td>
<td>Spago Beverly Hills</td>
<td>176 N Canon Dr, Beverly Hills, CA, 90210</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>379</td>
<td>Spectrum Medical X-Ray Co.</td>
<td>1721 Stewart St, Santa Monica, CA, 90404</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>380</td>
<td>Spectrum Store - Inglewood</td>
<td>3451 W Century Blvd Ste B7, Inglewood, CA, 90303</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>381</td>
<td>STAAR Surgical Co.</td>
<td>1911 Walker Ave, Monrovia, CA, 91016</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>382</td>
<td>Starbucks #3425</td>
<td>2909 W 120th St, Hawthorne, CA, 90250</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>383</td>
<td>Starbucks #5494</td>
<td>10955 Weyburn Ave, Los Angeles, CA, 90024</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>384</td>
<td>Starbucks #5583</td>
<td>611 S Citrus Ave, Covina, CA, 91723</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>385</td>
<td>Starbucks #5842</td>
<td>7905 Alondra Blvd, Paramount, CA, 90723</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>386</td>
<td>Starbucks #6897</td>
<td>100 Citadel Dr, Ste 200, Commerce, CA, 90040</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>387</td>
<td>Starbucks #9328</td>
<td>3853 E 3rd St, Los Angeles, CA, 90063</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>388</td>
<td>Starbucks #9419</td>
<td>5906 Del Amo Blvd, Lakewood, CA, 90713</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>389</td>
<td>Starbucks #14154</td>
<td>14828 Hawthorne Blvd, Lawndale, CA, 90260</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>390</td>
<td>Starbucks #29701</td>
<td>6150 W Slauson Ave, Culver City, CA, 90230</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>391</td>
<td>Starbucks #48677</td>
<td>9900 Balboa Blvd, Northridge, CA, 91325</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>392</td>
<td>Starbucks #49425</td>
<td>1740 Centinela Ave, Inglewood, CA, 90302</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>393</td>
<td>Starbucks #56008</td>
<td>2047 Rancho Valley Dr, Pomona, CA, 91766</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>394</td>
<td>Starz</td>
<td>1647 Stewart St, Santa Monica, CA, 90404</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>395</td>
<td>Stranger Things Store, The Americana at Brand</td>
<td>863 Americana Way # D-6, Glendale, CA, 91210</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>396</td>
<td>Sully-Miller Contracting Co.</td>
<td>708 Pier A St, Wilmington, CA, 90744</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>397</td>
<td>Super Mex - Lakewood</td>
<td>5254 Faculty Ave, Lakewood, CA, 90712</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>398</td>
<td>Superior Lithographics, Inc.</td>
<td>3055 Bandini Blvd, Vernon, CA, 90058</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>399</td>
<td>Sushi Katsu-Ya Woodland Hills</td>
<td>6220 Topanga Canyon Blvd, Ste 1460, Woodland Hills, CA, 91367</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>400</td>
<td>Sysco Los Angeles</td>
<td>20701 Currier Rd, Walnut, CA, 91789</td>
<td>44</td>
<td>0</td>
</tr>
<tr>
<td>401</td>
<td>T.A.S., Spirit Airlines</td>
<td>300 World Way, Los Angeles, CA, 90045</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>402</td>
<td>T.A.S., TBIT Ramp</td>
<td>300 World Way, Los Angeles, CA, 90045</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>403</td>
<td>Target #184</td>
<td>2120 W Main St, Alhambra, CA, 91801</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>404</td>
<td>Target #190</td>
<td>5700 Firestone Blvd, South Gate, CA, 90280</td>
<td>27</td>
<td>0</td>
</tr>
<tr>
<td>405</td>
<td>Target #302</td>
<td>1050 Huntington Dr, Duarte, CA, 91010</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>406</td>
<td>Target #1362</td>
<td>1800 W Empire Ave, Burbank, CA, 91504</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>407</td>
<td>Target #1408</td>
<td>2626 Colorado Blvd, Los Angeles, CA, 90041</td>
<td>24</td>
<td>0</td>
</tr>
<tr>
<td>408</td>
<td>Target #1411</td>
<td>3600 Rosemead Blvd, Rosemead, CA, 91770</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>409</td>
<td>Target #1425</td>
<td>8800 Whittier Blvd, Pico Rivera, CA, 90660</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>410</td>
<td>Target #2147</td>
<td>2370 S Azusa Ave, West Covina, CA, 91792</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>411</td>
<td>Target #2307</td>
<td>2195 Glendale Galleria, Glendale, CA, 91210</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>412</td>
<td>Target #2627</td>
<td>809 N Azusa Ave, Azusa, CA, 91702</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>413</td>
<td>Target #3262</td>
<td>4211 Eagle Rock Blvd, Los Angeles, CA, 90065</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>414</td>
<td>Temple City Animal Hospital</td>
<td>5406 Rosemead Blvd, San Gabriel, CA, 91776</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>415</td>
<td>Tennis Channel</td>
<td>3003 Exposition Blvd, Santa Monica, CA, 90404</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>416</td>
<td>TFC Manufacturing, Inc. - Watson Plaza</td>
<td>4001 Watson Plaza Dr, Lakewood, CA, 90712</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>417</td>
<td>The Bicycle Hotel &amp; Casino</td>
<td>888 Bicycle Casino Dr, Bell Gardens, CA, 90201</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>418</td>
<td>The Black Cat</td>
<td>3909 W Sunset Blvd, Los Angeles, CA, 90029</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>419</td>
<td>The California Club</td>
<td>538 S Flower St, Los Angeles, CA, 90071</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>420</td>
<td>The Gardens Casino - Hawaiian Gardens</td>
<td>11871 Carson St, Hawaiian Gardens, CA, 90716</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>421</td>
<td>The Hollywood Roosevelt</td>
<td>7000 Hollywood Blvd, Los Angeles, CA, 90028</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>422</td>
<td>The Kitchen By Wolfgang Puck - LAX</td>
<td>600 World Way, Los Angeles, CA, 90045</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>423</td>
<td>The Line Hotel</td>
<td>3515 Wilshire Blvd, Los Angeles, CA, 90010</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>424</td>
<td>The Lobster Trap</td>
<td>128 Catalina Ave, Avalon, CA, 90704</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>425</td>
<td>The Matian Firm</td>
<td>3701 Wilshire Blvd, Ste 210, Los Angeles, CA, 90010</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>426</td>
<td>The Normandie Club</td>
<td>3612 W 6th St, Los Angeles, CA, 90020</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>427</td>
<td>The RealReal</td>
<td>8500 Melrose Ave, West Hollywood, CA, 90069</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>428</td>
<td>The Ritz-Carlton, Marina Del Rey</td>
<td>4375 Admiralty Way, Marina Del Rey, CA, 90292</td>
<td>36</td>
<td>0</td>
</tr>
<tr>
<td>429</td>
<td>The Salvation Army - Siemon Family Youth &amp; Community Center</td>
<td>7651 S Central Ave, Los Angeles, CA, 90001</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>430</td>
<td>The Scenic Route, Inc.</td>
<td>13516 Desmond St, Pacoima, CA, 91331</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>431</td>
<td>The UPS Store #1804</td>
<td>6520 Platt Ave, West Hills, CA, 91307</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>432</td>
<td>The Village Family Services</td>
<td>6736 Laurel Canyon Blvd, North Hollywood, CA, 91606</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>433</td>
<td>Thermo Fisher Scientific</td>
<td>22801 Roscoe Blvd, Canoga Park, CA, 91304</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>434</td>
<td>Thompson Hollywood Hotel</td>
<td>1541 Wilcox Ave, Los Angeles, CA, 90028</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>435</td>
<td>Tillys Store #275</td>
<td>21712 Hawthorne Blvd, Ste 227a, Torrance, CA, 90503</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>436</td>
<td>TK92 Korean BBQ</td>
<td>250 W Valley Blvd, Ste P, San Gabriel, CA, 91776</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>437</td>
<td>Tokyo Shokudo</td>
<td>3760 S Centinela Ave, Ste 113, Los Angeles, CA, 90066</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>438</td>
<td>Tom's Watch Bar Los Angeles</td>
<td>1011 S Figueroa St, B101, Los Angeles, CA, 90015</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>439</td>
<td>Torrance Fire Department - Fire Station 1</td>
<td>1701 Crenshaw Blvd, Torrance, CA, 90501</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>440</td>
<td>Torrance Fire Department - Fire Station 2</td>
<td>25135 Robinson Way, Torrance, CA, 90505</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>441</td>
<td>Torrance Fire Department - Fire Station 3</td>
<td>3535 W 182nd St, Torrance, CA, 90504</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>442</td>
<td>Torrance Fire Department - Fire Station 6</td>
<td>21401 Del Amo Cir W, Torrance, CA, 90503</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>443</td>
<td>Toyota of Culver City</td>
<td>9077 Washington Blvd, Culver City, CA, 90232</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>444</td>
<td>Toyota of Downey, Penske</td>
<td>9136 Firestone Blvd, Downey, CA, 90241</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>445</td>
<td>Toyota of Marina Del Rey</td>
<td>4636 Lincoln Blvd, Marina Del Rey, CA, 90292</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>446</td>
<td>Toyota of North Hollywood</td>
<td>4610 Lankershim Blvd, North Hollywood, CA, 91602</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>447</td>
<td>Toyota of Northridge</td>
<td>19550 Nordhoff St, Northridge, CA, 91324</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>448</td>
<td>Toyota, Hamer</td>
<td>11041 Sepulveda Blvd, Mission Hills, CA, 91345</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>449</td>
<td>Trader Joe's #17</td>
<td>2738 Hyperion Ave, Los Angeles, CA, 90027</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>450</td>
<td>Trader Joe's #49</td>
<td>14119 Riverside Dr, Sherman Oaks, CA, 91423</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>451</td>
<td>Trader Joe's #122</td>
<td>11976 Ventura Blvd, Studio City, CA, 91604</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>452</td>
<td>Trader Joe's #205</td>
<td>4675 Admiralty Way, Marina Del Rey, CA, 90292</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>453</td>
<td>Trader Joe's #206</td>
<td>1600 Vine St, Los Angeles, CA, 90028</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>454</td>
<td>Trader Joe's #247</td>
<td>28941 Canwood St, Agoura Hills, CA, 91301</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>455</td>
<td>Trader Joe's #251</td>
<td>6150 W Slauson Ave, Culver City, CA, 90230</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>456</td>
<td>Trader Joe's #252</td>
<td>6130 Laurel Canyon Blvd, North Hollywood, CA, 91606</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>457</td>
<td>Tube Service Company</td>
<td>9351 Norwalk Blvd, Santa Fe Springs, CA, 90670</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>458</td>
<td>Ulta Beauty</td>
<td>7100 Santa Monica Blvd, Ste 120, West Hollywood, CA, 90046</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>459</td>
<td>Unifi - Cabin Service Warehouse</td>
<td>6060 Avion Dr, Los Angeles, CA, 90045</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>460</td>
<td>Universal Studios Hollywood - Bldg. 3315</td>
<td>100 Universal City Plz, Bldg 3315, Universal City, CA, 91608</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>461</td>
<td>Universal Studios Hollywood - Bldg. 4496</td>
<td>100 Universal City Plz, Bldg 4496, Universal City, CA, 91608</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>462</td>
<td>Universal Studios Hollywood - Springfield Bldg. 4438</td>
<td>100 Universal City Plz, Bldg 4438, Universal City, CA, 91608</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>463</td>
<td>Universal Studios Hollywood - WaterWorld Bldg. 4497</td>
<td>100 Universal City Plz, Bldg 4497, Universal City, CA, 91608</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>464</td>
<td>UPS - Cartage Services</td>
<td>3600 W Century Blvd, Inglewood, CA, 90303</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>465</td>
<td>Urban Plates Torrance</td>
<td>21503 Hawthorne Blvd, Ste A, Torrance, CA, 90503</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>466</td>
<td>Utility Trailer Manufacturing Company</td>
<td>17295 Railroad St, City of Industry, CA, 91748</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>467</td>
<td>Valadon Hotel LLC DBA Petit Ermitage Hotel</td>
<td>8822 Cynthia St, West Hollywood, CA, 90069</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>468</td>
<td>Vallarta Supermarkets Corporate Office</td>
<td>10147 San Fernando Rd, Pacoima, CA, 91331</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>469</td>
<td>VCA Animal Specialty Group</td>
<td>4641 Colorado Blvd, Los Angeles, CA, 90039</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>470</td>
<td>VCA Clarmar Animal Hospital</td>
<td>20805 Hawthorne Blvd, Torrance, CA, 90503</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>471</td>
<td>VCA McClave Animal Hospital</td>
<td>6950 Reseda Blvd, Reseda, CA, 91335</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>472</td>
<td>VCA Miller-Robertson Animal Hospital</td>
<td>8807 Melrose Ave, West Hollywood, CA, 90069</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>473</td>
<td>VCA West Los Angeles Animal Hospital</td>
<td>1900 S Sepulveda Blvd, Los Angeles, CA, 90025</td>
<td>29</td>
<td>0</td>
</tr>
<tr>
<td>474</td>
<td>Velvet LLC</td>
<td>3961 Landmark St, Culver City, CA, 90232</td>
<td>23</td>
<td>0</td>
</tr>
<tr>
<td>475</td>
<td>Veterinary Healthcare Center</td>
<td>241 W Pomona Blvd, Monterey Park, CA, 91754</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>476</td>
<td>Veterinary Medical Center of Woodland Hills</td>
<td>22544 Ventura Blvd, Woodland Hills, CA, 91364</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>477</td>
<td>Waldorf Astoria Beverly Hills</td>
<td>9850 Wilshire Blvd, Beverly Hills, CA, 90210</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>478</td>
<td>Walmart Supercenter #1941</td>
<td>1950 Auto Centre Dr, Glendora, CA, 91740</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>479</td>
<td>Warner Bros. Studios - Bldg 44</td>
<td>3400 Warner Blvd, Bldg 44, Burbank, Ca</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>480</td>
<td>Warner Bros. Studios - Bldg 128</td>
<td>3400 Warner Blvd, Bldg 128, Burbank, Ca</td>
<td>18</td>
<td>0</td>
</tr>
<tr>
<td>481</td>
<td>Washington Dog and Cat Hospital</td>
<td>1692 W Washington Blvd, Los Angeles, CA, 90007</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>482</td>
<td>Wayfarer DTLA</td>
<td>813 S Flower St, Los Angeles, CA, 90017</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>483</td>
<td>West Coast Trial Lawyer</td>
<td>1147 S Hope St, Los Angeles, CA, 90015</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>484</td>
<td>Westdrift Manhattan Beach Hotel</td>
<td>1400 Park View Ave, Manhattan Beach, CA, 90266</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>485</td>
<td>Westlake Services, LLC</td>
<td>4751 Wilshire Blvd, Los Angeles, CA, 90010</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>486</td>
<td>Wheels Financial Group, LLC</td>
<td>15400 Sherman Way, Ste 300, Van Nuys, CA, 91406</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>487</td>
<td>Whole Foods Market, 3rd &amp; Fairfax</td>
<td>6350 W 3rd St, Los Angeles, CA, 90036</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>488</td>
<td>Whole Foods Market, Beverly Hills</td>
<td>239 N Crescent Dr, Beverly Hills, CA, 90210</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>489</td>
<td>Whole Foods Market, Burbank</td>
<td>3401 W Olive Ave, Burbank, CA, 91505</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>490</td>
<td>Whole Foods Market, Downtown LA</td>
<td>788 S Grand Ave, Los Angeles, CA, 90017</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>491</td>
<td>Whole Foods Market, El Segundo</td>
<td>760 S Pacific Coast Hwy, El Segundo, CA, 90245</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>492</td>
<td>Whole Foods Market, Glendale</td>
<td>331 N Glendale Ave, Glendale, CA, 91206</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>493</td>
<td>Whole Foods Market, Playa Vista</td>
<td>12746 W Jefferson Blvd Ste 1100, Playa Vista, CA, 90094</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>494</td>
<td>Whole Foods Market, Porter Ranch</td>
<td>20209 Rinaldi St, Porter Ranch, CA, 91326</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>495</td>
<td>Whole Foods Market, Redondo Beach</td>
<td>405 N Pacific Coast Hwy, Redondo Beach, CA, 90277</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>496</td>
<td>Whole Foods Market, Silver Lake</td>
<td>2520 Glendale Blvd, Los Angeles, CA, 90039</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>497</td>
<td>Whole Foods Market, Torrance</td>
<td>2655 Pacific Coast Hwy, Torrance, CA, 90505</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>498</td>
<td>Whole Foods Market, Valencia</td>
<td>24130 Valencia Blvd, Santa Clarita, CA, 91355</td>
<td>13</td>
<td>0</td>
</tr>
<tr>
<td>499</td>
<td>Whole Foods Market, Westwood</td>
<td>1050 Gayley Ave, Los Angeles, CA, 90024</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>500</td>
<td>William Morris Endeavor - 9601 Wilshire</td>
<td>9601 Wilshire Blvd, Beverly Hills, CA, 90210</td>
<td>22</td>
<td>0</td>
</tr>
<tr>
<td>501</td>
<td>Wokcano - Topanga Canyon</td>
<td>6320 Topanga Canyon Blvd, #1690, Woodland Hills, CA, 91367</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>502</td>
<td>Wokcano - Valencia</td>
<td>24201 Valencia Blvd, #3452, Valencia, CA, 91355</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>503</td>
<td>Wood Ranch BBQ &amp; Grill, Agoura Hills</td>
<td>5050 Cornell Rd, Agoura Hills, CA, 91301</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>504</td>
<td>Wood Ranch BBQ &amp; Grill, Burbank Town Center</td>
<td>110 N First St, Burbank, CA, 91502</td>
<td>9</td>
<td>0</td>
</tr>
<tr>
<td>505</td>
<td>Wood Ranch BBQ &amp; Grill, Cerritos</td>
<td>12801 Towne Center Dr, Cerritos, CA, 90703</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>506</td>
<td>Wood Ranch BBQ &amp; Grill, The Grove</td>
<td>189 The Grove Dr, Los Angeles, CA, 90036</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>507</td>
<td>Worldwide Flight Services</td>
<td>5758 W Century Blvd, Los Angeles, CA, 90045</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>508</td>
<td>Worldwide Flight Services, Imperial Hwy</td>
<td>6555 W Imperial Hwy, Los Angeles, CA, 90045</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>509</td>
<td>Yard House, LA Live</td>
<td>800 W Olympic Blvd, A-115, Los Angeles, CA, 90015</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>510</td>
<td>Yard House, Northridge Fashion Center</td>
<td>9301 Tampa Ave, Unit 216, Northridge, CA, 91324</td>
<td>15</td>
<td>0</td>
</tr>
<tr>
<td>511</td>
<td>YMI Jeanswear</td>
<td>1155 S Boyle Ave, Los Angeles, CA, 90023</td>
<td>19</td>
<td>0</td>
</tr>
<tr>
<td>512</td>
<td>ZARA, DTLA</td>
<td>735 S Figueroa St, Space 301, Los Angeles, CA, 90017</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>513</td>
<td>ZARA, Farmers Market L.A.</td>
<td>6333 W 3rd St, Bldg E14, Los Angeles, CA, 90036</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>514</td>
<td>ZARA, Glendale Galleria</td>
<td>100 W Broadway, 3306, Glendale, CA, 91210</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>515</td>
<td>ZARA, Westfield Century City</td>
<td>10250 Santa Monica Blvd, Los Angeles, CA, 90067</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>Total</td>
<td></td>
<td></td>
<td>6059</td>
<td>0</td>
</tr>
</tbody>
</table>
<caption><small class="text-muted">These data are dynamic and may not reflect real-time investigation counts for these settings. Data will change based on daily information gathered by public health investigators overseeing, supervising, and closing each investigation. As of March 24, outbreaks that have met criteria for closure (no new cases identified for at least two weeks) but are pending final documentation have been removed from our active outbreak listings. As outbreaks continue to decrease, we will be able to identify those that have met criteria for closure more quickly. Confirmed case data reflect aggregate counts abstracted from IRIS's COVID-19 outbreak details for current COVID-19 outbreaks in Los Angeles County. These include cases reported since the beginning of the current active outbreak and may include some cases that have since recovered. Non-Residential settings are included on this list if there is a cluster of respiratory illness in persons associated with the setting including at least three persons who have tested positive for COVID-19. Non-Residential settings include workplaces, food and retail stores, and places of worship. Non-staff generally include persons served by the respective facility such as visitors, patrons, congregants, and vendors. This list is intended to inform the public of the current COVID-19 community outbreaks in Los Angeles County. Inclusion on this list does not suggest neglect or wrongdoing on the part of the facility.</small></caption>








						<!-- End of NON-RES TABLE section -->
					</div>
				</div>
			</div>
			<!-- End of NON-RES SETTINGS section -->



			<!-- PEH SETTINGS section -->
			<div id="peh-settings" class="container-xl mt-5 pt-2 pb-0 mb-3 aqua">
				<div class="row center mb-4">
					<div class="col">
						<h2 class="h5 text-white text-M-700">Active Outbreaks at Homeless Service Settings with at Least One <nobr>Laboratory-Confirmed</nobr><nobr>COVID-19</nobr> Case</h2>
					</div>
				</div>
			</div>
			<div class="container-xl pb-4">
				<div class="row">
					<div class="col">
						<p class="center">
							Settings include interim housing, shelters, encampments, and single room units, and service providers supporting People Experiencing Homelessness (PEH)
						</p>

						<!-- PEH TABLE section -->

						


<table class="table table-striped table-bordered table-sm overflow-y">
<thead class="text-white"><tr>
<th>Obs</th>
<th>Setting Name</th>
<th>Setting Type</th>
<th>Number of Confirmed Staff</th>
<th>Number of Confirmed Non-Staff</th>
<th>Total Deaths</th>
</tr></thead>
<tbody>
<tr>
<td>1</td>
<td>51st Street Family Shelter</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>2</td>
<td>649 Lofts</td>
<td>Single Room Occupancy Housing</td>
<td>0</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>3</td>
<td>A Bridge Home - Brentwood</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>4</td>
<td>A Bridge Home - Casa Azul</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>5</td>
<td>A Bridge Home - Eubank</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>6</td>
<td>A Bridge Home - Hope St.</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>1</td>
</tr>
<tr>
<td>7</td>
<td>A Bridge Home - Lafayette</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>8</td>
<td>A Bridge Home - Lillian Mobley</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>9</td>
<td>A Bridge Home - St. Andrew's</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>11</td>
<td>0</td>
</tr>
<tr>
<td>10</td>
<td>A Bridge Home - The Willows</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>11</td>
<td>Abundant Blessings From Above - 25th Street</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>12</td>
<td>Abundant Blessings From Above - 62nd St</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>13</td>
<td>Abundant Blessings From Above - St. Andrews Place</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>14</td>
<td>Abundant Blessings From Above 332</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>15</td>
<td>Abundant Blessings From Above 2412</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>16</td>
<td>Anita May Rosenstein Campus LGBT Center</td>
<td>Homeless Shelter</td>
<td>11</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>17</td>
<td>Ascencia Homeless Shelter</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>18</td>
<td>Aviva Family and Children's Services - Wallis House</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>19</td>
<td>Awakening</td>
<td>Homeless Shelter</td>
<td>3</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>20</td>
<td>Ballington Plaza</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>21</td>
<td>Bridge Housing For Women</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>22</td>
<td>Bridge Taper Shelter</td>
<td>Homeless Shelter</td>
<td>8</td>
<td>43</td>
<td>0</td>
</tr>
<tr>
<td>23</td>
<td>Canby House</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>24</td>
<td>Cardinal Manning Center</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>25</td>
<td>Casa de Zulma</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>26</td>
<td>Cloverfield</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>27</td>
<td>Community Bridge Housing, Sylmar</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>28</td>
<td>Connections for Women Colden Ave</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>29</td>
<td>Covenant House</td>
<td>Homeless Shelter</td>
<td>6</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>30</td>
<td>Downtown Women's Center (SRO)</td>
<td>Single Room Occupancy Housing</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>31</td>
<td>Echo Park Recreation Center Shelter</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>32</td>
<td>Encampment - Central LA</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>33</td>
<td>Encampment - Central LA #5</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>34</td>
<td>Encampment - Central LA #12</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>35</td>
<td>Encampment - Central LA #18</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>36</td>
<td>Encampment - Central LA #19</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>37</td>
<td>Encampment - Central LA #28</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>38</td>
<td>Encampment - Central LA #35</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>39</td>
<td>Encampment - Central LA #52</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>40</td>
<td>Encampment - Central LA #55</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>41</td>
<td>Encampment - Central LA #56</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>42</td>
<td>Encampment - Central LA #57</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>43</td>
<td>Encampment - Central LA #58</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>44</td>
<td>Encampment - Central LA #59</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>45</td>
<td>Encampment - Central LA #60</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>46</td>
<td>Encampment - Chatsworth #5</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>47</td>
<td>Encampment - Cudahy</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>48</td>
<td>Encampment - East Hollywood #3</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>49</td>
<td>Encampment - East LA #3</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>50</td>
<td>Encampment - East LA #4</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>51</td>
<td>Encampment - El Monte #2</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>52</td>
<td>Encampment - Hollywood #9</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>53</td>
<td>Encampment - Hollywood #12</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>54</td>
<td>Encampment - Inglewood #2</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>55</td>
<td>Encampment - Irwindale #4</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>56</td>
<td>Encampment - Lancaster #7</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>57</td>
<td>Encampment - Lancaster #8</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>58</td>
<td>Encampment - Lincoln Heights #7</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>59</td>
<td>Encampment - Palms</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>60</td>
<td>Encampment - Safe Parking Crocker</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>61</td>
<td>Encampment - Safe Parking Lincoln</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>62</td>
<td>Encampment - Safe Parking Metro Atlantic</td>
<td>Homeless Encampment</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>63</td>
<td>Encampment - Safe Parking San Pedro</td>
<td>Homeless Encampment</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>64</td>
<td>Encampment - Safe Parking Van Nuys</td>
<td>Homeless Encampment</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>65</td>
<td>Encampment - San Fernando #2</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>66</td>
<td>Encampment - South Gate #2</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>67</td>
<td>Encampment - South LA #24</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>68</td>
<td>Encampment - South LA #25</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>69</td>
<td>Encampment - Sun Valley #2</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>70</td>
<td>Encampment - Van Nuys #5</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>71</td>
<td>Encampment - West Rancho Dominguez</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>72</td>
<td>Encampment - Whittier #2</td>
<td>Homeless Encampment</td>
<td>0</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>73</td>
<td>Exodus Broadway</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>74</td>
<td>Fair Opportunity For Change</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>75</td>
<td>Family Emergency Shelter</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>76</td>
<td>First To Serve - 91st Street</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>77</td>
<td>First To Serve - Coronado</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>78</td>
<td>First To Serve - San Pedro</td>
<td>Homeless Shelter</td>
<td>3</td>
<td>17</td>
<td>0</td>
</tr>
<tr>
<td>79</td>
<td>First To Serve - Vermont</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>80</td>
<td>First To Serve - Vernon</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>81</td>
<td>Good Shepherd Center - Farley House</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>82</td>
<td>Good Shepherd Hawkes</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>83</td>
<td>Harbor Interfaith - A Bridge Home San Pedro</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>84</td>
<td>Harbor Interfaith 8th Street</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>85</td>
<td>High Desert MACC</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>86</td>
<td>Hilda L Solis Care First Village</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>87</td>
<td>Holliday's Helping Hands</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>88</td>
<td>Holliday's Helping Hands - Torrance</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>89</td>
<td>Holliday's Helping Hands RCC - Downey</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>90</td>
<td>Home at Last - Alondra Park Winter Shelter</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>91</td>
<td>Home at Last - Avalon</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>92</td>
<td>Home at Last - Evolve</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>93</td>
<td>Home at Last - Hoover</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>94</td>
<td>Home at Last - Infinity</td>
<td>Homeless Shelter</td>
<td>4</td>
<td>34</td>
<td>0</td>
</tr>
<tr>
<td>95</td>
<td>Home at Last - Matrix</td>
<td>Homeless Shelter</td>
<td>5</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>96</td>
<td>Home at Last - Paloma</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>97</td>
<td>Home at Last - Western</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>98</td>
<td>Hope For Home Pomona</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>99</td>
<td>Hope of the Valley - A Bridge Home Van Nuys</td>
<td>Homeless Shelter</td>
<td>4</td>
<td>13</td>
<td>1</td>
</tr>
<tr>
<td>100</td>
<td>Hope of the Valley - Arroy Seco Tiny Homes</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>101</td>
<td>Hope of the Valley - Genesis House</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>8</td>
<td>0</td>
</tr>
<tr>
<td>102</td>
<td>Hope of the Valley - North Hollywood</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>103</td>
<td>Hope of the Valley - Pacoima Winter Shelter</td>
<td>Homeless Shelter</td>
<td>5</td>
<td>19</td>
<td>0</td>
</tr>
<tr>
<td>104</td>
<td>Hope of the Valley - The Landing</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>105</td>
<td>Hope of the Valley - Tiny Home Village Alexandria Park</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>106</td>
<td>Hope of the Valley - Tiny Home Village Chandler</td>
<td>Homeless Shelter</td>
<td>6</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>107</td>
<td>Hope of the Valley - Tiny Home Village Reseda</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>108</td>
<td>Hope of the Valley - Tiny Home Village Tarzana</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>109</td>
<td>Hope of the Valley - Tiny Home Village Whitsett West</td>
<td>Homeless Shelter</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>110</td>
<td>HOPICS - Access Center</td>
<td>Homeless Service Provider</td>
<td>14</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>111</td>
<td>HOPICS - Long Beach Ave</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>112</td>
<td>Jovenes - Norwalk</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>113</td>
<td>Kensington Campus - Interim Housing</td>
<td>Homeless Shelter</td>
<td>3</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>114</td>
<td>La Cienega VS - 90</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>115</td>
<td>LA Family Housing - Family Solutions Center</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>116</td>
<td>LAMP Village</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>117</td>
<td>Los Angeles Mission - Anne Douglas Center</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>118</td>
<td>Los Angeles Mission - Men's Shelter</td>
<td>Homeless Shelter</td>
<td>5</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>119</td>
<td>Mama's House</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>120</td>
<td>Martin Luther King Jr. Recuperative Care Center</td>
<td>Recuperative Care Center</td>
<td>7</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>121</td>
<td>Martin Luther King Jr. Recuperative Care Center - IQ</td>
<td>Hotel Motel</td>
<td>5</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>122</td>
<td>Ms. Hazel's House - 60th Street #2</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>123</td>
<td>Ms. Hazel's House - 76th Street</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>124</td>
<td>Ms. Hazel's House - 76th Street #2</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>125</td>
<td>Ms. Hazel's House - 76th Street #3</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>126</td>
<td>Ms. Hazel's House - E 109th Place #2</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>127</td>
<td>Ms. Hazel's House - W Vernon Ave</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>128</td>
<td>Ms. Hazel's House - Wall Street</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>10</td>
<td>0</td>
</tr>
<tr>
<td>129</td>
<td>National Health Foundation</td>
<td>Recuperative Care Center</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>130</td>
<td>National Health Foundation - Glendale</td>
<td>Recuperative Care Center</td>
<td>4</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>131</td>
<td>New Directions For Veterans</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>132</td>
<td>New Hope Temporary Shelter</td>
<td>Homeless Shelter</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>133</td>
<td>New Reflections</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>134</td>
<td>Olive View Recuperative Care Center</td>
<td>Recuperative Care Center</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>135</td>
<td>PATH - A Bridge Home Hollywood</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>136</td>
<td>PATH - A Bridge Home Los Feliz</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>137</td>
<td>PATH - A Bridge Home Riverside Drive Families</td>
<td>Homeless Shelter</td>
<td>5</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>138</td>
<td>PATH - A Bridge Home Venice</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>139</td>
<td>PATH - Cotner</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>140</td>
<td>PATH - Madison Interim Housing</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>141</td>
<td>Pathways To Home</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>142</td>
<td>Prototypes - Alvarado RBH</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>143</td>
<td>Prototypes - S. Mark Taper Living Center</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>144</td>
<td>Prototypes - Saticoy</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>145</td>
<td>Proyecto Pastoral Shelter</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>146</td>
<td>Proyecto Pastoral Women's Shelter</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>147</td>
<td>Rainbow Apartments</td>
<td>Single Room Occupancy Housing</td>
<td>1</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>148</td>
<td>Roots To Grow</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>149</td>
<td>Safe Place For Youth Access Center</td>
<td>Homeless Service Provider</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>150</td>
<td>Salvation Village</td>
<td>Homeless Shelter</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>151</td>
<td>Samoshel</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>152</td>
<td>Serenity Recuperative Care</td>
<td>Recuperative Care Center</td>
<td>2</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>153</td>
<td>Serenity Recuperative Care - ELA</td>
<td>Recuperative Care Center</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>154</td>
<td>Serenity Recuperative Care - Lakeview Terrace</td>
<td>Recuperative Care Center</td>
<td>1</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>155</td>
<td>Shouridge House</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>156</td>
<td>Shull House</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>157</td>
<td>Solar Recuperative Care</td>
<td>Recuperative Care Center</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>158</td>
<td>South LA Women's Shelter</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>159</td>
<td>Testimonial Community Love Center</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>160</td>
<td>The AMAAD Institute Transitional Housing</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>161</td>
<td>The Arroyo</td>
<td>Homeless Shelter</td>
<td>5</td>
<td>20</td>
<td>0</td>
</tr>
<tr>
<td>162</td>
<td>The Good Seed - Women's Shelter</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>163</td>
<td>The Midnight Mission</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>164</td>
<td>The Nest</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>165</td>
<td>The Nest - Plymouth</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>166</td>
<td>The People Concern Access Center</td>
<td>Homeless Service Provider</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>167</td>
<td>The People Concern El Puente</td>
<td>Homeless Shelter</td>
<td>3</td>
<td>12</td>
<td>0</td>
</tr>
<tr>
<td>168</td>
<td>The Salvation Army - A Bridge Home Imperial Highway</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>169</td>
<td>The Salvation Army - Aetna Bridge Home</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>170</td>
<td>The Salvation Army - Bell Shelter</td>
<td>Homeless Shelter</td>
<td>13</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>171</td>
<td>The Salvation Army - Isaiah's House</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>172</td>
<td>The Salvation Army - Santa Fe Springs</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>173</td>
<td>The Salvation Army - The Way In</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>174</td>
<td>The Silver Villa</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>175</td>
<td>The T-House</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>176</td>
<td>TLP Taft</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>177</td>
<td>Total Restoration Ministries</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>6</td>
<td>0</td>
</tr>
<tr>
<td>178</td>
<td>Transitional Living Program - Lancaster</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>179</td>
<td>Triangle Christian Services</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>180</td>
<td>Turning Point Housing</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>14</td>
<td>0</td>
</tr>
<tr>
<td>181</td>
<td>Tyrone House</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>182</td>
<td>Union Rescue Mission 2nd Floor</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>183</td>
<td>United Friends of The Children - Mednik</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>184</td>
<td>Upward Bound House</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>185</td>
<td>Upward Bound House #2</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>186</td>
<td>US Veterans Initiative, Inglewood</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>187</td>
<td>Valley Oasis - 60th St</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>188</td>
<td>Valley Oasis - Crisis and Bridge Program</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>189</td>
<td>Victory House / Children's Home of Southern California</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>190</td>
<td>Volunteers of America - Avalon</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>191</td>
<td>Weingart / Gardner Library Bridge Housing</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>192</td>
<td>Weingart Center - AB109</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>193</td>
<td>Weingart Center - DHS</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>194</td>
<td>Weingart Center - EBHW</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>195</td>
<td>Weingart Center - ESP</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>196</td>
<td>Weingart Center - First Floor</td>
<td>Homeless Shelter</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>197</td>
<td>Weingart Center - Mezzanine Floor</td>
<td>Homeless Shelter</td>
<td>1</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>198</td>
<td>Weingart Center - RSAAP</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>199</td>
<td>Weingart Center - Sixth Floor</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>200</td>
<td>Weingart Center - Tenth Floor</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>201</td>
<td>Weingart Center - The Open Door</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>202</td>
<td>Weingart Center - THP</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>203</td>
<td>Weingart Center Cafe</td>
<td>Homeless Service Provider</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>204</td>
<td>Weingart Civic Center A Bridge Home</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>205</td>
<td>Whittier First Day</td>
<td>Homeless Shelter</td>
<td>2</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>206</td>
<td>Whittier Navigation Center</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>3</td>
<td>0</td>
</tr>
<tr>
<td>207</td>
<td>Zahn Memorial Center</td>
<td>Homeless Shelter</td>
<td>0</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>Total</td>
<td></td>
<td></td>
<td>223</td>
<td>534</td>
<td>2</td>
</tr>
</tbody>
</table>
<caption><small class="text-muted">These data are dynamic and may not reflect real-time investigation counts for these settings. Data will change based on daily information gathered by public health investigators overseeing, supervising, and closing each investigation. As of March 24, outbreaks that have met criteria for closure (no new cases identified for at least four weeks) but are pending final documentation have been removed from our active outbreak listings. As outbreaks continue to decrease, we will be able to identify those that have met criteria for closure more quickly. Confirmed case data reflect aggregate counts abstracted from IRIS's COVID-19 outbreak details for current COVID-19 outbreaks in Los Angeles County. These include cases reported since the beginning of the current active outbreak and may include some cases that have since recovered. Homeless Service Settings include interim housing, shelters, encampments, and single room units, and service providers supporting People Experiencing Homelessness (PEH). This list is intended to inform the public of the current COVID-19 community outbreaks in Los Angeles County. Inclusion on this list does not suggest neglect or wrongdoing on the part of the setting.</small></caption>









						<!-- End of PEH TABLE section -->
					</div>
				</div>
			</div>
			<!-- End of PEH SETTINGS section -->
			
			
			
			<!-- EDUCATION SETTINGS section -->
			<div id="educational-settings" class="container-xl mt-5 pt-2 pb-0 mb-3 aqua">
				<div class="row center mb-4">
					<div class="col">
						<h2 class="h5 text-white text-M-700">Active Outbreaks at Educational Settings with Three or More <nobr>Laboratory-Confirmed</nobr> COVID-19 Cases</h2>
					</div>
				</div>
			</div>
			<div class="container-xl pb-4">
				<div class="row">
					<div class="col">


						<!--<p>Currently there are no active outbreaks within educational settings to report.</p>-->
						<!-- EDUCATION TABLE section -->




<table class="table table-striped table-bordered table-sm overflow-y">
<thead class="text-white"><tr>
<th>Obs</th>
<th>Setting Name</th>
<th>Address</th>
<th>Total Confirmed Staff</th>
<th>Total Confirmed Students</th>
</tr></thead>
<tbody>
<tr>
<td>1</td>
<td>Artesia High School</td>
<td>12108 Del Amo Blvd, Lakewood, CA, 90715</td>
<td>3</td>
<td>21</td>
</tr>
<tr>
<td>2</td>
<td>Azusa Pacific University Athletics</td>
<td>901 E Alosta Ave, Azusa, CA, 91702</td>
<td>2</td>
<td>8</td>
</tr>
<tr>
<td>3</td>
<td>Bishop Amat Memorial High School</td>
<td>14301 Fairgrove Ave, La Puente, CA, 91746</td>
<td>6</td>
<td>39</td>
</tr>
<tr>
<td>4</td>
<td>Bishop Montgomery High School</td>
<td>5430 Torrance Blvd, Torrance, CA, 90503</td>
<td>1</td>
<td>4</td>
</tr>
<tr>
<td>5</td>
<td>Bishop Mora Salesian High School</td>
<td>960 S Soto St, Los Angeles, CA, 90023</td>
<td>0</td>
<td>3</td>
</tr>
<tr>
<td>6</td>
<td>Brella Playa Vista</td>
<td>12746 W Jefferson Blvd, Ste 3-3100, Playa Vista, CA, 90094</td>
<td>6</td>
<td>3</td>
</tr>
<tr>
<td>7</td>
<td>Bright Horizons at UCLA Westwood</td>
<td>10861 Weyburn Ave, Los Angeles, CA, 90024</td>
<td>1</td>
<td>8</td>
</tr>
<tr>
<td>8</td>
<td>Cal State Northridge Athletics</td>
<td>18111 Nordhoff St, Northridge, CA, 91330</td>
<td>1</td>
<td>9</td>
</tr>
<tr>
<td>9</td>
<td>Calabasas High School</td>
<td>22855 Mulholland Hwy, Calabasas, CA, 91302</td>
<td>4</td>
<td>20</td>
</tr>
<tr>
<td>10</td>
<td>California Institute of The Arts</td>
<td>24700 McBean Pkwy, Valencia, CA, 91355</td>
<td>0</td>
<td>8</td>
</tr>
<tr>
<td>11</td>
<td>Canyon High School</td>
<td>19300 Nadal St, Canyon Country, CA, 91351</td>
<td>3</td>
<td>21</td>
</tr>
<tr>
<td>12</td>
<td>Crossroads School For Arts and Sciences</td>
<td>1741 21st St, Santa Monica, CA, 90404</td>
<td>2</td>
<td>12</td>
</tr>
<tr>
<td>13</td>
<td>Diamond Ranch High School</td>
<td>100 Diamond Ranch Rd, Pomona, CA, 91766</td>
<td>3</td>
<td>24</td>
</tr>
<tr>
<td>14</td>
<td>El Monte High School</td>
<td>3048 Tyler Ave, El Monte, CA, 91731</td>
<td>0</td>
<td>5</td>
</tr>
<tr>
<td>15</td>
<td>El Segundo High School</td>
<td>640 Main St, El Segundo, CA, 90245</td>
<td>1</td>
<td>13</td>
</tr>
<tr>
<td>16</td>
<td>Granada Hills Charter School</td>
<td>10535 Zelzah Ave, Granada Hills, CA, 91344</td>
<td>1</td>
<td>4</td>
</tr>
<tr>
<td>17</td>
<td>La Serna High School</td>
<td>15301 Youngwood Dr, Whittier, CA, 90605</td>
<td>1</td>
<td>16</td>
</tr>
<tr>
<td>18</td>
<td>Launch Pad Learning</td>
<td>4141 W El Segundo Blvd, Hawthorne, CA, 90250</td>
<td>1</td>
<td>4</td>
</tr>
<tr>
<td>19</td>
<td>Los Angeles Trade Technical College Athletics</td>
<td>400 W Washington Blvd, Los Angeles, CA, 90015</td>
<td>0</td>
<td>6</td>
</tr>
<tr>
<td>20</td>
<td>Loyola High School of Los Angeles</td>
<td>1901 Venice Blvd, Los Angeles, CA, 90006</td>
<td>1</td>
<td>7</td>
</tr>
<tr>
<td>21</td>
<td>Mark Keppel High School</td>
<td>501 E Hellman Ave, Alhambra, CA, 91801</td>
<td>2</td>
<td>19</td>
</tr>
<tr>
<td>22</td>
<td>Mira Costa High School</td>
<td>1401 Artesia Blvd, Manhattan Beach, CA, 90266</td>
<td>1</td>
<td>10</td>
</tr>
<tr>
<td>23</td>
<td>Mountain View High School</td>
<td>2900 Parkway Dr, El Monte, CA, 91732</td>
<td>1</td>
<td>5</td>
</tr>
<tr>
<td>24</td>
<td>Notre Dame High School</td>
<td>13645 Riverside Dr, Sherman Oaks, CA, 91423</td>
<td>3</td>
<td>48</td>
</tr>
<tr>
<td>25</td>
<td>Paraclete High School</td>
<td>42145 30th St W, Lancaster, CA, 93536</td>
<td>4</td>
<td>16</td>
</tr>
<tr>
<td>26</td>
<td>Pepperdine University Athletics 2</td>
<td>24255 Pacific Coast Hwy, Malibu, CA, 90263</td>
<td>2</td>
<td>8</td>
</tr>
<tr>
<td>27</td>
<td>Pepperdine University Athletics 3</td>
<td>24255 PAcific Coast Hwy, Malibu, CA, 90263</td>
<td>5</td>
<td>8</td>
</tr>
<tr>
<td>28</td>
<td>Pepperdine University Athletics 4</td>
<td>24255 Pacific Coast Hwy, Malibu, CA, 90263</td>
<td>0</td>
<td>17</td>
</tr>
<tr>
<td>29</td>
<td>Pepperdine University Athletics 5</td>
<td>24255 Pacific Coast Hwy, Malibu, CA, 90263</td>
<td>0</td>
<td>9</td>
</tr>
<tr>
<td>30</td>
<td>Redondo Union High School</td>
<td>1 Sea Hawk Way, Redondo Beach, CA, 90277</td>
<td>0</td>
<td>11</td>
</tr>
<tr>
<td>31</td>
<td>San Marino High School</td>
<td>2701 Huntington Dr, San Marino, CA, 91108</td>
<td>1</td>
<td>8</td>
</tr>
<tr>
<td>32</td>
<td>Santa Clarita Community College District (College of The Canyons)</td>
<td>26455 Rockwell Canyon Rd, Santa Clarita, CA, 91355</td>
<td>3</td>
<td>15</td>
</tr>
<tr>
<td>33</td>
<td>Saugus High School</td>
<td>21900 Centurion Way, Saugus, CA, 91350</td>
<td>0</td>
<td>7</td>
</tr>
<tr>
<td>34</td>
<td>South Pasadena High School</td>
<td>1401 Fremont Ave, South Pasadena, CA, 91030</td>
<td>1</td>
<td>18</td>
</tr>
<tr>
<td>35</td>
<td>The Buckley School</td>
<td>3900 Stansbury Ave, Sherman Oaks, CA, 91423</td>
<td>1</td>
<td>15</td>
</tr>
<tr>
<td>36</td>
<td>Trinity Classical Academy</td>
<td>28310 Kelly Johnson Pkwy, Valencia, CA, 91355</td>
<td>1</td>
<td>7</td>
</tr>
<tr>
<td>37</td>
<td>Turning Point School</td>
<td>8780 National Blvd, Culver City, CA, 90232</td>
<td>0</td>
<td>8</td>
</tr>
<tr>
<td>38</td>
<td>UCLA Athletics 7</td>
<td>325 Westwood Plz, Los Angeles, CA, 90095</td>
<td>2</td>
<td>11</td>
</tr>
<tr>
<td>39</td>
<td>UCLA Athletics 9</td>
<td>325 Westwood Plz, Los Angeles, CA, 90095</td>
<td>0</td>
<td>9</td>
</tr>
<tr>
<td>40</td>
<td>University of La Verne</td>
<td>1950 3rd St, La Verne, CA, 91750</td>
<td>1</td>
<td>40</td>
</tr>
<tr>
<td>41</td>
<td>USC Athletics 6</td>
<td>1031 W 34th St, Los Angeles, CA, 90089</td>
<td>5</td>
<td>11</td>
</tr>
<tr>
<td>42</td>
<td>Vasquez High School</td>
<td>33630 Red Rover Mine Rd, Acton, CA, 93510</td>
<td>0</td>
<td>11</td>
</tr>
<tr>
<td>43</td>
<td>Viewpoint School</td>
<td>23620 Mulholland Hwy, Calabasas, CA, 91302</td>
<td>6</td>
<td>9</td>
</tr>
<tr>
<td>44</td>
<td>Warren High School</td>
<td>8141 De Palma St, Downey, CA, 90241</td>
<td>2</td>
<td>6</td>
</tr>
<tr>
<td>45</td>
<td>Westside Neighborhood School</td>
<td>5401 Beethoven St, Los Angeles, CA, 90066</td>
<td>3</td>
<td>1</td>
</tr>
<tr>
<td>46</td>
<td>Whittier College Athletics</td>
<td>13406 Philadelphia St, Whittier, CA, 90601</td>
<td>0</td>
<td>7</td>
</tr>
<tr>
<td>47</td>
<td>Whittier High School</td>
<td>12417 Philadelphia St, Whittier, CA, 90601</td>
<td>1</td>
<td>11</td>
</tr>
<tr>
<td>Total</td>
<td></td>
<td></td>
<td>82</td>
<td>580</td>
</tr>
</tbody>
</table>
<caption><small class="text-muted">These data are dynamic and may not reflect real-time investigation counts for these settings. Data will change based on daily information gathered by public health investigators overseeing, supervising, and closing each investigation. As of March 24, outbreaks that have met criteria for closure (no new cases identified for at least two weeks) but are pending final documentation have been removed from our active outbreak listings. As outbreaks continue to decrease, we will be able to identify those that have met criteria for closure more quickly. Confirmed case data reflect aggregate counts abstracted from IRIS's COVID-19 outbreak details for current COVID-19 outbreaks in Los Angeles County. These include cases reported since the beginning of the current active outbreak and may include some cases that have since recovered. Educational settings are included on this list if there is a cluster of respiratory illness in persons associated with the setting including at least three persons who have tested positive for COVID-19 in a 14-day period and are epidemiologically linked. This list is intended to inform the public of the current COVID-19 community outbreaks in Los Angeles County. Inclusion on this list does not suggest neglect or wrongdoing on the part of the facility.</small></caption>








						<!-- End of EDUCATION TABLE section -->
					</div>
				</div>
			</div>
			<!-- End of EDUCATION SETTINGS section -->
			
			
			
			<!-- CORRECTIONAL SETTINGS section -->
			<div id="correctional-settings" class="container-xl mt-5 pt-2 pb-0 mb-3 aqua">
				<div class="row center mb-4">
					<div class="col">
						<h2 class="h5 text-white text-M-700">Active Outbreaks at Correctional and Law Enforcement Settings with (1) Two or More <nobr>Laboratory-Confirmed</nobr> COVID-19 Cases among Detainees/Inmates or (2) Three or More <nobr>Laboratory-Confirmed</nobr><nobr>COVID-19</nobr> Cases among Staff</h2>
					</div>
				</div>
			</div>
			<div class="container-xl pb-4">
				<div class="row">
					<div class="col">
						<!--<p class="center">
		none
	</p>-->
						<!-- CORRECTIONAL TABLE section -->


						

<table class="table table-striped table-bordered table-sm overflow-y">
<thead class="text-white"><tr>
<th>Obs</th>
<th>Setting Name</th>
<th>City</th>
<th>Number of Confirmed Staff</th>
<th>Total Confirmed Detainees/ Inmates</th>
<th>Total Deaths</th>
</tr></thead>
<tbody>
<tr>
<td>1</td>
<td>Barry J. Nidorf Juvenile Hall</td>
<td>Sylmar, CA</td>
<td>31</td>
<td>31</td>
<td>0</td>
</tr>
<tr>
<td>2</td>
<td>California Highway Patrol - East Los Angeles</td>
<td>Monterey Park, CA</td>
<td>7</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>3</td>
<td>California Highway Patrol - South Los Angeles</td>
<td>Torrance, CA</td>
<td>15</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>4</td>
<td>California State Prison, Lancaster</td>
<td>Lancaster, CA</td>
<td>357</td>
<td>1518</td>
<td>14</td>
</tr>
<tr>
<td>5</td>
<td>Camp Glenn Rockey</td>
<td>San Dimas, CA</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>6</td>
<td>Camp Paige</td>
<td>La Verne, CA</td>
<td>4</td>
<td>16</td>
<td>0</td>
</tr>
<tr>
<td>7</td>
<td>Camp Vernon Kilpatrick</td>
<td>Malibu, CA</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>8</td>
<td>Central Juvenile Hall</td>
<td>Los Angeles, CA</td>
<td>153</td>
<td>165</td>
<td>0</td>
</tr>
<tr>
<td>9</td>
<td>Century Regional Detention Facility</td>
<td>Lynwood, CA</td>
<td>186</td>
<td>503</td>
<td>1</td>
</tr>
<tr>
<td>10</td>
<td>Claremont Police Department</td>
<td>Claremont, CA</td>
<td>5</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>11</td>
<td>Dorothy Kirby Center</td>
<td>Commerce, CA</td>
<td>6</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>12</td>
<td>Downey Police Department</td>
<td>Downey, CA</td>
<td>18</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>13</td>
<td>FCI, Terminal Island</td>
<td>San Pedro, CA</td>
<td>25</td>
<td>70</td>
<td>0</td>
</tr>
<tr>
<td>14</td>
<td>LA County Alternate Public Defender - Inglewood Courthouse</td>
<td>Inglewood, CA</td>
<td>3</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>15</td>
<td>LA County Child Support Services Department - Commerce Headquarters</td>
<td>Commerce, CA</td>
<td>22</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>16</td>
<td>LA County Child Support Services Department - Commerce Public Contact Office</td>
<td>Commerce, CA</td>
<td>17</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>17</td>
<td>LA County District Attorney's Office - Clara Shortridge Foltz Criminal Justice Center, Floor 17</td>
<td>Los Angeles, CA</td>
<td>8</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>18</td>
<td>LA County Public Defender - Clara Shortridge Foltz Criminal Justice Center, Floor 19</td>
<td>Los Angeles, CA</td>
<td>4</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>19</td>
<td>LA County Sheriff's Department - Pomona Courthouse</td>
<td>Pomona, CA</td>
<td>6</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>20</td>
<td>LA County Sheriff's Department - STARS Center</td>
<td>Whittier, CA</td>
<td>9</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>21</td>
<td>LAPD 77th Street Community Police Station</td>
<td>Los Angeles, CA</td>
<td>34</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>22</td>
<td>LAPD Metropolitan Detention Center</td>
<td>Los Angeles, CA</td>
<td>13</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>23</td>
<td>LAPD Newton Community Police Station</td>
<td>Los Angeles, CA</td>
<td>24</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>24</td>
<td>LAPD Olympic Community Police Station</td>
<td>Los Angeles, CA</td>
<td>33</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>25</td>
<td>LAPD Van Nuys Community Police Station</td>
<td>Van Nuys, CA</td>
<td>21</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>26</td>
<td>LAPD Van Nuys Jail</td>
<td>Van Nuys, CA</td>
<td>22</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>27</td>
<td>LAPD West Valley Community Police Station</td>
<td>Reseda, CA</td>
<td>17</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>28</td>
<td>Los Angeles Superior Court - Stanley Mosk Courthouse</td>
<td>Los Angeles, CA</td>
<td>30</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>29</td>
<td>Manhattan Beach Police Department</td>
<td>Manhattan Beach, CA</td>
<td>13</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>30</td>
<td>Men's Central Jail</td>
<td>Los Angeles, CA</td>
<td>424</td>
<td>1227</td>
<td>12</td>
</tr>
<tr>
<td>31</td>
<td>Metropolitan Detention Center</td>
<td>Los Angeles, CA</td>
<td>4</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>32</td>
<td>North County Correctional Facility</td>
<td>Castaic, CA</td>
<td>204</td>
<td>1701</td>
<td>3</td>
</tr>
<tr>
<td>33</td>
<td>Pitchess Detention Facility</td>
<td>Castaic, CA</td>
<td>257</td>
<td>645</td>
<td>3</td>
</tr>
<tr>
<td>34</td>
<td>Pomona Police Department</td>
<td>Pomona, CA</td>
<td>26</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>35</td>
<td>Santa Monica Public Safety Facility</td>
<td>Santa Monica, CA</td>
<td>46</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>36</td>
<td>Twin Towers Correctional Facility</td>
<td>Los Angeles, CA</td>
<td>867</td>
<td>2886</td>
<td>7</td>
</tr>
<tr>
<td>Total</td>
<td></td>
<td></td>
<td>2917</td>
<td>8767</td>
<td>40</td>
</tr>
</tbody>
</table>
<caption><small class="text-muted">These data are dynamic and may not reflect real-time investigation counts for these settings. Data will change based on daily information gathered by public health investigators overseeing, supervising, and closing each investigation. As of March 24, outbreaks that have met criteria for closure (no new cases identified for at least two weeks) but are pending final documentation have been removed from our active outbreak listings. As outbreaks continue to decrease, we will be able to identify those that have met criteria for closure more quickly. Confirmed case data reflect aggregate counts abstracted from IRIS's COVID-19 outbreak details for current COVID-19 outbreaks in Los Angeles County. These include cases reported since the beginning of the current active outbreak and may include some cases that have since recovered. This list is intended to inform the public of the current COVID-19 community outbreaks in Los Angeles County. Inclusion on this list does not suggest neglect or wrongdoing on the part of the facility.</small></caption>










						<!-- End of CORRECTIONAL TABLE section -->
					</div>
				</div>
			</div>
			<!-- End of CORRECTIONAL SETTINGS section -->

			
			
			
			<!-- CITATIONS section -->
			<div id="citations" class="container-xl mt-5 pt-2 pb-0 mb-3 aqua">
				<div class="row center mb-4">
					<div class="col">
						<h2 class="h5 text-white text-M-700">Citations Issued Due to Lack of Compliance with Health Officer Order</h2>
					</div>
				</div>
			</div>
			<div class="container-xl pb-4 mb-4">
				<div class="row">
					<div class="col">


			<!-- CITATIONS TABLE section -->

				
				<table class="table table-bordered table-sm overflow-y"><embed type="text/html" src="https://ehservices.publichealth.lacounty.gov/servlet/guest?service=1&amp;enterprise=5" width="100%" height="600"></embed></table>
<caption><small class="text-muted">Update <div id="lastSunday" style="display: inline-block"></div></small></caption>


 	<!-- End of CITATIONS TABLE section -->
 	</div>
	</div>
	</div>
  <!-- End of CITATIONS section -->


			
			
			<!-- CITATIONS section -->
			<!--<div id="citations" class="container-xl mt-5 pt-2 pb-0 mb-3 aqua">
				<div class="row center mb-4">
					<div class="col">
						<h2 class="h5 text-white text-M-700">Citations Issued Due to Lack of Compliance with Health Officer Order</h2>
					</div>
				</div>
			</div>
			<div class="container pb-4 mb-4">
				<div class="row">
					<div class="col">
						<!--<p class="center">
							none
						</p>-->

						<!-- CITATIONS TABLE section -->




						<!-- End of CITATIONS TABLE section -->
				<!--	</div>
				</div>
			</div>
			<!-- End of CITATIONS section -->



		</div>
		<!-- END of DPH WIDTH -->

        <div class="dph-width">
            <!--webbot bot="Include" U-Include="../mediafoot-2020-update.htm" TAG="BODY" startspan -->

<!-- PDF -->
<div class="container">
	<div class="column3alt">
		<div class="column3alt-1">
			<a href="http://get.adobe.com/reader/otherversions/" target="_parent"><img src="http://publichealth.lacounty.gov/images/GetReader.jpg" alt="Get Adobe Reader" width="70" height="25" border="0"></a><br><span class="contTitle1">Adobe Reader</span>
		</div>
		<div class="column3alt-2">
			<p>
				Note: PDF documents on this site were created using Adobe Acrobat 5.0 or later. Document functionality may be reduced if you are using an earlier version (4.x or less). 
				<a href="http://get.adobe.com/reader/otherversions/" target="_parent">Get the latest version of Adobe Acrobat.</a>
			</p>
		</div>
	</div>
</div>

<div class="container">
	<div class="footdropdown">
		<span class="ml-0 mr-0">
			<li>
<a name="" href="#" target="_parent">Home  |</a>
				<ul>
<li class="droplinks"><a href="http://publichealth.lacounty.gov/unit" target="_blank">Acute Communicable Disease Control</a></li>
					<li class="droplinks"><a href="http://publichealth.lacounty.gov" target="_blank">Public Health</a></li>
					<li class="droplinks"><a href="http://lacounty.gov" target="_blank">LA County</a></li>
				</ul>
</li>
			<li><a id="Careers" href="http://hr.lacounty.gov/" target="_parent">Careers  |</a></li>
			<li><a href="/phcommon/public/unitinfo/unitdirlist.cfm?ou=ph" target="_blank">DPH Programs  |</a></li>
			<li><a href="/ContactUs.htm" target="_parent">Email: Webmaster  |</a></li>
			<li>
<a name="" href="#" target="_parent">Notice of Privacy Practices | </a>
				<ul>
<li class="droplinks"><a href="/docs/NoticeofPrivacy-ENG.pdf" target="_blank">English</a></li>
					<li class="droplinks"><a href="/docs/NoticeofPrivacy-SPN.pdf" target="_blank">Spanish</a></li>
				</ul>
</li>
			<li><a href="https://lacounty.gov/privacy-policy/" target="_blank">Website Privacy Policy  |</a></li>
			<li><a href="http://portal.lacounty.gov/wps/portal/!ut/p/c5/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gLAwgwMvDzcDMw8jH29wt2czE2cDYGykciyVuYBILkXS1CPU2NjQwCzQjoDgfZh1uFiTmaPLr5pgTkzSDyBjiAo4G-n0d-bqp-QW6EQaanriMAUbpfjg!!/dl3/d3/L3dDb0EvUU5RTGtBISEvWUZSdndBISEvNl84MDAwMDAwMDIwTkhGMDJMM09OU0ZEMzBLMQ!!/" target="_blank">Accessibility  |</a></li>
			<li><a href="http://publichealth.lacounty.gov/phcommon/public/adpolicy.htm" target="_blank">Disclaimer  |</a></li>
			<li>
<a name="" href="#" target="_parent">Employee</a>
				<ul>
<li class="droplinks"><a href="https://admin.publichealth.lacounty.gov/phcommon/login.cfm?ou=ph&amp;prog=dcp&amp;unit=acd" target="_blank">Admin Use</a></li>
					<li class="droplinks"><a href="https://outlook.office365.com/owa/" target="_blank">Outlook E-mail</a></li>
					<li class="droplinks"><a href="http://intranet.ph.lacounty.gov/ph/" title="Accessible from Work Only" target="_blank">DPH Intranet (At Work)</a></li>
				</ul>
</li>
		</span>
	</div>
</div>

<br><br><div class="container">
	<div class="column3alt">
		<div class="column3alt-2">
			<p>Public Health has made reasonable efforts to provide accurate translation. However, no computerized translation is perfect and 
			is not intended to replace traditional translation methods.  If questions arise concerning the accuracy of the information, please refer to the English edition 
			of the website, which is the official version.
			</p>
		</div>
		<div class="column3alt-1">
			<img src="http://publichealth.lacounty.gov/images/2008/seal_footer.gif" alt="Los Angeles County Seal: Enriching lives through effective and caring services">
</div>
	</div>
</div>


<!-- Note from phwebinformatics - web stats can't be removed -->
<script src="http://www.publichealth.lacounty.gov/JS/taglinks.min.js" type="text/javascript"></script><script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-4143490-2']);
  _gaq.push(['_setDomainName', '.lacounty.gov']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script><!--webbot bot="Include" i-checksum="30580" endspan -->
</div>
    </div>

    <script>
	"use strict";

	/* MOBILE MENU */
	document.getElementById('mobile-icon').addEventListener('click', function(event) {
		document.querySelector('#mobile-menu-div').style.display = "block";
		document.getElementById('header').style.display = "none";
		document.querySelector('#content').style.display = "none";
		document.getElementById('mobile-menu-div').scrollTop = 0;
	});

	document.getElementById('open-header').addEventListener('click', function(event) {
		document.querySelector('#mobile-menu-div').style.display = "none";
		document.getElementById('header').style.display = "block";
		document.querySelector('#content').style.display = "block";
	});

	document.querySelector('#open-header').classList.add('open-fixed-menu');


	/* COLLAPSE */
	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.maxHeight){
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + 5500 + "px";
			} 
		});
	}

	/* COLLAPSE */
	var coll = document.getElementsByClassName("collapsible-center");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			if (content.style.maxHeight){
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + 5500 + "px";
			} 
		});
	}
	
	
	/* NAV IMAGE ROLLOVER */
	function menu1outImg(x) {
	  document.getElementById("featured1").src = "images/menu1-thumb0.png";
	}

	function menu1Img1(x) {
	  document.getElementById("featured1").src = "images/menu1-thumb1.png";
	}

	function menu1Img2(x) {
	  document.getElementById("featured1").src = "images/menu1-thumb2.png";
	}

	function menu1Img3(x) {
	  document.getElementById("featured1").src = "images/menu1-thumb3.png";
	}

	function menu1Img4(x) {
	  document.getElementById("featured1").src = "images/menu1-thumb4.png";
	}



	function menu2outImg(x) {
	  document.getElementById("featured2").src = "images/menu2-thumb0.png";
	}

	function menu2Img1(x) {
	  document.getElementById("featured2").src = "images/menu2-thumb1.png";
	}

	function menu2Img2(x) {
	  document.getElementById("featured2").src = "images/menu2-thumb2.png";
	}

	function menu2Img3(x) {
	  document.getElementById("featured2").src = "images/menu2-thumb3.png";
	}

	function menu2Img4(x) {
	  document.getElementById("featured2").src = "images/menu2-thumb4.png";
	}



	function menu3outImg(x) {
	  document.getElementById("featured3").src = "images/menu3-thumb0.png";
	}

	function menu3Img1(x) {
	  document.getElementById("featured3").src = "images/menu3-thumb1.png";
	}

	function menu3Img2(x) {
	  document.getElementById("featured3").src = "images/menu3-thumb2.png";
	}

	function menu3Img3(x) {
	  document.getElementById("featured3").src = "images/menu3-thumb3.png";
	}


	

    </script><script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script><script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-throttle-debounce/1.1/jquery.ba-throttle-debounce.min.js"></script><script src="StickyTableHeaders/js/jquery.stickyheader.js"></script><script async type="text/javascript" src="/_Incapsula_Resource?SWJIYLWA=719d34d31c8e3a6e6fffd425f7e032f3&amp;ns=1&amp;cb=1639403905"></script>
</body>
</html>
', function () {
    console.log(page.content);
    phantom.exit();
});
