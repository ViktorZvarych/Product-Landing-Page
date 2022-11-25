
/* FRUIT */
(() => {

    const fruits = [
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
    ];

    function renderFruits(fruits) {
        const fruitsContainer = document.querySelector(".main-pricing__container");
        for (const fruit of fruits) {
            fruitsContainer.innerHTML += `
            <section class="main-pricing__banner container__item">
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
                        <span>Add to Cart</span>
                    </button>
                </div>
            </section>
            `;
        }
    }

    renderFruits(fruits);

})