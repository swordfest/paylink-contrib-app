import React from "react";
import '../index.css';

function Data (){
    return(
        <div className='w-auto h-auto flex flex-col items-center gap-6'>
            <div className='img w-56 h-56 bg-slate-400 rounded-full'></div>
            
            <h1 className='font-medium text-[34px]'>Daniel Castillo</h1>
            <h3>Frontend Web Developer</h3>
        </div>
    )
}

export default Data;