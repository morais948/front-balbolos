import './index.scss'
import CategoryProduct from '../categoryProduct'
import MyContext from '../../contexts/myContext'
import { useContext } from 'react'

const Cardapio = () => {
    const  { categorys }: any = useContext(MyContext)

    return (    
        categorys.map((el: any) => {
            return (
                <CategoryProduct category={el.name} paginate={el.paginate} key={el.id} />
            )
        })
    )
}

export default Cardapio