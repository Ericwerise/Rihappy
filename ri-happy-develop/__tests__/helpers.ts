import { act } from "@testing-library/react";
import { NextRouter } from "next/router";

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const wait = (ms = 0): Promise<any> => act(() => sleep(ms));

const routerMock: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn().mockResolvedValue(true),
  replace: jest.fn().mockResolvedValue(true),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(null),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
  isReady: false,
};

export default {
  sleep,
  wait,
  routerMock,
};
