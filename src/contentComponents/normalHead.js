import React from 'react'
import '../index.css'

const images_brain = ["IMG-0003-00126.jpg", "IMG-0003-00125.jpg", "IMG-0003-00124.jpg", "IMG-0003-00123.jpg", "IMG-0003-00122.jpg", "IMG-0003-00121.jpg", "IMG-0003-00120.jpg", "IMG-0003-00119.jpg", "IMG-0003-00118.jpg", "IMG-0003-00117.jpg", "IMG-0003-00116.jpg", "IMG-0003-00115.jpg", "IMG-0003-00114.jpg", "IMG-0003-00113.jpg", "IMG-0003-00112.jpg", "IMG-0003-00111.jpg", "IMG-0003-00110.jpg", "IMG-0003-00109.jpg", "IMG-0003-00108.jpg", "IMG-0003-00107.jpg", "IMG-0003-00106.jpg", "IMG-0003-00105.jpg", "IMG-0003-00104.jpg", "IMG-0003-00103.jpg", "IMG-0003-00102.jpg", "IMG-0003-00101.jpg", "IMG-0003-00100.jpg", "IMG-0003-00099.jpg", "IMG-0003-00098.jpg", "IMG-0003-00097.jpg", "IMG-0003-00096.jpg", "IMG-0003-00095.jpg", "IMG-0003-00094.jpg", "IMG-0003-00093.jpg", "IMG-0003-00092.jpg", "IMG-0003-00091.jpg", "IMG-0003-00090.jpg", "IMG-0003-00089.jpg", "IMG-0003-00088.jpg", "IMG-0003-00087.jpg", "IMG-0003-00086.jpg", "IMG-0003-00085.jpg", "IMG-0003-00084.jpg", "IMG-0003-00083.jpg", "IMG-0003-00082.jpg", "IMG-0003-00081.jpg", "IMG-0003-00080.jpg", "IMG-0003-00079.jpg", "IMG-0003-00078.jpg", "IMG-0003-00077.jpg", "IMG-0003-00076.jpg", "IMG-0003-00075.jpg", "IMG-0003-00074.jpg", "IMG-0003-00073.jpg", "IMG-0003-00072.jpg", "IMG-0003-00071.jpg", "IMG-0003-00070.jpg", "IMG-0003-00069.jpg", "IMG-0003-00068.jpg", "IMG-0003-00067.jpg", "IMG-0003-00066.jpg", "IMG-0003-00065.jpg", "IMG-0003-00064.jpg", "IMG-0003-00063.jpg", "IMG-0003-00062.jpg", "IMG-0003-00061.jpg", "IMG-0003-00060.jpg", "IMG-0003-00059.jpg", "IMG-0003-00058.jpg", "IMG-0003-00057.jpg", "IMG-0003-00056.jpg", "IMG-0003-00055.jpg", "IMG-0003-00054.jpg", "IMG-0003-00053.jpg", "IMG-0003-00052.jpg", "IMG-0003-00051.jpg", "IMG-0003-00050.jpg", "IMG-0003-00049.jpg", "IMG-0003-00048.jpg", "IMG-0003-00047.jpg", "IMG-0003-00046.jpg", "IMG-0003-00045.jpg", "IMG-0003-00044.jpg", "IMG-0003-00043.jpg", "IMG-0003-00042.jpg", "IMG-0003-00041.jpg", "IMG-0003-00040.jpg", "IMG-0003-00039.jpg", "IMG-0003-00038.jpg", "IMG-0003-00037.jpg", "IMG-0003-00036.jpg", "IMG-0003-00035.jpg", "IMG-0003-00034.jpg", "IMG-0003-00033.jpg", "IMG-0003-00032.jpg", "IMG-0003-00031.jpg", "IMG-0003-00030.jpg", "IMG-0003-00029.jpg", "IMG-0003-00028.jpg", "IMG-0003-00027.jpg", "IMG-0003-00026.jpg", "IMG-0003-00025.jpg", "IMG-0003-00024.jpg", "IMG-0003-00023.jpg", "IMG-0003-00022.jpg", "IMG-0003-00021.jpg", "IMG-0003-00020.jpg", "IMG-0003-00019.jpg", "IMG-0003-00018.jpg", "IMG-0003-00017.jpg", "IMG-0003-00016.jpg", "IMG-0003-00015.jpg", "IMG-0003-00014.jpg", "IMG-0003-00013.jpg", "IMG-0003-00012.jpg", "IMG-0003-00011.jpg", "IMG-0003-00010.jpg", "IMG-0003-00009.jpg", "IMG-0003-00008.jpg", "IMG-0003-00007.jpg", "IMG-0003-00006.jpg", "IMG-0003-00005.jpg", "IMG-0003-00004.jpg", "IMG-0003-00003.jpg", "IMG-0003-00002.jpg", "IMG-0003-00001.jpg" ];

class NormalHead extends React.Component{
    constructor (){
        super()
        this.state = {
            currentImg_brain: 0,
        };
        this.handleOnwheel = this.handleOnwheel.bind(this)
    }
    handleOnwheel = (event) => {
        if( event.deltaY > 0 || this.state.currentImg_brain === 0){
            this.state.currentImg_brain +=1;
            if(this.state.currentImg_brain === images_brain.length){
                this.state.currentImg_brain = 0;
            }
        }
        else if (event.deltaY < 0){
            this.state.currentImg_brain -=1;
            if(this.state.currentImg_brain===0){
                this.state.currentImg_brain = images_brain.length - 1;
            }
        }
        this.setState(prevState =>{
            return ({
                currentImg_brain: prevState.currentImg_brain,
            })
        });
    };
  render(){
    return(
      <main className="all_content">
          <h2 className="name_anatomy_part">Normal Head</h2>
          <a className="button_back" >&larr;Back</a>
          <div className="main_container">
              <div className = "content_anatomy_part">
                  <div className="anatomy_part" onWheel={this.handleOnwheel}>
                      <img src = {process.env.PUBLIC_URL + '/NormalImages/brain/' + images_brain[this.state.currentImg_brain]}/>
                  </div>
              </div>
          </div>
      </main>
    )
  }
}

 export default NormalHead
