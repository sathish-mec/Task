import {React,useState} from "react";
import './Accordion.css';

const Accordion=()=>{

    const[open,setOpen]=useState(false);
   
    /* function expand(){
        setOpen(!open)
    }*/
 
        const accor=[
            {id:1,title :"Accordion 1" , para : "Paragraph 1"},
            {id:2,title :"Accordion 2" , para : "Paragraph 2"}
        ]

        function handleid(id){
            console.log(id);
            setOpen(id);
        }

    return(
        <>
       { /*<p className="head" onClick={expand}>Accordion 1</p>
        {open?<p>Paraghraph 1</p>:""}
        
        <p className="head">Accordion 2</p>
        <p>Paraghraph 2</p>*/}

        {accor.map((res)=>{
            return(
                <>
                <p className="head" onClick={()=>handleid(res.id)}>{res.title}</p>
                {open===res.id?<p>{res.para}</p>:""}
                </>
            )
        })}

        </>
    )
}
export default Accordion;
