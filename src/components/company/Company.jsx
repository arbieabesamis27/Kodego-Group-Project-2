import React from 'react'
import './Company.css'

// logo
import brand1 from './images/bridgestone.png'
import brand2 from './images/yokohama.png'
import brand3 from './images/sailun.png'
import brand4 from './images/petron.png'
import brand5 from './images/motul.png'



const Company = () => {
  return (
    <div className='company my-5'>
        <div className='wrapper container'>
            <h1 className='companyTitle pt-4'>Our Partners</h1>

            <div className='companyBrand d-flex flex-nowrap row justify-content-between align-items-center flex-nowrap my-5 py-5 gap-md-5 gap-sm-5'>
                <img src={ brand1 } className='brand' alt='bridgestone' />
                <img src={ brand2 } className='brand' alt='yokohama' />
                <img src={ brand3 } className='brand' alt='sailun' />
                <img src={ brand4 } className='brand' alt='petron' />
                <img src={ brand5 } className='brand' alt='motul' />
            </div>
        </div>
    </div>
  )
}

export default Company