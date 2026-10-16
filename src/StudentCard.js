import React from 'react'




const StudentCard = ({data}) => {
    console.log(data)
  return (
    <div>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>

            {data.map((i)=>{
                return(
                    <>
                    <tbody>
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.username}</td>
                            <td>{i.email}</td>
                            <td>{i.address.city}</td>
                        </tr>
                    </tbody>
                    </>
                )
            })}
        </table>
    </div>
  )
}

export default StudentCard