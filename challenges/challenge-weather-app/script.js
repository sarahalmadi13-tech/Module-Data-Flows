// =======================
// API KEYS
// =======================
const OPENWEATHER_KEY = "YOUR_KEY_HERE";
const UNSPLASH_KEY = "YOUR_KEY_HERE";

// =======================
// FETCH WEATHER
// =======================
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${OPENWEATHER_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  // Show error if city not found
  if (data.cod !== 200) {
    document.getElementById("conditions").textContent = "City not found";
    return null;
  }

  return data.weather[0].description; // "clear sky"
}

// =======================
// FETCH IMAGES FROM UNSPLASH
// =======================
async function getImages(query) {
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

// =======================
// DISPLAY IMAGES
// =======================
function displayImages(images) {
  const main = document.getElementById("photo");
  const thumbs = document.getElementById("thumbs");

  // Clear previous content
  main.innerHTML = "";
  thumbs.innerHTML = "";

  if (!images || images.length === 0) {
    main.innerHTML = "<p>No images found</p>";
    return;
  }

  // MAIN IMAGE
  main.innerHTML = `<img src="${images[0].urls.regular}" />`;

  // PHOTOGRAPHER CREDITS
  document.getElementById("credit-user").textContent = images[0].user.name;
  document.getElementById("credit-user").href = images[0].user.links.html;

  // THUMBNAILS
  images.forEach((img) => {
    const thumb = document.createElement("img");
    thumb.src = img.urls.thumb;
    thumb.classList.add("thumb");

    // Set first thumbnail as active
    if (index === 0) {
      thumb.classList.add("active");
    }
    // When clicking a thumbnail → update main image
    thumb.addEventListener("click", () => {
      main.innerHTML = `<img src="${img.urls.regular}" />`;
      // Update credits
      document.getElementById("credit-user").textContent = img.user.name;
      document.getElementById("credit-user").href = img.user.links.html;

      // Remove active class from all thumbs
      document
        .querySelectorAll(".thumb")
        .forEach((t) => t.classList.remove("active"));

      // Add active class to clicked thumb
      thumb.classList.add("active");
    });

    thumbs.appendChild(thumb);
  });
}

// =======================
// SEARCH FORM HANDLING
// =======================
const form = document.getElementById("search");
const input = document.getElementById("search-tf");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // stop page reload

  const city = input.value.trim();
  if (!city) return;

  const description = await getWeather(city);
  if (!description) return;

  // Show weather description
  document.getElementById("conditions").textContent = description;

  // Fetch and display images
  const images = await getImages(description);
  displayImages(images);
});

// =======================
// DEFAULT LOAD (London)
// =======================
async function runDefault() {
  const description = await getWeather("london");
  document.getElementById("conditions").textContent = description;

  const images = await getImages(description);
  displayImages(images);
}

runDefault();
