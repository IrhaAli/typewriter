const sentence = "hello there from lighthouse labs \n";

const typeWriter = function (sentence) {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay + 1000)
    delay += 200;
  }
}

typeWriter(sentence);