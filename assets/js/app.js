const header = document.querySelector('header')
const title = document.querySelector('title')

console.log(title.innerText)

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