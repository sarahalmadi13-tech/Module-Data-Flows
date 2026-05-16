async function getComic() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data); // log the JSON

    // Render the comic
    const container = document.getElementById("comic-container");
    container.innerHTML = `
      <h2>${data.title}</h2>
      <img src="${data.img}" alt="${data.alt}">
      <p>${data.alt}</p>
    `;
  } catch (error) {
    console.error("Error fetching comic:", error);

    document.getElementById("comic-container").innerHTML =
      "<p>Oops! Something went wrong loading the comic.</p>";
  }
}

getComic();
