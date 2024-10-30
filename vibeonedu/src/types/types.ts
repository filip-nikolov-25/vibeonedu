export interface Course {
    title: string;
    allLectures: string;
    remainingLectures: string;
    averageLearningTime: string;
    id: number;
  }
  
  export interface User {
    name:string,
    surname :string,
    email:string
  }

  export interface RegistrationUser {
    name: string | undefined;
    surname: string | undefined;
    email: string | undefined;
    password: string | undefined;
    password_confirmation: string | undefined;
  }