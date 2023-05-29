if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

window.addEventListener("load", function () {
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);

  let touchDevice =
    navigator.maxTouchPoints || "ontouchstart" in document.documentElement;

  let t = new ScrollyVideo({
    scrollyVideoContainer: "scroll-video",
    src: "/static/images/video.mp4",
    cover: true,
    sticky: true,
    full: true,
    useWebCodecs: true,
    debug: true,
  });

  // const list = document.querySelector(".scroll-video");
  // // list.removeChild(document.querySelector("video"));

  // list.insertAdjacentHTML(
  //   "beforeend",
  //   `<canvas
  //               width="1080"
  //               height="1920"
  //               style="
  //                 position: absolute;
  //                 top: 50%;
  //                 left: 50%;
  //                 transform: translate(-50%, -50%);
  //                 min-width: 101%;
  //                 min-height: 101%;
  //                 height: auto;
  //                 width: 100%;
  //               "
  //             ></canvas>`
  // );

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

  let clientY;
  let deltaY;
  let isActive = false;
  let slideCounter = 0;
  let scrollActive = false;

  function findTop(element) {
    let rec = document.querySelector(element).getBoundingClientRect();
    return rec.top;
  }

  let scrollCounter = 0;

  swiper.on("activeIndexChange", (event) => {
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

  document.addEventListener("touchstart", (event) => {
    clientY = event.touches[0].clientY;
  });

  document.addEventListener("touchend", (event) => {
    deltaY = event.changedTouches[0].clientY - clientY;

    if (deltaY) {
      touch = true;
      if (slideCounter === 0) {
      }
    }

    if (deltaY < 0) {
      if (
        document.querySelector(".pop-up").classList.contains("pop-up-static")
      ) {
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

    if (deltaY > 0) {
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
    }
  });

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
    let numSteps = 100;

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
        document.querySelector(".bg_5_animation").style.backgroundColor =
          decreasingColor.replace("ratio", 1 - entry.intersectionRatio);
        document.querySelector(".photo-main__container").style.backgroundColor =
          decreasingColor.replace("ratio", 1 - entry.intersectionRatio);
        if (document.querySelector(".bg_5_active"))
          document.querySelector(".bg_5_active").style.backgroundColor =
            "transparent";
      } else {
        document.querySelector(".bg_5_animation").style.backgroundColor =
          decreasingColor.replace("ratio", 1 - entry.intersectionRatio);
        document.querySelector(".photo-main__container").style.backgroundColor =
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
        let aa = document.querySelector("#bg_5").getBoundingClientRect().height;

        let height55 = document
          .querySelector(".photos")
          .getBoundingClientRect().height;

        let totalHeight2 = aa + height55;

        document.querySelector(
          ".bg_5_animation"
        ).style.height = `${totalHeight2}px`;
        document.querySelector(".item_text_5").style.paddingLeft = "54px";
        document.querySelector(".item_text_5").style.paddingRight = "54px";
        document.querySelector(".bg_5_animation").style.borderRadius =
          "40px 40px 0px 0px";
        document.querySelector("#bg_5").classList.add("bg_5_active");
        document.querySelector(".photos").classList.add("photos_active");
        document.querySelector(".photos_active").style.transition =
          "0.5s ease-out";
        document.querySelector(".photos_active").style.marginTop = `-100vh`;
        observer3.observe(document.querySelector("#party"));
        observerMain.observe(boxElement);
        document.querySelector(".photo-main").style.display = "block";
      }
    });
  };

  const padding = window.innerHeight - 16;

  const options1 = {
    rootMargin: `0px 0px ${-padding}px 0px`,
    threshold: 0,
  };

  const observer1 = new IntersectionObserver(callback1, options1);

  observer1.observe(document.querySelector("#bg_4"));

  const callback2 = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector(".photo-main").style.display = "block";
        document.querySelector(
          ".bg_5_animation"
        ).style.height = `${totalHeight2}px`;
        document.querySelector(".bg_5_animation").style.borderRadius =
          "40px 40px 0px 0px";
        document.querySelector("#bg_5").classList.add("bg_5_active");
        document.querySelector(".photos").classList.add("photos_active");
        document.querySelector(".photos_active").style.marginTop = `-100vh`;
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
        observer2.disconnect();
        if (document.querySelector("#bg_5"))
          document.querySelector("#bg_5").style.backgroundColor = "#ffffff";
        document.querySelector("#bg_5").classList.remove("bg_5_active");
        document.querySelector(".item_text_5").style.paddingLeft = "10px";
        document.querySelector(".item_text_5").style.paddingRight = "10px";
        if (document.querySelector(".photos_active")) {
          document.querySelector(".photos_active").style.marginTop = "0px";
          document.querySelector(".bg_5_animation").style.height = "100px";
          document.querySelector(".bg_5_animation").style.borderRadius = "40px";
          document.querySelector(".photos").classList.remove("photos_active");
        }
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
        observerMain.disconnect();
      } else {
        observerMain.observe(boxElement);
        observer3.observe(document.querySelector("#party"));
      }
    });
  };

  const options4 = {
    rootMargin: `10000px 0px 0px 0px`,
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
});
