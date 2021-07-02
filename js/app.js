const listItems = document.querySelectorAll(".list .list-item");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("logout")) {
      window.alert("Logout")
    } else {
      listItems.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    }
  });
});
