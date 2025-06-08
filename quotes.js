const quotesData = [
  {
    text: "Порой нам нужно принять решение, от которого будет зависеть наша судьба… И не только наша. Но иногда мы понимаем: чтобы сделать человека счастливым, правильнее будет его отпустить, как бы тяжело это ни было… Да, так будет лучше… Наверное.",
    author: "Максим Лавров («Огузок»)",
    link: "https://kitchen.fandom.com/ru/wiki/Макс"
  },
  {
    text: "Зачастую, только чувствуя приближение конца, мы можем что-то изменить.",
    author: "Максим Лавров («Огузок»)",
    link: "https://kitchen.fandom.com/ru/wiki/Макс"
  },
  {
    text: "Ну я сразу почувствовал, что между нами что-то есть. Ну какое-то притяжение, связь.. блютус! Ну или харизма какая-то.",
    author: "Николай Наумов («Колян»)",
    link: "https://ru.wikipedia.org/wiki/Наумов,_Николай_Александрович_(актёр)"
  },
  {
    text: "Лучше синица в руках, чем журавль в небе… а журавль, сука, красивый!",
    author: "Николай Наумов («Колян»)",
    link: "https://ru.wikipedia.org/wiki/Наумов,_Николай_Александрович_(актёр)"
  },
  {
    text: "Все мы хотим казаться сильными, хотя на самом деле состоим из слабостей.",
    author: "Максим Лавров («Огузок»)",
    link: "https://kitchen.fandom.com/ru/wiki/Макс"
  },
  {
    text: "Лишь утратив всё до конца, мы обретаем свободу.",
    author: "Тайлер Дерден",
    link: "https://villains.fandom.com/wiki/Tyler_Durden"
  }
];

function createQuoteElements(quote) {
  const elements = [];
  
  const textElement = document.createElement('p');
  textElement.textContent = quote.text;
  elements.push(textElement);
  
  const authorLink = document.createElement('a');
  authorLink.className = 'quote';
  authorLink.href = quote.link;
  authorLink.target = '_blank';
  authorLink.textContent = quote.author;
  elements.push(authorLink);
  
  return elements;
}

function renderQuotes() {
  const quotesContainer = document.querySelector('.quotes');
  
  quotesData.forEach(quote => {
    createQuoteElements(quote).forEach(el => {
      quotesContainer.appendChild(el);
    });
  });
}

document.addEventListener('DOMContentLoaded', renderQuotes);