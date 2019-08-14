import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Title from './Title';
import Navigation from './Navigation';

export default ({ children }) => (
  <div className="container">
    <Title />
    <Navigation />
    <main>
      {children}
    </main>
  </div>
)
