let checkbox = document.querySelector("input[name=mode]");
checkbox.addEventListener("change", function () {
  let theme_mode_icon = document.getElementById("theme_mode_icon");
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    theme_mode_icon.innerHTML = feather.icons["moon"].toSvg({
      fill: "var(--fg-color-dark)",
    });
  } else {
    document.documentElement.removeAttribute("data-theme");
    theme_mode_icon.innerHTML = feather.icons["sun"].toSvg({
      fill: "var(--fg-color-dark)",
    });
  }
});

