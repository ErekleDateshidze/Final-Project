const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

// Show menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block'
})

// Close menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none'
})

// Active class on nav bar menu
const navItems = menu.querySelectorAll('li')
const removeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active')
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        removeActiveItem();
        link.classList.add('active')
    })
})


// Read more about section 


const readMoreBtn = document.querySelector('.read-more')
const readMoreContent = document.querySelector('.read-more-content')

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if (readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = "Show Less";
    }
    else {
        readMoreBtn.textContent = "Show More";
    }
})


// Porfolio 


var portfolio = {
    name: "RecentProjects",
    projects: [
        { name: "To Do List App" },
        { name: "Drink Water App" },
        { name: "Movie Site(API Fetching)" }
    ]
}

document.getElementById("todo").innerHTML = portfolio.projects[0].name;
document.getElementById("drinkwater").innerHTML = portfolio.projects[1].name;
document.getElementById("moviesite").innerHTML = portfolio.projects[2].name;