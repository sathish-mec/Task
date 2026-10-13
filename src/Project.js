import { React , useState} from "react";
import './Project.css';

const Project=()=>{
   // const[value,setValue]=useState(0);
    // const[input,setInput]=useState("Your data will be visible here :")
    // const[email,setEmail]=useState("")
    // const[age,setAge]=useState("")

    // function inc(){

    //    /* if(value==0){
    //         setValue(1)
    //     }
    //     else{
    //         setValue(0)-
    //     }*/

    //   //  setValue(value==0?1:0)
    //   setValue(!value)
    // }
    
    // function getData(e){
    //     setInput(e.target.value);
    // }
    
    // function handleSubmit(e){
    //     e.preventDefault();
    //     alert(input + "   " + email + "   " + age + "   ")
    // }

    // function sk(e){
    //     setEmail(e.target.value)
    // }

    // function skage(e){
    //     setAge(e.target.value)
    // }

    const[form,setForm]=useState({
        name:"",
        age:"",
        department :"",
        marks : ""
    })

    const[value,setValue]=useState({
        name:"Sathish",
        age:20,
        department :"CSE",
        marks : 90
    })

    function change(e){
        setValue({
            ...value,
            [e.target.name]:e.target.value
    
    })
    }

    // function age(e){
    //     setValue({
    //         ...value,
    //         age:e.target.value
    //     })
    // }

    // function dept(e){
    //     setValue({
    //         ...value,
    //         department:e.target.value
    //     })
    // }


    function Submit(e){
        e.preventDefault();
        setForm({
            ...form,
            name:value.name,
            age:value.age,
            department:value.department
        })
    }


    return(
        // <div style={{backgroundColor:value?"Grey":"white",height:"100vh",textAlign:"center"}}>
        
        // <span style={{cursor:"pointer"}} onClick={inc}>{value?"☀️":"🌙"}</span>

        // <form onSubmit={handleSubmit}>
        //   Name   <input onChange={getData}/><br/>
        //   Email  <input onChange={sk}/><br/>
        //   Age  <input onChange={(e)=>setAge(e.target.value)}/><br/>
        //     <button type ="submit">Submit</button>
        // </form>


        // </div>

        <>

        {form.name}<br/>
        {form.department}<br/>
        {form.age}
        <form onSubmit={Submit}>
            Name<input onChange={change} name={"name"}></input><br/>
            Dept<input onChange={change} name={"dept"}></input><br/>
            Age<input onChange={change} name={"age"}></input><br/>
            <button type="submit">Submit</button>
            
        </form>
        
        </>
    )
}

export default Project;
