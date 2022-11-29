import React from 'react'
import { Layout } from '../../components/Layout'


const investments = () => {
    return (

        <Layout>

            <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="fs-5" id="modalLabel">Detalle de los pagos de Usuario Apellido</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" >
                            <p className='my-0' style={{fontSize: "16px"}}><b>Valor invertido: </b> $50 usd</p>
                            <p className='my-0' style={{fontSize: "16px"}}><b>Porcentaje: </b> 20%</p>
                            <p className='my-0' style={{fontSize: "16px"}}><b>Ganancias obtenidas: </b> $60 usd</p>
                            <p className='my-0' style={{fontSize: "16px"}}><b>Pagos entregados: </b> 2</p>

                            {/* MODAL DETAILS */}

                            <div class="table-responsive mt-3">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Valor</th>
                                            <th scope="col">Mes</th>
                                            <th scope="col">Año</th>
                                            <th scope="col">Fecha de registro</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>$10 usd</td>
                                            <td>11</td>
                                            <td>2023</td>
                                            <td>2023-01-01</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>$10 usd</td>
                                            <td>10</td>
                                            <td>2023</td>
                                            <td>2023-01-01</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn-yellow" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-texture'>
                <section className='bg-city'>
                    <div className="container py-100 text-center">

                        <h2>Bienvenido</h2>
                        <p className='my-5'>
                            Aquí podrás encontrar el listado de todas tus inversiones
                        </p>

                        {/* TABLE */}

                        <div class="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Valor invertido</th>
                                        <th scope="col">Porcentaje</th>
                                        <th scope="col">Tiempo(meses)</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Inicio</th>
                                        <th scope="col">Fin</th>
                                        <th scope="col">Detalle</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1000 USD</td>
                                        <td>15%</td>
                                        <td>6</td>
                                        <td>Activo</td>
                                        <td>01/01/2023</td>
                                        <td>01/01/2024</td>
                                        <td>
                                            <button type="button" className='btn-yellow' data-bs-toggle="modal" data-bs-target="#modal">
                                                Detalle
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>1000 USD</td>
                                        <td>15%</td>
                                        <td>6</td>
                                        <td>Activo</td>
                                        <td>01/01/2023</td>
                                        <td>01/01/2024</td>
                                        <td>
                                            <button type="button" className='btn-yellow' data-bs-toggle="modal" data-bs-target="#modal">
                                                Detalle
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>1000 USD</td>
                                        <td>15%</td>
                                        <td>6</td>
                                        <td>Activo</td>
                                        <td>01/01/2023</td>
                                        <td>01/01/2024</td>
                                        <td>
                                            <button type="button" className='btn-yellow' data-bs-toggle="modal" data-bs-target="#modal">
                                                Detalle
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default investments