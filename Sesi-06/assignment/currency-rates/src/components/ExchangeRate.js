import axios from 'axios'
import { useEffect, useState } from 'react'

const ExchangeRate = () => {
    const [data,setData] = useState([ ])
    const [date,setDate] = useState([ ])
    const exchangeName = [
        {name:"CAD"},
        {name:"EUR"},
        {name:"IDR"},
        {name:"JPY"},
        {name:"CHF"},
        {name:"GBP"},
    ]
    
    useEffect(()=> {
        axios.get("https://api.currencyfreaks.com/latest?apikey=7d76fddd15c54d28afe9e8f14e3a0e54&symbols=CAD,IDR,JPY,CHF,EUR,GBP")
    .then((res) => {
        
        setDate([res.data.date])
        const param = [res.data.rates.CAD, res.data.rates.EUR, res.data.rates.IDR, res.data.rates.JPY, res.data.rates.CHF, res.data.rates.GBP]
        const combine = exchangeName.map(function(item,index){
        return {name: item.name, value: param[index]}
       })
      
        setData([...combine])
        
    })
    .catch((error) => {

    })
    },[])

      console.log(date);

    return(
        <>
            <div className='rates-container'>
            <table>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>We Buy</th>
                        <th>Exchange Rates</th>
                        <th>We Sell</th>
                    </tr>
                </thead>
                <tbody>
                { data !== null && data.map((res) => {
                    const val = parseFloat(res.value)
                    const parambuy = val + (val*0.05)
                    const paramsell = val - (val*0.05)
                    return (
                        
                        <tr key={res.name}>
                            <td>{res.name}</td>
                            <td>{parambuy.toFixed(4)}</td>
                            <td>{val.toFixed(4)}</td>
                            <td>{paramsell.toFixed(4)}</td>
                        </tr>
                    )
                    })}
                    </tbody>
            </table>
            
            </div>
            <div className='text-rate'>
                
                <p>Rates are based from 1 USD</p>
                <p>This application uses API from https://currencyfreaks.com/</p>
            </div>
            
        </>
    )
}

export default ExchangeRate