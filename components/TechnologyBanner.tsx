import type React from "react"
import Slider from "react-slick"
import Image from "next/image"

// Importez les styles CSS de react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const technologies = [
  { name: "Python", logo: "/logos/python.svg" },
  { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
]

const TechnologyBanner: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }

  return (
    <div className="w-full backdrop-blur-sm bg-white/30 dark:bg-black/30 py-8">
      <Slider {...settings}>
        {technologies.map((tech) => (
          <div key={tech.name} className="px-4">
            <Image
              src={tech.logo || "/placeholder.svg"}
              alt={tech.name}
              width={100}
              height={100}
              className="mx-auto filter dark:invert"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TechnologyBanner

