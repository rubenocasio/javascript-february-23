import React, {useState} from 'react'

const FetchAPI = () => {

    const [allthecoinsfromcoingeckoandmoreinsidethisbucket, setCoins] = useState([])

    const fetchData = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log("Getting data from our API: ", res)
            setCoins(res)
        })
        .catch((error) => {
            console.log("This is coming from my catch error: ", error)
        })
        console.log("This is called Asynchronous code")
    }
    return (
        <div >
            <h1>FetchAPI</h1>
            <button onClick={fetchData}>Click!</button>
            {
                allthecoinsfromcoingeckoandmoreinsidethisbucket.map((manycoins, idx) => {
                    return(
                        <div key={idx} className='myDiv'>
                        <img src={manycoins.image} alt="Crypto coin pic" height="100px"/>
                        <p>{manycoins.id}</p>
                        <p>{manycoins.name}</p>
                        <p>${manycoins.current_price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FetchAPI