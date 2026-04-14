import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.requirement
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mojplrpj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Thank you! We will get back to you shortly.");
        setFormData({ name: "", phone: "", email: "", requirement: "" });
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="border-b bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="animate-fade-in-up mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="animate-fade-in-up animate-delay-200 text-lg text-muted-foreground md:text-xl lg:text-2xl">
                Let's discuss your real estate needs and find the perfect
                solution
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in-left">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Send Us a Message
                    </CardTitle>
                    <CardDescription className="text-base">
                      Fill out the form below and we'll get back to you as soon
                      as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      data-ocid="contact.modal"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          data-ocid="contact.input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          data-ocid="contact.input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          data-ocid="contact.input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="requirement">Your Requirement *</Label>
                        <Textarea
                          id="requirement"
                          name="requirement"
                          placeholder="Tell us about your property requirements..."
                          rows={5}
                          value={formData.requirement}
                          onChange={handleChange}
                          required
                          data-ocid="contact.textarea"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={isSubmitting}
                        data-ocid="contact.submit_button"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Enquiry"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="animate-fade-in-right space-y-6">
                {/* Contact Details */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Contact Information
                    </CardTitle>
                    <CardDescription className="text-base">
                      Reach out to us through any of these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-muted-foreground">
                            Phone
                          </p>
                          <a
                            href="tel:+916376898421"
                            className="block text-base font-medium text-foreground hover:text-primary"
                          >
                            +91 63768 98421
                          </a>
                          <a
                            href="tel:+919723823740"
                            className="block text-base font-medium text-foreground hover:text-primary"
                          >
                            +91 97238 23740
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-muted-foreground">
                            Email
                          </p>
                          <a
                            href="mailto:shivrealty90@gmail.com"
                            className="block text-base font-medium text-foreground hover:text-primary"
                          >
                            shivrealty90@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-muted-foreground">
                            Location
                          </p>
                          <p className="text-base font-medium text-foreground">
                            Ahmedabad, Gujarat
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp Card */}
                <Card className="border-2 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-xl">
                      <SiWhatsapp className="h-6 w-6 text-primary" />
                      <span>Connect on WhatsApp</span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      Get instant responses to your queries
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a
                      href="https://wa.me/916376898421"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg border-2 border-primary/20 bg-background p-4 transition-all hover:border-primary/50 hover:shadow-soft"
                    >
                      <span className="font-medium text-foreground">
                        +91 63768 98421
                      </span>
                      <SiWhatsapp className="h-5 w-5 text-primary" />
                    </a>
                    <a
                      href="https://wa.me/919723823740"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg border-2 border-primary/20 bg-background p-4 transition-all hover:border-primary/50 hover:shadow-soft"
                    >
                      <span className="font-medium text-foreground">
                        +91 97238 23740
                      </span>
                      <SiWhatsapp className="h-5 w-5 text-primary" />
                    </a>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Monday – Sunday
                        </span>
                        <span className="font-medium text-foreground">
                          10:00 AM – 7:00 PM
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Location */}
        <section className="border-t py-16">
          <div className="container">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-3xl font-bold">
                Our Office Location
              </h2>
              <div className="overflow-hidden rounded-xl border-2 shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=23.0225,72.5129&z=15&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="SHIV REALTY Office Location - Ahmedabad"
                  className="w-full"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.app.goo.gl/ZQjEMaFjTFfjxYXeA?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 font-medium text-primary hover:underline"
                  data-ocid="contact.link"
                >
                  <MapPin className="h-4 w-4" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
