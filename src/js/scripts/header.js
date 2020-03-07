import { links } from './navigations';
import { topNav } from './navigations';

const header = document.getElementById('header');
const Logo = document.createElement('div');
const menuButton = document.createElement('div');
header.prepend(Logo);
Logo.classList.add('logo');

const LogoLink = document.createElement('a');
Logo.appendChild(LogoLink);

LogoLink.href = '/index.html';
LogoLink.innerHTML = '<img src="../../img/Logo.svg">';

header.appendChild(menuButton);
menuButton.classList.add('mobileMenuButton');
menuButton.innerHTML = '<div></div><div></div><div></div>';
// menuButton.addEventListener('click')

const ul = document.createElement('ul');
header.appendChild(ul);

export const linknavs = links.topNav.map(function(link) {
  return `<li class="${link.designation} ${link.name}"><a href="${link.url}">${link.name}</a></li>`;
});

ul.innerHTML = linknavs;
ul.innerHTML = linknavs.join('');
ul.classList.add('nav-items');
