const menu = () => {
    const menu = document.querySelector('.menu'),
          burgerWrapper = document.querySelector('.ham__wrapper'),
          burger = document.querySelector('.ham'),
          items = document.querySelectorAll('.menu-items__item');

    burgerWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (burger.classList.contains('ham_active')) {
            burger.classList.remove('ham_active');
            menu.classList.remove('menu_active');
        } else {
            burger.classList.add('ham_active');
            menu.classList.add('menu_active');
        }
    });

    items.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            burger.classList.remove('ham_active');
            menu.classList.remove('menu_active');
            if (!item.classList.contains('menu-items__item_active')) {
                document.querySelector('.menu-items__item_active').classList.remove('menu-items__item_active');
                item.classList.add('menu-items__item_active');
            }
        });
    });
};

menu();