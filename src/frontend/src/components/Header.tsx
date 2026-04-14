import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const handleContactClick = () => {
    navigate({ to: "/contact" });
    setIsOpen(false);
  };

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3"
          data-ocid="nav.link"
        >
          <img
            src="/assets/shivrealtylogo-019d5281-c4c1-71f9-9178-b7147fb03913.png"
            alt="SHIV REALTY"
            className="h-10 w-10 object-contain md:h-12 md:w-12"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-primary md:text-xl">
              SHIV REALTY
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Channel Partner
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 md:flex lg:space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              data-ocid="nav.link"
              className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={handleContactClick}
            size="default"
            data-ocid="nav.primary_button"
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              data-ocid="nav.open_modal_button"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px]"
            data-ocid="nav.sheet"
          >
            <div className="flex flex-col space-y-6 pt-8">
              <div className="flex items-center space-x-3 border-b pb-6">
                <img
                  src="/assets/shivrealtylogo-019d5281-c4c1-71f9-9178-b7147fb03913.png"
                  alt="SHIV REALTY"
                  className="h-12 w-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary">
                    SHIV REALTY
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Channel Partner
                  </span>
                </div>
              </div>
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    data-ocid="nav.link"
                    className={`rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-accent ${
                      isActive(item.path)
                        ? "bg-accent text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="pt-4">
                <Button
                  onClick={handleContactClick}
                  className="w-full"
                  size="lg"
                  data-ocid="nav.primary_button"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
