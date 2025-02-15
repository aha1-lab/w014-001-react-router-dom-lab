import {Link} from 'react-router';

function Navbar(){

    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/mailboxes'>Mailboxes</Link>
                </li>

                <li>
                    <Link to='/new-mailbox'>New Mailbox</Link>
                </li>

                <li>
                    <Link to="/new-letter" >Send Letter</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;