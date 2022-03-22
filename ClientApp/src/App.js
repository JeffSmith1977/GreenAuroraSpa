import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'
import Facialtreatments from './components/products/Facialtreatments';
import Contact from './components/Contact';
import Massages from './components/products/Massages';
import About from './components/About';
import Portfolio from './components/Portfolio';
import FacialWax from './components/products/FacialWax';
import BodyWax from './components/products/BodyWax';
import { Container } from 'reactstrap';

export default class App extends Component {
  static displayName = App.name;   

  render () {
    
    return (      
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/products' component={props => <Container {...props}>{<Facialtreatments {...props}/>}</Container>} /> 
          <Route path='/massage' component={Massages} /> 
          <Route path='/facialwax' component={FacialWax} />   
          <Route path='/bodywax' component={BodyWax} />     
          <Route path='/About' component={About} />      
          <Route path='/Contact' component={Contact} />
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/fetch-data' component={FetchData} />
        </Layout>
    );
  }
}
