import React from 'react';
import Header from './Header'
import Inventory from './Invertory'
import Order from './Order'
import '../css/style.css';

class App extends React.Component {
    constructor() {
        super();
        this.addFish = this.addFish.bind(this);
        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        const fishes = {...this.state.fishes}
        const timestamp = Date.now();
        fishes['fish-${timestamp}'] = fish;
        // this.setState({fishes: fishes});
        this.setState({fishes});
        console.log(fishes);
    }

    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh sea food market'/>
                </div>
                <Order/>
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;