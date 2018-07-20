import React from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {

    render() {
        return (
            <form className='store-selector'>
                <input type='text' required placeholder='Store name'
                defaultValue={getFunName()}/>
                <button type='submit'> View store</button>
            </form>

        )
    }

}

export default StorePicker