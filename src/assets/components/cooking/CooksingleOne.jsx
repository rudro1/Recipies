import React from 'react';

const CooksingleOne = ({recipes,c,handelperparing}) => {
   
const {recipe_name,preparing_time,calories}=recipes;

    return (
       
        <tr className=' hover:bg-base-300   '>
<td  className='px-1 pl-5 pr-5'>{c}</td>
            <td className='px-1'> {recipe_name}</td>
            <td  className='px-1'>{preparing_time}</td>
            <td  className='px-1'>{calories}</td>
            <td  className='px-1'> <div onClick={()=>{handelperparing(recipes)}} className="btn btn-success py-3 md:py-3 mt-5 md:px-3 font-semibold rounded-4xl md:text-md text-[#150B2B]  mr-5 mb-5">Preparing</div>
       
        </td>
        </tr>
            
     
    );
};

export default CooksingleOne;