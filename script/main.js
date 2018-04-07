'use strict';

fetch('https://raw.githubusercontent.com/Adalab/recipes-data/master/rissoto-setas.json')
  .then(function(recipe){
    return recipe.json();
  })
    .then(function(json){
      var recipe =json.recipe;
      var ingredients=recipe.ingredients;
      var listHTML = '';
      for (var i = 0; i < ingredients.length; i++) {
        listHTML +=  '<div class="ingredients"><input type="radio" id="radioButton"><div class="contador">'+ ingredients[i].items+'</div><div class="detailsingredient"><h3>'+ingredients[i].product +'</h3><h4>'+ ingredients[i].brand+'</h4><h4>'+ingredients[i].quantity+'</h4></div><h3>'+ ingredients[i].price + ' €</h3></div><hr>';
      }
      var container = document.querySelector('.container');
      container.innerHTML = listHTML;
      var menuName = document.querySelector('.plate')
      menuName.innerHTML = recipe.name;
    });
