import { Clock, TrendingUp, Target } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function WhyCareSection() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Dampak Jangka Panjang",
      description: "Stunting bukan hanya soal tinggi badan saja tapi juga berdampak pada perkembangan dan kesehatan anak.",
      bgColor: "bg-purple-200",
      textColor: "text-purple-900"
    },
    {
      icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Kondisi Indonesia", 
      description: "Lebih dari 20% anak balita di Indonesia mengalami stunting menurut data nasional.",
      bgColor: "bg-purple-600",
      textColor: "text-white"
    },
    {
      icon: <Target className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: "Dapat Dicegah",
      description: "Stunting dapat dicegah dengan gizi yang tepat, lingkungan sehat, dan perawatan kesehatan.",
      bgColor: "bg-orange-400",
      textColor: "text-orange-900"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {/* Title Section */}
          <div className="lg:col-span-1 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Kenapa<br className="hidden sm:block" />
              Harus <span className="text-purple-600">Peduli?</span>
            </h2>
          </div>
          
          {/* Cards Section */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`${feature.bgColor} ${feature.textColor} border-none shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <CardContent className="p-6 sm:p-7 lg:p-8 h-full">
                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed opacity-90">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
