console.log("Benvenuto in JSnacks");

/* 
* 1 => Crea 10 oggetti che rappresentano una zucchina, 
* indicandone per ognuno varietà, peso e lunghezza. 
* Calcola quanto pesano tutte le zucchine.
*/

console.log("Snack #1: somma delle proprietà degli oggetti di un array");
const zucchine = [
	{ colore: 'gialla', peso: 10, lunghezza: 4 },
	{ colore: 'verde chiaro', peso: 13, lunghezza: 16 },
	{ colore: 'verde scuro', peso: 4, lunghezza: 23 },
	{ colore: 'verde radioattivo', peso: 11, lunghezza: 6 },
	{ colore: 'blu', peso: 2, lunghezza: 17 }
];

// Soluzione "on-the-fly"
let sommaZucchine = 0;
for (let i = 0; i < zucchine.length; i++) {
	sommaZucchine += zucchine[i].peso;
}
console.log("Somma on-the-fly: ", sommaZucchine);

// Soluzione riutilizzabile
function sumProperties(array, propertyName) {
	let risultato = 0;

	for (let i = 0; i < array.length; i++) {
		risultato += array[i][propertyName];
	}
	return risultato;
}

const pesoZucchine = sumProperties(zucchine, "peso");
console.log("Le zucchine pesano: ", pesoZucchine);

/* 
 * 2 => Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

console.log("Snack #2: filtrare un array");
const zucchineCorte = [];
const zucchineLunghe = [];

for (let i = 0; i < zucchine.length; i++) {
	const questaZucchina = zucchine[i];

	if (questaZucchina.lunghezza < 15) {
		zucchineCorte.push(questaZucchina);
	} else {
		zucchineLunghe.push(questaZucchina);
	}
}

const pesoZucchineCorte = sumProperties(zucchineCorte, "peso");
const pesoZucchineLunghe = sumProperties(zucchineLunghe, "peso");

console.log(`Zucchine Corte: `, `${pesoZucchineCorte}kg`, zucchineCorte);
console.log(`Zucchine Lunghe `, `${pesoZucchineLunghe}kg`, zucchineLunghe);


// function filtraZucchine(array) {
// 	let risultato = {
// 		lunghe: [],
// 		corte: []
// 	};

// 	for (let i = 0; i < array.length; i++) {
// 		const questoElemento = array[i];
	
// 		if (questoElemento.lunghezza < 15) {
// 			risultato.corte.push(questoElemento);
// 		} else {
// 			risultato.lunghe.push(questoElemento);
// 		}
// 	}

// 	return risultato;
// }

// let zucchineFiltrate = filtraZucchine(zucchine);
// console.log("Zucchine filtrate", zucchineFiltrate);
// console.log("Zucchine lunghe", zucchineFiltrate.lunghe);
// console.log("Zucchine corte", zucchineFiltrate.corte);