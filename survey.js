const { readlink } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profile = {};
const wordsLikeCool = ["Cool!", "Dope!", "Awesome!", "Fantastic!", "Interesting!"];

rl.question(`What's your name? Nicknames are also acceptable!\nAnswer: `, (answer) => {
  profile["name"] = answer;
  console.log(`Hi, ${profile.name}!`);
  setTimeout(() => {
    rl.question(`What's an activity you like doing?\nAnswer: `, (answer) => {
      profile["activity"] = answer;
      console.log(wordsLikeCool[Math.floor(Math.random() * wordsLikeCool.length)]);
      setTimeout(() => {
        rl.question(`What do you listen to while doing that?\nAnswer: `, answer => {
          profile["listen"] = answer;
          console.log(wordsLikeCool[Math.floor(Math.random() * wordsLikeCool.length)]);
          setTimeout(() => {
            rl.question(`Which meal is your favourite? Dinner? Brunch? Anything else?\nAnswer: `, answer => {
              profile["meal"] = answer;
              console.log(wordsLikeCool[Math.floor(Math.random() * wordsLikeCool.length)]);
              setTimeout(() => {
                rl.question(`What's your favourite thing to eat for ${profile.meal}?\nAnswer: `, answer => {
                  profile["food"] = answer;
                  console.log(wordsLikeCool[Math.floor(Math.random() * wordsLikeCool.length)]);
                  setTimeout(() => {
                    rl.question(`Which sport is your absolute favourite?\nAnswer: `, answer => {
                      profile["sport"] = answer;
                      console.log(wordsLikeCool[Math.floor(Math.random() * wordsLikeCool.length)]);
                      setTimeout(() => {
                        rl.question(`What is your superpower? In a few words, tell us what you are amazing at!\nAnswer: `, answer => {
                          profile["superpower"] = answer;
                          console.log(wordsLikeCool[Math.floor(Math.random() * wordsLikeCool.length)]);
                          setTimeout(() => {
                            console.log(`Here's your profile!\n---\nI'm ${profile.name}. An activity I like doing is ${profile.activity}, and I listen to ${profile.listen} while doing that. My favourite meal of the day is ${profile.meal}, and I like eating ${profile.food} during then. My absolute favourite sport is ${profile.sport}. Here's my superpower: ${profile.superpower}.`);
                            rl.close();
                          }, 2000);
                        });
                      }, 2000);
                    });
                  }, 2000);
                });
              }, 2000);
            });
          }, 2000);
        });
      }, 2000);
    });
  });
});