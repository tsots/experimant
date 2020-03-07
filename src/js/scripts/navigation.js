const topNavAbout = [
  {
    name: 'home',
    url: '../index.html',
    designation: 'list-item'
  },
  {
    name: 'products',
    url: 'products.html',
    designation: 'list-item parent'
  },
  {
    name: 'events',
    url: 'events.html',
    designation: 'list-item'
  },
  {
    name: 'about us',
    url: '../about/about.html',
    designation: 'list-item parent'
  },
  {
    name: 'gallery',
    url: 'gallery.html',
    designation: 'list-item'
  },
  {
    name: 'support',
    url: 'support.html',
    designation: 'list-item'
  },
  {
    name: 'contact',
    url: 'contact.html',
    designation: 'list-item'
  }
];

const topNav = [
  {
    name: 'home',
    url: 'index.html',
    designation: 'list-item'
  },
  {
    name: 'products',
    url: 'products.html',
    designation: 'list-item parent'
  },
  {
    name: 'events',
    url: 'events.html',
    designation: 'list-item'
  },
  {
    name: 'gallery',
    url: 'gallery.html',
    designation: 'list-item'
  },
  {
    name: 'about us',
    url: 'about/about.html',
    designation: 'list-item parent'
  },
  {
    name: 'support',
    url: 'support.html',
    designation: 'list-item'
  },
  {
    name: 'contact',
    url: 'contact.html',
    designation: 'list-item'
  }
];

export function getNav() {
  const header = document.getElementById('header');
  const ul = document.createElement('ul');
  header.appendChild(ul);
  if (location.pathname === '/about/about.html') {
    const linknavs = topNavAbout.map(function(link) {
      return `<li class="${link.designation} ${link.name}"><a href="${link.url}">${link.name}</a></li>`;
    });

    ul.innerHTML = linknavs;
    ul.innerHTML = linknavs.join('');
    ul.classList.add('nav-items');
  } else {
    {
      const linknavs = topNav.map(function(link) {
        return `<li class="${link.designation} ${link.name}"><a href="${link.url}">${link.name}</a></li>`;
      });

      ul.innerHTML = linknavs;
      ul.innerHTML = linknavs.join('');
      ul.classList.add('nav-items');
    }
  }
}
