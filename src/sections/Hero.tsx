import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

import hero1 from '../assets/hero-1.jpeg';
import hero2 from '../assets/hero-2.jpeg';
import hero3 from '../assets/hero-3.jpeg';

const heroImages = [hero1, hero2, hero3];

export default function Hero() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
		}, 8000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
			{/* Background Images */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/30 z-10" />
				<AnimatePresence mode="popLayout">
					<motion.img
						key={currentImageIndex}
						src={heroImages[currentImageIndex]}
						alt="Hero Background"
						initial={{ opacity: 0, scale: 1.1 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1.5, ease: "easeInOut" }}
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</AnimatePresence>
			</div>

			<div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
				<div className="max-w-3xl">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-primary-500 font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">
							Líderes en el Sector Energético
						</h2>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
							Innovación y Eficiencia para el <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Futuro Petrolero</span>
						</h1>
						<p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
							En Grupo Arco Energy transformamos desafíos en soluciones. Brindamos servicios integrales de ingeniería, mantenimiento y logística con los más altos estándares de calidad y seguridad.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href="#contacto"
								className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary-900/20"
							>
								Contáctanos
								<ArrowRight className="w-5 h-5" />
							</a>
							<a
								href="#servicios"
								className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold transition-all flex items-center justify-center"
							>
								Nuestros Servicios
							</a>
						</div>
					</motion.div>
				</div>
			</div>

			<motion.div
				className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20 animate-bounce"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1 }}
			>
				<ChevronDown size={32} />
			</motion.div>
		</section>
	);
}
