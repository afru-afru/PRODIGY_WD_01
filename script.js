window.addEventListener('scroll',function(){
    const navbar = document.querySelector('.navbar');
    if(this.window.scrollY>50){
        navbar.style.backgroundColor='#222';
        navbar.style.transition="background-color 0.3s ease"; //smooth transition

    }
    else{
        navbar.styly.backgroundColor ="#333"; //original color
    }
});