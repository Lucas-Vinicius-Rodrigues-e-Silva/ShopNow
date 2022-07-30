const tagUl = document.querySelector("#mainUl")

const productsPrice = document.querySelectorAll(".price")

const productsValue = document.querySelector("#totalProductsValue")

function renderizeProducts (arr,section){
    
    section.innerHTML = ""

    productsValue.innerText = `R$ ${calculatePrice(arr)},00`

    for(let i = 0; i < arr.length; i++){

    let products = arr[i]

    let itemCreate = makeProducts(products)

    section.appendChild(itemCreate)

    }   

}

renderizeProducts(produtos,tagUl)

function makeProducts(products){

        let productImg               = products.img

        let productName              = products.nome

        let productCategory          = products.secao

        let productPrice             = products.preco
        
        let tagLiForItens            = document.createElement("li")

        let tagImgForPicture         = document.createElement("img")

        let tagH3ForName             = document.createElement("h3")

        let tagSpanForCategory       = document.createElement("span")

        let tagPForPrice             = document.createElement("p")

        tagImgForPicture.src         = productImg

        tagImgForPicture.alt         = productName

        tagH3ForName.innerText       = productName

        tagSpanForCategory.innerText = productCategory

        tagPForPrice.innerText       = `R$ ${productPrice},00` 
        
        tagLiForItens.appendChild(tagImgForPicture)

        tagLiForItens.appendChild(tagH3ForName)

        tagLiForItens.appendChild(tagSpanForCategory)

        tagLiForItens.appendChild(tagPForPrice)

        return tagLiForItens
}

const buttonAll = document.querySelector("#buttonAll")

buttonAll.addEventListener("click", allItens)

function allItens(){

    renderizeProducts(produtos,tagUl)

}

const buttonHortifruti = document.querySelector("#HortifrutiButton")

buttonHortifruti.addEventListener("click", showHortifrutiItens)

function showHortifrutiItens(){

    let Hortifruti = []

    for(let i = 0; i < produtos.length; i++){

        let products = produtos[i]

        if(buttonHortifruti.innerText == products.secao){

            Hortifruti.push(products)

        }

    }

    renderizeProducts(Hortifruti,tagUl)

}

const buttonBakery = document.querySelector("#buttonBakery")

buttonBakery.addEventListener("click",showBakeryItens)

function showBakeryItens(){

    let bakeryItens = []

    for(let i = 0; i < produtos.length; i++){

        let products = produtos[i]

        if(buttonBakery.innerText == products.secao){

            bakeryItens.push(products)

        }

    }

    renderizeProducts(bakeryItens,tagUl)

}

const buttonDairy = document.querySelector("#buttonDairy")

buttonDairy.addEventListener("click", showDairyItens)

function showDairyItens(){

    let dairyItens = []

    for(let i = 0; i < produtos.length; i++){

        let products = produtos[i]

        if(buttonDairy.innerText == products.secao){

            dairyItens.push(products)

        }

    }

    renderizeProducts(dairyItens,tagUl)
}

function calculatePrice(arr){

    let finalResult = 0

    let priceFilter = arr.filter((elem) => {

        finalResult += elem.preco
    })

    return finalResult
}

const searchButton = document.querySelector("#searchButton")

const searchArea = document.querySelector(".containerBuscaPorNome input")

searchButton.addEventListener("click", searchForItens)

function searchForItens(){

    let whatTheUserTyped = searchArea.value

    console.log(whatTheUserTyped)

}

console.log(searchForItens())
