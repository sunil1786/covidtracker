import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {

    const [data, setData] = useState();

    const getCovidData = async() =>{
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData =  await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
    
        } catch (error) {
            console.log("Error");
            
        }
    }
    
    useEffect(() => {
        getCovidData();
    }, [])
    
    return(
    <>
    <div>
    {data.map(({item})  => {
        return(
        <>
        <p>active{item.active}</p>
        <p>confirmed{item.confirmed}</p>
        <p>Recovered{item.recovered}</p>
        </>
       // {/* <p>{item.confirmed}</p> */}
        )
        })
    }
    </div>
    
    <div className='App'>Covid-19 Tracker
        <ul>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                    
                        <p className='card_name'><span>OUR</span> COUNTRY</p>
                        <p className='card_name_small'>INDIA</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>OUR</span> confirmed</p>
                        <p className='card_name_small'>{data.confirmed}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>OUR</span> Deths</p>
                        <p className='card_name_small'>{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>OUR</span> Recovered</p>
                        <p className='card_name_small'>{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>OUR </span> UPDATE</p>
                        <p className='card_name_small'>{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
            <li className='card'>
                <div className='card_main'>
                    <div className='card_inner'>
                        <p className='card_name'><span>OUR</span> Active </p>
                        <p className='card_name_small'>{data.active}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    </>
)
}
export default Covid