import './cardcoctelmes.css';
import Cardcoctelmes from'./Cardcoctelmes';
import imgfruta from './imagenes/limones.jpg';
import imgapariencia from './imagenes/bluelemon.jpg';
import imglicor from './imagenes/jack-daniels.jpg';
import iconfruta from './imagenes/icon-orange.png';
import iconapariencia from './imagenes/icon-ice.png';
import iconlicor from './imagenes/icon-licor.png';

const infocards=[
{
	id:1,
	img:imgfruta,
	icon:iconfruta,
	title:'FRUTAS',
	list1:'Limón',
	list2:'Fresas',
	list3:'Cerezas',
	list:true

},

{
	id:2,
	img:imgapariencia,
	icon: iconapariencia,
	title:'APARIENCIA',
	desc:'Llamativo cóctel color azul intenso, con aroma a Hierbabuena sabor fuerte y amargo, pero con un toque refrescante.',
	list:false
},
{
	id:3,
	img: imglicor,
	icon:iconlicor,
	title:'LICORES',
	list1:'Triple Seco',
	list2:'Whisky',
	list3:'Vodka',
	list:true
},



]


function Seccioncoctelmes(){
	return(

		<section className="py-5">
			<article id="coctelmes">
				<div className="container">
						<h1 className="mb-2">CÓCTEL DEL MES</h1>
						<h2>BLUE LEMON</h2>
						<div className="row">
						{
							infocards.map(card=>(
								<div className="col-lg-4 col-sm-6 mb-4" key={card.id}>
									<Cardcoctelmes imgcard={card.img} titulocard={card.title} iconocard={card.icon} parrafo={card.desc} desc1={card.list1} desc2={card.list2} desc3={card.list3} list={card.list} />

								</div>

								))

						}
						</div>

				</div>
			</article>
		</section>

		);

}

export default Seccioncoctelmes;
