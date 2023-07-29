const collection = document.querySelector(".collection-item-icons");
const collection_item = document.querySelector(".collection-item-sort");
collection.addEventListener("click",()=>{
    collection_item.classList.toggle("active");
})
//filter

const filter_click = document.querySelector(".collection-item-filter");
const filter = document.querySelector(".filter");
const filter_content = document.querySelector(".filter-content");
const filter_close = document.querySelector(".filter-close");

filter_click.addEventListener('click',()=>{
    if(filter.classList.contains("active") && filter_content.classList.contains("active")){
        filter.classList.remove("active");
        filter_content.classList.remove("active");
    }
    else{
        filter.classList.add("active");
        filter_content.classList.add("active");
    }
});
filter_close.addEventListener('click',()=>{
    filter.classList.remove("active");
    filter_content.classList.remove("active");
});

//product json

let products = null;
fetch('js/product.json')
.then(response=> response.json())
.then(data => {
    products = data;
    addDatatoHTML();
})
function addDatatoHTML(){
    let listproductHTML = document.querySelector('.list-product-item');
    listproductHTML.innerHTML = '';
    if(products != null){
        products.forEach(product => {
            let newproduct = document.createElement('div');
            newproduct.classList.add('section-product-content_img');
            newproduct.innerHTML =
            `   <div class="section-product-image position-relative">
            <div class="section-item-doi">
                <a href="#!">
                    <img src="${product.image1}" alt="" class="w-100"></a>
            </div>
            <div class="section-item-doi hover">
                <a href="#!"><img src="${product.image2}" alt="" class="w-100"></a>
            </div>
            
            
            <div class="list-product-show position-absolute ">
                <span class="active">XS</span>
                <span>S</span>
                <span>M</span>
                <span>XL</span>
                <span>XXL</span>
                <br>
                <div class="button mt-3 fs-3 ">
                    <a href="#!" onclick = "addCart(${product.id})" class="text-dark text-uppercase fw-bold">Add to bag</a>
                </div>
            </div>
        </div>
        <div
            class="section-product-image-icons d-flex align-items-center justify-content-between w-100 p-5">
            <div class="product-image-icons-heart">
                <i class="ri-heart-line fs-2"></i>
            </div>
            <div class="product-image-icons-tablist">
                <span class=" fs-5 bg-white p-2 text-uppercase">On sale</span>
            </div>
        </div>
        <div class="section-show_list-title mt-3">
            <h3>
                <a href="" class="text-dark fs-2">${product.name}</a>
            </h3>
            <h2>
                <a href="" class="fs-3 text-secondary">${product.name1}</a>
            </h2>
            <a href="" class="text-secondary mt-3 fs-4">${product.price}</a>
        </div>`
        listproductHTML.appendChild(newproduct);
            
        });
    }
    

}
// }
let listCart = {}; // khởi tạo giỏ hàng rỗng
let productss = []; // khởi tạo danh sách sản phẩm trống

// hàm thêm sản phẩm vào giỏ hàng
function addCart(idProduct) {
  let productCopy = JSON.parse(JSON.stringify(products));
  let dataProduct = productCopy.find(product => product.id == idProduct);
  if (dataProduct) {
    if (listCart[idProduct]) {
      listCart[idProduct].quantity++;
    } else {
      listCart[idProduct] = {
        ...dataProduct,
        quantity: 1
      };
    }
    let timesave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
    document.cookie = "listCart=" + JSON.stringify(listCart) + ";" + timesave + ";path=/;";
    addCarttoHTML();
  }
}

// hàm hiển thị giỏ hàng trên giao diện
function addCarttoHTML() {
  let listCartHtml = document.querySelector('.cart-list');
  listCartHtml.innerHTML = '';
  let totalhtml = document.querySelector('.totalQuantity');
  let totalquantity = 0;

  for (let key in listCart) {
    let product = listCart[key];
    if (product) {
      let newCart = document.createElement('div');
      newCart.classList.add('cart-list-item');
      newCart.innerHTML =
        `
        <img src="${product.image1}" alt="" >
        <div class="content">
          <p class="fw-bold">${product.name}</p>
          <p class="text-dark">${product.name1}</p>
          <p >${product.price}</p>
          <div class="quantity">
            <button onclick="changeQuantity(${product.id},'-')">-</button>
            <span class="value">${product.quantity}</span>
            <button onclick="changeQuantity(${product.id},'+')">+</button>
          </div>
        </div>
        <div class="remove">
          <p onclick = "removeProduct(${product.id})">remove</p>
        </div>
        `
      listCartHtml.appendChild(newCart);
      totalquantity += product.quantity;
    }
  }

  totalhtml.innerHTML = "(" + totalquantity + ")";
}

// hàm thay đổi số lượng sản phẩm trong giỏ hàng
function changeQuantity(idProduct, type) {
  if (listCart[idProduct]) {
    switch (type) {
      case '+':
        listCart[idProduct].quantity++;
        break;
      case '-':
        listCart[idProduct].quantity--;
        if (listCart[idProduct].quantity <= 0) {
          delete listCart[idProduct];
        }
        break;
      default:
        break;
    }
    let timesave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
    document.cookie = "listCart=" + JSON.stringify(listCart) + ";" + timesave + ";path=/;";
    addCarttoHTML();
  }
}
function removeProduct(idProduct) {
    if (listCart[idProduct]) {
      delete listCart[idProduct];
      let timesave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
      document.cookie = "listCart=" + JSON.stringify(listCart) + ";" + timesave + ";path=/;";
      addCarttoHTML();
    }
  }