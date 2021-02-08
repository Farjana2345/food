const searchFood = () =>{
    const errorTag = document.getElementById('error');
    errorTag.innerText="";
    const foodDiv = document.getElementById('Food-details');
    foodDiv.innerHTML="";
    const searchFood = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
    .catch(error =>displayError('Something went wrong,Please Try Again'));

}

const displayFood = meals =>{
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = "";
    meals.forEach(meal => {
        const foodDiv = document.createElement('div');
        foodDiv.className ='food-img';
        foodDiv.innerHTML= `
        <img onclick="displayFoodDEtails(${meal.idMeal})" src="${meal.strMealThumb}">
        <h5 style="color:salmon">${meal.strMeal}</h5>
        `;
        foodContainer.appendChild(foodDiv);
    });
}

 const displayFoodDEtails = idMeal =>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data =>foodDetails(data.meals[0]));

 }

 
const foodDetails = meal=>{
    const foodDiv = document.getElementById('Food-details');
    foodDiv.style.display="block";
    foodDiv.innerHTML = `
    <img src="${meal.strMealThumb}"> 
    <h2>${meal.strMeal}</h2> 
    <p>${meal.strIngredient2}</p> 
    <p>${meal.strIngredient3}</p> 
    <p>${meal.strIngredient4}</p> 
    <p>${meal.strIngredient5}</p> 
    <p>${meal.strIngredient6}</p> 
    <p>${meal.strIngredient7}</p> 
    <p>${meal.strIngredient8}</p> 
    <p>${meal.strIngredient9}</p> 
    <p>${meal.strIngredient10}</p> 
     
    `
    
}
const displayError = error=>{
    const errorTag = document.getElementById('error');
    errorTag.innerText =error;
}