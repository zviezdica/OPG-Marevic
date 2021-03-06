//toggle u nav-u
const toggleBtn=document.querySelector(".toggle");
const links=document.querySelector(".links");

toggleBtn.addEventListener("click", function(){
    links.style.height=120;
    if (!links.classList.contains("show-links")){
        links.classList.add("show-links");
    }
    else{
        links.classList.remove("show-links");
    };
})

//donji border na nav-u i strelica za početnu stranicu
const nav=document.getElementById("nav");
window.addEventListener("scroll", function(){
    const scrollHeight=window.pageYOffset;
    const navHeight=nav.getBoundingClientRect().height;
    const topLink=this.document.querySelector(".top-link");
    if (scrollHeight>navHeight){
        nav.classList.add("nav-bottom-border");
    }
    else{
        nav.classList.remove("nav-bottom-border");
    };
});

//POJEDINI PROIZVODI
const productItems=[
    {
        id:1,
        category: "vinogradarstvo",
        title: "Crno vino 1",
        price: 60,
        img: "./slike/proizvodi/vinogradarstvo/redwine1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:2,
        category: "vinogradarstvo",
        title: "Crno vino 2",
        price: 70,
        img: "./slike/proizvodi/vinogradarstvo/redwine2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:3,
        category: "vinogradarstvo",
        title: "Bijelo vino 1",
        price: 60,
        img: "./slike/proizvodi/vinogradarstvo/white1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:4,
        category: "vinogradarstvo",
        title: "Bijelo vino 2",
        price: 70,
        img: "./slike/proizvodi/vinogradarstvo/white2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:5,
        category: "vinogradarstvo",
        title: "Rose 1",
        price: 70,
        img: "./slike/proizvodi/vinogradarstvo/rose1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:6,
        category: "vinogradarstvo",
        title: "Rose 2",
        price: 80,
        img: "./slike/proizvodi/vinogradarstvo/rose2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:7,
        category: "pcelarstvo",
        title: "Med",
        price: 60,
        img: "./slike/proizvodi/pcelarstvo/med.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:8,
        category: "pcelarstvo",
        title: "Propolis",
        price: 30,
        img: "./slike/proizvodi/pcelarstvo/propolis.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:9,
        category: "pcelarstvo",
        title: "Imunobomba",
        price: 50,
        img: "./slike/proizvodi/pcelarstvo/imunobomba.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:10,
        category: "pcelarstvo",
        title: "Lizalice s medom i đumbirom",
        price: 10,
        img: "./slike/proizvodi/pcelarstvo/lizalice.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:11,
        category: "pcelarstvo",
        title: "Sapun kozje mlijeko i med",
        price: 20,
        img: "./slike/proizvodi/pcelarstvo/sapunkozjemlijekomed.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:12,
        category: "smokvarstvo",
        title: "Smokva 1",
        price: 70,
        img: "./slike/proizvodi/smokvarstvo/smokvaplava.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:13,
        category: "smokvarstvo",
        title: "Smokva 2",
        price: 70,
        img: "./slike/proizvodi/smokvarstvo/smokvazelena.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:14,
        category: "smokvarstvo",
        title: "Smokvenjak",
        price: 30,
        img: "./slike/proizvodi/smokvarstvo/smokvenjaci.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:15,
        category: "smokvarstvo",
        title: "Suha smokva",
        price: 100,
        img: "./slike/proizvodi/smokvarstvo/suhesmokve.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:16,
        category: "smokvarstvo",
        title: "Smokva u čokoladi",
        price: 15,
        img: "./slike/proizvodi/smokvarstvo/smokvečokolada.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:17,
        category: "peradarstvo",
        title: "Koka",
        price: 50,
        img: "./slike/proizvodi/peradarstvo/koka.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:18,
        category: "peradarstvo",
        title: "Pivac",
        price: 90,
        img: "./slike/proizvodi/peradarstvo/pivac.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
    {
        id:19,
        category: "peradarstvo",
        title: "Jaja",
        price: 2,
        img: "./slike/proizvodi/peradarstvo/jaja.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellendus nam itaque vel et laudantium corporis perferendis",
    },
];
//funkcija za prikaz proizvoda na stranici
const showedItems=document.querySelector(".showed-items");
function showProducts(someItems){
    let displayProductItems=someItems.map(function(item){
        return `<article class="shop-item">
            <img src=${item.img} alt="shop item" class="photo" width="180px" height="180px">
            <div class="item-info">
                <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price} kn</h4>
                </header>
                <p class="item-text">${item.desc}</p>
                <div class="shop-products-btn-container">
                <button class="chart-btn shop-products-btn" data-id="${item.id}">Dodaj u košaricu</button>
                </div>
            </div>
        </article>`
        ;
    });
    displayProductItems=displayProductItems.join();
    displayProductItems=displayProductItems.replace(/,/g,"");
    showedItems.innerHTML=displayProductItems;
};

/////funkcija za prikaz buttona po kategorijama proizvoda/////
const shopProductsBtns = document.querySelector(".shop-products-btns");
function displayBtns(){
    const btnCategories=productItems.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },
    ["svi proizvodi"]
    )
    let categoryBtns=btnCategories.map(function(category){
        return `<button class="filter-btn shop-products-btn" id="${category}" data-id="${category}">${category}</button>`
    });
    categoryBtns=categoryBtns.join();
    categoryBtns=categoryBtns.replace(/,/g,"");
    shopProductsBtns.innerHTML=categoryBtns;
    //dio funkcije za filtriranje proizvoda
    let filterBtns=document.querySelectorAll(".filter-btn");
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category=e.currentTarget.dataset.id;
            const productCategory = productItems.filter(function(shopItem){
                if(shopItem.category===category){
                    return shopItem;
                }     
            });
            if(category==="svi proizvodi"){
                showProducts(productItems);
             }
             else{
                showProducts(productCategory);
             }
        }) 
    })
};
window.addEventListener("DOMContentLoaded", function(){
    showProducts(productItems);
    displayBtns();
});



/////funkcija za prikaz proizvoda u košarici/////
showAllProductsInBasket();

function showAllProductsInBasket(){
//event na inicijalnoj stranici trgovine
window.addEventListener("DOMContentLoaded", function(){
showInBasket();

})
//event kako bi funkcija radila i klikom na neki button za promjenu vrste proizvoda
shopProductsBtns.addEventListener("click", function(){
showInBasket();

})
const itemsInBasket=document.querySelector(".items-in-basket");
//funkcija za prikaz proizvoda
 function showInBasket(){
let basketBtnsArr = Array.prototype.slice.call(document.getElementsByClassName('chart-btn'));
basketBtnsArr.forEach(function(btn){
    btn.addEventListener("click", function(e){
        
        const id=e.currentTarget.dataset.id;
        
        productItems.forEach(function(item){
            if(item.id==id){
                const element = document.createElement("article");
                element.classList.add("item-in-basket");
                element.innerHTML=`
                <img src="${item.img}" alt="${item.title}" width="80px" height="80px">
                <h5 class="name-item-in-basket">${item.title}</h5>
                <h5 class="price-item">${item.price} kn</h5>
                <input type="number" class="input-amount" value="1" min="1">
                <h5 class="sum-item">${item.price} kn</h5>
                <button class="trash-item">
                <i class="fas fa-trash"></i>
                </button>`
                itemsInBasket.appendChild(element);
            }  
            getTotal();
        })
      
        let inputs = document.querySelectorAll(".input-amount");
        inputs.forEach(function(input){
            input.addEventListener("change", getItemsPrice);
            input.addEventListener("keyup", getItemsPrice);
                //funkcija za prikaz ukupne cijene za pojedini proizvod
                function getItemsPrice(){
                let price = parseInt(input.previousElementSibling.innerHTML);
                let sumPrice = input.nextElementSibling;
                sumPrice.innerHTML = input.value * price +" kn";  
                getTotal();
            }
             
        })
        
        const trashBtns = document.querySelectorAll(".trash-item");
        trashBtns.forEach(function(trashBtn){
            trashBtn.addEventListener("click", removeItem)
        })
 })






});
 }
}



//funkcija za izračun total cijene
function getTotal(){
    const total = document.querySelector(".total");
    const sumItems = document.querySelectorAll(".sum-item");
    let count =0;
    sumItems.forEach(function(sumItem){
    count+=parseInt(sumItem.innerHTML);
})
total.innerHTML= `<p>UKUPNO:</p><p>${count} kn</p>`;
}

//funkcija za brisanje pojedinog proizvoda
function removeItem(e){

let itemToRemove = e.currentTarget.parentElement;
itemToRemove.remove();
getTotal();

}
