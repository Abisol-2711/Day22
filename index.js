let myImg = document.querySelectorAll('.panel');


myImg.forEach(e => {
    e.addEventListener('click' , function(){
        myImg.forEach(a => {
            a.classList.remove('active');
        })

        e.classList.add('active')
    })
});