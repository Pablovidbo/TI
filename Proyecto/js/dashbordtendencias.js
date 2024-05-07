
const products = [
    {
        "name": "Perfumeria Unidas",
        "url": "https://www.perfumeriasunidas.com/perfumes.html?product_list_order=bestsellers",
        "image": "img/tendencias/perfumeria unidas.jpg"
    },
    {
        "name": "Ripley",
        "url": "https://simple.ripley.com.pe/belleza/perfumes/duty-free?facet%5B0%5D=Marca%3ACALVIN%20KLEIN&facet%5B1%5D=Marca%3AHUGO%20BOSS&facet%5B2%5D=Marca%3AGUCCI&s=mdco&utm_source=google&utm_medium=pmax&utm_campaign=20240501_adv_google_pmax_purchase_subasta_tactica_blandos_belleza_coty_varios_ddlm_similar&utm_content=similar_pmax_dia-de-la-madre_null&gad_source=1&gclid=Cj0KCQjw_-GxBhC1ARIsADGgDjtO1OczY8Dz8ZPGulm1EEMpKBMTMoXUNHGCuB4RoGGv993CwO5aInQaAusZEALw_wcB&orderBy=review_desc&page=1",
        "image": "img/tendencias/ripley.png"
    },
    {
        "name": "Lucatmi",
        "url": "https://peru.lucatmi.com/fragancias",
        "image": "img/tendencias/lucatmi.jpg"
    },
    {
        "name": "Bath & Body Works",
        "url": "https://www.bathandbodyworks.pe/cuidado-corporal/fragancias/perfumes-y-colonias?PS=12&O=OrderByTopSaleDESC",
        "image": "img/tendencias/bbw.jpg"
    },
    {
        "name": "Oechsle",
        "url": "https://www.oechsle.pe/belleza-y-accesorios/perfumes/?search=&optionOrderBy=OrderByTopSaleDESC&page=1",
        "image": "img/tendencias/oeshle.jpg"
    },
    {
        "name": "Aruma",
        "url": "https://www.aruma.pe/lo-mas-vendido-en-fragancias",
        "image": "img/tendencias/aruma.jpeg"
    },
    {
        "name": "Falabella",
        "url": "https://www.falabella.com.pe/falabella-pe/category/cat40727/Perfumes?sortBy=product.averageOverallRating%2Cdesc",
        "image": "img/tendencias/saga.jpg"
    },                                                                                                                                                                                                  {
        "name": "PeruParfum",
        "url": "https://peruparfum.com/cat-producto/perfumes-hombre/?orderby=popularity&paged=1",
        "image": "img/tendencias/perufarm.jpg"
    },
    {
        "name": "Perfume's Club",
        "url": "https://www.perfumesclub.com/es/perfume/f/?sort=4",
        "image": "img/tendencias/perclub.jpg"
    },                                                                                                                                                                                    {
        "name": "La Casa del Perfume",
        "url": "https://lacasadelperfumeperu.com/categoria-producto/fragancias-aromas/?orderby=popularity&paged=1&shop_view=list",
        "image": "img/tendencias/casaperfuem.png"
    },                                                                                                                                                                                       {
        "name": "Victoria's Secret",
        "url": "https://www.victoriassecretbeauty.pe/fragancias/perfumes?PS=12&O=OrderByTopSaleDESC",
        "image": "img/tendencias/victoria.jpg"
    },
    {
        "name": "esika",
        "url": "https://esika.tiendabelcorp.com.pe/perfumes/c?order=",
        "image": "img/tendencias/esika.jpg"
    }
];



document.addEventListener("DOMContentLoaded", function() {
    const column1 = document.getElementById("column1");
    const column2 = document.getElementById("column2");
    const column3 = document.getElementById("column3");

    // Obtener solo los primeros 6 productos
    const firstSixProducts = products.slice(0, 6);

    // Almacenar los productos restantes
    const remainingProducts = products.slice(6);

    // Función para mostrar los productos restantes
    function showRemainingProducts() {
        remainingProducts.forEach((product, index) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p><a href="${product.url}">Ir a la página</a></p>
            `;

            // Agregar los productos restantes en columnas en función del índice
            if (index % 3 === 0) {
                column1.appendChild(productDiv);
            } else if (index % 3 === 1) {
                column2.appendChild(productDiv);
            } else {
                column3.appendChild(productDiv);
            }
        });

        // Ocultar el botón después de mostrar todos los productos
        document.getElementById("vermas").style.display = "none";
    }

    // Mostrar los primeros 6 productos al cargar la página
    firstSixProducts.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p><a href="${product.url}">Ir a la página</a></p>
        `;

        if (index % 3 === 0) {
            column1.appendChild(productDiv);
        } else if (index % 3 === 1) {
            column2.appendChild(productDiv);
        } else {
            column3.appendChild(productDiv);
        }
    });

    // Agregar un evento de clic al botón para mostrar los productos restantes
    document.getElementById("vermas").addEventListener("click", showRemainingProducts);
});

