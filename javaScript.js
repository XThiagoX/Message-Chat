// BOTÕES
let deleteMessage = document.querySelector('.buttonMessageDelete')
let editMessage = document.querySelector('.buttonMessageEdit')
let sendMessage = document.querySelector('.send')
// DIV'S DE CONTEÚDO
let messageBlock = document.querySelector('.massage-block')
let messageField = document.querySelector('.messages')
let tagP = document.querySelector('.message')

// ENTRADA
let text = document.querySelector('#textarea')
// VARIÁVEIS AUXILIARES
let messagesSends = 0

// buttonMessageEdit.setAttribute('onclick', EditMessage(this))
// buttonMessageDelete.setAttribute('onclick', DeleteMessage(this))
function DeleteMessage(){
    messageBlock.remove()
}
function EditMessage(){
    document.getElementsByTagName("textarea")[0].style.border = "solid 2px #F6A75D"
    text.value = tagP.textContent
    tagP.innerHTML = ""
}

editMessage.addEventListener('click', () => {        
    document.getElementsByTagName("textarea")[0].style.border = "solid 2px #F6A75D"
    text.value = tagP.textContent
    tagP.innerHTML = ""

})

deleteMessage.addEventListener('click', () => {         
    messageBlock.remove()
})

sendMessage.addEventListener('click', () => {  
    console.log("ok")
    if(text.value != ""){
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
        buttonMessageDelete.textContent = "Excluir"    

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

        buttonMessageEdit.setAttribute('onclick', EditMessage(this))
        buttonMessageDelete.setAttribute('onclick', DeleteMessage(this))
        
    }
    else{
        alert("Digite algo para poder enviar")
    }
})
