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

// Header Bar

const activeDropdown = () => {
	const nav = document.querySelector('nav');
	const dropdown = document.querySelector('.mobile-dropdown');
	const searchBox = document.querySelector('.search-box');

	if (nav.style.display === 'none' || !nav.style.display) {
		nav.style.display = 'flex';
		searchBox.style.display = 'flex';
		dropdown.classList.add('selected');
	} else {
		nav.style.display = 'none';
		searchBox.style.display = 'none';
		dropdown.classList.remove('selected');
	}

}

const headerBar = document.querySelector('.header-bar');
headerBar.addEventListener('click', activeDropdown);
