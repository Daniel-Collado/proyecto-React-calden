import logo2 from '../images/logo2.jpg';
import CartWidget from './CartWidget';


function Navbar () {
    const cantidadEnCarrito = 3;
    return(
        <>
            
            <nav className='navbar navbar-expand-md fixed-top'>
                <div className='container-fluid'>
                    <a className='navbar-brand'><img className='img-fluid logoNavbar' src={logo2}/></a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                        <h1>Calden macetas de cemento</h1>

                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <button type="button" className="btn btn-light">Macetas</button>
                            </li> 
                            <li className='nav-item'>
                                <button type="button" className="btn btn-light">Set de Baño</button>
                            </li> 
                            <li className='nav-item'>
                                <button type="button" className="btn btn-light">Set de Posavasos</button>
                            </li> 
                        </ul>
                </div>
                    <CartWidget cantidad={cantidadEnCarrito}/>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar;