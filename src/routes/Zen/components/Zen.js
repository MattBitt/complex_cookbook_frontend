import React from 'react'
import classes from './Zen.scss'

export const Zen = (props) => (
  <div>
    <div>
      <h2 className={classes.zenContainer}>
          {props.zen ? props.zen.value : ''}
      </h2>
      <button className='btn btn-default' onClick={props.fetchZen}>
          Fetch a wisdom
      </button>
      {' '}
      <button className='btn btn-default' onClick={props.saveCurrentZen}>
        Save
      </button>
    </div>
    {props.saved.length
      ? <div className={classes.savedWisdoms}>
        <h3>
            Saved Wisdoms
        </h3>
        <ul>
          {props.saved.map(zen =>
            <li key={zen.id}>
                {zen.value}
            </li>
          )}
        </ul>
      </div>
        : null
    }
  </div>
)

Zen.propTypes = {
  zen: React.PropTypes.object,
  saved: React.PropTypes.array.isRequired,
  fetchZen: React.PropTypes.func.isRequired,
  saveCurrentZen: React.PropTypes.func.isRequired
}

export default Zen
