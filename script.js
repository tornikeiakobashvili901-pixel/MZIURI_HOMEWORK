const BASE_URL = "https://crudcrud.com/api/f5fa89aaafa9463ebb80e0f4fd420dd5/games";

const form = document.getElementById("add-form");
const ul = document.getElementById("game-list");

let editId = null;


const addNewGame = async (game) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(game),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const newGame = await response.json();

    if (newGame) {
      createGameItem(newGame);
    }
  } catch (error) {
    console.log(error);
  }
};


const createGameItem = (game) => {
  const li = document.createElement("li");

  li.innerHTML = `

    <div class="game-item" id="${game._id}">
      <p class="ps">სახელი: ${game.name}</p>
      <p class="ps">ჟანრი: ${game.ganre}</p>
      <p class="ps">გამოშვების თარიღი: ${game.releaseDate}</p>
      <p class="ps">ხანგრძლივობა: ${game.Duration}</p>
      <button class="edit-item">Edit</button>
      <button class="delete-item">Delete</button>
    </div>

  `;


  li.querySelector(".delete-item").addEventListener("click", async () => {
    await fetch(`${BASE_URL}/${game._id}`, {
      method: "DELETE",
    });
    li.remove();
  });


  li.querySelector(".edit-item").addEventListener("click", () => {
    form.name.value = game.name;
    form.ganre.value = game.ganre;
    form.releaseDate.value = game.releaseDate;
    form.Duration.value = game.Duration;

    editId = game._id;
  });

  ul.appendChild(li);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const game = {
    name: formData.get("name"),
    ganre: formData.get("ganre"),
    releaseDate: formData.get("releaseDate"),
    Duration: formData.get("Duration"),
  };

  if (editId) {

    await fetch(`${BASE_URL}/${editId}`, {
      method: "PUT",
      body: JSON.stringify(game),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    editId = null;
    ul.innerHTML = "";
    fetchAllGames();
  } else {

    addNewGame(game);
  }

  form.reset();
});


const fetchAllGames = async () => {
  const response = await fetch(BASE_URL);
  const allGames = await response.json();

  for (let game of allGames) {
    createGameItem(game);
  }
};

fetchAllGames();