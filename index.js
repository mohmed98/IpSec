function removePopUp(textElem) {
  textElem.forEach(function (itemArr) {
    itemArr.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
  });
}
function togglePopUp(textElem, areaElm, goalElem) {
  textElem.forEach(function (item) {
    console.log(item);
    item.classList.toggle("show-text");
  });
  areaElm.forEach(function (item) {
    if (item.classList.contains("faded-goal")) {
      item.classList.remove("faded-goal");
    }
  });
  goalElem.forEach(function (itemArr) {
    itemArr.forEach(function (item) {
      if (!item.classList.contains("faded-goal")) {
        item.classList.add("faded-goal");
      }
    });
  });
}
function closePopUp(closeElem, textElm, goalElem) {
  closeElem.forEach(function (item) {
    item.addEventListener("click", () => {
      textElm.forEach(function (item) {
        if (item.classList.contains("show-text")) {
          item.classList.remove("show-text");
        }
      });
      goalElem.forEach(function (itemArr) {
        itemArr.forEach(function (item) {
          item.classList.remove("faded-goal");
        });
      });
    });
  });
}
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
    togglePopUp(oneOneText, oneOneArea, [oneThreeArea, oneTwoArea]);
    closePopUp(oneOneClose, oneOneText, [oneThreeArea, oneTwoArea]);
    removePopUp([oneThreeText, oneTwoText], [oneThreeArea, oneTwoArea]);
  });
});

oneTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(oneTwoText, oneTwoArea, [oneThreeArea, oneOneArea]);
    closePopUp(oneTwoClose, oneTwoText, [oneThreeArea, oneOneArea]);
    removePopUp([oneThreeText, oneOneText], [oneThreeArea, oneOneArea]);
  });
});

oneThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(oneThreeText, oneThreeArea, [oneTwoArea, oneOneArea]);
    closePopUp(oneThreeClose, oneThreeText, [oneTwoArea, oneOneArea]);
    removePopUp([oneTwoText, oneOneText], [oneTwoArea, oneOneArea]);
  });
});

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
    togglePopUp(twoOneText, twoOneArea, [twoThreeArea, twoTwoArea]);
    closePopUp(twoOneClose, twoOneText, [twoThreeArea, twoTwoArea]);
    removePopUp([twoThreeText, twoTwoText], [twoThreeArea, twoTwoArea]);
  });
});

twoTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(twoTwoText, twoTwoArea, [twoThreeArea, twoOneArea]);
    closePopUp(twoTwoClose, twoTwoText, [twoThreeArea, twoOneArea]);
    removePopUp([twoThreeText, twoOneText], [twoThreeArea, twoOneArea]);
  });
});

twoThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(twoThreeText, twoThreeArea, [twoTwoArea, twoOneArea]);
    closePopUp(twoThreeClose, twoThreeText, [twoTwoArea, twoOneArea]);
    removePopUp([twoTwoText, twoOneText], [twoTwoArea, twoOneArea]);
  });
});

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
    togglePopUp(threeOneText, threeOneArea, [
      threeThreeArea,
      threeTwoArea,
      threeFourArea,
    ]);
    closePopUp(threeOneClose, threeOneText, [
      threeThreeArea,
      threeTwoArea,
      threeFourArea,
    ]);
    removePopUp(
      [threeThreeText, threeTwoText, threeFourText],
      [threeThreeArea, threeTwoArea, threeFourArea]
    );
  });
});
threeTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(threeTwoText, threeTwoArea, [
      threeThreeArea,
      threeOneArea,
      threeFourArea,
    ]);
    closePopUp(threeTwoClose, threeTwoText, [
      threeThreeArea,
      threeOneArea,
      threeFourArea,
    ]);
    removePopUp(
      [threeThreeText, threeOneText, threeFourText],
      [threeThreeArea, threeOneArea, threeFourArea]
    );
  });
});
threeThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(threeThreeText, threeThreeArea, [
      threeOneArea,
      threeTwoArea,
      threeFourArea,
    ]);
    closePopUp(threeThreeClose, threeThreeText, [
      threeOneArea,
      threeTwoArea,
      threeFourArea,
    ]);
    removePopUp(
      [threeOneText, threeTwoText, threeFourText],
      [threeOneArea, threeTwoArea, threeFourArea]
    );
  });
});
threeFourArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(threeFourText, threeFourArea, [
      threeThreeArea,
      threeTwoArea,
      threeOneArea,
    ]);
    closePopUp(threeFourClose, threeFourText, [
      threeThreeArea,
      threeTwoArea,
      threeOneArea,
    ]);
    removePopUp(
      [threeThreeText, threeTwoText, threeOneText],
      [threeThreeArea, threeTwoArea, threeOneArea]
    );
  });
});

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
    togglePopUp(fourOneText, fourOneArea, [fourThreeArea, fourTwoArea]);
    closePopUp(fourOneClose, fourOneText, [fourThreeArea, fourTwoArea]);
    removePopUp([fourThreeText, fourTwoText], [fourThreeArea, fourTwoArea]);
  });
});

fourTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(fourTwoText, fourTwoArea, [fourThreeArea, fourOneArea]);
    closePopUp(fourTwoClose, fourTwoText, [fourThreeArea, fourOneArea]);
    removePopUp([fourThreeText, fourOneText], [fourThreeArea, fourOneArea]);
  });
});

fourThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(fourThreeText, fourThreeArea, [fourTwoArea, fourOneArea]);
    closePopUp(fourThreeClose, fourThreeText, [fourTwoArea, fourOneArea]);
    removePopUp([fourTwoText, fourOneText], [fourTwoArea, fourOneArea]);
  });
});

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
    togglePopUp(fiveOneText, fiveOneArea, [fiveTwoArea]);
    closePopUp(fiveOneClose, fiveOneText, [fiveTwoArea]);
    removePopUp([fiveTwoText], [fiveTwoArea]);
  });
});
fiveTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(fiveTwoText, fiveTwoArea, [fiveOneArea]);
    closePopUp(fiveTwoClose, fiveTwoText, [fiveOneArea]);
    removePopUp([fiveOneText], [fiveOneArea]);
  });
});

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
    togglePopUp(sixOneText, sixOneArea, [
      sixThreeArea,
      sixTwoArea,
      sixFourArea,
      sixFiveArea,
    ]);
    closePopUp(sixOneClose, sixOneText, [
      sixThreeArea,
      sixTwoArea,
      sixFourArea,
      sixFiveArea,
    ]);
    removePopUp(
      [sixThreeText, sixTwoText, sixFourText, sixFiveText],
      [sixThreeArea, sixTwoArea, sixFourArea, sixFiveArea]
    );
  });
});
sixTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(sixTwoText, sixTwoArea, [
      sixThreeArea,
      sixOneArea,
      sixFourArea,
      sixFiveArea,
    ]);
    closePopUp(sixTwoClose, sixTwoText, [
      sixThreeArea,
      sixOneArea,
      sixFourArea,
      sixFiveArea,
    ]);
    removePopUp(
      [sixThreeText, sixOneText, sixFourText, sixFiveText],
      [sixThreeArea, sixOneArea, sixFourArea, sixFiveArea]
    );
  });
});
sixThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(sixThreeText, sixThreeArea, [
      sixOneArea,
      sixTwoArea,
      sixFourArea,
      sixFiveArea,
    ]);
    closePopUp(sixThreeClose, sixThreeText, [
      sixOneArea,
      sixTwoArea,
      sixFourArea,
      sixFiveArea,
    ]);
    removePopUp(
      [sixOneText, sixTwoText, sixFourText, sixFiveText],
      [sixOneArea, sixTwoArea, sixFourArea, sixFiveArea]
    );
  });
});
sixFourArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(sixFourText, sixFourArea, [
      sixThreeArea,
      sixTwoArea,
      sixOneArea,
      sixFiveArea,
    ]);
    closePopUp(sixFourClose, sixFourText, [
      sixThreeArea,
      sixTwoArea,
      sixOneArea,
      sixFiveArea,
    ]);
    removePopUp(
      [sixThreeText, sixTwoText, sixOneText, sixFiveText],
      [sixThreeArea, sixTwoArea, sixOneArea, sixFiveArea]
    );
  });
});
sixFiveArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(sixFiveText, sixFiveArea, [
      sixThreeArea,
      sixTwoArea,
      sixFourArea,
      sixOneArea,
    ]);
    closePopUp(sixFiveClose, sixFiveText, [
      sixThreeArea,
      sixTwoArea,
      sixFourArea,
      sixOneArea,
    ]);
    removePopUp(
      [sixThreeText, sixTwoText, sixFourText, sixOneText],
      [sixThreeArea, sixTwoArea, sixFourArea, sixOneArea]
    );
  });
});

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
    togglePopUp(sevenOneText, sevenOneArea, [sevenThreeArea, sevenTwoArea]);
    closePopUp(sevenOneClose, sevenOneText, [sevenThreeArea, sevenTwoArea]);
    removePopUp([sevenThreeText, sevenTwoText], [sevenThreeArea, sevenTwoArea]);
  });
});
sevenTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(sevenTwoText, sevenTwoArea, [sevenThreeArea, sevenOneArea]);
    closePopUp(sevenTwoClose, sevenTwoText, [sevenThreeArea, sevenOneArea]);
    removePopUp([sevenThreeText, sevenOneText], [sevenThreeArea, sevenOneArea]);
  });
});
sevenThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    togglePopUp(sevenThreeText, sevenThreeArea, [sevenOneArea, sevenTwoArea]);
    closePopUp(sevenThreeClose, sevenThreeText, [sevenOneArea, sevenTwoArea]);
    removePopUp([sevenOneText, sevenTwoText], [sevenOneArea, sevenTwoArea]);
  });
});
