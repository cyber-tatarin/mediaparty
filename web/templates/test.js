// const popUp = document.querySelector(".pop-up");
// const popUpInner = document.querySelector(".pop-up__inner");

// // const popUpContent = document.querySelector(".pop-up__content");
// // const popUp = document.querySelector(".pop-up");
// setTimeout(() => {
//   popUp.classList.remove("pop-up_hidden");
//   popUpInner.classList.remove("pop-up__inner_hidden");
//   popUpInner.classList.add("pop-up__inner_show");
//   // document.querySelector("#item").click();
//   // popUpContent.classList.remove("pop-up__content_hidden");
// }, 1000);

// // document.addEventListener('scroll', () => {

// // })

const mainSwiper = new Swiper(".main-swiper", {
  direction: "vertical",
  mousewheel: {
    sensitivity: 1,
  },
  effect: "slide",
  freeMode: false,

  // cssMode: true,
  // slideClass: "main-slide",
  // slideActiveClass: "main-active-class",
  // slideNextClass: "main-next-class",
  // slidePrevClass: "main-prev-class",
  // wrapperClass: "main-wrapper",
  init: false,
  // delay: 0,
  // resistance: true,
  // autoHeight: true,
  slidesPerView: 1,
  // allowTouchMove: false,
  // noSwiping: true,
  // noSwipingClass: "swiper-slide",

  pagination: {
    el: ".swiper-pagination",
  },
  watchOverflow: true,
  // slidesOffsetAfter: 300,
  // slidesPerGroup: 3,
  // slidesPerGroupSkip: 2,
  touchRatio: 1,
  // centeredSlidesBounds: true,
  // autoHeight: true,
  // spaceBetween: 40,

  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },

  // effect: "cube",

  // cubeEffect: {
  //   slideShadows: false,
  //   shadow: false,
  // },
  speed: 1000,
});

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
  // slidesPerGroup: 3,
  // slidesPerGroupSkip: 2,
  touchRatio: 0.33,
  // centeredSlidesBounds: true,
  // autoHeight: true,
  // spaceBetween: 40,

  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },

  // effect: "cube",

  // cubeEffect: {
  //   slideShadows: false,
  //   shadow: false,
  // },
  speed: 0,
});

const swiper2 = new Swiper(".smile-swiper", {
  // Optional parameters
  direction: "vertical",
  // reverseDirection: true,
  // loop: true,
  init: false,
  mousewheel: {
    sensitivity: 1,
  },
  allowTouchMove: false,
  // noSwiping: true,
  // noSwipingClass: "swiper-slide",
  // preventInteractionOnTransition: true,
  // height: 90,
  autoHeight: true,
  // spaceBetween: 50,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  watchOverflow: true,

  // effect: "cube",

  // cubeEffect: {
  //   slideShadows: false,
  //   shadow: false,
  // },
  speed: 0,
});

const gallerySwiper = new Swiper(".gallery-swiper", {
  direction: "horizontal",
  mousewheel: {
    sensitivity: 1,
  },
  nested: true,
  inverse: true,
  invert: true,
  mousewheel: true,
  // autoHeight: true,
  slidesPerView: 1,
  // init: false,
  // allowTouchMove: false,
  // noSwiping: true,
  // noSwipingClass: "swiper-slide",
  // preventInteractionOnTransition: true,

  pagination: {
    el: ".swiper-pagination",
  },
  watchOverflow: true,
  slidesOffsetAfter: 0,
  slidesOffsetBefore: 0,
  // slidesPerGroup: 3,
  // slidesPerGroupSkip: 2,
  touchRatio: 0.33,
  // centeredSlidesBounds: true,
  // autoHeight: true,
  // spaceBetween: 40,

  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },

  // effect: "cube",

  // cubeEffect: {
  //   slideShadows: false,
  //   shadow: false,
  // },
  speed: 1000,
});

swiper.controller.control = swiper2;
swiper2.controller.control = swiper;

let currentSlide = swiper.activeIndex;

let clientX;
let clientY;

let deltaX;
let deltaY;

let slideCounter = 0;

swiper.on("activeIndexChange", (event) => {
  console.log("slideCounter = ", slideCounter);
  console.log("swiperActiveSlide = ", swiper.activeIndex);
  if (swiper.activeIndex === 4) {
    currentSlide = swiper.activeIndex;
    // document.addEventListener("wheel", (event) => {
    //   if (event.deltaY > 0) {
    //     swiper.slideTo(3, 0);
    //     document
    //       .querySelector(".pop-up__inner")
    //       .classList.add("pop-up__inner_no-radius");
    //     document.querySelector(".pop-up").classList.add("pop-up_full-screen");
    //     document
    //       .querySelector(".first-screen")
    //       .classList.add("first-screen_hidden");
    //     document.querySelector(".pop-up").classList.add("pop-up-static");

    //     // document
    //     //   .querySelector(".button__container")
    //     //   .classList.add("button-return");
    //   } else {
    //     document
    //       .querySelector(".pop-up__inner")
    //       .classList.remove("pop-up__inner_no-radius");

    //     document
    //       .querySelector(".pop-up")
    //       .classList.remove("pop-up_full-screen");
    //   }
    // });

    // document.querySelector(".buy-ticket").classList.remove("item_hidden");
    // document.querySelector(".button__container").style.visibility = "visible";
    // document.querySelector(".buy-ticket").style.visibility = "visible";

    if (document.querySelector(".smiles-img")) {
      document.querySelector(".smiles-img").style.opacity = "0";
      // document.querySelector(".smiles-img").classList.add = "";
    }
  }
  //else {
  //   document
  //     .querySelector(".pop-up__inner")
  //     .classList.remove("pop-up__inner_no-radius");

  //   document.querySelector(".pop-up").classList.remove("pop-up_full-screen");
  // }
});

// document.addEventListener("touchmove", (event) => {
//   // console.log(event);
//   if (deltaY < 0) {
//     document.querySelector(".pop-up__inner").style.height = "576px";
//     document.querySelector(".pop-up__inner").style.paddingBottom = "32";
//   }
// });

document.addEventListener("touchstart", (event) => {
  clientX = event.touches[0].clientX;
  clientY = event.touches[0].clientY;
});

document.addEventListener("touchend", (event) => {
  // Compute the change in X and Y coordinates.
  // The first touch point in the changedTouches
  // list is the touch point that was just removed from the surface.
  deltaX = event.changedTouches[0].clientX - clientX;
  deltaY = event.changedTouches[0].clientY - clientY;
  // if (deltaY < 0 && slideCounter === 0) {
  //   document.querySelector(".pop-up__inner").style.height = "576px";
  //   document.querySelector(".pop-up__inner").style.paddingBottom = "32px";
  //   // swiper.slideTo(0, 0);
  //   slideCounter++;
  // } else if (deltaY > 0 && slideCounter === 1) {
  //   document.querySelector(".pop-up__inner").style.height = "44px";
  //   document.querySelector(".pop-up__inner").style.paddingBottom = "0";
  //   slideCounter--;
  // }

  if (deltaY) {
    console.log("touched", swiper.activeIndex, slideCounter);
    // if (swiper.activeIndex !== slideCounter) {
    //   swiper.slideTo(slideCounter);
    // }
  }

  // if (slideCounter === 4) {
  //   console.log("go");
  //   document
  //     .querySelector(".second-screen")
  //     .scrollIntoView({ behavior: "smooth" });
  // }

  // if (slideCounter === 4 && deltaY > 0) {
  //   console.log("back");
  //   document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
  // }

  if (deltaY < 0) {
    // console.log(slideCounter);
    if (slideCounter === 0) {
      setTimeout(() => {
        document
          .querySelector(".smile-swiper")
          .classList.remove("smile-swiper_hidden");
        swiper2.init();
      }, 500);

      document
        .querySelector(".pop-up__inner")
        .classList.add("pop-up__inner_active");
      document.querySelector(".video").style.opacity = "0";
      document.querySelector(".button").style.opacity = "0";
      document
        .querySelector(".swiper-inner")
        .classList.remove("swiper-inner_hidden");
      document
        .querySelector(".swiper-inner")
        .classList.add("swiper-inner_active");
      document.querySelector(".smiles-img").classList.remove("smiles_hidden");
    }

    // if (slideCounter === 3) {
    //   swiper.slideTo(4, 1000);
    // } else if (slideCounter === 4) {
    //   swiper.slideTo(4, 1000);
    // } else {
    if (slideCounter === 3) {
      // gallerySwiper.direction = "vertical";
      mainSwiper.init();
      // swiper.disable();
      // swiper2.disable();
      document
        .querySelector(".button__container")
        .classList.add("button-return");
      document
        .querySelector(".section__titles")
        .classList.add("section__titles_return");
      document.querySelector(".smiles-img").classList.add("smiles_hidden");
      document
        .querySelector(".pop-up__inner")
        .classList.add("pop-up__inner_no-radius");
      document.querySelector(".pop-up").classList.add("pop-up_full-screen");
      document
        .querySelector(".first-screen")
        .classList.add("first-screen_hidden");
      // setTimeout(() => {
      document.querySelector(".pop-up").classList.add("pop-up-static");
      document
        .querySelector(".second-screen")
        .classList.remove("second-screen_hidden");
      document
        .querySelector(".second-screen")
        .classList.add("second-screen_active");
      // document
      //   .querySelector(".wrapper-to-change")
      //   .classList.remove("wrapper_active");
      // }, 500);
    }
    swiper.slideTo(slideCounter, 0);
    // }

    slideCounter++;
  }

  if (deltaY > 0) {
    if (slideCounter === 1) {
      slideCounter--;
      document
        .querySelector(".pop-up__inner")
        .classList.remove("pop-up__inner_active");
      document.querySelector(".video").style.opacity = "1";
      document.querySelector(".button").style.opacity = "1";
    } else {
      swiper.slideTo(slideCounter - 2, 0);
      slideCounter--;
    }
  }

  // else if (deltaY < 0 && slideCounter === 1) {
  //   swiper.slideTo(1, 1000);
  //   slideCounter++;
  //   console.log(slideCounter);
  // } else if (deltaY > 0 && slideCounter === 2) {
  //   swiper.slideTo(0, 1000);
  //   slideCounter--;
  //   console.log(slideCounter);
  // } else if (deltaY < 0 && slideCounter === 2) {
  //   swiper.slideTo(2, 1000);
  //   slideCounter++;
  //   console.log(slideCounter);
  // } else if (deltaY > 0 && slideCounter === 3) {
  //   swiper.slideTo(1, 1000);
  //   slideCounter--;
  //   console.log(slideCounter);
  // } else if (deltaY < 0 && slideCounter === 3) {
  //   document.querySelector(".button__container").classList.add("button-return");
  //   document.querySelector(".smiles-img").style.visibility = "hidden";
  //   // swiper.slideTo(6, 1000);
  //   slideCounter++;
  //   console.log(slideCounter);
  // } else if (deltaY > 0 && slideCounter === 4) {
  //   // swiper.slideTo(3, 1000);
  //   document
  //     .querySelector(".button__container")
  //     .classList.remove("button-return");
  //   document.querySelector(".smiles-img").style.visibility = "visible";

  //   slideCounter--;
  //   console.log(slideCounter);
  // }
});

// setTimeout(() => {
//   document.querySelector(".pop-up__inner").style.height = "576px";
//   document.querySelector(".pop-up__inner").style.paddingBottom = "32";
// }, 1000);
