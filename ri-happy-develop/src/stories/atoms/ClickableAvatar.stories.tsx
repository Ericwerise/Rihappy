/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { ClickableAvatar, ClickableAvatarProperties } from './ClickableAvatar';

export default {
  title: 'Atoms/ClickableAvatar',
  component: ClickableAvatar,
} as Meta;

const Template: Story<ClickableAvatarProperties> = (arguments_) => (
  <ClickableAvatar {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  isSelected: true,
  imageUrl:
    'https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
};
