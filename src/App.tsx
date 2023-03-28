import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import { Tapasztalat as TapasztalatInterface } from './tapasztalat';
import Tapasztalat from './components/tapasztalat';
import Header from './components/Header';

interface State {
  tapasztalat: TapasztalatInterface[];
}

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      tapasztalat: [
        {pbono: "Csibeavató, 2021. 08. 31.", pro: "Tanárkarácsony, 2021. 12. 20."},
        {pbono: "Karácsonyi bál, 2021. 12. 22.", pro: "Ballagás, 2022. 04. 30."},
        {pbono: "Farsangi mulatság, 2022. 02. 20.", pro: ""}        
      ]
    }
  } 

  render(): React.ReactNode {
    return <div>
      {/* <Header>
        A header használatakor olyan hibát dob fel, amit nem tudtam kiküszöbőlni. 
      </Header> */}

      <Main>
      
      </Main>
        
  
      
      <table>
        <thead>
          <tr>
            <th>Pro-bono bulik:</th>
            <th>Professzionális bulik</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.tapasztalat.map(p => <Tapasztalat tapasztalat={p} /> )
          }
        </tbody>
      </table>
      
      <Footer />
    </div>
  }
}
