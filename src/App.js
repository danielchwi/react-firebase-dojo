import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Sidebar/>
        <div className='container'>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch>

          <Switch>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/projects">
              <Project />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>

        </div>

        
      
      </BrowserRouter>

    </div>
  );
}

export default App
