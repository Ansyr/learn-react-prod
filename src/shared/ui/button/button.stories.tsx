import type { Meta, StoryObj } from '@storybook/react';
import Button from "./button";

const meta = {
    title: 'shared/button',
    component: Button,
    parameters: {
        layout: 'centered',
    },

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
    args: {
        children: 'test',
    }
}


export const Clear: Story = {
    args: {
        children: 'test',
        theme: 'clear'
    },
};

export const Outline: Story = {
    args: {
        children: 'test',
        theme: 'outline'
    },
};