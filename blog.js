const blogData = [
  {
    year: "2025",
    articles: [
      { title: "Хочу Домой...", url: "./articleOne.html" },
      { title: "День Суслика", url: "./articleTwo.html" },
      { title: "Моя самая любимая кошка. Навсегда!", url: "./articleTree.html" }
    ]
  },
  {
    year: "2024",
    articles: [
      { title: "Переезд в Челябинск", url: "./articleFour.html" },
      { title: "Выпускной. ЕГЭ. Золотая медаль. Дача)", url: "./articleFive.html" },
      { title: "Последние школьные соревнования по волейболу", url: "./articleSix.html" }
    ]
  },
  {
    year: "2013",
    articles: [
      { title: "Первый раз в первый класс", url: "/articleSeven.html" }
    ]
  }
];

function createArticleItem(article) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = article.url;
  link.textContent = article.title;
  listItem.appendChild(link);
  return listItem;
}

function createYearSection(yearData) {
  const section = document.createElement('section');
  const heading = document.createElement('h2');
  heading.textContent = yearData.year;
  
  const articlesList = document.createElement('ul');
  articlesList.className = 'articles';
  
  yearData.articles.forEach(article => {
    articlesList.appendChild(createArticleItem(article));
  });
  
  section.appendChild(heading);
  section.appendChild(articlesList);
  return section;
}

function renderBlog() {
  const blogContainer = document.querySelector('.blogContainer');
  
  // Сортируем по году (от нового к старому)
  const sortedData = [...blogData].sort((a, b) => b.year - a.year);
  
  sortedData.forEach(yearData => {
    blogContainer.appendChild(createYearSection(yearData));
  });
}

// Запускаем после загрузки страницы
document.addEventListener('DOMContentLoaded', renderBlog);