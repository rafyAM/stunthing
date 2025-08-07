import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/images/bannerImage.png"
              alt="Mother and child waving hands happily"
              width={500}
              height={500}
              className="object-contain w-full h-64 sm:h-80 lg:h-full"
            />
          </div>
          <div className="text-white order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Setiap anak berhak tumbuh sehat. Kami ingin membantu anda
              mendeteksi dini risiko stunting dan memberikan saran terbaik untuk
              masa depan anak.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
