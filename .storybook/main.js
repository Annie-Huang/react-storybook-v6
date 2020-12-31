// You don't really have to add addon-docs, it's default added by the new version of Storybook.

/* Essential has the following addon, so you don't need to add it
https://storybook.js.org/docs/react/essentials/introduction
Docs
Controls
Actions
Viewport
Backgrounds
Toolbars & globals
 */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs',
  ],
};
