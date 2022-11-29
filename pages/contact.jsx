import React from 'react'
import { Layout } from '../components/Layout'
import HeaderTwo from '../components/HeaderTwo'

const contact = () => {
  return (
    <Layout>
      <HeaderTwo />
      <section className='bg-dark text-light'>
        <div className='container py-100'>
          <div className="row text-center">
            <div className="col">
              <h2 className='mb-3'>CONTACT</h2>
              {/* <p className='mt-4'>We help you choose the opportunities that best suit your goals.</p>
              <p className='mt-2'>Please complete the following information and confirm your <b>Free Financial Advice.</b></p> */}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <iframe src="https://survey.zohopublic.com/zs/TwCsLw" style={{ width: '100%', height: '1200px', margin: '0' }} scrolling='auto' allow='geolocation'></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default contact