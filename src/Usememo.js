import { useState } from "react";

function Usememo(){
    const [add,setadd]=useState(0);
    const [minus, setminus]=useState(100);
    function Learning(){
        console.log("************");
         return add*10;
    }

    return(
        <div>
            <h1>{Learning()}</h1>
            <h1>Learning useMemo....</h1>
            <h1>{add}</h1>
            <h1>{minus}</h1>
            <button onClick={()=>setadd(add+1)}>add</button><br/>
            <button onClick={()=>setminus(minus-1)}>minus</button>
        </div>
    )
}export default Usememo;