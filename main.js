const mobileBtn = document.querySelector('.berger');
const menuList = document.querySelector('.nav_list');
const menuItem = document.querySelectorAll('.nav_list_item');
const body = document.querySelector('body');

mobileBtn.addEventListener('click', (() => {
    mobileBtn.classList.toggle('click');
    menuList.classList.toggle('open');
}));

menuItem.forEach(item => {
    item.addEventListener('click', (() => {
        mobileBtn.classList.remove('click');
        menuList.classList.remove('open');
    }
    ));
})
