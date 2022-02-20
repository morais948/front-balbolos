import { useState, useEffect } from 'react'
import axios from 'axios'
import LayoutHome from './templates/LayoutHome'
import LayoutDashbord from './templates/LayoutDashbord'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import MyContext from './contexts/myContext'

import NotFound from './components/notFound'
import Cardapio from './components/cardapio'
import FormContact from './components/formContact'
import Information from './components/information'
import Cart from './components/cart'

import DasboardHome from './components/dasboardHome'

import product from './types/product'
import category from './types/category'


function app() {
    const [ categorys, setCategorys ] = useState<category[]>([])
    const [ listCart, setListCart ] = useState<product[]>([])

    useEffect(() => {
        axios.get('../categorys.json').then(items => {
            setCategorys((categorys) => categorys = items.data.categorys)
        }).catch(error => {
            console.log('deu erro', error)
        })
    }, [])

    return (
        <MyContext.Provider value={{ categorys, listCart, setListCart }} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutHome />} >
                        <Route index element={<Cardapio />} />
                        <Route path="contato" element={<FormContact />} />
                        <Route path="informacoes" element={<Information />} />
                        <Route path="carrinho" element={<Cart />} />
                    </Route>
                    <Route path="adm" element={<LayoutDashbord />} >
                        <Route index element={<DasboardHome />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
    )
}

export default app
