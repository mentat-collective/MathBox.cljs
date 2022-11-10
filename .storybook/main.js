module.exports = {
  stories: ["../output/js/stories/*_stories.js"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
};
