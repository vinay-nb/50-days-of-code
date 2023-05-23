const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  hasLower: getRandomLower,
  hasUpper: getRandomUpper,
  hasNumber: getRandomNumber,
  hasSymbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const password = resultEl.innerText;
  if (!password) {
    return;
  }
  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("Password copied to clipboard");
});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolsEl.checked;
  resultEl.innerText = generatePassWord(
    hasLower,
    hasNumber,
    hasSymbol,
    hasUpper,
    length
  );
});

function generatePassWord(hasLower, hasNumber, hasSymbol, hasUpper, length) {
  let generatedPassword = "";
  const typesCount = hasLower + hasNumber + hasSymbol + hasUpper;
  const typesArr = [
    { hasLower },
    { hasNumber },
    { hasSymbol },
    { hasUpper },
  ].filter((item) => Object.values(item)[0]);
  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@$%^&*()[]{}=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
