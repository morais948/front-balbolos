import './index.scss'

const Footer = () => {
    return (
        <footer className="footer d-flex justify-content-around align-items-center flex-wrap">
            <div>
                <i className="fas fa-copyright mx-2"></i>
                <span>todos os direitos autorais reservados - 2022</span>
            </div>

            <p className="d-none d-md-block">Desenvolvido por @programmer</p>
        </footer>
    )
}

export default Footer