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
    twoThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    twoTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    twoOneText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    twoOneClose.forEach(function (item) {
      item.addEventListener("click", () => {
        twoOneText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

twoTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    twoThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    twoOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    twoTwoText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    twoTwoClose.forEach(function (item) {
      item.addEventListener("click", () => {
        twoTwoText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

twoThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    twoTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    twoOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    twoThreeText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    twoThreeClose.forEach(function (item) {
      item.addEventListener("click", () => {
        twoThreeText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

// IP3
// 9.4
const threeOneArea = document.querySelectorAll("#threeOneArea");
const threeOneText = document.querySelectorAll("#threeOneText");
const threeOneClose = document.querySelectorAll("#threeOneClose");
// 12.2
const threeTwoArea = document.querySelectorAll("#threeTwoArea");
const threeTwoText = document.querySelectorAll("#threeTwoText");
const threeTwoClose = document.querySelectorAll("#threeTwoClose");

// 6.4
const threeThreeArea = document.querySelectorAll("#threeThreeArea");
const threeThreeText = document.querySelectorAll("#threeThreeText");
const threeThreeClose = document.querySelectorAll("#threeThreeClose");

// 12.5
const threeFourArea = document.querySelectorAll("#threeFourArea");
const threeFourText = document.querySelectorAll("#threeFourText");
const threeFourClose = document.querySelectorAll("#threeFourClose");

threeOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    threeFourText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeOneText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    threeOneClose.forEach(function (item) {
      item.addEventListener("click", () => {
        threeOneText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

threeTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    threeFourText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeTwoText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    threeTwoClose.forEach(function (item) {
      item.addEventListener("click", () => {
        threeTwoText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

threeThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    threeFourText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeThreeText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    threeThreeClose.forEach(function (item) {
      item.addEventListener("click", () => {
        threeThreeText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

threeFourArea.forEach(function (item) {
  item.addEventListener("click", () => {
    threeOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    threeFourText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    threeFourClose.forEach(function (item) {
      item.addEventListener("click", () => {
        threeFourText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

// IP4
// 5.6
const fourOneArea = document.querySelectorAll("#fourOneArea");
const fourOneText = document.querySelectorAll("#fourOneText");
const fourOneClose = document.querySelectorAll("#fourOneClose");
// 10.3
const fourTwoArea = document.querySelectorAll("#fourTwoArea");
const fourTwoText = document.querySelectorAll("#fourTwoText");
const fourTwoClose = document.querySelectorAll("#fourTwoClose");

// 10.4
const fourThreeArea = document.querySelectorAll("#fourThreeArea");
const fourThreeText = document.querySelectorAll("#fourThreeText");
const fourThreeClose = document.querySelectorAll("#fourThreeClose");

fourOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    fourThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    fourTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    fourOneText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    fourOneClose.forEach(function (item) {
      item.addEventListener("click", () => {
        fourOneText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

fourTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    fourThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    fourOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    fourTwoText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    fourTwoClose.forEach(function (item) {
      item.addEventListener("click", () => {
        fourTwoText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

fourThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    fourTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    fourOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    fourThreeText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    fourThreeClose.forEach(function (item) {
      item.addEventListener("click", () => {
        fourThreeText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

// IP5
// 12.4
const fiveOneArea = document.querySelectorAll("#fiveOneArea");
const fiveOneText = document.querySelectorAll("#fiveOneText");
const fiveOneClose = document.querySelectorAll("#fiveOneClose");
// 12.6
const fiveTwoArea = document.querySelectorAll("#fiveTwoArea");
const fiveTwoText = document.querySelectorAll("#fiveTwoText");
const fiveTwoClose = document.querySelectorAll("#fiveTwoClose");

fiveOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    fiveTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    fiveOneText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    fiveOneClose.forEach(function (item) {
      item.addEventListener("click", () => {
        fiveOneText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

fiveTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    fiveOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    fiveTwoText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    fiveTwoClose.forEach(function (item) {
      item.addEventListener("click", () => {
        fiveTwoText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

// IP6
// 3.6
const sixOneArea = document.querySelectorAll("#sixOneArea");
const sixOneText = document.querySelectorAll("#sixOneText");
const sixOneClose = document.querySelectorAll("#sixOneClose");
// 9.5
const sixTwoArea = document.querySelectorAll("#sixTwoArea");
const sixTwoText = document.querySelectorAll("#sixTwoText");
const sixTwoClose = document.querySelectorAll("#sixTwoClose");

// 11.2
const sixThreeArea = document.querySelectorAll("#sixThreeArea");
const sixThreeText = document.querySelectorAll("#sixThreeText");
const sixThreeClose = document.querySelectorAll("#sixThreeClose");

// 12.2
const sixFourArea = document.querySelectorAll("#sixFourArea");
const sixFourText = document.querySelectorAll("#sixFourText");
const sixFourClose = document.querySelectorAll("#sixFourClose");

// 12.8
const sixFiveArea = document.querySelectorAll("#sixFiveArea");
const sixFiveText = document.querySelectorAll("#sixFiveText");
const sixFiveClose = document.querySelectorAll("#sixFiveClose");

sixOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    sixFiveText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixFourText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixOneText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    sixOneClose.forEach(function (item) {
      item.addEventListener("click", () => {
        sixOneText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

sixTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    sixFiveText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixFourText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixTwoText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    sixTwoClose.forEach(function (item) {
      item.addEventListener("click", () => {
        sixTwoText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

sixThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    sixFiveText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixFourText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixThreeText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    sixThreeClose.forEach(function (item) {
      item.addEventListener("click", () => {
        sixThreeText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

sixFourArea.forEach(function (item) {
  item.addEventListener("click", () => {
    sixFiveText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixFourText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    sixFourClose.forEach(function (item) {
      item.addEventListener("click", () => {
        sixFourText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});
sixFiveArea.forEach(function (item) {
  item.addEventListener("click", () => {
    sixOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixFourText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sixFiveText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    sixFiveClose.forEach(function (item) {
      item.addEventListener("click", () => {
        sixFiveText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});
// IP7
// 8.4
const sevenOneArea = document.querySelectorAll("#sevenOneArea");
const sevenOneText = document.querySelectorAll("#sevenOneText");
const sevenOneClose = document.querySelectorAll("#sevenOneClose");
// 12.2
const sevenTwoArea = document.querySelectorAll("#sevenTwoArea");
const sevenTwoText = document.querySelectorAll("#sevenTwoText");
const sevenTwoClose = document.querySelectorAll("#sevenTwoClose");

// 12.5
const sevenThreeArea = document.querySelectorAll("#sevenThreeArea");
const sevenThreeText = document.querySelectorAll("#sevenThreeText");
const sevenThreeClose = document.querySelectorAll("#sevenThreeClose");

sevenOneArea.forEach(function (item) {
  item.addEventListener("click", () => {
    sevenThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sevenTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sevenOneText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    sevenOneClose.forEach(function (item) {
      item.addEventListener("click", () => {
        sevenOneText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

sevenTwoArea.forEach(function (item) {
  item.addEventListener("click", () => {
    sevenThreeText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sevenOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sevenTwoText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    sevenTwoClose.forEach(function (item) {
      item.addEventListener("click", () => {
        sevenTwoText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});

sevenThreeArea.forEach(function (item) {
  item.addEventListener("click", () => {
    sevenTwoText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sevenOneText.forEach(function (item) {
      if (item.classList.contains("show-text")) {
        item.classList.remove("show-text");
      }
    });
    sevenThreeText.forEach(function (item) {
      item.classList.toggle("show-text");
    });
    sevenThreeClose.forEach(function (item) {
      item.addEventListener("click", () => {
        sevenThreeText.forEach(function (item) {
          if (item.classList.contains("show-text")) {
            item.classList.remove("show-text");
          }
        });
      });
    });
  });
});
