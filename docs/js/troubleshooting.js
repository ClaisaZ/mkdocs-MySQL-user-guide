(async function () {
  let shootingShootingShooting = null;

  let troubleshootingUrl;
  if (document.currentScript) {
    troubleshootingUrl = new URL(
      "./troubleshooting.json",
      document.currentScript.src,
    ).href;
  } else {
    troubleshootingUrl = new URL(
      "/js/troubleshooting.json",
      window.location.origin,
    ).href;
  }

  //get data
  async function loaddata() {
    // console.log("runing");

    if (!shootingShootingShooting) {
      // console.log("running");

      shootingShootingShooting = (async () => {
        const response = await fetch(troubleshootingUrl);
        // console.log("hit")
        if (!response.ok) {
          throw new Error(`bad`);
        }

        const data = await response.json();
        // console.log(data)

        if (!Array.isArray(data)) {
          throw new Error("weerwekjd");
        }

        return data;
      })();
    }

    return await shootingShootingShooting;
  }

  function escape(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function norm(text) {
    return String(text)
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/['’`]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function mquery(item, query) {
    if (!query) {
      return true;
    }

    let keywords = [];
    if (Array.isArray(item.keywords)) {
      keywords = item.keywords;
    }

    const searchText = norm(
      [item.category, item.issue, item.cause, item.solution, ...keywords].join(
        " ",
      ),
    );

    const queryWords = norm(query).split(" ").filter(Boolean);

    for (let i = 0; i < queryWords.length; i++) {
      const word = queryWords[i];

      if (searchText.indexOf(word) === -1) {
        return false;
      }
    }

    return true;
  }

  function grorupByCat(items) {
    const groups = new Map();
    items.forEach((item) => {
      const category = item.category || "Other";
      if (!groups.has(category)) {
        groups.set(category, []);
      }
      groups.get(category).push(item);
    });
    return groups;
  }

  function render(root, cNode, items, query) {
    const filtered = [];
    for (const item of items) {
      if (mquery(item, query)) {
        filtered.push(item);
      }
    }

    const grouped = grorupByCat(filtered);

    if (filtered.length === 0) {
      root.innerHTML = `
        <p class="troubleshooting-empty">
          No troubleshooting topics match your search.
        </p>
      `;
      cNode.textContent = "0 topics";
      return;
    }

    let html = "";
    grouped.forEach((groupedStuff, category) => {
      html += `
        <section class="troubleshooting-group">
          <h3 class="troubleshooting-group-heading">${escape(category)}</h3>
      `;

      groupedStuff.forEach((item) => {
        html += `
          <article class="troubleshooting-item">
            <h4 class="troubleshooting-item-heading">${escape(item.issue)}</h4>
            <p><strong>Possible cause:</strong> ${escape(item.cause)}</p>
            <p><strong>Solution:</strong> ${escape(item.solution)}</p>
          </article>
        `;
      });

      html += `</section>`;
    });

    root.innerHTML = html;

    let countLabel = `${filtered.length} topics`;
    if (filtered.length === 1) {
      countLabel = "1 topic";
    }
    cNode.textContent = countLabel;
  }

  //start torublehsooting
  async function startTb(rn) {
    const root =
      rn.querySelector("#troubleshooting-list-root") ||
      document.getElementById("troubleshooting-list-root");
    const input =
      rn.querySelector("#troubleshooting-search") ||
      document.getElementById("troubleshooting-search");
    const cNode =
      rn.querySelector("#troubleshooting-search-count") ||
      document.getElementById("troubleshooting-search-count");

    if (!root) return;
    if (!input) return;
    if (!cNode) return;

    try {
      const items = await loaddata();
      // console.log("hewneferg")
      // console.log(items)

      render(root, cNode, items, norm(input.value));

      if (input.dataset.troubleshootingBound === "true") return;

      input.dataset.troubleshootingBound = "true";
      input.addEventListener("input", () => {
        render(root, cNode, items, norm(input.value));
      });
    } catch (error) {
      root.innerHTML = `
        <p class="troubleshooting-empty">
          Could not load troubleshooting topics.
        </p>
      `;
      cNode.textContent = "Error loading topics";
      // console.error(error);
    }
  }

  const start = () => {
    window.requestAnimationFrame(() => {
      startTb(document);
    });
  };

  if (
    typeof document$ !== "undefined" &&
    typeof document$.subscribe === "function"
  ) {
    document$.subscribe(start);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
