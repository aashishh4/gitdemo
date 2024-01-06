import { useMemo, useState } from "react";

function Usememo1(){

    const [add,setadd]=useState(0);
    const [minus,setminus]=useState(100);

    const Learning =useMemo(function adding(){
        console.log("****");
        return add*10
    },[add])

    return(
        <div>
            <h1>{Learning}</h1>
            <h1>useMemo</h1>
            <h2>{add}</h2>
            <h2>{minus}</h2>
            <button onClick={()=>setadd(add+2)}>add</button>
            <button onClick={()=>setminus(minus-2)}>minus</button>
        </div>
    )
}export default Usememo1