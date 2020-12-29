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
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;

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
