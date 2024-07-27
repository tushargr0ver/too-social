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


  
function Dashboard() {
  
  const [inputs, setInputs] = useState([]);
  const [linkNumber, setLinkNumber] = useState(1)

  const handleClick = () => {
    setInputs([...inputs, <Input placeholder={`Link ${linkNumber}`} key={inputs.length} />]);
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
      <Input placeholder='Name'/>
      <div>
      {inputs.map((input, index) => (
          <div key={index}>{input}</div>
        ))}
      </div>
      <button onClick={handleClick}>+</button>
    </div>
  </CardContent>
  <CardFooter>
    <p>
      <Button variant="outline">Create your unique link</Button>
    </p>
  </CardFooter>
</Card>

    </div>
  )
}

export default Dashboard