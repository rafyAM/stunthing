import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl mx-4 my-8">
      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="flex-shrink-0 mb-8 lg:mb-0 lg:pr-8">
          <Image
            src="/images/bannerImage.png"
            alt="Happy mother and child waving"
            width={556}
            height={501}
            className="object-contain "
            priority
          />
        </div>

        <div className="flex-1/4 text-white lg:pl-8">
          <div className="text-4xl opacity-100 leading-relaxed">
            <p>Setiap anak berhak tumbuh sehat.</p>
            <p>Kami ingin membantu anda mendeteksi</p>
            <p>dini risiko stunting dan memberikan</p>
            <p>saran terbaik untuk masa depan anak.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
