import React from 'react'

const Investments = () => {
    return (

        <>

            {/* MODAL CREATE INVESTMENTS */}
            <div class="modal fade" id="modalInvest" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="fs-5" id="modalLabel">Inversión para el usuario UsuarioNombre</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" >

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn-yellow" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex'>
                <h2>Inversiones</h2>
                <button type="button" className='btn-yellow ms-auto' data-bs-toggle="modal" data-bs-target="#modalInvest">
                    Crear inversión
                </button>
            </div>

            <div class="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Valor invertido</th>
                            <th scope="col">Porcentaje</th>
                            <th scope="col">Tiempo (meses)</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Fecha de registro</th>
                            <th scope="col">Fecha final</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>Usuario 1</td>
                            <td>$ 50 USD</td>
                            <td>15%</td>
                            <td>6</td>
                            <td>Activo</td>
                            <td>01/01/2023</td>
                            <td>01/01/2024</td>
                            <td>
                                <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalInvest">
                                    Finalizar
                                </button>
                                <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalInvest">
                                    Pagos
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Usuario 1</td>
                            <td>$ 50 USD</td>
                            <td>15%</td>
                            <td>6</td>
                            <td>Activo</td>
                            <td>01/01/2023</td>
                            <td>01/01/2024</td>
                            <td>
                                <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalInvest">
                                    Finalizar
                                </button>
                                <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalInvest">
                                    Pagos
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Usuario 1</td>
                            <td>$ 50 USD</td>
                            <td>15%</td>
                            <td>6</td>
                            <td>Activo</td>
                            <td>01/01/2023</td>
                            <td>01/01/2024</td>
                            <td>
                                <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalInvest">
                                    Finalizar
                                </button>
                                <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalInvest">
                                    Pagos
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Investments