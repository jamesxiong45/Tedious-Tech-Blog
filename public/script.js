

  function createCharacter() {

    // Get the character information from the form
    const charName = document.getElementById("char-name").value;
    const charRace = document.getElementById("char-race").value;
    const charClass = document.getElementById("char-class").value;
    const charLevel = document.getElementById("char-level").value;
    const charAlignment = document.getElementById("char-alignment").value;


    // Store the character information in local storage
    localStorage.setItem("charName", charName);
    localStorage.setItem("charRace", charRace);
    localStorage.setItem("charClass", charClass);
    localStorage.setItem("charLevel", charLevel);
    localStorage.setItem("charAlignment", charAlignment);

    // Display the character information on the page and returns an alert if there is nothing in the name or level.
    // The syntax ${} evaluates the value and inserts it into the innerHTML
    const charCard = document.getElementById("char-card");
    if (charName === '' && charLevel === '') {
        window.alert("Please enter a name and level.");
      } else if (charName === '') {
        window.alert("Please enter a name.");
      } else if (charLevel === '') {
        window.alert("Please enter a level.");
      } else {
        charCard.innerHTML = `
          <p>Name: <label id="char-name">${charName}</label></p>
          <p>Race: <label id="char-race">${charRace}</label></p>
          <p>Class: <label id="char-class">${charClass}</label></p>
          <p>Level: <label id="char-level">${charLevel}</label></p>
          <p>Alignment: <label id="char-alignment">${charAlignment}</label></p>
        `;
      }
    }
    
    // Displays the character information in the card when you click submit.
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    createCharacter();
    
  });

const url = new URL(
    "https://dddice.com/api/1.0/roll"
);

const headers = {
    "Authorization": "Bearer {fAUODjw7EwBEVxtorbf0qTICaSmZ6Xfc5KLkWPyS}",
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "dice": [
        {
            "type": "D20",
            "theme": "dddice-red"
        },
        {
            "type": "D20",
            "theme": "dddice-red"
        }
    ],
    "external_id": "pariatur",
    "operator": {
        "k": "\"h2\"",
        "p": "suscipit",
        "rr": "aut",
        "ro": "et",
        "ra": "magni",
        "e": "rerum",
        "mi": 1633244.09,
        "ma": 58.63
    },
    "label": "\"Longbow damage with Hunter's Mark\"",
    "room": "HvvOlTl",
    "whisper": [
        213207.481552
    ]
};

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());






// Spell Generator JS

var spellLoreButton = document.getElementById("spell-lore-button")
var spellName = document.getElementById("spell-name")
var spellDescription = document.getElementById("spell-description")
var cardContainer = document.querySelector(".card-container");

    async function getSpells(){
        const spellResponse = await fetch('https://www.dnd5eapi.co/api/spells');
        var dndSpells = await spellResponse.json();
        console.log(dndSpells)
                  
        num = Math.floor(Math.random()*320)
        spellTitle = dndSpells.results[num].index
               
        randomSpell= 'https://www.dnd5eapi.co/api/spells/' + spellTitle
            
        var urlResponse = await fetch(randomSpell)
        var spellObj = await urlResponse.json()
        console.log(spellObj.name)
        console.log(spellObj.desc)  
        spellName.innerText = spellObj.name
        spellDescription.innerText = spellObj.desc
        console.log(spellName.innerText)
        console.log(spellDescription.innerText)            
}
    spellLoreButton.addEventListener("click", () => {
        getSpells()
        cardContainer.style.display = "block";
        })
// Spell Generator JS
