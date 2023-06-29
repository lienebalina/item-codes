import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders without errors", () => {
  render(<App />);

  expect(screen.getByRole("property")).toHaveTextContent(/0000/);
  expect(screen.getByRole("heading")).toHaveTextContent(/Izvēlies produktu:/);
  expect(screen.getByRole("button", { name: "T-krekls Rīga" })).toBeEnabled();
  expect(
    screen.getByRole("button", { name: "T-krekls ar saules attēlu" })
  ).toBeEnabled();
  expect(
    screen.getByRole("button", { name: "Zābaki 'Great stuff'" })
  ).toBeEnabled();
  expect(
    screen.getByRole("button", { name: "Čības ar puķītēm" })
  ).toBeEnabled();
  expect(
    screen.getByRole("button", { name: "Melna lodīšu pildspalva" })
  ).toBeEnabled();
});

test("should be able to show variants when item is clicked on", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "T-krekls ar saules attēlu",
  });

  expect(button).not.toBeDisabled();

  userEvent.click(button);

  const variants = screen.getAllByRole("button");

  expect(variants).toHaveLength(8);
  expect(variants[5]).toHaveTextContent(/Small/);
  expect(variants[6]).toHaveTextContent(/Medium/);
  expect(variants[7]).toHaveTextContent(/Large/);
});

test("should be able to show correct item code when selection is made", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "T-krekls Rīga" });

  userEvent.click(button);

  const variants = screen.getAllByRole("button");

  expect(variants).toHaveLength(11);

  const white = variants[7];
  const medium = variants[9];

  userEvent.click(white);
  userEvent.click(medium);

  expect(white).toHaveTextContent(/White/);
  expect(medium).toHaveTextContent(/Medium/);

  const property = screen.getByRole("property");

  expect(property).toHaveTextContent(/0001.WHI.M/);
});
