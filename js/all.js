(function (factory) {
  typeof define === 'function' && define.amd ? define('main', factory) :
  factory();
}((function () { 'use strict';

  const links = {
    sidebarAbout: [{
      name: 'about us',
      url: '/about/about.html'
    }, {
      name: 'company profile',
      url: '/about/company-profile.html'
    }, {
      name: 'investor relations',
      url: '/about/investor-relations.html'
    }, {
      name: 'leadership team',
      url: '/about/leadership-team.html'
    }],
    sidebarFind: [{
      name: 'bonema find',
      url: '/products/bonema-find/index.html'
    }, {
      name: 'reports',
      url: '/products/bonema-find/reports.html'
    }, {
      name: 'dashboards',
      url: '/products/bonema-find/dashboards.html'
    }, {
      name: 'real time alerts',
      url: '/products/bonema-find/real-time-alerts.html'
    }, {
      name: 'setup & support',
      url: '/products/bonema-find/setup-and-support.html'
    }],
    sidebarFleet: [{
      name: 'bonema fleet',
      url: '/products/bonema-fleet/fleet.html'
    }, {
      name: 'reports',
      url: '/products/bonema-fleet/reports.html'
    }, {
      name: 'dashboards',
      url: '/products/bonema-fleet/dashboards.html'
    }, {
      name: 'real time alert',
      url: '/products/bonema-fleet/real-time-alert.html'
    }, {
      name: 'setup & support',
      url: '/products/bonema-fleet/setup-and-support.html'
    }, {
      name: 'maintenance',
      url: '/products/bonema-fleet/maintenance.html'
    }, {
      name: 'driver id',
      url: '/products/bonema-fleet/driver-id.html'
    }],
    sidebarIct: [{
      name: 'Systems & Platform',
      url: '/products/bonema-ict/systems-and-platforms.html'
    }, {
      name: 'Comms & Network',
      url: '/products/bonema-ict/comms-and-network.html'
    }, {
      name: 'ICT Security',
      url: '/products/bonema-ict/ict-security.html'
    }, {
      name: 'Cloud Services',
      url: '/products/bonema-ict/cloud-services.html'
    }, {
      name: 'Sage Solutions',
      url: '/products/bonema-ict/sage-solutions.html'
    }, {
      name: 'IT Outsourcing',
      url: '/products/bonema-ict/it-outsourcing.html'
    }, {
      name: 'Application Deployment',
      url: '/products/bonema-ict/application-deployment.html'
    }, {
      name: 'Professional Service',
      url: '/products/bonema-ict/professional-services.html'
    }],
    sidebarTrack: [{
      name: 'Bonema Track',
      url: '/products/bonema-track/index.html'
    }, {
      name: 'Reports',
      url: '/products/bonema-track/reports.html'
    }, {
      name: 'Driver ID',
      url: '/products/bonema-track/driver-id.html'
    }, {
      name: 'Dashboards',
      url: '/products/bonema-track/dashboards.html'
    }, {
      name: 'Fleet Maintenance',
      url: '/products/bonema-track/fleet-maintenance.html'
    }, {
      name: 'Real Time Alerts',
      url: '/products/bonema-track/real-time-alerts.html'
    }, {
      name: 'Setup & Support',
      url: '/products/bonema-track/setup-and-support.html'
    }]
  };
  const topNav = [{
    name: 'home',
    url: 'index.html',
    designation: 'list-item'
  }, {
    name: 'products',
    url: 'products.html',
    designation: 'list-item parent'
  }, {
    name: 'events',
    url: 'events.html',
    designation: 'list-item'
  }, {
    name: 'gallery',
    url: 'gallery.html',
    designation: 'list-item'
  }, {
    name: 'support',
    url: 'support.html',
    designation: 'list-item'
  }, {
    name: 'contact',
    url: 'contact.html',
    designation: 'list-item'
  }, {
    name: 'about us',
    url: 'about/about.html',
    designation: 'list-item parent'
  }];

  /*
  BONEMA 
  ----ABOUT----- 
  SPECIFIC PAGE LINKS FOR THE SIDEBAR
  */

  function aboutNav() {
    const sideNavFind = document.querySelector('.sidenav.about');
    let findul = document.createElement('ul');
    let findlist = document.createElement('li');
    const sideNavAboutLinks = links.sidebarAbout.map(function (link) {
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

  var _location = document.location.toString();

  var applicationNameIndex = _location.indexOf('/', _location.indexOf('://') + 3);

  var applicationName = _location.substring(0, applicationNameIndex) + '/';

  var webFolderIndex = _location.indexOf('/', _location.indexOf(applicationName) + applicationName.length);

  var webFolderFullPath = _location.substring(0, webFolderIndex); // var topNavAbout = [
  //   {
  //     name: 'home',
  //     url: '/',
  //     designation: 'list-item'
  //   },
  //   {
  //     name: 'products',
  //     url: '/products.html',
  //     designation: 'list-item parent'
  //   },
  //   {
  //     name: 'events',
  //     url: 'http://localhost:3000/events.html',
  //     designation: 'list-item'
  //   },
  //   {
  //     name: 'about us',
  //     url: 'http://localhost:3000/about/about.html',
  //     designation: 'list-item parent'
  //   },
  //   {
  //     name: 'gallery',
  //     url: 'http://localhost:3000/gallery.html',
  //     designation: 'list-item'
  //   },
  //   {
  //     name: 'support',
  //     url: 'http://localhost:3000/support.html',
  //     designation: 'list-item'
  //   },
  //   {
  //     name: 'contact',
  //     url: 'contact.html',
  //     designation: 'list-item'
  //   }
  // ];


  var topNav$1 = [{
    name: 'home',
    url: '/',
    designation: 'list-item'
  }, {
    name: 'products',
    url: '/products.html',
    designation: 'list-item parent'
  }, {
    name: 'events',
    url: '/events.html',
    designation: 'list-item'
  }, {
    name: 'gallery',
    url: '/gallery.html',
    designation: 'list-item'
  }, {
    name: 'about us',
    url: '/about/about.html',
    designation: 'list-item parent'
  }, {
    name: 'support',
    url: '/support.html',
    designation: 'list-item'
  }, {
    name: 'contact',
    url: '/contact.html',
    designation: 'list-item'
  }];
  function getNav() {
    const header = document.getElementById('header');
    const ul = document.createElement('ul');
    header.appendChild(ul); // if (location.pathname === '/about/about.html') {
    //   const linknavs = topNavAbout.map(function(link) {
    //     return `<li class="${link.designation} ${link.name}"><a href="${link.url}">${link.name}</a></li>`;
    //   });
    //   ul.innerHTML = linknavs;
    //   ul.innerHTML = linknavs.join('');
    //   ul.classList.add('nav-items');
    // } else {
    //   {
    //     const linknavs = topNav.map(function(link) {
    //       return `<li class="${link.designation} ${link.name}"><a href=${link.url}>${link.name}</a></li>`;
    //     });
    //     ul.innerHTML = linknavs;
    //     ul.innerHTML = linknavs.join('');
    //     ul.classList.add('nav-items');
    //   }
    // }

    const linknavs = topNav$1.map(function (link) {
      return `<li class="${link.designation} ${link.name}"><a href=${link.url}>${link.name}</a></li>`;
    });
    ul.innerHTML = linknavs;
    ul.innerHTML = linknavs.join('');
    ul.classList.add('nav-items');
    console.log(_location);
  }

  // 'use strict';
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
  menuButton.innerHTML = '<div></div><div></div><div></div>'; // menuButton.addEventListener('click')
  getNav();

})));

//# sourceMappingURL=all.js.map
