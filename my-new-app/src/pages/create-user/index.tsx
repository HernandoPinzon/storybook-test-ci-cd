// pages/create-user.tsx
import { Button, Label, Input, FileUploader } from '@myorg/components'
import styles from './create-user.module.scss'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CreateUser: React.FC = () => {
  const router = useRouter()
  const [userIcon, setUserIcon] = useState<File | null>(null)

  const handleCreateUserClick = () => {
    router.back()
  }

  const handleIconUpload = (file: File) => {
    setUserIcon(file)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append(
      'name',
      (document.getElementById('userName') as HTMLInputElement).value
    )
    formData.append(
       'email',
      (document.getElementById('userEmail') as HTMLInputElement).value
    )
    if (userIcon) formData.append('icon', userIcon)

    console.log('Form Data Submitted:', formData)
  }

  return (
    <div className={styles.pageCreateUser}>
      <div className={styles.header}>
        <Button onClick={handleCreateUserClick} shape="square">
          Back
        </Button>
        <Label bold size="large">
          Create User
        </Label>
      </div>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName" className={styles.label}>
            Name:
          </label>
          <Input id="userName" />
        </div>
        <div>
          <label htmlFor="userEmail" className={styles.label}>
            Email:
          </label>
          <Input id="userEmail" type="email" />
        </div>
        <div>
          <label className={styles.label}>Icon:</label>
          <FileUploader onFileUpload={handleIconUpload} />
        </div>
        <button type="submit" className={styles.button}>
          Create User
        </button>
      </form>
    </div>
  )
}

export default CreateUser
