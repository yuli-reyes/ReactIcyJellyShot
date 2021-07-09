import './cardcocteles.css';
import Modalcocteles from '../modalcocteles/Modalcocteles';

function Cardcocteles(props){

	return(
       
      <div>
			<div className="imgBx">
	           	<img src={props.imgcoc} alt="cóctel" />
	        </div>
	        <div className="content">
		        <h3 className="subtitulom">{props.titulococ}</h3>
		        <p>{props.parrafo}</p>
		        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${props.id}`}>Más detalles</button>                      
	        </div>
	       <Modalcocteles pm1={`id${props.id}`} pm2={props.titulococ} pm3={props.imgcoc} pm4={props.acerca} pm5={props.icono1} pm6={props.icono2} pm7={props.icono3} pm8={props.iconop1}
	       pm9={props.iconop2} pm10={props.iconop3} pm11={props.iconop4} pm12={props.iconop5} pm13={props.iconop6} pm14={props.iconop7}/>
      </div>


		);
}

export default Cardcocteles;