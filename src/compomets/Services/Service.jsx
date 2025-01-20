import React, { useState } from 'react'
import './Service.css'
import Services_Data from '../../assets/Services_Data'


function Service() {
    
        return (<div id='service' className='services'>
        <div className="tittle">
            <h1>My Project</h1>
            
        </div>
        <div className="service-container">
            {Services_Data.map((service,index)=>{
                return <div key={service.s_no}className='service-format'>
                        <h1 >{index+1}</h1>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        
                        
                </div>

            })}
            

        </div>
    </div>
        
    )
}

export default Service
