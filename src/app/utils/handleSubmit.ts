import generateUniqueId from "generate-unique-id"
import axios from 'axios'

function handleSubmit(): void{
    const uid: string = generateUniqueId({
        length: 6,
        useNumbers: false
    })
    
    const nameInput: HTMLInputElement | null = document.getElementById('name') as HTMLInputElement;
    const Button: HTMLButtonElement | null = document.getElementById('submitButton') as HTMLButtonElement;

    if(Button){
    Button.innerHTML = `<a href=''>${uid}</a>`
    Button.disabled = true
    Button.value = `${uid}`
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
    const name = nameInput.value
    const userData = {
        uid,
        name,
        links
    }
    axios.post('/api/users', userData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    }






export default handleSubmit