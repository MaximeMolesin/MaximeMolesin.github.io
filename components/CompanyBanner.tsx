import type React from "react"
import Slider from "react-slick"
import Image from "next/image"
import Link from "next/link"

// Importez les styles CSS de react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const companies = [
  {
    name: "SHOM",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DXwFJUk59PVLb8XO4FseNAXGdxdQ5Z.png",
    link: "https://www.shom.fr/",
  },
  {
    name: "UQAC",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uqUPda4Q3ye5OOKlhNd8h9S9LFoZ85.png",
    link: "https://www.uqac.ca/",
  },
  {
    name: "ENIB",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0oIaepOBGzCU20U1V5hp3CL0umquPz.png",
    link: "https://www.enib.fr/",
  },
  {
    name: "Novagen Conseil",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oT2DcqVrCOw3M89xD1mrCsmnLt9clj.png",
    link: "https://www.novagen.tech/",
  },
]

const CompanyBanner: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 15000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <div className="w-full backdrop-blur-sm bg-white/30 dark:bg-black/30 py-8">
      <Slider {...settings} className="w-full px-8">
        {companies.map((company) => (
          <div key={company.name} className="flex items-center justify-center">
            <Link
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full px-4"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={150}
                height={150}
                className={`transition-transform duration-300 ease-in-out hover:scale-110 ${
                  company.name === "UQAC" ||
                  company.name === "ENIB" ||
                  company.name === "SHOM" ||
                  company.name === "Novagen Conseil"
                    ? ""
                    : "filter dark:invert"
                }`}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CompanyBanner

