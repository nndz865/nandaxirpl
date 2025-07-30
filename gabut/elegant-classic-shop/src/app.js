import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './assets/styles.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/product/:id" component={ProductDetail} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;