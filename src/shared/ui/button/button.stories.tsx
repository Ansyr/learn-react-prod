import type {Meta, StoryObj} from '@storybook/react';
import Button from "./button";
import {themeDecoratator} from "@/shared/config/storybook/theme-decoratator";
import {Theme} from "@/app/providers/theme-provider/lib/ThemeContext";

const meta = {
    title: 'shared/button',
    component: Button,

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
    args: {
        children: 'test',
    }
}

export const PrimaryDark : Story = {
    args: {
        children: 'test',
    }
}
PrimaryDark.decorators = [themeDecoratator(Theme.DARK)]

export const Clear: Story = {
    args: {
        children: 'test',
        theme: 'clear'
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'test',
        theme: 'clearInverted'
    },
};



export const Outline: Story = {
    args: {
        children: 'test',
        theme: 'outline'
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'test',
        theme: 'outline'
    },
};
OutlineDark.decorators = [themeDecoratator(Theme.DARK)]

export const OutlineSizeL: Story = {
    args: {
        children: 'test',
        theme: 'outline',
        size: 'L',
    },
};

export const OutlineSizeXL: Story = {
    args: {
        children: 'test',
        theme: 'outline',
        size: 'XL',
    },
};



export const Background: Story = {
    args: {
        children: 'test',
        theme: 'background',
    }
}


export const BackgroundDark: Story = {
    args: {
        children: 'test',
        theme: 'background',
    }
}
BackgroundDark.decorators = [themeDecoratator(Theme.DARK)]



export const squareSizeM : Story =  {
    args: {
        children: ">",
        square: true,
        theme: 'invertedBackground',
        size: "M"
    }
}

export const squareSizeL : Story =  {
    args: {
        children: ">",
        square: true,
        theme: 'invertedBackground',
        size: "L"
    }
}

export const squareSizeXL : Story =  {
    args: {
        children: ">",
        square: true,
        theme: 'invertedBackground',
        size: "XL"
    }
}