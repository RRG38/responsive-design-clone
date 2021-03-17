import React from 'react';

export default class Nav extends React.Component {
    constructor(){
        super();
        this.state = {
            menu: "closed"
        }
    }

    menu = () => {
        if(this.state.menu === 'closed'){
            this.setState({ menu: "pickle"})
        } else {
            this.setState({ menu: "closed"})
        }
        
    }

    render(){
        return (
            <nav>
              <ul className={this.state.menu === 'closed' ? "closed" : ""}>
                <li>About</li>
                <li>Contact Us</li>
                <li>Home</li>
              </ul>

            </nav>
        )
    }
    
}