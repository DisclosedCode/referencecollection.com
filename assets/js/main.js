/* DARK MODE */
const scheme = localStorage.getItem("app-appearance"),
    dark_theme = document.getElementById('darkTheme'),
    light_theme = document.getElementById('lightTheme'),
    darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

if (scheme !== undefined && scheme !== null) {
    document.documentElement.setAttribute("app-appearance", scheme);
    if (dark_theme && light_theme) {
        if (scheme === "dark") {
            dark_theme.removeAttribute('disabled');
            light_theme.setAttribute('disabled', 'true');
        } else {
            light_theme.removeAttribute('disabled');
            dark_theme.setAttribute('disabled', 'true');
        }
    }
} else {
    changeAppearance();
    darkModeMediaQuery.addEventListener('change', event => {
        changeAppearance();
    });
}

function changeAppearance() {
    const mode = darkModeMediaQuery.matches ? "dark" : "light";
    document.documentElement.setAttribute("app-appearance", mode);
    if (mode === "dark" && dark_theme && light_theme) {
        dark_theme.removeAttribute('disabled');
        light_theme.setAttribute('disabled', 'true');
    } else if (dark_theme && light_theme) {
        light_theme.removeAttribute('disabled');
        dark_theme.setAttribute('disabled', 'true');
    }
}

/* DROPDOWN */
function toggleDropdown() {
    const dropdown = document.getElementById("share");
    if (dropdown != null)
        dropdown.classList.toggle("show_dropdown");
}

window.onclick = function (event) {
    if (!event.target.matches('.header_share')) {
        const dropdown = document.getElementById("share");
        if (dropdown != null)
            if (dropdown.classList.contains('show_dropdown'))
                dropdown.classList.remove('show_dropdown');
    }
}
