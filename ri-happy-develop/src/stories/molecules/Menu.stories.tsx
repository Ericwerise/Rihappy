/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { Menu, MenuProperties } from './Menu';

export default {
  title: 'Molecules/Menu',
  component: Menu,
} as Meta;

const Template: Story<MenuProperties> = (arguments_) => <Menu {...arguments_} />;

export const Default = Template.bind({});
Default.args = {};
