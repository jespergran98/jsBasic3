const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
	{
		name: "Thomas",
		male: true,
		age: 23,
		hobbies: ["cycling", "football", "pool"]
	},
	{
		name: "Susan",
		male: false,
		age: 26,
		hobbies: ["jogging", "travelling", "dancing"]
	},
	{
		name: "Monica",
		male: false,
		age: 21,
		hobbies: ["skateboarding", "guitar", "concerts"]
	},
	{
		name: "Avery",
		male: true,
		age: 28,
		hobbies: ["writing", "games", "memes"]
	},
	{
		name: "Phillip",
		male: true,
		age: 24,
		hobbies: ["boxing", "wrestling", "mma"]
	},
	{
		name: "Otto",
		male: true,
		age: 36,
		hobbies: ["movies", "cinema", "music"]
	},
	{
		name: "Annabelle",
		male: false,
		age: 30,
		hobbies: ["makeup", "fashion", "shopping"]
	},
	{
		name: "Cathy",
		male: false,
		age: 18,
		hobbies: ["design", "drawing", "css"]
	}
];

// Oppgave 1:

// Bruk en vanlig 'for-løkke' til å iterere gjennom `people`-arrayet og utfør følgende:

// - Hvis objektets `name`-verdi er "Otto", skal ingen av endringene nedenfor gjøres
//  på det objektet (hint: bruk `continue`-nøkkelordet).

// - Lag en ny nøkkel på hvert person-objekt i arrayet kalt "city" og sett verdien
//  til en random by fra `cities`-arrayen.

// - Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for
//  menn og "Ms." for kvinner.
// - Øk alderen med 2.

// - Legg til "coding" i begynnelsen av hobby-arrayet i hvert objekt.

// **PS**: Bruk kun én løkke for å gjøre alle de ovennevnte stegene.

// Bruk `console.log(people)` etter løkken for å sjekke at endringene er riktige.

// Bruk løkken din til å regne ut den kombinerte alderen til alle person-objektene
// og lagre det i variabelen `combinedAge`.

// Deretter, etter løkken, bruk den kombinerte alderen til å regne ut gjennomsnittsalderen
// for alle, og lagre det i variabelen `averageAge`.

// Gjør beregningene ETTER at du legger til to år på alderen, og husk, hopp over Otto!

let combinedAge = 0; // Variabel for å summere den totale alderen til alle personer (ekskludert Otto) etter aldersjusteringer
let averageAge = 0; // Variabel for å lagre den beregnede gjennomsnittsalderen (ekskludert Otto)
let count = 0; // teller for antall personer utenom Otto

for (let i = 0; i < people.length; i++) { // Iterer gjennom hele people-arrayet med en for-løkke
  if (people[i].name === "Otto") {
    continue; // Sjekker om personen heter Otto og hopper over Otto og går til neste person
  }
  people[i].city = cities[Math.floor(Math.random() * cities.length)]; // Legg til en tilfeldig by fra cities-arrayet
  people[i].title = people[i].male ? "Mr." : "Ms."; // Legger til tittel
  people[i].age += 2; // Øk alderen med 2 år (ekskluderer Otto)
  people[i].hobbies.unshift("coding"); // Legg til "coding" i begynnelsen av hobby-arrayet
  combinedAge += people[i].age; // Legg den oppdaterte alderen til combinedAge
  count++; // Øk telleren for antall behandlede personer
}

averageAge = combinedAge / count; // Beregn gjennomsnittsalderen etter løkken (ekskl. Otto)
console.log(people); // Skriv ut people-arrayet for å verifisere endringene


// Oppgave 2:

//Lag følgende funksjon:

//Funksjonen skal ta inn ett tall som parameter.

//Funksjonen skal returnere et array med tilfeldige tall mellom 1 og 6.
//Lengden på arrayet bestemmes av tallet som funksjonen mottar som parameter
//(tenk på det som antall terninger vi kaster).

//Eksempler:
//diceRoller(4) skal returnere noe som: [4, 1, 2, 6]
//diceRoller(6) skal returnere noe som: [5, 5, 6, 2, 3, 4]

//Legg til en andre parameter i funksjonen som bestemmer hvor mange sider terningen skal ha.
//diceRoller(5, 20) skal returnere et array med 5 tilfeldige tall fra 1-20.


function diceRoller(throws, sides = 6) {
  const resultat = [];
  
  for (let i = 0; i < throws; i++) {
    const tilfeldigTall = Math.floor(Math.random() * sides) + 1;
    resultat.push(tilfeldigTall);
  }
  
  return resultat;
}

// Eksempler på bruk:
console.log(diceRoller(4));        // f.eks. [4, 1, 2, 6]
console.log(diceRoller(6));        // f.eks. [5, 5, 6, 2, 3, 4]
console.log(diceRoller(5, 20));    // f.eks. [18, 3, 15, 9, 12]


// Oppgave 3:

//Lag følgende funksjon:

//Funksjonen skal ta inn ett array av strings som parameter.

//Inne i funksjonen, gjør følgende:

//Skriv en løkke som itererer gjennom stringene i arrayet, og gjør følgende:

//- Fjern mellomrom fra starten og slutten av hvert ord.
//- Gjør alle ordene om til små bokstaver.

//Bruk en "for...of"-løkke.

//Etter løkken, bruk en metode for å sette sammen arrayet til en enkelt string
//med et enkelt mellomrom mellom ordene (" "), og returner den resulterende stringen.

//Eksempel:
//[" thIS", "teXt ", " nEeds ", "to", "BE", "cleANED ", " Up"]
//skal returnere:
//"this text needs to be cleaned up"

const pokemon = [
  "     PiKaCHu ",
  "chArIZard    ",
  " BulbaSAUr ",
  "sQUirtLE",
  "jIGgLyPUFF   "
];

function cleanText(inputArray) { // Funksjon som tar inn et array av strings som parameter
  const cleanedArray = []; // Tomt array for å lagre de rensede og kapitaliserte ordene
  for (const str of inputArray) { // Iterer gjennom hvert element i inputArray med en for...of-løkke
    const trimmed = str.trim().toLowerCase(); // Fjern mellomrom fra start og slutt, og gjør om til små bokstaver
    const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1); // Kapitaliser første bokstav og legg til resten av strengen
    cleanedArray.push(capitalized); // Legg den kapitaliserte strengen til cleanedArray
  }
  return cleanedArray.join(" "); // Sett sammen arrayet til en enkelt string med mellomrom mellom ordene og returner resultatet
}

console.log(cleanText(pokemon)); // Skriv ut resultatet av cleanText-funksjonen

