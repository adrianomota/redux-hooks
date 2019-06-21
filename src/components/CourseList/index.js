import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";

import * as CourseActions from "../../store/actions/courseActions";

function Course() {
  const limitCourseViewer = 3;

  const courses = useSelector(state => state.data.slice(0, limitCourseViewer), [
    limitCourseViewer
  ]);

  const dispatch = useDispatch();

  function handleAddCourse() {
    dispatch(CourseActions.addCourse({ id: Math.random(), name: "GraphQL" }));
  }

  function handleRemoveCourse(id) {
    dispatch(CourseActions.removeCourse(id));
  }

  return (
    <>
      <Container>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              {course.name}
              <button
                type="button"
                onClick={() => handleRemoveCourse(course.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>

        <button type="button" onClick={handleAddCourse}>
          Adicionar
        </button>
      </Container>
    </>
  );
}

export default Course;
