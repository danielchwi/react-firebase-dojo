import './Sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import { NavLink  } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
            <div className='user'>
                {/* Avatar and Username is here later */}
                <p>Hey user</p>
            </div>
            <nav className='links'>
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <img src={DashboardIcon}  alt="Dashboard link"/>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/create">
                            <img src={AddIcon}  alt="Add Project Icon"/>
                            <span>New Project</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}