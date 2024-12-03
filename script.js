let addressbtn = document.querySelector('#address-form')
let addressclose = document.querySelector('#address-close')

addressbtn.addEventListener("click", function(){
document.querySelector('.address-form').style.display = "flex"
})

addressclose.addEventListener("click", function(){
document.querySelector('.address-form').style.display = "none"
})

// ----------slider--------------
let rightbtn = document.querySelector('.fa-chevron-right')
let leftbtn = document.querySelector('.fa-chevron-left')
let index = 0
let imgNumber = document.querySelectorAll('.slider-content-left-top img')

rightbtn.addEventListener("click", function(){
index = index+1
if(index > imgNumber.length -1){
    index = 0
}
removeactive()
document.querySelector(".slider-content-left-top").style.right = index * 100 +"%"
imgNumberLi[index].classList.add("active")
})

leftbtn.addEventListener("click", function(){
index = index-1
if(index < 0){
    index = imgNumber.length-1
}
removeactive()
document.querySelector(".slider-content-left-top").style.right = index * 100 +"%"
imgNumberLi[index].classList.add("active")
})

//--------------slider1
let imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image,index){
image.addEventListener("click",function(){
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index * 100 +"%"
    image.classList.add("active")
})
})


function removeactive(){
    let imgactive = document.querySelector('.active') 
    imgactive.classList.remove("active")
}

//--------------slider2
function imgAuto(){
    index = index + 1
    if(index>imgNumber.length-1){
        index = 0
    }
    removeactive()
     document.querySelector(".slider-content-left-top").style.right = index * 100 +"%"
     imgNumberLi[index].classList.add("active")
}
setInterval(imgAuto, 5000)

//-------------------------slider-product--------------------------
let rightbtn2 = document.querySelector('.fa-chevron-right-two')
let leftbtn2 = document.querySelector('.fa-chevron-left-two')
let imgNumber2 = document.querySelectorAll('.slider-product-one-content-items')
rightbtn2.addEventListener("click", function(){
    index++
    if(index > imgNumber2.length -1){
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index*100 +"%"
    })
    
    leftbtn2.addEventListener("click", function(){
    index--
    if(index < 0){
        index = imgNumber2.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 +"%"
    })


    // ----------------------slidergallery5-----------
    let imgNumberLi1 = document.querySelectorAll('.secondUL li');
    imgNumberLi1.forEach(function(image, index) {
        image.addEventListener("click", function() {
            // Set the transform property to slide to the desired page
            document.querySelector(".product-gallery-five-content-items-content").style.transform = `translateX(-${index * 100}%)`;
        });
    });

    // ----------------------slidergallery6-----------
    let imgNumberLi2 = document.querySelectorAll('.thirdUL li');
    imgNumberLi2.forEach(function(image, index) {
        image.addEventListener("click", function() {
            // Set the transform property to slide to the desired page
            document.querySelector(".product-gallery-six-content-items-content").style.transform = `translateX(-${index * 100}%)`;
        });
    });




// ---------------addtocard
document.addEventListener("DOMContentLoaded", () => {
    // Lấy tất cả các phần tử "Add to Cart"
    const addToCartElements = document.querySelectorAll(".add-to-cart");
  
    // Gắn sự kiện click vào từng phần tử
    addToCartElements.forEach((element) => {
      element.addEventListener("click", () => {
        const productId = element.getAttribute("data-id");
        addToCart(productId); // Gọi hàm addToCart với ID sản phẩm
      });
    });
  });
  
  // Hàm thêm sản phẩm vào giỏ hàng
  function addToCart(productId) {
    const productElement = document.getElementById(productId);
  
    // Lấy thông tin sản phẩm từ giao diện
    const productDetails = {
      id: productId,
      name: productElement.querySelector("li:first-child").innerText,
      price: productElement.querySelector(".price").innerText,
      image: productElement.querySelector("img").src,
      quantity: 1, // Mặc định là 1 nếu sản phẩm chưa tồn tại
    };
  
    // Lấy dữ liệu giỏ hàng từ localStorage hoặc tạo mảng trống
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingProductIndex = cart.findIndex((item) => item.id === productId);
  
    if (existingProductIndex > -1) {
      // Sản phẩm đã tồn tại, tăng số lượng
      cart[existingProductIndex].quantity += 1;
    } else {
      // Sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
      cart.push(productDetails);
    }
  
    // Lưu giỏ hàng cập nhật vào localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    alert(`${productDetails.name} has been added to your cart!`);
  }
  

//   --------------------contact------------
  

  // Lắng nghe sự kiện submit trên form
  document.querySelector(".contact-form form").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn hành động gửi form mặc định (tránh reload trang)

    // Xóa toàn bộ nội dung trong các ô input và textarea
    this.reset();

    // Tạo thông báo thành công
    const successMessage = document.createElement("p");
    successMessage.textContent = "Send successfully!";
    successMessage.style.color = "green";
    successMessage.style.textAlign = "center";
    successMessage.style.marginTop = "20px";

    // Thêm thông báo vào sau form
    const formContainer = document.querySelector(".contact-form-container");
    formContainer.appendChild(successMessage);

    // Xóa thông báo sau 3 giây (tùy chọn)
    setTimeout(() => {
      successMessage.remove();
    }, 3000);
  });








