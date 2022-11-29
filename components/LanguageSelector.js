import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageProvider';
import { MdLanguage } from 'react-icons/md';


const getLocal = () => localStorage.getItem("idioma") || 'en';


export default function LanguageSelector() {

    const { dispatch } = useContext(LanguageContext)
    const [idioma, setIdioma] = useState("en")

    useEffect(() => {
        setIdioma(getLocal())
    }, [])

    useEffect(() => {
        dispatch({ type: idioma })
    }, [idioma])

    const setLocalStorage = ( value ) => {
        dispatch({ type: value })
        localStorage.setItem('idioma', value)
        console.log(value);
    }


    return (
        <>

            <div className="btn-group">
                <MdLanguage className="dropdown-toggle mx-3 mb-3 mt-2" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                style={{color: "white", fontSize: "25px"}} />
                <ul className="dropdown-menu dm2">
                    <li><a className="dropdown-item" href="#" onClick={( target ) => setLocalStorage('en')}>English</a></li>
                    <li><a className="dropdown-item" href="#" onClick={( target ) => setLocalStorage('es')}>Spanish</a></li>
                </ul>
            </div>

        </>
    );
};