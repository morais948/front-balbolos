import './index.scss';
import { useContext, useRef, useState } from 'react';
import MyContext from '../../contexts/myContext'
import page from '../../types/page'
import { formatMoney } from '../../utils/utils'
import CartRepository from '../../repository/cart'
import product from '../../types/product'

const Carousel = ({ categoryName, paginate }: any) => {
    const [ products ] = useState<page[]>(paginate)
    const idCarousel = categoryName.replaceAll(' ', '')

    const { listCart, setListCart }: any = useContext(MyContext)
    const cartRepository = new CartRepository(listCart, setListCart)

    const iconAdd = useRef(null)

    const addItem = (prod: product) => {
        cartRepository.add(prod)
        document.getElementById('carrinho')?.classList.add('animate__wobble')
        //@ts-ignore
        const tooltip = new bootstrap.Tooltip(document.getElementById('carrinho'), {
            popperConfig: function (defaultBsPopperConfig: any) {
            }
        })
        tooltip.show()
        setTimeout(() => {
            document.getElementById('carrinho')?.classList.remove('animate__wobble')
            tooltip.hide()
        }, 1000)
    }

    const showProducts = () => {
        return (
            products.map((el, i) => {
                return (
                    <div className={ i == 0 ? "carousel-item active" : "carousel-item"} data-bs-interval="15000000" key={i}>
                        <div className="d-flex justify-content-around flex-wrap" style={{ minHeight: '190px'}}>
                            { 
                                el.items.map(item => {
                                    const idModal = `${item.desc.replaceAll(' ', '')}-${item.id}`

                                    return (
                                        <div className="text-center" key={item.desc}>

                                            <div className="card my-2" style={{ width: '18rem', height: '20rem' }}>
                                                <div data-bs-toggle="modal" data-bs-target={`#${idModal}`} style={{ cursor: 'pointer'}}>
                                                    <img 
                                                        
                                                        style={{ maxHeight: '180px' }}
                                                        src={item.src} data-bs-toggle="tooltip" 
                                                        data-bs-placement="bottom" title="toque para expandir" 
                                                        className="img-fluid animate__animated animate__bounceInDown" alt="bolo"
                                                    />
                                                </div>
                                                <div className="card-body d-flex flex-column justify-content-end">
                                                    <p className="card-text animate__animated animate__bounceInDown">{item.desc}</p>
                                                    <p className="card-text animate__animated animate__bounceInDown">
                                                        <span className="price">
                                                            preço: <span>R${formatMoney(item.price)}</span>
                                                        </span>
                                                    </p>
                                                    <i 
                                                        ref={iconAdd}
                                                        onClick={() => addItem({ id: item.id, src: item.src, desc: item.desc, price: item.price, qtd: 1 })}
                                                        className="icon-prod fas fa-cart-plus"
                                                        data-bs-toggle="tooltip" data-bs-placement="bottom" title="adicionar ao carrinho"
                                                    ></i>
                                                </div>
                                            </div>
                                            
                                           

                                            <div className="modal fade" id={idModal} tabIndex={-1} aria-labelledby={`${idModal}Label`} aria-hidden="true">
                                                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id={`${idModal}Label`}>{item.desc}</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <img className="img-fluid" src={item.src} alt={idModal} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div id={idCarousel} className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-touch="true">
            <div className="carousel-inner">
                { products.length > 0 && showProducts()}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${idCarousel}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${idCarousel}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel