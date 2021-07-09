import './modalcocteles.css';

function ModalCocteles(props){
  return(

 <div className="modal" id={props.pm1} tabIndex={-1}> 
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
             <div className="modal-header">
                   <h1 className="tmodal">{props.pm2}</h1>
                   <button type="button" className="x btn-close" id="botoncerrar" data-bs-dismiss="modal" aria-label="Close"></button> 
             </div>
             <div className="modal-body">
                <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-12">
                    
                        <div className="row">
                          <div className="imagen-g col-sm-6 col-md-6 col-lg-6">
                             <img src={props.pm3} width="250px" alt="imagen de coctel"/>
                          </div>
                          <div className="texticon col-sm-6 col-md-6 col-lg-6">
                                <h3 className="subtitulom">Descripción</h3>
                                <p className="pmodal">{props.pm4}</p>
                              <div className="modal-iconos row">
                            
                                    <div className="iconos-m col-sm-12 col-md-4 col-lg-4"> 
                                        <img src={props.pm5} alt="icono burbujas de porcentaje de alcohol y tamaño del coctel"/>
                                        <h5>{props.pm8}</h5>
                                        <h5>{props.pm9}</h5>
                                    </div>

                                    <div className="iconos-m col-sm-12 col-md-4 col-lg-4"> 
                                        <img src={props.pm6} alt="icono de frutas"/>
                                        <h5>{props.pm10}</h5>
                                        <h5>{props.pm11}</h5>
                                        <h5>{props.pm14}</h5>

                                    </div>

                                    <div className="iconos-m col-sm-12 col-md-4 col-lg-4"> 
                                        <img src={props.pm7} alt="icono de un más que define los agregados" />
                                        <h5>{props.pm12}</h5>
                                        <h5>{props.pm13}</h5>
                                    </div>
                            </div>   
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                 <button type="button" className="btn btn-cocteles" data-bs-dismiss="modal">Cerrar</button>
                 <button type="button" className="btn btn-cocteles"><a href="#">Haz tu pedido</a></button>
            </div>
      </div>
  </div>
</div>



    );

}
export default ModalCocteles ;