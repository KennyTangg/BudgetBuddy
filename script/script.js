const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

// Toggle dark mode
darkMode.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode-variables');

  // Store the dark mode state in localStorage
  localStorage.setItem('darkMode', isDarkMode);

  // Toggle active state on the spans
  darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
  darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});

// Toggle the side menu visibility
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

// Pop up Screen 
const container = document.getElementsByClassName("container")[0];
const edit = document.getElementsByClassName("edit")[0];

function popup(){
    container.classList.add("blur");
    edit.classList.remove("hidden");
}
function closepop(){
    container.classList.toggle("blur");
    edit.classList.toggle("hidden");
}
