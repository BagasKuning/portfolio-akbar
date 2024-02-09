import bgSection from "../images/bg-section.jpg";

export default function Hero() {
  return (
    <div className="mx-12 sm:text-base text-sm">
      <div className="max-w-[1100px] flex lg:gap-4 gap-6 flex-col pt-16 lg:h-screen md:h-[800px] h-[1250px] m-auto">
        <section className="sm:text-7xl text-5xl font-bold" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-out" data-aos-delay="600">
          <h1>Muhammad</h1>
          <h1>Akbar Perdana</h1>
        </section>

        <p data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out" >
          Saya adalah seorang web developer yang berfokus pada pengembangan
          Back-End. Dengan pengalaman yang kuat dalam merancang dan
          mengimplementasikan solusi teknis untuk berbagai proyek. Saya siap memberikan kontribusi yang berarti dalam
          menghadirkan pengalaman pengguna yang luar biasa dan menjaga kinerja
          aplikasi tetap optimal
        </p>

        <div
          className="w-full lg:h-2/6 h-1/2 grayscale-75"
          style={{
            backgroundImage: `url(${bgSection})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="flex gap-3">
          <div className="flex-1">
            <h2>Team</h2>
            <p className="opacity-98" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, ex? Reprehenderit itaque odit exercitationem illum
              voluptates, harum repellendus vero vitae?
            </p>
          </div>
          <div className="flex-1">
            <h2>Timeframe</h2>
            <p className="opacity-98" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="900">illum voluptates, harum repellendus vero vitae?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
