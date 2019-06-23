import React from 'react'
import './App.css'
import logo from './logo.png'
import {Route, NavLink, Switch} from 'react-router-dom'
import Content from './Components/content'
import NormalAnatomy from './contentComponents/CT_normalAnatomy'
import NormalHead from './contentComponents/normalHead'
import './index.css'
import Footer from "./Components/footer";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showMenu: false
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return ({
                showMenu: !prevState.showMenu
            })

        });

    }

    render() {
        return (
            <div>
                <header>
                    <div className='navbar_'>
                        <a href="/" className='logo_'>
                            <img className='logoimg' src={logo}/>
                        </a>
                    </div>
                    <nav>
                        <div className={this.state.showMenu ? "navtop responsive" : "navtop"}>
                            <NavLink to={{
                                pathname: "/",
                            }} exact>Home</NavLink>
                            <NavLink to={{
                                pathname: "/normalanatomy",
                            }}>CT Normal Anatomy</NavLink>
                            <a href="#">Oncology Cases</a>
                            <a href="#">Other</a>
                            <a href="#">About</a>
                            <div className="block_search">
                                <input type="text" className="input_search"/>
                                <button className="btn_search" type="button">Search</button>
                            </div>
                            <a href="#" onClick={this.handleClick} className="menu_icon">&#9776;</a>
                        </div>
                    </nav>

                </header>
                <Switch>
                    <Route path="/" exact component={Content}/>
                    <Route path="/normalanatomy" component={NormalAnatomy}/>
                    <Route path="/normalhead" component={NormalHead}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default App
