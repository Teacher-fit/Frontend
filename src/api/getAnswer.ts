import type { Answer } from './interface/answer.interface'
import axios from 'axios'

export const getAnswer = async (): Promise<Answer> => {
  const result = await axios.get<Answer>('http://teacher-fit.p-e.kr');
  return result.data;
}