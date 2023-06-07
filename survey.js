const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('1. What elements of your life make you feel the most inspired? ', (answer1) => {
  // 1. What elements of your life make you feel the most inspired?
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question('What are some of your top values that you live by? ', (answer2) => {
    // 2. What are some of your top values that you live by?
    console.log(`Thank you for your valuable feedback: ${answer2}`);
    rl.question('3. Who is a person who has most significantly impacted your professional journey so far? ', (answer3) => {
      // 3. Who is a person who has most significantly impacted your professional journey so far?
      console.log(`Thank you for your valuable feedback: ${answer3}`);
      rl.question('4. How have you challenged yourself and pushed yourself out of your comfort zone lately? ', (answer4) => {
        // 4. How have you challenged yourself and pushed yourself out of your comfort zone lately?
        console.log(`Thank you for your valuable feedback: ${answer4}`);
        rl.question('5. What would you say is your proudest accomplishment? ', (answer5) => {
          // 5. What would you say is your proudest accomplishment?
          console.log(`Thank you for your valuable feedback: ${answer5}`);
          rl.question('6. What provides you with a sense of purpose and fulfillment? ', (answer6) => {
            // 6. What provides you with a sense of purpose and fulfillment?
            console.log(`Thank you for your valuable feedback: ${answer6}`);
            rl.question('7. What do you enjoy most about living where you do? ', (answer7) => {
              // 7. What do you enjoy most about living where you do?
              console.log(`Thank you for your valuable feedback: ${answer7}`);
              console.log("Here is your profile description:");
              console.log(
                `I feel the most inspired by ${answer1}.  ` + 
                `The values that I live by are ${answer2}.  ` +
                `${answer3} has most significantly impacted my professional journey so far.  ` +
                `I have enjoy the challenge of ${answer4}, even though it is outside comfort zone.  ` +
                `${answer5} is my proudest accomplishment, ` +
                `however, ${answer6} gives me a sense of purpose and fulfillment.  ` +
                `I love where I live, because I get to do a lot of ${answer7}".`
              );
              rl.close();
            });
          });
        });
      });
    });
  });               
});
