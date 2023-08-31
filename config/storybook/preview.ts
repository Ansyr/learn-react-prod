import type {Preview} from "@storybook/react";
import {StyleDecorator} from "@/shared/config/storybook/style-decorator";
import {themeDecoratator} from "@/shared/config/storybook/theme-decoratator";
import {Theme} from "@/app/providers/theme-provider/lib/ThemeContext";
import {RouteDecorator} from "@/shared/config/storybook/route-decorator";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators:[StyleDecorator,themeDecoratator(Theme.LIGHT),RouteDecorator]
};

export default preview;

