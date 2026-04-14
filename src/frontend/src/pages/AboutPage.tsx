import { Card, CardContent } from "@/components/ui/card";
import { Award, Building2, Target, Users } from "lucide-react";

const values = [
  {
    id: "discipline",
    icon: Target,
    title: "Discipline",
    description:
      "Systematic approach to every project with structured processes and timely execution.",
  },
  {
    id: "transparency",
    icon: Users,
    title: "Transparency",
    description:
      "Open and honest communication with all stakeholders throughout the journey.",
  },
  {
    id: "accountability",
    icon: Award,
    title: "Accountability",
    description:
      "Taking full responsibility for our commitments and delivering on our promises.",
  },
  {
    id: "associations",
    icon: Building2,
    title: "Long-term Associations",
    description:
      "Building lasting relationships with clients and developers based on trust and results.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              About <span className="text-primary">SHIV REALTY</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Your trusted real estate channel partner since 2016
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Who We Are
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Established in 2016, SHIV REALTY has been serving the real
                    estate market in Ahmedabad, Gujarat, with professionalism
                    and integrity. As a dedicated channel partner, we bridge the
                    gap between developers and buyers, ensuring smooth and
                    transparent transactions.
                  </p>
                  <p>
                    Located in the heart of Ahmedabad, we have built a
                    reputation for our structured approach, professional
                    CRM-driven processes, and commitment to connecting serious
                    buyers with quality properties. Our focus is not on volume,
                    but on value – ensuring every client receives personalized
                    attention and results-oriented service.
                  </p>
                </div>
              </div>

              <Card className="border-2 bg-muted/30">
                <CardContent className="p-8">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="text-center">
                      <div className="mb-2 text-4xl font-bold text-blue-600">
                        2016
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Established
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="mb-2 text-4xl font-bold text-blue-600">
                        Ahmedabad
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Based in Gujarat
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="mb-2 text-4xl font-bold text-blue-600">
                        100%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Client Focused
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy and Values */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Our Philosophy & Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {values.map((value) => (
                <Card
                  key={value.id}
                  className="border-2 transition-all hover:border-primary/50 hover:shadow-soft"
                >
                  <CardContent className="p-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-base text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Approach
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                At SHIV REALTY, we believe in quality over quantity. Our
                approach is built on three pillars:
              </p>
              <div className="space-y-4 pl-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    Professional CRM Management
                  </h3>
                  <p>
                    We use advanced CRM systems to ensure systematic follow-ups,
                    organized client data, and no missed opportunities. Every
                    lead is tracked, nurtured, and converted with precision.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    Serious Buyer Focus
                  </h3>
                  <p>
                    We don't believe in wasting anyone's time. Our rigorous
                    qualification process ensures that we connect developers
                    with genuine, pre-qualified buyers who are ready to invest.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    Long-term Partnerships
                  </h3>
                  <p>
                    We build lasting relationships with both developers and
                    clients. Our success is measured not just by transactions,
                    but by the trust and repeat business we earn over the years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="border-t bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Our Commitment to You
            </h2>
            <p className="text-lg opacity-90 md:text-xl">
              We are committed to providing honest, transparent, and
              professional real estate services. No exaggerations, no false
              promises – just genuine expertise and dedicated service to help
              you achieve your real estate goals in Ahmedabad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
