import 'bootstrap/dist/css/bootstrap.css';

function WeatherCard({location, current }) {

    return (
        <section>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="card" style={{ color: '#4B515D', borderRadius: '35px' }}>
                            <div className="card-body p-4">
                                <div className="d-flex">
                                    <h6 className="flex-grow-1">{location.country}</h6>
                                    <h6>{location.name}</h6>
                                </div>
                                <div className="d-flex flex-column text-center mt-5 mb-4">
                                    <h6 className="display-4 mb-0 font-weight-bold" style={{ color: '#1C2331' }}>{current.temp_c}º</h6>
                                    <span className="small" style={{ color: '#868B94' }}>{current.condition.text}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                                        <div><i className="fas fa-wind fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1">Time: {location.localtime}</span></div>
                                        <div><i className="fas fa-wind fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1">Wind: {current.wind_kph} km/h</span></div>
                                        <div><i className="fas fa-tint fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1">Humidity: {current.humidity}%</span></div>
                                        <div><i className="fas fa-sun fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"></span></div>
                                    </div>
                                    <div>
                                        <img src={current.condition.icon} width="100px" alt="weather-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        
    );
}
export default WeatherCard