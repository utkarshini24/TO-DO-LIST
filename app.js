const addItem=document.querySelector('#addItem')
const itemsUl=document.querySelector('#items')

addItem.addEventListener('keypress',function(et){
    if(et.key==='Enter'){
     const newItemText=this.value
     const newItem=document.createElement('li')
     newItem.innerText=newItemText
     itemsUl.appendChild(newItem)
     this.value=""
    }
})