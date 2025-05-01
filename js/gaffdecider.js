const tierMessages = {//tells user how good or bad their outings will be based off the tier they select
    A: "Only the best, for the best!",
    B: "Decent little day/night out for you there!",
    C: "Not too shabby like!",
    D: "Doesn't sound like you're gonna have a good time",
    E: "Sounds like a moody time out that",
    F: "What are you doing with yourself?",
    U: "Just stay home, it isn't worth it",
    W: "Make sure to blag a chip count to annoy all the Facebook groups!",
    All: "Going on the sesh, I see!"
  };
  
  const tierPubs = {
    A: [//our favourites
        "Head of Steam",
        "The Bridewell",
        "Liverpool Gin Distillery",
        "Bobo",
        "The Railway (Tithebarn st)",
        "Be at One Seel Street",
        "Be at One Victoria Street",
        "The Roof (above Pins)",
        "Brass Monkey",
        "Pins Social Club",
        "The Merchant",
        "Modo",
        "Albert's Schloss",
        "Lounge 69",
        "Beer Engine",
        "Revolution (Albert dock)",
        "Ship and Mitre",
        "The Denbigh Castle"
      ],
      
      B: [
        "The Saddle",
        "Castle Street Townhouse",
        "Soho",
        "Kazimier garden",
        "Zodiac Shisha Lounge",
        "Papillon",
        "Lady of mann",
        "The Cavern Pub",
        "The Cavern Club",
        "La'go",
        "The Monro",
        "Woody's",
        "Roxy Ballroom (Hanover Street)",
        "Spanish Caravan",
        "Albert's Schenke",
        "Arts Bar",
        "Love Lane Brewery",
        "Teddy's",
        "Cheers big ears",
        "Ye cracke",
        "The Hope and Anchor",
        "NQ64",
        "The Hatch",
        "Black Rabbit",
        "Moloko/Soul train",
        "Manolo",
        "Lime Street Central",
        "Point Blank Shooting Range",
        "Metrocola",
        "Turtle Bay (Hanover street)",
        "Present Company",
        "McGuffie's",
        "Mean Eyed Cat",
        "Dough Bar",
        "The Font",
        "The Red Lion",
        "Brewdog",
        "The Drunken Scholar",
        "Thomas Rigby's",
        "Doctor Duncan's",
        "McCooley's (Mathew St)",
        "The Excelsior",
        "The Lime Kiln Wetherspoons (L1 Concert Square)"
      ],
      
      C: [
        "Ma Boyle's",
        "The Welkin Wetherspoons L1 near Matthew Street",
        "The Pumphouse",
        "The Gladstone",
        "Yates's",
        "Einsteins",
        "Peaky Blinders Bar (Baltic Triangle)",
        "Revolution (St peter's square)",
        "Aether",
        "The Cross Keys",
        "Seel Street Venue",
        "Flanagan's Apple",
        "Bar Cava",
        "Red Door",
        "The Peacock",
        "Abbey Road",
        "New Capital (Chinatown)",
        "Wall of Fame",
        "The slaughterhouse",
        "The Dispensary",
        "Fly in the Loaf",
        "Tom Thumb",
        "The Casa Bar",
        "Camp & Furnace",
        "The Poste House",
        "Angus Tap and Grind",
        "Liverpool Brewing Co.",
        "Scruffy Murphy's (Harrington Street)",
        "The captain Alexander Wetherspoons L1 James Street",
        "The North Western Wetherspoons (Lime St Station)",
        "The Old bank Liverpool",
        "Peter Kavanagh's",
        "The Vines big house",
        "Slug and Lettuce",
        "The Philharmonic",
        "Kitty's Showbar",
        "Pogue Mahone",
        "The Pilgrim",
        "The Lion Tavern",
        "Only Fools and Horses Bar",
        "The Baltic Fleet",
        "Heebie Jeebies",
        "Harrison's",
        "The Long Shot",
        "O'Neill's",
        "The Shipping Forecast",
        "The Flute",
        "Dockleaf (Baltic Triangle)",
        "McCartney's",
        "Ma Egerton's",
        "Legends",
        "Flares",
        "Shiraz (Ranelagh street)",
        "Ye hole in ye wall",
        "Victoria Cross",
        "ArCains",
        "The Flute",
        "Scruffy Murphy's (Mathew Street)",
        "The Liverpool bar",
        "McCooley's (Concert Square)",
        "Coyote Ugly",
        "Ten Street Social"
      ],
      
      D: [
        "Boston Pool loft",
        "The Crocodile",
        "Rubber Soul",
        "The Rose and Crown",
        "Revolver",
        "The Liffey",
        "Solo (Bold st)",
        "Fitzgerald's",
        "Jacaranda",
        "Yankees",
        "The Vernon Arms",
        "Brownlows",
        "The Liffey"
      ],
      
      E: [
        "omg",
        "Eagle (Vauxhall rd)",
        "Dirty O'Sheas",
        "Bierkeller",
        "The Richard John Blackler Wetherspoons L1 Charlotte Street",
        "The Fall Well Wetherspoons L1 Queens Square Station"
      ],
      
      F: [
        "Ruby Blues",
        "Pop world",
        "Midland",
        "Ava's Bar"
      ],
      
      U: [//our least favourites
        "The Empire",
        "The Central",
        "Ranelagh's Tavern",
        "Tess Riley's",
        "Grapes (Matthew Street)",
        "SGT Peppers",
        "Electrik Warehouse",
        "Celtic Corner",
        "The Rocking Horse"
      ],
      
    W: ['The Lime Kiln','The Welkin','The Captain Alexander','The North Western','The Richard John Blackler','The Fall Well']
  };
  document.getElementById("generateBtn").addEventListener("click", () => {
    const tierInput = document.getElementById("tierInput").value.toUpperCase().trim();
    const countInput = parseInt(document.getElementById("countInput").value);
    const resultDiv = document.getElementById("result");

    if (!tierInput || isNaN(countInput) || countInput < 1) {//validation
        resultDiv.textContent = "Please enter valid input for both fields.";
        return;
    }

    let options = [];

    if (tierInput === "ALL") {//puts enitre list together
        for (const tier in tierPubs) {
            options = options.concat(tierPubs[tier]);
        }
    } else if (tierInput === "W") {
        options = tierPubs.W;
    } else {
        for (const char of tierInput) {//for mixed tiers like AC or FE etc
            if (tierPubs[char]) {
                options = options.concat(tierPubs[char]);
            }
        }
    }

    if (options.length === 0) {
        resultDiv.textContent = "Invalid tier entered";
        return;
    }

    const message = tierMessages[tierInput] || "Decent day out that kidda!";
    let output = `${message}<br><br>`; 

    const selected = [];
    while (selected.length < countInput && options.length > 0) {
      const rand = Math.floor(Math.random() * options.length);
      selected.push(options[rand]); 
    }
    
    selected.forEach((boozer, idx) => {
      output += `Boozer ${idx + 1}: ${boozer}<br>`;
    });
    

    // Free pass bonus, chooses a number between 0 and 5, if number is 0 then the pass is awarded.
    const pass = Math.floor(Math.random() * 5);
    if (pass === 0) {
        output += `YOU HAVE BEEN AWARDED A FREE PASS! You can skip one undesirable boozer today!<br>`;
    }

    resultDiv.innerHTML = output; 
});