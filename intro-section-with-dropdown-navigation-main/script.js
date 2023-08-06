const nam = document.querySelector('.nam')

nam.addEventListener('click', e=>{
    document.querySelector('.mobile-nav').classList.add('show')
    document.querySelector('.overlay').style.display = 'block'
    document.body.classList.add('.lock')
})
document.querySelector('#close-menu').addEventListener('click', e=>{
    document.querySelector('.mobile-nav').classList.remove('show')
    document.querySelector('.overlay').style.display = 'none'
    document.body.classList.remove('.lock')
})