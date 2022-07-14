const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHtml = "Dark mode"
    }
    else {
        html.classList.add('dark')
        e.target.innerHtml = "Light mode"
    }
})