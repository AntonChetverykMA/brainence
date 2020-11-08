import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import ProductList from './components/Pages/ProductList/ProductList';
import AddProduct from './components/Pages/AddProduct/AddProduct';

function App() {
  return (
    <Router basename='brainence'>
      <Switch>
        <Layout>
          <Route exact path='/' component={ProductList} />
          <Route path='/add-product' component={AddProduct} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
