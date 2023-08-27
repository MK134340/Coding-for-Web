let galleryItemData = [
  
    {
      id: "a",
      img1: "Assets/L1a.png",
      label1L: "ALIKE (SAME)",
      label1R: "समान",
      img2: "Assets/l1b.png",
      label2L: "DIFFERENT",
      label2R: "भिन्न",
    },
    {
      id: "b",
      img1: "Assets/l2a.png",
      label1L: "OLD",
      label1R: "पुराना",
      img2: "Assets/l2b.png",
      label2L: "NEW",
      label2R: "नया",
    },
    {
      id: "c",
      img1: "Assets/l3a.png",
      label1L: "MAN",
      label1R: "हँसना",
      img2: "Assets/l3b.png",
      label2L: "WOMAN",
      label2R: "महिला",
    },
    {
      id: "d",
      img1: "Assets/l4a.png",
      label1L: "LAUGH",
      label1R: "खट्टा",
      img2: "Assets/l4b.png",
      label2L: "CRY",
      label2R: "रोना",
    },
    {
      id: "e",
      img1: "Assets/l5a.png",
      label1L: "SOUR",
      label1R: "धकेलना",
      img2: "Assets/l5b.png",
      label2L: "SWEET",
      label2R: "मीठा",
    },
    {
      id: "f",
      img1: "Assets/l6a.png",
      label1L: "PUSH",
      label1R: "ऊपर",
      img2: "Assets/l6b.png",
      label2L: "PULL",
      label2R: "खींचना",
    },
    {
      id: "g",
      img1: "Assets/l7a.png",
      label1L: "UP",
      label1R: "प्रसन्न",
      img2: "Assets/l7b.png",
      label2L: "DOWN",
      label2R: "नीचे",
    },
    {
      id: "h",
      img1: "Assets/l8a.png",
      label1L: "HAPPY",
      label1R: "लंबाई",
      img2: "Assets/l8b.png",
      label2L: "SAD",
      label2R: "उदास",
    },
    {
      id: "i",
      label1Left: "LENGTH",
      label1Right: "बाएं",
      img: "Assets/anomaly.png",
      label2Left: "WIDTH",
      label2Right: "चौड़ाई",
    },
    {
      id: "j",
      img1: "Assets/r2a.png",
      label1L: "LEFT",
      label1R: "वजनी",
      img2: "Assets/r2b.png",
      label2L: "RIGHT",
      label2R: "दायें",
    },
    {
      id: "k",
      img1: "Assets/r3a.png",
      label1L: "HEAVY",
      label1R: "लंबा",
      img2: "Assets/r3b.png",
      label2L: "LIGHT",
      label2R: "हलका",
    },
    {
      id: "l",
      img1: "Assets/r5a.png",
      label1L: "TALL",
      label1R: "बैठा",
      img2: "Assets/r5b.png",
      label2L: "SHORT",
      label2R: "बौना",
    },
    {
      id: "m",
      img1: "Assets/r6a.png",
      label1L: "SIT",
      label1R: "तरुण",
      img2: "Assets/r6b.png",
      label2L: "STAND",
      label2R: "खड़ा",
    },
    {
      id: "n",
      img1: "Assets/r7a.png",
      label1L: "YOUNG",
      label1R: "स्वच्छ",
      img2: "Assets/r7b.png",
      label2L: "OLD",
      label2R: "बुज़ुर्ग",
    },
    {
      id: "o",
      img1: "Assets/r8a.png",
      label1L: "CLEAN",
      label1R: "पुस्र्ष",
      img2: "Assets/r8b.png",
      label2L: "DIRTY",
      label2R: "गंदा",
    },
    {
      id: "p",
      img1: "Assets/r9a.png",
      label1L: "CLOSE",
      label1R: "बंद",
      img2: "Assets/r9b.png",
      label2L: "OPEN",
      label2R: "खुला",
    },
  ];

let gallery = document.getElementById("sticker-sheet");

let generateGallery = () => {
  return (gallery.innerHTML = galleryItemData
    .map((x) => {
      let { id, img1, img2, label1L, label1R, label2L, label2R } = x;
      return `

        <div class="sticker-box" id="${id}">
              <div class="sticker-pair">
                <div class="sticker">
                  <img src="${img1}" alt="Sticker Image 1" />
                  <div class="label-left">${label1L}</div>
                  <div class="label-right">${label1R}</div>
                </div>
                <div class="sticker">
                  <img src="${img2}" alt="Sticker Image 2" />
                  <div class="label-left">${label2L}</div>
                  <div class="label-right">${label2R}</div>
                </div>
              </div>
            </div>
    `
    })
    .join(""));
};

generateGallery();

let generateAnomaly = () => {
  const anomalyIndex = galleryItemData.findIndex(item => item.id === "i"); // Find the index of the anomaly sticker (id "p")
  const anomalyItem = galleryItemData[anomalyIndex]; // Get the anomaly sticker object

  // Create the HTML content for the anomaly sticker
  const anomalyHTML = `
    <div class="sticker-box" id="${anomalyItem.id}">
      <div class="sticker-pair">
        <div class="sticker">
          <img src="${anomalyItem.img}" alt="Sticker Image" />
          <div class="label-group">
            <div class="label-left" id="left1">${anomalyItem.label1Left}</div>
            <div class="label-left" id="left2">${anomalyItem.label1Right}</div>
          </div>
          <div class="label-group">
            <div class="label-right" id="right1">${anomalyItem.label2Left}</div>
            <div class="label-right" id="right2">${anomalyItem.label2Right}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Insert the anomaly sticker HTML into the gallery
  gallery.innerHTML = galleryItemData
    .map((item, index) => {
      if (index === anomalyIndex) {
        return anomalyHTML;
      } else {
        return `
          <div class="sticker-box" id="${item.id}">
            <div class="sticker-pair">
              <div class="sticker">
                <img src="${item.img1}" alt="Sticker Image 1" />
                <div class="label-left">${item.label1L}</div>
                <div class="label-right">${item.label1R}</div>
              </div>
              <div class="sticker">
                <img src="${item.img2}" alt="Sticker Image 2" />
                <div class="label-left">${item.label2L}</div>
                <div class="label-right">${item.label2R}</div>
              </div>
            </div>
          </div>
        `;
      }
    })
    .join("");
};

generateAnomaly();