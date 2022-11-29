import React from 'react'

const HeaderTwo = () => {
    return (
        <header className='text-center py-5 text-light position-relative' style={{height: "370px" }}>
            
            <div className='dark-opacity'>
                <figure className='my-5'>
                    <img className=' img-fluid' src="/img/logo-financial-slogan.svg" alt="Logo" />
                </figure>
            </div>
            <video className='header-video' playsInline autoPlay muted loop>
                <source src='/video/puente.webm' type='video/webm' />
                <source src='/video/puente.mp4' type='video/mp4' />
            </video>
            
            {/* <h1 className='mt-5'>Finances for life</h1> */}
        </header>
    )
}

export default HeaderTwo