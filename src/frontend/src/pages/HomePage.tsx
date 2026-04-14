import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import {
  Award,
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Custom hook for scroll-triggered animations
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const whyChooseUs = [
  {
    id: "crm",
    icon: Users,
    title: "Professional CRM-driven Follow-ups",
    description:
      "Systematic and organized client management ensuring no opportunity is missed.",
  },
  {
    id: "buyers",
    icon: Shield,
    title: "Serious Buyer Focus",
    description:
      "We connect you with genuine, pre-qualified buyers ready to invest.",
  },
  {
    id: "transparent",
    icon: CheckCircle2,
    title: "Transparent Process",
    description:
      "Clear communication and honest dealings at every step of your journey.",
  },
  {
    id: "partnerships",
    icon: TrendingUp,
    title: "Long-term Developer Partnerships",
    description:
      "Established relationships with reputed developers across Ahmedabad.",
  },
];

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Property Sales",
    description:
      "Find your dream home with our extensive portfolio of residential properties.",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Property Sales",
    description:
      "Strategic commercial spaces to grow your business in prime locations.",
  },
  {
    id: "channel",
    icon: Award,
    title: "Channel Partner Services",
    description:
      "Comprehensive support for developers to reach the right audience.",
  },
];

const stats = [
  { id: "est", value: "2016", label: "Established" },
  { id: "clients", value: "500+", label: "Happy Clients" },
  { id: "devs", value: "50+", label: "Developer Partnerships" },
  { id: "years", value: "8+", label: "Years Experience" },
];

const trustedPartners = [
  { id: "sun", name: "Sun Builder" },
  { id: "ajay", name: "Ajay Sridhar" },
  { id: "vishwanath", name: "Vishwanath Group" },
  { id: "goyal", name: "Goyal Co." },
  { id: "hs", name: "H&S Afal" },
  { id: "shivalik", name: "Shivalik Group" },
  { id: "shilp", name: "Shilp" },
  { id: "arv", name: "ARV Infraspace" },
  { id: "gala", name: "Gala Group" },
  { id: "savvy", name: "Savvy Infracon" },
  { id: "iscon", name: "Iscon Group" },
  { id: "siddhivinayak", name: "Siddhivinayak Builders" },
  { id: "kalpataru", name: "Kalpataru" },
  { id: "nirman", name: "Nirman Group" },
  { id: "dps", name: "DPS Group" },
  { id: "vardan", name: "Vardan Group" },
  { id: "sambhaav", name: "Sambhaav Group" },
];

const featuredProjects = [
  {
    id: 18,
    name: "Shilp Auro",
    area: "Ambli",
    priceLabel: "₹2.7Cr – ₹3.8Cr",
    config: "4 BHK",
    status: "New Launch",
  },
  {
    id: 8,
    name: "Goyal Riviera",
    area: "Vastrapur",
    priceLabel: "₹2.5Cr – ₹3.5Cr",
    config: "3/4 BHK",
    status: "Under Construction",
  },
  {
    id: 11,
    name: "H&S Afal Elysium",
    area: "Shela",
    priceLabel: "₹1.0Cr – ₹1.8Cr",
    config: "3/4 BHK",
    status: "New Launch",
  },
  {
    id: 17,
    name: "Shilp Amaris",
    area: "Shela",
    priceLabel: "₹1.5Cr – ₹2.2Cr",
    config: "3/4 BHK",
    status: "New Launch",
  },
  {
    id: 34,
    name: "Ambli Ultra Luxury",
    area: "Ambli",
    priceLabel: "₹4Cr – ₹6Cr",
    config: "4/5 BHK",
    status: "New Launch",
  },
  {
    id: 31,
    name: "Vastrapur Prestige",
    area: "Vastrapur",
    priceLabel: "₹1.7Cr – ₹2.5Cr",
    config: "3/4 BHK",
    status: "Under Construction",
  },
];

const luxuryImages = [
  "/assets/generated/luxury-project-1.dim_800x500.jpg",
  "/assets/generated/luxury-project-2.dim_800x500.jpg",
  "/assets/generated/luxury-project-3.dim_800x500.jpg",
];

const STATUS_STYLES: Record<string, string> = {
  "Ready to Move": "bg-green-100 text-green-700 border-green-200",
  "Under Construction": "bg-blue-100 text-blue-700 border-blue-200",
  "New Launch": "bg-blue-100 text-blue-700 border-blue-200",
};

export default function HomePage() {
  const navigate = useNavigate();
  const whyRef = useInView(0.1);
  const statsRef = useInView(0.15);
  const servicesRef = useInView(0.1);
  const partnersRef = useInView(0.1);
  const featuredRef = useInView(0.05);
  const ctaRef = useInView(0.2);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                  Your Trusted Real Estate{" "}
                  <span className="text-primary">Channel Partner</span>
                </h1>
                <p className="animate-fade-in-up animate-delay-200 text-lg text-muted-foreground md:text-xl lg:text-2xl">
                  Structured, transparent, and result-oriented real estate
                  services since 2016
                </p>
              </div>
              <div className="animate-fade-in-up animate-delay-300 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  size="lg"
                  onClick={() => navigate({ to: "/contact" })}
                  className="bg-blue-600 text-white hover:bg-blue-700 text-base"
                  data-ocid="hero.primary_button"
                >
                  Enquire Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate({ to: "/contact" })}
                  className="text-base"
                  data-ocid="hero.secondary_button"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-right animate-delay-200 relative">
              <div className="animate-float">
                <img
                  src="/assets/generated/hero-image.dim_1200x600.jpg"
                  alt="Real Estate"
                  className="rounded-lg object-cover shadow-soft"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-primary px-4 py-3 text-primary-foreground shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-current" />
                  <div>
                    <div className="text-sm font-bold">Trusted Since 2016</div>
                    <div className="text-xs opacity-80">
                      Ahmedabad's Premier Channel Partner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </div>
      </section>

      {/* Stats Strip */}
      <section
        ref={statsRef.ref}
        className="border-y bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-10 text-white"
      >
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`relative text-center transition-all duration-700 ${
                  statsRef.inView
                    ? `animate-count-up animate-delay-${(index + 1) * 100}`
                    : "opacity-0"
                }`}
              >
                {index > 0 && (
                  <div className="absolute -left-3 top-1/2 hidden -translate-y-1/2 md:block">
                    <div className="h-10 w-px bg-blue-500/40" />
                  </div>
                )}
                <div className="mb-1 text-3xl font-black text-blue-300 md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SHIV REALTY Section */}
      <section
        ref={whyRef.ref}
        className="border-t bg-background py-16 md:py-24"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className={`mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl ${
                whyRef.inView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Why Choose <span className="text-primary">SHIV REALTY</span>
            </h2>
            <p
              className={`mb-12 text-lg text-muted-foreground md:text-xl ${
                whyRef.inView
                  ? "animate-fade-in-up animate-delay-200"
                  : "opacity-0"
              }`}
            >
              We bring professionalism, transparency, and results to every
              transaction
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card
                key={item.id}
                className={`border-2 transition-all hover:border-primary/50 hover:shadow-soft ${
                  whyRef.inView
                    ? `animate-fade-in-up animate-delay-${(index + 1) * 100}`
                    : "opacity-0"
                }`}
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section
        ref={servicesRef.ref}
        className="border-t bg-muted/30 py-16 md:py-24"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className={`mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl ${
                servicesRef.inView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Our Services
            </h2>
            <p
              className={`mb-12 text-lg text-muted-foreground md:text-xl ${
                servicesRef.inView
                  ? "animate-fade-in-up animate-delay-200"
                  : "opacity-0"
              }`}
            >
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className={`transition-all hover:shadow-soft ${
                  servicesRef.inView
                    ? `animate-fade-in-up animate-delay-${(index + 1) * 100}`
                    : "opacity-0"
                }`}
              >
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate({ to: "/services" })}
              data-ocid="services.secondary_button"
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section
        ref={partnersRef.ref}
        className="border-t bg-background py-16 md:py-24"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className={`mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl ${
                partnersRef.inView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Our Trusted Partners
            </h2>
            <div
              className={`mx-auto mb-4 h-1 w-20 rounded-full bg-blue-500 ${
                partnersRef.inView
                  ? "animate-fade-in-up animate-delay-100"
                  : "opacity-0"
              }`}
            />
            <p
              className={`mb-12 text-lg text-muted-foreground md:text-xl ${
                partnersRef.inView
                  ? "animate-fade-in-up animate-delay-200"
                  : "opacity-0"
              }`}
            >
              West Ahmedabad's Most Trusted Builders &amp; Developers
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {trustedPartners.map((partner, index) => (
              <div
                key={partner.id}
                className={`flex items-center justify-center rounded-xl border border-blue-200 bg-white px-4 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md ${
                  partnersRef.inView
                    ? `animate-fade-in-up animate-delay-${Math.min((index + 1) * 100, 700)}`
                    : "opacity-0"
                }`}
                data-ocid={`partners.item.${index + 1}`}
              >
                <span className="text-center text-sm font-semibold text-foreground">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        ref={featuredRef.ref}
        className="border-t bg-slate-50 py-16 md:py-24"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className={`mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl ${
                featuredRef.inView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Featured Projects
            </h2>
            <div
              className={`mx-auto mb-4 h-1 w-20 rounded-full bg-blue-500 ${
                featuredRef.inView
                  ? "animate-fade-in-up animate-delay-100"
                  : "opacity-0"
              }`}
            />
            <p
              className={`mb-12 text-lg text-muted-foreground md:text-xl ${
                featuredRef.inView
                  ? "animate-fade-in-up animate-delay-200"
                  : "opacity-0"
              }`}
            >
              Handpicked premium properties across West Ahmedabad
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                data-ocid={`featured.item.${index + 1}`}
                className={`group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl ${
                  featuredRef.inView
                    ? `animate-fade-in-up animate-delay-${Math.min(((index % 6) + 1) * 100, 600)}`
                    : "opacity-0"
                }`}
              >
                {/* Image with overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={luxuryImages[project.id % 3]}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base font-bold leading-tight text-white drop-shadow-md">
                      {project.name}
                    </h3>
                  </div>
                  <div className="absolute right-3 top-3">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs font-semibold backdrop-blur-sm ${
                        STATUS_STYLES[project.status]
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card details */}
                <div className="space-y-3 p-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 text-blue-600" />
                    <span>{project.area}, Ahmedabad</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-blue-600">
                      {project.priceLabel}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.config}
                    </span>
                  </div>
                  <Button
                    className="w-full bg-blue-600 text-white hover:bg-blue-700"
                    size="sm"
                    onClick={() => navigate({ to: "/contact" })}
                    data-ocid="featured.primary_button"
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-300 text-blue-700 hover:border-blue-500 hover:bg-blue-50"
              onClick={() => navigate({ to: "/projects" })}
              data-ocid="featured.secondary_button"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        ref={ctaRef.ref}
        className="border-t bg-primary py-16 text-primary-foreground md:py-24"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className={`mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
                ctaRef.inView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Ready to Get Started?
            </h2>
            <p
              className={`mb-8 text-lg opacity-90 md:text-xl ${
                ctaRef.inView
                  ? "animate-fade-in-up animate-delay-200"
                  : "opacity-0"
              }`}
            >
              Let's discuss your real estate needs and find the perfect solution
              for you
            </p>
            <div
              className={`flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 ${
                ctaRef.inView
                  ? "animate-fade-in-up animate-delay-300"
                  : "opacity-0"
              }`}
            >
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate({ to: "/contact" })}
                className="text-base"
                data-ocid="cta.primary_button"
              >
                Contact Us Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: "/about" })}
                className="border-primary-foreground text-base text-primary-foreground hover:bg-primary-foreground/10"
                data-ocid="cta.secondary_button"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
