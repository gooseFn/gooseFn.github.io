const articlesData = {
    "articleOne.html": {
        title: "Хочу домой...",
        content: "Я если честно, уже очень устал от учёбы и хочу вернуться в родной город, к друзьям и родителям ведь никто не должен забывать кто он, кто его друзья и откуда он родом!",
        images: [
            { src: "./images/Фотка1.jpg", alt: "Фотка", width: 400, height: 400 }
        ]
    },

    "articleTwo.html": {
        title: "День Суслика🦦",
        content: "Немного фоточек со дня суслика",
        images: [
            { src: "./images/Суслик1.jpg", alt: "Суслик1", width: 400, height: 500 },
            { src: "./images/Суслик2.jpg", alt: "Суслик2", width: 400, height: 500 }
        ],
        multiImage: true
    },

    "articleTree.html": {
        title: "Моя самая любимая кошка. Навсегда!",
        content: `27 апреля не стало моего любимого домашнего животного, я бы даже сказал члена семьи - моей кошки Лисы. Совсем
            чуть чуть не успел, чтобы увидеть её спустя год разлуки, надеюсь она попала в лучший кошачий рай, если это
            можно так назвать. Прощай Лиса...(Лучшая кошка навсегда!)`,
        images: [
            { src: "./images/Кошка.jpg", alt: "Кошка", width: 500, height: 500 }
        ]
    },

    "articleFour.html": {
        title: "Переезд в Челябинск",
        content: `Ну всё Усть-Илимск пока. Спасибо всем кого знал в этом городе)`,
        images: [
            { src: "./images/Олежа.jpg", alt: "Олежа", width: 450, height: 600 }
        ]
    },

    "articleFive.html": {
        title: "Выпускной. ЕГЭ. Золотая медаль. Дача)",
        content: `Это было тяжело, но цель оправдала все средства!`,
        images: [
            { src: "./images/Медаль.jpg", alt: "Медаль", width: 400, height: 500 }
        ]
    },

    "articleSix.html": {
        title: "Последние школьные соревнования по волейболу",
        content: `Команда, спасибо вам за 3 место на городских соревнованиях среди школ. Да мы ошибались, но мы всё равно
            молодцы!!!`,
        images: [
            { src: "./images/Команда1.jpg", alt: "Команда1", width: 500, height: 400 },
            { src: "./images/Команда2.jpg", alt: "Команда2", width: 500, height: 400 }
        ],
        multiImage: true
    },

    "articleSeven.html": {
        title: "Первый раз в первый класс",
        content: `01.09.2013 Первое сентября,слева одноклассница.`,
        images: [
            { src: "./images/Фотка4.jpg", alt: "Фотка4", width: 400, height: 450 }
        ]
    },
};

function renderArticle() {
    const mainElement = document.querySelector('main');

    const currentPage = window.location.pathname.split('/').pop();
    const article = articlesData[currentPage];

    const title = document.createElement('h2');
    title.textContent = article.title;

    const content = document.createElement('p');
    content.textContent = article.content;

    mainElement.appendChild(title);
    mainElement.appendChild(content);

    if (article.multiImage) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'articlePhoto';

        article.images.forEach(img => {
            const image = createImage(img);
            imageContainer.appendChild(image);
        });

        mainElement.appendChild(imageContainer);
    } else {
        article.images.forEach(img => {
            const image = createImage(img);
            mainElement.appendChild(image);
        });
    }
}

function createImage(imgData) {
    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.alt;
    img.width = imgData.width;
    img.height = imgData.height;
    return img;
}

document.addEventListener('DOMContentLoaded', renderArticle);