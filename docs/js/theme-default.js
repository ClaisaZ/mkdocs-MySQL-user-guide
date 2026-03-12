function regEscape(v) {
  console.log("TEST PRINT ITS WORKING");
  return v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normKey(v) {
  return v.trim().toLowerCase();
}

function normPath(p) {
  return p.replace(/index\.html$/, "").replace(/\/+$/, "/");
}

//
//
//

(function () {
  const storekey = "__palette";
  // let siteurl = null;

  let jsonstuff;
  let sroot;

  if (document.currentScript) {
    const scriptUrl = new URL(document.currentScript.src, window.location.href);
    jsonstuff = new URL("./glossary.json", scriptUrl).href;
    sroot = new URL("../../", scriptUrl);
  } else {
    jsonstuff = new URL("/assets/js/glossary.json", window.location.origin)
      .href;
    sroot = new URL("/", window.location.origin);
  }
  // console.log(jsonstuff)

  let gp = null;

  // i believe material mk docs saves the mode prefernece but jsut in case ill put in local storage
  function defaultPalette() {
    try {
      const saved = localStorage.getItem(storekey);

      if (!saved) {
        localStorage.setItem(
          storekey,
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
    } catch (err) {}
  }

  // because i will disable tooltips on index.md
  // i think is too much information? like reading the introduction they shoudlnt be hovering and reading even more imo
  function isIndex() {
    const currentPath = normPath(window.location.pathname);
    const rootPath = normPath(sroot.pathname || "/");
    return currentPath === rootPath;
    // return true
    // return false
  }

  function makeGloss() {
    // console.log("Test")
    // console.log(jsonstuff)

    if (!gp) {
      gp = fetch(jsonstuff)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`cant load glossary: ${response.status}`);
          }
          // console.log(response.json)
          return response.json();
        })
        .then((data) => {
          if (!Array.isArray(data)) {
            throw new Error("glossary not array");
          }
          // console.log(data)
          return data;
        });
    }

    return gp;
  }

  function buildGIndex(e) {
    const mapAlias = new Map();

    e.forEach((entry) => {
      let aliases;

      if (Array.isArray(entry.aliases) && entry.aliases.length) {
        aliases = entry.aliases;
      } else {
        aliases = [entry.term];
      }

      aliases.forEach((alias) => {
        mapAlias.set(normKey(alias), entry);
      });
    });

    const sortAlias = Array.from(mapAlias.keys()).sort(
      (a, b) => b.length - a.length,
    );

    return {
      mapAlias,
      sortAlias,
    };
  }

  function skipnode(node) {
    const parent = node.parentElement;

    if (!parent) {
      return true;
    }

    return Boolean(
      parent.closest(
        "code, pre, a, button, kbd, samp, var, script, style, textarea, .glossary-term, .admonition-title, summary, h1, h2, h3, h4, h5, h6, #glossary-table-root",
      ),
    );
  }

  function enhanceGterm(root, entries) {
    const content = root.querySelector(".md-content__inner") || root;
    const { mapAlias, sortAlias } = buildGIndex(entries);

    const usedTerms = new Set();

    if (!sortAlias.length) {
      return;
    }

    const pattern = new RegExp(
      `\\b(${sortAlias.map(regEscape).join("|")})\\b`,
      "gi",
    );

    const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim() || skipnode(node)) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach((node) => {
      pattern.lastIndex = 0;

      if (!pattern.test(node.nodeValue)) {
        return;
      }

      pattern.lastIndex = 0;

      const fragment = document.createDocumentFragment();

      let lastIndex = 0;

      let match;

      while ((match = pattern.exec(node.nodeValue)) !== null) {
        const matchedText = match[0];
        const entry = mapAlias.get(normKey(matchedText));

        fragment.appendChild(
          document.createTextNode(node.nodeValue.slice(lastIndex, match.index)),
        );

        if (!entry || usedTerms.has(entry.term)) {
          fragment.appendChild(document.createTextNode(matchedText));
        } else {
          const term = document.createElement("span");
          term.className = "glossary-term";
          term.tabIndex = 0;
          term.setAttribute("data-definition", entry.definition);
          term.setAttribute("data-term", entry.term);
          term.textContent = matchedText;
          fragment.appendChild(term);
          usedTerms.add(entry.term);
        }

        lastIndex = match.index + matchedText.length;
      }

      fragment.appendChild(
        document.createTextNode(node.nodeValue.slice(lastIndex)),
      );

      node.parentNode.replaceChild(fragment, node);
    });
  }

  function renderGTablessaryTable(root, entries) {
    const mount = root.querySelector("#glossary-table-root");

    if (!mount) {
      return;
    }

    const entrysortedes = [...entries].sort((a, b) =>
      a.term.localeCompare(b.term),
    );

    const sw = document.createElement("div");
    sw.className = "glossary-search";

    const input = document.createElement("input");
    input.type = "search";
    input.className = "glossary-search-input";
    input.placeholder = "Search glossary";
    input.setAttribute("aria-label", "Search glossary");
    input.autocomplete = "off";

    const count = document.createElement("p");
    count.className = "glossary-search-count";

    sw.appendChild(input);
    sw.appendChild(count);

    const table = document.createElement("table");
    table.className = "glossary-table";

    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>Term</th>
        <th>Definition</th>
      </tr>
    `;

    const tbody = document.createElement("tbody");

    const rows = [];

    entrysortedes.forEach((entry) => {
      const row = document.createElement("tr");

      const aliases = [];

      if (Array.isArray(entry.aliases)) {
        aliases.push(...entry.aliases);
      }

      row.dataset.search = [entry.term, entry.definition, ...aliases]
        .join(" ")
        .toLowerCase();

      const tcell = document.createElement("td");
      tcell.className = "glossary-table-term";
      tcell.textContent = entry.term;

      const dcell = document.createElement("td");
      dcell.className = "glossary-table-definition";
      dcell.textContent = entry.definition;
      // console.log(dcell)
      // console.log(tcell)

      row.appendChild(tcell);
      row.appendChild(dcell);
      tbody.appendChild(row);
      rows.push(row);

      // console.log(entry.term, entry.definition)
    });

    table.appendChild(thead);

    table.appendChild(tbody);

    const empty = document.createElement("p");
    empty.className = "glossary-empty";
    empty.textContent = "no glossary terms match";

    empty.hidden = true;

    function updateF() {
      console.log("running upd");
      const query = input.value.trim().toLowerCase();
      let canSee = 0;

      rows.forEach((row) => {
        const vis = !query || row.dataset.search.includes(query);
        row.hidden = !vis;
        // console.log(query)

        if (vis) {
          canSee += 1;
        }
      });

      if (query) {
        if (canSee === 1) {
          count.textContent = canSee + " result";
        } else {
          count.textContent = canSee + " results";
        }
      } else {
        count.textContent = rows.length + " terms";
      }
      // console.log(count.textContent)

      empty.hidden = canSee !== 0;
    }

    input.addEventListener("input", updateF);

    mount.innerHTML = "";
    mount.appendChild(sw);
    mount.appendChild(table);
    mount.appendChild(empty);

    updateF();
  }

  async function init() {
    // make it use the last used theme
    defaultPalette();

    try {
      const entries = await makeGloss();
      renderGTablessaryTable(document, entries);

      if (!isIndex()) {
        enhanceGterm(document, entries);
      }
    } catch (error) {
      const mount = document.querySelector("#glossary-table-root");

      if (mount) {
        mount.innerHTML = `<p class="glossary-loading">Could not load glossary.</p>`;
      }

      console.error(error);
    }
  }

  // each time mkdocs swaps / loads a doc it runs w/ subscribe
  const runInit = () => {
    window.requestAnimationFrame(() => {
      init();
    });
  };

  if (
    typeof document$ !== "undefined" &&
    typeof document$.subscribe === "function"
  ) {
    document$.subscribe(runInit);
  } else if (document.readyState === "loading") {
    //only if "loading" so not after dom content is loaded
    console.log("yesyes");
    document.addEventListener("DOMContentLoaded", runInit, { once: true });
  } else {
    runInit();
    // console.log(wuwsdwefre)
  }

  // readystate for when the doc is ready for editing

  // if (typeof document$ !== "undefined" && document$.subscribe) {
  //   document$.subscribe(() => {
  //     window.requestAnimationFrame(() => {
  //       init();
  //     });
  //   });
  // } else {
  //   document.addEventListener(
  //     "DOMContentLoaded",
  //     () => {
  //       init();
  //     },
  //     { once: true },
  //   );
  // }
})();
