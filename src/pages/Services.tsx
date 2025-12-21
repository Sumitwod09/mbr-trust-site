import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Building, Trash2, Zap, Droplet, Hammer, Wrench, PaintBucket, Wind, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Building,
    name: "Civil Structure Repairing",
    description: "Expert structural repairs and reinforcement services for buildings of all types. We diagnose and fix cracks, settlement issues, and structural weaknesses with precision.",
    features: ["Foundation repair", "Crack sealing", "Waterproofing", "Structural reinforcement", "Load-bearing wall repairs"],
  },
  {
    icon: Trash2,
    name: "Demolition",
    description: "Safe, efficient, and environmentally responsible demolition services. From selective interior demolition to complete structure removal.",
    features: ["Controlled demolition", "Debris removal", "Site clearing", "Salvage operations", "Environmental compliance"],
  },
  {
    icon: Zap,
    name: "Electrical",
    description: "Complete electrical solutions from new installations to repairs and upgrades. Our certified electricians ensure safety and efficiency.",
    features: ["Wiring & rewiring", "Panel upgrades", "Lighting installation", "Safety inspections", "Smart home systems"],
  },
  {
    icon: Droplet,
    name: "Plumbing",
    description: "Professional plumbing services for residential and commercial properties. Expert installation, repair, and maintenance of all plumbing systems.",
    features: ["Pipe installation", "Leak repair", "Drain cleaning", "Water heater services", "Bathroom remodeling"],
  },
  {
    icon: PaintBucket,
    name: "Painting & Polishing",
    description: "Transform your space with our professional painting services. Interior and exterior painting with premium quality finishes.",
    features: ["Interior painting", "Exterior painting", "Texture finishes", "Waterproof coatings", "Wood finishing"],
  },
  {
    icon: Wind,
    name: "HVAC",
    description: "Heating, ventilation, and air conditioning services. Installation, repair, and maintenance for optimal indoor comfort.",
    features: ["AC installation", "Heating systems", "Ventilation solutions", "Maintenance plans", "Energy efficiency upgrades"],
  },
  {
    icon: Building,
    name: "Polymer & Micro Concrete",
    description: "Advanced polymer and micro concrete solutions for durable, waterproof finishes. Perfect for modern construction and repair needs.",
    features: ["Polymer coatings", "Micro concrete overlays", "Waterproofing", "Self-leveling floors", "Durability enhancement"],
  },
  {
    icon: Hammer,
    name: "Civil Works & Masonry",
    description: "Expert civil construction and masonry services including structural work, brickwork, and stone installation.",
    features: ["Brickwork", "Stone masonry", "Structural framing", "Load-bearing walls", "Quality finishing"],
  },
  {
    icon: Wrench,
    name: "Tiles & Marble Installation",
    description: "Professional installation of premium tiles and marble for floors, walls, and decorative surfaces. Expert finishing and detailing.",
    features: ["Ceramic tile installation", "Marble laying", "Granite work", "Mosaic designs", "Grout & sealant finishing"],
  },
  {
    icon: PaintBucket,
    name: "Plaster Works",
    description: "High-quality plaster application and finishing for smooth, durable wall surfaces. Interior and exterior plastering services.",
    features: ["Gypsum plaster", "Cement plaster", "Decorative finishes", "Smooth wall finishing", "Crack repair"],
  },
  {
    icon: Wrench,
    name: "Carpentry & Custom Woodwork",
    description: "Fine carpentry services including custom furniture, fixtures, and decorative woodwork tailored to your specifications.",
    features: ["Custom furniture", "Built-in cabinets", "Trim & molding", "Door installation", "Quality finishing"],
  },
  {
    icon: Building,
    name: "Wall Paneling",
    description: "Modern wall paneling solutions for accent walls and interior design enhancement. Multiple material options available.",
    features: ["PVC wall panels", "Wooden panels", "Acoustic panels", "Decorative finishes", "Professional installation"],
  },
  {
    icon: Wrench,
    name: "Modular Kitchen & Workstation",
    description: "Custom-designed modular kitchens and workstations that maximize space and functionality with premium finishes.",
    features: ["Kitchen design & layout", "Modular cabinetry", "Hardware installation", "Quartz countertops", "Professional assembly"],
  },
  {
    icon: PaintBucket,
    name: "Melamine & PU Polish",
    description: "Professional melamine and polyurethane polishing services for furniture and surfaces with premium finish quality.",
    features: ["Melamine polish", "PU polish application", "High gloss finish", "Scratch resistance", "Color options"],
  },
  {
    icon: PaintBucket,
    name: "Wooden Polish & Finishing",
    description: "Expert wooden surface polishing and finishing to enhance beauty and durability of wooden furniture and floors.",
    features: ["French polish", "Lacquer finish", "Wooden floor polishing", "Furniture restoration", "Stain treatment"],
  },
  {
    icon: Building,
    name: "POP Works",
    description: "Plain Old Plaster (POP) design and installation for ceiling and wall decorations. Creating stunning aesthetic spaces.",
    features: ["Ceiling designs", "Wall decorations", "Textured finishes", "Custom moldings", "Professional finishing"],
  },
  {
    icon: Wind,
    name: "Gypsum Ceiling",
    description: "Modern gypsum ceiling installation for residential and commercial spaces. Clean, professional finishes with acoustic options.",
    features: ["Suspended ceilings", "Acoustic panels", "Recessed lighting", "Custom designs", "Sound dampening"],
  },
  {
    icon: Building,
    name: "Gypsum Partition & Grid Ceiling",
    description: "Flexible gypsum partition systems and modular grid ceiling solutions for modern office and residential layouts.",
    features: ["Demountable partitions", "Grid ceiling systems", "Fire-rated options", "Acoustic properties", "Easy installation"],
  },
  {
    icon: Wrench,
    name: "Fabrication Works",
    description: "Custom metal and structural fabrication services for railings, gates, structures, and architectural elements.",
    features: ["Metal fabrication", "Custom designs", "Welding services", "Finishing & coating", "Installation"],
  },
  {
    icon: Building,
    name: "Staircase, Grill & Loft",
    description: "Custom design and installation of staircases, safety grills, and loft structures with premium quality materials.",
    features: ["Steel staircases", "Wooden stairs", "Decorative grills", "Loft structures", "Custom railings"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive construction, renovation, and maintenance solutions for all your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.name}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="outline" className="group">
                      Get Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className={`bg-muted rounded-2xl p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="aspect-video bg-gradient-primary rounded-xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary-foreground/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to discuss your specific requirements and provide tailored solutions.
          </p>
          <Link to="/contact">
            <Button variant="default" size="xl">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
