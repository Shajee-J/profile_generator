const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let user = {}
rl.question("What's an activity you like doing?", (answer) => {
  user.activity = answer

  rl.question("What do you listen to while doing that?", (answer) => {
    user.music = answer

    rl.question("Which meal is your favourite of the day?", (answer) => {
      user.meal = answer

      rl.question("What's your favourite thing to eat for that meal?", (answer) => {
        user.food = answer

        rl.question("Which sport is your absolute favourite?", (answer) => {
          user.sport = answer

          rl.question("What is your superpower?", (answer) => {
            user.power = answer

            rl.question("What's your name? Nicknames are also acceptable? ", (answer) => {
              user.nickname = answer

              console.log(user)

              console.log(`Thank you ${user.nickname}.`)
              console.log(`your fav meal of the day is ${user.meal} and your fav thing to eat is ${user.food}.`)
              console.log(`you must really into ${user.sport} huh?`)
              console.log(`So i guess your day to day typically involves ${user.activity}.`)
              console.log(`Do you like listening to ${user.music} while performing your day to day? music is a great`)
              console.log(`${user.power}?!! that'd would be a pretty cool power to have. :D`)

              rl.close();
            });
          });
        });
      });
    })
  });
});





