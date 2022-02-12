import Logo from '../Navigation/logo.png';
import './PageNotFound.css';


function PageNotFound() {
    return (
        <div className='pageNF'>
            <div className="PageNotFoundLogo">
                <img src={Logo} alt="logo"></img>
            </div>
            <h1>404 We can't find that page</h1>
        </div>
    )
}

export default PageNotFound;
