import React from 'react'
import IUser from '@/app/models/IUser'
interface IdExistProps {
  userData: IUser;
}
const IdExist: React.FC<IdExistProps> = ({ userData }) => {
  return (
    <div>IdExist
      <br />
      hello {userData.name}
    </div>
  )
}

export default IdExist

//https://ui.shadcn.com/docs/components/scroll-area
