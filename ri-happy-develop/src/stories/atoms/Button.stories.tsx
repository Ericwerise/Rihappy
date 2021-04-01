/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { Button, ButtonProperties } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProperties> = (properties) => <Button {...properties} />;

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Large Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'base',
  children: 'Medium Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Small Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'sm',
  children: 'Disabled Button',
  disabled: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'FullWidth Button',
  className: 'w-full',
};

export const MediumIcon = Template.bind({});
MediumIcon.args = {
  size: 'base',
  children: 'Medium Icon',
  // icon: <FaCheck />,
};
