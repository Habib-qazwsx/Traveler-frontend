import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingPackages from './Components/BookingPackages/BookingPackages';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Packages from './Components/Packages/Packages';
import NotFound from './Components/NotFound/NotFound';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout';
import Authprovider from './Context/Authprovider';
import PrivateRaout from './Components/Login/PrivateRaout';


function App() {
  return (
    <div>
      <Authprovider>
      <BrowserRouter>
        <Header></Header>

        <Layout>
        <Switch>
        
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/packages'>
            <Packages></Packages>
          </Route>

          <PrivateRaout path='/bookingpackages'> 
            <BookingPackages></BookingPackages>
          </PrivateRaout>

          <Route path='/aboutus'>
            <AboutUs></AboutUs>
          </Route>

          <Route path='/contact'>
            <Contact></Contact>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
         
        </Switch>
         </Layout>
        <Footer></Footer>

      </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
