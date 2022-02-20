import './index.scss';

const Information = () => {
    return (
        <section className="info">
            <h1 className="text-end">Informações</h1>
            <hr className="mb-2" />
            <div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card animate__animated animate__bounceInDown" style={{ minHeight: '200px' }}>
                            <div className="card-body">
                                <h5 className="card-title text-center"><i className="icon fa-solid fa-clock"></i></h5>
                                <h4 className="text-center mt-4">Horario de funcionamento</h4>
                                <h5 className="card-text text-center"><i>Das 8h às 18h</i></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card animate__animated animate__bounceInDown" style={{ minHeight: '200px' }}>
                            <div className="card-body">
                                <h5 className="card-title text-center"><i className="icon fa-solid fa-mobile-button"></i></h5>
                                <h4 className="text-center mt-4">Cell</h4>
                                <h5 className="card-text text-center"><i>(84)9 - 9703-1531</i></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="mt-4 text-end mb-2">Localização <i className="icon fa-solid fa-map-location"></i></h2>
                <div className="map animate__animated animate__bounceInDown">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.5166457332944!2d-35.27148668463239!3d-5.923267659926638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2570d668e55b9%3A0x9f8d6d0805f69c4b!2sR.%20Profa.%20Ivanira%20Paizinho%2C%2045%20-%20Cohabinal%2C%20Parnamirim%20-%20RN%2C%2059140-750!5e0!3m2!1spt-BR!2sbr!4v1645397360252!5m2!1spt-BR!2sbr" style={{ border: '0', width: '100%', height: '400px' }} allowFullScreen={true} loading="lazy"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Information