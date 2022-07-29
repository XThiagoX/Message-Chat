let deleteMessage = document.querySelector('.buttonMessageDelete')
let editMessage = document.querySelector('.buttonMessageEdit')
let sendMessage = document.querySelector('.send')
let messageBlock = document.querySelector('.massage-block')
let tagP = document.querySelector('.message')
let text = document.querySelector('#textarea')
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
    divMessage.setAttribute('class','massage')

    let divMessageButtons = document.createElement('div')
    divMessageButtons.setAttribute('class','message-buttons')

    let buttonMessageEdit = document.createElement('div')
    buttonMessageEdit.setAttribute('class','buttonMessageEdit')
    
    let buttonMessageDelete = document.createElement('div')
    buttonMessageDelete.setAttribute('class','buttonMessageDelete')

    // ATRIBUÇÃO PARA MONTAGEM DE DO BLOCO
    let paragraph = document.createElement('p')
    paragraph.innerHTML = text.value   
    tagP.append(paragraph)  
    divMessage.append(tagP)
    divMassageblock.append(divMessage)
    divMessageButtons.append(buttonMessageEdit)
    divMessageButtons.append(buttonMessageDelete)
    divMassageblock.append(divMessageButtons)

    messageBlock.removeAttribute('hidden')    
    // let paragraph = document.createElement('p')
    // paragraph.innerHTML = text.value   
    // tagP.append(paragraph) 
    console.log(paragraphs.textContent)
    // tagP.textContent = paragraph.value   
    text.value = ""
    messagesSends++
})
