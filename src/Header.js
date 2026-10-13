import React, { useState } from "react";

function Header()
{
const[status,setStatus]=useState("");

    const ctime=new Date().toLocaleTimeString();
    console.log(ctime);
    
    if(ctime >= "4:08:00 PM" && status != "grey")
    {
        return(
            setStatus("grey")

        );
            }
    return(
        <>
        <div style={{width : "100%" , height : "100vh" , backgroundColor : status}}>
        header
        {status}
        <button disabled={status=="grey" ? true : false }>test</button>
        </div>
        </>
    )
}

export default Header;
