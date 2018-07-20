import React from 'react';
import Header from './Header'
import Inventory from './Invertory'
import Order from './Order'
import '../css/style.css';

class App extends React.Component {
    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline = 'Fresh sea food market'/>
                </div>
                <Order/>
                <Inventory/>
            </div>
        )
    }
}

export default App;