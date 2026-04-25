const filters = [...document.querySelectorAll(".filter")];
const repos = [...document.querySelectorAll(".repo-row")];

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    repos.forEach((repo) => {
      repo.classList.toggle("is-hidden", filter !== "all" && repo.dataset.language !== filter);
    });
  });
});
