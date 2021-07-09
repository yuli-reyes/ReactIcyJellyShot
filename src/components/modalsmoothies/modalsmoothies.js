import './modalsmoothies.css';

function ModalSmoothie(props) {
    return (
        <div className="modal" id={props.pms1} tabIndex={-1}> 
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                 <div className="modal-header">
                       <h1 className="tmodal">{props.pms2}</h1>
                       <button type="button" className="x btn-close" id="botoncerrar" data-bs-dismiss="modal" aria-label="Close"></button> 
                 </div>
                 <div className="modal-body">
                    <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-12">

                            <div className="row">
                              <div className="imagen-g col-sm-6 col-md-6 col-lg-6">
                                 <img className="imgmodal" src={props.pms3} width="250px" alt="imagen de smoothie" />
                              </div>
                              <div className="texticon col-sm-6 col-md-6 col-lg-6">
                                    <h3 className="subtitulom">Descripción</h3>
                                    <p className="pmodal">{props.pms4}</p>
                                  <div className="modal-iconos row">
                                
                                        <div className="iconos-m col-sm-12 col-md-4 col-lg-4"> 
                                            <img src={props.pms5} alt="icono de un corazon que representa simbolo de salud"/>
                                            <h5>{props.pms8}</h5>
                                            <h5>{props.pms9}</h5>   
                                        </div>
    
                                        <div className="iconos-m col-sm-12 col-md-4 col-lg-4"> 
                                            <img src={props.pms6} alt="icono de frutas"/>
                                            <h5>{props.pms10}</h5>
                                            <h5>{props.pms11}</h5>
                                            
                                        </div>
    
                                        <div className="iconos-m col-sm-12 col-md-4 col-lg-4"> 
                                            <img src={props.pms7} alt="icono de sumar que representa los agregados"/>
                                            <h5>{props.pms12}</h5>
                                            <h5>{props.pms13}</h5>
                                            
                                        </div>
                                </div>   
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-secondary"><a href="#">Haz tu pedido</a></button>

                </div>
          </div>
      </div>
    </div>

       );

}


export default ModalSmoothie;
