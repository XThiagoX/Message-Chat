// BOTÕES
let deleteMessage = document.querySelector('.buttonMessageDelete')
let editMessage = document.querySelector('.buttonMessageEdit')
let sendMessage = document.querySelector('.send')

// DIV'S DE CONTEÚDO CRIADAS DINAMICAMENTE
let messageBlock = document.querySelector('.massage-block')
let messageField = document.querySelector('.messages')
let divMassageblock = document.createElement('div')
//let divMessage = document.createElement('div')
let tagP = document.querySelector('.message')

// ENTRADA
let text = document.querySelector('#textarea')

// VARIÁVEIS AUXILIARES
let paragraphEdited = document.createElement('p')
let messageBeingEdited = false
let buttonPressed = false
let messagesSends = 0

// FUNÇÕES
function DeleteMessage(divMassageblock){    
    divMassageblock.remove()
}

function EditMessage(paragraph, buttonMessageEdit, divMessage){       
    if(buttonPressed == true){                 
        document.getElementsByTagName("textarea")[0].style.border = "solid 0.5px #000"            
        buttonMessageEdit.textContent = "Editar"                    
        paragraph.innerText =  text.value 
        console.log(paragraph) 
        divMessage.append(paragraph)          
        text.value = " " 
        messageBeingEdited = false                                   
    }

    if(buttonPressed == false){
        document.getElementsByTagName("textarea")[0].style.border = "solid 2px #F6A75D"            
        text.value = paragraph.textContent
        paragraph.innerHTML = " "
        buttonMessageEdit.textContent = "Enviar"
        buttonPressed = true        
        messageBeingEdited = true        
    }            
}

sendMessage.addEventListener('click', () => {     
    if(text.value != ""){
        if(messageBeingEdited == false){
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
            paragraph.innerHTML = text.value   
            paragraphEdited = paragraph                        

            divMessage.append(paragraph)
            divMassageblock.append(divMessage)
            divMessageButtons.append(buttonMessageEdit)
            divMessageButtons.append(buttonMessageDelete)
            divMassageblock.append(divMessageButtons)
            messageField.append(divMassageblock)    
                               
            text.value = ""
            messagesSends++
            // ATRIBUIÇÃO DE FUNÇÕES PARA OS BOTÕES DE MENSAGEM
            buttonMessageEdit.addEventListener('click', ()=> { 
                EditMessage(paragraph,buttonMessageEdit,divMessage) 
            })

            buttonMessageDelete.addEventListener('click', ()=> { 
                DeleteMessage(divMassageblock) 
            })
        }
        else{
            alert("Para enviar a mensagem que deseja editar aperte o mesmo botão que agora foi renomeado para Enviar")
        }     
    }
    else{
            alert("Digite algo para poder enviar")
        }    
})
