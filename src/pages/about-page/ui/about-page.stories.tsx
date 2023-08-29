import type {Meta, StoryObj} from '@storybook/react';
import {themeDecoratator} from "@/shared/config/storybook/style-decorator/theme-decoratator";
import {Theme} from "@/app/providers/theme-provider/lib/ThemeContext";
import AboutPage from "./about-page";

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
    },

} satisfies Meta<typeof AboutPage>;

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

