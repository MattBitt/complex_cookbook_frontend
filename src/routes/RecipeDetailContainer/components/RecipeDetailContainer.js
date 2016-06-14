import React from 'react'
import classes from './RecipeDetailContainer.scss'
import Step from 'components/Step'
import RecipeDetailHeader from 'components/RecipeDetailHeader'
import { fetchRecipe } from '../modules/recipe'
class RecipeDetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { recipe : {} };
    }
    
    componentDidMount() {
        console.log({fetchRecipe});
        this.setState({ fetchRecipe });
    }    
    render() {
        
        return (
        <div>
            <h1>asdf</h1>
          <RecipeDetailHeader name={"HI"} />
          <button>Click me</button>
        </div>
        );
    }
}


// RecipeDetailContainer.propTypes = {
  // recipe: React.PropTypes.object,
  // fetchRecipe: React.PropTypes.func.isRequired,
// }

export default RecipeDetailContainer
