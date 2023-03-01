function injectScript(file_path, tag) {
  var node = document.getElementsByTagName(tag)[0]
  var script = document.createElement("script")
  script.setAttribute("type", "text/javascript")
  script.setAttribute("src", file_path)
  node.appendChild(script)
}
// eslint-disable-next-line no-undef
injectScript(chrome.runtime.getURL("content.js"), "body")
