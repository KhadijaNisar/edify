
import { useState } from "react";

const weeks = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const courseCurriculum = () => {
  const [isOpen, setIsOpen] = useState(1);
  const toggleAccordion = (id) => {
    console.log(isOpen)
    setIsOpen(!isOpen);

    if (isOpen === id) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };
  return (
    <>
      <div className="course_Accordian">
        {weeks.map((item, index) => (
          <div className={`course_Accordian_Item ${isOpen ? "course_Accordian_Open" : ""}`}>
            <div className={`course_Accordian_Header ${isOpen===item.id? "course_Accordian_Header_Open":""}`}>
            <h2 >Week 0{item.id} </h2>
            <button type="button" className="accordian_Button"  onClick={()=>toggleAccordion(item.id)}>
            <i class="fa-solid fa-angle-down"></i>
            </button>
            </div>
            <div className={`course_Accordian_Body ${isOpen===item.id ? "course_Accordian_Body_Open":""}`}>
              <div className="course_Curriculum_Content">
                <div className="course_Curriculum_Infor">
                <i class="fa-regular fa-file"></i>
                <h3><span>Reading: </span>Ut enim ad  minim veniam</h3>
                </div>
                <div className="course_Curriculum_Meta">
                    <span className="time"><i class="fa-regular fa-clock"></i> 14 minutes</span>
                    <span className="question">2 questions</span>
                </div>
              </div>
              <div className="course_Curriculum_Content">
                <div className="course_Curriculum_Infor">
                <i class="fa-solid fa-video"></i>
                <h3><span>Video: </span>Greetings and Intro</h3>
                </div>
                <div className="course_Curriculum_Meta">
                    <span className="time"><i class="fa-regular fa-clock"></i> 14 minutes</span>
                    {/* <span className="question">2 questions</span> */}
                </div>
              </div>
              <div className="course_Curriculum_Content">
                <div className="course_Curriculum_Infor">
                <i class="fa-solid fa-headphones"></i>
                <h3><span>Audio: </span>Interactive Lesson</h3>
                </div>
                <div className="course_Curriculum_Meta">
                    <span className="time"><i class="fa-regular fa-clock"></i> 14 minutes</span>
                    <span className="question">2 questions</span>
                </div>
              </div>
              <div className="course_Curriculum_Content">
                <div className="course_Curriculum_Infor">
                <i class="fa-regular fa-file"></i>
                <h3><span>Reading: </span>Ut enim ad  minim veniam</h3>
                </div>
                <div className="course_Curriculum_Meta">
                    <span className="time"><i class="fa-regular fa-clock"></i> 14 minutes</span>
                    {/* <span className="question">2 questions</span> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default courseCurriculum;
