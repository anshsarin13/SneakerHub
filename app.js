const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuitem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 149,
        colors: [
            {
                code: "black",
                img: "images/air.png",
            },
            {
                code: "darkblue",
                img: "images/air2.png",
            },
        ],
    },

    {
        id: 2,
        title: "Air Jordan",
        price: 199,
        colors: [
            {
                code: "lightgray",
                img: "images/jordan.png",
            },
            {
                code: "green",
                img: "images/jordan2.png",
            },
        ],
    },

    {
        id: 3,
        title: "Blazer",
        price: 139,
        colors: [
            {
                code: "lightgray",
                img: "images/blazer.png",
            },
            {
                code: "green",
                img: "images/blazer2.png",
            },
        ],
    },

    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "images/crater.png",
            },
            {
                code: "lightgray",
                img: "images/crater2.png",
            },
        ],
    },

    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "images/hippie.png",
            },
            {
                code: "black",
                img: "images/hippie2.png",
            },
        ],
    },
];

let choosenproduct = products[0];
const currentproductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".producttitle");
const currentproductPrice = document.querySelector(".productprice");
const currentproductColors = document.querySelectorAll(".color");
const currentproductSizes = document.querySelectorAll(".size");






menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        // changing current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // changing the chooosen product
        choosenproduct = products[index];

        //change text of current product
        currentproductTitle.textContent = choosenproduct.title;
        currentproductPrice.textContent = "$" + choosenproduct.price;
        currentproductImg.src = choosenproduct.colors[0].img;

        // assigning new colors
        currentproductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenproduct.colors[index].code;
        })
    })

});


currentproductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentproductImg.src = choosenproduct.colors[index].img;
    })
});

currentproductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentproductSizes.forEach(size => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
});


const productButton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});

var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope){

});


