const prdouctDetails = [{
        title: 'Women Hot Collection',
        price: 29,
        img: "images/women-hot-collection.jpg"
    },
    {
        title: 'Awesome Pink Show',
        price: 29,
        img: "images/awesome-pink-show2.jfif"
    },
    {
        title: 'Awesome Bags Collection',
        price: 29,
        img: "images/awesome-bag-collection.jpg"
    },
    {
        title: 'Women Pant Collectons',
        price: 29,
        img: "images/women-pant-collection.png"
    },
    {
        title: 'Awesome Cap For Women',
        price: 29,
        img: "images/awesome-cap-for-women.jpg"
    },
    {
        title: 'Polo Dress For Women',
        price: 29,
        img: "images/polo-dress-for-women.webp"
    },
    {
        title: 'Black Sunglass For Women',
        price: 29,
        img: "images/black-sunglasses-for-women.png"
    },

]

const showLimitedProducts = (num) => {
    const productcontainer = document.createElement('div');
    productcontainer.setAttribute('id', 'productContainer');
    productcontainer.setAttribute('class', 'row');
    for (let index = 0; index < num; index++) {
        const col = document.createElement('div');
        col.setAttribute('class', 'col-lg-4 col-md-6 col-12');
        const productDiv = document.createElement('div');
        productDiv.setAttribute('class', 'single-product');
        const prdouctImg = document.createElement('div');
        prdouctImg.setAttribute('class', 'product-img');
        const anchor = document.createElement('a');
        anchor.setAttribute('href', 'product-details.html');
        const imgToBeDisplayed = document.createElement('img');
        const imgToBeHovered = document.createElement('img');
        imgToBeDisplayed.setAttribute('src', prdouctDetails[index].img)
        imgToBeDisplayed.setAttribute('class', 'default-img')
        imgToBeHovered.setAttribute('src', prdouctDetails[index].img)
        imgToBeHovered.setAttribute('class', 'hover-img')
        anchor.appendChild(imgToBeDisplayed);
        anchor.appendChild(imgToBeHovered);
        prdouctImg.appendChild(anchor);
        const btnHead = document.createElement('div');
        btnHead.setAttribute('class', 'button-head');
        const productAction = document.createElement('div');
        productAction.setAttribute('class', 'product-action');
        const a1 = document.createElement('a');

        function setAttributesForA(a1, attrs) {
            for (var key in attrs) {
                a1.setAttribute(key, attrs[key])
            }
        }
        setAttributesForA(a1, { 'data-toggle': "modal", 'data-target': "#exampleModal", 'title': "Quick View", 'href': "#" });
        const i1 = document.createElement('i');
        i1.setAttribute('class', 'ti-eye');
        const span1 = document.createElement('span');
        span1.innerText = 'Quick Shop';
        a1.appendChild(i1)
        a1.appendChild(span1)
        productAction.appendChild(a1)
        btnHead.appendChild(productAction);
        prdouctImg.appendChild(btnHead);
        const a2 = document.createElement('a');
        setAttributesForA(a2, { 'title': "Wishlist", 'href': "#" })
        const i2 = document.createElement('i');
        i2.setAttribute('class', 'ti-heart');
        const span2 = document.createElement('span');
        span2.innerText = 'Add to Wishlist'
        a2.appendChild(i2);
        a2.appendChild(span2)
        productAction.appendChild(a2);

        const a3 = document.createElement('a');
        setAttributesForA(a3, { 'title': "Compare", 'href': "#" })
        const i3 = document.createElement('i');
        i3.setAttribute('class', 'ti-bar-chart-alt');
        const span3 = document.createElement('span');
        span3.innerText = 'Add to Compare'
        a3.appendChild(i3);
        a3.appendChild(span3);
        productAction.appendChild(a3);


        const productAction2 = document.createElement('div');
        productAction2.setAttribute('class', 'product-action-2');
        const anchorForProductionAction2 = document.createElement('a');
        setAttributesForA(anchorForProductionAction2, { 'title': "Add to cart", 'href': "#" })
        anchorForProductionAction2.innerText = 'Add to cart';
        productAction2.appendChild(anchorForProductionAction2);
        btnHead.appendChild(productAction2);
        productDiv.appendChild(prdouctImg);

        const productContent = document.createElement('div');
        productContent.setAttribute('class', 'product-content');
        const h3 = document.createElement('h3');
        const anchorForContent = document.createElement('a');
        anchorForContent.setAttribute('href', 'product-details.html');
        anchorForContent.innerText = prdouctDetails[index].title;
        h3.appendChild(anchorForContent);
        productContent.appendChild(h3);
        const productPrice = document.createElement('div');
        productPrice.setAttribute('class', 'product-price');
        const productPriceSpan = document.createElement('span');
        productPriceSpan.innerText = `$${prdouctDetails[index].price}.00`;
        productPrice.appendChild(productPriceSpan);

        productContent.appendChild(productPrice);
        productDiv.appendChild(productContent);
        col.appendChild(productDiv)
        productcontainer.appendChild(col);
        container.appendChild(productcontainer);

    }
}

const container = document.getElementById('container');
showLimitedProducts(7)

function showProducts() {
    const showProducts = document.getElementById('showProducts').value;
    console.log(Number(showProducts));
    const remove = document.getElementById('productContainer');
    remove.remove();
    showLimitedProducts(Number(showProducts))
}