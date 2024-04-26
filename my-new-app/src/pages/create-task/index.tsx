import { Button, Label, Input, TextArea } from '@myorg/components';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CreateTask() {
  const router = useRouter();

  const handleCreateTaskClick = () => {
    router.back();
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: Array<string>(),
  });

  const [taskText, setTaskText] = useState('');

  const handleTaskTitleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, title: value }));
  };
  const handleTaskDescriptionChange = (value: string) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };
  const handleTaskTagsAdd = () => {
    if (taskText) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, taskText],
      }));
      setTaskText('');
    }
  };
  const handleTaskTagsChange = (value: string) => {
    setTaskText(value);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      tags: [],
    });
    setTaskText('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formData);
    resetForm();
  };

  return (
    <div className={styles.pageCreateTask}>
      <div className={styles.header}>
        <Button onClick={handleCreateTaskClick} shape="square">
          Back to list
        </Button>
        <Label bold size="large">
          To do
        </Label>
      </div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div>
          <label htmlFor="taskTitle" className={styles.label}>
            Title:
          </label>
          <Input value={formData.title} onChangeValue={handleTaskTitleChange} id="taskTitle"></Input>
        </div>
        <div>
          <label htmlFor="taskDescription" className={styles.label}>
            Description:
          </label>
          <TextArea
            value={formData.description}
            onChangeValue={handleTaskDescriptionChange}
            id="taskDescription"
          ></TextArea>
        </div>
        <div>
          <label htmlFor="taskTags" className={styles.label}>
            Tags:
          </label>
          <Input value={taskText} onChangeValue={handleTaskTagsChange} id="taskTags"></Input>
          <button
            onClick={handleTaskTagsAdd}
            type="button"
            className={styles.button}
          >
            Add
          </button>
        </div>
        <div>
          {formData.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}{' '}
              <button type="button" className={styles.tagRemoveButton}>
                &times;
              </button>
            </span>
          ))}
        </div>
        <button type="submit" className={styles.button}>
          Create Task
        </button>
      </form>
    </div>
  );
}
