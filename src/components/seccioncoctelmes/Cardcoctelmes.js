import './cardcoctelmes.css';


function Cardcoctelmes(props){

	return(

		<div className="cardmes h-100">
           	<img className="card-img-top" src={props.imgcard} alt="..." />
           	<div className="card-body">
	           	<h5 className="card-title"><img className="icon1" src={props.iconocard} />{props.titulocard}</h5>
	           	{props.list&&
	           		<ul>
	           			<li>{props.desc1}</li>
	           			<li>{props.desc2}</li>
	           			<li>{props.desc3}</li>
	           		</ul>
	           	||
	           	<p className="card-text">{props.parrafo}</p>
	           	}

	       </div>
        </div>

		);
}

export default Cardcoctelmes;
