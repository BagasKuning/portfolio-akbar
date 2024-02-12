import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Projects() {
  const main = useRef();

  useGSAP(
    () => {
      let items = gsap.utils.toArray(".items"),
        pageWrapper = document.querySelector(".page-wrapper");

      items.forEach((container, i) => {
        let localItems = container.querySelectorAll(".item"),
          distance = () => {
            let lastItemBounds =
                localItems[localItems.length - 1].getBoundingClientRect(),
              containerBounds = container.getBoundingClientRect();
            return Math.max(0, lastItemBounds.right - containerBounds.right);
          };
        gsap.to(container, {
          x: () => -distance(), // make sure it dynamically calculates things so that it adjusts to resizes
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            pinnedContainer: pageWrapper,
            end: () => "+=" + distance(),
            pin: pageWrapper,
            scrub: true,
            invalidateOnRefresh: true, // will recalculate any function-based tween values on resize/refresh (making it responsive)
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <div ref={main}>
      <div class="page-wrapper">
        <header>
          Pin and scroll section horizontally only when necessary to reveal
          content
        </header>
        <section class="section">
          <div class="container">
            <ul class="items scrollx-section">
              <li class="item">1</li>
              <li class="item">2</li>
              <li class="item">3</li>
              <li class="item">4</li>
              <li class="item">5</li>
              <li class="item">6</li>
              <li class="item">7</li>
              <li class="item">8</li>
              <li class="item">9</li>
              <li class="item">10</li>
              <li class="item">11</li>
              <li class="item">12</li>
              <li class="item">13</li>
              <li class="item">14</li>
              <li class="item">15</li>
            </ul>
          </div>
        </section>
        <div class="spacer">spacer</div>
        <section class="section">
          <div class="container">
            <ul class="items scrollx-section">
              <li class="item">1</li>
              <li class="item">2</li>
              <li class="item">3</li>
            </ul>
          </div>
        </section>
        <div class="spacer">spacer</div>

        <section class="section">
          <div class="container">
            <ul class="items scrollx-section">
              <li class="item">1</li>
              <li class="item">2</li>
              <li class="item">3</li>
              <li class="item">4</li>
              <li class="item">5</li>
              <li class="item">6</li>
              <li class="item">7</li>
              <li class="item">8</li>
              <li class="item">9</li>
              <li class="item">10</li>
            </ul>
          </div>
        </section>
        <div class="spacer">spacer</div>
        <section class="next-sections">
          <div class="container">
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              cupiditate molestias reiciendis, commodi voluptatibus labore
              ducimus placeat earum exercitationem vel eius soluta numquam quia.
              Cupiditate nesciunt ut possimus est exercitationem.
            </p>

            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              cupiditate molestias reiciendis, commodi voluptatibus labore
              ducimus placeat earum exercitationem vel eius soluta numquam quia.
              Cupiditate nesciunt ut possimus est exercitationem.
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              cupiditate molestias reiciendis, commodi voluptatibus labore
              ducimus placeat earum exercitationem vel eius soluta numquam quia.
              Cupiditate nesciunt ut possimus est exercitationem.
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              cupiditate molestias reiciendis, commodi voluptatibus labore
              ducimus placeat earum exercitationem vel eius soluta numquam quia.
              Cupiditate nesciunt ut possimus est exercitationem.
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              cupiditate molestias reiciendis, commodi voluptatibus labore
              ducimus placeat earum exercitationem vel eius soluta numquam quia.
              Cupiditate nesciunt ut possimus est exercitationem.
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              cupiditate molestias reiciendis, commodi voluptatibus labore
              ducimus placeat earum exercitationem vel eius soluta numquam quia.
              Cupiditate nesciunt ut possimus est exercitationem.
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              cupiditate molestias reiciendis, commodi voluptatibus labore
              ducimus placeat earum exercitationem vel eius soluta numquam quia.
              Cupiditate nesciunt ut possimus est exercitationem.
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              cupiditate molestias reiciendis, commodi voluptatibus labore
              ducimus placeat earum exercitationem vel eius soluta numquam quia.
              Cupiditate nesciunt ut possimus est exercitationem.
            </p>
          </div>
        </section>
        <div class="spacer">spacer</div>
        <div class="spacer">spacer</div>
      </div>
    </div>
  );
}

export default Projects;
