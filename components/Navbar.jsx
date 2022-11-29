import Head from 'next/head'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk, logoutThunk, authenticationThunk } from './../redux/thunk/authThunk'
import React, { useContext, useEffect, useState } from 'react'
import LanguageSelector from '../components/LanguageSelector';
import { LanguageContext } from '../context/LanguageProvider';


const Navbar = () => {

    return (
        <>
            <Head>
                <title>Financial AXES</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                />
            </Head>

            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container">
                    <Link href='/' className='my-2'>
                        <img src="/img/icono.svg" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item">
                                <Link href='/' className='nav-link active text-light mx-3'>
                                    {language.nav1}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/company' className='nav-link text-light mx-3'>
                                    {language.nav2}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='/contact' className='nav-link text-light mx-3'>
                                    {language.nav3}
                                </Link>
                            </li>
                        </ul>
                        <LanguageSelector />
                        <div className="dropdown-center">
                                        <button type="button" className="btn-yellow dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                            {language.login}
                                        </button>
                                        <form className="dropdown-menu dropdown-menu-end p-4" onSubmit={(e) => onsubmit(e)}>
                                            <div className="mb-3">
                                                <label htmlFor="textForm" className="form-label">{language.logMail}</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="textForm"
                                                    autoComplete='off'
                                                    value={user.document}
                                                    onChange={(e) => setUser({ ...user, document: e.target.value })}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="passwordForm" className="form-label">{language.logPass}</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="passwordForm"
                                                    autoComplete='off'
                                                    value={user.password}
                                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                                                    <label className="form-check-label" htmlFor="dropdownCheck2">
                                                        {language.logRem}
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn-yellow">{language.logSign}</button>
                                        </form>
                                   




                        </div>
                    </div>


                </div>
            </nav>
        </>
    )
}

export default Navbar