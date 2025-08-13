import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gray-800 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/heroImage.png"
          alt="Modern living room with orange sofa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex items-center min-h-screen">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8">
            Berikan Kehidupan Yang
            <br className="hidden sm:block" />
            Sehat Untuk Setiap Anak
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 lg:mb-12 max-w-2xl leading-relaxed">
            Dapatkan klasifikasi status Anda dan rekomendasi penanganan
            berdasarkan data yang Anda.
          </p>
          <Link href="/predict">
            <Button
              size="lg"
              className="bg-purple-700 hover:bg-purple-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full text-sm sm:text-base lg:text-lg font-semibold w-full sm:w-auto transition-all hover:scale-105"
            >
              Mulai Pemeriksaan Sekarang
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
