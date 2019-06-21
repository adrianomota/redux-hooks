export const addCourse = data => ({
  type: "ADD_COURSE",
  payload: data
});

export const removeCourse = id => ({
  type: "DEL_COURSE",
  payload: { id }
});
