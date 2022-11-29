import React, { useContext } from 'react'
import Link from 'next/link'
import { LanguageContext } from '../context/LanguageProvider';


const Subscription = () => {

    const { language } = useContext(LanguageContext)

    return (
        <section className='bg-yellow'>
            <div className="container-fluid container-right">
                <div className="row">
                    <div className="px-4 col-12 col-lg-5" style={{padding: "60px 0"}}>
                        <h3>{language.tittleSub}</h3>
                        <p className='my-5 text-dark' dangerouslySetInnerHTML={{ __html: language.subTxt }}></p>
                        <Link href='/survery' className='nav-link text-light'>
                            <button className='btn-black'>{language.subBtn}</button>
                        </Link>

                    </div>
                    <div className="col-7 d-none d-lg-block bg-subscription"></div>
                </div>
            </div>

            <div className="container-fluid d-block d-lg-none">
                <div className="row">
                    <div className="col-12 p-0">
                        <img src="/img/subscription2-bg.jpg" alt="Subscription" className='img-fluid' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Subscription