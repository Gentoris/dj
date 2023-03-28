import { Component, ReactNode } from "react";
import { Link, Route, Routes } from 'react-router-dom';

export default class Header extends Component {
    render(): ReactNode {
        return <header>
            <nav>
          <ul>
            <li>
            <Link to='/'>Főoldal</Link>  
            <Link to='/tapasztalat'>Szakmai tapasztalatok</Link>  
            </li>
          </ul>
        </nav>
        </header>
    }
}

