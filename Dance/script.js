const danceMoves = [
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description:
      "The Awkward Shuffle - Perfect for those who are unsure about their dance moves.",
    leftDescription: "Shuffle like nobody's watching",
  },
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description:
      "The Robot Boogie - Embrace your inner robot with jerky movements and precise angles.",
    leftDescription: "Robo Moves for Beginners",
  },
  {
    Icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description:
      "The Disco Wiggle - Channel your inner disco diva with groovy hip sways.",
    leftDescription: "Get Down with the Disco",
  },
  {
    Icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description:
      "The Clumsy Cha-Cha - Master the art of cha-cha with a hint of delightful clumsiness.",
    leftDescription: "Cha-Cha with a Twist",
  },
  {
    Icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description:
      "The Funky Flail - Let loose and flail your limbs in the most fun and carefree way.",
    leftDescription: "Groove and Flail Like a Pro",
  },
  {
    Icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description:
      "The Bumbling Bounce - Jump and bounce around the dance floor with wild enthusiasm.",
    leftDescription: "Bounce Your Way to Dance",
  },
  {
    Icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description:
      "The Silly Salsa - Put a playful spin on salsa with wacky spins and unexpected twists.",
    leftDescription: "Salsa with a Side of Silliness",
  },
  {
    Icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description:
      "The Quirky Quickstep - Combine quick steps and quirky movements for a memorable dance.",
    leftDescription: "Quick and Quirky Steps",
  },
  {
    Icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description:
      "The Hilarious Hip-Hop - Nail hip-hop moves with a hilarious twist that'll keep everyone laughing.",
    leftDescription: "Hip-Hop Laughs and Moves",
  },
  {
    Icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description:
      "The Comical Cha-Cha - Add humor to cha-cha with exaggerated footwork and facial expressions.",
    leftDescription: "Laughs and Cha-Cha Delights",
  },
];

const danceContainer = document.getElementById("danceContainer");
const infoCard = document.getElementById("infoCard");
const leftDescriptionCard = document.getElementById("leftDescriptionCard");

function createDanceCards() {
  danceMoves.forEach((move) => {
    const danceCard = document.createElement("div");
    danceCard.classList.add("dance-card");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    const frontText = document.createElement("p");
    frontText.textContent = move.leftDescription;
    cardFront.appendChild(frontText);

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    const backImage = document.createElement("img");
    backImage.src = move.icon;
    cardBack.appendChild(backImage);

    danceCard.appendChild(cardFront);
    danceCard.appendChild(cardBack);

    danceCard.addEventListener("click", () => {
      showInfo(move.description);
      showLeftDescription(move.leftDescription);
      danceContainer.querySelectorAll(".dance-card").forEach((card) => {
        card.style.transform = "rotateY(0deg)";
      });
      danceCard.style.transform = "rotateY(180deg)";
    });

    danceContainer.appendChild(danceCard);
  });
}

function showInfo(description) {
  infoCard.textContent = description;
  infoCard.style.display = "block";
  setTimeout(() => {
    infoCard.style.display = "none";
  }, 2000);
}

function showLeftDescription(leftDescription) {
  leftDescriptionCard.textContent = leftDescription;
}

createDanceCards();

document.addEventListener("click", function (event) {
  const clickedCard = event.target.closest(".dance-card");
  if (clickedCard) {
    danceContainer.querySelectorAll(".dance-card").forEach((card) => {
      if (card !== clickedCard) {
        card.style.transform = "rotateY(0deg)";
      }
    });
    clickedCard.style.transform = "rotateY(180deg)";
  }
});
