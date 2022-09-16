import React from "react";
import '../index.css';
import Data from './Data';
import Wallets from './Wallets';

function Profile (){
    return (

        <div className='text-red-500 w-auto h-auto'>
            {Data()}
            {Wallets()}
        </div>

    )
}

export default Profile;