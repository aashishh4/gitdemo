import { useState } from "react";
function Array1(){
    const [arr,setArr]=useState(["ram","syam","mohan","raja","ajay","janny"]);
        
    function change(i){
        const newArr=[...arr]
        console.log(newArr)
        newArr.splice(i,1);
        console.log(newArr)
        setArr(newArr);
       
    }
    return(
        <div>
            <h1>
                {
                    arr.map((item,i)=>
                     <tr key={i}>{item}
                     <button onClick={()=>change(i)}>Delete</button>
                     </tr>
                    )
                }
            </h1>
        </div>
    )
}export default Array1