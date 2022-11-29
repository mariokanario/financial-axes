import React, { useState, useContext } from 'react'
import { LanguageContext } from '../context/LanguageProvider';
import { motion } from "framer-motion"

const History = () => {

    const { language } = useContext(LanguageContext)


    const infos = [
        {
            id: 1,
            year: "2019",
            title: language.hisSubt1,
            description: language.hisTxt1
        },
        {
            id: 2,
            year: "2020",
            title: language.hisSubt2,
            description: language.hisTxt2
        },
        {
            id: 3,
            year: "2021",
            title: language.hisSubt3,
            description: language.hisTxt3
        },
        {
            id: 4,
            year: "2022",
            title: language.hisSubt4,
            description: language.hisTxt4
        },
        {
            id: 5,
            year: "2023",
            title: language.hisSubt5,
            description: language.hisTxt5
        },
    ]

    const [item, setItem] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <section className='bg-map py-100'>
                <div className="container">
                    <h2 className='text-light text-center'>{language.tittleHis}</h2>
                    <p className='py-5 text-light text-center'>
                        {language.hisTxt0}
                    </p>

                    <div className='position-relative px-3'>

                        {/* visible en escritorio */}

                        {/* MODAL */}

                        {
                            isOpen && (
                                <div className="layout-modal" onClick={() => setIsOpen(!isOpen)}>
                                    <motion.div
                                        layoutId={`motion${item.id}`}
                                        className='date-modal shadow-lg '
                                    >
                                        <button className='close-modal'>X</button>
                                        <h6 className='fw-bold'>
                                            {item.year} - {item.title}
                                        </h6>
                                        <div dangerouslySetInnerHTML={{ __html: item.description }} >

                                        </div>
                                    </motion.div>
                                </div>
                            )
                        }

                        <article className='d-flex justify-content-between align-items-end'>

                            <div className='date'>
                                <p className='text-center text-light fw-bold' style={{ fontSize: "18px" }}>
                                    {language.hisSubt1}
                                </p>
                                <motion.div className='date-dot-circle' layoutId='motion1' onClick={() => {
                                    setItem(infos.find(info => info.id === 1))
                                    setIsOpen(true)
                                }}
                                >
                                    <div className='date-circle d-flex justify-content-center align-items-center fw-bold'>
                                        2019
                                    </div>
                                </motion.div>
                                <hr className='hr-date' />
                            </div>

                            <div className='date'>
                                <p className='text-center text-light fw-bold' style={{ fontSize: "18px" }}>
                                    {language.hisSubt3}
                                </p>
                                <motion.div className='date-dot-circle' layoutId='motion3' onClick={() => {
                                    setItem(infos.find(info => info.id === 3))
                                    setIsOpen(true)
                                }}
                                >
                                    <div
                                        className='date-circle d-flex justify-content-center align-items-center fw-bold'>
                                        2021

                                    </div>
                                </motion.div>
                                <hr className='hr-date' />
                            </div>

                            <div className='date'>
                                <p className='text-center text-light fw-bold' style={{ fontSize: "18px" }}>
                                    {language.hisSubt5}
                                </p>
                                <motion.div className='date-dot-circle' layoutId='motion5' onClick={() => {
                                    setItem(infos.find(info => info.id === 5))
                                    setIsOpen(true)
                                }}
                                >
                                    <div
                                        className='date-circle d-flex justify-content-center align-items-center fw-bold'>
                                        2023

                                    </div>
                                </motion.div>
                                <hr className='hr-date' />
                            </div>

                        </article>

                        <hr className='hr-white m-0' />

                        <article className='d-flex justify-content-evenly'>

                            <div className='date'>
                                <hr className='hr-date' />
                                <motion.div className='date-dot-circle' layoutId='motion2' onClick={() => {
                                    setItem(infos.find(info => info.id === 2))
                                    setIsOpen(true)
                                }}
                                >
                                    <div
                                        className='date-circle d-flex justify-content-center align-items-center fw-bold'>
                                        2020

                                    </div>
                                </motion.div>
                                <p className='text-center text-light fw-bold' style={{ fontSize: "18px" }}>
                                    {language.hisSubt2}
                                </p>
                            </div>

                            <div className='date'>
                                <hr className='hr-date' />
                                <motion.div className='date-dot-circle' layoutId='motion4' onClick={() => {
                                    setItem(infos.find(info => info.id === 4))
                                    setIsOpen(true)
                                }}
                                >
                                    <div
                                        className='date-circle d-flex justify-content-center align-items-center fw-bold'>
                                        2022

                                    </div>
                                </motion.div>
                                <p className='text-center text-light fw-bold' style={{ fontSize: "18px" }}>
                                    {language.hisSubt4}
                                </p>

                            </div>

                        </article>

                    </div>


                    {/* visible en celular */}
                    {/* <div className=''>
                        <article className='d-flex flex-column align-items-center'>

                            

                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <div className='date w-100 accordion-header' id="headingOne">
                                        <p className='text-center text-light fw-bold' style={{ fontSize: "18px" }}>La creación del Holding Empresarial</p>
                                        <div className='accordion-button' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <div className='date-circle d-flex justify-content-center align-items-center fw-bold'>2019</div>
                                        </div>
                                    </div>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className=' '>
                                            <button className='close-modal'>X</button>
                                            <p className='fw-bold'> 2022 - Este es el título </p>
                                            <div > Este es el texto </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='date w-100'>
                                <p className='text-center text-light fw-bold' style={{ fontSize: "18px" }}>La creación del Holding Empresarial</p>
                                <div className='date-dot-circle'>
                                    <div className='date-circle d-flex justify-content-center align-items-center fw-bold'>2019</div>
                                </div>
                            </div>

                            <div className='date w-100 mt-4'>
                                <p className='text-center text-light fw-bold' style={{ fontSize: "18px" }}>El nacimiento de INTRADERS UK</p>
                                <div className='date-dot-circle'>
                                    <div className='date-circle d-flex justify-content-center align-items-center fw-bold'>2020</div>
                                </div>
                            </div>

                            <div className='date w-100 mt-4'>
                                <p className='text-center text-light fw-bold' style={{ fontSize: "18px" }}>Gestionando Capitales y Financiando Startups</p>
                                <div className='date-dot-circle'>
                                    <div className='date-circle d-flex justify-content-center align-items-center fw-bold'>2021</div>
                                </div>
                            </div>

                            <div className='date w-100 mt-4'>
                                <p className='text-center text-light fw-bold' style={{ fontSize: "18px" }}>Nuevas Soluciones y Nuevas Alianzas</p>
                                <div className='date-dot-circle'>
                                    <div className='date-circle d-flex justify-content-center align-items-center fw-bold'>2022</div>
                                </div>
                            </div>

                            <div className='date w-100 mt-4'>
                                <p className='text-center text-light fw-bold' style={{ fontSize: "18px" }}>Un futuro para consolidar Finanzas para la Vida</p>
                                <div className='date-dot-circle'>
                                    <div className='date-circle d-flex justify-content-center align-items-center fw-bold'>2023</div>
                                </div>
                            </div>

                        </article>

                    </div> */}

                </div>
            </section>

        </>
    )
}

export default History