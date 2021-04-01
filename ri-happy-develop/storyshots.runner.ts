/* eslint-disable @typescript-eslint/explicit-function-return-type */
import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
import path from "path";

const getScreenshotOptions = () => {
  return {
    encoding: "base64", // encoding: 'base64' is a property required by puppeteer
    fullPage: false, // Do not take the full page screenshot. Default is 'true' in Storyshots.,
  };
};

const getMatchOptions = (): any => {
  return {
    failureThreshold: 0.2,
    failureThresholdType: "percent",
  };
};

initStoryshots({
  suite: "Image storyshots",
  test: imageSnapshot({
    storybookUrl: `file://${path.resolve(__dirname, "storybook-static")}`,
    getScreenshotOptions,
    getMatchOptions,
  }),
});
