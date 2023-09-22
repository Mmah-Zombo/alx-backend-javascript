/* eslint-disable linebreak-style */
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  console.log(`Your name is ${data}`);
  process.stdin.destroy();
})
// const ur_name = process.stdin.read();
// process.stdout.write();
