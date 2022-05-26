
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from './components/Layout'
import Accueil from 'pages/Accueil'; 
import Galerie from 'pages/Galerie';
import Prestations from 'pages/Prestations';
import Contact from 'pages/Contact';

export default function App() {
  return (
    <div>
      <Router>
      <Layout>
        <Switch>
        <Route exact path='/' component={() => <Accueil /> }/>
        <Route path='/Galerie' component={() => <Galerie /> }/>
        <Route path='/Prestations' component={() => <Prestations /> }/>
        <Route path='/Contact' component={() => <Contact /> }/>
        </Switch>
      </Layout>
      </Router>

      
    </div>
  )
}
