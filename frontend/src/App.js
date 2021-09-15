
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import ProductsScreen from './screens/ProductScreen/ProductsScreen';
import CardScreen from './screens/CardScreen/CardScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';


import SignUp from './components/Signup/signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/login/login';
import checkout from './components/CheckOut/checkout';
import AdminScreen from './Admincomponents/AdminScreen/AdminScreen';
import Contact from './components/contact/Contact';


function App() {
 

  return (
    <div className="app">
      <Router>
       
       
    <main>
<Switch>
<Route exact path='/contact' component={Contact}/>
 <Route exact path='/Admin' component={AdminScreen}/>
<Route exact path='/homescreen' component={HomeScreen } />
<Route exact path='/product/:id' component={ProductsScreen}  />
<Route exact path='/cart' component={CardScreen}   />

<Route exact path='/signup' component={SignUp}/>

<Route exact path='/' component={LogIn}/>
<Route exact path='/checkout' component={checkout}/>
</Switch>


    </main>
    </Router>
    </div>
  );
}

export default App;
