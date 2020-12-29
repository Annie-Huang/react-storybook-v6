import React from 'react';
import Button from './Button';
import Center from '../Center/Center';

// You can make second level folder like:   title: 'form/control/Button',
export default {
  title: 'form/Button',
  component: Button,
  args: {
    children: 'Button',
  },
};

export const Primary = () => (
  <Center>
    <Button variant='primary'>Primary</Button>
  </Center>
);
export const Secondary = () => (
  <Center>
    <Button variant='secondary'>Secondary</Button>
  </Center>
);
export const Success = () => (
  <Center>
    <Button variant='success'>Success</Button>
  </Center>
);
export const Danger = () => (
  <Center>
    <Button variant='danger'>Danger</Button>
  </Center>
);

// components with a lot more jsx, defining the args object is much better than duplicating the jsx.
// you can also reuse the args for another story.
const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args',
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA,
  // children: 'Long Primary Args',
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: 'secondary',
  children: 'Secondary Args',
};
