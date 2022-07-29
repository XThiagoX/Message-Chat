let deleteMessage = document.querySelector('.buttonMessageDelete')
let editMessage = document.querySelector('.buttonMessageEdit')
let sendMessage = document.querySelector('.send')
let messageBlock = document.querySelector('.massage-block')
let tagP = document.querySelector('.message')
let text = document.querySelector('#textarea')

let messageField = document.querySelector('.messages')

let messagesSends = 0

let body = document.querySelector('body')

editMessage.addEventListener('click', () => {        
    document.getElementsByTagName("textarea")[0].style.border = "solid 2px #F6A75D"
    text.value = tagP.textContent
    tagP.innerHTML = ""

})

deleteMessage.addEventListener('click', () => {         
    messageBlock.remove()
})

sendMessage.addEventListener('click', () => {  
    // CRIAÇÃO DO BLOCO QUE DEFINE A MENSAGEM
    let divMassageblock = document.createElement('div')
    divMassageblock.setAttribute('class','massage-block')

    let divMessage = document.createElement('div')
    divMessage.setAttribute('class','message')

    let divMessageButtons = document.createElement('div')
    divMessageButtons.setAttribute('class','message-buttons')

    let buttonMessageEdit = document.createElement('button')
    buttonMessageEdit.setAttribute('class','buttonMessageEdit')
    buttonMessageEdit.textContent = "Editar"
    
    let buttonMessageDelete = document.createElement('button')
    buttonMessageDelete.setAttribute('class','buttonMessageDelete')
    buttonMessageDelete.textContent = "Editar"

    // ATRIBUÇÃO PARA MONTAGEM DE DO BLOCO
    let paragraph = document.createElement('p')
    let tagP = document.querySelector('.message')
    paragraph.innerHTML = text.value   
    //tagP.append(paragraph)  
    divMessage.append(paragraph)
    divMassageblock.append(divMessage)
    divMessageButtons.append(buttonMessageEdit)
    divMessageButtons.append(buttonMessageDelete)
    divMassageblock.append(divMessageButtons)
    messageField.append(divMassageblock)

    //messageBlock.removeAttribute('hidden')    
    // let paragraph = document.createElement('p')
    // paragraph.innerHTML = text.value   
    // tagP.append(paragraph) 
    console.log(paragraph.textContent)
    // tagP.textContent = paragraph.value   
    text.value = ""
    messagesSends++
})
