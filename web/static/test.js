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

let isActive = false;

let slideCounter = 0;

function findTop(element) {
  let rec = document.querySelector(element).getBoundingClientRect();

  return rec.top;
}

swiper.on("activeIndexChange", (event) => {
  console.log("slideCounter = ", slideCounter);
  console.log("swiperActiveSlide = ", swiper.activeIndex);
  if (swiper.activeIndex === 4) {
    // currentSlide = swiper.activeIndex;

    if (document.querySelector(".smiles-img")) {
      document.querySelector(".smiles-img").style.opacity = "0";
    }
  }
});

document.addEventListener("scroll", (event) => {
  if (isActive) {
    console.log("active");
    if (
      document.querySelector(".photos").classList.contains("photos_full-screen")
    ) {
      if (findTop("#bg_5") > 30) {
        console.log("hsafhksadjf");

        document.querySelector("body").style.overflow = "hidden";
        console.log("AAAAAAAA");
        document
          .querySelector(".photos")
          .classList.remove("photos_full-screen");
        document
          .querySelector(".main__container")
          .classList.remove("main__container_full-screen");
        // document.querySelector("#bg_5").style.transition = "0s ease-out";
        document.querySelector("#bg_5").style.transform = `translateY(0px)`;
        document.querySelector(".photos").style.transform = `translateY(0px)`;
        items = document.querySelectorAll(".main__item_to-hide");
        items.forEach((el) => {
          el.style.opacity = 1;
        });
        setTimeout(() => {
          document.querySelector("body").style.overflow = "visible";
          isActive = false;
          observer.observe(bg5);
        }, 500);
      }
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
      // document.querySelector(".tabs").style.opacity = 0;
      // document.querySelector(".tabs").style.transform = "translateY(100px)";
      // swiper.allowTouchMove = true;
      // swiper.disable();
      // swiper2.disable();
      // document.querySelector(".swiper").style.position = "static";
      // document.querySelector(".swiper").style.paddingTop = "140px";
      document.querySelector("body").style.overflow = "visible";
      // swiper.disable();
      document.querySelector(".main").classList.remove("main_hidden");
      // document
      //   .querySelector(".section__titles")
      //   .classList.add("section__titles_return");
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

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector("body").style.overflow = "hidden";
      // console.log(window.innerHeight);
      const offset = window.innerHeight - 230;

      document.querySelector(".photos").style.transform = `translateY(${
        -offset - 330
      }px)`;
      document.querySelector(
        "#bg_5"
      ).style.transform = `translateY(${-offset}px)`;
      const items = document.querySelectorAll(".main__item_to-hide");
      items.forEach((el) => {
        el.style.opacity = 0;
      });
      // document.querySelector("#bg_5").style.backgroundColor = "#ffffff";
      document.querySelector("#bg_5").style.transition = "0.5s ease-out";
      setTimeout(() => {
        document.querySelector("body").style.overflow = "visible";
        isActive = true;
      }, 500);

      // const titles = document.querySelector(".section__titles");

      // const options2 = {
      //   rootMargin: "100px 0px 100px 0px",
      //   threshold: 0,
      // };

      // const observer = new IntersectionObserver((entries, observer) => {
      //   entries.forEach((entry) => {
      //     if (entry.isIntersecting) {
      // document.querySelector("body").style.overflow = "hidden";
      // console.log("AAAAAAAA");
      // document.querySelector(".photos").classList.remove("photos_full-screen");
      // document
      //   .querySelector(".main__container")
      //   .classList.remove("main__container_full-screen");
      // document.querySelector(".main__item").style.transition = "0.5s ease-out";
      // document.querySelector("#bg_5").style.transform = `translateY(0px)`;
      // document.querySelector(".photos").style.transform = `translateY(0px)`;
      // items = document.querySelectorAll(".main__item_to-hide");
      // items.forEach((el) => {
      //   el.style.opacity = 1;
      // });

      //       entry.target.src = entry.target.dataset.src;
      //       observer.unobserve(entry.target);
      //       // document.querySelector("body").style.overflow = "visible";
      //     }
      //   });
      // }, options2);

      // swiperPhoto.init();
      // // let controller = new ScrollMagic.Controller();

      // // // create a scene
      // // new ScrollMagic.Scene({})
      // //   .setPin("#bg_5") // pins the element for the the scene's duration
      // //   .addTo(controller); // assign the scene to the controller
      // // document.querySelector(".bg_5").setAttribute("tabindex", "-1");

      // // document.querySelector(".bg_5").focus();

      // // document.querySelector(".bg_5").removeAttribute("tabindex");
      // scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
      //   // if any scroll is attempted,
      //   // set this to the previous value
      //   (window.onscroll = function () {
      //     window.scrollTo(scrollLeft, scrollTop);
      //   });

      // location.href = "#";
      // location.href = "#bg_5";
      // document.querySelector("body").style.overflow = "visible";
      // document.querySelector(".bg_5").scrollIntoView();
      // window.scrollTo({ top: 1770, behavior: "smooth" });

      document.querySelector(".photos").classList.add("photos_full-screen");
      document
        .querySelector(".main__container")
        .classList.add("main__container_full-screen");
      // document
      //   .querySelector(".section__titles")
      //   .classList.add("section__titles_full-screen");
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
      // document.querySelector("body").style.overflow = "visible";
    }
  });
};

const options = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

const observer = new IntersectionObserver(callback, options);

observer.observe(bg5);
