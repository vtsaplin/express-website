if (window.location.hostname === ('localhost')) {

  const url = "http://localhost:4000/static/js/bundle.js";
  const script = document.createElement("script");
  script.setAttribute("src", url);
  script.setAttribute("type", "text/javascript");
  script.setAttribute("async", "true");
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);

} else if (window.location.hostname.endsWith('hlx.page')) {

  const baseUrl = "https://salmon-pebble-015589f10-dev.centralus.3.azurestaticapps.net";

  const link = document.createElement("link");
  link.setAttribute("href", `${baseUrl}/static/css/main.css`);
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  document.head.appendChild(link);

  const script = document.createElement("script");
  script.setAttribute("src", `${baseUrl}/static/js/main.js`);
  script.setAttribute("type", "text/javascript");
  script.setAttribute("async", "true");
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}
