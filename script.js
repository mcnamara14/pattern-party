// Accordion Tabs

const changeTab = (e, index) => {
	console.log(e, index)
	const activeTab = document.querySelector('.tab.active')
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
	const activePanel = document.querySelector('.panel.active')
		.classList.remove('active');
	
	panels[index].classList.add('active');
}

// Flexible Cards