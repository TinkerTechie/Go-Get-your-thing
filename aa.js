document.addEventListener("DOMContentLoaded", function () {
    const allLinks = document.querySelectorAll(".link-list a");
  
    allLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const url = this.getAttribute("href");
        window.open(url, "_blank");
      });
    });
  });
  