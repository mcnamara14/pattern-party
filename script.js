const changeTab = (e) => {
	const activeTab = document.querySelector('.active');
	activeTab.classList.remove('active');
	const clickedTab = e.target;
	clickedTab.classList.add('active');
}

const tabs = document.querySelectorAll('.tab');

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', (e) => changeTab(e))
}
