import React from 'react'

export const Step = (props) => (
  <div>
  {console.log(props)}
  <li>{props.step.name}</li>
    </div>
    

)

// Recipe.propTypes = {
  // order: React.PropTypes.object,
  // fetchRecipe: React.PropTypes.func.isRequired,
// }

export default Step
