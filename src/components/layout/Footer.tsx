import { Droplets, Mail, Phone } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center gap-2 mb-4">
							<div className="bg-gradient-to-br from-primary-400 to-primary-600 p-2 rounded-xl">
								<Droplets className="w-6 h-6 text-white" />
							</div>
							<span className="text-xl font-bold text-white">
								Grupo Arco Energy
							</span>
						</div>
						<p className="text-slate-400 max-w-sm">
							Soluciones integrales para la industria petrolera. Compromiso, calidad y eficiencia en cada proyecto.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
						<ul className="space-y-2">
							<li><a href="#inicio" className="hover:text-primary-400 transition-colors">Inicio</a></li>
							<li><a href="#servicios" className="hover:text-primary-400 transition-colors">Servicios</a></li>
							<li><a href="#nosotros" className="hover:text-primary-400 transition-colors">Nosotros</a></li>
							<li><a href="#contacto" className="hover:text-primary-400 transition-colors">Contacto</a></li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
						<ul className="space-y-3">
							<li className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-primary-500 shrink-0" />
								<span>(+52) 782-126-93-14</span>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-primary-500 shrink-0" />
								<span>ventas@grupoarcoenergy.com.mx</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
					<p>&copy; {new Date().getFullYear()} Grupo Arco Energy. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	);
}
