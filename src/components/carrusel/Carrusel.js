import './carrusel.css'
import coctel from './coctel.jpg';
import jugos from './jugosnaturales.jpg';
import pedidos from './pedidos1.jpg';


function Carrusel(){
	return(

   <div id="carouselExampleCaptions" className="carousel slide carrusel" data-bs-ride="carousel" >
		  	<div className="carousel-indicators">
			    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
			    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
			    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
		  	</div>
			<div className="carousel-inner">
				 <div className="carousel-item active">
				     <img src={coctel} className="d-block w-100" alt="..."/>
				       <div className="carousel-caption d-none d-md-block">
				         <h5>PARA LOS FIESTEROS OFRECEMOS LAS BEBIDAS CON LICOR</h5>
				         <p>Disfruta de mágicas mezclas preparadas con tequila, whisky, vodka y más.</p>
				       </div>
			     </div>
	    	     <div className="carousel-item">
		              <img src={jugos} className="d-block w-100" alt="..."/>
		      	        <div className="carousel-caption d-none d-md-block">
		        	      <h5>PARA LOS AVENTUREROS OFRECEMOS BEBIDAS NATURALES</h5>
		        	       <p>Refrescate con la combinación perfecta de frutos tropicales congelados.</p>
	      		        </div>
	    	     </div>
	    	     <div className="carousel-item">
		              <img src={pedidos} className="d-block w-100" alt="..."/>
		      	        <div className="carousel-caption d-none d-md-block">
			              <h5>ESTAMOS DISPONIBLES EN TODO MOMENTO</h5>
			              <p>Puedes realizar tu pedido por Rappi o ifood.</p>
	      		       </div>
	    	     </div>
 	        </div>
		<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
		    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		    <span className="visually-hidden">Previous</span>
		</button>
		<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
		    <span className="carousel-control-next-icon" aria-hidden="true"></span>
		    <span className="visually-hidden">Next</span>
		</button>
    </div>
		);
}
export default Carrusel ;