(function () {
  const storageKey = "__palette";

  try {
    const saved = localStorage.getItem(storageKey);

    if (!saved) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({
          color: {
            media: "(prefers-color-scheme)",
            scheme: "slate",
            primary: "custom",
            accent: "custom",
          },
        }),
      );
    }
  } catch (error) {
    // notthin here cause i aint gon do nothtin about it
  }
})();
