//previous coding that I don't want to throw away
/////////////////// sample code from activity
// var formSubmitHandler = function (event) {
//   event.preventDefault();

//   var cocktailResults = cocktailSearch.value.trim();

//   if (cocktailResults) {
//     getUserRepos(cocktailResults);

//     cocktailContainerEl.textContent = '';
//     cocktailSearch.value = '';
//   } else {
//     alert('Please enter a Cocktail name');
//   }
// };

// var getCocktailRecipes = function (cocktailName) {
//   var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName;

//   fetch(apiUrl)
//     .then(function (response) {
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//           console.log(data);
//           displayRepos(data, cocktailName);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert('Unable to connect to Database');
//     });
// };