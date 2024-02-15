function navToggle() {
	var links = document.getElementById('navUl');
	var overlay = document.querySelector('.burger-nav__overlay');
	links.classList.toggle("_active");
	overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'block' : 'none';
  }

const accordeon = document.querySelector('.accordeon');
const accordeonItems = accordeon.querySelectorAll('.accordeon__item');

accordeonItems.forEach((accordeonItem) => {
    const accordeonTitle = accordeonItem.querySelector('.accordeon__button');
    const accordeonDish = accordeonItem.querySelector('.accordeon__dish');

    accordeonTitle.addEventListener('click', function() {
        accordeonItems.forEach((item) => {
            if (item !== accordeonItem) {
                const otherText = item.querySelector('.accordeon__list');
                item.classList.remove('accondeon__item--active');
                otherText.classList.remove('accordeon__list--visible');
                otherText.style.maxHeight = null;

                const otherDish = item.querySelector('.accordeon__dish');
                otherDish.classList.remove('accordeon__dish--active');
            }
        });

        const currentText = accordeonItem.querySelector('.accordeon__list');
        accordeonItem.classList.toggle('accondeon__item--active');
        currentText.classList.toggle('accordeon__list--visible');

        if (currentText.classList.contains('accordeon__list--visible')) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px';
            
            accordeonDish.classList.add('accordeon__dish--active');
        } else {
            currentText.style.maxHeight = null;
            
            accordeonDish.classList.remove('accordeon__dish--active');
        }
    });
});
