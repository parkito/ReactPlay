import React from 'react';

class StorePicker extends React.Component {

    render() {
        return (
            <form className='store-selector'>
                <input type='text' required placeholder='Store Naem'/>
                <button type='submit'> View store</button>
            </form>

        )
    }

}

export default StorePicker