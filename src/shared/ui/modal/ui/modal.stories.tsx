import type {Meta, StoryObj} from '@storybook/react';
import Modal from "./modal";


const meta = {
    title: 'shared/modal',
    component: Modal,

} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const common : Story = {
    args: {
        children: 'testtesttesttesttesttesttesttesttesttesttesttesttesttest',
        isOpen: true
    }
}

