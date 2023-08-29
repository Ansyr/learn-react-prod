import type {Meta, StoryObj} from '@storybook/react';
import Navbar from "./navbar";
import {themeDecoratator} from "@/shared/config/storybook/style-decorator/theme-decoratator";
import {Theme} from "@/app/providers/theme-provider/lib/ThemeContext";


const meta = {
    title: 'widget/navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },

} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {

    },
};
Dark.decorators = [themeDecoratator(Theme.DARK)]
export const Light: Story = {
    args: {

    },
};
Light.decorators = [themeDecoratator(Theme.LIGHT)]