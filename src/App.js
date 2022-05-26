import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const { user, authIsReady } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        {user && <Sidebar/>}
          <div className='container'>
          <Navbar />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login"/>}
                {user && <Dashboard />}
              </Route>
            </Switch>

            <Switch>
              <Route path="/create">
                {!user && <Redirect to="/login"/>}
                {user && <Create />}
              </Route>
            </Switch>

            <Switch>
              <Route path="/projects">
                {!user && <Redirect to="/login"/>}
                {user && <Project />}
              </Route>
            </Switch>

            <Switch>
              <Route exact path="/signup">
                {user && <Redirect to="/"/>}
                {!user && <Signup />}
              </Route>
            </Switch>

            <Switch>
              <Route exact path="/login">
                {user && <Redirect to="/"/>}
                {!user && <Login />}
              </Route>
            </Switch>

          </div>

          
        
        </BrowserRouter>
      )}

    </div>
  );
}

export default App
