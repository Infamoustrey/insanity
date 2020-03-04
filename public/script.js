fetch("test.txt").then(response =>
  response.text().then(body => (document.getElementById("t1").outerHTML = body))
);
