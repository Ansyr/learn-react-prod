import type {Meta, StoryObj} from '@storybook/react';

import {themeDecoratator} from "@/shared/config/storybook/style-decorator/theme-decoratator";
import {Theme} from "@/app/providers/theme-provider/lib/ThemeContext";
import PageError from "./page-error"


const meta = {
    title: 'widget/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },

} satisfies Meta<typeof PageError>;

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