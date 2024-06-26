export interface Task {
  id: number,
  title: string,
  description: string
  completed: boolean
}

export const TASKS: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
    completed: false
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description 2',
    completed: false
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description 3',
    completed: false
  }
]
