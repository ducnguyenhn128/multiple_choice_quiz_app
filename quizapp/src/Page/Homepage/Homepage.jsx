import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (  
        <div>
            <h1>What do you want today ?</h1>
                <div className='homepage_button'>
                    <Link to = "/practise" className='homepage_link'> 
                        Practise
                    </Link>
                </div>

                <div className='homepage_button'>
                    <Link to = "/test" className='homepage_link'> 
                        Take a test
                    </Link>
                </div>

        </div>
    );
}
 
export default Homepage;