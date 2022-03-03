const header = document.querySelector('header')
const title = document.querySelector('title')
const card = document.querySelector('.header-card')
const list = document.querySelector('.information')
const close = document.querySelector('.close')
const overflow = document.querySelector('.overflow')

card.addEventListener('click', () => {
    list.style.display = 'block'
})

function hiddenList() {
    list.style.display = 'none'
}

close.addEventListener('click', hiddenList)
overflow.addEventListener('click', hiddenList)

setInterval(() => {
    if(title.innerText === 'Giao Diện Website Wordpress, Theme Wordpress') {
        title.innerText = '1 tin nhắn mới'
    } else {
        title.innerText = 'Giao Diện Website Wordpress, Theme Wordpress'
    }
}, 1000)


window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        header.style.height = '80px'
    } else {
        header.style.height = '130px'
    }
})