let not = document.querySelectorAll(".unread");
let unreadIcon = document.querySelectorAll(".unread .unread-icon");
let markAllAsRead = document.querySelector("button");
console.log(markAllAsRead);

not.forEach((read) => {
  markAllAsRead.addEventListener("click", () => {
    read.classList.toggle("unread");
    read.querySelector(".unread-icon").classList.toggle('read-icon')
  });

});
