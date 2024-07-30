//Check id in db and fetch data
interface Params {
  id: string;
}


export default function Page({ params } : {params : Params}) {
    return <div>User id {params.id}</div>
  }