import React, { Component } from 'react';
import NavigationList from './car/NavigationList';
import { NavMenu } from './NavMenu';

export const Layout = (props) =>{
    return (
      <div>
        <NavMenu />   
        <NavigationList />    
        {props.children}       
      </div>
    );
  
}
