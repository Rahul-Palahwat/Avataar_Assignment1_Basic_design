import React from "react";

export default function Dropdowns() {
  return (
    <>
      <div className="firstDrop">
        <div className="career">
          Select Career
          <div className="font1">
            <i className="fa-solid fa-sort-down" id="click"></i>
            <form className="drop-down" id="myDropdown">
                            <input className="fullstack" type="radio" name="fullstack" id="fullstack"/>
                            <label className="full" htmlFor="fullstack">Fullstack Developer</label>
                            <input id="soft" type="checkbox" name="Software development lifecycle"
                                 value="Software development lifecycle"/>
                            <h5 className="dev">Software development lifecycle</h5>
                            <input id="pro" type="checkbox" name="Programming" value="Programming"/>
                            <h5 className="gram">Programming</h5>
                            <input id="mob" type="checkbox" name="Mobile app development"
                                value="Mobile app development"/>
                            <h5 className="app">Mobile app development</h5>
                            <input id="gitt" type="checkbox" name="Github version control"
                                value="Github version control"/>
                            <h5 className="hub">Github version control</h5>
                            <input id="back" type="checkbox" name="Backend" value="Backend"/>
                            <h5 className="end">Backend</h5>
                            <input className="UX" type="radio" name="UX" id="UX"/>
                            <label className="Designer" htmlFor="UX">UX Designer</label>
                            <input id="wire" type="checkbox" name="Wireframing" value="Wireframing"/>
                            <h5 className="framing">Wireframing</h5>
                            <input id="fig" type="checkbox" name="Figma" value="Figma"/>
                            <h5 className="ma">Figma</h5>
                            <input id="user" type="checkbox" name="User research" value="User research"/>
                            <h5 className="research">User research</h5>
                            <input id="problem" type="checkbox" name="Problem Solving" value="Problem Solving"/>
                            <h5 className="solve">Problem Solving</h5>
                            <div className="line2">
                            </div>
                            <div>
                                <h4 className="resett">Clear</h4>
                                <div className="btn" id="btn">
                                    <input id="btn2" type="submit" value="Apply"/>
                                </div>
                            </div>
                        </form>
                    
                
          </div>
        </div>
      </div>

      <div className="secondDrop">
        <div className="career">
          College Year
          <div className="font1">
            <i className="fa-solid fa-sort-down"></i>
          </div>
        </div>
      </div>
      <div className="thirdDrop">
        <div className="career">
          Location
          <div className="font1">
            <i className="fa-solid fa-sort-down"></i>
          </div>
        </div>
      </div>
    </>
  );
}
