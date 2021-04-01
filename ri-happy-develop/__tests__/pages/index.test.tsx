import { render } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import React from "react";
import Home from "src/pages";

import helpers from "../helpers";

describe("Index", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(
      <RouterContext.Provider value={helpers.routerMock}>
        <Home />
      </RouterContext.Provider>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
