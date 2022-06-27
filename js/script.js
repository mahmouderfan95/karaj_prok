let iconeToggle = document.getElementById('toggle-menu'),
    links = document.getElementById('link-ul');
    iconeToggle.onclick = function(){
        if(links.classList.contains('none')){
            links.classList.remove('none');
            links.classList.add('hover-icon')
        }else{
            links.classList.remove('hover-icon');
            links.classList.add('none');
        }
    }