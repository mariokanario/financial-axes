import React, { useContext } from 'react'
import { Layout } from './../components/Layout'
import HeaderTwo from './../components/HeaderTwo'
import { LanguageContext } from '../context/LanguageProvider';

const politics = () => {

  const { language } = useContext(LanguageContext)

  return (
    <Layout>
      <HeaderTwo />
      <div className='container py-100 px-3'>
        <div className="row">
          <div className="col-12">
            <section className='terminos'>
              <h2 className='mt-3'>{language.ptit0}</h2>

              <h4 className='mt-5'>{language.ptit1}</h4>
              <p>
                {language.ptext1}
              </p>

              <h4 className='mt-5'>{language.ptit2}</h4>
              <p>
                {language.ptext2}
              </p>

              <h4 className='mt-5'>{language.ptit3}</h4>
              <p>
                {language.ptext3}
              </p>

              <h4 className='mt-5'>{language.ptit4}</h4>
              <p>
                {language.ptext4}
              </p>

              <h4 className='mt-5'>{language.ptit5}</h4>
              <p>
                {language.ptext5}
              </p>
              <p>
                {language.ptext6}
              </p>

              <h4 className='mt-5'>{language.ptit6}</h4>
              <p>
                {language.ptext7}
              </p>
              <p>
                {language.ptext8}
              </p>


              <h4 className="mt-5">{language.ptit7}</h4>
              <h5 className='my-3 text-dark'>
                {language.ptext9}
              </h5>

              <ol>
                <li>{language.ptext10}</li>
                <li>{language.ptext11}</li>
                <li>{language.ptext12}</li>
                <li>{language.ptext13}</li>
                <li>{language.ptext14}</li>
                <li>{language.ptext15}</li>

              </ol>


              <h4 className="mt-5">{language.ptit8}</h4>
              <p>
                {language.ptext16}
              </p>
              <p>
                {language.ptext17}
              </p>

              <a href="mailto:soporte@financialaxes.com.co">{language.ptext18}</a>

              <p>
                {language.ptext19}
              </p>

              <h4 className="mt-5">{language.ptit9}</h4>
              <p>
                {language.ptext20}
              </p>
              <p>
                {language.ptext21}
              </p>

              <ul>
                <li>{language.ptext22}</li>
                <li>{language.ptext23}</li>
                <li>{language.ptext24}</li>
                <li>{language.ptext25}</li>
                <li>{language.ptext26}</li>
              </ul>
              <p>
                {language.ptext27}
              </p>
              <p>
                {language.ptext28}
              </p>


              <h4 className="mt-5">{language.ptit10}</h4>
              <p>
                {language.ptext29}
              </p>
              <p>
                {language.ptext30}
              </p>


            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default politics