const nameList = [
    "Rayees",
    "Rahul",
    "Suraj Sah",
    "Saddam",
    "Asher",
    "Abdullah",
    "Anmol",
    "Sohail",
    "Sahid",
    "Salman",
    "Rakesh",
    "Rohit  ",
    "Deepak",
    "Deepti ",
    "Murtuza",
    "You",
    "Enemy",
    "Harshit",
    "Farhan",
    "Vijay ",
    "Gitanjli",
    "Dev Sir",
    "Multan",
    "Cosin",
    "Reyast",
    "Cultist",
    "Manchrian",
    "Rayees",
    "Rahul",
    "Suraj Sah",
    "Saddam",
    "Asher",
    "Abdullah",
    "Anmol ",
    "Sohail",
    "Sahid",
    "Rittik",
    "Otize",
    "Kohli",
    "Rohit",
    "getlal",
    "Goswami",
    "Germen",
    "Sapna",
    "Shuriti",
    "Md Ejaj",
    "Beta",
    "Alpha",
    "Gamma",
    "Omega",
  ];
  let complimentList = [
    "You look great today",
    "You’re a smart cookie.",
    "I bet you make babies smile.",
    "YBro dropped the realest tutorial and just walked off like a legend 😎",
    "I like your style",
    "The editing on this is next level, so smooth 👏",
    "I appreciate you",
    "Came here to learn, stayed for the good vibes ❤️",
    "You light up the room.",
    "Can someone tell me why this isn’t viral yet? 🔥",
    "The explanation was super clear, I finally understood this topic!",
    "This video literally made my day, thank you so much! 🙌",
   "Can’t believe this is free content, you’re helping so many people 🙏",
   "Your voice is so calming and easy to follow 🧠💡",
   "I came for the tutorial but stayed for the humor 😂"
  ];

  export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
  }
  
  export function generateRandomCompliment() {
    return complimentList[Math.floor(Math.random() * complimentList.length)];
  }

  export function generateRandomMessage(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}