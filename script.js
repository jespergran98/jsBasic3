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