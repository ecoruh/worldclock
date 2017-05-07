import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import {TimeZoneDropdown} from './timezone-dropdown.js';

const buttonsInstance = (
  <div className="container-fluid">
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">World Clock</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    <TimeZoneDropdown />
  </div>
);

ReactDOM.render(
  buttonsInstance,
  document.getElementById('root')
);