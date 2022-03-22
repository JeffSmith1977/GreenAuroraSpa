import React, { Component } from 'react';
import NavigationList from './car/NavigationList';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />   
        <NavigationList />    
          {this.props.children}       
      </div>
    );
  }
}
