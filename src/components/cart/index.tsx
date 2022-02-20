import './index.scss';
import { useContext } from 'react';
import MyContext from '../../contexts/myContext'
import product from '../../types/product'
import CartRepository from '../../repository/cart'
import { formatMoney } from '../../utils/utils'

const Cart = () => {
    const { listCart, setListCart }: any = useContext(MyContext)
    const cartRepository = new CartRepository(listCart, setListCart)

    const sumTotal = () => {
        let total = 0
        listCart.map((el: product) => {
            total += el.price * el.qtd
        })
        return total
    }

    const addItem = (prod: product, id: string) => {
        document.getElementById(id)?.classList.add('item-selected-anim')
        setTimeout(() => {
            document.getElementById(id)?.classList.remove('item-selected-anim')
            cartRepository.add(prod)
        }, 200)
    }

    const removeItem = (prod: product, id: string) => {
        document.getElementById(id)?.classList.add('item-selected-anim')
        setTimeout(() => {
            document.getElementById(id)?.classList.remove('item-selected-anim')
            cartRepository.remove(prod)
        }, 200)
    }

    const removeAllItems = () => {
        const resp = confirm("Tem certeza que quer limpar o carrinho?")
        if(resp){
            cartRepository.removeAll()
        }
    }

    const sendRequestToWhatsapp = (): string => {
        if(listCart.length == 0) {
            return ''
        }
        let text = ''
        listCart.map((prod: product, i: number) => {
            text += `${i+1}. ${prod.desc} - R$${formatMoney(prod.price)}%0a`
        })
        const request = `*======PEDIDO======*%0a${text}%0a*Total: R$${formatMoney(sumTotal())}*`
        return request
    }

    const showItemsCart = () => {
        return (
            listCart.map((el: product, i: number) => {
                return (
                    <div id={`${el.desc}-${el.id}`} className="card my-2 mx-2" style={{ width: '18rem', height: '18rem' }} key={i}>
                        <img 
                            style={{ maxHeight: '180px' }}
                            src={el.src} data-bs-toggle="tooltip" 
                            data-bs-placement="bottom" title="toque para expandir" 
                            className="img-fluid animate__animated animate__bounceInDown" alt="bolo"
                        />
                        <div className="card-body d-flex flex-column justify-content-end align-items-center animate__animated animate__bounceInDown">                    
                            <p className="card-text">
                                <span className="price">
                                    preço: <span>R${formatMoney(el.price)}</span>
                                </span>
                            </p>
                            <p className="card-text">
                                <span className="qtd">
                                    Quantidade: <span>{el.qtd}</span>
                                </span>
                            </p>
                            <div className="d-flex justify-content-center">
                                <i onClick={() => removeItem(el, `${el.desc}-${el.id}`)} className="fas fa-minus-circle mx-2"></i>
                                <i onClick={() => addItem(el, `${el.desc}-${el.id}`)} className="fas fa-plus-circle mx-2"></i>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className="cart-item">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <h1 className="title-cart">Carrinho de Compras</h1>
                <button onClick={removeAllItems} type="button" className="btn btn-remove-all mb-2">
                    Limpar <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
            <hr />
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                { listCart.length > 0 &&
                    showItemsCart()
                }
                { listCart.length == 0 && <h3 className="mt-2">Vazio.</h3> }
            </div>
            <div className="total d-flex justify-content-around align-items-center flex-wrap">
                <span className="fs-2 animate__animated animate__lightSpeedInLeft">
                    <span className="total-label">Total: </span> 
                    <span className="value-label">{formatMoney(sumTotal())}</span>
                </span>

                <a 
                    href={`https://api.whatsapp.com/send?phone=5584997031531&text=${sendRequestToWhatsapp()}`} 
                    className="btn btn-finish"
                    target="_blank"
                >
                    Finalizar pedido por whatsapp <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </div>
    )
}

export default Cart