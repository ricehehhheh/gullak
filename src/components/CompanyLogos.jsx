import { useEffect, useRef } from "react";

const CompanyLogos = ({ className }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    let currentPosition = 0;
    const speed = 2; // Adjust the speed as needed

    const animateScroll = () => {
      currentPosition -= speed;
      scrollContainer.style.transform = `translateX(${currentPosition}px)`;

      if (Math.abs(currentPosition) >= scrollWidth) {
        currentPosition = 0;
      }

      requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animateScroll);
    };
  }, []);

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping College Students out.
      </h5>
      <div className="overflow-hidden">
        <ul
          className="flex items-center justify-center whitespace-nowrap"
          ref={scrollContainerRef}
        >
          <li className="flex items-center justify-center h-[8.5rem] mr-8 animate-scroll">
            give money
          </li>
          <li className="flex items-center justify-center h-[8.5rem] mr-8 animate-scroll">
            get money
          </li>
          <li className="flex items-center justify-center h-[8.5rem] mr-8 animate-scroll">
            give money
          </li>
          <li className="flex items-center justify-center h-[8.5rem] mr-60 animate-scroll">
            get money
          </li>
          {/* Duplicate the list items for seamless scrolling */}
          <li className="flex items-center justify-center h-[8.5rem] mr-8 animate-scroll">
            give money
          </li>
          <li className="flex items-center justify-center h-[8.5rem] mr-8 animate-scroll">
            get money
          </li>
          <li className="flex items-center justify-center h-[8.5rem] mr-8 animate-scroll">
            give money
          </li>
          <li className="flex items-center justify-center h-[8.5rem] animate-scroll">
            get money
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyLogos;