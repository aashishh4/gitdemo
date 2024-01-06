import { memo } from "react";

function Pairent2(learning){
    console.log("usecallback");

    return(
        <div>
            <h1>child component usecallback</h1>
        </div>
    )
}
export default memo (Pairent2)