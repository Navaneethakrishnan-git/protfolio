import React, { useState } from 'react'
import './Service.css'
import Services_Data from '../../assets/Services_Data'


function Service() {
    
    

    const [services_data, setService_data] = useState(Services_Data)

    const update=(event,index)=>{
        event.preventDefault()
        let services_data_dupilcate=[...services_data]
        console.log(services_data_dupilcate[index].open)
        services_data_dupilcate[index].open=!services_data_dupilcate[index].open
        console.log(services_data_dupilcate)

        setService_data(services_data_dupilcate)

        
    }

    
    
        return (<div id='service' className='services'>
        <div className="tittle">
            <h1>My Project</h1>
            
        </div>
        <div className="service-container">
            {services_data.map((service,index)=>{
                return <div key={service.s_no}className='service-format'>
                        <h1 >{index+1}</h1>
                        <h2>{service.s_name}</h2>
                        <p className={service.open?"open":"close"} >{service.s_desc}</p>
                    <div>
                        
                        <button onClick={(event)=>update(event,index)}>{service.open ?"read less":"read less"}</button>
                    </div>
                        
                        
                </div>

            })}
            

        </div>
    </div>
        
    )
}

export default Service
