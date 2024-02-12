import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  
  useEffect(() => {
    AOS.init()
    AOS.refresh();
  }, [])

  return (
    <div className="App text-slate-800">
      <div className="mx-7 relative">
        <Navbar />
      </div>
      <Hero />
      <div className="h-[1000px] mx-12 mt-32 text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi illum voluptate dignissimos itaque, pariatur culpa hic commodi architecto voluptatem deleniti magnam voluptatum aliquid iste perspiciatis. Perferendis velit vero nostrum. Blanditiis praesentium consequatur nihil ipsam placeat molestias atque fuga doloribus quis, unde architecto sunt recusandae non, natus adipisci, quas incidunt cupiditate rerum harum. Distinctio fugiat delectus quaerat possimus velit quis blanditiis sint ipsa mollitia eaque, eius accusantium, nam voluptas, doloribus minus officia quidem? Sed, unde totam! Nam excepturi, ratione non, sint vero aut, pariatur porro laboriosam mollitia sapiente nulla totam autem fugit distinctio dolores animi magni ipsam debitis quibusdam blanditiis earum nisi asperiores. Tempora magni tempore possimus, voluptas eius voluptatum itaque incidunt dolore nulla fugiat consequatur unde magnam, suscipit expedita quisquam nemo voluptates facilis dignissimos porro iusto alias. Nulla modi, consequuntur, possimus consectetur odio fugiat voluptatum saepe perferendis culpa assumenda rerum doloribus maxime dolore veniam, sunt dolorum deserunt asperiores ad alias sint necessitatibus voluptatibus error maiores. Recusandae nisi assumenda et temporibus maxime ab earum consectetur unde sit quaerat ullam eligendi ea, dolore omnis quas incidunt beatae? Repudiandae voluptatem atque explicabo cum, officiis repellat aspernatur illo. Eligendi quia totam harum vero id dignissimos a numquam sunt modi ducimus labore amet iste maiores assumenda, velit nesciunt iure vitae exercitationem quod magni cum debitis ut! Quia facere eos officiis ut nihil. Optio cum non numquam excepturi magni. Facere nulla totam impedit, ab, fugit dolores laboriosam veritatis quasi odit praesentium molestias. Libero facilis excepturi nulla rerum doloribus aliquid rem, iure accusamus eum eaque eveniet assumenda dolor nam perspiciatis illum! Minus earum vel sit iste. Eius, exercitationem? Cupiditate totam repudiandae sequi, dolorum laborum odit laboriosam illo consequuntur vero magnam recusandae quod, corporis laudantium quibusdam ab labore voluptas? Cumque dolor in, perferendis officiis eligendi deserunt labore! Optio aspernatur nobis explicabo inventore tenetur expedita distinctio nulla! Porro, rerum enim! Et cupiditate quibusdam maiores tempora repellendus quas incidunt excepturi. Vero ipsa veniam quos cum at distinctio facilis quia accusantium, temporibus consectetur, perspiciatis repellat neque dolore possimus quaerat! Laboriosam quasi blanditiis dolor corporis illo nihil quos hic corrupti ea nostrum eaque modi magnam, accusantium, sit enim distinctio voluptate? Modi, rerum quaerat? Magni facilis quia blanditiis minima totam expedita dolorum ex nemo eum. Animi cumque reiciendis ea earum, nihil quis ratione. Consectetur eos laboriosam incidunt expedita minus eligendi, labore pariatur, odit porro est voluptatum natus vitae quis distinctio ea deleniti eum doloremque repudiandae harum, omnis dolor facere enim quo. Magni ipsa doloremque nemo fuga sunt esse soluta, praesentium iure sapiente officia voluptatibus delectus atque, ad non perferendis corporis odit sit aliquam sint consequuntur nam. Deserunt earum quod asperiores fuga consequatur delectus facilis necessitatibus quia error nisi numquam nemo dolorem dolores et accusantium ab ratione sint, reprehenderit hic odio adipisci eveniet repudiandae atque? Et dolorum sapiente, adipisci cupiditate quibusdam vero. Exercitationem repudiandae ex maxime ratione at sed mollitia fuga alias? Esse voluptatum iste odit quidem laboriosam atque voluptatibus, exercitationem adipisci praesentium repudiandae. Quibusdam quod voluptate dolorum rerum, possimus aliquid natus id est officiis, illo excepturi accusantium atque corrupti, saepe error ipsam? Rerum temporibus molestias reiciendis ullam. Repudiandae, nobis. Dignissimos odio iste veniam nulla quis earum aut, officia harum dolorem culpa aliquam. Quisquam reiciendis similique est! Unde tempora fugit ab, labore repudiandae autem. Vel nesciunt officia hic consequatur? Quas ullam optio labore nisi officiis nobis eius ab? Illo tenetur minima officiis magnam? Fugit eum sint ad aperiam, asperiores rerum id necessitatibus quas provident officia beatae nulla ipsum dolore dignissimos consectetur. Molestias porro recusandae cumque suscipit odio, laboriosam quia! Sunt libero ducimus eveniet ab delectus veniam impedit porro rem ullam cum distinctio nesciunt tenetur, autem iste magni praesentium hic. Alias non ad perferendis. Officiis ex minima assumenda eos quia libero, illo vero? Sed tempora asperiores dolore deserunt natus minima quas reprehenderit, 
      </div>
    </div>
  );
}

export default App;
