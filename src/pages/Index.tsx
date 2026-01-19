import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award, Users, Wrench, Zap, Droplet, PaintBucket, Wind, Hammer, Building, Trash2 } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  { icon: Building, name: "Civil Structure Repairing", desc: "Expert structural repairs and reinforcement" },
  { icon: Trash2, name: "Demolition", desc: "Safe and efficient demolition services" },
  { icon: Zap, name: "Electrical", desc: "Complete electrical solutions" },
  { icon: Droplet, name: "Plumbing", desc: "Professional plumbing services" },
  { icon: Hammer, name: "Civil", desc: "All civil construction works" },
  { icon: Wrench, name: "Carpentry", desc: "Custom carpentry and woodwork" },
  { icon: PaintBucket, name: "Painting", desc: "Interior and exterior painting" },
  { icon: Wind, name: "HVAC", desc: "Heating, ventilation & AC systems" },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "5000+", label: "Projects Completed" },
  { value: "3000+", label: "Happy Clients" },
  { value: "95%+", label: "Retention Rate" },
  { value: "100%", label: "Client Satisfaction" },
];

const features = [
  { icon: Shield, title: "Quality Assured", desc: "Premium materials and expert craftsmanship on every project" },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your timeline and deliver projects on schedule" },
  { icon: Award, title: "Licensed & Insured", desc: "Fully certified professionals you can trust" },
  { icon: Users, title: "Expert Team", desc: "Skilled workforce with decades of combined experience" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">25+ Years of Excellence</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up delay-100 leading-tight">
              Building Dreams,<br />
              <span className="text-secondary">Creating Legacies</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-in-up delay-200 leading-relaxed max-w-2xl">
              MBR Vastukalp is your trusted partner for construction, renovation, and maintenance.
              With over two decades of experience, we transform visions into reality with quality and integrity.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="navyOutline" size="xl">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-strong p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction and maintenance solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="group">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-secondary">MBR Vastukalp?</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                For over 25 years, we have been the cornerstone of trust and quality in the construction industry.
                Our commitment to excellence, combined with our experienced team, ensures every project
                exceeds expectations.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Get a free consultation and quote for your construction or renovation needs.
                </p>
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="w-full">
                    Contact Us Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and take the first step towards your dream project.
          </p>
          <Link to="/contact">
            <Button variant="default" size="xl">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
