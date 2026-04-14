import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import { Building, CheckCircle2, Handshake, Home } from "lucide-react";

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Property Sales",
    description:
      "Find your perfect home with our comprehensive residential property services.",
    features: [
      "Wide range of apartments, villas, and plots",
      "Properties in prime locations across Ahmedabad",
      "Assistance with home loans and documentation",
      "Site visits and property inspections",
      "Negotiation support and legal guidance",
      "Post-sale support and handover assistance",
    ],
    image: "/assets/generated/luxury-residential.dim_800x500.jpg",
  },
  {
    id: "commercial",
    icon: Building,
    title: "Commercial Property Sales",
    description: "Strategic commercial spaces to help your business thrive.",
    features: [
      "Office spaces, retail shops, and showrooms",
      "Commercial plots and land parcels",
      "High-visibility locations with excellent connectivity",
      "Investment analysis and ROI projections",
      "Tenant sourcing and lease management support",
      "Complete documentation and legal assistance",
    ],
    image: "/assets/generated/luxury-commercial.dim_800x500.jpg",
  },
  {
    id: "channel",
    icon: Handshake,
    title: "Channel Partner Services for Developers",
    description:
      "Comprehensive support to help developers reach the right audience.",
    features: [
      "Pre-qualified buyer database and lead generation",
      "Professional CRM-driven sales management",
      "Marketing and promotional support",
      "Site visit coordination and client management",
      "Regular sales reports and analytics",
      "Long-term partnership approach",
    ],
    image: "/assets/generated/luxury-channel-partner.dim_800x500.jpg",
  },
];

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Comprehensive real estate solutions designed for your success
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div
                  className={`flex flex-col justify-center space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-base text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      style={{ minHeight: "360px", maxHeight: "460px" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Choose Our Services
              </h2>
              <p className="text-lg text-muted-foreground">
                What sets us apart in the real estate industry
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Client-Focused Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Every client is unique, and we tailor our services to match
                    your specific needs, budget, and timeline. Your satisfaction
                    is our priority.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Developer-Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We understand developers' challenges and provide solutions
                    that drive sales, reduce inventory time, and build long-term
                    partnerships.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Market Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    With years of experience in Ahmedabad's real estate market,
                    we provide insights and guidance that help you make informed
                    decisions.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>End-to-End Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    From initial consultation to final handover, we're with you
                    every step of the way, ensuring a smooth and hassle-free
                    experience.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Work With Us?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Let's discuss how we can help you achieve your real estate goals
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate({ to: "/contact" })}
              className="text-base"
            >
              Get in Touch Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
