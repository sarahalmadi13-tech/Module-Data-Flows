// =================
// Stripped down cowsayer CLI,
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments
const saying = process.argv[2];

// how will you accept arguments?

// 2. Make supplies for our speech bubble

let topLine = "----------";
let bottomLine = "----------";

// 3. Make a cow that takes a string

function cowsay(text) {
  if (!text) {
    return "The cow refuses to speak without text!";
  }
  const bubble = ` ${topLine}
< ${text} >
 ${bottomLine}
 `;
  const cow = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
    `;
  return bubble + cow;
}
// how will you make the speech bubble contain the text?

// where will the cow picture go?

// how will you account for the parameter being empty?

//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
console.log(cowsay(saying));
