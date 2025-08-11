import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              Proses identifikasi stunting{" "}
              <span className="text-purple-600">lebih mudah</span> dan{" "}
              <span className="text-orange-400">cepat</span> dilakukan!
            </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed">
              Anda hanya perlu memasukkan data yang diminta, dan sistem kami
              akan memberikan hasil serta rekomendasi yang jelas dan praktis.
            </p>
            <Link href="/predict">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold w-full sm:w-auto transition-all hover:scale-105"
              >
                Mulai Sekarang
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="relative order-1 lg:order-2">
            <Image
              src="/images/ctaImage.png"
              alt="Happy family with children showing healthy growth"
              width={600}
              height={500}
              className="object-contain w-full h-full sm:h-80 lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
