import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'

const Crypto = () => {

    const[data , setData] = useState([]) ;

    useEffect(()=>{
        axios.get("https://api.coinpaprika.com/v1/tickers")
        .then((res)=>{setData(res.data)})
    } , [] )

    console.log(data)

  return (
    <div>

        <h1 style={{textAlign : "center"}}>Crypto Price Tracker</h1>
        <button style={{padding : "10px" , marginLeft : "10px" , borderRadius : "5px" , cursor : "pointer"  }}  >Tracker</button>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Rank</th>
                    <th>Total Supply</th>
                </tr>
            </thead>

           
        {data.map((i)=>{
            return(
                <>
                <tbody>
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.symbol}</td>
                        <td>{i.rank}</td>
                        <td>{i.total_supply}</td>

                    </tr>
                </tbody>
                </>
            )
        })}

        </table>
        

    </div>
  )
}

export default Crypto