import generateUniqueId from "generate-unique-id"

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
    let element = document.getElementById(`link_${index}`);
    while(!element){
        console.log(element.value);
        index++
        const element = document.getElementById(`link_${index}`);
    }
        
        
    
        

    }

    //Insert to DB





export default handleSubmit