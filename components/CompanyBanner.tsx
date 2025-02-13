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
    logo: "/images/companies/shom.png",
    link: "https://www.shom.fr/",
  },
  {
    name: "UQAC",
    logo: "/images/companies/uqac.png",
    link: "https://www.uqac.ca/",
  },
  {
    name: "ENIB",
    logo: "/images/companies/enib.png",
    link: "https://www.enib.fr/",
  },
  {
    name: "Novagen Conseil",
    logo: "/images/companies/novagen.png",
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
    <div className="w-full backdrop-blur-sm bg-white/30 dark:bg-black/30 py-8 overflow-hidden">
      <div className="w-[calc(100%+200px)] -ml-[100px]">
        <Slider {...settings}>
          {companies.map((company) => (
            <div key={company.name} className="px-4 flex items-center justify-center h-24">
              <Link
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={150}
                  height={150}
                  className="transition-transform duration-300 ease-in-out hover:scale-110 max-h-full w-auto"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CompanyBanner

