import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

let currentPage = 1;
const pagesArray = [1, 2, 3, 4];
const paginate = (page) => {
  currentPage = page;
};

afterEach(() => {
  cleanup();
});

test("should be able to change between page by dropdown", () => {
  render(
    <Pagination
      paginate={paginate}
      currentPage={currentPage}
      pagesArray={pagesArray}
    />
  );
  expect(screen.getByText("Current page: 1")).toBeVisible();
  fireEvent.click(screen.getByText("Current page: 1"));
  fireEvent.click(screen.getByText("Current page: 2"));
  expect(screen.getByText("Current page: 2")).toBeVisible();
});

test("should be able to change page up and down by 1", () => {
  render(
    <Pagination
      paginate={paginate}
      currentPage={currentPage}
      pagesArray={pagesArray}
    />
  );

  expect(screen.getByText("Current page: 1")).toBeVisible();
  fireEvent.click(screen.getByText(">"));
  expect(screen.getByText("Current page: 2")).toBeVisible();
  fireEvent.click(screen.getByText("<"));
  expect(screen.getByText("Current page: 1")).toBeVisible();
});

test("should be able to change page up and down by 2", () => {
  render(
    <Pagination
      paginate={paginate}
      currentPage={currentPage}
      pagesArray={pagesArray}
    />
  );

  expect(screen.getByText("Current page: 1")).toBeVisible();
  fireEvent.click(screen.getByText(">>"));
  expect(screen.getByText("Current page: 3")).toBeVisible();
  fireEvent.click(screen.getByText("<<"));
  expect(screen.getByText("Current page: 1")).toBeVisible();
});

test("should not be able to go lower than page 1 or higher than page 4", () => {
  render(
    <Pagination
      paginate={paginate}
      currentPage={currentPage}
      pagesArray={pagesArray}
    />
  );

  expect(screen.getByText("Current page: 1")).toBeVisible();
  fireEvent.click(screen.getByText("<"));
  expect(screen.getByText("Current page: 1")).toBeVisible();
  fireEvent.click(screen.getByText(">>"));
  expect(screen.getByText("Current page: 3")).toBeVisible();
  fireEvent.click(screen.getByText(">"));
  expect(screen.getByText("Current page: 4")).toBeVisible();
  fireEvent.click(screen.getByText(">>"));
  expect(screen.getByText("Current page: 4")).toBeVisible();
  fireEvent.click(screen.getByText(">"));
  expect(screen.getByText("Current page: 4")).toBeVisible();
});

test("matches snapshot", () => {
  const tree = renderer.create(
    <Pagination
      paginate={paginate}
      currentPage={currentPage}
      pagesArray={pagesArray}
    />
  );
  expect(tree).toMatchSnapshot();
});
