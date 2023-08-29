import type {StorybookConfig} from "@storybook/react-webpack5";
import path from "path";
import {buildCssLoaders} from "../build/loader/build-css-loaders";

const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        '@storybook/addon-essentials',

    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },

    docs: {
        autodocs: "tag",
    },


    webpackFinal: async (config) => {
        const paths = {
            build: "",
            html: "",
            entry: "",
            src: path.resolve(__dirname, "..", "..", "src"),
            locales: "",
            buildLocales: "",
        };
        config!.module!.rules!.push(buildCssLoaders(true));

        /*eslint-disable @typescript-eslint/no-explicit-any*/
        config!.module!.rules = config!.module!.rules!.map((rule: any) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });

        config!.module!.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });



        return {
            ...config!,
            resolve: {
                ...config!.resolve,
                alias: {
                    ...config!.resolve?.alias,
                    "@": paths.src,
                },
            },

        };
    },
};

export default config;
