import type {Meta, StoryObj} from '@storybook/react';
import {themeDecoratator} from "@/shared/config/storybook/theme-decoratator";
import {Theme} from "@/app/providers/theme-provider/lib/ThemeContext";
import NotFoundPage from "./not-found-page";


const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {

    },

} satisfies Meta<typeof NotFoundPage>;

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

