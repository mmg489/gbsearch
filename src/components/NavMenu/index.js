import React, { Component } from 'react';
import { Collapse, NavLink, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './style.css';

class NavMenu extends Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state ={
            isOpen: false
        };
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
            <Nav>
            <header className='header'>
                <NavItem>
                    <NavLink href='/'>Google Books</NavLink>
                    {/* <NavbarToggler onClick = {this.toggle}/>
                    <Collapse isOpen ={this.state.isOpen} navbar> */}
                        <NavItem className='ml-auto'>
                            <NavLink href='/saved'>Saved</NavLink>
                        </NavItem>
                </NavItem>
                    {/* </Collapse> */}
            </header>
            </Nav>
            </div>
        );
    }
}

export default NavMenu;