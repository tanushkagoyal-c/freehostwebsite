const wrapper=document.querySelector(".sliderwrapper");
const menuitems=document.querySelectorAll(".menuitem");
const products = [
  {
    id: 1,
    title: "Showpeice",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/image13.png",
      },
      {
        code: "darkblue",
        img: "./img/image14.png",
      },
    ],
  },
  {
    id: 2,
    title: "Artifical plant",
    price: 149,
    colors: [
      {
        code: "pink",
        img: "./img/image15.png",
      },
      {
        code: "green",
        img: "./img/item2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Stickers",
    price: 109,
    colors: [
      {
        code: "yellow",
        img: "./img/image16.png",
      },
      {
        code: "golden",
        img: "./img/item3.png",
      },
    ],
  },
  {
    id: 4,
    title: "Wall clock",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/image17.png",
      },
      {
        code: "darkblue",
        img: "./img/item4.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hanging",
    price: 99,
    colors: [
      {
        code: "red",
        img: "./img/item5.png",
      },
      {
        code: "pink",
        img: "./img/image18.png",
      },
    ],
  },
];
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


    menuitems.forEach((item, index) => {
      item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
        //change the choosen product
        choosenProduct = products[index];
    
        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
    
        //assing new colors
        currentProductColors.forEach((color, index) => {
          color.style.backgroundColor = choosenProduct.colors[index].code;
        });
      });
    });
    
    currentProductColors.forEach((color, index) => {
      color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
      });
    });
    
    currentProductSizes.forEach((size, index) => {
      size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
          size.style.backgroundColor = "white";
          size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
      });
    });
    const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
    
    