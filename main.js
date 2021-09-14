const mobileBtn = document.querySelector('.berger');
const menuList = document.querySelector('.nav_list');



mobileBtn.addEventListener('click', (() => {
    mobileBtn.classList.toggle('click');
    menuList.classList.toggle('open');
}));

