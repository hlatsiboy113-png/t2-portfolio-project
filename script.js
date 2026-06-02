function openModal(type) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  modal.style.display = "block";

  if (type === "html") {
    body.innerHTML = `
      <h2>HTML Foundations</h2>
      <ul>
        <li>Semantic structure (header, section, footer)</li>
        <li>Forms & input validation</li>
        <li>Accessibility basics (alt, labels)</li>
      </ul>
      <p><b>Proof Projects:</b></p>
      <ul>
        <li>Netflix Clone HTML structure</li>
        <li>To-Do List markup</li>
      </ul>
    `;
  }

  if (type === "css") {
    body.innerHTML = `
      <h2>CSS Styling System</h2>
      <ul>
        <li>Flexbox & Grid layouts</li>
        <li>Responsive design</li>
        <li>UI structuring principles</li>
      </ul>
      <p><b>Proof Projects:</b></p>
      <ul>
        <li>Netflix Clone layout system</li>
      </ul>
    `;
  }

  if (type === "js") {
    body.innerHTML = `
      <h2>JavaScript Engine</h2>
      <ul>
        <li>DOM manipulation</li>
        <li>Event handling</li>
        <li>LocalStorage systems</li>
      </ul>
      <p><b>Proof Projects:</b></p>
      <ul>
        <li>To-Do List logic</li>
      </ul>
    `;
  }

  if (type === "git") {
    body.innerHTML = `
      <h2>Git & GitHub Workflow</h2>
      <ul>
        <li>Version control basics</li>
        <li>Branching & merging</li>
        <li>Commit history tracking</li>
      </ul>
      <p><b>Proof Projects:</b></p>
      <ul>
        <li>All repositories on GitHub</li>
      </ul>
    `;
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.98)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  });
});
ding: 70px 15px;
  }
}

const languages = [
  "HTML", "CSS", "JavaScript", "Git", "GitHub",
  "Python", "Java", "C", "C++", "C#",
  "TypeScript", "React", "Node.js", "Express",
  "MongoDB", "MySQL", "PostgreSQL",
  "PHP", "Laravel", "TailwindCSS",
  "Bootstrap", "Sass", "Redux",
  "Next.js", "Vue", "Angular",
  "Docker", "Kubernetes", "Firebase",
  "AWS", "Azure", "Linux",
  "Go", "Rust", "Swift",
  "Kotlin", "Flutter", "Dart",
  "GraphQL", "REST API", "JSON",
  "Webpack", "Vite", "Bash",
  "Svelte", "Redis"
];

// Map simple icons (you can replace with real images later)
const getIcon = (lang) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${lang.toLowerCase()}/${lang.toLowerCase()}-original.svg`;

const track = document.getElementById("carouselTrack");

// Render
languages.forEach(lang => {
  const div = document.createElement("div");
  div.className = "lang-card";

  div.innerHTML = `
    <img src="${getIcon(lang)}" onerror="this.src='https://via.placeholder.com/50'" />
    <p>${lang}</p>
  `;

  track.appendChild(div);
});

// Auto-scroll carousel
let scrollAmount = 0;

setInterval(() => {
  scrollAmount += 140;

  if (scrollAmount > track.scrollWidth - window.innerWidth) {
    scrollAmount = 0;
  }

  track.style.transform = `translateX(-${scrollAmount}px)`;
}, 2000);