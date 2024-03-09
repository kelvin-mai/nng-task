import type { FC } from 'react';

import type { Instructor } from '@/mock/course';

type CourseCardInstructorProps = { instructors: Instructor[] };

export const CourseCardInstructor: FC<CourseCardInstructorProps> = ({
  instructors,
}) => {
  // TODO: mockup assumes there's only one instructor
  const [instructor] = instructors;
  return (
    <div className='flex flex-col items-center gap-1.5'>
      <img
        className='h-[70px] w-[80px] rounded-full'
        src={instructor.portrait_image}
      />
      <div>
        <p className='font-body text-center'>Instructor:</p>
        <p className='font-body text-center'>{instructor.first_name}</p>
      </div>
    </div>
  );
};
