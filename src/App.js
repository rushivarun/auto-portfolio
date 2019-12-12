import React, { Component } from 'react';
import NowPlayingCard from './NowPlayingCard';


class App extends Component {
    render() {
        return (
            <div className='roboto tc'>
                <div className='helvetica f2 tc'>
                    <h1>Rushi Varun</h1>
                </div>
                <NowPlayingCard className='tc'>

                </NowPlayingCard>
            </div>
        )
    }
}

export default App;
