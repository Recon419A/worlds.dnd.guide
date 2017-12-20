
var splashes = [
'Default Text Here',
"Hey, at least it's not owlbears",
'Vampire on 3 HP remaining: "Our Lord shall hear of this insult!" <br /> PC: "Not from you."',
"They're not very good bandits, They died and I took their stuff...does this make me a bandit?",
"Court is adjourned",
"Weep, for I do not sleep",
"What was the name of that spell I use to detect magic?",
"DM: you hear a startled wail <br /> US: there's a whale in the forest?",
"I'm the leader of this merry band of assholes.",
"The king wants to see us? Alright, bring him to us!",
"'This is just a costume, not a human skin. After all, what kind of madman would tan a human skin?' -NG Cleric trying to tan human skin",
'"Do I do more damage if I&#39;m inside the Bulette?" <br /> "... Yes"',
"Just because I'm a cleric doesn't mean I can't spoon out his eyes",
"Im a cleric of the sun, he doesn't deserve to see sunlight",
"Your attacks are as weak as your beer!",
"The cultist looks up to see your genitals flying towards his face.",
"We don't want any trouble. Just give us your limbs.",
"Evil Bishop: I have this whole city sitting in my lap! <br /> Rogue: Did they have to push the choir boys off of it first?",
"If I butter myself, does it raise my AC? Can it at least make grapple checks harder?",
"We have a lot of questions… but we have a dead friend, so let’s worry about that.",
"Can I Uncanny Dodge the ground?",
'"... as far as you can tell, the turtles around you are packing missile launchers" <br /> "guys, we&#39;re surrounded. Kill the bloodthirsty turtles"',
"There's not enough stealth in the world to steal a Duchess from a party",
"I don't understand what bacon is, really.",
"If you can be a bear, why would you be a human?",
"We are doers of things",
'Party Member 1: "Can I pick the lock?" <br /> Party Member 2: "You have a grenade."',
"Why are we arguing over this? Stab him in the face and let's get moving.",
'"A goblin ate your husband&#39;s face." (To a worried wife holding her small child)',
"I moon the Balrog",
'"If you don&#39;t quit trying to sleight of hand everything, I&#39;m going to sleight of hand my fist up your ass!" Said the Paladin to the Rogue/Ranger.',
"I'm going to use Stone Shape to give (petrified allied PC) a giant mustache.",
"Good sir, are you aware that your town has an owl infestation?",
'From a jail cell, PC: "I piss on the guard" <br /> DM "He&#39;s 8 feet away..." <br /> PC "I build up pressure and release." <br /> PC rolls a 20 <br /> DM "Well then..."',
'"I&#39;m an elf, raised by humans." (Said with a spot-on Will Ferrell impression.)',
'"I&#39;m going off to face the harpy alone. The DM wouldn&#39;t kill me in our first game." You&#39;re lucky I rolled shit , John!',
'"You don&#39;t want to get so high you lose your ducks." Said the PC as he attempted to sell a duck-hearding gnome a "magic" mushroom.',
"You are now holding a floppy dwarf.",
"It's settled; we're posing as magical manure merchants.",
"You want to feed the sapient Underdark mushroom the blood of a magic dragon?",
"When you choke another man with a banana, you'd better look him in the eye!",
"Roll for friendship! Roll for friendship!",
"Oaths of celibacy are made to be broken.",
"Always great to play into the plans of the forces that shape the universe. By which I mean the DM.",
"Ari’s arrogance taking a hit is like a barbarian taking a hit.",
'(giving an ugly statue as a gift to an ancient sphinx) "It&#39;s modern art."',
"I stroke it cautiously, yet firmly, with my mage hand.",
"I don't care how much gold we get, I'm not going gay for my girlfriends character.",
"Take off your socks you coward!",
"Is he considered flanked because of the sheep?",
"Is a great axe a finesse weapon?",
'DM "The guard seems to have discovered you behind that potted plant. What do you do? <br /> My assassin: "I hide harder."',
"I tried to be nice by intimidating you, but now I have to use magic.",
"You cannot go there. There is a bear.",
"He said he's dying, he'll be fine.",
"On riding down a hill into a town when a disturbance is detected - 'I keep going down on my horse'",
"Roll for seduction",
"Roll for tom cruise",
"Can I castrate the guard?",
"I try to get the dragon to come down here using Animal Handling.",
'Citizen: "What gives you the right to come in here and slaughter us!?" My Medic(in a matter of fact tone): "Dictate 7 subsection E"',
"I take the pantsless man from behind",
"This is why you don't get in deep with the horse mafia.",
"I would like to escort the lich out of the room, please.",
'DM: Alright, they pull it out <br /> Me: I pull mine out as well and say "Mine&#39;s longer!"',
'DM: Perilous Situation <br /> Me: Hilarious Quip',
'Roll sleight of hand, with disadvantage, because I fucking hate you.',
'It’s like my momma always said: if you just keep hitting something, it’ll stop hurting you.',
"I yell 'you'll never take me alive' and then cast Fireball on myself.",
"Those three high-tier wizards will kick my butt, but if I kill them I can level up...",
"You know that move from Dumb and Dumber where the guy pulls the other guy's heart out and puts it in a to-go bag? Well, I do that.",
"I force him to eat oranges until he dies from too much Vitamin C.",
"Why are we trying to negotiate with the king again? I throw my axe at him."
];

var alignments = ["left", "center", "right", "bottom", "top"]
function setSplash() {
  document.getElementById('splash').innerHTML = splashes[Math.floor(Math.random() * splashes.length)];
}

function getSplash() {
  return splashes[Math.floor(Math.random() * splashes.length)];
}

function setBG() {
  document.getElementById('jumboTronBG').innerHTML = ".jumbotron { background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/backdrops/" + (Math.floor(Math.random() * 7)+1) + ".jpg); background-position: " + alignments[Math.floor(Math.random() * alignments.length)] + "; color: white; }";
}

// Start executing here
setSplash();
setBG();
