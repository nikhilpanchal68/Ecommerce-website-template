// select all category button by class name
let categoryBtn = document.querySelectorAll(".categoryBtn");

let items = $(".items");
//category buttons
let allBtn = $("#allBtn")
let smartPhonesbtn = $("#smartPhonesbtn")
let laptopsBtn = $("#laptopsBtn")
let fragrancesBtn = $("#fragrancesBtn")
let skinCaresBtn = $("#skinCaresBtn")
let groceriesBtn = $("#groceriesBtn")
let homeDecorBtn = $("#homeDecorBtn")

//sort options
let sortBySelect = $("#sortBySelect")

//delete below declarations in the end if will not use it 
let defaultOption = $("#defaultOption")
let PLHOption = $("#PLHOption")
let PHLOption = $("#PHLOption")
let ratingOption = $("#ratingOption")
let discountOption = $("#discountOption");


//ajax call to fetch data
$.ajax({
    url: "https://dummyjson.com/products", success: function ajaxData(result) {
        let data = result.products;
        console.log(data);

        //bydefault displaying all data
        displayData(data);

        //all button onclicke event and display all data
        allBtn.click(function () {
            console.log(data);
            displayData(data);
        })

        //smartphone button onclick event and generating array
        smartPhonesbtn.click(function() {
            let smartPhonesArry = [];
            //below function generates new smartPhonesArry
            for(i=0;i<data.length;i++) {
                if(data[i].category == "smartphones") {
                    smartPhonesArry.push(data[i]);
                }
            }
            console.log(smartPhonesArry)
            displayData(smartPhonesArry)
        })

        //laptop button onclick event and generating array
        laptopsBtn.click(function() {
            let laptopsArry = [];
            //below function generates new laptopsArry
            for(i=0;i<data.length;i++) {
                if(data[i].category == "laptops") {
                    laptopsArry.push(data[i]);
                }
            }
            console.log(laptopsArry)
            displayData(laptopsArry)
        })

        //fragnances button onclick event and generating array
        fragrancesBtn.click(function() {
            let fragnancesArry = [];
            //below function generates new fragnancesArry
            for(i=0;i<data.length;i++) {
                if(data[i].category == "fragrances") {
                    fragnancesArry.push(data[i]);
                }
            }
            console.log(fragnancesArry)
            displayData(fragnancesArry)
        })

        //skinCares button onclick event and generating array
        skinCaresBtn.click(function() {
            let skinCaresArry = [];
            //below function generates new skinCaresArry
            for(i=0;i<data.length;i++) {
                if(data[i].category == "skincare") {
                    skinCaresArry.push(data[i]);
                }
            }
            console.log(skinCaresArry)
            displayData(skinCaresArry)
        })

        //groceries button onclick event and generating array
        groceriesBtn.click(function() {
            let groceriesArry = [];
            //below function generates new groceriesArry
            for(i=0;i<data.length;i++) {
                if(data[i].category == "groceries") {
                    groceriesArry.push(data[i]);
                }
            }
            console.log(groceriesArry)
            displayData(groceriesArry)
        })

        //homeDecor button onclick event and generating array
        homeDecorBtn.click(function() {
            let homeDecorArry = [];
            //below function generates new homeDecorArry
            for(i=0;i<data.length;i++) {
                if(data[i].category == "home-decoration") {
                    homeDecorArry.push(data[i]);
                }
            }
            console.log(homeDecorArry)
            displayData(homeDecorArry)
        })

        //select dropdown
        sortBySelect.change(function () {
            getelementfromdropdown()  
        });
        function getelementfromdropdown() {
            var value =sortBySelect.val();
            
            if (value == "default") {
                defaultFunc()
            } 
            else if (value == "l2h") {
                priceLow2High()
            } 
            else if (value == "h2l") {
                priceHigh2Low()
            } 
            else if (value == "rating") {
                rating();
            }
            else if (value == "discount") {
                discount();
            }
        }

        function defaultFunc() {
            displayData(data);
        }
        function priceLow2High(){
            let datal2h = Array.from(data);
            datal2h.sort(function(a, b) {
                return (a.price) - (b.price);
            });
            displayData(datal2h);
        }
        function priceHigh2Low(){
            let datah2l = Array.from(data);
            datah2l.sort(function(a, b) {
                return (b.price) - (a.price);
            });
            displayData(datah2l);
        }
        function rating(){
            let dataRating = Array.from(data);
            dataRating.sort(function(a, b) {
                return (b.rating) - (a.rating);
            });
            displayData(dataRating);
        }
        function discount(){
            let dataDiscount = Array.from(data);
            dataDiscount.sort(function(a, b) {
                return (b.discountPercentage) - (a.discountPercentage);
            });
            console.log(dataDiscount);
            displayData(dataDiscount);
        }
    }
});


//function to display data
function displayData(data) {
    items.html("")
    for (i = 0; i < data.length; i++) {
        var div = $(`
        <div class="item">
            <div class="itemImage">
                <img
                src="${data[i].images[0]}">
                <span class="discountPercentage">${data[i].discountPercentage} % OFF</span>
            </div>
            <div class="itemInfo">
                <p><span class="title">${data[i].title}</span></p>
                <p class="descriptionP">Description:<span class="description">${data[i].description}</span></p>
                <p><span class="price">${data[i].price} $</span></p>
                <p>
                    <span class="rating">${data[i].rating}</span>
                    <i class="fa-solid fa-star gold"></i>
                </p>
                <p class="stockP">Stock:<span class="stock">${data[i].stock}</span></p>
                <p class="brandP">Brand:<span class="brand">${data[i].brand}</span></p>
                <p class="categoryP">Category:<span class="category">${data[i].category}</span></p>
            </div>
            <div class="addToCartDiv">
                <button type="button" class="ATCBtn">Add To Cart</button>
            </div>
        </div>
        // `);
        items.append(div);
    }
}

//add class on category button selection
categoryBtn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        resetActiveBtn();
        btn.classList.add("active-btn")
    })
});

//remove class on category buttons when clicking another button
function resetActiveBtn(){
    categoryBtn.forEach(btn => {
            btn.classList.remove("active-btn")
    });
}















