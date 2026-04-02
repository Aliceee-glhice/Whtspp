// FOTO
document.getElementById("profile-img").src = "https://imgbox.com/knACbyxd";

// JUDUL
document.getElementById("judul").innerText = "Join....❣️";

// BACKGROUND SLIDE (KIRI → KANAN)
const images = ["https://i.imgur.com/RbpRJsc.jpeg", "https://i.imgur.com/YznES9G.jpeg"];
let index = 0;

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const bg = document.getElementById("bg");

// set awal
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

// DATA LINK
const data = [
  {
    name: "WhatsApp",
    icon: "https://img.icons8.com/color/48/whatsapp.png",
    link: "https://tapthelink.cfd/Pfrqy",
    class: "wa"
  },
  {
    name: "Telegram",
    icon: "https://img.icons8.com/color/48/telegram-app.png",
    link: "https://tapthelink.cfd/Pfrqy",
    class: "telegram"
  }
];

// RENDER
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
