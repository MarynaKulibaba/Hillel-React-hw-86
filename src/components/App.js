import React from 'react';
import Definitions from './Definitions';

class App extends React.Component {
     definitions = [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 },
    ];
    render(){
        return (
            <>
                <Definitions data={this.definitions} />
            </>
        )
    }
}
export default App