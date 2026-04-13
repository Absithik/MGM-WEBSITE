import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Users, FileText } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Registered Company",
    desc: "100% legal and registered entity operating with full compliance."
  },
  {
    icon: MapPin,
    title: "Salem-Based",
    desc: "Local operations, local team. We know the city and its demands."
  },
  {
    icon: Users,
    title: "Technician Network",
    desc: "Strong network of verified, skilled AC mechanics ready to deploy."
  },
  {
    icon: FileText,
    title: "Total Transparency",
    desc: "Visit our office anytime. Address and contact details are open."
  }
];

export default function WhyMGM() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-4">
            Why Trust <span className="text-gradient-gold">MGM</span>?
          </h2>
          <div className="w-24 h-1 bg-gold-500/50 mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 hover:border-gold-500/50 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 border border-black/5 flex items-center justify-center mb-6 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-colors">
                  <Icon className="w-6 h-6 text-gray-500 group-hover:text-gold-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
