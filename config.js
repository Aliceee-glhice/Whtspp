// FOTO PROFIL
document.getElementById("profile-img").src = "https://images2.imgbox.com/30/f0/CwTGqiYr_o.jpg";

// JUDUL
document.getElementById("judul").innerText = "Join....❣️";

// MEMBER ONLINE LIVE
let current = 7500;

function updateOnline() {
  let change = Math.floor(Math.random() * 10);

  if (Math.random() > 0.5) {
    current += change;
  } else {
    current -= change;
  }

  document.getElementById("fakeOnline").innerText =
    "🟢 " + current + " member online";
}
setInterval(updateOnline, 1000);

// NAMA USA & GERMANY
const names = [
  "James","Michael","John","Robert","David",
  "William","Richard","Joseph","Thomas","Charles",
  "Lukas","Leon","Finn","Jonas","Tim",
  "Maximilian","Paul","Felix","Elias","Noah"
];

// AKSI
const actions = ["joined", "left", "is online", "just joined"];

function showUser() {
  const el = document.getElementById("liveUser");

  const name = names[Math.floor(Math.random() * names.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];

  el.innerText = "🟢 " + name + " " + action;
  el.style.opacity = 1;

  setTimeout(() => {
    el.style.opacity = 0;
  }, 2000);
}
setInterval(showUser, 3000);

// BACKGROUND SLIDE
const images = ["https://images2.imgbox.com/bd/24/zaHRTHiG_o.jpg", "https://images2.imgbox.com/5a/c5/sKWeOOOC_o.jpg"];
let index = 0;

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const bg = document.getElementById("bg");

bg1.src = images[0];
bg2.src = images[1];

function slideBg() {
  index = (index + 1) % images.length;

  bg.style.transform = "translateX(-50%)";

  setTimeout(() => {
    bg.style.transition = "none";
    bg.style.transform = "translateX(0)";

    bg1.src = images[index];
    bg2.src = images[(index + 1) % images.length];

    setTimeout(() => {
      bg.style.transition = "transform 1s ease";
    }, 50);
  }, 3000);
}
setInterval(slideBg, 4000);

// LINK
const data = [
  {
    name: "WhatsApp GROUP",
    icon: "https://img.icons8.com/color/48/whatsapp.png",
    link: "https://api.whatsapp.com/send?phone=628123456789",
    class: "wa"
  },
  {
    name: "Telegram GROUP",
    icon: "https://img.icons8.com/color/48/telegram-app.png",
    link: "https://t.me/username",
    class: "telegram"
  }
];

const container = document.getElementById("links");

data.forEach(item => {
  const el = document.createElement("a");
  el.href = item.link;
  el.className = "link-btn " + item.class;

  el.innerHTML = `
    <div class="left">
      <img src="${item.icon}">
      <span>${item.name}</span>
    </div>
    <span>•••</span>
  `;

  container.appendChild(el);
});
