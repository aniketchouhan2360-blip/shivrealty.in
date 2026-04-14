import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import { Building2, Home, IndianRupee, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

interface Project {
  id: number;
  name: string;
  builder: string;
  area: string;
  type: "Residential" | "Commercial";
  config: string;
  priceMin: number;
  priceMax: number;
  priceLabel: string;
  status: "Ready to Move" | "Under Construction" | "New Launch";
}

const projects: Project[] = [
  // ₹45L – ₹80L range (6 projects)
  {
    id: 1,
    name: "Sun South Square",
    builder: "Sun Builder",
    area: "South Bopal",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 45,
    priceMax: 75,
    priceLabel: "₹45L – ₹75L",
    status: "Ready to Move",
  },
  {
    id: 2,
    name: "Sun Optima",
    builder: "Sun Builder",
    area: "Shela",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 55,
    priceMax: 85,
    priceLabel: "₹55L – ₹85L",
    status: "Under Construction",
  },
  {
    id: 9,
    name: "Goyal Orchid",
    builder: "Goyal",
    area: "South Bopal",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 50,
    priceMax: 80,
    priceLabel: "₹50L – ₹80L",
    status: "Ready to Move",
  },
  {
    id: 16,
    name: "Shilp Vaibhav",
    builder: "Shilp",
    area: "Bopal",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 45,
    priceMax: 75,
    priceLabel: "₹45L – ₹75L",
    status: "Under Construction",
  },
  {
    id: 20,
    name: "Vishwanath Makarba Palms",
    builder: "Vishwanath Group",
    area: "Makarba",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 48,
    priceMax: 78,
    priceLabel: "₹48L – ₹78L",
    status: "Ready to Move",
  },
  {
    id: 24,
    name: "Vejalpur Crest",
    builder: "Ajay Sridhar",
    area: "Vejalpur",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 50,
    priceMax: 78,
    priceLabel: "₹50L – ₹78L",
    status: "Ready to Move",
  },
  {
    id: 29,
    name: "Ghuma Greens",
    builder: "Shivalik Group",
    area: "Ghuma",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 52,
    priceMax: 80,
    priceLabel: "₹52L – ₹80L",
    status: "New Launch",
  },
  // ₹80L – ₹1.5Cr range (6 projects)
  {
    id: 3,
    name: "Sun Greenfield",
    builder: "Sun Builder",
    area: "Bopal",
    type: "Residential",
    config: "3/4 BHK",
    priceMin: 80,
    priceMax: 120,
    priceLabel: "₹80L – ₹1.2Cr",
    status: "Under Construction",
  },
  {
    id: 5,
    name: "AS Harmony",
    builder: "Ajay Sridhar",
    area: "Shela",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 85,
    priceMax: 130,
    priceLabel: "₹85L – ₹1.3Cr",
    status: "New Launch",
  },
  {
    id: 14,
    name: "Shivalik Sky",
    builder: "Shivalik",
    area: "Bopal",
    type: "Residential",
    config: "3 BHK",
    priceMin: 70,
    priceMax: 110,
    priceLabel: "₹70L – ₹1.1Cr",
    status: "Under Construction",
  },
  {
    id: 15,
    name: "Shivalik Business Hub",
    builder: "Shivalik",
    area: "Bodakdev",
    type: "Commercial",
    config: "Office/Shop",
    priceMin: 50,
    priceMax: 200,
    priceLabel: "₹50L – ₹2Cr",
    status: "Ready to Move",
  },
  {
    id: 19,
    name: "Sun Thaltej Residency",
    builder: "Sun Builder",
    area: "Thaltej",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 65,
    priceMax: 100,
    priceLabel: "₹65L – ₹1.0Cr",
    status: "Under Construction",
  },
  {
    id: 23,
    name: "Science City Grand",
    builder: "H&S Afal",
    area: "Science City",
    type: "Residential",
    config: "3 BHK",
    priceMin: 75,
    priceMax: 120,
    priceLabel: "₹75L – ₹1.2Cr",
    status: "Under Construction",
  },
  {
    id: 30,
    name: "Anandnagar Heights",
    builder: "Goyal",
    area: "Anandnagar",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 80,
    priceMax: 130,
    priceLabel: "₹80L – ₹1.3Cr",
    status: "New Launch",
  },
  // ₹1.5Cr – ₹2.5Cr range (6 projects)
  {
    id: 4,
    name: "AS Signature",
    builder: "Ajay Sridhar",
    area: "South Bopal",
    type: "Residential",
    config: "3/4 BHK",
    priceMin: 90,
    priceMax: 150,
    priceLabel: "₹90L – ₹1.5Cr",
    status: "Under Construction",
  },
  {
    id: 7,
    name: "Vishwanath Pinnacle",
    builder: "Vishwanath Group",
    area: "Ambli",
    type: "Residential",
    config: "3/4 BHK",
    priceMin: 85,
    priceMax: 140,
    priceLabel: "₹85L – ₹1.4Cr",
    status: "Under Construction",
  },
  {
    id: 11,
    name: "H&S Afal Elysium",
    builder: "H&S Afal",
    area: "Shela",
    type: "Residential",
    config: "3/4 BHK",
    priceMin: 100,
    priceMax: 180,
    priceLabel: "₹1.0Cr – ₹1.8Cr",
    status: "New Launch",
  },
  {
    id: 12,
    name: "H&S Afal Casa",
    builder: "H&S Afal",
    area: "South Bopal",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 55,
    priceMax: 90,
    priceLabel: "₹55L – ₹90L",
    status: "Under Construction",
  },
  {
    id: 17,
    name: "Shilp Amaris",
    builder: "Shilp",
    area: "Shela",
    type: "Residential",
    config: "3/4 BHK",
    priceMin: 150,
    priceMax: 220,
    priceLabel: "₹1.5Cr – ₹2.2Cr",
    status: "New Launch",
  },
  {
    id: 22,
    name: "Jodhpur Elite",
    builder: "Shilp",
    area: "Jodhpur",
    type: "Residential",
    config: "3/4 BHK",
    priceMin: 160,
    priceMax: 240,
    priceLabel: "₹1.6Cr – ₹2.4Cr",
    status: "New Launch",
  },
  {
    id: 31,
    name: "Vastrapur Prestige",
    builder: "Goyal",
    area: "Vastrapur",
    type: "Residential",
    config: "3/4 BHK",
    priceMin: 170,
    priceMax: 250,
    priceLabel: "₹1.7Cr – ₹2.5Cr",
    status: "Under Construction",
  },
  // ₹2.5Cr – ₹4Cr range (4 projects)
  {
    id: 8,
    name: "Goyal Riviera",
    builder: "Goyal",
    area: "Vastrapur",
    type: "Residential",
    config: "3/4 BHK",
    priceMin: 250,
    priceMax: 350,
    priceLabel: "₹2.5Cr – ₹3.5Cr",
    status: "Under Construction",
  },
  {
    id: 18,
    name: "Shilp Auro",
    builder: "Shilp",
    area: "Ambli",
    type: "Residential",
    config: "4 BHK",
    priceMin: 270,
    priceMax: 380,
    priceLabel: "₹2.7Cr – ₹3.8Cr",
    status: "New Launch",
  },
  {
    id: 32,
    name: "Satellite Grandeur",
    builder: "Shivalik",
    area: "Satellite",
    type: "Residential",
    config: "4/5 BHK",
    priceMin: 260,
    priceMax: 390,
    priceLabel: "₹2.6Cr – ₹3.9Cr",
    status: "Under Construction",
  },
  {
    id: 33,
    name: "Bodakdev Iconic",
    builder: "ARV Infraspace",
    area: "Bodakdev",
    type: "Residential",
    config: "4 BHK",
    priceMin: 280,
    priceMax: 400,
    priceLabel: "₹2.8Cr – ₹4Cr",
    status: "New Launch",
  },
  // ₹4Cr+ range (3 projects)
  {
    id: 34,
    name: "Ambli Ultra Luxury",
    builder: "Gala Group",
    area: "Ambli",
    type: "Residential",
    config: "4/5 BHK",
    priceMin: 400,
    priceMax: 600,
    priceLabel: "₹4Cr – ₹6Cr",
    status: "New Launch",
  },
  {
    id: 35,
    name: "Thaltej Pinnacle Suites",
    builder: "Savvy Infracon",
    area: "Thaltej",
    type: "Residential",
    config: "5 BHK Penthouse",
    priceMin: 450,
    priceMax: 700,
    priceLabel: "₹4.5Cr – ₹7Cr",
    status: "Under Construction",
  },
  {
    id: 36,
    name: "SG Highway Crown Tower",
    builder: "Iscon Group",
    area: "Bodakdev",
    type: "Commercial",
    config: "Office Suite",
    priceMin: 500,
    priceMax: 800,
    priceLabel: "₹5Cr – ₹8Cr+",
    status: "New Launch",
  },
  // Additional coverage areas
  {
    id: 37,
    name: "Vashnodevi Bliss",
    builder: "Sun Builder",
    area: "Vashnodevi",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 55,
    priceMax: 90,
    priceLabel: "₹55L – ₹90L",
    status: "New Launch",
  },
  {
    id: 38,
    name: "Charoli Park Residences",
    builder: "Vishwanath Group",
    area: "Charoli",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 48,
    priceMax: 80,
    priceLabel: "₹48L – ₹80L",
    status: "Under Construction",
  },
  {
    id: 39,
    name: "Zundal Gardens",
    builder: "Goyal",
    area: "Zundal",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 50,
    priceMax: 85,
    priceLabel: "₹50L – ₹85L",
    status: "Ready to Move",
  },
  {
    id: 40,
    name: "Chandkheda Residency",
    builder: "Vishwanath Group",
    area: "Chandkheda",
    type: "Residential",
    config: "2/3 BHK",
    priceMin: 45,
    priceMax: 78,
    priceLabel: "₹45L – ₹78L",
    status: "Under Construction",
  },
];

const AREAS = [
  "All",
  "Shela",
  "South Bopal",
  "Bopal",
  "Ambli",
  "Ghuma",
  "Vastrapur",
  "Thaltej",
  "Satellite",
  "Bodakdev",
  "Makarba",
  "Anandnagar",
  "Jodhpur",
  "Science City",
  "Vejalpur",
  "Vashnodevi",
  "Charoli",
  "Zundal",
  "Chandkheda",
];

const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "₹45L – ₹80L", min: 45, max: 80 },
  { label: "₹80L – ₹1.5Cr", min: 80, max: 150 },
  { label: "₹1.5Cr – ₹2.5Cr", min: 150, max: 250 },
  { label: "₹2.5Cr – ₹4Cr", min: 250, max: 400 },
  { label: "₹4Cr+", min: 400, max: Number.POSITIVE_INFINITY },
];

const STATUS_STYLES: Record<string, string> = {
  "Ready to Move": "bg-green-100 text-green-700 border-green-200",
  "Under Construction": "bg-blue-100 text-blue-700 border-blue-200",
  "New Launch": "bg-blue-100 text-blue-700 border-blue-200",
};

const luxuryImages = [
  "/assets/generated/luxury-project-1.dim_800x500.jpg",
  "/assets/generated/luxury-project-2.dim_800x500.jpg",
  "/assets/generated/luxury-project-3.dim_800x500.jpg",
];

export default function ProjectsPage() {
  const navigate = useNavigate();
  const heroRef = useInView(0.1);
  const filtersRef = useInView(0.05);
  const gridRef = useInView(0.05);

  const [selectedArea, setSelectedArea] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");

  const filteredProjects = projects.filter((p) => {
    const matchArea = selectedArea === "All" || p.area === selectedArea;
    const priceRange = PRICE_RANGES.find((r) => r.label === selectedPrice);
    const matchPrice =
      !priceRange ||
      (p.priceMin <= priceRange.max && p.priceMax >= priceRange.min);
    return matchArea && matchPrice;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-primary/5 via-background to-background py-16 md:py-24">
        <div ref={heroRef.ref} className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1
              className={`mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl ${
                heroRef.inView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Our <span className="text-primary">Projects</span>
            </h1>
            <p
              className={`text-lg text-muted-foreground md:text-xl lg:text-2xl ${
                heroRef.inView
                  ? "animate-fade-in-up animate-delay-200"
                  : "opacity-0"
              }`}
            >
              Explore premium residential and commercial properties across West
              Ahmedabad's most sought-after locations
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section
        ref={filtersRef.ref}
        className="sticky top-16 z-40 border-b bg-background/95 py-4 shadow-sm backdrop-blur md:top-20"
      >
        <div className="container">
          <div
            className={`space-y-3 ${
              filtersRef.inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {/* Area Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Area:
              </span>
              {AREAS.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  data-ocid="projects.tab"
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                    selectedArea === area
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-border bg-background text-muted-foreground hover:border-blue-400 hover:text-foreground"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Price:
              </span>
              {PRICE_RANGES.map((range) => (
                <button
                  key={range.label}
                  type="button"
                  onClick={() => setSelectedPrice(range.label)}
                  data-ocid="projects.tab"
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                    selectedPrice === range.label
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-border bg-background text-muted-foreground hover:border-blue-400 hover:text-foreground"
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={gridRef.ref} className="py-12 md:py-16">
        <div className="container">
          {/* Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredProjects.length}
              </span>{" "}
              project{filteredProjects.length !== 1 ? "s" : ""} found
            </p>
            {(selectedArea !== "All" || selectedPrice !== "All Prices") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedArea("All");
                  setSelectedPrice("All Prices");
                }}
                className="text-sm text-blue-600 hover:underline"
                data-ocid="projects.secondary_button"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Cards Grid */}
          {filteredProjects.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-20 text-center"
              data-ocid="projects.empty_state"
            >
              <Building2 className="mb-4 h-14 w-14 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                No projects found
              </h3>
              <p className="mb-6 text-muted-foreground">
                Try adjusting your filters to see more results
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedArea("All");
                  setSelectedPrice("All Prices");
                }}
                data-ocid="projects.secondary_button"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  data-ocid={`projects.item.${index + 1}`}
                  className={`group overflow-hidden rounded-2xl border border-blue-100 shadow-md transition-all duration-300 hover:border-blue-300 hover:shadow-xl ${
                    gridRef.inView
                      ? `animate-fade-in-up animate-delay-${Math.min(((index % 6) + 1) * 100, 600)}`
                      : "opacity-0"
                  }`}
                >
                  {/* Luxury image with project name overlay */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={luxuryImages[project.id % 3]}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-sm font-bold leading-tight text-white drop-shadow-md">
                        {project.name}
                      </h3>
                    </div>
                    <div className="absolute right-2 top-2">
                      <span
                        className={`rounded-full border px-2 py-0.5 text-xs font-medium backdrop-blur-sm ${
                          STATUS_STYLES[project.status]
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base leading-tight">
                        {project.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 shrink-0 text-blue-600" />
                      <span>{project.area}, Ahmedabad</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {project.type === "Residential" ? (
                          <Home className="mr-1 h-3 w-3" />
                        ) : (
                          <Building2 className="mr-1 h-3 w-3" />
                        )}
                        {project.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.config}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-1 rounded-lg bg-blue-50 px-3 py-2">
                      <IndianRupee className="h-4 w-4 text-blue-600" />
                      <span className="text-base font-bold text-blue-600">
                        {project.priceLabel}
                      </span>
                    </div>

                    <Button
                      className="w-full bg-blue-600 text-white hover:bg-blue-700"
                      size="sm"
                      onClick={() => navigate({ to: "/contact" })}
                      data-ocid="projects.primary_button"
                    >
                      Enquire Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="border-t bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-14 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Can't find what you're looking for?
          </h2>
          <p className="mb-8 text-lg text-slate-300">
            Contact us for personalized property recommendations tailored to
            your budget and requirements
          </p>
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigate({ to: "/contact" })}
            data-ocid="projects.secondary_button"
          >
            Talk to Our Experts
          </Button>
        </div>
      </section>
    </div>
  );
}
