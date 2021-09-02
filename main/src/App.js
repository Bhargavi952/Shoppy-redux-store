import './App.css';
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     <Switch>
     <Route path='/' exact component={ProductListing} />
      <Route path='/products/:productId' exact component={ProductDetail} />
      <Route>
        404 Not Found!
      </Route>
     </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
