const search = document.getElementById('search');
const submit = document.getElementById('submit');
const mealEl = document.getElementById('meals');
const resultHeading = document.getElementsByClassName('result-heading');
const single_mealEl = document.getElementById('single-meal');


// search meal
function searchMeal(e){
    e.preventDefault();

    single_mealEl.innerHTML = "";

   const term = search.value;
   if(term.trim()){
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
       .then(res => res.json())
       .then(data => {
            resultHeading.innerHTML = `<h2>Search Result for ${term}</h2>`;
            if(data.meals === null){
                resultHeading.innerHTML = `<h2>There are no food ${term}</h2>`;
            }
            else{
               mealEl.innerHTML = data.meals
               .map(
                  (meal) => `
                  <div class ="meal">
                    <img src="${meal.strMealThumb}">
                    <div class="meal-info" dataMealID="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                        <button onclick ="displayFoodDetails('${meal.idMeal}')">Details</button>
                    </div>
                  </div>
                  ` 
               ) 
               .join("");
            }
       });
   }else{
       alert('please insert a value');
   }

}


submit.addEventListener('submit', searchMeal);

const displayFoodDetails = meal =>{
    
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
    fetch(url)
    .then(res => res.json())
    .then(data =>foodInfo(data[0].idMeal));
}
const foodInfo = mealFood =>{
    console.log(mealFood);
    const foodDetails = document.getElementById('food-details');
}