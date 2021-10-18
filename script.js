
const searchBtn = document.getElementById("search_btn");
const mealCards = document.getElementById("cards");



searchBtn.addEventListener("click", () => {
  console.log("button cliked");
  fetchAPI();
  document.querySelector(".search_result").innerHTML="Search result :  " + document.getElementById("search").value;
 
});

async function fetchAPI() {
  let searchQuery = document.getElementById("search").value;
  console.log(searchQuery + " I searched");
  const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=245bdcf8&app_key=a479ab557867af2e1e119b4774043e96`;
  const response = await fetch(baseURL);
  const data = await response.json();
  getMealList(data);
  console.log(data);
  

}

function getMealList(data) {
  let items = "";
  for(let i = 0; i <20; i++) {
    items = items+ `
    <div class="recipe_cards" id="cards">
        <img src= "${data.hits[i].recipe.image}" alt="img">
        <div class="card_body">
        <h4><b>${data.hits[i].recipe.label}</b></h4>
        <p class="card_text" >Calories: ${data.hits[i].recipe.calories.toFixed(2)}</p>
        <p class="card_text">Diet labels: ${data.hits[i].recipe.dietLabels}</p>
        <a href="${data.hits[i].recipe.url}" class="gotoRecipe" target="_blank">Get Recipe</a>
        </div>

    </div> `;
  }
    document.querySelector(".meal_list").innerHTML=items;
  
  };

  






