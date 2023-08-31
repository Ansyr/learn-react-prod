import type {Meta, StoryObj} from '@storybook/react';
import AppLink from "./app-link"
import {themeDecoratator} from "@/shared/config/storybook/theme-decoratator";
import {Theme} from "@/app/providers/theme-provider/lib/ThemeContext";

const meta = {
    title: 'shared/app-link',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    args: {
        to: '/'
    }

} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
    args: {
        children: 'test',
        theme: "primary",
    },
};


export const secondary: Story = {
    args: {
        children: 'test',
        theme: "secondary",
    },
};

export const primaryDark: Story = {
    args: {
        children: 'test',
        theme: "primary",
    },
};
primaryDark.decorators = [themeDecoratator(Theme.DARK)]

export const secondaryDark: Story = {
    args: {
        children: 'test',
        theme: "secondary",
    },
};
secondaryDark.decorators = [themeDecoratator(Theme.DARK)]