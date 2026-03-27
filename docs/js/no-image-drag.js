document.addEventListener("dragstart", (e) => {
  if (e.target.closest("a")?.querySelector("img") || e.target.closest("img")) {
    e.preventDefault();
  }
});