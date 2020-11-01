var currentScroll = 0;
var exps = [
{
	'logo': 'https://media-exp1.licdn.com/dms/image/C4E0BAQGFHzoa0GhW9w/company-logo_200_200/0?e=1612396800&v=beta&t=ppWSGfWMnDxmNIIZl9X2eEOJMZrvhqBkfofC0U1dk6w',
	'company': 'Cue Networks', 
	'location': 'Wilmington, Delaware', 
	'year': 'May 2019 - Current',
	'post': 'IT Delivery Manager', 
},
{
	'logo': 'https://media-exp1.licdn.com/dms/image/C4E0BAQFprRTe6CgN7A/company-logo_200_200/0?e=1610582400&v=beta&t=Rq4RntypGTifbf074_ZLyl3I0zUpiZtllbDg8Jyy3e8',
	'company': 'PwC', 
	'location': 'New York', 
	'year': 'May 2018 - May 2019',
	'post': 'Senior Associate Advisory', 
},

{
	'logo': 'https://media-exp1.licdn.com/dms/image/C560BAQHNV-yvz0c75g/company-logo_200_200/0?e=1610582400&v=beta&t=LDidncO8cKhtsxTS0sbrqRpAlSVks443zOhdXUNB21o',
	'company': 'Lombard International(USA)', 
	'location': 'Greater Philadelphia Area', 
	'year': 'Jun 2016 - May 2018',
	'post': 'Product Owner', 
},
{
	'logo': 'https://media-exp1.licdn.com/dms/image/C560BAQGT4d_JDjXclg/company-logo_100_100/0?e=1609977600&v=beta&t=CoN3JJ6NWcKT1L-sEQhU2-uYKCRcf_wBC-Z8vqrm014',
	'company': 'Comcast', 
	'location': 'Greater Philadelphia Area', 
	'year': 'May 2015 - Jun 2016',
	'post': 'Senior Business Systems Analyst', 
},
{
	'logo': 'https://media-exp1.licdn.com/dms/image/C510BAQF_zIelQWSBvw/company-logo_100_100/0?e=1609977600&v=beta&t=RVM5i0gEdH_ik7a95Sinw5tDIzZ5xMcC7TMjmPyY31c',
	'company': 'J.P.Morgan Chase &amp; Co.', 
	'location': 'Wilmington, Delaware', 
	'year': 'Nov 2013 - Mar 2015', 
	'post': 'Senior Business Systems Analyst',
},
{
	'logo': 'https://media-exp1.licdn.com/dms/image/C4D0BAQFwU8_tsXglXw/company-logo_200_200/0?e=1610582400&v=beta&t=y7vbMn22wBve_P-VLZeiJaU-DUVPJ8W-rkEYTs_J43o',
	'company': 'Federal Trade Commission', 
	'location': 'Washington, DC', 
	'year': 'Aug 2010 - Sept 2013',
	'post': 'UI Engineer', 
},

]

var scrollVal = document.querySelector('.part').offsetHeight;
let scrollIdx = 1;
console.log(scrollVal)
window.onscroll = function(){
	currentScroll = window.pageYOffset;
	var works = document.querySelectorAll('.work-experience');
	var delay = 0;
	if(currentScroll >= 0.3*scrollVal){
		for(work of works){
			work.style.animation = "move-in-fade 0.3s ease-in forwards";
			work.style.animationDelay = delay+"s";
			delay += 0.2;
		}
	}
	if(currentScroll == 0)
		scrollIdx = 1;
}

if (window.screen.width < 769){
	let notification = document.querySelector('.notification')
	notification.innerHTML = 'tap anywhere!';
	notification.classList.toggle('hide');
}

var backElement = null;
var currentElement = null;

function show(element){
	document.querySelector('.outer').classList.remove('hide');
	document.querySelector('.down').classList.add('hide');
	document.querySelector(element).classList.remove('hide');
	document.querySelector('.landing').classList.add('hide');
	document.querySelector('.landing').style.marginTop = "100vh";
	document.querySelector('body').style.backgroundColor = '#000';
	document.querySelector('body').style.color = '#fcfcfc';
	setTimeout(()=>{scrollUpSmoothAnimation(element)}, 100);
	currentElement = element;
	if(element == '.contact'){
		let h1_tag = document.querySelector(element + ' h1').offsetWidth;
		console.log(h1_tag, document.getElementById('contact-flex'));
		document.getElementById('contact-flex').style.width =  '90px';
		setTimeout(()=>{document.getElementById('contact-flex').style.width = h1_tag + 'px'}, 200);
	}
	if(element == '.work'){
		document.querySelector('.down').classList.remove('hide');
		document.querySelector('body').style.backgroundColor = '#fff';
		document.querySelector('body').style.color = '#000';
	}
}

function tap(){
	if (window.screen.width < 769){
		let navs1 = document.querySelectorAll('.one');
		let navs2 = document.querySelectorAll('.two');
		for(let i = 0; i < navs1.length; i++){
			navs1[i].classList.toggle('hide');
			navs2[i].classList.toggle('nav-intro');
		}
	}
}

function home(){
	window.scrollTo(0, 0);
	scrollIdx = 1;
	var pages = document.querySelectorAll('.main');
	document.querySelector('body').style.backgroundColor = '#000';
	document.querySelector('body').style.color = '#fcfcfc';
	for(page of pages){
		classes = page.classList;
		if(!classes.contains('hide')){
			classes.add('hide');
			page.style.marginTop = "100vh";
		}
	}
	document.querySelector('.landing').classList.remove('hide');
	document.querySelector('.outer').classList.add('hide');
	document.querySelector('.down').classList.add('hide');
	setTimeout(()=>{scrollUpSmoothAnimation('.landing')}, 100);

}

function scrollUpSmoothAnimation(element){
	document.querySelector(element).style.marginTop = "0px";
}

function addExps(){
	for(i in exps){
		let experience = `<div class="work-experience">
				<div class="logo" onclick="createPopup(${i}, '.work');">
					<img style="height: 100px; object-fit: contain;" src="${exps[i].logo}">
					<div class="work">
						<div class="text company mobile-hide">${exps[i].company}</div>
						<div class="addition">
							<div class="text title">${exps[i].post}</div>
							<div class="flex">
								<div class="text title-small" style="margin-right: 2px; padding-right: 2px;">${exps[i].location}</div>
								<div class="text title-small" style="padding-left: 4px; border-left: 1px solid #fff;">${exps[i].year}</div>
							</div>
						</div>
					</div>
				</div>
			</div>`;
		document.querySelector('.work .part2').innerHTML += experience;
	}
}

function scrollDown(){
	let element = document.querySelectorAll(currentElement + ' .part');
	if(element.length > 1){
		element = element[scrollIdx];
		element.scrollIntoView();
		scrollIdx += 1;
	}
}

setTimeout(()=>{
	scrollUpSmoothAnimation('.landing');
}, 100);
addExps();

