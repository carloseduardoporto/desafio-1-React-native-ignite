import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== ''){
      setTasks([...tasks, {
        id: new Date().getTime(),
        done: false,
        title: newTaskTitle
      }])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const newTasks = tasks.map((mappedTask: Task) => mappedTask.id === id ? { id: mappedTask.id, done: !mappedTask.done, title: mappedTask.title } : mappedTask );

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}