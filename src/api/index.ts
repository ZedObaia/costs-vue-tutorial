import axios from 'axios';

// Define types
interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

const BASE_URL = 'https://vue.zeyadobaia.com/api';
// change this to a unique name per team (no spaces or funny characters please :D)
const CLASS_NAME = "myclassname"

// Methods for CRUD operations
export const getStudents = async (): Promise<Student[]> => {
  const response = await axios.get(`${BASE_URL}/${CLASS_NAME}/students/`);
  return response.data;
};

export const addStudent = async (student: Student): Promise<Student> => {
  const response = await axios.post(`${BASE_URL}/${CLASS_NAME}/students/`, student);
  return response.data;
};

export const updateStudent = async (id: number, student: Student): Promise<Student> => {
  const response = await axios.put(`${BASE_URL}/${CLASS_NAME}/students/${id}`, student);
  return response.data;
};

export const deleteStudent = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${CLASS_NAME}/students/${id}`);
};

// Export schema for using the API
export const StudentSchema = {
  id: 0, // This is just a placeholder for the schema, actual values will be filled by the user
  name: '',
  age: 0,
  grade: 0,
};
