import React from 'react';
import Cat from './components/Cat/Cat'

const Home = ({history}) => {
    return(
        <div>
            <Cat history={history}/>
        </div>
    )
}

export default Home;