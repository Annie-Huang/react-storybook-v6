import React from 'react';
import { Button } from '@chakra-ui/react';
import { text, boolean } from '@storybook/addon-knobs';

// Should use controls over knobs.
export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: {
    variantColor: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
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

// Should use controls over knobs.
export const Log = () => (
  <Button onClick={() => console.log('Button clicked')}>Danger</Button>
);

export const Knobs = () => (
  <Button vaiantColor='purple' disabled={boolean('Disabled', false)}>
    {text('Label', 'Button Label')}
  </Button>
);
