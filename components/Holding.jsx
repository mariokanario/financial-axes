import React, { useState, useContext } from 'react'
import { LanguageContext } from '../context/LanguageProvider';
import { motion } from "framer-motion"
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { SiWebmoney } from 'react-icons/si';

const Holding = () => {

    const { language } = useContext(LanguageContext)

    const holds = [
        {
            id: 1,
            ico: <HiBuildingOffice2 className='sector-ico sector-ico-w' />,
            title: language.holSub1,
            description: language.holTxt1
        },
        {
            id: 2,
            ico: <FaMoneyCheckAlt className='sector-ico sector-ico-w' />,
            title: language.holSub2,
            description: language.holTxt2
        },
        {
            id: 3,
            ico: <SiWebmoney className='sector-ico sector-ico-w' />,
            title: language.holSub3,
            description: language.holTxt3
        }
    ]

    const [item, setItem] = useState(null)

    const [isOpen, setIsOpen] = useState(false)




    return (
        <>
            <section className='py-100 bg-city'>
                <div className="container">
                    <h2 className='text-center'>{language.tittleHol}</h2>
                    <div className="holding-container">

                        {/* MODAL */}

                        {
                            isOpen && (
                                <div className="layout-modal" onClick={() => setIsOpen(!isOpen)}>
                                    <motion.div
                                        layoutId={`motionHold${item.id}`}
                                        className='holding-modal shadow-lg '
                                    >
                                        <button className='close-modal'>X</button>

                                        {/* {item.ico} */}
                                        <motion.h4 layoutId={`txtHold${item.id}`}>
                                            <span>{item.ico}</span> {item.title} 
                                        </motion.h4>
                                        <div dangerouslySetInnerHTML={{ __html: item.description }} >

                                        </div>
                                    </motion.div>
                                </div>
                            )
                        }



                        <div className='holding-circle'>
                            <div className='holding-img'>
                                <img src="/img/icono.svg" alt="Financial Axes Logo" />
                            </div>
                        </div>

                        <motion.div className='holding-info hld-1 d-none d-lg-block' layoutId='motionHold1' onClick={() => {
                            setItem(holds.find(hold => hold.id === 1))
                            setIsOpen(true)
                        }}
                        >
                            <HiBuildingOffice2 className='sector-ico' />
                            <motion.h4 layoutId='txtHold1'>
                                {language.holSub1}
                            </motion.h4>
                        </motion.div>

                        <motion.div className='holding-info hld-2 d-none d-lg-block' layoutId='motionHold2' onClick={() => {
                            setItem(holds.find(hold => hold.id === 2))
                            setIsOpen(true)
                        }}
                        >
                            <FaMoneyCheckAlt className='sector-ico' />
                            <motion.h4 layoutId='txtHold2'>
                                {language.holSub2}
                            </motion.h4>
                        </motion.div>

                        <motion.div className='holding-info hld-3 d-none d-lg-block' layoutId='motionHold3' onClick={() => {
                            setItem(holds.find(hold => hold.id === 3))
                            setIsOpen(true)
                        }}
                        >
                            <SiWebmoney className='sector-ico' />
                            <motion.h4 layoutId='txtHold3'>
                                {language.holSub3}
                            </motion.h4>
                        </motion.div>

                    </div>

                    <div className='d-block d-lg-none'>
                        
                        <div className="accordion" id="accordionExample">

                            {/* itema 1 */}
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" id="headingOne">
                                    <div className='holding-info hld-1'>
                                        <HiBuildingOffice2 className='sector-ico' />
                                        <h4>{language.holSub1}</h4>
                                    </div>
                                </button>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" dangerouslySetInnerHTML={{ __html: holds[0].description }}>
                                    </div>
                                </div>
                            </div>

                            {/* item 2 */}
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" id="headingTwo">
                                    <div className='holding-info hld-1'>
                                        <FaMoneyCheckAlt className='sector-ico' />
                                        <h4>{language.holSub2}</h4>
                                    </div>
                                </button>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" dangerouslySetInnerHTML={{ __html: holds[1].description }}>
                                    </div>
                                </div>
                            </div>

                            {/* item 3 */}
                            <div className="accordion-item">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" id="headingThree">
                                    <div className='holding-info hld-1'>
                                        <SiWebmoney className='sector-ico' />
                                        <h4>{language.holSub3}</h4>
                                    </div>
                                </button>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" dangerouslySetInnerHTML={{ __html: holds[2].description }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Holding