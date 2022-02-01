import "./styles.css";

// TODO: Sett startverdien for de ulike tellerene
let wordCounter = 0;
let positionCounter = 0;
let wrongCounter = 0;

// TODO: Lag en liste med ulike ord
const words = ["RealMadrid", "Barcelona", "Furuset", "PL"];

// TODO: Hent ut HTML #id og knappen
const word = document.getElementById("word");
const wrongs = document.getElementById("wrongs");
const letter = document.getElementById("letter");
const button = document.getElementById("button");

const setWord = () => {
  // TODO: Skriv ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
  word.innerHTML = "Ord er ferdig";
};

const changeWord = () => {
  // TODO: Nullstill posisjonstelleren
  positionCounter = 0;
  // TODO: Oppdater telleren vi bruker for å velge ut ord
  setWord();
};

// TODO: Sjekk vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkPosition = (word, position, letter) => {
  return word;
};

// TODO: Sjekk om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const wordIsCorrect = (word, position) => {
  if (position == word.length) {
    changeWord();
  }
  return;
};

const handleKeyUp = ({ key }) => {
  // TODO: Hent ut ordet vi skal skrive
  const word = "";
  // TODO: Bruk checkPosition() til å sjekke om vi har skrevet rett bokstav
  if (checkPosition()) {
    // TODO: Øk posisjonstelleren
    positionCounter++;
    // TODO: Bruk wordIsCorrect() til å sjekke om vi er ferdig med ordet
    if (wordIsCorrect) {
      // TODO: Trigg funksjonen som bytter ord
      changeWord();
    }
  } else {
    // TODO: Oppdater telleren for "feil"
    wrongCounter++;
  }
  updateUI(key);
};

const updateUI = (key) => {
  // TODO: Sjekk om det er flere ord igjen
  if (word < word.length) {
    // TODO: Oppdater HTML for
    // - antall feil
    wrongs.innerHTML = wrongs;
    // - bokstaven vi har skrevet
    word.innerHTML += "";
    // - stylingen på ordet basert på hvilken posisjon vi er på (hvilken bokstav vi skal skrive)
  }
};

// TODO: Lytt til keyup på window
document.addEventListener("keyup", window);
// TODO: Lytt til klikk på knappen
button.addEventListener("click", () => {
  // TODO: Disable knappen etter at vi har trykket på den. Tips: Bruk .disabled = true
  if (button.clicked == true) {
    button.disabled = true;
  }
  // TODO: Sett første ord
  word += "";
});
