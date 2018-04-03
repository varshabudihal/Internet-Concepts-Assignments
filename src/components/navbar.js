import React,{Component} from 'react';

class Navbar extends Component{
  render(){
    return (

      <div className="navdiv">
      <div className="title">
      <h3> Follow Me!</h3>
      <h4> For more insights on travelling and food, follow me on: </h4>
<ul>
            <li>
            <a href="https://www.instagram.com/varshabudihal/">Instagram</a>
            </li>
            </ul>

            <h5> Some of my Favorite Website..go check out!</h5>

     <ul>
     <li>
              <a href="https://www.self.com/story/life-changing-things-that-happen-when-you-travel-alone">For Travellers!</a>
              </li>
              <li>
                <a href="https://onmogul.com/stories/35-things-you-should-always-remember-when-it-comes-to-life-and-happiness"> For things you should always remember!</a>
                </li>
              <li>
            <a href="https://www.youtube.com/channel/UCWxl-7-WhdQ6rL_OS1mFKKQ"> For Foodies!</a>
            </li>
            </ul>
        </div>
        </div>
    );
  }
}
export default Navbar;