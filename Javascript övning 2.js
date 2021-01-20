//uppgift 1-2

let num1 = 8

if(num1 <= 10) {
    console.log(num1 + " är mindre eller samma 10")
} else {
    console.log(num1 + " är större än 10 ")
}

//uppgift 3

function uppgift3() {
	let season = "Sommar";
	let seasons = ["vinter", "vår", "sommar", "höst"];

	for (let i = 0; i < seasons.length; i++) {
		if (seasons[i] === season) {
			return "årstiden är: " + seasons[i];
		}
	}
}

//uppgift 4 

function uppgift4() {
	let kodare = "Kalle";
	let lang = "";

	return lang_finder(lang, kodare);

//uppgift 5

function uppgift5() {
	let num2 = 5;
	return num2 + " är " + (num2 > 2 && num2 < 10 ? "" : "inte ") + "större än 2 och mindre än 10";

//uppgift 6 

function uppgift6() {
	let var_type = true;
	let message = "datat är av typen: ";
	let types = {"string": "teckensträng", "number": "nummer", "boolean": "boolesk"}
    return message + types[String(typeof var_type)];
    
}

//uppgift 7 

function uppgift7() {
	let text = "--_--";
	let message = "Längden är ";

	if (text.length === 0) {
		return message + 0;
	}

	if (text.length >= 1 && text.length <= 3) {
		return message + "mellan 1 och 3";
	}

	if (text.length >= 4 && text.length <= 10) {
		return message + "mellan 4 och 10";
	}

	if (text.length > 10 && text.length < 20) {
		return message + "mer än 10 men mindre än 20";
	}

	if (text.length > 20) {
		return message + "mer än 20";
	}
}

