import React, { useState } from 'react';

const Cookdone = ({cookdone,c}) => {

    const {recipe_name,preparing_time,calories}=cookdone;
 
    return (  
              

         <tr className=' hover:bg-base-300   '>
<td  className='px-1 pl-5 pr-5'>{c}</td>
            <td className='px-1'> {recipe_name}</td>
            <td  className='px-1'>{preparing_time}</td>
            <td  className='px-1'>{calories}</td>
  <td> <div className="btn btn-success py-3 md:py-3 mt-5 md:px-3 font-semibold rounded-2xl md:text-md text-[#150B2B] mr-5 mb-5">done</div>
       
        </td>
        </tr>

       
      
    );
};

export default Cookdone;