import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import piggy from '../assets/piggy.svg';

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="flex flex-col md:flex-row items-center justify-between mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <div className="relative z-1 max-w-[62rem] text-left mb-8 md:mb-0">
            <h1 className="h1 mb-6">
              <span className="inline-block relative">
                Gullak
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mb-6 text-n-2 lg:mb-8">
              Gullak: Your Pocket Pal for Smart Spending and Saving.
            </p>
            <Button href="/pricing" white>
              Get started
            </Button>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl">
            <img src={piggy} alt="Piggy Bank" className="w-60 h-60 " />
          </div>
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;