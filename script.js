const changeTab = (e, index) => {
	const activeTab = document.getElementsByClassName('accordion-tabs')[0]
		.getElementsByClassName('active')[0]
		.classList.remove('active');

	e.target.classList.add('active');

	displayPanel(index)
}

const tabs = document.querySelectorAll('.tab');

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', (e) => changeTab(e, i))
}

const displayPanel = (index) => {
	const panels = document.querySelectorAll('.panel');
	const activePanel = document.getElementsByClassName('accordion-panels')[0]
		.getElementsByClassName('active')[0]
		.classList.remove('active');
	
	panels[index].classList.add('active');
}