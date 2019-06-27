import React from 'react'
import '../index.css'
import {NavLink} from 'react-router-dom'
import headImg from '../NormalAnatomyImg/IMG-0003-00074.jpg'
import temporalImg from '../NormalAnatomyImg/IMG-0001-00083.jpg'
import chestImg from '../NormalAnatomyImg/IMG-0002-00086.jpg'
import abdomenImg from '../NormalAnatomyImg/IMG-0002-00115.jpg'
import pelvisImg from '../NormalAnatomyImg/IMG-0003-00170.jpg'
import faceImg from '../NormalAnatomyImg/IMG-0001-00082.jpg'
import AnatomyPart from '../contentComponents/anatomyPart'

export default class NormalAnatomy extends React.Component {
  constructor(){
    super()
    this.state = {
        anatomyPart:{
        head: "Head",
        face: "Face",
        temporal: "Temporal Bones",
        neck: "Neck",
        chest: "Chest",
        abdomen: "Abdomen",
        pelvis: "Pelvis",
      },

      headImg: headImg,
      temporalImg: temporalImg,
      chestImg: chestImg,
      abdomenImg: abdomenImg,
      faceImg: faceImg,
      pelvisImg: pelvisImg,
    }
  }
  goBack = () => {
    this.props.history.push({
      pathname: "/",
    })
  }
  render(){
    console.log(this.props)
      return(
      <main className="all_content">
        <h2 className = "main_name">CT Normal Anatomy</h2>
        <a className="button_back" onClick = {this.goBack}>&larr;Back
        </a>
        <div className = "main_container">
          <div className="content_anatomy_part">
            <NavLink to = {{
              pathname:"/normalhead"
            }} exact><AnatomyPart partname = {this.state.anatomyPart.head} img = {this.state.headImg} /></NavLink>
            <NavLink to = {{
              pathname:"/normalhead"
            }} exact><AnatomyPart partname = {this.state.anatomyPart.face} img = {this.state.faceImg} /></NavLink>
            <NavLink to = {{
              pathname:"/normalhead"
            }} exact><AnatomyPart partname = {this.state.anatomyPart.temporal} img = {this.state.temporalImg} /></NavLink>
            <NavLink to = {{
              pathname:"/normalhead"
            }} exact><AnatomyPart partname = {this.state.anatomyPart.neck} img = {this.state.headImg} /></NavLink>
            <NavLink to = {{
              pathname:"/normalhead"
            }} exact><AnatomyPart partname = {this.state.anatomyPart.chest} img = {this.state.chestImg} /></NavLink>
            <NavLink to = {{
              pathname:"/normalhead"
            }} exact><AnatomyPart partname = {this.state.anatomyPart.abdomen} img = {this.state.abdomenImg} /></NavLink>
            <NavLink to = {{
              pathname:"/normalhead"
            }} exact><AnatomyPart partname = {this.state.anatomyPart.pelvis} img = {this.state.pelvisImg} /></NavLink>
           </div>
         </div>

       </main>
    )
  }
}
