import { useRef } from "react"
import {
    Link
} from "react-router-dom"
import './index.scss'

const Menu = () => {

    const label: any = useRef(null)
    const menu: any = useRef(null)

    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked){
            setTimeout(() => {
                menu.current.classList.remove('d-none')
            }, 300)
        }else{
            menu.current.classList.add('d-none')
        }
    }

    const handleClick = () => {
        if(label.current) label.current.click()
    }

    return (
        <>
            <input id="menu-hamburguer" type="checkbox" className="d-none" onChange={handleCheckbox} />

            <label ref={label} htmlFor="menu-hamburguer">
                <div className="menu">
                    <span className="hamburguer"></span>
                </div> 
            </label> 

            <ul ref={menu} className="content-menu d-none">
                <li><Link onClick={handleClick} className="nav-link" to="/">Cardápio</Link></li>
                <li><Link onClick={handleClick} className="nav-link" to="carrinho">Carrinho</Link></li>
                <li><Link onClick={handleClick} className="nav-link" to="informacoes">Informações</Link> </li>
                <li><Link onClick={handleClick} className="nav-link" to="contato">Contato</Link></li>
            </ul>
        </>      
    )
}

export default Menu