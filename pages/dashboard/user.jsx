import React from 'react'
import Investments from '../../components/Dashboard/Investments'
import User from '../../components/Dashboard/User'
import { Layout } from '../../components/Layout'


const user = () => {
    return (

        <Layout>

            {/* BARRA LATERAL */}


            <div className='bg-texture'>
                <section className='bg-city'>
                    <div className="container py-100">


                        <div class="row">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Inversionista</button>
                                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Inversiones</button>
                                </div>
                            </nav>
                        </div>
                        <div className='row mt-5'>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

                                    <User />

                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">

                                    <Investments />

                                </div>
                            </div>
                        </div>

                        {/* TABLE */}




                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default user