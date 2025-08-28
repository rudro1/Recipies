import React from 'react';
import CooksingleOne from './CooksingleOne';
import Cookdone from './Cookdone';
import Table from './Table'
 let c=0;
const Cooking = ({recipes,handelperparing,cookdone,time,calories}) => {
   
    return (
        <div className='border-[#28282826] border-2 shadow-2xs bg-white flex flex-col items-center rounded-2xl  py-10 md:w-1/3  h-fit'>

        <div className=' border-b-2 pb-10 border-[#28282826]'>
            <h1 className='font-semibold text-2xl text-center  '>Want to cook: {recipes.length}</h1>
           <hr className=' border-b-1 border-[#28282826] border-dashed w-1/2 flex justify-self-center  my-5'/>
           
     {   recipes.length>0 &&   <table className='text-[#282828BD]  '>
 
        <Table></Table>
      
    <tbody className='bg-[#28282808]  '>
      
     
      {recipes.map((recipes,idx)=>{
        
c=idx+1;

       return <CooksingleOne key={idx} recipes={recipes} c={c} handelperparing={handelperparing}></CooksingleOne>}
      )}
    </tbody>

</table>
}
        </div>






        <div className='mt-5 border-b-2 border-[#28282826]'>
            <h1 className='font-semibold text-2xl text-center  '>Currently cooking:{cookdone.length}</h1>
           <hr className=' border-b-1 border-[#28282826] border-dashed w-1/2 flex justify-self-center  my-5'/>
           
      <table className='text-[#282828BD]  '>
 {
        recipes.length>0 && <Table></Table>
      }
   <tbody className='bg-[#28282808] ' >
 {cookdone.map((cookdone,idx)=>{
        
c=idx+1;

       return <Cookdone key={idx} cookdone={cookdone} c={c} ></Cookdone>}
      )}
   
    </tbody>
</table>
{
time>0&&<div className='text-[#282828CC] text-lg px-5  py-2 font-medium  border-2 border-[#28282826] flex flex-col items-end'>

    

<h1 className='text-[#282828CC] text-lg  font-medium capitalize  '>Total Time = {time} minutes</h1>
<h1 className='text-[#282828CC] text-lg  font-medium  '>Total Calories = {calories} calories</h1>
</div>


}
        </div>

</div>

    );
};

export default Cooking;