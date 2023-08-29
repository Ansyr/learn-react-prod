import {Theme} from "@/app/providers/theme-provider/lib/ThemeContext";
import {Story} from "@storybook/react";
import ThemeProvider from "@/app/providers/theme-provider/ui/ThemeProvider";

export const themeDecoratator = (theme: Theme = Theme.LIGHT) => (StoryComponent: Story) => {
    return <ThemeProvider>
        <div className={`${theme}`}>
            <StoryComponent/>
        </div>
    </ThemeProvider>
}