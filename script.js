const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const itensContainer = document.getElementById("cart-itens")
const itensTotal = document.getElementById("cart-total")
const checkTotal = document.getElementById("checkout-btn")
const closeModal = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addresInput = document.getElementById("addres")
const addresWarn = document.getElementById("addres-warn")


$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".wrapper").toggleClass("collapse");
    });
});


//abrir o carrinho
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
})

//fechar o carrinho
cartModal.addEventListener("click", function(event){
    if(event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

closeModal.addEventListener("click", function(){
    cartModal.style.display = "none"
})
//pronto

// adiconar ao carrinho

/*menu.addEventListener("click" , function(event){
    Swal.fire("Adicionado ao carrinho!")
    let parentButton = event.target.closest(".add-to-btn")

    if(parentButton) {
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        addToCart(name, price)

    }
})

   /* //console.log(event.target)
   menu.addEventListener("click" , function(event) {
    let parentButton = event.target.closest(".add-to-btn")

    if(parentButton) {
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        addToCart(name, price)

    }
    })
    */

//função para adicionar ao carrinho! 
function addToCart(name, price) {
    alert("o iten é " + name)
}




