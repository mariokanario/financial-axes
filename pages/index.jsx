import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageProvider';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { SiWebmoney } from 'react-icons/si';


import { Layout } from './../components/Layout'
import Subscription from './../components/Subscription';

const index = () => {

  const { language } = useContext(LanguageContext)

  return (

    <Layout>
      {/* HEADER */}

      <header className='bg-dark'>
        <div className="container-fluid container-right header-container">
          <div className="row">
            <div className="col-5 text-light d-none d-md-block" style={{ background: "black", padding: "140px 0" }}>
              <figure className='text-center'>
                <img className=' img-fluid' src="/img/logo-financial-slogan.svg" alt="Logo Financial Axes" />
              </figure>
              <p className='fst-italic text-center mt-5 text-light'>
                {language.header}
              </p>
            </div>
            <div className="col-12 col-md-7 position-relative">
              <div className='container-header d-block d-md-none'>
                <figure className='text-center'>
                  <img className=' img-fluid' src="/img/logo-financial-slogan.svg" alt="Logo Financial Axes" />
                </figure>
                <p className='fst-italic text-center mt-5 text-light'>{language.header}</p>
              </div>
              <div className='gradient d-none d-md-block'></div>
              <div className='dark-opacity d-block d-md-none'>
              </div>
              <video className='header-video' playsInline autoPlay muted loop>
                <source src='/video/diamonds.webm' type='video/webm' />
                <source src='/video/diamonds.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </header>

      {/* SECCIÓN 1 */}

      <section className='bg-texture'>
        <div className="container py-100">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <h2>{language.tittleHave}</h2>
              <ul style={{ listStyleImage: 'url("/img/list-ico.png")' }}>
                <li className='my-4'>{language.haveLi1}</li>
                <li className='my-4'>{language.haveLi2}</li>
                <li className='my-4'>{language.haveLi3}</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 text-end">
              <img className='img-fluid' src="/img/img-sec1.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 */}
      <section className='bg-city'>
        <div className="container py-100 text-center">

          <h2>{language.tittleFinan}</h2>
          <p className='mt-5' dangerouslySetInnerHTML={{ __html: language.finanTxt }}>
          </p>

          <img className='mt-5' src="/img/icono.svg" alt="icono" style={{ width: "120px" }} />

        </div>
      </section>

      {/* QUE HACEMOS */}

      <section className='bg-city2 py-100'>
        <div className="container text-center">
          <h2 className='text-light'>{language.tittleWhat}</h2>
          <p className='my-5'>
            {language.whatTxt}
          </p>

          <div className="row">
            <div className="col-12 col-lg-3">
              <HiBuildingOffice2 className='sector-ico' />
              <h4 className='text-light'>{language.whatIco1}</h4>
            </div>
            <div className="col-12 col-lg-3 d-flex">
              <div className='sector-square'> {language.whatIco1t1} </div>
            </div>
            <div className="col-12 col-lg-3 d-flex">
              <div className='sector-square'> {language.whatIco1t2} </div>
            </div>
            <div className="col-12 col-lg-3 d-flex">
              <div className='sector-square'> {language.whatIco1t3} </div>
            </div>
          </div>
          <hr className='hr-white' />
          <div className="row">
            <div className="col-12 col-lg-3">
              <FaMoneyCheckAlt className='sector-ico' />
              <h4 className='text-light'>{language.whatIco2}</h4>
            </div>
            <div className="col-12 col-lg-3 d-flex">
              <div className='sector-square'> {language.whatIco2t1}</div>
            </div>
            <div className="col-12 col-lg-3 d-flex">
              <div className='sector-square'> {language.whatIco2t2} </div>
            </div>
          </div>
          <hr className='hr-white' />
          <div className="row">
            <div className="col-12 col-lg-3">
              <SiWebmoney className='sector-ico' />
              <h4 className='text-light'>{language.whatIco3}</h4>
            </div>
            <div className="col-12 col-lg-3 d-flex">
              <div className='sector-square'> {language.whatIco3t1} </div>
            </div>
            <div className="col-12 col-lg-3 d-flex">
              <div className='sector-square'> {language.whatIco3t2} </div>
            </div>
          </div>
        </div>

      </section>


      {/* COMO LO HACEMOS */}

      <section className='py-100 bg-texture'>
        <div className="container text-center how-container">
          <h2>{language.tittleHow}</h2>
          <div className='mt-5'>
            <p className='fw-bold m-0'>{language.howTxt1}</p>
            <img src="/img/arrowRight.svg" alt="Right arrow" style={{ width: "70%" }} />
          </div>

          <article className='text-start my-4 row'>
            <div className=' col-12 col-md-4 d-flex'>
              <div className='how-square m-3'>
                <p className='yellow fw-bold'><span className='blue'>1 | </span>{language.howTxt2}</p>
                <p className='text-light mt-4'>{language.howTxt3}</p>
              </div>
            </div>
            <div className=' col-12 col-md-4 d-flex'>
              <div className='how-square m-3'>
                <p className='yellow fw-bold'><span className='blue'>2 | </span>{language.howTxt4}</p>
                <p className='text-light mt-4'>{language.howTxt5}</p>
              </div>
            </div>
            <div className=' col-12 col-md-4 d-flex'>
              <div className='how-square m-3'>
                <p className='yellow fw-bold'><span className='blue'>3 | </span>{language.howTxt6}</p>
                <p className='text-light mt-4'>{language.howTxt7}</p>
              </div>
            </div>
          </article>

          <div>
            <p className='fw-bold m-0'>{language.howTxt8}</p>
            <img src="/img/arrowLeft.svg" alt="Left arrow" style={{ width: "70%" }} />
          </div>
        </div>
      </section>


      {/* SURVERY */}

      <Subscription />


    </Layout>


  )
}

export default index