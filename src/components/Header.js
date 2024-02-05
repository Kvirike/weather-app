import 'bootstrap/dist/css/bootstrap.css';
import logo from '../media/logo.png'


function Header() {
    return(
        <div className="headerDiv">
            <img className='logo' src={logo}></img>
        </div>
    )
}
export default Header