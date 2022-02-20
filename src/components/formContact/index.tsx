const formContact = () => {
    return (
        <>
            <div className="row mb-3 d-flex justify-content-center align-items-center flex-column flex-lg-row" style={{ fontSize: '2rem' }}>
                <div data-aos="fade-right" className="col-12 col-lg-6 mb-0 mb-3 mb-lg-0">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" id="nome" placeholder="Fabio Dantas" />
                </div>
                <div data-aos="fade-left" className="col-12 col-lg-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="nome@exemplo.com" />
                </div>
            </div>
            <div className="row mb-5" style={{ fontSize: '2rem' }}>
                <div data-aos="fade-up" className="col-12">
                    <label className="form-label">Texto Livre</label>
                    <textarea className="form-control" id="texto" rows={10}></textarea>
                    <div className="d-flex justify-content-start">
                        <button className="btn btn-outline-secondary mt-2 fs-3" type="button">Enviar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default formContact