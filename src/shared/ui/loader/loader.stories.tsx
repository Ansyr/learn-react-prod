import type {Meta, StoryObj} from '@storybook/react';
import {Loader} from "./loader"
import {themeDecoratator} from "@/shared/config/storybook/theme-decoratator";
import {Theme} from "@/app/providers/theme-provider/lib/ThemeContext";

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },

} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal : Story = {
    args: {

    }
}

export const Dark : Story = {
    args: {

    }
}
Dark.decorators = [themeDecoratator(Theme.DARK)]

