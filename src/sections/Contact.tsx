import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
	return (
		<section id="contacto" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase mb-3"
					>
						Contáctanos
					</motion.h2>
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
					>
						Estamos listos para colaborar
					</motion.h3>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-slate-600 dark:text-slate-400 text-lg"
					>
						Cuéntanos sobre tu proyecto. Nuestro equipo técnico se pondrá en contacto contigo a la brevedad.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="space-y-8"
					>
						<div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
							<h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Información de Contacto</h4>

							<div className="space-y-6">
								<a href="#" className="flex items-start gap-4 group">
									<div className="bg-primary-50 dark:bg-slate-800 p-3 rounded-lg text-primary-600 dark:text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-colors">
										<MapPin className="w-6 h-6" />
									</div>
									<div>
										<h5 className="font-semibold text-slate-900 dark:text-white mb-1">Ubicación</h5>
										<p className="text-slate-600 dark:text-slate-400">Av. Principal #123, CP 86000<br />Villahermosa, Tabasco, México</p>
									</div>
								</a>

								<a href="tel:+529931234567" className="flex items-start gap-4 group">
									<div className="bg-primary-50 dark:bg-slate-800 p-3 rounded-lg text-primary-600 dark:text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-colors">
										<Phone className="w-6 h-6" />
									</div>
									<div>
										<h5 className="font-semibold text-slate-900 dark:text-white mb-1">Teléfono</h5>
										<p className="text-slate-600 dark:text-slate-400">+52 (993) 123 4567</p>
									</div>
								</a>

								<a href="mailto:contacto@grupoarco.com" className="flex items-start gap-4 group">
									<div className="bg-primary-50 dark:bg-slate-800 p-3 rounded-lg text-primary-600 dark:text-primary-500 group-hover:bg-primary-600 group-hover:text-white transition-colors">
										<Mail className="w-6 h-6" />
									</div>
									<div>
										<h5 className="font-semibold text-slate-900 dark:text-white mb-1">Email</h5>
										<p className="text-slate-600 dark:text-slate-400">contacto@grupoarco.com</p>
									</div>
								</a>
							</div>
						</div>

						<div className="bg-slate-900 p-8 rounded-2xl text-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-bl-full -mr-8 -mt-8"></div>
							<h4 className="text-xl font-bold mb-4 relative z-10">¿Buscas una cotización?</h4>
							<p className="text-slate-300 mb-6 relative z-10">
								Nuestros ingenieros pueden evaluar tus necesidades y proponer la solución más eficiente.
							</p>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4 }}
						className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800"
					>
						<h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Envíanos un mensaje</h4>
						<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Nombre completo</label>
									<input
										type="text"
										id="name"
										className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white transition-all"
										placeholder="Juan Pérez"
									/>
								</div>
								<div className="space-y-2">
									<label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Correo electrónico</label>
									<input
										type="email"
										id="email"
										className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white transition-all"
										placeholder="juan@empresa.com"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Asunto</label>
								<select
									id="subject"
									className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white transition-all"
								>
									<option value="">Selecciona una opción</option>
									<option value="cotizacion">Solicitud de Cotización</option>
									<option value="informacion">Información General</option>
									<option value="empleo">Bolsa de Trabajo</option>
									<option value="otro">Otro</option>
								</select>
							</div>

							<div className="space-y-2">
								<label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Mensaje</label>
								<textarea
									id="message"
									rows={4}
									className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-900 dark:text-white transition-all resize-none"
									placeholder="Describe brevemente cómo podemos ayudarte..."
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
							>
								Enviar Mensaje
								<Send className="w-5 h-5" />
							</button>
						</form>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
