import { motion } from 'framer-motion';
import { Target, Award } from 'lucide-react';
import aboutImg from '../assets/about.jpeg';

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
							Grupo Arco Energy es una empresa de servicios y suministros industriales dedicada a proporcionar soluciones integrales a lo largo de la cadena de valor del sector energético. Nuestro enfoque prioritario es la seguridad, la eficiencia operativa y la confiabilidad, apoyando el desarrollo de proyectos upstream y downstream mediante tecnología de vanguardia y personal altamente capacitado.
						</p>
						<p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
							Nuestra estrategia se alinea con los estándares globales del desarrollo energético, garantizando operaciones responsables que impulsan la soberanía energética y la rentabilidad de nuestros clientes.
						</p>

						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="bg-primary-100 dark:bg-slate-800 p-3 rounded-lg text-primary-600 dark:text-primary-500 shrink-0">
									<Target className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Misión</h4>
									<p className="text-slate-600 dark:text-slate-400">Brindar servicios de ingeniería y mantenimiento industrial de alta calidad que superen las expectativas de nuestros clientes, operando bajo los más estrictos estándares de seguridad y respeto al medio ambiente.</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="bg-primary-100 dark:bg-slate-800 p-3 rounded-lg text-primary-600 dark:text-primary-500 shrink-0">
									<Award className="w-6 h-6" />
								</div>
								<div>
									<h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Visión</h4>
									<p className="text-slate-600 dark:text-slate-400">Ser el aliado estratégico preferente en el sector energético industrial, reconocidos por nuestra innovación tecnológica, capacidad de resolución de problemas y compromiso con la continuidad operativa.</p>
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
						<div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800 group">
							<img
								src={aboutImg}
								alt="Equipo Grupo Arco Energy"
								className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
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
