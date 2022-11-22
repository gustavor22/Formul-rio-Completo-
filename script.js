var el = document.querySelector('.menu-mobile-icon');

el.addEventListener('click',()=>{
    //queremos mostrar o menu
    var menuItems = document.querySelector('.menu-items');
    if(menuItems.classList.contains('show')) {
        menuItems.classList.add('hide');
        menuItems.classList.remove('show');
    }else{
        menuItems.classList.add('show');
        menuItems.classList.remove('hide');
    }


});
        