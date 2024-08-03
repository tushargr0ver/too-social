
import IdExist from '@/components/IdExist';
import getData from '../../../controllers/getData'
import IdNotExist from '@/components/IdNotExist';
import IUser from '@/app/models/IUser';

interface Params {
  id: string;
}


export default async function Page({ params } : {params : Params}) {
    const userData : IUser | null = await getData(params.id)
    
    
    return(
      <div className="h-full flex justify-center items-center">
        {userData ? <IdExist userData={userData} /> : <IdNotExist />}
      </div>
    )
  }