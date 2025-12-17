import { motion } from 'framer-motion';
import { Settings, Truck, Wrench, ShieldCheck, BarChart3, Users } from 'lucide-react';

const services = [
	{
		icon: <Settings className="w-8 h-8" />,
		title: "Ingeniería Especializada",
		description: "Diseño y desarrollo de proyectos de ingeniería conceptual, básica y de detalle para instalaciones petroleras."
	},
	{
		icon: <Wrench className="w-8 h-8" />,
		title: "Mantenimiento Industrial",
		description: "Servicios de mantenimiento preventivo y correctivo a equipos estáticos y rotativos, garantizando la continuidad operativa."
	},
	{
		icon: <Truck className="w-8 h-8" />,
		title: "Logística y Transporte",
		description: "Gestión integral de la cadena de suministro y transporte especializado para material y equipos del sector."
	},
	{
		icon: <ShieldCheck className="w-8 h-8" />,
		title: "Seguridad Industrial",
		description: "Consultoría y supervisión en seguridad industrial, salud ocupacional y protección ambiental (SASOPA)."
	},
	{
		icon: <BarChart3 className="w-8 h-8" />,
		title: "Optimización de Procesos",
		description: "Análisis y mejora de procesos productivos para maximizar la eficiencia y reducir costos operativos."
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: "Consultoría Técnica",
		description: "Asesoramiento experto en normatividad, gestión de activos y mejores prácticas de la industria."
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
