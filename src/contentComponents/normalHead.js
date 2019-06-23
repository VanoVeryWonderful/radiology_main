import React from 'react'
import headImg from '../NormalAnatomyImg/IMG-0003-00074.jpg'
import '../index.css'
class NormalHead extends React.Component{
  render(){
    return(
      <main className="all_content">

      <h2 className="name_anatomy_part">Normal Head</h2>
      <a className="button_back" >&larr;Back
      </a>
       <div className="main_container">
        <div className = "content_anatomy_part">
          <div className="card_">
             <img src = {headImg} className="card_item slaiderImg"/>
          </div>
         </div>
       </div>
      </main>
    )
  }
}

 export default NormalHead
