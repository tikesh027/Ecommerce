const NAV_BAR = ["Mens", "Women", "Shoes", "Bags"];

// Nav bar code
const mainNavBar = document.getElementById('main_nav_bar_list');
let navItems = "";
NAV_BAR.forEach((items) => {
    navItems += `
    <li class="nav-item">
        <a class="nav-link text-white" href="#">${items}</a>
    </li>
    `
});
mainNavBar.innerHTML = navItems;

// Nav bar code end