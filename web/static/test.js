document.addEventListener("DOMContentLoaded", () => {
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

  let scrollCounter = 0;

  swiper.on("activeIndexChange", (event) => {
    console.log("slideCounter = ", slideCounter);
    console.log("swiperActiveSlide = ", swiper.activeIndex);

    if (scrollCounter === 0 && slideCounter === 0 && !touchDevice) {
      document.querySelector(".statue").style.transition = "0.5s ease-out 0.3s";
      document.querySelector(".statue").style.opacity = 1;
      scrollCounter++;
      swiper.slidePrev();
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
    }

    if (swiper.activeIndex === 2 && !touchDevice) {
      scrollActive = true;
      setTimeout(() => {
        document.querySelector("body").style.overflow = "visible";
        swiper.disable();
      }, 500);
      document.querySelector(".main").classList.remove("main_hidden");
    }
  });

  document.addEventListener("scroll", (event) => {
    if (scrollActive && !touchDevice) {
      document
        .querySelector(".button__container")
        .classList.add("button-return");

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
      if (
        document
          .querySelector(".photos")
          .classList.contains("photos_full-screen")
      ) {
      }
    }
  });

  let touchDelta;

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
      }
    }

    //// TO DOWN

    if (deltaY < 0) {
      console.log("down", slideCounter, swiper.activeIndex);
      if (
        document.querySelector(".pop-up").classList.contains("pop-up-static")
      ) {
        console.log("aaa");
      }

      if (slideCounter > 3) {
        slideCounter = 3;
      }

      if (slideCounter === 0) {
        document.querySelector(".statue").style.transition =
          "0.5s ease-out 0.3s";
        document.querySelector(".statue").style.opacity = 1;
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
      }
      if (slideCounter === 3) {
        setTimeout(() => {
          document.querySelector("body").style.overflow = "visible";
          swiper.disable();
        }, 500);
        document.querySelector(".main").classList.remove("main_hidden");
        document
          .querySelector(".button__container")
          .classList.add("button-return");

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
      }
      if (slideCounter !== 0) swiper.slideNext();

      slideCounter++;
    }

    //// TO UP

    if (deltaY > 0) {
      console.log("up", slideCounter, swiper.activeIndex);
      if (swiper.activeIndex < 3 && slideCounter > 0) {
        if (!swiper.init) swiper.init();
        if (findTop(".main-slide") === 0) {
        }
      }

      if (
        slideCounter === 1 &&
        !document
          .querySelector(".pop-up")
          .classList.contains("pop-up_full-screen")
      ) {
        if (slideCounter > 0) slideCounter--;
        console.log("destroy");

        document
          .querySelector(".pop-up__inner")
          .classList.remove("pop-up__inner_active");
        document.querySelector(".statue").style.transition = "0.5s ease-out";
        document.querySelector(".statue").style.opacity = 0;
        document.querySelector(".video").style.opacity = "1";
        document.querySelector(".button").style.opacity = "1";
        // document.querySelector(".tabs").style.opacity = "1";
        document
          .querySelector(".swiper-inner")
          .classList.add("swiper-inner_hidden");
        document
          .querySelector(".swiper-inner")
          .classList.remove("swiper-inner_active");
      } else {
        if (slideCounter > 4) slideCounter = 4;
        if (slideCounter < 4 && findTop(".main-slide") === 0)
          swiper.slidePrev();
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

  // const options2 = {
  //   rootMargin: "-20px 0px 0px 0px",
  //   threshold: 0,
  // };
  // const observer2 = new IntersectionObserver((entries, observer2) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       console.log("SECOND OBSERVER");

  //       const padding = window.innerHeight / 2;
  //       let scroll2 = new SmoothScroll('a[href*="#"]', {
  //         speed: 500,
  //         offset: 20,
  //         // easing: "easeOutQuad",
  //       });
  //       // document.querySelector("body").style.backgroundColor = "#ffffff";
  //       // document.querySelector("body").style.overflow = "hidden";
  //       setTimeout(() => {
  //         scroll2.animateScroll(document.querySelector(".main__container"));

  //         document
  //           .querySelector(".photos")
  //           .classList.remove("photos_full-screen");
  //         document
  //           .querySelector(".main__container")
  //           .classList.remove("main__container_full-screen");
  //         // document.querySelector("body").style.overflow = "visible";
  //       }, 100);
  //       entry.target.src = entry.target.dataset.src;
  //       observer2.unobserve(entry.target);
  //       setTimeout(() => {
  //         observer.observe(bg5);
  //       }, 800);
  //     }
  //   });
  // }, options2);

  let boxElement = document.querySelector("#last-photo");
  let prevRatio = 0.0;
  let increasingColor = "rgba(41, 41, 41, ratio)";
  let decreasingColor = "rgba(255, 255, 255, ratio)";

  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        document.querySelector(".photos").style.backgroundColor =
          increasingColor.replace("ratio", entry.intersectionRatio);
      } else {
        document.querySelector(".photos").style.backgroundColor =
          decreasingColor.replace("ratio", entry.intersectionRatio);
      }

      prevRatio = entry.intersectionRatio;
    });
  }

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("FIRST OBSERVER");
        document.querySelector(".photo-main").style.display = "block";
        const padding = window.innerHeight / 2;
        // document
        //   .querySelector(".bg_5_container")
        //   .classList.add("bg_5_container_active");
        // document
        //   .querySelector(".main__container_bottom")
        //   .classList.add("main__container_bottom_active");

        // document.querySelector("#bg_5_2").style.display = "block";
        // let scroll = new SmoothScroll('a[href*="#"]', {
        //   speed: 500,
        //   offset: 10,
        //   // easing: "easeOutQuad",
        // });

        // setTimeout(() => {
        //   scroll.animateScroll(document.querySelector("#bg_5"));

        //   document.querySelector(".photos").classList.add("photos_full-screen");
        //   document
        //     .querySelector(".main__container")
        //     .classList.add("main__container_full-screen");
        //   // document.querySelector("body").style.overflow = "visible";
        // }, 100);

        // setTimeout(() => {
        //   observer2.observe(document.querySelector("#bg_4"));
        // }, 800);
        entry.target.src = entry.target.dataset.src;
        // observer.unobserve(entry.target);
      }
    });
  };

  const options2 = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  };

  const observer2 = new IntersectionObserver(callback, options2);

  observer2.observe(document.querySelector(".bg_5_container"));

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

  // function doScroll(e) {
  //   // positive deltas are top and left
  //   // down and right are negative

  //   // horizontal offset    e.deltaX
  //   // vertical offset      e.deltaY

  //   console.log(`x:${e.deltaX} y:${e.deltaY}`);

  //   e.preventDefault(); // disable the actual scrolling
  // }

  // window.addEventListener("wheel", doScroll, false);
});
