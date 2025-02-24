"use client";
import { motion } from "framer-motion";
import LogoWall from "../../components/LogoWall";

// Split logos into two groups for alternating rows
const allLogos = [
  {
    imgUrl: "/logos/decor.png",
    altText: "Decor",
    heading: "Decor Innovations",
    description: "Discover the latest trends in home decor and design. Transform your living space with our unique collection.",
  },
  {
    imgUrl: "/logos/kotak.png",
    altText: "Kotak Mahindra Bank",
    heading: "Kotak Financial Solutions",
    description: "Reliable banking services and financial solutions tailored to your needs. Experience secure and convenient banking.",
  },
  {
    imgUrl: "/logos/mcdonalds.png",
    altText: "McDonald's",
    heading: "McDonald's Global Flavors",
    description: "Enjoy your favorite burgers, fries, and more at McDonald's. Taste the quality and consistency you love.",
  },
  {
    imgUrl: "/logos/amri.png",
    altText: "AMRI Hospitals",
    heading: "AMRI Healthcare Excellence",
    description: "Providing world-class healthcare services with a focus on patient care and advanced medical treatments.",
  },
  {
    imgUrl: "/logos/tata.png",
    altText: "Tata",
    heading: "Tata Group Innovations",
    description: "A conglomerate with diverse businesses, committed to innovation and sustainable growth across various sectors.",
  },
  {
    imgUrl: "/logos/nykaa.png",
    altText: "Nykaa",
    heading: "Nykaa Beauty & Lifestyle",
    description: "Explore a wide range of beauty and lifestyle products. Find your perfect look with Nykaa's curated selections.",
  },
  {
    imgUrl: "/logos/mayfair.png",
    altText: "Mayfair",
    heading: "Mayfair Luxury Hospitality",
    description: "Experience luxury and comfort at Mayfair Hotels & Resorts. Indulge in exceptional hospitality and premium amenities.",
  },
  {
    imgUrl: "/logos/boyanika.png",
    altText: "Boyanika",
    heading: "Boyanika Handloom Heritage",
    description: "Showcasing the rich handloom heritage of Odisha. Discover authentic textiles and traditional craftsmanship.",
  },
  {
    imgUrl: "/logos/acrerise.png",
    altText: "Acrerise",
    heading: "Acrerise Real Estate Development",
    description: "Building modern and sustainable living spaces. Explore our innovative real estate projects and developments.",
  },
  {
    imgUrl: "/logos/msme.png",
    altText: "MSME",
    heading: "MSME Development Initiatives",
    description: "Supporting micro, small, and medium enterprises for economic growth and development. Empowering businesses to thrive.",
  },
  {
    imgUrl: "/logos/audi.png",
    altText: "Audi",
    heading: "Audi Premium Automobiles",
    description: "Experience the pinnacle of automotive engineering with Audi's luxury vehicles. Drive innovation and performance.",
  },
  {
    imgUrl: "/logos/imfa.png",
    altText: "IMFA",
    heading: "IMFA Industrial Solutions",
    description: "A leading producer of ferro alloys and minerals. Delivering high-quality products for industrial applications.",
  },
  {
    imgUrl: "/logos/vedanta.png",
    altText: "Vedanta",
    heading: "Vedanta Natural Resources",
    description: "A diversified natural resources company committed to sustainable development and responsible mining practices.",
  },
  {
    imgUrl: "/logos/ormas.png",
    altText: "ORMAS",
    heading: "ORMAS Rural Development",
    description: "Empowering rural communities through sustainable livelihood initiatives. Promoting economic and social development.",
  },
  {
    imgUrl: "/logos/dnhomes.png",
    altText: "DN Homes",
    heading: "DN Homes Residential Projects",
    description: "Creating comfortable and modern homes with a focus on quality and customer satisfaction. Find your dream home.",
  },
  {
    imgUrl: "/logos/sai.png",
    altText: "SAI International",
    heading: "SAI International Education",
    description: "Providing world-class education with a focus on holistic development. Shaping future leaders and innovators.",
  },
  {
    imgUrl: "/logos/ovo.png",
    altText: "OVO Farms",
    heading: "OVO Farms Fresh Produce",
    description: "Delivering fresh and healthy farm produce to your table. Experience the goodness of natural and organic products.",
  },
  {
    imgUrl: "/logos/pride.png",
    altText: "Pride World Playway",
    heading: "Pride World Playway Early Education",
    description: "Providing a nurturing and stimulating environment for early childhood education. Fostering creativity and learning.",
  },
  {
    imgUrl: "/logos/khimji.png",
    altText: "Khimji",
    heading: "Khimji Retail & Distribution",
    description: "A trusted name in retail and distribution, offering a wide range of quality products and services.",
  },
  {
    imgUrl: "/logos/cvraman.png",
    altText: "C.V. Raman University",
    heading: "C.V. Raman University Higher Education",
    description: "Providing quality higher education and research opportunities. Empowering students to achieve their academic goals.",
  },
  {
    imgUrl: "/logos/ubeau.png",
    altText: "Ubeau Aesthetics",
    heading: "Ubeau Aesthetics Beauty Treatments",
    description: "Enhance your natural beauty with Ubeau Aesthetics' advanced beauty treatments and personalized care.",
  },
];

export default function TrustedPartners() {
  return (
    <section className=" py-8 bg-[#f1f1f1]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-3">
          Trusted Partners
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto text-center mb-12">
          Our clients are making moves. Are you? Don&apos;t get left behind—Join
          the brands leading the way with us.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative overflow-hidden"
        >
          {/* Gradient overlay for blur effect */}
          {/* <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" /> */}

          <motion.div className="py-8">
            <LogoWall
              items={allLogos} // Combine both logo arrays
              direction="horizontal"
              pauseOnHover={false}
              size="clamp(8rem, 1rem + 12vmin, 24rem)"
              duration="60s" // Increased duration for combined logos
              bgColor="#f1f1f1"
              bgAccentColor="#f1f1f1"
              textColor="#000000"
              reverse={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

