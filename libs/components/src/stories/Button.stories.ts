// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import { Button } from '../atoms';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    type: 'primary',
    children: 'Este es mi primaria',
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
    children: 'Este es mi Secundario',
  },
};