import React from 'react'
import IUser from '@/app/models/IUser'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


interface IdExistProps {
  userData: IUser;
}
const IdExist: React.FC<IdExistProps> = ({ userData }) => {
  const links = Object.values(userData.links);
  return (
    <div>
      
    <h1>Checkout {userData.name} links</h1>
      <Carousel>
  <CarouselContent>
    {
     links.map((item, index)=>(
      <CarouselItem key={index}><a href={links[index]}>{links[index]}</a></CarouselItem>
     )) 
    }
  
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  )
}

export default IdExist

