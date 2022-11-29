import React, { useState } from 'react'

const User = () => {

    const [page, setPage] = useState("info")

    return (
        <>
            {/* MODAL CREATE USER */}
            {/* <div class="modal fade" id="modalUser" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="fs-5" id="modalLabel">Detalle de los pagos de Usuario Apellido</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" >
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn-yellow" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div> */}


            {page === "info" ?
                <>
                    <div className='d-flex'>
                        <h2>Inversionista</h2>
                        <button type="button" className='btn-yellow ms-auto' onClick={() => setPage("createUser")}>
                            Crear inversionista
                        </button>
                    </div>
                    <div class="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Correo</th>
                                    <th scope="col">Documento</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Usuario 1</td>
                                    <td>usuario@gmail.com</td>
                                    <td>1.234.567</td>
                                    <td>activo</td>
                                    <td>
                                        <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalUser">
                                            Actualizar
                                        </button>
                                        <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalUser">
                                            Deshabilitar
                                        </button>
                                        <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalUser">
                                            Reset password
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Usuario 1</td>
                                    <td>usuario@gmail.com</td>
                                    <td>1.234.567</td>
                                    <td>activo</td>
                                    <td>
                                        <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalUser">
                                            Actualizar
                                        </button>
                                        <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalUser">
                                            Deshabilitar
                                        </button>
                                        <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalUser">
                                            Reset password
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Usuario 1</td>
                                    <td>usuario@gmail.com</td>
                                    <td>1.234.567</td>
                                    <td>activo</td>
                                    <td>
                                        <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalUser">
                                            Actualizar
                                        </button>
                                        <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalUser">
                                            Deshabilitar
                                        </button>
                                        <button type="button" className='btn-secondary' data-bs-toggle="modal" data-bs-target="#modalUser">
                                            Reset password
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </>

                :

                <>
                    <div className='d-flex'>
                        <h2>Crear usuario</h2>
                        <button type="button" className='btn-yellow ms-auto' onClick={() => setPage("info")}>
                            Cancelar
                        </button>
                    </div>
                    <form>
                        <div class="mb-3">
                            <label for="nombre" class="col-form-label">Nombre Completo:</label>
                            <input type="text" class="form-control" id="nombre" />
                        </div>
                        <div class="mb-3">
                            <label for="correo" class="col-form-label">Correo:</label>
                            <input type="text" class="form-control" id="correo" />
                        </div>
                        <div class="mb-3">
                            <label for="telefono" class="col-form-label">Telefono:</label>
                            <input type="text" class="form-control" id="telefono" />
                        </div>
                        <div class="mb-3">
                            <label for="tipoDocumento" class="col-form-label">Tipo documento:</label>
                            <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                <option value="1">CC</option>
                                <option value="2">Pasaporte</option>
                                <option value="3">DNI</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="numeroDocumento" class="col-form-label">Número documento:</label>
                            <input type="text" class="form-control" id="numeroDocumento" />
                        </div>
                        <div class="mb-3">
                            <label for="documentoFoto" class="col-form-label">Documento</label>
                            <input type="file" class="form-control" id="documentoFoto" />
                        </div>
                        <div class="mb-3">
                            <label for="numeroRut" class="col-form-label">Número RUT:</label>
                            <input type="text" class="form-control" id="numeroRut" />
                        </div>
                        <div class="mb-3">
                            <label for="RUT" class="col-form-label">RUT</label>
                            <input type="file" class="form-control" id="RUT" />
                        </div>
                        <button type="button" className='btn-yellow ms-auto'>
                            Crear usuario
                        </button>
                    </form>
                </>

            }



        </>
    )
}

export default User