function show(element){
	document.querySelector(element).classList.remove('hide');
	document.querySelector('.landing').classList.add('hide');
	document.querySelector('.landing').style.marginTop = "100vh";
	setTimeout(()=>{scrollUpSmoothAnimation(element)}, 100);
}

function home(){
	var pages = document.querySelectorAll('.main');
	for(page of pages){
		classes = page.classList;
		if(!classes.contains('hide')){
			classes.add('hide');
			page.style.marginTop = "100vh";
		}
	}
	document.querySelector('.landing').classList.remove('hide');
	setTimeout(()=>{scrollUpSmoothAnimation('.landing')}, 100);
}

function scrollUpSmoothAnimation(element){
	document.querySelector(element).style.marginTop = "0px";
}

var exps = [
{
	'logo': 'https://media-exp1.licdn.com/dms/image/C510BAQF_zIelQWSBvw/company-logo_100_100/0?e=1609977600&v=beta&t=RVM5i0gEdH_ik7a95Sinw5tDIzZ5xMcC7TMjmPyY31c',
	'company': 'JPMorgan Chase &amp; Co.', 
	'location': 'Wilmington, Delaware', 
	'year': 'Nov 2013 - Mar 2015', 
	'post': 'Senior Business Systems Analyst', 
	'desp': 'Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis.', 
	'resps': ['Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames'],
	'envs': ['Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames']
},

{
	'logo': 'https://media-exp1.licdn.com/dms/image/C560BAQGT4d_JDjXclg/company-logo_100_100/0?e=1609977600&v=beta&t=CoN3JJ6NWcKT1L-sEQhU2-uYKCRcf_wBC-Z8vqrm014',
	'company': 'Comcast', 
	'location': 'Greater Philadelphia', 
	'year': 'May 2015 - Jun 2016',
	'post': 'Senior Business Systems Analyst', 
	'desp': 'Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis.', 
	'resps': ['Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames'],
	'envs': ['Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames', 'Vestibulum dapibus, mauris nec malesuada fames']
}]


var backElement = null;

function createPopup(idx, element){
	exp = exps[idx];
	var popup1 = `<div class="logo">
		<img src="${exp.logo}">
		<div class="work">
			<div class="text company">${exp.company}</div>
			<div class="text title">${exp.post}</div>
		</div>
	</div>
	<div class="work-desp text desp">${exp.location}, ${exp.year}</div>
	<div class="work-desp">
		<div class="text desp">
			${exp.desp}
		</div>
	</div>`

	var respList = ''
	for(resp of exp.resps){
		respList += '<li>' + resp + '</li>';
	}
	var popup2 = `
	<div class="responsibilities">
		<h1 style="">Responsibilities</h1>
		<ul class="text desp">
		`
		+ respList +
		`</ul>
	</div>`

	var envList = ''
	for(env of exp.envs){
		envList += '<li>' + env + '</li>';
	}
	var popup3 = `
	<div class="responsibilities">
		<h1 style="">Environment</h1>
		<ul class="text desp">
		`
		+ envList +
		`</ul>
	</div>`

	document.querySelector('.popup').innerHTML = popup1 + popup2 + popup3;
	document.querySelector('.popup-back').style.transform = 'scale(1)';
	document.querySelector(element).style.filter = 'blur(5px)';
	backElement = element;
}

function addExps(){
	for(i in exps){
		let experience = `<div class="work-experience">
				<div class="logo" onclick="createPopup(${i}, '.work');">
					<img src="${exps[i].logo}">
					<div class="work">
						<div class="text company">${exps[i].company}</div>
						<div class="text title">${exps[i].post}</div>
					</div>
				</div>
			</div>`
		document.querySelector('.work').innerHTML += experience;
	}
}

function back(){
	document.querySelector('.popup-back').style.transform = 'scale(0)';
	document.querySelector(backElement).style.filter = 'blur(0px)';

}

setTimeout(()=>{scrollUpSmoothAnimation('.landing')}, 100);
addExps();