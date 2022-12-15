/* FRUIT */

(async () => {
  // ADDING FRUITS FROM JSON

  /*  const fruits = [
    {
      id: "1",
      image: "img/apple.png",
      title: "Apple",
      description: "text",
      price: "1.99 $",
    },
    {
      id: "2",
      image: "img/orange.png",
      title: "Orange",
      description: "text",
      price: "2.59 $",
    },
    {
      id: "3",
      image: "img/banana.png",
      title: "Banana",
      description: "text",
      price: "2.39 $",
    },
    {
      id: "4",
      image: "img/kiwi.png",
      title: "Kiwi",
      description: "text",
      price: "3.19 $",
    },
    {
      id: "5",
      image: "img/avocado.png",
      title: "Avocado",
      description: "text",
      price: "3.79 $",
    },
    {
      id: "6",
      image: "img/pineapple.png",
      title: "Pineapple",
      description: "text",
      price: "4.19 $",
    },
    {
      id: "7",
      image: "img/grape.png",
      title: "Grape",
      description: "text",
      price: "2.99 $",
    },
    {
      id: "8",
      image: "img/lemon.png",
      title: "Lemon",
      description: "text",
      price: "2.59 $",
    },
    {
      id: "9",
      image: "img/strawberry.png",
      title: "Strawberry",
      description: "text",
      price: "2.69 $",
    },
  ];
  */

  const response = await fetch("/api/fruits.json");
  const fruits = await response.json();

  function renderFruits(fruits) {
    const fruitsContainer = document.querySelector(".main-pricing__container");
    for (const fruit of fruits) {
      fruitsContainer.innerHTML += `
        <article class="main-pricing__banner container__item">
          <img class="main-pricing__banner-img" src="${fruit.image}" alt="${fruit.title}">
          <h3 class="main-pricing__banner-title container-item__title">${fruit.title}</h3>
          <p class="main-pricing__banner-text container-item__text">
            ${fruit.description}
          </p>
          <p class="main-pricing__banner-text container-item__price">
            Price: ${fruit.price}
          </p>
          <div id="wrapper">
            <button class="btn color hide-text" type="button" name="button">
              <span>Add to Basket</span>
            </button>
          </div>
        </article>
      `;
    }
  }

  renderFruits(fruits);
})();
