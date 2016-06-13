import React from 'react'
import classes from './Recipe.scss'
import Step from 'components/Step'
export const Recipe = (props) => (
  <div>

    <div>
      
      <h2 className={classes.recipeContainer}>
          {props.recipe ?props.recipe.name : 'none loaded'}
     </h2>      
      <h3>Steps</h3>
      <ol>
      {props.recipe ? props.recipe.steps.map(function(result) {
          return <Step key={result.id} step={result} />;
      }) : 'no steps'}
      </ol>
        
      <button className='btn btn-default' onClick={props.fetchRecipe}>
          Load Recipe
      </button>
    </div>

    </div>

)

Recipe.propTypes = {
  recipe: React.PropTypes.object,
  fetchRecipe: React.PropTypes.func.isRequired,
}

export default Recipe
