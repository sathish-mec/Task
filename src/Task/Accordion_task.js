import React ,{ useState , useEffect } from 'react'
import axios from 'axios';

const Accordion_task = () => {

    const[accor,setAccor] = useState({});
    const[open,setOpen]=useState(false);

    useEffect(()=>{
        axios.get("https://dummyjson.com/c/42aa-8088-4783-b322")
        .then((response)=>{
            setAccor(response.accor);
            
        })
    },[]);

    function handleid(id){
            console.log(id);
            setOpen(id);
        }


  return (
    <div>

        {accor.map((res)=>{
            return(
                <>
                <p className="head" onClick={()=>handleid(res.id)}>{res.question}</p>
                {open===res.id?<p>{res.answer}</p>:""}
                </>
            )
        })}
    </div>
  )
}

export default Accordion_task