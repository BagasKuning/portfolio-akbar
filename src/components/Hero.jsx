export default function Hero() {
  return (
    <div className="mx-12 sm:text-base text-sm">
      <div className="max-w-[1100px] flex gap-2 flex-col pt-20 lg:h-screen md:h-[800px] h-[1250px] m-auto">
        <section className="sm:text-7xl text-5xl font-bold ">
            <h1>Muhammad</h1>
            <h1>Akbar Perdana</h1>
        </section>

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus veritatis asperiores, dolorum nihil quis officia expedita quaerat repudiandae recusandae qui, adipisci officiis! Earum tenetur eos perferendis sapiente veritatis voluptatibus aperiam.
        </p>

        <div id="background" className="w-full xl:h-2/5 h-[100%] bg-stone-700">

        </div>

        <div className="flex gap-3">
            <div className="flex-1">
                <h2>Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ex? Reprehenderit itaque odit exercitationem illum voluptates, harum repellendus vero vitae?</p>
            </div>
            <div className="flex-1">
            <h2>Timeframe</h2>
                <p>illum voluptates, harum repellendus vero vitae?</p>
            </div>
        </div>
      </div>
    </div>
  );
}
