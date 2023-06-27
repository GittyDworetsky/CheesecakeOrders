import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateOrder from './CreateOrder';
import ViewOrders from './ViewOrders';
import Success from './Success';


class App extends React.Component {

    
    render() {
        return (
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/CreateOrder' element={<CreateOrder />} />
                    <Route exact path='/ViewOrders' element={<ViewOrders />} />
                    <Route exact path='/success' element={<Success />} />
                    {/*<Route exact path='/orderdetails/:Id' element={<OrderDetails />} /> */}
                </Routes>
            </Layout>
        );
    }
};

export default App;