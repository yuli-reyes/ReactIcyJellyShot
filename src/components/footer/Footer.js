import './footer.css';
import logoface from './imagenes/icon-face.png';
import instagram from './imagenes/icon-instagram.png';
import tiktok from './imagenes/icontik-tok.png';
import nequi from './imagenes/icon-nequi.png';
import daviplata from './imagenes/icon-daviplata.png';
import maestro from './imagenes/icon-maestro.png';
import mastercard from './imagenes/icon-mastercard.png';
import whatsapp from './imagenes/whatsapp.png';

function Footer(){
	return(
	<div>
		<section id="cajaredsocial">
	            <div className="fondoredes">
	                <div className="row">
	                    <div className="inforedes">
	                            <h5>Síguenos en nuestras redes sociales</h5>
	                            <div>
	                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img className="iconosocial" src={logoface} alt="pagina facebook"/></a>
	                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img className="iconosocial" src={instagram} alt="pagina instagram" /></a>
	                                <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><img className="iconosocial" src={tiktok} alt="pagina tiktok" /></a>
	                                <a href="https://api.whatsapp.com/send?phone=3194347377" target="_blank" rel="noopener noreferrer"><img className="iconosocial" src={whatsapp} alt="pagina whatsapp" /></a>
	                            </div>
	                   </div>
	              </div>

	              <div className="row mt-4">
	                    <div className="iconospago">
	                            <div>
	                                <img src={nequi} alt="icono de nequi"/>
	                                <img src={daviplata} alt="icono de daviplata"/>
	                                <img src={maestro} alt="icono de tarjeta maestro" />
	                                <img src={mastercard} alt="icono de mastercad" />	                                
	                            </div>
	                   </div>
	              </div>
	            
	              <div>
	                  <div className="row">
	                      	<ul className="menu">
	                            <li><a href="#">Aviso de privacidad</a></li>
	                            <li><a href="#">Términos y condiciones</a></li>
	                            <li><a href="#">Políticas de entrega</a></li>
	       					</ul>
	                  </div>
	              </div>

	 
	           </div>
	            
	    </section>
	        <footer>
	            <div className="container">
	                <p className="m-0 py-3 text-center text-white">&copy; 2021 Icy Jelly Shot Company, reservados todos los derechos. </p>
	            </div>
        	</footer>
	</div>
		);
}

export default Footer;
