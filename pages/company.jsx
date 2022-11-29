import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageProvider';

import {Layout} from './../components/Layout'
import HeaderTwo from './../components/HeaderTwo'
import Subscription from './../components/Subscription'
import History from './../components/History';
import Holding from './../components/Holding';

const company = () => {

  const { language } = useContext(LanguageContext)


  return (
    <Layout>
      <HeaderTwo />

      {/* EMPRESA */}

      <div className='bg-texture'>

        <section className='py-100'>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-12 col-md-8">
                <h4 className='text-center'>
                  {language.comTxt1}
                </h4>
              </div>
            </div>
            <div className='row mt-5'>
              <div className="col-12 col-md-6">
                <video controls className="w-100" poster='/video/poster.png' preload='none'>
                  <source src='/video/company.mp4' type='video/mp4' />
                </video>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  {language.comTxt2}
                </p>
                <p>
                  {language.comTxt3}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FUNDADORES */}

        <section className='py-100'>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-12 col-md-5">
                <img src="/img/founder1.png" className="w-100" alt="Founder picture" />
              </div>
              <div className="col-12 col-md-7">
                <h3>{language.found1Txt1}</h3>
                <h5 className='my-4' dangerouslySetInnerHTML={{ __html: language.found1Txt2 }}>
                </h5>
                <p>
                  {language.found1Txt3}
                </p>
              </div>
            </div>

            <div className="row align-items-end text-start text-md-end flex-column-reverse flex-md-row" style={{ margin: "100px 0" }}>
              <div className="col-12 col-md-7">
                <h3>{language.found2Txt1}</h3>
                <h5 className='my-4' dangerouslySetInnerHTML={{ __html: language.found2Txt2 }}>
                </h5>
                <p>
                  {language.found2Txt3}
                </p>
              </div>
              <div className="col-12 col-md-5">
                <img src="/img/founder2.png" className="w-100" alt="Founder picture" />
              </div>
            </div>

            <div className="row align-items-end">
              <div className="col-12 col-md-5">
                <img src="/img/founder3.png" className="w-100" alt="Founder picture" />
              </div>
              <div className="col-12 col-md-7">
                <h3>{language.found3Txt1}</h3>
                <h5 className='my-4' dangerouslySetInnerHTML={{ __html: language.found3Txt2 }}>
                </h5>
                <p dangerouslySetInnerHTML={{ __html: language.found3Txt3 }}>
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* HISTORIA */}

      <History />

      {/* HOLDING */}

      <Holding />

      {/* SUSCRIPCIÓN */}
      <Subscription />
    </Layout>
  )
}

export default company