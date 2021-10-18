import React from "react";

const Course = (props) => {
  return (
    <div className="card mt-3 w-100">
      <div className="card-body">
        <h5 className="card-title">{props.course.title}</h5>
        <h6 className="card-subtitle">{props.course.author}</h6>
        <p className="card-text">{props.course.description}</p>
        <a href={props.course.url} className="card-link">Go to course</a>
      </div>
    </div>
    // <div key={props.course.id}>
    // </div>
  );
};

export default Course;
