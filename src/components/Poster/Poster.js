import React, { Component } from 'react';
//import styled from 'styled-components';

import './Poster.css';
import logo from '../../components/Poster/img/helsi-logo.svg';
import desk from '../../components/Poster/img/desk.svg';
import phone from '../../components/Poster/img/phone.svg';
import internet from '../../components/Poster/img/internet.svg';

class Logo extends Component{
    render(){
        return(
            <img src={this.props.src} alt={this.props.alt}/>
        )
    }
}

class FeaturesItem extends Component{
    render(){
        return(
            <li>
                <i className={this.props.class}></i>
                <span>{this.props.text}</span>
            </li>
        )
    }
}

class AppointmentItem extends Component{
    render(){
        return(
            <li>
                <img src={this.props.src} alt={this.props.alt}/>
                <p>{this.props.text}</p>
            </li>
        )
    }
}

class Phone extends Component{
    render(){
        return(
            <li>
                <i className={this.props.class}></i>
                <a href={this.props.tel}>{this.props.text}</a>
            </li>
        )
    }
}

class Poster extends Component{
    render(){
        return(
            <div className="poster">
                <aside className="poster__sidebar">
                    <div className="poster__logo">
                        <Logo src={logo} alt={"logo"}></Logo>
                    </div>
                    <div className="poster__promo">
                        <div><span>З</span><span>р</span><span>у</span><span>ч</span><span>н</span><span>о</span></div>
                        <div><span>Ш</span><span>В</span><span>И</span><span>Д</span><span>К</span><span>о</span></div>
                        <div><span>Б</span><span>е</span><span>з</span><span>&#160;</span><span>ч</span><span>е</span><span>р</span><span>г</span></div>
                    </div>
                    <div className="poster__features">
                        <ul className="poster__features-list">
                            <FeaturesItem class="fa fa-desktop" text="Запис online"></FeaturesItem>
                            <FeaturesItem class="fa fa-calendar" text="Розклад лікарів"></FeaturesItem>
                            <FeaturesItem class="fa fa-address-card-o" text="Електронна медкарта"></FeaturesItem>
                            <FeaturesItem class="fa fa-child" text="Зв`язана карта дитини"></FeaturesItem>
                            <FeaturesItem class="fa fa-lock" text="Надійність зберігання даних"></FeaturesItem>
                        </ul>
                    </div>
                </aside>
                <main className="poster__main">
                    <p className="poster__main-title">До лікаря -&nbsp;без&nbsp;черг</p>
                    <div className="poster__appointment">
                       <p className="poster__appointment-title">Запис на прийом:</p>
                        <ul className="poster__appointment-list">
                            <AppointmentItem src={internet} text="В&nbsp;інтернеті"></AppointmentItem>
                            <AppointmentItem src={desk} text="В&nbsp;реєстратурі"></AppointmentItem>
                            <AppointmentItem src={phone} text="По&nbsp;телефону"></AppointmentItem>
                        </ul>
                   </div>
                    <div className="poster__contacts">
                        <div className="poster__web">
                            <span>на сайті</span>
                            <a href="helsi.me">helsi.me</a>
                        </div>
                        <div className="poster__phones">
                            <ul className="poster__phones-list">
                                <Phone class="fa fa-phone" tel="tel:+0445801551" text="044 580-15-51"></Phone>
                                <Phone class="fa fa-phone" tel="tel:+0975801551" text="097 580-15-51"></Phone>
                                <Phone class="fa fa-phone" tel="tel:+0735801551" text="073 580-15-51"></Phone>
                                <Phone class="fa fa-phone" tel="tel:+0665801551" text="066 580-15-51"></Phone>

                            </ul>
                        </div>
                    </div>
                    <p className="poster__text">Helsi.me - це безкоштовний сервіс запису до лікаря та зберігання медичних даних</p>
                </main>
            </div>
        )
    }
}

export default Poster;