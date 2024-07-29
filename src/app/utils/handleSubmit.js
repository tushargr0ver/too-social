import generateUniqueId from "generate-unique-id"
import { stringify } from "querystring"

function handleSubmit(){
    const id = generateUniqueId({
        length: 6,
        useNumbers: false
    })
    
    const nameInput = document.getElementById('name')
    const Button = document.getElementById('submitButton')
    Button.innerHTML = `<a href=''>${id}</a>`
    Button.disabled = true
    Button.value = `${id}`
    let linkToCopy = Button.value;
    navigator.clipboard.writeText(linkToCopy)
    .then(()=>alert("Link Copied to clipboard"))

    let index = 1
    const links = {}
    let element = document.getElementById(`link_${index}`);
    while(element){
        links[index]= element.value
        index++  
        element = document.getElementById(`link_${index}`);    
      
    }
    const userData = {
        uid: id,
        name: nameInput.value,
        links: links
    }
    
async()=>{
    const response = await fetch('/api/user-data',{
        method: 'POST',
        body: stringify.JSON({userData}),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    console.log(data);
}
    }






export default handleSubmit