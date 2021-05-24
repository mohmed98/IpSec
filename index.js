function removePopUp(textElem) {
  textElem.forEach(function (itemArr) {
    itemArr.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
  });
}
function togglePopUp(textElem, areaElm, goalElem, cir) {
  cir.forEach(function (item) {
    item.classList.add("active-circle");
  });
  textElem.forEach(function (item) {
    item.classList.add("show-text");
  });
  areaElm.forEach(function (item) {
    if (item.classList.contains("faded-goal")) {
      item.classList.remove("faded-goal");
    }
    item.classList.add("active-goal");
  });
  goalElem.forEach(function (itemArr) {
    itemArr.forEach(function (item) {
      if (!item.classList.contains("faded-goal")) {
        item.classList.add("faded-goal");
        item.classList.remove("active-goal");
      }
    });
  });
}
function closePopUp(closeElem, textElm, areaElm, goalElem, cir) {
  closeElem.forEach(function (item) {
    item.addEventListener("click", () => {
      cir.forEach(function (item) {
        item.classList.remove("active-circle");
      });
      textElm.forEach(function (item) {
        if (item.classList.contains("show-text")) {
          item.classList.remove("show-text");
        }
      });
      areaElm.forEach(function (item) {
        item.classList.remove("active-goal");
      });
      goalElem.forEach(function (itemArr) {
        itemArr.forEach(function (item) {
          item.classList.remove("faded-goal");
        });
      });
    });
  });
}
function fadeElms(hovered, faded) {
  hovered.forEach(function (item) {
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.01, 1.01)";
      faded.forEach(function (itemArr) {
        itemArr.forEach(function (item) {
          item.style.opacity = "0.5";
        });
      });
    });
  });
}
function removeFadeElms(hovered, faded) {
  hovered.forEach(function (item) {
    item.addEventListener("mouseout", () => {
      item.style.transform = "scale(0.99, 0.99)";
      faded.forEach(function (itemArr) {
        itemArr.forEach(function (item) {
          item.style.opacity = "1";
        });
      });
    });
  });
}
function scrollEffect(cir) {
  window.addEventListener("scroll", () => {
    cir.forEach(function (item) {
      if (
        item.getBoundingClientRect().y < 400 &&
        item.getBoundingClientRect().y > 50
      ) {
        item.classList.add("displayed");
      } else {
        item.classList.remove("displayed");
      }
    });
  });
}
// scroll effect
const numberOneCircle = document.querySelectorAll("#_01");
const numberTwoCircle = document.querySelectorAll("#_02");
const numberThreeCircle = document.querySelectorAll("#_03");
const numberFourCircle = document.querySelectorAll("#_04");
const numberFiveCircle = document.querySelectorAll("#_05");
const numberSixCircle = document.querySelectorAll("#_06");
const numberSevenCircle = document.querySelectorAll("#_07");
scrollEffect(numberOneCircle);
scrollEffect(numberTwoCircle);
scrollEffect(numberThreeCircle);
scrollEffect(numberFourCircle);
scrollEffect(numberFiveCircle);
scrollEffect(numberSixCircle);
scrollEffect(numberSevenCircle);

// IP1
// 8.4
const oneOneArea = document.querySelectorAll("#Layer_21");
const oneOneText = document.querySelectorAll("#oneOneText");
const oneOneClose = document.querySelectorAll("#oneOneClose");
// 12.4
const oneTwoArea = document.querySelectorAll("#Layer_20");
const oneTwoText = document.querySelectorAll("#oneTwoText");
const oneTwoClose = document.querySelectorAll("#oneTwoClose");

// 4.5
const oneThreeArea = document.querySelectorAll("#Layer_19");
const oneThreeText = document.querySelectorAll("#oneThreeText");
const oneThreeClose = document.querySelectorAll("#oneThreeClose");

oneOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      oneOneText,
      oneOneArea,
      [oneThreeArea, oneTwoArea],
      numberOneCircle
    );
    closePopUp(
      oneOneClose,
      oneOneText,
      oneOneArea,
      [oneThreeArea, oneTwoArea],
      numberOneCircle
    );
    removePopUp([(oneThreeText, oneTwoText)], [oneThreeArea, oneTwoArea]);
  });
});

oneTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      oneTwoText,
      oneTwoArea,
      [oneThreeArea, oneOneArea],
      numberOneCircle
    );
    closePopUp(
      oneTwoClose,
      oneTwoText,
      oneTwoArea,
      [oneThreeArea, oneOneArea],
      numberOneCircle
    );
    removePopUp([oneThreeText, oneOneText], [oneThreeArea, oneOneArea]);
  });
});

oneThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      oneThreeText,
      oneThreeArea,
      [oneTwoArea, oneOneArea],
      numberOneCircle
    );
    closePopUp(
      oneThreeClose,
      oneThreeText,
      oneThreeArea,
      [oneTwoArea, oneOneArea],
      numberOneCircle
    );
    removePopUp([oneTwoText, oneOneText], [oneTwoArea, oneOneArea]);
  });
});

fadeElms(oneOneArea, [oneTwoArea, oneThreeArea]);
removeFadeElms(oneOneArea, [oneTwoArea, oneThreeArea]);

fadeElms(oneTwoArea, [oneOneArea, oneThreeArea]);
removeFadeElms(oneTwoArea, [oneOneArea, oneThreeArea]);

fadeElms(oneThreeArea, [oneTwoArea, oneOneArea]);
removeFadeElms(oneThreeArea, [oneTwoArea, oneOneArea]);
// IP2
// 8.4
const twoOneArea = document.querySelectorAll("#Layer_17");
const twoOneText = document.querySelectorAll("#twoOneText");
const twoOneClose = document.querySelectorAll("#twoOneClose");
// 12.4
const twoTwoArea = document.querySelectorAll("#Layer_16");
const twoTwoText = document.querySelectorAll("#twoTwoText");
const twoTwoClose = document.querySelectorAll("#twoTwoClose");

// 4.5
const twoThreeArea = document.querySelectorAll("#Layer_28");
const twoThreeText = document.querySelectorAll("#twoThreeText");
const twoThreeClose = document.querySelectorAll("#twoThreeClose");

twoOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      twoOneText,
      twoOneArea,
      [twoThreeArea, twoTwoArea],
      numberTwoCircle
    );
    closePopUp(
      twoOneClose,
      twoOneText,
      twoOneArea,
      [twoThreeArea, twoTwoArea],
      numberTwoCircle
    );

    removePopUp([twoThreeText, twoTwoText], [twoThreeArea, twoTwoArea]);
  });
});

twoTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      twoTwoText,
      twoTwoArea,
      [twoThreeArea, twoOneArea],
      numberTwoCircle
    );
    closePopUp(
      twoTwoClose,
      twoTwoText,
      twoTwoArea,
      [twoThreeArea, twoOneArea],
      numberTwoCircle
    );
    removePopUp([twoThreeText, twoOneText], [twoThreeArea, twoOneArea]);
  });
});

twoThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      twoThreeText,
      twoThreeArea,
      [twoTwoArea, twoOneArea],
      numberTwoCircle
    );
    closePopUp(
      twoThreeClose,
      twoThreeText,
      twoThreeArea,
      [twoTwoArea, twoOneArea],
      numberTwoCircle
    );
    removePopUp([twoTwoText, twoOneText], [twoTwoArea, twoOneArea]);
  });
});

fadeElms(twoOneArea, [twoTwoArea, twoThreeArea]);
removeFadeElms(twoOneArea, [twoTwoArea, twoThreeArea]);

fadeElms(twoTwoArea, [twoOneArea, twoThreeArea]);
removeFadeElms(twoTwoArea, [twoOneArea, twoThreeArea]);

fadeElms(twoThreeArea, [twoTwoArea, twoOneArea]);
removeFadeElms(twoThreeArea, [twoTwoArea, twoOneArea]);
// IP3
// 9.4
const threeOneArea = document.querySelectorAll("#Layer_14");
const threeOneText = document.querySelectorAll("#threeOneText");
const threeOneClose = document.querySelectorAll("#threeOneClose");
// 12.2
const threeTwoArea = document.querySelectorAll("#Layer_13");
const threeTwoText = document.querySelectorAll("#threeTwoText");
const threeTwoClose = document.querySelectorAll("#threeTwoClose");

// 6.4
const threeThreeArea = document.querySelectorAll("#Layer_12");
const threeThreeText = document.querySelectorAll("#threeThreeText");
const threeThreeClose = document.querySelectorAll("#threeThreeClose");

// 12.5
const threeFourArea = document.querySelectorAll("#Layer_11");
const threeFourText = document.querySelectorAll("#threeFourText");
const threeFourClose = document.querySelectorAll("#threeFourClose");

threeOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      threeOneText,
      threeOneArea,
      [threeThreeArea, threeTwoArea, threeFourArea],
      numberThreeCircle
    );
    closePopUp(
      threeOneClose,
      threeOneText,
      threeOneArea,
      [threeThreeArea, threeTwoArea, threeFourArea],
      numberThreeCircle
    );
    removePopUp(
      [threeThreeText, threeTwoText, threeFourText],
      [threeThreeArea, threeTwoArea, threeFourArea]
    );
  });
});
threeTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      threeTwoText,
      threeTwoArea,
      [threeThreeArea, threeOneArea, threeFourArea],
      numberThreeCircle
    );
    closePopUp(
      threeTwoClose,
      threeTwoText,
      threeTwoArea,
      [threeThreeArea, threeOneArea, threeFourArea],
      numberThreeCircle
    );
    removePopUp(
      [threeThreeText, threeOneText, threeFourText],
      [threeThreeArea, threeOneArea, threeFourArea]
    );
  });
});
threeThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      threeThreeText,
      threeThreeArea,
      [threeOneArea, threeTwoArea, threeFourArea],
      numberThreeCircle
    );
    closePopUp(
      threeThreeClose,
      threeThreeText,
      threeThreeArea,
      [threeOneArea, threeTwoArea, threeFourArea],
      numberThreeCircle
    );
    removePopUp(
      [threeOneText, threeTwoText, threeFourText],
      [threeOneArea, threeTwoArea, threeFourArea]
    );
  });
});
threeFourArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      threeFourText,
      threeFourArea,
      [threeThreeArea, threeTwoArea, threeOneArea],
      numberThreeCircle
    );
    closePopUp(
      threeFourClose,
      threeFourText,
      threeFourArea,
      [threeThreeArea, threeTwoArea, threeOneArea],
      numberThreeCircle
    );
    removePopUp(
      [threeThreeText, threeTwoText, threeOneText],
      [threeThreeArea, threeTwoArea, threeOneArea]
    );
  });
});

fadeElms(threeOneArea, [threeTwoArea, threeThreeArea, threeFourArea]);
removeFadeElms(threeOneArea, [threeTwoArea, threeThreeArea, threeFourArea]);

fadeElms(threeTwoArea, [threeOneArea, threeThreeArea, threeFourArea]);
removeFadeElms(threeTwoArea, [threeOneArea, threeThreeArea, threeFourArea]);

fadeElms(threeThreeArea, [threeTwoArea, threeOneArea, threeFourArea]);
removeFadeElms(threeThreeArea, [threeTwoArea, threeOneArea, threeFourArea]);

fadeElms(threeFourArea, [threeTwoArea, threeOneArea, threeThreeArea]);
removeFadeElms(threeFourArea, [threeTwoArea, threeOneArea, threeThreeArea]);
// IP4
// 5.6
const fourOneArea = document.querySelectorAll("#Layer_9");
const fourOneText = document.querySelectorAll("#fourOneText");
const fourOneClose = document.querySelectorAll("#fourOneClose");
// 10.3
const fourTwoArea = document.querySelectorAll("#Layer_8");
const fourTwoText = document.querySelectorAll("#fourTwoText");
const fourTwoClose = document.querySelectorAll("#fourTwoClose");

// 10.4
const fourThreeArea = document.querySelectorAll("#Layer_44");
const fourThreeText = document.querySelectorAll("#fourThreeText");
const fourThreeClose = document.querySelectorAll("#fourThreeClose");

fourOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      fourOneText,
      fourOneArea,
      [fourThreeArea, fourTwoArea],
      numberFourCircle
    );
    closePopUp(
      fourOneClose,
      fourOneText,
      fourOneArea,
      [fourThreeArea, fourTwoArea],
      numberFourCircle
    );
    removePopUp([fourThreeText, fourTwoText], [fourThreeArea, fourTwoArea]);
  });
});

fourTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      fourTwoText,
      fourTwoArea,
      [fourThreeArea, fourOneArea],
      numberFourCircle
    );
    closePopUp(
      fourTwoClose,
      fourTwoText,
      fourTwoArea,
      [fourThreeArea, fourOneArea],
      numberFourCircle
    );
    removePopUp([fourThreeText, fourOneText], [fourThreeArea, fourOneArea]);
  });
});

fourThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      fourThreeText,
      fourThreeArea,
      [fourTwoArea, fourOneArea],
      numberFourCircle
    );
    closePopUp(
      fourThreeClose,
      fourThreeText,
      fourThreeArea,
      [fourTwoArea, fourOneArea],
      numberFourCircle
    );
    removePopUp([fourTwoText, fourOneText], [fourTwoArea, fourOneArea]);
  });
});

fadeElms(fourOneArea, [fourTwoArea, fourThreeArea]);
removeFadeElms(fourOneArea, [fourTwoArea, fourThreeArea]);

fadeElms(fourTwoArea, [fourOneArea, fourThreeArea]);
removeFadeElms(fourTwoArea, [fourOneArea, fourThreeArea]);

fadeElms(fourThreeArea, [fourTwoArea, fourOneArea]);
removeFadeElms(fourThreeArea, [fourTwoArea, fourOneArea]);
// IP5
// 12.4
const fiveOneArea = document.querySelectorAll("#Layer_52");
const fiveOneText = document.querySelectorAll("#fiveOneText");
const fiveOneClose = document.querySelectorAll("#fiveOneClose");
// 12.6
const fiveTwoArea = document.querySelectorAll("#Layer_55");
const fiveTwoText = document.querySelectorAll("#fiveTwoText");
const fiveTwoClose = document.querySelectorAll("#fiveTwoClose");

fiveOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(fiveOneText, fiveOneArea, [fiveTwoArea], numberFiveCircle);
    closePopUp(
      fiveOneClose,
      fiveOneText,
      fiveOneArea,
      [fiveTwoArea],
      numberFiveCircle
    );
    removePopUp([fiveTwoText], [fiveTwoArea]);
  });
});
fiveTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(fiveTwoText, fiveTwoArea, [fiveOneArea], numberFiveCircle);
    closePopUp(
      fiveTwoClose,
      fiveTwoText,
      fiveTwoArea,
      [fiveOneArea],
      numberFiveCircle
    );
    removePopUp([fiveOneText], [fiveOneArea]);
  });
});

fadeElms(fiveOneArea, [fiveTwoArea]);
removeFadeElms(fiveOneArea, [fiveTwoArea]);

fadeElms(fiveTwoArea, [fiveOneArea]);
removeFadeElms(fiveTwoArea, [fiveOneArea]);
// IP6
// 3.6
const sixOneArea = document.querySelectorAll("#Layer_61");
const sixOneText = document.querySelectorAll("#sixOneText");
const sixOneClose = document.querySelectorAll("#sixOneClose");
// 9.5
const sixTwoArea = document.querySelectorAll("#Layer_26");
const sixTwoText = document.querySelectorAll("#sixTwoText");
const sixTwoClose = document.querySelectorAll("#sixTwoClose");

// 11.2
const sixThreeArea = document.querySelectorAll("#Layer_25");
const sixThreeText = document.querySelectorAll("#sixThreeText");
const sixThreeClose = document.querySelectorAll("#sixThreeClose");

// 12.2
const sixFourArea = document.querySelectorAll("#Layer_24");
const sixFourText = document.querySelectorAll("#sixFourText");
const sixFourClose = document.querySelectorAll("#sixFourClose");

// 12.8
const sixFiveArea = document.querySelectorAll("#Layer_23");
const sixFiveText = document.querySelectorAll("#sixFiveText");
const sixFiveClose = document.querySelectorAll("#sixFiveClose");

sixOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      sixOneText,
      sixOneArea,
      [sixThreeArea, sixTwoArea, sixFourArea, sixFiveArea],
      numberSixCircle
    );
    closePopUp(
      sixOneClose,
      sixOneText,
      sixOneArea,
      [sixThreeArea, sixTwoArea, sixFourArea, sixFiveArea],
      numberSixCircle
    );
    removePopUp(
      [sixThreeText, sixTwoText, sixFourText, sixFiveText],
      [sixThreeArea, sixTwoArea, sixFourArea, sixFiveArea]
    );
  });
});
sixTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      sixTwoText,
      sixTwoArea,
      [sixThreeArea, sixOneArea, sixFourArea, sixFiveArea],
      numberSixCircle
    );
    closePopUp(
      sixTwoClose,
      sixTwoText,
      sixTwoArea,
      [sixThreeArea, sixOneArea, sixFourArea, sixFiveArea, sixTwoArea],
      numberSixCircle
    );
    removePopUp(
      [sixThreeText, sixOneText, sixFourText, sixFiveText],
      [sixThreeArea, sixOneArea, sixFourArea, sixFiveArea]
    );
  });
});
sixThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      sixThreeText,
      sixThreeArea,
      [sixOneArea, sixTwoArea, sixFourArea, sixFiveArea],
      numberSixCircle
    );
    closePopUp(
      sixThreeClose,
      sixThreeText,
      sixThreeArea,
      [sixOneArea, sixTwoArea, sixFourArea, sixFiveArea],
      numberSixCircle
    );
    removePopUp(
      [sixOneText, sixTwoText, sixFourText, sixFiveText],
      [sixOneArea, sixTwoArea, sixFourArea, sixFiveArea]
    );
  });
});
sixFourArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      sixFourText,
      sixFourArea,
      [sixThreeArea, sixTwoArea, sixOneArea, sixFiveArea],
      numberSixCircle
    );
    closePopUp(
      sixFourClose,
      sixFourText,
      sixFourArea,
      [sixThreeArea, sixTwoArea, sixOneArea, sixFiveArea],
      numberSixCircle
    );
    removePopUp(
      [sixThreeText, sixTwoText, sixOneText, sixFiveText],
      [sixThreeArea, sixTwoArea, sixOneArea, sixFiveArea]
    );
  });
});
sixFiveArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      sixFiveText,
      sixFiveArea,
      [sixThreeArea, sixTwoArea, sixFourArea, sixOneArea],
      numberSixCircle
    );
    closePopUp(
      sixFiveClose,
      sixFiveText,
      sixFiveArea,
      [sixThreeArea, sixTwoArea, sixFourArea, sixOneArea],
      numberSixCircle
    );
    removePopUp(
      [sixThreeText, sixTwoText, sixFourText, sixOneText],
      [sixThreeArea, sixTwoArea, sixFourArea, sixOneArea]
    );
  });
});

fadeElms(sixOneArea, [sixTwoArea, sixThreeArea, sixFourArea, sixFiveArea]);
removeFadeElms(sixOneArea, [
  sixTwoArea,
  sixThreeArea,
  sixFourArea,
  sixFiveArea,
]);

fadeElms(sixTwoArea, [sixOneArea, sixThreeArea, sixFourArea, sixFiveArea]);
removeFadeElms(sixTwoArea, [
  sixOneArea,
  sixThreeArea,
  sixFourArea,
  sixFiveArea,
]);

fadeElms(sixThreeArea, [sixTwoArea, sixOneArea, sixFourArea, sixFiveArea]);
removeFadeElms(sixThreeArea, [
  sixTwoArea,
  sixOneArea,
  sixFourArea,
  sixFiveArea,
]);

fadeElms(sixFourArea, [sixTwoArea, sixOneArea, sixThreeArea, sixFiveArea]);
removeFadeElms(sixFourArea, [
  sixTwoArea,
  sixOneArea,
  sixThreeArea,
  sixFiveArea,
]);

fadeElms(sixFiveArea, [sixTwoArea, sixOneArea, sixThreeArea, sixFourArea]);
removeFadeElms(sixFiveArea, [
  sixTwoArea,
  sixOneArea,
  sixThreeArea,
  sixFourArea,
]);
// IP7
// 8.4
const sevenOneArea = document.querySelectorAll("#Layer_31");
const sevenOneText = document.querySelectorAll("#sevenOneText");
const sevenOneClose = document.querySelectorAll("#sevenOneClose");
// 12.2
const sevenTwoArea = document.querySelectorAll("#Layer_30");
const sevenTwoText = document.querySelectorAll("#sevenTwoText");
const sevenTwoClose = document.querySelectorAll("#sevenTwoClose");

// 12.5
const sevenThreeArea = document.querySelectorAll("#Layer_29");
const sevenThreeText = document.querySelectorAll("#sevenThreeText");
const sevenThreeClose = document.querySelectorAll("#sevenThreeClose");

sevenOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      sevenOneText,
      sevenOneArea,
      [sevenThreeArea, sevenTwoArea],
      numberSevenCircle
    );
    closePopUp(
      sevenOneClose,
      sevenOneText,
      sevenOneArea,
      [sevenThreeArea, sevenTwoArea],
      numberSevenCircle
    );
    removePopUp([sevenThreeText, sevenTwoText], [sevenThreeArea, sevenTwoArea]);
  });
});
sevenTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      sevenTwoText,
      sevenTwoArea,
      [sevenThreeArea, sevenOneArea],
      numberSevenCircle
    );
    closePopUp(
      sevenTwoClose,
      sevenTwoText,
      sevenTwoArea,
      [sevenThreeArea, sevenOneArea],
      numberSevenCircle
    );
    removePopUp([sevenThreeText, sevenOneText], [sevenThreeArea, sevenOneArea]);
  });
});
sevenThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(
      sevenThreeText,
      sevenThreeArea,
      [sevenOneArea, sevenTwoArea],
      numberSevenCircle
    );
    closePopUp(
      sevenThreeClose,
      sevenThreeText,
      sevenThreeArea,
      [sevenOneArea, sevenTwoArea],
      numberSevenCircle
    );
    removePopUp([sevenOneText, sevenTwoText], [sevenOneArea, sevenTwoArea]);
  });
});

fadeElms(sevenOneArea, [sevenTwoArea, sevenThreeArea]);
removeFadeElms(sevenOneArea, [sevenTwoArea, sevenThreeArea]);

fadeElms(sevenTwoArea, [sevenOneArea, sevenThreeArea]);
removeFadeElms(sevenTwoArea, [sevenOneArea, sevenThreeArea]);

fadeElms(sevenThreeArea, [sevenTwoArea, sevenOneArea]);
