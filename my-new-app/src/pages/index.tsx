import styles from './index.module.scss';

import { Button, Label, Checkbox } from '@myorg/components';

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
        <Checkbox ><Label size='large'>Large label</Label></Checkbox>
      </div>
      <div className='molecules'>

      </div>
    </>
  );
}

export default Index;
