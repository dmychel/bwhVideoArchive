const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('#year').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})
console.log(navLinks)