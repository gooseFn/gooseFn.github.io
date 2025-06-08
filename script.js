const menuLinks = [
  { text: 'Блог', link: './blog.html' },
  { text: 'Проекты', link: './projects.html' },
  { text: 'Хобби', link: './hobby.html' },
  { text: 'Резюме', link: './resume.html' }
];

const contactsLinks = [
  { link: 'https://vk.com/goose_fn', iconClass: 'bi bi-chat-fill' },
  { link: 'https://t.me/goose_FN', iconClass: 'bi bi-telegram' },
  { link: 'https://github.com/gooseFn', iconClass: 'bi bi-github' }
];

function getElement(linkData, isContacts = false) {
  let listItem = document.createElement('li');
  let link = document.createElement('a');
  
  link.href = linkData.link;
  
  if (isContacts) {
    link.target = '_blank';
    let icon = document.createElement('i');
    icon.className = linkData.iconClass;
    link.appendChild(icon);
  } else {
    link.textContent = linkData.text;
  }
  
  listItem.appendChild(link);
  return listItem;
}

function renderLinks(containerId, linksType) {
  const navContainer = document.getElementById(containerId);
  if (!navContainer) return;

  const isContacts = linksType === 'contacts';
  let links = isContacts ? contactsLinks : menuLinks;

  links.forEach(link => {
    navContainer.appendChild(getElement(link, isContacts));
  });
}

renderLinks('footer', 'contacts');
renderLinks('header', 'menu');