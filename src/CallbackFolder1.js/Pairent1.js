import { useCallback } from "react";
import { useState } from "react";
import Pairent2 from "./Pairent2";

function Pairent1(){
    const [add,setadd]=useState(0);
    const [minus,setminus]=useState(100);

    const learning=useCallback(()=>{
 //hey
    },[minus,add]);

    return(
        <div>

        <h1>{add}</h1>
        <h1>{minus}</h1>
        <button onClick={()=>setadd(add+1)}>add</button>
        <button onClick={()=>setminus(minus-1)}>minus</button>
        <Pairent2 learning={learning} />
        </div>
    )
}export default Pairent1;