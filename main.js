const mobileBtn = document.querySelector('.berger');
const menuList = document.querySelector('.nav_list');
const menuItem = document.querySelectorAll('.nav_list_item');


mobileBtn.addEventListener('click', (() => {
    mobileBtn.classList.toggle('click');
    menuList.classList.toggle('open');
}));
menuItem.forEach(item => {
    item.addEventListener('click', (() => {
        menuList.classList.remove('open');
    }
    ));
    
})
