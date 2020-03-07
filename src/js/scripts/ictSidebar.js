import { links } from './navigations';

/*
BONEMA 
----ICT----- 
SPECIFIC PAGE LINKS FOR THE SIDEBAR
*/

function ictNav() {
  const sideNavFind = document.querySelector('.sidenav.ict');
  let findul = document.createElement('ul');
  let findlist = document.createElement('li');
  const sideNavIctLinks = links.sidebarIct.map(function(link) {
    return `<li><a href="${link.url}">${link.name}</a></li>`;
  });
  findlist.innerHTML = sideNavIctLinks;
  findul.innerHTML = findlist;
  sideNavFind.appendChild(findul);
  findul.appendChild(findlist);
  findlist.innerHTML = sideNavIctLinks.join('');
  findul.innerHTML = sideNavIctLinks.join('');

  const sidebarFindButtons = document.createElement('div');
  sidebarFindButtons.innerHTML = `<button class="quotation">Get A Free Quote</button> <br>
  <button class="demonstration">Get A Free Demo</button>`;
  sideNavFind.appendChild(sidebarFindButtons);
  sidebarFindButtons.classList.add('btns');
}

if (location.pathname === '/products/bonema-ict/systems-and-platforms.html') {
  ictNav();
} else if (
  location.pathname === '/products/bonema-ict/comms-and-network.html'
) {
  ictNav();
} else if (location.pathname === '/products/bonema-ict/ict-security.html') {
  ictNav();
} else if (location.pathname === '/products/bonema-ict/cloud-services.html') {
  ictNav();
} else if (location.pathname === '/products/bonema-ict/sage-solutions.html') {
  ictNav();
} else if (location.pathname === '/products/bonema-ict/it-outsourcing.html') {
  ictNav();
} else if (
  location.pathname === '/products/bonema-ict/application-deployment.html'
) {
  ictNav();
} else if (
  location.pathname === '/products/bonema-ict/professional-services.html'
) {
  ictNav();
}
