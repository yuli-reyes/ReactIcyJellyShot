import Error from './Pagina-Error.png';
import Nav from '../../components/nav/Nav';

function Error404() {
	return(
		<div>
			<Nav />
			<div className="col-12">
				<div className="fondoerror text-center mt-3">
					<h2 className="tituloerror col-12" >Página No Encontrada</h2>
					<img src={Error} className="imgerror col-12"  />
				</div>
			</div>
		</div>
		);

}
export default Error404;
