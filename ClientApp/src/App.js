import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'
import Facialtreatments from './components/products/Facialtreatments';
import Contact from './components/Contact';
import Massages from './components/products/Massages';
import About from './components/About';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/products' component={Facialtreatments} />  
        <Route path='/products' component={Massages} />
        <Route path='/About' component={About} />      
        <Route path='/Contact' component={Contact} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
