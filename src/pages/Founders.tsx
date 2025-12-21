import Layout from "@/components/Layout";
import { Quote, Award, Users } from "lucide-react";

const founders = [
  {
    name: "Mr. Mahender Rajak",
    role: "Founder & Managing Director",
    initial: "MK",
    experience: "25+ years",
    description: "With over three decades of experience in the construction industry, Mr. Mahender Rajak founded MBR Vastukalp with a vision to deliver excellence. His expertise in civil engineering and project management has been the cornerstone of the company's success.",
    quote: "Quality is not just a standard; it's a promise we make to every client.",
  },
  {
    name: "Mr. Vikas Rajak",
    role: "Co-Founder & Technical Director",
    initial: "VK",
    experience: "5+ years",
    description: "Mr. Vikas Rajak brings technical excellence and innovation to MBR Vastukalp. His deep understanding of modern construction techniques and materials ensures that every project benefits from the latest industry advancements.",
    quote: "Innovation and tradition must work together to build structures that last generations.",
  },
];

const Founders = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Founders</h1>
            <p className="text-xl text-primary-foreground/80">
              Meet the visionaries behind MBR Vastukalp's 25+ years of excellence
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {founders.map((founder, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  {/* Profile Card */}
                  <div className="bg-gradient-primary rounded-2xl p-8 text-center">
                    <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl font-bold text-secondary-foreground">{founder.initial}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-primary-foreground mb-2">{founder.name}</h2>
                    <p className="text-secondary mb-4">{founder.role}</p>
                    <div className="flex justify-center gap-4">
                      <div className="bg-primary-foreground/10 px-4 py-2 rounded-lg">
                        <Award className="w-5 h-5 text-secondary mx-auto mb-1" />
                        <span className="text-sm text-primary-foreground/80">{founder.experience}</span>
                      </div>
                      <div className="bg-primary-foreground/10 px-4 py-2 rounded-lg">
                        <Users className="w-5 h-5 text-secondary mx-auto mb-1" />
                        <span className="text-sm text-primary-foreground/80">Industry Expert</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{founder.name}</h3>
                  <p className="text-secondary font-medium mb-4">{founder.role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{founder.description}</p>
                  
                  {/* Quote */}
                  <div className="bg-muted p-6 rounded-xl border-l-4 border-secondary">
                    <Quote className="w-8 h-8 text-secondary/30 mb-4" />
                    <p className="text-foreground italic text-lg leading-relaxed">"{founder.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Leadership Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At MBR Vastukalp, leadership is about more than business success. Our founders believe in 
              building lasting relationships with clients, empowering employees to excel, and contributing 
              positively to the communities we serve. This philosophy has guided us for over 25 years and 
              continues to shape our future.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Client First</h3>
                <p className="text-sm text-muted-foreground">Every decision is made with client satisfaction in mind</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Quality Focus</h3>
                <p className="text-sm text-muted-foreground">Never compromise on materials or craftsmanship</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h3 className="font-semibold text-foreground mb-2">Team Growth</h3>
                <p className="text-sm text-muted-foreground">Invest in people to build a stronger organization</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Founders;
