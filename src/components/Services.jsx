import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { gullakServices, brainwaveServicesIcons } from "../constants";import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Smart Money Management for Students"
          text="Gullak empowers college students to take control of their finances"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Easy Saving</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Gullak makes it simple for students to save money and reach their financial goals
              </p>
              <ul className="body-2">
                {gullakServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
             

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Smart Spending</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Track your expenses and get personalized recommendations to spend wisely and stay within your budget.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Peer-to-Peer Lending</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Need extra cash? Borrow from your peers at minimal interest rates and pay back when you can.
                </p>

                
              </div>

          
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;