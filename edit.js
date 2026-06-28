(() => {
  const repoEditBase = "https://github.com/bruceyang2012/bruceyang2012.github.io/edit/master/";

  function currentFilePath() {
    let path = window.location.pathname.replace(/^\/+/, "");

    if (!path) {
      return "index.html";
    }

    if (path.endsWith("/")) {
      return `${path}index.html`;
    }

    if (!path.includes(".")) {
      return `${path}.html`;
    }

    return path;
  }

  const editLink = document.createElement("a");
  editLink.className = "online-edit-link";
  editLink.href = `${repoEditBase}${currentFilePath()}`;
  editLink.target = "_blank";
  editLink.rel = "noreferrer";
  editLink.textContent = "编辑此页";
  editLink.setAttribute("aria-label", "在 GitHub 在线编辑当前页面");

  document.body.appendChild(editLink);
})();
