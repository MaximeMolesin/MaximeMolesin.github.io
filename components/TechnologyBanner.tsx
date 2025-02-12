import type React from "react"
import Slider from "react-slick"
import Image from "next/image"
import Link from "next/link"

// Importez les styles CSS de react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const technologies = [
  { 
    name: "Python", 
    logo: "/logos/python.png",
    link: "https://www.python.org/"
  },
  { 
    name: "TensorFlow", 
    logo: "/logos/tensorflow.png",
    link: "https://www.tensorflow.org/"
  },
  { 
    name: "Docker", 
    logo: "/logos/docker.png",
    link: "https://www.docker.com/"
  },
  { 
    name: "PostgreSQL", 
    logo: "/logos/postgresql.png",
    link: "https://www.postgresql.org/"
  },
  { 
    name: "TypeScript", 
    logo: "/logos/typescript.png",
    link: "https://www.typescriptlang.org/"
  },
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
    <div className="w-full backdrop-blur-sm bg-white/30 dark:bg-black/30 py-8 overflow-hidden">
      <div className="w-[calc(100%+200px)] -ml-[100px]">
        <Slider {...settings}>
          {technologies.map((tech) => (
            <div key={tech.name} className="px-4 flex items-center justify-center h-24">
              <Image
                src={tech.logo || "/placeholder.svg"}
                alt={tech.name}
                width={100}
                height={100}
                className="mx-auto filter dark:invert max-h-full w-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TechnologyBanner
