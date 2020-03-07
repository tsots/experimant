import { links } from './navigations';

/*
BONEMA 
----TRACK----- 
SPECIFIC PAGE LINKS FOR THE SIDEBAR
*/

function trackNav() {
  const sideNavTrack = document.querySelector('.sidenav.track');
  let findul = document.createElement('ul');
  let findlist = document.createElement('li');
  const sideNavtrackLinks = links.sidebarTrack.map(function(link) {
    return `<li><a href="${link.url}">${link.name}</a></li>`;
  });
  findlist.innerHTML = sideNavtrackLinks;
  findul.innerHTML = findlist;
  sideNavTrack.appendChild(findul);
  findul.appendChild(findlist);
  findlist.innerHTML = sideNavtrackLinks.join('');
  findul.innerHTML = sideNavtrackLinks.join('');

  const sidebarFindButtons = document.createElement('div');
  sidebarFindButtons.innerHTML = `<button class="quotation">Get A Free Quote</button> <br>
  <button class="demonstration">Get A Free Demo</button>`;
  sideNavTrack.appendChild(sidebarFindButtons);
  sidebarFindButtons.classList.add('btns');
}

if (location.pathname === '/products/bonema-track/index.html') {
  trackNav();
} else if (location.pathname === '/products/bonema-track/reports.html') {
  trackNav();
} else if (location.pathname === '/products/bonema-track/driver-id.html') {
  trackNav();
} else if (location.pathname === '/products/bonema-track/dashboards.html') {
  trackNav();
} else if (
  location.pathname === '/products/bonema-track/fleet-maintenance.html'
) {
  trackNav();
} else if (
  location.pathname === '/products/bonema-track/real-time-alerts.html'
) {
  trackNav();
} else if (
  location.pathname === '/products/bonema-track/setup-and-support.html'
) {
  trackNav();
}
