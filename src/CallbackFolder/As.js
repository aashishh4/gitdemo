import { useState } from "react";
import As1 from "./As1";

function As(){
    const [add,setadd]=useState(0);

    function callback(){
        return add*10;
    }

    return(
        <div>
            <h1>{callback()}</h1>
            <h1>{add}</h1>
            <button onClick={()=>setadd(add+1)}>add</button>
            <As1 callback={callback}/>
        </div>
    )
}export default As;