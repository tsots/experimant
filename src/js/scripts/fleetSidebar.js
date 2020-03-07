import { links } from './navigations';

/*
BONEMA 
----FLEET----- 
SPECIFIC PAGE LINKS FOR THE SIDEBAR
*/

function fleetNav() {
  const sideNavFind = document.querySelector('.sidenav.fleet');
  let findul = document.createElement('ul');
  let findlist = document.createElement('li');
  const sideNavFleetLinks = links.sidebarFleet.map(function(link) {
    return `<li><a href="${link.url}">${link.name}</a></li>`;
  });
  findlist.innerHTML = sideNavFleetLinks;
  findul.innerHTML = findlist;
  sideNavFind.appendChild(findul);
  findul.appendChild(findlist);
  findlist.innerHTML = sideNavFleetLinks.join('');
  findul.innerHTML = sideNavFleetLinks.join('');

  const sidebarFindButtons = document.createElement('div');
  sidebarFindButtons.innerHTML = `<button class="quotation">Get A Free Quote</button> <br>
  <button class="demonstration">Get A Free Demo</button>`;
  sideNavFind.appendChild(sidebarFindButtons);
  sidebarFindButtons.classList.add('btns');
}

if (location.pathname === '/products/bonema-fleet/fleet.html') {
  fleetNav();
} else if (location.pathname === '/products/bonema-fleet/reports.html') {
  fleetNav();
} else if (location.pathname === '/products/bonema-fleet/dashboards.html') {
  fleetNav();
} else if (
  location.pathname === '/products/bonema-fleet/real-time-alert.html'
) {
  fleetNav();
} else if (
  location.pathname === '/products/bonema-fleet/setup-and-support.html'
) {
  fleetNav();
} else if (location.pathname === '/products/bonema-fleet/maintenance.html') {
  fleetNav();
} else if (location.pathname === '/products/bonema-fleet/driver-id.html') {
  fleetNav();
}
