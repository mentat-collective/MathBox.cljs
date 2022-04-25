import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import "mathbox/mathbox.css";
import "./preview.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    // show docs!
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: { default: "light" },
};
