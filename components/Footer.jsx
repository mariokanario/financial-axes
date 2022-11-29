import Link from 'next/link'
import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageProvider';

const Footer = () => {

    const { language } = useContext(LanguageContext)

    return (
        <>
            <footer className='bg-dark'>
                <div className='container py-5'>
                    <div className="row">
                        <div className="col-12 col-sm-4 text-center text-md-start">
                            <Link href='/'>
                                <img src="/img/logo-financial.svg" alt="" style={{maxWidth: "150px"}} />
                            </Link>
                        </div>
                        <div className="col-12 col-sm-4 text-center">
                            <Link href='/politics' className='text-light text-decoration-underline' style={{ fontSize: "16px" }}>
                                {language.foot}
                            </Link>
                        </div>
                        <div className="col-12 col-sm-4 text-center text-md-end">
                            <p className='text-light' style={{fontSize: "16px"}}>
                                Copyright 2022 Financial Axes
                            </p>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer