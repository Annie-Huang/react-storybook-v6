import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    variantColor: { control: 'text' },
    children: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

// export const Success = () => <Button variantColor='green'>Button</Button>;
export const Success = Template.bind({});
Success.args = {
  variantColor: 'green',
  children: 'Success',
};

// export const Danger = () => <Button variantColor='red'>Danger</Button>;
export const Danger = Template.bind({});
Danger.args = {
  variantColor: 'red',
  children: 'Danger',
};
