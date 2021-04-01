import { NextApiRequest, NextApiResponse } from "next";
import hello from "src/pages/api/hello";

describe("hello", () => {
  it("should return John Doe", () => {
    const request = {} as NextApiRequest;
    const response = ({
      status: () => response,
      json: jest.fn(),
    } as any) as NextApiResponse;

    hello(request, response);

    expect(response.json).toBeCalledWith({ name: "John Doe" });
  });
});
