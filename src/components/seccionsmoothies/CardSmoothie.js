import './CardSmoothie.css';
import ModalSmoothie from '../modalsmoothies/modalsmoothies';


function CardSmoothie(props){

	return(
        <div>
             <div className="imgBx">
                 <img src={props.img} alt="smoothie"/>
              </div>

            <div className="content">
                <h3>{props.title}</h3>
                <p>{props.parrafo}</p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${props.id}`}>Más detalles</button> 
            </div>
            
    <ModalSmoothie  pms1={`id${props.id}`} pms2={props.title} pms3={props.img} pms4={props.acerca} pms5={props.icono1} pms6={props.icono2} pms7={props.icono3} pms8={props.iconop1} pms9={props.iconop2} pms10={props.iconop3} pms11={props.iconop4} pms12={props.iconop5} pms13={props.iconop6}/>
               
               
        </div>
       
        

		);
}

export default CardSmoothie;