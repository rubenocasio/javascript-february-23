import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UseEffectCrypto = () => {
    const [cars, setCars] = useState([])
    
    const [buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((response) => {
            console.log("This is our get request: ", response.data)
            setCars(response.data)
        })
        .catch((err) => {
            console.log("This is our catch error: ", err)
        })
    }, [buttonClicked])


    return (
        <div>
        <h1>useEffect Crypto API</h1>
        <button onClick={() => {console.log("Our button was clicked")
            setButtonClicked(!buttonClicked)}}>Click the Button</button>
        <hr />
        {
            cars.map((pokecrypto, index) => {
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

export default UseEffectCrypto