import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

it("displays information about the repository", () => {
  const repository = {
    language: "JavaScript",
    stargazers_count: 100,
    forks: 55,
    open_issues: 175,
  };

  render(<RepositoriesSummary repository={repository} />);
  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(value, "i"));
    expect(element).toBeInTheDocument();
  }
});
