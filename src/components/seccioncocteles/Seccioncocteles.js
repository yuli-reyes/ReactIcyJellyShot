import {cocteles} from '../../components/seccioncocteles/Cocteles.json';
import Cardcocteles from '../../components/seccioncocteles/Cardcocteles';

function Seccioncocteles(){
	return(
      
      <div>
		<section id="banner1">
              <div className="fondobanner">   
              </div>
        </section>

	    <div className="cajatitulo">
	        <h1 className="titulobebida">PARA FIESTEROS - CÓCTELES</h1>
	        <h5 className="infococtel">Pasa el cursor por alguno de los cócteles y descúbrelos</h5>
	    </div>


	   <div className="container">
	           <div className="cajacatalogo">
	               <div className="row">
	                    {
							cocteles.map(coc=>(
								<div className="card col-lg-3 col-sm-6 mb-4 mt-4 text-center" key={coc.id}>

									<Cardcocteles id={coc.id} imgcoc={coc.img} titulococ={coc.title} parrafo={coc.descripcion} icono1={coc.icon1} icono2={coc.icon2} icono3={coc.icon3} acerca={coc.descri} iconop1={coc.iconp1} iconop2={coc.iconp2} iconop3={coc.iconp3} iconop4={coc.iconp4} iconop5={coc.iconp5} iconop6={coc.iconp6} iconop7={coc.iconp7}/>
	                             </div>

							))

						}
	               </div>
	           </div>
	   </div>
    </div>
		);

}

export default Seccioncocteles ;