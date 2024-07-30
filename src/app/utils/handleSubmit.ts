import generateUniqueId from "generate-unique-id"

function handleSubmit(): void{
    const id: string = generateUniqueId({
        length: 6,
        useNumbers: false
    })
    
    const nameInput: HTMLInputElement | null = document.getElementById('name') as HTMLInputElement;
    const Button: HTMLButtonElement | null = document.getElementById('submitButton') as HTMLButtonElement;

    if(Button){
    Button.innerHTML = `<a href=''>${id}</a>`
    Button.disabled = true
    Button.value = `${id}`
    let linkToCopy = Button.value;
    navigator.clipboard.writeText(linkToCopy)
    .then(()=>alert("Link Copied to clipboard"))
    }

    let index = 1
    const links: { [key: number]: string } = {};
    let element: HTMLInputElement | null = document.getElementById(`link_${index}`) as HTMLInputElement;
    while(element){
        links[index]= element.value
        index++  
        element = document.getElementById(`link_${index}`) as HTMLInputElement;    
      
    }
    const userData = {
        uid: id,
        name: nameInput.value,
        links: links
    }
    

    }






export default handleSubmit