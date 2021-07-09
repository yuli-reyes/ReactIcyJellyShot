import './seccionquienes.css';
import imgquienes from './imgquienes.jpg'

function Seccionquienes(){ return(
  <div>
      <div className="container py-5">
                <div className="row">
                    <div className="cajaquienes col-12 col-md-6">
                        <h1 className="mb-4">QUIÉNES SOMOS</h1>
                        <p>Somos  <strong>Icy  Jelly Shot </strong>trabajamos por la calidad de nuestras 
                           bebidas congeladas elaboradas para todos los gustos. Contamos con dos alternativas, 
                           una para los amantes de lo natural y refrescante, y la otra para los fanáticos 
                           fiesteros que combina lo dulce y lo ácido entre frutas y golosinas con un toque de 
                           licor al gusto.<br/><br/>
                           Brindamos una experiencia única, ofrecemos el acompañante ideal para cualquier 
                           ocasión.
                        </p>
                    </div>                    
                       <div className="col-12 col-md-6"><img className="img-fluid rounded" src={imgquienes} alt="imagenQuienesSomos" />
                    </div>

                </div>
        </div>
  
  </div> 

 )
}
 export default Seccionquienes;