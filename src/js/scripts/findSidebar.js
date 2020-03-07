import { links } from './navigations';

/*
BONEMA FIND SPECIFIC PAGE LINKS FOR THE SIDEBAR
*/

function productsNav() {
  const sideNavFind = document.querySelector('.sidenav.find');
  let findul = document.createElement('ul');
  let findlist = document.createElement('li');
  const sideNavFindLinks = links.sidebarFind.map(function(link) {
    return `<li><a href="${link.url}">${link.name}</a></li>`;
  });
  findlist.innerHTML = sideNavFindLinks;
  findul.innerHTML = findlist;
  sideNavFind.appendChild(findul);
  findul.appendChild(findlist);
  findlist.innerHTML = sideNavFindLinks.join('');
  findul.innerHTML = sideNavFindLinks.join('');

  const sidebarFindButtons = document.createElement('div');
  sidebarFindButtons.innerHTML = `<button class="quotation">Get A Free Quote</button> <br>
  <button class="demonstration">Get A Free Demo</button>`;
  sideNavFind.appendChild(sidebarFindButtons);
  sidebarFindButtons.classList.add('btns');

  console.log(findul);
}

if (location.pathname === '/products/bonema-find/real-time-alerts.html') {
  productsNav();
} else if (
  location.pathname === '/products/bonema-find/setup-and-support.html'
) {
  productsNav();
} else if (location.pathname === '/products/bonema-find/dashboards.html') {
  productsNav();
} else if (location.pathname === '/products/bonema-find/reports.html') {
  productsNav();
} else if (location.pathname === '/products/bonema-find/index.html') {
  productsNav();
} else {
}
