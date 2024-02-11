import { useEffect, useRef, useState } from "react";
import bgSection from "../images/bg-section2.jpg";

export default function Hero() {
  const nameSection = useRef(null);
  const nameCopy = useRef(null);
  const bgSectionRef = useRef(null);
  const [isScrolledToBgSection, setIsScrolledToBgSection] = useState(false);

  useEffect(() => {
    const sectionElement = nameSection.current;
    const copyElement = nameCopy.current;

    if (sectionElement && copyElement) {
      const sectionWidth = sectionElement.offsetWidth;
      const sectionHeight = sectionElement.offsetHeight;

      copyElement.style.width = `${sectionWidth}px`;
      copyElement.style.height = `${sectionHeight}px`;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bgSectionOffsetTop = bgSectionRef.current.offsetTop;
      console.log(bgSectionOffsetTop);
      setIsScrolledToBgSection(scrollY >= bgSectionOffsetTop);
    };

    // Tambahkan event listener ketika komponen dimount
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mx-12 sm:text-base text-sm ">
      <div className="max-w-[1100px] flex lg:gap-4 gap-6 flex-col lg:h-screen h-[810px] m-auto pb-1">
        <div ref={nameCopy} />
        <div
          ref={nameSection}
          className="fixed z-0 max-w-[1100px] mr-11 pt-16"
          style={{ opacity: isScrolledToBgSection ? 0 : 1 }} // Mengubah opasitas sesuai dengan state isScrolledToBgSection
        >
          <section className="sm:text-7xl text-5xl font-bold">
            <h1
              data-aos="fade-up"
              data-aos-duration="550"
              data-aos-easing="ease"
              data-aos-delay="1100"
            >
              Muhammad
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-duration="550"
              data-aos-easing="ease"
              data-aos-delay="500"
            >
              Akbar Perdana
            </h1>
          </section>
          <p
            data-aos="fade-up"
            data-aos-duration="550"
            data-aos-easing="ease-in"
          >
            I am a highly motivated and enthusiastic software engineer with a
            specialization in frontend development. With a passion for creating
            visually appealing and user-friendly web experiences
          </p>
        </div>

        <div
          ref={bgSectionRef}
          className="w-full lg:h-2/6 h-1/2 flex-grow grayscale-85 z-10"
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
              illum voluptates, harum repellendus vero vitae?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
