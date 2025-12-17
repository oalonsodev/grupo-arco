import { motion } from 'framer-motion';
import { Target, Award } from 'lucide-react';
import arco4 from '../assets/arco-4.jpeg';

export default function About() {
	return (
		<section id="nosotros" className="py-24 overflow-hidden relative">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase mb-3">
							Sobre Nosotros
						</h2>
						<h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
							Compromiso con la Excelencia Energética
						</h3>
						<p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
							Fundada con la visión de transformar el sector energético, Grupo Arco Energy se ha consolidado como un referente de innovación y calidad. Nuestro equipo multidisciplinario combina décadas de experiencia con tecnología de punta para ofrecer soluciones que superan las expectativas.
						</p>
						<p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
							Nos regimos por estrictos estandares internacionales, priorizando siempre la seguridad de nuestro personal, el cuidado del medio ambiente y la eficiencia operativa de nuestros clientes.
						</p>

						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="bg-primary-100 dark:bg-slate-800 p-3 rounded-lg text-primary-600 dark:text-primary-500 shrink-0">
									<Target className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Misión</h4>
									<p className="text-slate-600 dark:text-slate-400">Proveer servicios integrales de ingeniería y logística que impulsen la productividad del sector petrolero.</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="bg-primary-100 dark:bg-slate-800 p-3 rounded-lg text-primary-600 dark:text-primary-500 shrink-0">
									<Award className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Visión</h4>
									<p className="text-slate-600 dark:text-slate-400">Ser reconocidos globalmente como el socio estratégico preferido por nuestra capacidad técnica y humana.</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Image Content */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						<div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200 dark:bg-slate-800 group">
							<img
								src={arco4}
								alt="Equipo Grupo Arco Energy"
								className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
						</div>

						{/* Decorative elements */}
						<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-500 rounded-xl -z-10 opacity-50"></div>
						<div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-primary-500/30 rounded-full -z-10"></div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
