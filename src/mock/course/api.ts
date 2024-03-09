import { Course } from './types';
import { courses } from './data';

let courseIds: number[] = [];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getCourseSchedules = async (): Promise<Course[]> => {
  // GET: /api/courses/<course-id>/schedule
  await sleep(500);
  return courses;
};

export const saveCourse = async (id: number): Promise<number[]> => {
  // POST: /api/profile/saved/courses/<course-id>
  await sleep(500);
  courseIds = [...courseIds, id];
  return [...new Set(courseIds)];
};

export const unsaveCourse = async (id: number): Promise<number[]> => {
  // DELET: /api/profile/saved/courses/<course-id>
  await sleep(500);
  courseIds = courseIds.filter((c) => c !== id);
  return [...new Set(courseIds)];
};

// not in mockup, but necessary for page to work
export const getSavedCourses = async (): Promise<number[]> => {
  await sleep(500);
  return courseIds;
};
