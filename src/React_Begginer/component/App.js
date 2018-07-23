import React from 'react';
import Header from './Header'
import Inventory from './Invertory'
import Order from './Order'
import Fish from './Fish'
import '../css/style.css';
import sampleFishes from '../sample-fishes'

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);

        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        const fishes = {...this.state.fishes};
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        // this.setState({fishes: fishes});
        this.setState({fishes});
        console.log(fishes);
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh sea food market'/>
                    <ul className='list-of-fish'>
                        {
                            Object.keys(this.state.fishes)
                                .map(key => <Fish key={key} details={this.state.fishes[key]}/>)
                        }
                    </ul>
                </div>
                <Order/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;