import { motion } from "framer-motion";
import {
  Settings,
  Truck,
  Wrench,
  ClipboardCheck,
  Layers,
  Package,
  Filter,
  Disc,
  Droplets,
} from "lucide-react";

import maquinadoImg from "../assets/maquinado.jpeg";
import inspeccionImg from "../assets/inspeccion.jpeg";
import transporteImg from "../assets/trasporte-logistica.png";
import geomembranasImg from "../assets/geomembranas.jpeg";
import herramientasImg from "../assets/herramientas.jpeg";
import tuberiaRevestimientoImg from "../assets/tuberia-revestimiento.png";
import tuberiaPerforacionImg from "../assets/tuberia-perforacion.jpeg";
import manguerasImg from "../assets/magueras-alta-presion.png";
import controlSolidosImg from "../assets/control-solidos.png";

const services = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Maquinado Industrial",
    description:
      "Maquinaria metalmecánica especializada y personal calificado para mecanizado de precisión con altos estándares.",
    image: maquinadoImg,
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Servicio de Inspección",
    description:
      "Inspección bajo estándares de calidad y seguridad aplicables a la industria petrolera y de perforación.",
    image: inspeccionImg,
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Transporte y Logística",
    description:
      "Solución integral en logística y transporte con equipo propio, personal capacitado y compromiso con la seguridad.",
    image: transporteImg,
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Geomembranas y Geosintéticos",
    description:
      "Instalación, suministro y mantenimiento de geomembranas y geosintéticos con personal y equipos especializados.",
    image: geomembranasImg,
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Venta y Renta de Herramientas",
    description:
      "Soluciones integrales mediante suministro y renta de herramientas de perforación con altos estándares de calidad.",
    image: herramientasImg,
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Venta de Tubería de Revestimiento",
    description:
      "Comercialización de tubería de revestimiento (TR) en diversas medidas y grados bajo estándares internacionales.",
    image: tuberiaRevestimientoImg,
  },
  {
    icon: <Disc className="w-8 h-8" />,
    title: "Venta de Tubería de Perforación",
    description:
      "Tuberías de perforación certificadas que aseguran desempeño mecánico y confiabilidad estructural en campo.",
    image: tuberiaPerforacionImg,
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Venta de Mangueras de Alta Presión",
    description:
      "Suministro de mangueras certificadas para procesos críticos de perforación, cementación y control de pozos.",
    image: manguerasImg,
  },
  {
    icon: <Filter className="w-8 h-8" />,
    title: "Equipo de Control de Sólidos",
    description:
      "Equipos certificados para optimizar el lodo, reducir costos y garantizar operaciones seguras en perforación.",
    image: controlSolidosImg,
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 transition-colors bg-slate-50 dark:bg-slate-950"
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 font-semibold tracking-wide uppercase text-primary-600 dark:text-primary-500"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-3xl font-bold md:text-4xl text-slate-900 dark:text-white"
          >
            Soluciones Integrales de Alto Nivel
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Ofrecemos una amplia gama de servicios diseñados para satisfacer las
            necesidades específicas de la industria petrolera moderna.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[450px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay with dynamic gradient */}
                <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-80 transition-opacity duration-500 from-slate-950 via-slate-900/40 group-hover:opacity-90" />
              </div>

              {/* Content */}
              <div className="flex absolute inset-0 flex-col justify-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex justify-center items-center mb-6 w-12 h-12 text-white rounded-2xl border backdrop-blur-md transition-transform duration-300 bg-white/10 border-white/20 group-hover:scale-110"
                >
                  {service.icon}
                </motion.div>

                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="mb-3 text-2xl font-bold leading-tight text-white"
                >
                  {service.title}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="text-sm leading-relaxed transition-colors duration-300 text-slate-200/90 line-clamp-3 group-hover:text-white"
                >
                  {service.description}
                </motion.p>

                {/* Decorative element like the card in image */}
                <div className="flex gap-3 items-center mt-6">
                  <div className="h-[1px] flex-1 bg-white/20" />
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">
                    Grupo Arco
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
