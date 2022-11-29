import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageProvider';
import {Layout} from './../components/Layout'
import HeaderTwo from './../components/HeaderTwo'

const survery = () => {

  const { language } = useContext(LanguageContext)

  return (
    <Layout>
      <HeaderTwo />
      <section className='bg-dark text-light'>
        <div className='container py-100'>
          <div className="row text-center">
            <div className="col">
              <h2 className='mb-3'>{language.tittleSurv}</h2>
              <p className='mt-4'>{language.survTxt1}</p>
              <p className='mt-2' dangerouslySetInnerHTML={{ __html: language.survTxt2 }}></p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <iframe src="https://survey.zohopublic.com/zs/OBCNqM" style={{ width: '100%', height: '750px', margin: '0' }} scrolling='auto'
                allow='geolocation'></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default survery