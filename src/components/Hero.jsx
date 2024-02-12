import { useRef } from "react";
import bgSection from "../images/bg-section2.jpg";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const main = useRef();

  useGSAP(
    () => {
      var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".text",
            start: "top",
            end: "bottom",
            scrub: true,
            markers: true,
        }
    });
    
    tl.to(".text", {
        y: 230,
        opacity: 0,
        ease: "power4.out"
    });
      // const texts = gsap.utils.toArray('.text')
      // texts.forEach((text) => {
      //   gsap.to(text, {
      //     x: 250,
      //     scrollTrigger: {
      //       trigger: text,
      //       start: 'bottom bottom',
      //       end: 'top 20%',
      //       scrub: true,
      //       markers: true,
      //     },
      //   });
      // })
    },
    { scope: main }
  );

  return (
    <div className="mx-12 sm:text-base text-sm " ref={main}>
      <div className="max-w-[1100px] flex lg:gap-4 gap-6 flex-col lg:h-screen h-[810px] m-auto pb-1">
        {/* <div ref={nameCopy} className="pt-16" /> */}
        <div
          className="text z-0 max-w-[1100px] mr-11 pt-16"
          style={{
            transition: "transform 0.3s ease", // Tambahkan transisi untuk efek yang mulus
          }}
        >
          <section className="sm:text-7xl text-5xl font-bold">
            <h1
              data-aos="fade-up"
              data-aos-duration="550"
              data-aos-easing="ease"
              data-aos-delay="1100"
              data-aos-anchor-placement="top-bottom"
            >
              Muhammad
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-duration="550"
              data-aos-easing="ease"
              data-aos-delay="500"
              data-aos-anchor-placement="top-bottom"
            >
              Akbar Perdana
            </h1>
          </section>
          <p
            data-aos="fade-up"
            data-aos-duration="550"
            data-aos-easing="ease-in"
          >
            I am a Software Engineer focused on{" "}
            <span className="sm:text-lg text-base">Back-End</span> development.
            Strongly experience in designing and implementing technical
            solutions for various projects. I am ready to make a meaningful
            contribution provide a great user experience and maintain that
            performance its application remains optimal
          </p>
        </div>

        <div
          className="w-full h-auto flex-grow grayscale-85 z-10"
          style={{
            backgroundImage: `url(${bgSection})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="flex gap-3">
          <div className="flex-1">
            <h2 className="text-lg">Programming & Technology</h2>
            <p className="opacity-98">
              <section>JavaScript, Node JS, MySql,</section>
              <section>Python, C++</section>
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-lg">Timeframe</h2>
            <p className="opacity-98">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              deserunt natus nobis repudiandae dolore libero ullam dicta, vitae
              recusandae delectus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
