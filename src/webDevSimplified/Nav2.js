import { Link } from "react-router-dom";

const Nav2 = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home3">Home</Link>
                </li>
                
               
                <li>
                    <Link to="/books">Books</Link>
                </li>


            </ul>
        </nav>
    );
}

export default Nav2;