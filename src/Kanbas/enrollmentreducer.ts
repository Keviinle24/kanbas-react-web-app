import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Enrollment {
  user: string;
  course: string; 
}

interface EnrollmentState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentState = {
  enrollments: [], 
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      const enrollment: Enrollment = { user: userId, course: courseId };

      if (!state.enrollments.some(en => en.user === userId && en.course === courseId)) {
        state.enrollments.push(enrollment); 
      }
      
 
      const updatedEnrollments = JSON.parse(localStorage.getItem(`enrollments-${userId}`) || '[]');
      updatedEnrollments.push(enrollment);
      localStorage.setItem(`enrollments-${userId}`, JSON.stringify(updatedEnrollments));
    },
    unenrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );

   
      const updatedEnrollments = JSON.parse(localStorage.getItem(`enrollments-${userId}`) || '[]');
      const filteredEnrollments = updatedEnrollments.filter(
        (enrollment: Enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
      localStorage.setItem(`enrollments-${userId}`, JSON.stringify(filteredEnrollments));
    },
    setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      state.enrollments = action.payload; 
    },
    loadEnrollments: (state, action: PayloadAction<{ userId: string }>) => {
      const enrollments = JSON.parse(localStorage.getItem(`enrollments-${action.payload.userId}`) || '[]');
      state.enrollments = enrollments;
    }
  },
});

export const { enrollCourse, unenrollCourse, setEnrollments, loadEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
