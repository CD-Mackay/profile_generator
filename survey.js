const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name/What should we call you? ', (answer1) => {
  console.log(`Well hello there ${answer1}`);
  rl.question('What is your favourite hobby? ', (answer2) => {
    console.log(`Honestly, ${answer2} sounds a little boring`);
    rl.question('What music do you usually listen to? ', (answer3) => {
      console.log(`${answer3}? Seriously? We have the internet, you can listen to anything`);
      rl.question('What is your favorite food? ', (answer4) => {
        console.log(`Now were talking, nothing like 3am ${answer4}`);
        rl.question('What is your favourite sport? If you hate sports, who is your favourite crocheter?', (answer5) => {
          console.log(`Okay there Professor-I-Watch-Obscure-Sports, enjoy your ${answer5}`);
          rl.question('What is your superpower? Seriously, anything you are rad at', (answer6) => {
            console.log(`I really don\'t know how to respond to that`);
            results(answer1, answer2, answer3, answer4, answer5, answer6);
            rl.close();
          });
        });
      });
    });
  });
});

const results = function(answer1, answer2, answer3, answer4, answer5, answer6) {
  console.log(`${answer1} is a really cool character. During their freetime, they usually do some ${answer2}, 
  occasionally while listening to ${answer3}. You should also probably know ${answer1} is always hungry for ${answer4}, 
  usually while hanging out and watching some ${answer5}. But that's just their mild-mannered alter-ego. By night, 
  they roam the streets, fighting crime with their ${answer6} prowess.`);
};



