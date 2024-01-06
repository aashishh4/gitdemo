import { useState } from "react";
import Pairent2 from './Pairent2'

function Pairent1(){
    const [data,setdata]=useState(0);

    function larnging(){
        return data*10;
    }

    return(
        <div>
            <h1>{larnging()}</h1>
            <h1>{data}</h1>
            <button onClick={()=>setdata(data+1)}>add</button>
            <Pairent2 larnging={larnging}/>
        </div>
    )
}export default Pairent1;