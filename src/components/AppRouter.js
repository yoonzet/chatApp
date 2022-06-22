import Profile from 'pages/Profile';
import { HashRouter as Router, Route, Routes} from 'react-router-dom'
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Nav from './Nav';

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Nav/>}
            <Routes>
                {isLoggedIn ? (
                    <>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/profile' exact element={<Profile/>}/>
                    </>
                ) : (
                    <Route path='/' exact element={ <Auth/>}/>
                )}
            </Routes>
        </Router>
    ); 
}

export default AppRouter;