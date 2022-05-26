import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

import './Navbar.css'
import Temple from '../assets/temple.svg'

export default function Navbar() {
    const { logout, isLoading } = useLogout()
  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>
                <Link to="/">
                    <img src={Temple} alt="Temple logo"/>
                    <span>The Dojo</span>
                </Link>
            </li>

            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li>
                {!isLoading && <button className='btn' onClick={logout}>Logout</button>}
                {isLoading && <button className='btn' disabled>Logging out</button>}
            </li>

        </ul>
    </div>
  )
}
