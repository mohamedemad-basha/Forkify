import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/pagnationView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.jonas.io

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    //Get the recipe ID from the URL
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Render Spinner
    recipeView.renderSpinner();

    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // Load Recipe
    await model.loadRecipe(id);

    // Render Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // make spinner
    resultsView.renderSpinner();
    // get search query
    const query = searchView.getQuery();
    if (!query) return;

    // load search results
    await model.loadSearchResults(query);

    // render inetial results
    resultsView.render(model.getSearchResultsPage());

    //render defult btns
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goto) {
  // render new results
  resultsView.render(model.getSearchResultsPage(goto));

  //render new btns
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Updata serving number
  model.updateServing(newServings);

  // Update recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //Add/remove bookmarks
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //update bookmark
  recipeView.update(model.state.recipe);

  //render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    //spinner
    addRecipeView.renderSpinner();

    //upload new recipe
    await model.uploadRecipe(newRecipe);

    //render recipe
    recipeView.render(model.state.recipe);

    bookmarksView.render(model.state.bookmarks);

    //change id on url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // resultsView.update(model.getSearchResultsPage());
    // bookmarksView.update(model.state.bookmarks);

    //render success message
    addRecipeView.renderMessage();
    addRecipeView.closeAndReset();
    // //close addRecipe
  } catch (err) {
    // Error message and close modal
    console.error(err);

    addRecipeView.renderError(err.message);
    addRecipeView.closeAndReset();
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addSearchHandler(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
