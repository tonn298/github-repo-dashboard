import { render, screen, cleanup } from "@testing-library/react";
import Repositoriestable from "../Repositoriestable";
import "@testing-library/jest-dom/extend-expect";
//this one inlude repo row

afterEach(() => {
  cleanup();
});

test("should show loading", () => {
  render(<Repositoriestable isLoading={true} repositories={[]} />);
  const LoadingElement = screen.getByTestId("loading");
  expect(LoadingElement).toBeVisible();
});

test("should not show loading", () => {
  render(<Repositoriestable isLoading={false} repositories={[]} />);
  const RepoTable = screen.getByTestId("repositories-table");
  expect(RepoTable).toBeVisible();
});

test("repo should have all table header", () => {
  render(<Repositoriestable isLoading={false} repositories={[]} />);
  const Repoheader = screen.getByTestId("table-header");
  expect(Repoheader).toHaveTextContent("Informations");
  expect(Repoheader).toHaveTextContent("Owner");
  expect(Repoheader).toHaveTextContent("Name");
});
test("repo should have all table body and content", () => {
  //lang url mock the real one
  const testRepo = [
    {
      name: "test name",
      description: "test desc",
      owner: {
        avatar_url: "via/placeholder.com/100",
        login: "test-login-name",
      },
      languages_url:
        "https://api.github.com/repos/technoweenie/attachment_fu/languages",
      html_url: "www.dummy.com",
    },
  ];
  render(<Repositoriestable isLoading={false} repositories={testRepo} />);
  const RepoRow = screen.getByTestId("table-row");
  expect(RepoRow).toHaveTextContent("test name");
  expect(RepoRow).toHaveTextContent("test desc");
  expect(RepoRow).toHaveTextContent("test-login-name");
});
