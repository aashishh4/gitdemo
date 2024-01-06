import { useState } from "react";
function Array2(){
    const [arr,setArr]=useState(["ram","syam","mohan","raja","ajay","janny"]);
    const [data,setdata]=useState([]);
    console.log(arr);
    console.log(data);
   
     function handlecheckbox(e,i){
      const {checked}=e.target;
      if(checked){
        setdata([...data,i])
      }else
      {
        const updatedata=data.filter((item)=>item!==i)
        setdata(updatedata)
      }
     }
        
    function change(i){
        const newArr = arr.filter((item, i) => !data.includes(i));
    setArr(newArr);
    setdata([]);
       
    }
    return(
        <div>
            <h1>
                {
                    arr.map((item,i)=>
                     <tr key={i}>
                        <input type="checkbox" 
                        checked={data.includes(i)}
                        onChange={(e)=>handlecheckbox(e,i)}
                        ></input>
                        {item}
                     
                     </tr>
                    )
                }
                <button onClick={change}>Delete</button>
            </h1>
        </div>
    )
}export default Array2