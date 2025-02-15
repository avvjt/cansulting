"use client";
import { motion } from "framer-motion";
import LogoWall from "../../components/LogoWall";

// Split logos into two groups for alternating rows
const logos1 = [
  { imgUrl: "/logos/decor.png", altText: "Decor" },
  { imgUrl: "/logos/kotak.png", altText: "Kotak Mahindra Bank" },
  { imgUrl: "/logos/mcdonalds.png", altText: "McDonald's" },
  { imgUrl: "/logos/amri.png", altText: "AMRI Hospitals" },
  { imgUrl: "/logos/tata.png", altText: "Tata" },
  { imgUrl: "/logos/nykaa.png", altText: "Nykaa" },
  { imgUrl: "/logos/mayfair.png", altText: "Mayfair" },
  { imgUrl: "/logos/boyanika.png", altText: "Boyanika" },
  { imgUrl: "/logos/acrerise.png", altText: "Acrerise" },
  { imgUrl: "/logos/msme.png", altText: "MSME" },
];

const logos2 = [
  { imgUrl: "/logos/audi.png", altText: "Audi" },
  { imgUrl: "/logos/imfa.png", altText: "IMFA" },
  { imgUrl: "/logos/vedanta.png", altText: "Vedanta" },
  { imgUrl: "/logos/ormas.png", altText: "ORMAS" },
  { imgUrl: "/logos/dnhomes.png", altText: "DN Homes" },
  { imgUrl: "/logos/sai.png", altText: "SAI International" },
  { imgUrl: "/logos/ovo.png", altText: "OVO Farms" },
  { imgUrl: "/logos/pride.png", altText: "Pride World Playway" },
  { imgUrl: "/logos/khimji.png", altText: "Khimji" },
  { imgUrl: "/logos/cvraman.png", altText: "C.V. Raman University" },
  { imgUrl: "/logos/ubeau.png", altText: "Ubeau Aesthetics" },
];

export default function TrustedPartners() {
  return (
    <section className="px-6 py-16 bg-white">
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
          className="space-y-16"
        >
          <motion.div className="h-28">
            <LogoWall
              items={logos1}
              direction="horizontal"
              pauseOnHover={false}
              size="clamp(6rem, 1rem + 12vmin, 20rem)"
              duration="40s"
              bgColor="#ffffff"
              bgAccentColor="#ffffff"
              textColor="#000000"
              reverse={false}
            />
          </motion.div>
          <motion.div className="h-28">
            <LogoWall
              items={logos2}
              direction="horizontal"
              pauseOnHover={false}
              size="clamp(6rem, 1rem + 12vmin, 20rem)"
              duration="35s"
              bgColor="#ffffff"
              bgAccentColor="#ffffff"
              textColor="#000000"
              reverse={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
