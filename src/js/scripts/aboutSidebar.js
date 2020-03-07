import { links } from './navigations';

/*
BONEMA 
----ABOUT----- 
SPECIFIC PAGE LINKS FOR THE SIDEBAR
*/

export function aboutNav() {
  const sideNavFind = document.querySelector('.sidenav.about');
  let findul = document.createElement('ul');
  let findlist = document.createElement('li');
  const sideNavAboutLinks = links.sidebarAbout.map(function(link) {
    return `<li><a href="${link.url}">${link.name}</a></li>`;
  });
  findlist.innerHTML = sideNavAboutLinks;
  findul.innerHTML = findlist;
  sideNavFind.appendChild(findul);
  findul.appendChild(findlist);
  findlist.innerHTML = sideNavAboutLinks.join('');
  findul.innerHTML = sideNavAboutLinks.join('');

  const sidebarFindButtons = document.createElement('div');
  sidebarFindButtons.innerHTML = `<button class="quotation">Get A Free Quote</button> <br>
  <button class="demonstration">Get A Free Demo</button>`;
  sideNavFind.appendChild(sidebarFindButtons);
  sidebarFindButtons.classList.add('btns');
}

if (location.pathname === '/about/about.html') {
  aboutNav();
} else if (location.pathname === '/about/company-profile.html') {
  aboutNav();
} else if (location.pathname === '/about/investor-relations.html') {
  aboutNav();
} else if (location.pathname === '/about/leadership-team.html') {
  aboutNav();
}
