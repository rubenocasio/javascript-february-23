import React, {useState} from 'react'
import axios from 'axios'

const AxiosCrypto = () => {
    const [poke, setPoke] = useState([])

    const fetchData = () => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response) => {
            console.log("This is my get request data: ", response.data)
            setPoke(response.data)
        })
        .catch((err) => {
            console.log("This is my catch error: ", err)
        })

        console.log("This is asynchronous code")
    }

    return (
        <div>
        <h1>Axios Crypto Section</h1>
        <button onClick={fetchData} className="btn btn-outline-dark mt-5">Click</button>
        <hr />
        {
            poke.map((pokecrypto, index) => {
                return(
                    <div key={index}>
                        <img src={pokecrypto.image} alt={pokecrypto.name} height="100px"/>
                        <p>{pokecrypto.name}</p>
                        <p>{pokecrypto.symbol}</p>
                        <p>{pokecrypto.current_price}</p>
                    </div>
                )
            })
        }
        </div>
    )
}

export default AxiosCrypto