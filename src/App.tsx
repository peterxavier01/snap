import { useEffect, useState } from "react";

import Button from "./components/Button";
import Navbar from "./components/Navbar";

import HeroDesktop from "./assets/image-hero-desktop.png";
import HeroMobile from "./assets/image-hero-mobile.png";

import { clients } from "./config/utils";

const App = () => {
  const [HeroImg, setHeroImg] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isMobile = screenWidth < 768;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const imageToUse = () => {
      if (isMobile) {
        setHeroImg(HeroMobile);
      } else setHeroImg(HeroDesktop);
    };

    imageToUse();
  }, [isMobile]);

  return (
    <div className="relative max-w-[1440px] mx-auto bg-off-white min-h-screen">
      <header
        className={`sticky top-0 bg-off-white ${
          scrolled ? "shadow-md transition" : ""
        }`}
      >
        <Navbar />
      </header>
      <main className="mb-36 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-center">
          <div className="md:mt-10 mt-8 order-2 md:order-1 w-full px-4 flex flex-col items-center md:items-start">
            <h1 className="text-near-black text-center md:text-left mb-4 md:mb-10 text-4xl sm:text-5xl md:text-[80px] leading-[1] font-bold">
              {isMobile ? (
                <>Make remote work</>
              ) : (
                <>
                  Make <br /> remote work
                </>
              )}
            </h1>
            <p className="font-medium text-medium-gray text-lg mb-10 w-full md:w-[80%] text-center md:text-left">
              Get your team in sync, no matter the location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>

            <Button className="w-40 py-3 text-white font-medium bg-near-black border-near-black hover:text-near-black hover:bg-off-white transition mb-20">
              Learn More
            </Button>

            <div className="flex items-center gap-x-8 gap-y-4 flex-wrap">
              {clients.map((client) => (
                <img key={client.id} src={client.src} alt={client.name} />
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={HeroImg}
              className="w-full md:w-[90%] block"
              alt="hero-image"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
