import React, { Component } from 'react';
//import styled from 'styled-components';

import './Menu.css';


class MenuLink extends Component{
    render() {
        return (
            <li className="menu__item">
                <a href={this.props.href}>{this.props.text}
                </a>
            </li>
        );
    };
}

class DropdownItem extends Component{
    constructor(){
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }
    render() {
        return (
            <li className="menu__item menu__drop-item">
                <a href="#sub" className="menu__drop-btn"  onClick={this.showDropdownMenu}>{this.props.text}
                    <i className="fa fa-caret-down"></i>
                </a>
                { this.state.displayMenu ? (
                <ul className="dropdown__list">
                    <MenuLink href="#" text="Подпункт 1"></MenuLink>
                    <MenuLink href="#" text="Подпункт 2"></MenuLink>

                </ul>
                    ):
                    (
                        null
                    )
                }

            </li>
        );
    };
}

class Menu extends Component{
    render() {
        return (
            <nav className="menu">
                <ul className="menu__list">
                    <MenuLink href="#" text="Пункт 1"></MenuLink>
                    <DropdownItem href="#" text="Пункт 2"></DropdownItem>
                    <DropdownItem href="#" text="Пункт 3"></DropdownItem>
                    <MenuLink href="#" text="Пункт 4"></MenuLink>
                </ul>
            </nav>
        );
    };
}

export default Menu;