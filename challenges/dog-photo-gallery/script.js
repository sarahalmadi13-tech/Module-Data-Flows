const addDogBtn = document.getElementById("add-dog");
const clearBtn = document.getElementById("clear");
const gallery = document.getElementById("gallery");

// Fetch a random dog image
async function getDogImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();

    if (data.status !== "success") {
      throw new Error("API returned an error");
    }

    return data.message; // the image URL
  } catch (error) {
    alert("Could not load dog image");
    console.error(error);
  }
}

// Add a dog image to the gallery
async function addDog() {
  const imgUrl = await getDogImage();
  if (!imgUrl) return;

  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = imgUrl;

  li.appendChild(img);
  gallery.appendChild(li);
}

// Clear all images
function clearGallery() {
  gallery.innerHTML = "";
}

addDogBtn.addEventListener("click", addDog);
clearBtn.addEventListener("click", clearGallery);
