import Script from 'next/script'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


export const Layout = ({ children }) => {
    return (
        <>
            <Script>
                {`
                    (function (w, d, s, u, f, m, n, o) { 
                        o = 'https://survey.zohopublic.com'; 
                        w[f] = w[f] || function () { 
                            (w[f].p = w[f].p || []).push(arguments); 
                        }; 
                        m = d.createElement(s), n = d.getElementsByTagName(s)[0]; 
                        m.async = 1; 
                        m.src = o + u; 
                        n.parentNode.insertBefore(m, n); 
                        zs_intercept(o, 'TwCsLw', { "displayPeriod": 3, "pageScrollAmount": 50 }); 
                    })
                    (window, document, 'script', '/api/v1/public/livesurveys/TwCsLw/popup/script', 'zs_intercept');

               ` }
            </Script>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

