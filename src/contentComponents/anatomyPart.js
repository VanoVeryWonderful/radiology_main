import React from 'react'
import {withRouter} from 'react-router-dom'

function AnatomyPart(props){

  console.log(props)
  return (
    <div className="card_">

        <h2 className="name_anatomy_part">{props.partname}</h2>
        <img src={props.img} alt="" className="card_item slaiderImg"/>



    <hr/>
    </div>
  )
}
export default withRouter(AnatomyPart)
