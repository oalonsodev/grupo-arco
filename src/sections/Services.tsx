import { motion } from 'framer-motion';
import {
	Settings,
	Truck,
	Wrench,
	ClipboardCheck,
	Layers,
	Package,
	Filter,
	Disc,
	Droplets
} from 'lucide-react';

const services = [
	{
		icon: <Settings className="w-8 h-8" />,
		title: "Maquinado Industrial",
		description: "Maquinaria metalmecánica especializada y personal calificado para mecanizado de precisión con altos estándares."
	},
	{
		icon: <ClipboardCheck className="w-8 h-8" />,
		title: "Servicio de Inspección",
		description: "Inspección bajo estándares de calidad y seguridad aplicables a la industria petrolera y de perforación."
	},
	{
		icon: <Truck className="w-8 h-8" />,
		title: "Transporte y Logística",
		description: "Solución integral en logística y transporte con equipo propio, personal capacitado y compromiso con la seguridad."
	},
	{
		icon: <Layers className="w-8 h-8" />,
		title: "Geomembranas y Geosintéticos",
		description: "Instalación, suministro y mantenimiento de geomembranas y geosintéticos con personal y equipos especializados."
	},
	{
		icon: <Wrench className="w-8 h-8" />,
		title: "Venta y Renta de Herramientas",
		description: "Soluciones integrales mediante suministro y renta de herramientas de perforación con altos estándares de calidad."
	},
	{
		icon: <Package className="w-8 h-8" />,
		title: "Venta de Tubería de Revestimiento",
		description: "Comercialización de tubería de revestimiento (TR) en diversas medidas y grados bajo estándares internacionales."
	},
	{
		icon: <Disc className="w-8 h-8" />,
		title: "Venta de Tubería de Perforación",
		description: "Tuberías de perforación certificadas que aseguran desempeño mecánico y confiabilidad estructural en campo."
	},
	{
		icon: <Droplets className="w-8 h-8" />,
		title: "Venta de Mangueras de Alta Presión",
		description: "Suministro de mangueras certificadas para procesos críticos de perforación, cementación y control de pozos."
	},
	{
		icon: <Filter className="w-8 h-8" />,
		title: "Equipo de Control de Sólidos",
		description: "Equipos certificados para optimizar el lodo, reducir costos y garantizar operaciones seguras en perforación."
	}
];

export default function Services() {
	return (
		<section id="servicios" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase mb-3"
					>
						Nuestros Servicios
					</motion.h2>
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
					>
						Soluciones Integrales de Alto Nivel
					</motion.h3>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-slate-600 dark:text-slate-400 text-lg"
					>
						Ofrecemos una amplia gama de servicios diseñados para satisfacer las necesidades específicas de la industria petrolera moderna.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800 transition-all hover:-translate-y-1"
						>
							<div className="w-14 h-14 bg-primary-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-500 mb-6 group-hover:scale-110 transition-transform duration-300">
								{service.icon}
							</div>
							<h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
								{service.title}
							</h4>
							<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
								{service.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
