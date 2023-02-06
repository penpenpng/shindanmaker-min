const STORAGE_KEY = "seed-text";

function random(seed) {
  const now = new Date();
  const daySeed = now.getFullYear() * (now.getMonth() + 1) * now.getDate();
  const random = new XOR128([seed, , , daySeed]);
  return random.next();
}

function getInitialSeedText() {
  const randomAlphabet = String.fromCharCode(
    "A".charCodeAt(0) + Math.floor(Math.random() * 26)
  );

  return `名無しの${randomAlphabet}`;
}

async function getStringHash(text) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text)
  );
  const uint8s = Array.from(new Uint8Array(digest));

  let hash = 0;
  for (let i = 0; i < 6; i++) {
    hash += uint8s[i] * 16 ** (i + 1);
  }

  return hash;
}

async function gacha(seedText) {
  const seedValue = await getStringHash(seedText);
  return list[random(seedValue) % list.length];
}

async function process() {
  const input = document.getElementById("seed-text");
  const seedText = input.value || input.placeholder;

  document.getElementById("result").innerText = await gacha(seedText);

  if (input.value) {
    localStorage.setItem(STORAGE_KEY, input.value);
  }
}

function tweet() {
  const text = document.getElementById("result").innerText;

  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURI(text)}&url=${encodeURI(
      window.location.href
    )}`
  );
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("total").innerText = list.length;
  document.getElementById("submit").addEventListener("click", process);
  document.getElementById("twitter").addEventListener("click", tweet);

  const input = document.getElementById("seed-text");
  input.value = localStorage.getItem(STORAGE_KEY) || "";
  input.placeholder = getInitialSeedText();
});
