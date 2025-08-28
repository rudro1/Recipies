import { useState } from 'react'
import Header from './assets/components/header/Header'
import Section from './assets/components/section2/Section'
import Recipe_data from './assets/components/Recipies/Recipe_data'
import Recipies from './assets/components/Recipies/Recipies'
import Cooking from './assets/components/cooking/Cooking'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [recipes,setrecipe]=useState([]);
  const [cookdone,setcooking]=useState([]);
      const [time,settime]=useState(0);
      const[calories,setcalories]=useState(0)
      const [alert,setalert]=useState(false);

const handelcooking=(recipe)=>
{
const newrecipe=[...recipes,recipe]
setrecipe(newrecipe)
!recipes.includes(recipe)?setrecipe(newrecipe):setrecipe(recipes);
recipes.includes(recipe)&& setalert(!alert) ;
  // console.log("hello",rec &&ipe)
}

 const handelperparing=(recipesfromcook)=>
    {
setalert(false)
      let cookingdone=[...cookdone,recipesfromcook];
      setcooking(cookingdone)
       settime(parseInt(recipesfromcook.preparing_time)+time);
     setcalories(parseInt(recipesfromcook.calories)+calories);
let index=recipes.indexOf(recipesfromcook);

// console.log("hi",recipes,index);
setrecipe(recipes.filter((recipe,idx)=>index!=idx))


    }

console.log(cookdone);
// console.log(alert)
  return (
    <>




   <Header></Header>
   <Section></Section>
<Recipe_data></Recipe_data>
   <div className='w-11/12 mx-auto space-y-5 md:flex  py-5  gap-x-5   '>
<Recipies handelcooking={handelcooking}></Recipies>
<Cooking  recipes={recipes} handelperparing={handelperparing} cookdone={cookdone} time={time} calories={calories}></Cooking>
   </div>
   {

alert&&(<div className="toast toast-top toast-end">
  <div className="alert alert-error">
    <span className=' font-bold '>AT A time one receipe you can cook.</span>
  </div></div>)


   }
    </>
  )
}

export default App
