import type {Meta, StoryObj} from '@storybook/react';
import ThemeSwitcher from "./theme-switcher";

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },

} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal : Story = {
    args: {

    }
}


