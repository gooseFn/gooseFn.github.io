const projectsData = [
  {
    text: "Проект за 11 класс(видеоигры)",
    link: "https://docs.google.com/document/d/1bKC0qQwrN1Qjyr9jYVad8Av6uBDy-Mam/edit?usp=drive_link&ouid=112346358810067199995&rtpof=true&sd=true",
    blockId: "one"
  },
  {
    text: "Мой первый сайт",
    link: "https://github.com/gooseFn/myProject",
    blockId: "two"
  }
];

function createProjectBlock(project) {
  let listItem = document.createElement('li');
  
  let link = document.createElement('a');
  link.href = project.link;
  link.target = '_blank';
  link.className = 'blockLink';
  
  const blockDiv = document.createElement('div');
  blockDiv.className = 'block';
  blockDiv.id = project.blockId;
  
  const textParagraph = document.createElement('p');
  textParagraph.className = 'textInBlock';
  textParagraph.textContent = project.text;
  
  blockDiv.appendChild(textParagraph);
  link.appendChild(blockDiv);
  listItem.appendChild(link);
  
  return listItem;
}

function renderProjects() {
  const blocksContainer = document.querySelector('.blocks');
  projectsData.forEach(project => {
    blocksContainer.appendChild(createProjectBlock(project));
  });
}

document.addEventListener('DOMContentLoaded', renderProjects);