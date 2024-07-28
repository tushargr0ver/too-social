"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Input } from "@/components/ui/input"

  import { Button } from "@/components/ui/button"
  import { useState } from 'react'

  import handleSubmit from '@/app/utils/handleSubmit'


  
function Dashboard() {

  const [inputs, setInputs] = useState([<Input type="text" id="link_1" placeholder="Link 1" key={0} />]);
  const [linkNumber, setLinkNumber] = useState(2)

  const handleClick = () => {
    setInputs([...inputs, <Input type="text" id={`link_${linkNumber}`} placeholder={`Link ${linkNumber}`} key={inputs.length} />]);
    setLinkNumber(linkNumber+1)
    
  };
  return (
    <div>
      <Card>
  <CardHeader>
    <CardTitle>Too Social</CardTitle>
    <CardDescription>Combine all your links & Share only one.</CardDescription>
  </CardHeader>
  <CardContent>
    <div>
      <Input id="name" type="text" placeholder='Name'/>
      <div>
      {inputs.map((input, index) => (
          <div key={index}>{input}</div>
        ))}
      </div>
      <Button onClick={handleClick}>+</Button>
    </div>
  </CardContent>
  <CardFooter>
    <p>
      <Button onClick={handleSubmit} id="submitButton" variant="outline">Create your unique link</Button>
    </p>
  </CardFooter>
</Card>

    </div>
  )
}

export default Dashboard