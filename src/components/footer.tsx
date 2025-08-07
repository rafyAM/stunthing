import { Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            Stunthing
          </div>
          <p className="text-gray-400 mb-2 text-base sm:text-lg">
            Copyright © 2024 Stunthing
          </p>
          <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
            Stunthing - Jaga Tingkat Tumbuh Kembang Anak
          </p>

          <div className="flex justify-center space-x-4 sm:space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <a href={social.href} aria-label={social.label}>
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
