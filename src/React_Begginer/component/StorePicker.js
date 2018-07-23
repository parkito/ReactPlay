import React from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    //onSubmit={this.goToStore.bind(this)

    goToStore(event) {
        event.preventDefault();

        const storeId = this.storeInput.value;
        // console.log('Go to store', storeId);

        this.props.history.push(`store/${storeId}`)
    }

    render() {
        return (
            <form className='store-selector' onSubmit={(e) => this.goToStore(e)}>
                <input type='text'
                       required placeholder='Store name'
                       defaultValue={getFunName()}
                       ref={(input) => {
                           this.storeInput = input
                       }}
                />
                <button type='submit'> View store</button>
            </form>

        )
    }
}

export default StorePicker