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
    // console.log("slideCounter = ", slideCounter);
    // console.log("swiperActiveSlide = ", swiper.activeIndex);

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
      // console.log("touched", swiper.activeIndex, slideCounter);

      if (slideCounter === 0) {
      }
    }

    //// TO DOWN

    if (deltaY < 0) {
      // console.log("down", slideCounter, swiper.activeIndex);
      if (
        document.querySelector(".pop-up").classList.contains("pop-up-static")
      ) {
        // console.log("aaa");
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
      // console.log("up", slideCounter, swiper.activeIndex);
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
        // console.log("destroy");

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

      // console.log("top = ", findTop("#bg_5"));

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

  let direction = true;

  let mainOptions = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  let observerMain = new IntersectionObserver(handleIntersect, mainOptions);

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds.reverse();
  }

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        // console.log(1 - entry.intersectionRatio);
        console.log("start");
        // document.querySelector("#bg_5").style.opacity = 0;
        // document.querySelector("#bg_5").style.backgroundColor =
        //   decreasingColor.replace("ratio", 1 - entry.intersectionRatio);
        document.querySelector(".photos").style.backgroundColor =
          decreasingColor.replace("ratio", 1 - entry.intersectionRatio);
        document.querySelector(".bg_5_active").style.backgroundColor =
          "transparent";
      } else {
        // document.querySelector("#bg_5").style.opacity = 0;
        // console.log(entry.intersectionRatio);
        console.log("end");
        // console.log(1 - entry.intersectionRatio);
        // document.querySelector("#bg_5").style.backgroundColor =
        //   decreasingColor.replace("ratio", 1 - entry.intersectionRatio);
        document.querySelector(".photos").style.backgroundColor =
          decreasingColor.replace("ratio", 1 - entry.intersectionRatio);
        if (document.querySelector(".bg_5_active"))
          document.querySelector(".bg_5_active").style.backgroundColor =
            "transparent";
      }

      prevRatio = entry.intersectionRatio;
    });
  }

  const callback1 = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("FIRST OBSERVER");
        // if (document.querySelector(".photos_active"))

        observer3.observe(document.querySelector("#bg_4"));
        observerMain.observe(boxElement);
        document.querySelector(".photo-main").style.display = "block";
        const padding = window.innerHeight - 169 - 16;
        console.log(padding);
        document.querySelector("#bg_5").classList.add("bg_5_active");
        document.querySelector(".photos").classList.add("photos_active");
        document.querySelector(".photos_active").style.transition =
          "0.5s ease-out";
        document.querySelector(".photos_active").style.opacity = "1";
        document.querySelector(".photos_active").style.marginTop = `${-1422}px`;
        document.querySelector(".item_title_5").style.top = "70px";
        document.querySelector(".scroll__p").style.color = "transparent";

        entry.target.src = entry.target.dataset.src;
        // observer.unobserve(entry.target);
      }
    });
  };

  const padding = window.innerHeight - 16;

  const options1 = {
    rootMargin: `0px 0px ${-padding}px 0px`,
    threshold: 0,
  };

  const observer1 = new IntersectionObserver(callback1, options1);

  observer1.observe(document.querySelector(".bg_5_container"));

  const callback2 = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("SECOND OBSERVER");
        // direction = false;
        // decreasingColor = "rgba(41, 41, 41, ratio)";
        document.querySelector(".photo-main").style.display = "block";
        const padding = window.innerHeight - 169 - 16;
        console.log(padding);
        document.querySelector("#bg_5").classList.add("bg_5_active");
        document.querySelector(".photos").classList.add("photos_active");
        document.querySelector(".photos_active").style.marginTop = `${-1422}px`;
        document.querySelector(".item_title_5").style.top = "70px";
        document.querySelector(".scroll__p").style.color = "transparent";

        entry.target.src = entry.target.dataset.src;
        // observer.unobserve(entry.target);
      }
    });
  };

  const options2 = {
    rootMargin: `0px 0px ${0}px 0px`,
    threshold: 0,
  };

  const observer2 = new IntersectionObserver(callback2, options2);

  observer2.observe(document.querySelector(".photo-main"));

  const callback3 = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("THIRD OBSERVER");
        // observer1.disconnect();
        observer2.disconnect();
        // document.querySelector(".bg_5_scroll").style.padding = "28px 44px 0px";
        if (document.querySelector("#bg_5"))
          document.querySelector("#bg_5").style.backgroundColor = "#ffffff";
        // document.querySelector(".photo-main").style.display = "block";
        // setTimeout(() => {
        document.querySelector(".item_title_5").style.top = "54px";
        document.querySelector("#bg_5").classList.remove("bg_5_active");
        // }, 500);
        if (document.querySelector(".photos_active")) {
          document.querySelector(".photos_active").style.transition =
            "0s ease-out";
          document.querySelector(".photos_active").style.opacity = "0";
          document.querySelector(".photos_active").style.marginTop = "0px";
          document.querySelector(".photos").classList.remove("photos_active");
        }

        document.querySelector(".scroll__p").style.color = "#ffffff";
        entry.target.src = entry.target.dataset.src;
        // observer.unobserve(entry.target);
      }
    });
  };

  const options3 = {
    rootMargin: `0px 0px 0px 0px`,
    threshold: 0,
  };

  const observer3 = new IntersectionObserver(callback3, options3);

  const callback4 = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("FOURTH OBSERVER");
        // observer1.disconnect();
        observerMain.disconnect();
        // document.querySelector(".photo-main").style.display = "block";
        // setTimeout(() => {
        // document.querySelector(".item_title_5").style.top = "54px";
        // document.querySelector("#bg_5").classList.remove("bg_5_active");
        // // }, 500);
        // document.querySelector(".photos_active").style.transition =
        //   "0s ease-out";
        // document.querySelector(".photos_active").style.opacity = "0";
        // document.querySelector(".photos_active").style.marginTop = "0px";
        // document.querySelector(".photos").classList.remove("photos_active");

        // document.querySelector(".scroll__p").style.color = "#ffffff";
        entry.target.src = entry.target.dataset.src;
        // observer.unobserve(entry.target);
      } else {
        observerMain.observe(boxElement);
        observer3.observe(document.querySelector("#bg_4"));
      }
    });
  };

  const options4 = {
    rootMargin: `0px 0px 0px 0px`,
    threshold: 0,
  };

  const observer4 = new IntersectionObserver(callback4, options4);
  observer4.observe(document.querySelector(".photo-section"));

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
