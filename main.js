const mobileBtn = document.querySelector('.berger');
const menuList = document.querySelector('.nav_list');
const menuItem = document.querySelectorAll('.nav_list_item');
const wrap = document.querySelector('.wrap');


//mobile menu toggle
function toggle(){
    mobileBtn.classList.toggle('click');
    menuList.classList.toggle('open');
}
function remove(){
    mobileBtn.classList.remove('click');
    menuList.classList.remove('open');
}
mobileBtn.addEventListener('click', (() => {
    toggle();
    if (mobileBtn.classList.contains('click')) {
        wrap.addEventListener('click', (() => {
          remove();
        }))

    }
}));
menuItem.forEach(item => {
    item.addEventListener('click', (() => {
        remove();
    }));
})

//scroll event

const items = document.querySelectorAll('.appear');

const active = function(items){
    items.forEach(item => {
        if(item.isIntersecting){
        item.target.classList.add('inview'); 
        }else{
            item.target.classList.remove('inview'); 
        }
    });
}
const io = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io.observe(items[i]);
 }