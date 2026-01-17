import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logo from '../../assets/logo-trans.png';
import { useTheme } from '../../hooks/useTheme';
import { cn } from '../../utils/cn'; // Need to create this utility
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
	{ name: 'Inicio', href: '#inicio' },
	{ name: 'Servicios', href: '#servicios' },
	{ name: 'Nosotros', href: '#nosotros' },
	{ name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
	const { theme, toggleTheme } = useTheme();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<nav
			className={cn(
				'fixed top-0 w-full z-50 transition-all duration-300 border-b',
				isScrolled
					? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200 dark:border-slate-800 py-3'
					: 'bg-transparent border-transparent py-5'
			)}
		>
			<div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
				{/* Logo */}
				<a
					href="#inicio"
					onClick={(e) => scrollToSection(e, '#inicio')}
					className="flex items-center gap-2 group"
				>
					<img
						src={logo}
						alt="Grupo Arco Energy"
						className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
					/>
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							onClick={(e) => scrollToSection(e, link.href)}
							className={cn(
								"text-sm font-medium transition-colors",
								isScrolled
									? "text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
									: "text-slate-200 hover:text-white"
							)}
						>
							{link.name}
						</a>
					))}

					<div className={cn(
						"w-px h-6 transition-colors",
						isScrolled ? "bg-slate-200 dark:bg-slate-700" : "bg-white/20"
					)} />

					<button
						onClick={toggleTheme}
						className={cn(
							"p-2 rounded-full transition-colors",
							isScrolled
								? "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
								: "hover:bg-white/10 text-slate-200 hover:text-white"
						)}
						aria-label="Toggle theme"
					>
						{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
					</button>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex md:hidden items-center gap-4">
					<button
						onClick={toggleTheme}
						className={cn(
							"p-2 rounded-full transition-colors",
							isScrolled
								? "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
								: "hover:bg-white/10 text-slate-200 hover:text-white"
						)}
					>
						{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
					</button>
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className={cn(
							"p-2 transition-colors",
							isScrolled ? "text-slate-600 dark:text-slate-300" : "text-white"
						)}
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
					>
						<div className="container mx-auto px-4 py-4 flex flex-col gap-4">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									onClick={(e) => scrollToSection(e, link.href)}
									className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 border-b border-slate-100 dark:border-slate-800 last:border-0"
								>
									{link.name}
								</a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
