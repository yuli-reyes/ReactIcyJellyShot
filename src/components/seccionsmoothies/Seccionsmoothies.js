import {smoothies} from './Smoothie.json';
import CardSmoothie from './CardSmoothie';



function Seccionsmoothies(){
	return(
         <div>
            <div className="cajajugos">
                <h1 className="titulobebida">PARA AVENTUREROS - SMOOTHIES</h1>
                <h5 className="infococtel">Pasa el cursor por alguno de los smoothies y descúbrelos</h5>
            </div>
            <div className="container">
                <div className="cajacatalogo2 mt-4">
                    <div className="row">   
                        
                       {
							smoothies.map(cardsmo=>(
								<div className="card col-lg-3 col-sm-6 mb-4 mt-4 text-center" key={cardsmo.id}>
									<CardSmoothie id={cardsmo.id} img={cardsmo.img} title={cardsmo.title}  parrafo={cardsmo.descripcion} icono1={cardsmo.icon1} icono2={cardsmo.icon2} icono3={cardsmo.icon3} acerca={cardsmo.descri} iconop1={cardsmo.iconp1} iconop2={cardsmo.iconp2} iconop3={cardsmo.iconp3} iconop4={cardsmo.iconp4} iconop5={cardsmo.iconp5} iconop6={cardsmo.iconp6}/>

								</div>

								))

						} 


                    </div>
                </div>
            </div>
         
         </div>
		

		);

}

export default Seccionsmoothies;