const mobileBtn = document.querySelector('.berger');
const menuList = document.querySelector('.nav_list');
const menuItem = document.querySelectorAll('.nav_list_item');
const wrap = document.querySelector('.wrap');

mobileBtn.addEventListener('click', (() => {
    mobileBtn.classList.toggle('click');
    menuList.classList.toggle('open');
    console.log(mobileBtn.classList.contains('click'));
    if (mobileBtn.classList.contains('click')) {
        wrap.addEventListener('click', (() => {
            mobileBtn.classList.Fremove('click');
            menuList.classList.remove('open');
        }))

    }
}));

menuItem.forEach(item => {
    item.addEventListener('click', (() => {
        mobileBtn.classList.remove('click');
        menuList.classList.remove('open');
    }));
})