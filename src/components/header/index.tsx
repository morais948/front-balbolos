import './index.scss';
import {
    Link
} from "react-router-dom"
import { useContext } from 'react';
import MyContext from '../../contexts/myContext'

const Header = () => {
    const { listCart }: any = useContext(MyContext)
    
    return (
        <header className="header d-flex justify-content-around align-items-center">
            <h1 className="title">
                <span className="bal">Bal</span>
                <span className="bolos">Bolos</span>
            </h1>
    

            <div className="d-flex justify-content-between align-items-center">
                <i className="fa-brands fa-whatsapp icon mx-3"></i>
                <i className="fab fa-instagram icon mx-3"></i>
                <div id="carrinho" 
                    className="animate__animated" data-bs-toggle="tooltip" 
                    data-bs-placement="bottom" title="ITEM ADICIONADO" data-bs-trigger="manual"
                >
                    <Link to="/carrinho">
                        <i className="fas fa-shopping-cart icon mx-3">
                            <span className="count">{listCart.length}</span>
                        </i>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header