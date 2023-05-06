import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    render(<Async />);
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
