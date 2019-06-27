import React from 'react'
import '../index.css'
import slaiderOne from '../slaiderImg/IMG-0007-00068.jpg'
import slaiderTwo from '../slaiderImg/IMG-0010-00033.jpg'
import slaiderThree from '../slaiderImg/IMG-0010-00149.jpg'
import Slaider from 'react-slick'
import "../slick-carousel/slick/slick.css";
import "../slick-carousel/slick/slick-theme.css";

export default class Content extends React.Component {
  render(){

    return(
      <main className="all_content">
        <div className = "textCenter">
        <h2 className="main_name">The most Interesting Cases</h2>
        </div>
        <div className="content_anatomy_part">

          <Slaider className= "slaider"
          dots={true}
          infinite= {true}
          speed= {500}
          fade={true}
          slidesToShow = {1}
          slidesToScroll= {1}>

          <div>
            <a>
              <img src= {slaiderOne} className="slaiderImg" />
            </a>
          </div>
          <div>
            <a>
              <img src= {slaiderTwo} className="slaiderImg" />
            </a>
          </div>
          <div>
            <a>
              <img src= {slaiderThree} className="slaiderImg" />
            </a>
          </div>

          </Slaider>

        </div>
      </main>
    )
  }
}
