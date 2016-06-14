import { connect } from 'react-redux'
import { fetchRecipe } from '../modules/recipe'

import RecipeDetailContainer from '../components/RecipeDetailContainer'

const mapActionCreators: {fetchRecipe: Function} = {
  fetchRecipe
}

const mapStateToProps = (state) => ({
  //zen: state.zen.zens.find(zen => zen.id === state.zen.current),
  //saved: state.zen.zens.filter(zen => state.zen.saved.indexOf(zen.id) !== -1)
  recipe: state.recipe.recipe
})

export default connect(mapStateToProps, mapActionCreators)(RecipeDetailContainer)
