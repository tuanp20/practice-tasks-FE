import client from '../../apollo-client'
import {gql,useQuery} from '@apollo/client'

  interface Product{
    _id: string;
    name: string;
    price: string;
    categoryId: string;
  }

  interface ProductsData {
    products: Product[]
  }

  const PRODUCTS_QUERY = gql`
  query Products {
    getAllProduct {
      _id
      name
      price
      categoryId
    }
  }
`
export default function Home() {
  
  const { data, loading, error } = useQuery<ProductsData>(PRODUCTS_QUERY)

  console.log(111, data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    Hello world! Ok
    </main>
  )
}
