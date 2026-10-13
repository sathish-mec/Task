import React from "react";

const OjbectExample =()=>{

const student =[{
    id:1,
    name:"Suren",
    age:20,
    dept:"MECH",
    marks:95
},
{
    id:2,
    name:"Kaviyarasu",
    age:21,
    dept:"AGRI",
    marks:80
}
]


const numbers=[1,2,3,4,5,6];
const filtered = numbers.filter(
    function (x){
        return x>3;
    }
)
console.log(filtered);
console.log("pop",numbers.pop(),numbers)
console.log("push",numbers.push(7),numbers)
console.log("unshift",numbers.unshift(0),numbers)
console.log("shift",numbers.shift(),numbers)

const data=student.filter((i)=>i.marks>=90)
console.log(data)

const names=["Sathish","Bala","Gopi","Sarathi"]
const result =names.slice(1,3)

console.log("Result",result,names);
const Spliceresult=names.splice(1,3)
console.log("SpliceResult",Spliceresult)
const SpliceAdd=names.splice(1,2,"Sabari")
console.log("SpliceAdd",SpliceAdd,names)

return(
    
    <>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Marks</th>
            </tr>
        </thead>
       {student.map((i)=>{
        return(
            <>
             <tbody>
            <tr>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.marks}</td>
            </tr>
        </tbody>
            </>
        )
       })}
    </table>

        {data.map((i)=>{
        return(
            <>
            {i.name}
            </>

        )
    })}


    </>
)

}

export default OjbectExample;
