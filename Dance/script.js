// script.js
const danceMoves = [
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },

  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },
  {
    icon: "https://media.tenor.com/_rhhE1jPA8MAAAAC/felstaff-dance-move-felstaff.gif",
    description: "Enthusiastic"
  },
  
  // Add more dance move objects here
];

const danceContainer = document.getElementById("danceContainer");

function createDanceCards() {
  danceMoves.forEach((move) => {
    const danceCard = document.createElement("div");
    danceCard.classList.add("dance-card");
    danceCard.onclick = () => flipCard(danceCard);

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    const frontImage = document.createElement("img");
    frontImage.src = move.icon;
    cardFront.appendChild(frontImage);

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    const backDescription = document.createElement("p");
    backDescription.textContent = move.description;
    cardBack.appendChild(backDescription);

    danceCard.appendChild(cardFront);
    danceCard.appendChild(cardBack);

    danceContainer.appendChild(danceCard);
  });
}

function flipCard(card) {
  if (card.style.transform === "rotateY(180deg)") {
    card.style.transform = "rotateY(0deg)";
  } else {
    card.style.transform = "rotateY(180deg)";
  }
}

createDanceCards();
