import gsap from "gsap";
import { useEffect } from "react";

export default function ContactUsAnimation() {
  useEffect(() => {
    const balance = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
      delay: 2,
    });

    const falling = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
      delay: 1,
    });

    const shrinkJump = gsap.timeline({
      repeat: -1,
      repeatDelay: 2.5,
      delay: 3,
    });

    const rotate = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    balance
      .to("#balance", {
        rotate: "-45deg",
        transformOrigin: "bottom left",
        ease: "power2.inOut",
        duration: 1.5,
      })
      .to(
        "#balance",
        {
          rotate: "0deg",
          transformOrigin: "bottom left",
          ease: "power2.inOut",
          duration: 2,
        },
        "2"
      );

    falling
      .to("#falling", {
        rotateX: "180deg",
        duration: 1.8,
        ease: "power2.out",
        transformOrigin: "bottom center",
      })
      .to("#falling", {
        rotateX: "0deg",
        duration: 2,
        ease: "power2.in",

        transformOrigin: "bottom center",
      });

    shrinkJump
      .to("#shrinkJump", {
        scaleX: "1.5",
        scaleY: "0.2",
        ease: "power1.inOut",
        transformOrigin: "bottom center",
        duration: 1,
      })
      .to("#shrinkJump", {
        scaleX: "1",
        scaleY: "1.3",
        ease: "power1.inOut",
        translateY: "-100px",
        duration: 1.5,
      })
      .to("#shrinkJump", {
        translateY: "0px",
        scale: "1",
        ease: "power1.out",
        duration: 1.5,
      });

    rotate
      .to("#rotate", { rotateY: "180deg", ease: "power4.out" })
      .to("#rotate", { rotateY: "360deg", ease: "power4.out" }, "<1");
  }, []);

  return (
    <div className="home-container bg-kleinBlue gap-16 ">
      <div className="px-8">
        <span id="balance" className="funky">
          L
        </span>
        <span className="funky">I</span>
        <span className="funky">L</span>
        <span id="falling" className="funky">
          L
        </span>
        <span className="funky">E</span>
        <span className="funky">S</span>
        <span id="shrinkJump" className="funky">
          T
        </span>
        <span className="funky">R</span>
        <span id="rotate" className="funky">
          Ø
        </span>
        <span className="funky">M</span>
      </div>
      <span className="text-white text-6xl text-right font-heading uppercase ml-40 xl:text-7xl">
        optikk
      </span>
    </div>
  );
}
