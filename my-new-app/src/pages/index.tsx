import styles from './index.module.scss';

import { Button, Label, Checkbox, Flicker, Tag } from '@myorg/components';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <>
      <div className={styles.page}>
        <Button type='primary'>Button</Button>
        <Button type='secondary'>Button</Button>
        <Button type='tertiary'>Button</Button>
        <Button type='outline'>Button</Button>
      </div>
      <div className={styles.labeles}>
        <Label size='small'>Small label</Label>
        <Label size='medium'>Medium label</Label>
        <Label size='large'>Large label</Label>
      </div>
      <div className={styles.checkboxes}>
        <Checkbox size='small'><Label size='large'>Large label</Label></Checkbox>
        <Checkbox size='medium'><Label size='large'>Large label</Label></Checkbox>
        <Checkbox size='large' type='rounded'><Label size='large'>Large label</Label></Checkbox>
      </div>
      <div className={styles.checkboxes}>
        <Flicker>Hover me 2</Flicker>
        <Flicker><Button type='primary'>Button</Button></Flicker>
      </div>
      <div className={styles.checkboxes}>
        <Tag color='red'>Tag muy largooooo</Tag>
        <Tag color='green'>Tag</Tag>
        <Tag color='blue'><Label style={{color: 'white'}} size='large'>Large label</Label></Tag>
      </div>
      <div className='molecules'>

      </div>
    </>
  );
}

export default Index;
