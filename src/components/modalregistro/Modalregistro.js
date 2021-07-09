import './modalregistro.css';

function Modalregistro(){
	return(

		<div className="modal fade" id="ModalRegistro" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog tamanomodal modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="closeregis" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="row no-gutters">
                  <div className="fondoleft col-md-6 d-flex">
                      <div className="modal-body p-5 img d-flex color1-regis text-center d-flex align-items-center">
                        <div className="text w-100">
                            <span className="icon-2 ion-ios-beer"></span>
                            <h2 className="textcolor1">PENSADO SOLO PARA TI</h2>
                            <h5>Disfruta de contenido exclusivo de Icy Jelly Shot</h5>
                            <div className="icon">
                                <span className="ion-ios-bicycle"></span>
                            </div>
                          </div>
                      </div>
                    </div>

                    <div className="col-md-6 d-flex">
                      <div className="modal-body img align-items-center color2-regis">
                        
                            <div className="textpy-0">
                                <h3 className="mb-4 textregis1">Gratis domicilio en tu primera compra</h3>
                                 <h5 className="textregis2">Bienvenid@,  llena los campos y crea tu cuenta</h5>
                                <form action="#" className="signup-form" name="registform" id="formregistro" noValidate>
                                    <div className="form-group mb-3" id="campoNombre">
                                        <label className="label" for="name">Nombre y Apellido</label>
                                        <input type="text" id="nomregis" className="form-control"placeholder="Nombre y Apellido"/>
                                        <div className="feedbackregis"></div>
                                    </div>
                                    <div className="form-group mb-3" id="campoCorreo">
                                        <label className="label" for="email">Email</label>
                                        <input type="text" id="correoregis" className="form-control" placeholder="ejemplo@gmail.com" />
                                        <div className="feedbackregis"></div>
                                    </div>
                                <div className="form-group mb-3" id="campoClave">
                                    <label className="label" for="password">Contraseña</label>
                                  <input type="text" id="claveregis" className="form-control" placeholder="Contraseña" />
                                  <div className="feedbackregis"></div>
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="form-check w-100 text-left">
                                        <label><input type="checkbox" id="checkregis" value="1" /><a href="terminos.html"> Acepto los términos y condiciones.</a></label>
                                    </div>
                                </div>
                                <div className="botonregis">
                                    <button type="submit" className="btn-regis">Registrarse</button>
                                </div>
                              </form>
                              <div className="soymiem">
                                <a className="enlace" type="button" data-bs-target="#ModalIngreso" data-bs-toggle="modal" data-bs-dismiss="modal">Ya soy miembro</a>
                              </div>
                            </div>
                        
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>


		);

}
export default Modalregistro;
