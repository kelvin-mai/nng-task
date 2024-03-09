import { useEffect, useState } from 'react';

import { Course } from '@/mock/course';
import { CourseCard } from './components/course-card';
import { Button, BookmarkOutlined, BookmarkFilled } from './components/common';
import {
  getCourseSchedules,
  getSavedCourses,
  saveCourse,
} from './mock/course/api';

export const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [_savedCourses, setSavedCourses] = useState<number[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const init = async () => {
    const courses = await getCourseSchedules();
    const courseIds = await getSavedCourses();
    setCourses(courses);
    setSavedCourses(courseIds);
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  const toggleId = (id: number) => {
    if (selectedCourses.includes(id)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== id));
    } else {
      setSelectedCourses([...selectedCourses, id]);
    }
  };
  const handleSave = async (ids: number[]) => {
    setLoading(true);
    const requests = ids.map((id) => saveCourse(id));
    const responses = await Promise.all(requests);
    console.log(responses); // TODO: do something productive instead of console.log
    setLoading(false);
  };
  return (
    <div className='container grid gap-8 py-6'>
      <h2 className='text-title-lg font-semibold'>Course Dates</h2>
      {courses.map((c) => (
        <CourseCard
          key={c.id}
          {...c}
          selected={selectedCourses.includes(c.id)}
          onSelect={(id) => toggleId(id)}
        />
      ))}
      <div className='space-y-4'>
        <Button
          className='w-full'
          variant='filled'
          disabled={loading}
          onClick={() => handleSave(selectedCourses)}
        >
          Enroll in Course
        </Button>
        <Button className='w-full' variant='link' disabled={loading}>
          <BookmarkOutlined className='mr-2 fill-accent-50' />
          Save Course
        </Button>
      </div>
    </div>
  );
};
