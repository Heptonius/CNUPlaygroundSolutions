const abbrevName = (name) => {
  let splitName = name.split(" ");
  return `${splitName[0].charAt(0).toUpperCase()}.${splitName[1].charAt(0).toUpperCase()}`;
}

const abbrevName = (name) => {
  let regex = /\b(\w)/g;
  let capturedLetters = name.match(regex);
  return capturedLetters.map(letter=>letter.toUpperCase()).join(".");
}