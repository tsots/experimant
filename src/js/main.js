// 'use strict';

// import persons from './plain';
import { topNav } from './scripts/navigations';
import { topNavAbout } from './scripts/navigations';
// import { links } from './scripts/navigations';

// const body = document.getElementsByTagName('body')[0];
// //const user = new User('Bob', 11);
// body.innerHTML = `<h2>${persons.fname} \n ${persons.lname} \n ${persons.age}</h2> <p>halala Mosala</p>`;

// document.write = 'halala';

/*const pluto = 'There is a huge turnaround truely in my life!!';
const innerDiv = document.createElement('div');
const bodyCo = document.getElementsByTagName('body')[0];
innerDiv.className = 'content__paragraph';
bodyCo.appendChild(innerDiv);
// innerDiv.appendChild(innerDiv);
innerDiv.innerHTML = pluto;*/

/*console.log(persons);*/
// console.log(links.topNav[0]);

console.log('Hello main');
console.log(topNav);

import { links } from '../js/scripts/navigations';
import { aboutNav } from '../js/scripts/aboutSidebar';

const header = document.getElementById('header');
const Logo = document.createElement('div');
const menuButton = document.createElement('div');
header.prepend(Logo);
Logo.classList.add('logo');

const LogoLink = document.createElement('a');
Logo.appendChild(LogoLink);

LogoLink.href = '/index.html';
LogoLink.innerHTML = '<img src="../img/Logo.svg">';

header.appendChild(menuButton);
menuButton.classList.add('mobileMenuButton');
menuButton.innerHTML = '<div></div><div></div><div></div>';
// menuButton.addEventListener('click')

/*
const ul = document.createElement('ul');
header.appendChild(ul);

export const linknavs = topNav.map(function(link) {
  return `<li class="${link.designation} ${link.name}"><a href="${link.url}">${link.name}</a></li>`;
});

ul.innerHTML = linknavs;
ul.innerHTML = linknavs.join('');
ul.classList.add('nav-items');

export const linknavsAbout = topNavAbout.map(function(link) {
  return `<li class="${link.designation} ${link.name}"><a href="../${link.url}">${link.name}</a></li>`;
});

if (location.pathname === '/about/about.html') {
  linknavsAbout();
  ul.innerHTML = linknavsAbout;
  ul.innerHTML = linknavsAbout.join('');
  ul.classList.add('nav-items');
}
*/

import { getNav } from '../js/scripts/navigation';
getNav();
