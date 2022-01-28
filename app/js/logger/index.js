export const log = (content) =>
  (document.getElementById("content").innerHTML +=
    `<i style="color: black" class="fas fa-terminal"> </i>` +
    " " +
    content +
    `<br>`);

export const logTitle = (title) =>
  (document.getElementById("title").innerHTML += title);
