const swiper = new Swiper(".swiper", {
  direction: "vertical",
  mousewheel: {
    sensitivity: 1,
  },
  autoHeight: true,
  slidesPerView: 3,
  allowTouchMove: false,
  noSwiping: true,
  noSwipingClass: "swiper-slide",
  preventInteractionOnTransition: true,
  pagination: {
    el: ".swiper-pagination",
  },
  watchOverflow: true,
  slidesOffsetAfter: 0,
  touchRatio: 0.33,
  speed: 0,
});

const swiper2 = new Swiper(".smile-swiper", {
  direction: "vertical",
  // init: false,
  mousewheel: {
    sensitivity: 1,
  },
  allowTouchMove: false,
  noSwiping: true,
  noSwipingClass: "swiper-slide",
  preventInteractionOnTransition: true,
  autoHeight: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  watchOverflow: true,
  speed: 0,
});

swiper.controller.control = swiper2;
swiper2.controller.control = swiper;

let currentSlide = swiper.activeIndex;

let clientX;
let clientY;

let deltaX;
let deltaY;

let touch = false;

let isActive = false;

let slideCounter = 0;

let scrollActive = false;

function findTop(element) {
  let rec = document.querySelector(element).getBoundingClientRect();

  return rec.top;
}

var touchDevice =
  navigator.maxTouchPoints || "ontouchstart" in document.documentElement;
// console.log(touchDevice);

let scrollCounter = 0;

swiper.on("activeIndexChange", (event) => {
  console.log("slideCounter = ", slideCounter);
  console.log("swiperActiveSlide = ", swiper.activeIndex);

  if (scrollCounter === 0 && slideCounter === 0 && !touchDevice) {
    scrollCounter++;
    swiper.slidePrev();
    document
      .querySelector(".smile-swiper")
      .classList.remove("smile-swiper_hidden");
    document.querySelector(".smile-swiper").style.opacity = 1;
    document.querySelector(".smile-swiper").style.transitionDelay = "0.3s";
    swiper2.init();

    document
      .querySelector(".pop-up__inner")
      .classList.add("pop-up__inner_active");
    document.querySelector(".video").style.opacity = "0";
    document.querySelector(".button").style.opacity = "0";
    // document.querySelector(".tabs").style.opacity = "0";
    document
      .querySelector(".swiper-inner")
      .classList.remove("swiper-inner_hidden");
    document
      .querySelector(".swiper-inner")
      .classList.add("swiper-inner_active");
  }

  if (swiper.activeIndex === 2 && !touchDevice) {
    swiper.disable();
    swiper2.disable();
    scrollActive = true;
    // document
    //   .querySelector(".above-screen")
    //   .classList.remove("above-screen_hidden");
    setTimeout(() => {
      document.querySelector("body").style.overflow = "visible";
    }, 500);
    document.querySelector(".main").classList.remove("main_hidden");
  }

  // if (swiper.activeIndex === 4) {
  //   if (document.querySelector(".smiles-img")) {
  //     document.querySelector(".smiles-img").style.opacity = "0";
  //   }
  // }
});

document.addEventListener("scroll", (event) => {
  if (scrollActive && !touchDevice) {
    document.querySelector(".button__container").classList.add("button-return");
    document.querySelector(".smiles-img").classList.add("smiles_hidden");
    document
      .querySelector(".pop-up__inner")
      .classList.add("pop-up__inner_no-radius");
    document.querySelector(".pop-up").classList.add("pop-up_full-screen");
    document
      .querySelector(".first-screen")
      .classList.add("first-screen_hidden");
    document.querySelector(".pop-up").classList.add("pop-up-static");
  }
  if (isActive) {
    // console.log("active", findTop("#bg_3"));
    if (
      document.querySelector(".photos").classList.contains("photos_full-screen")
    ) {
      // if (findTop("#bg_3") > -120) {
      //   // console.log("hsafhksadjf");
      //   document.querySelector("body").style.overflow = "hidden";
      //   // console.log("AAAAAAAA");
      //   document
      //     .querySelector(".photos")
      //     .classList.remove("photos_full-screen");
      //   document
      //     .querySelector(".main__container")
      //     .classList.remove("main__container_full-screen");
      //   // document.querySelector("#bg_5").style.transition = "0s ease-out";
      //   document.querySelector("#bg_5").style.transform = `translateY(0px)`;
      //   document.querySelector(".photos").style.transform = `translateY(0px)`;
      //   items = document.querySelectorAll(".main__item_to-hide");
      //   items.forEach((el) => {
      //     el.style.opacity = 1;
      //   });
      //   setTimeout(() => {
      //     document.querySelector("body").style.overflow = "visible";
      //     isActive = false;
      //     observer.observe(bg5);
      //   }, 500);
      // }
    }
  }
});

document.addEventListener("touchstart", (event) => {
  clientX = event.touches[0].clientX;
  clientY = event.touches[0].clientY;
});

document.addEventListener("touchend", (event) => {
  deltaX = event.changedTouches[0].clientX - clientX;
  deltaY = event.changedTouches[0].clientY - clientY;

  if (deltaY) {
    touch = true;
    console.log("touched", swiper.activeIndex, slideCounter);

    if (slideCounter === 0) {
      document.querySelector(".smiles-img").classList.add("smiles_hidden");
    }
  }

  if (deltaY < 0) {
    console.log("down", slideCounter, swiper.activeIndex);
    document.querySelector(".smiles-img").classList.remove("smiles_hidden");
    if (document.querySelector(".pop-up").classList.contains("pop-up-static")) {
      console.log("aaa");
      document.querySelector(".smiles-img").classList.add("smiles_hidden");
    }

    if (slideCounter > 3) {
      slideCounter = 3;
    }

    if (slideCounter === 0) {
      document
        .querySelector(".smile-swiper")
        .classList.remove("smile-swiper_hidden");
      document.querySelector(".smile-swiper").style.opacity = 1;
      document.querySelector(".smile-swiper").style.transitionDelay = "0.3s";
      swiper2.init();

      document
        .querySelector(".pop-up__inner")
        .classList.add("pop-up__inner_active");
      document.querySelector(".video").style.opacity = "0";
      document.querySelector(".button").style.opacity = "0";
      // document.querySelector(".tabs").style.opacity = "0";
      document
        .querySelector(".swiper-inner")
        .classList.remove("swiper-inner_hidden");
      document
        .querySelector(".swiper-inner")
        .classList.add("swiper-inner_active");
    }
    if (slideCounter === 3) {
      setTimeout(() => {
        document.querySelector("body").style.overflow = "visible";
      }, 500);

      document.querySelector(".main").classList.remove("main_hidden");
      document
        .querySelector(".button__container")
        .classList.add("button-return");
      document.querySelector(".smiles-img").classList.add("smiles_hidden");
      document
        .querySelector(".pop-up__inner")
        .classList.add("pop-up__inner_no-radius");
      document.querySelector(".pop-up").classList.add("pop-up_full-screen");
      document
        .querySelector(".first-screen")
        .classList.add("first-screen_hidden");
      document.querySelector(".pop-up").classList.add("pop-up-static");
    }
    if (slideCounter < 3) {
      // document
      //   .querySelector(".section__titles")
      //   .classList.remove("section__titles_return");
    }
    if (slideCounter !== 0) swiper.slideNext();

    slideCounter++;
  }

  if (deltaY > 0) {
    console.log("up", slideCounter, swiper.activeIndex);
    if (
      !document
        .querySelector(".pop-up__inner")
        .classList.contains("pop-up__inner_active")
    ) {
      console.log("t");
      document.querySelector(".smile-swiper").style.opacity = 0;
      document.querySelector(".smile-swiper").style.transitionDelay = "0s";
      // document.querySelector(".smiles-img").classList.add("smiles_hidden");
    }
    if (swiper.activeIndex < 3 && slideCounter > 0) {
      // document.querySelector(".above-screen").style.display = "none";
      // console.log(swiper.init);
      if (!swiper.init) swiper.init();
      // swiper.slidePrev();
      if (findTop(".main-slide") === 0) {
        console.log("c = 0");
        // document
        //   .querySelector(".section__titles")
        //   .classList.remove("section__titles_return");

        document.querySelector(".main").classList.add("main_hidden");

        document.querySelector("body").style.overflow = "hidden";
        // document.querySelector(".tabs").style.transform = "translateY(0px)";
        // document.querySelector(".tabs").style.opacity = 1;

        document
          .querySelector(".button__container")
          .classList.remove("button-return");
        document.querySelector(".smiles-img").classList.remove("smiles_hidden");
        document
          .querySelector(".pop-up__inner")
          .classList.remove("pop-up__inner_no-radius");
        document
          .querySelector(".pop-up")
          .classList.remove("pop-up_full-screen");
        document
          .querySelector(".first-screen")
          .classList.remove("first-screen_hidden");
        // setTimeout(() => {
        document.querySelector(".pop-up").classList.remove("pop-up-static");
      }
    }

    if (slideCounter === 1) {
      if (slideCounter > 0) slideCounter--;
      console.log("destroy");
      document.querySelector(".smile-swiper").style.opacity = 0;
      document.querySelector(".smile-swiper").style.transitionDelay = "0s";
      document
        .querySelector(".pop-up__inner")
        .classList.remove("pop-up__inner_active");
      document.querySelector(".video").style.opacity = "1";
      document.querySelector(".button").style.opacity = "1";
      // document.querySelector(".tabs").style.opacity = "1";
      document
        .querySelector(".swiper-inner")
        .classList.add("swiper-inner_hidden");
      document
        .querySelector(".swiper-inner")
        .classList.remove("swiper-inner_active");
      document.querySelector(".smiles-img").classList.add("smiles_hidden");
    } else {
      if (slideCounter > 4) slideCounter = 4;
      if (slideCounter < 4 && findTop(".main-slide") === 0) swiper.slidePrev();
      if (slideCounter > 0 && findTop(".main-slide") === 0) slideCounter--;
    }

    console.log("top = ", findTop("#bg_5"));

    // if (
    //   document
    //     .querySelector(".main__container")
    //     .classList.contains("main__container_full-screen")
    // ) {
    //   document.querySelector("#bg_5").style.transform = `translateY(0px)`;
    //   document.querySelector(".photos").style.transform = `translateY(0px)`;
    //   const items = document.querySelectorAll(".main__item_to-hide");
    //   items.forEach((el) => {
    //     el.style.opacity = 1;
    //   });
    // }
  }
});

const bg5 = document.querySelector(".photos");

const options2 = {
  rootMargin: "-20px 0px 0px 0px",
  threshold: 0,
};
const observer2 = new IntersectionObserver((entries, observer2) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("SECOND OBSERVER");
      const padding = window.innerHeight / 2;
      let scroll2 = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        offset: 20,
        // easing: "easeOutQuad",
      });
      // document.querySelector("body").style.backgroundColor = "#ffffff";
      // document.querySelector("body").style.overflow = "hidden";
      setTimeout(() => {
        scroll2.animateScroll(document.querySelector(".main__container"));

        document
          .querySelector(".photos")
          .classList.remove("photos_full-screen");
        document
          .querySelector(".main__container")
          .classList.remove("main__container_full-screen");
        // document.querySelector("body").style.overflow = "visible";
      }, 100);
      entry.target.src = entry.target.dataset.src;
      observer2.unobserve(entry.target);
      setTimeout(() => {
        observer.observe(bg5);
      }, 800);
    }
  });
}, options2);

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("FIRST OBSERVER");
      let scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        offset: 10,
        // easing: "easeOutQuad",
      });
      // document.querySelector("body").style.overflow = "hidden";
      setTimeout(() => {
        scroll.animateScroll(document.querySelector("#bg_5"));

        document.querySelector(".photos").classList.add("photos_full-screen");
        document
          .querySelector(".main__container")
          .classList.add("main__container_full-screen");
        // document.querySelector("body").style.overflow = "visible";
      }, 100);
      setTimeout(() => {
        observer2.observe(document.querySelector("#bg_4"));
      }, 800);
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

const observer = new IntersectionObserver(callback, options);

observer.observe(bg5);

document.addEventListener(
  "scrollStart",
  () => {
    document.querySelector("body").style.overflow = "hidden";
  },
  false
);
document.addEventListener(
  "scrollStop",
  () => {
    document.querySelector("body").style.overflow = "visible";
  },
  false
);
