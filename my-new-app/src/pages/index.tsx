import styles from './index.module.scss';
import { useRouter } from 'next/router';

import { Button, Label, TodoListItem } from '@myorg/components';
import { useEffect, useState } from 'react';

export function Index() {
  const [tasks, setTasks] = useState(Array<any>());
  const router = useRouter();

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:1337/tasks'); // Asegúrate de usar la URL correcta de tu API de Strapi
      setTasks(await response.json());
    } catch (error) {
      console.error('Error fetching tasks:', error);
      //por ahora
      setTasks(taskData);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreateTaskClick = () => {
    router.push('/create-task');
  };
  const handleCreateUserClick = () => {
    router.push('/create-user');
  };
  return (
    <>
      <div className={styles.header}>
        <Label bold size="large">
          To do
        </Label>
        <Button onClick={handleCreateTaskClick} shape="square">
          Create task
        </Button>
        <Button onClick={handleCreateUserClick} shape="square">
          Create user
        </Button>
      </div>
      <div className={styles.molecules}>
        {tasks.map((task) => (
          <TodoListItem
            key={task.id}
            id={task.id.toString()}
            onToggle={() => true}
            text={task.title}
            tags={task.tags}
          />
        ))}
      </div>
    </>
  );
}

const taskData = [
  {
    id: 1,
    title: 'Task 1',
    tags: ['tag1', 'tag2'],
  },
  {
    id: 2,
    title: 'Task 2',
    tags: ['tag3', 'tag4'],
  },
  {
    id: 3,
    title: 'Task 3',
    tags: ['tag5', 'tag6'],
  },
  {
    id: 4,
    title: 'Task 4',
    tags: ['tag7', 'tag8'],
  },
  {
    id: 5,
    title: 'Task 5',
    tags: ['tag9', 'tag10'],
  },
];

export default Index;
