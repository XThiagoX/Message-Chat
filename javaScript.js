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
    

    messageBlock.removeAttribute('hidden')    
    let paragraph = document.createElement('p')
    paragraph.innerHTML = text.value   
    tagP.append(paragraph) 
    console.log(paragraphs.textContent)
    // tagP.textContent = paragraph.value   
    text.value = ""
    messagesSends++
})
