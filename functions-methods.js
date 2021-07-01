// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat

const emailAdress1 = "n.eeken@novi-education.nl";
const emailAdress2 = "t.mellink@novi.nl";
const emailAdress3 = "a.wiersma@outlook.com";
const emailAdress4 = "novi.nlaapjesk@outlook.com";

function getEmailDomain(emailAdress) {
    return emailAdress.substr(emailAdress.lastIndexOf("@")+1,emailAdress.length)
}

// ---- results:

console.log("");
console.log("results opdracht 1:");
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
console.log(getEmailDomain(emailAdress1));
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
console.log(getEmailDomain(emailAdress2));
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
console.log(getEmailDomain(emailAdress3));



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)

function typeOfEmail(emailDomein) {
    switch (emailDomein) {
        case "novi-education.nl" :
            return "student";
            break;
        case "novi.nl" :
            return "medewerker";
            break;
    }
    return "extern";
}

// ---- results:

console.log("");
console.log("results opdracht 2:");

// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
console.log(emailAdress1 + " : "  +  "typeOfEmail -> "  + typeOfEmail(getEmailDomain(emailAdress1)));
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
console.log(emailAdress2 + " : "  +  "typeOfEmail -> "  + typeOfEmail(getEmailDomain(emailAdress2)));
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
console.log(emailAdress3 + " : "  +  "typeOfEmail -> "  + typeOfEmail(getEmailDomain(emailAdress3)));
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
console.log(emailAdress4 + " : "  +  "typeOfEmail -> "  + typeOfEmail(getEmailDomain(emailAdress4)));


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)

function checkEmailValidity(emailAdress) {
 return emailAdress.includes("@") && !emailAdress.includes(",") && (emailAdress.lastIndexOf(".") !== emailAdress.length-1);
}

// ---- results:

console.log("");
console.log("results opdracht 3:");
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
console.log("n.eeken@novi.nl : checkEmailValidity (expected:true) -> " +checkEmailValidity("n.eeken@novi.nl"));
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
console.log("tessmellink@novi.nl : checkEmailValidity (expected:true) -> " +checkEmailValidity("tessmellink@novi.nl"));
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
console.log("n.eekenanovi.nl : checkEmailValidity (expected:false) -> " +checkEmailValidity("n.eekenanovi.nl"));
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
console.log("n.eeken@novinl. : checkEmailValidity (expected:false) -> " +checkEmailValidity("n.eeken@novinl."));
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
console.log("tessmellink@novi,nl : checkEmailValidity (expected:false) -> " +checkEmailValidity("tessmellink@novi,nl"));