// Definining variables
var Words = [
    "appel",
    "aldus",
    "afwas",
    "aftel",
    "aarde",
    "armen",
    "actie",
    "apart",
    "adres",
    "avond",
    "aders",
    "alarm",
    "boten",
    "balen",
    "beter",
    "bomen",
    "boren",
    "boven",
    "boxen",
    "brood",
    "broek",
    "brand",
    "breed",
    "benen",
    "beeld",
    "brief",
    "beten",
    "basis",
    "blauw",
    "beren",
    "buren",
    "banen",
    "bloed",
    "broer",
    "blond",
    "boter",
    "beleg",
    "breng",
    "baken",
    "beker",
    "blind",
    "bezig",
    "baden",
    "bedel",
    "bazen",
    "bazin",
    "baren",
    "beden",
    "beken",
    "bezem",
    "baard",
    "bidet",
    "breuk",
    "conus",
    "cello",
    "creme",
    "cloud",
    "cacao",
    "cadet",
    "cavia",
    "ceder",
    "combi",
    "china",
    "clown",
    "draai",
    "deden",
    "dalen",
    "derde",
    "delen",
    "dwaas",
    "daden",
    "dader",
    "dames",
    "diner",
    "datum",
    "dozen",
    "dreun",
    "duits",
    "dagen",
    "deren",
    "dwerg",
    "dwaal",
    "dwing",
    "druil",
    "droog",
    "draad",
    "dweil",
    "drank",
    "duren",
    "dwars",
    "drugs",
    "daten",
    "daler",
    "doorn",
    "disco",
    "degen",
    "droom",
    "dient",
    "drone",
    "dadel",
    "duwen",
    "druif",
    "deken",
    "deler",
    "elven",
    "eigen",
    "enger",
    "engel",
    "elder",
    "enkel",
    "effen",
    "email",
    "egaal",
    "fiets",
    "friet",
    "files",
    "forel",
    "films",
    "feest",
    "fruit",
    "falen",
    "flora",
    "fauna",
    "feeen",
    "freak",
    "forum",
    "fusie",
    "geven",
    "gaven",
    "groen",
    "graai",
    "getal",
    "grens",
    "grond",
    "groef",
    "graal",
    "gewei",
    "games",
    "grote",
    "groet",
    "garen",
    "gebak",
    "graag",
    "genre",
    "glans",
    "geluk",
    "geeuw",
    "horen",
    "heren",
    "halen",
    "hagel",
    "haren",
    "helen",
    "harde",
    "hemel",
    "hoofd",
    "huren",
    "hamer",
    "haken",
    "heden",
    "hotel",
    "hobby",
    "heler",
    "hoger",
    "ieder",
    "index",
    "immer",
    "icoon",
    "inlog",
    "inzet",
    "innig",
    "jovel",
    "jaren",
    "jicht",
    "jabot",
    "jacht",
    "jaden",
    "jagen",
    "jager",
    "japon",
    "jarig",
    "jawel",
    "jeans",
    "jemig",
    "jeugd",
    "joint",
    "jonas",
    "joule",
    "koken",
    "kreet",
    "koker",
    "kerst",
    "kegel",
    "koude",
    "kader",
    "krent",
    "kamer",
    "kaars",
    "kaart",
    "kraan",
    "krant",
    "keren",
    "kruid",
    "kerel",
    "kubus",
    "kraal",
    "kleur",
    "kroon",
    "klein",
    "korst",
    "klopt",
    "kabel",
    "kunst",
    "kopje",
    "krans",
    "klimt",
    "kater",
    "klink",
    "kudde",
    "kruis",
    "lopen",
    "laten",
    "lepel",
    "links",
    "laden",
    "leven",
    "lezen",
    "lucht",
    "lenen",
    "laser",
    "lente",
    "licht",
    "lader",
    "leder",
    "lunch",
    "lijst",
    "leger",
    "leden",
    "legen",
    "lagen",
    "lezer",
    "lever",
    "lingo",
    "loper",
    "luier",
    "lager",
    "leeuw",
    "maand",
    "malen",
    "maken",
    "media",
    "meter",
    "motor",
    "maten",
    "markt",
    "mazen",
    "molen",
    "meest",
    "meren",
    "model",
    "meden",
    "maden",
    "macht",
    "meeuw",
    "mager",
    "magen",
    "maren",
    "manen",
    "noord",
    "nieuw",
    "negen",
    "namen",
    "neven",
    "nodig",
    "naden",
    "neder",
    "nemen",
    "onder",
    "optel",
    "ovaal",
    "ovale",
    "onwel",
    "optie",
    "orden",
    "oppas",
    "ouder",
    "ophef",
    "oases",
    "palen",
    "plein",
    "pegel",
    "paars",
    "prijs",
    "piano",
    "pixel",
    "paden",
    "pasta",
    "pizza",
    "poten",
    "paard",
    "puber",
    "pauze",
    "preek",
    "polis",
    "pater",
    "proef",
    "panda",
    "penis",
    "prins",
    "pluto",
    "polen",
    "plint",
    "quota",
    "quant",
    "quark",
    "queue",
    "quilt",
    "quote",
    "robot",
    "reken",
    "raden",
    "regen",
    "radio",
    "rente",
    "regio",
    "rugby",
    "reden",
    "roken",
    "ruzie",
    "ruist",
    "regel",
    "racen",
    "races",
    "riool",
    "ramen",
    "radar",
    "roman",
    "rokje",
    "razen",
    "roede",
    "staan",
    "staal",
    "speel",
    "steeg",
    "stoel",
    "stook",
    "steek",
    "schep",
    "spijs",
    "stoep",
    "shirt",
    "samen",
    "sites",
    "sport",
    "spalk",
    "sjaal",
    "storm",
    "staat",
    "steun",
    "strak",
    "serie",
    "shows",
    "schat",
    "snoep",
    "sfeer",
    "smeer",
    "speer",
    "scene",
    "speld",
    "smeed",
    "smaak",
    "super",
    "stand",
    "steer",
    "smelt",
    "sedan",
    "skier",
    "sluis",
    "sneer",
    "steel",
    "truck",
    "terug",
    "typen",
    "talen",
    "taboe",
    "tegel",
    "taart",
    "tafel",
    "trouw",
    "teken",
    "teren",
    "taken",
    "treur",
    "tenen",
    "titel",
    "thuis",
    "tiara",
    "teder",
    "toets",
    "tabak",
    "trein",
    "tarwe",
    "telen",
    "teler",
    "uiten",
    "uilig",
    "uitje",
    "uiver",
    "ultra",
    "uniek",
    "uppie",
    "uraan",
    "uiers",
    "velen",
    "vloer",
    "video",
    "varen",
    "vegen",
    "veren",
    "vader",
    "vaten",
    "vuren",
    "vrouw",
    "vlees",
    "vogel",
    "vroeg",
    "vezel",
    "veins",
    "vorst",
    "veder",
    "vanaf",
    "vieze",
    "veger",
    "villa",
    "veler",
    "vrede",
    "vries",
    "woord",
    "wagen",
    "wonen",
    "waren",
    "warme",
    "weten",
    "water",
    "weren",
    "wazig",
    "wegen",
    "weven",
    "wezen",
    "weken",
    "wraak",
    "wilde",
    "wreed",
    "wrede",
    "wenst",
    "woest",
    "xenon",
    "yacht",
    "yucca",
    "zwaar",
    "zware",
    "zesde",
    "zagen",
    "zalig",
    "zomer",
    "zeden",
    "zwart",
    "zeven",
    "zicht",
    "zadel",
    "zweet",
    "zenuw",
    "zweer",
    "zweef",
    "zaden",
    "zaken",
    "zeker",
    "zever",
    "zeeen"];

    gekozenWoord = [],
    invoerPositie = 1,
    maximalePogingen = 5,
    aantalPogingen = 1,
    lettersGoed = 0; 


var tijdelijkWoord = Words[Math.floor(Math.random()*Words.length)]; 

document.getElementsByClassName("letterNormaal")[0].innerHTML= Array.from(tijdelijkWoord)[0];

var turns;


for(var i=0;i<tijdelijkWoord.length;i++){
    gekozenWoord.push(tijdelijkWoord.split("")[i].toUpperCase());
};


document.getElementsByClassName("huidigeInvoer")[0].value=gekozenWoord[0];


document.getElementsByClassName("huidigeInvoer")[0].classList.add("letterGoed");


document.getElementsByClassName("huidigeInvoer")[invoerPositie].focus();


function controleWoord(){

    var ingevoerdWoord = [];
    for(i=0;i<5;i++) {
        ingevoerdWoord.push(document.getElementsByClassName("huidigeInvoer")[i].value.toUpperCase());
    };


    lettersGoed = 0;
    for(i=0;i<5;i++){
        var ingevoerdeLetter = ingevoerdWoord[i];
        verwijderClasses(i);
        if(ingevoerdeLetter == gekozenWoord[i]){
            letterGoed(i);
        } else {
            letterFout(i);
        };
    };


    if(lettersGoed<5){
        if(aantalPogingen<maximalePogingen) {
            nieuweBeurt();
            console.log(aantalPogingen + '<' + maximalePogingen);
            aantalPogingen++;
        } else {
            document.getElementById("resultaat").innerText="Helaas het juiste woord is " + tijdelijkWoord.toUpperCase();
            document.getElementById("reload").disabled=false;
        }
    } else {
        document.getElementById("resultaat").innerText="Perfect u heeft het woord geraden!";
        document.getElementById("reload").disabled=false;
    };
};


$("input").keyup(function () {
    var index = $(this).index("input");		 	
    $("input:eq(" + (index +1) + ")").focus().select();
    invoerPositie=index+1
 });



function letterCorrectie() {
    document.getElementsByClassName("huidigeInvoer")[ invoerPositie- 1].value="";
    $("input:eq(" + (invoerPositie - 1) + ")").focus().select();
    invoerPositie --;
};

function verwijderClasses(num) {
    document.getElementsByClassName("huidigeInvoer")[num].classList.remove("letterInWoord");
    document.getElementsByClassName("huidigeInvoer")[num].classList.remove("letterGoed");
    document.getElementsByClassName("huidigeInvoer")[num].classList.remove("letterFout");
};

function letterGoed(positie) {
    document.getElementsByClassName("huidigeInvoer")[positie].classList.add("letterGoed");
    lettersGoed ++;
};

function letterFout(positie) {
    document.getElementsByClassName("huidigeInvoer")[positie].classList.add("letterFout");
};

function nieuweBeurt() {
    if(aantalPogingen<maximalePogingen) {
        let row = document.createElement("div");
        let colom = document.createElement("div")
        row.classList.add("justify-content-center");
        colom.classList.add("col-md-12", "align-self-center", "text-center");
    
    for(var i=0;i<5;i++){
        let oudeBeurt=document.createElement('input');
        let actieveLetter=document.getElementsByClassName("huidigeInvoer")[i]
        oudeBeurt.classList.add("letterNormaal");
        oudeBeurt.disabled=true;
        oudeBeurt.maxLength=1;
        oudeBeurt.type="text";
        oudeBeurt.value=actieveLetter.value;
        oudeBeurt.classList=actieveLetter.classList;
        oudeBeurt.classList.remove("huidigeInvoer");
        colom.appendChild(oudeBeurt);
        row.appendChild(colom);
        if(actieveLetter.classList.contains("letterGoed")==false){
            verwijderClasses(i);
            actieveLetter.value="";
            actieveLetter.classList.add("letterNormaal")
        };
    };

    document.getElementById("speelbord").appendChild(row);
            }
}
