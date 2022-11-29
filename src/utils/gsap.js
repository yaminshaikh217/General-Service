import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const gsapFunc = () => {
  const cardsTl = gsap.timeline({
    defaults: {
      ease: "power4.out",
      duration: 0.5,
    },
    scrollTrigger: {
      trigger: "#serviceId .cards",
        // markers: true,
      start: "top 95%",
      end: "top 30%",
    },
  });
  cardsTl.fromTo(
    "#serviceId .cards",
    { y: 100, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, stagger: 0.5 }
  );
};
export const upcomingServices = () => {
  const cardsTl = gsap.timeline({
    defaults: {
      ease: "power4.out",
      duration: 0.6,
    },
    scrollTrigger: {
      trigger: ".upcomingServices .cards",
      // markers: true,
      start: "-20% 95%",
      end: "top 30%",
    },
  });
  cardsTl.fromTo(
    ".upcomingServices .cards",
    { y: 100, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, stagger: 0.3 }
  );
};

export const homeAnim = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
      duration: 0.75,
    },
  });
  tl.fromTo(".heroBg", { scale: 1.4 }, { scale: 1 }).fromTo(
    ".revealText",
    { y: 50, height: 0, autoAlpha: 0, skewY: 3 },
    { y: 0, height: "auto", autoAlpha: 1, skewY: 0, stagger: 0.3 }
  );
};
// export const aboutAnim = () => {
//   const tl = gsap.timeline({
//     defaults: {
//       ease: "power4.in",
//       duration: 0.6,
//     },
//     scrollTrigger: {
//       trigger: ".progresBox",
//       start: "top 90%",
//       end: "top 30%",
//     },
//   });

//   tl.from(".absBar", { width: "0%", stagger: 0.2 });
// };

export const aboutAnim = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".targetCounter",
      start: "top 90%",
      end: "top 30%",
      // markers: true,
    },
  });
  // tl.from('.counter-numbers',{display:"none"})
  ;
};

// const callIncreFunc = () => {
//   const counterNum = document.querySelectorAll(".counter-numbers");
//   const speed = 200;
//   counterNum.forEach((curNumber) => {

//     const updateNumber = () => {
//       const targetNumber = +curNumber.dataset.number;
//       const initialNumber = +curNumber.innerText;
//       const incrementNumber = Math.trunc(targetNumber / speed);
//       if (initialNumber < targetNumber) {
//         curNumber.innerText = `${initialNumber + incrementNumber}`;
//         setTimeout(updateNumber, 10);
//       } else {
//         curNumber.innerText = `${targetNumber}+`;
//       }
//     };
//     updateNumber();
//   });
// };

export default gsapFunc;
