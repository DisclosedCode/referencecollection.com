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

/* NAVIGATION */
fetch('/website/navigation.html')
    .then(response => response.text())
    .then(html => {
        const navigation = document.getElementById('navigation');

        if (navigation != null)
            navigation.innerHTML = html;

        const dark_mode = document.getElementById('dark_mode'),
            light_mode = document.getElementById('light_mode');

        if (dark_mode != null)
            dark_mode.addEventListener('click', () => {
                localStorage.setItem("app-appearance", "dark");
                document.documentElement.setAttribute("app-appearance", "dark");
                if (dark_theme && light_theme) {
                    dark_theme.removeAttribute('disabled');
                    light_theme.setAttribute('disabled', 'true');
                }
            });

        if (light_mode != null)
            light_mode.addEventListener('click', () => {
                localStorage.setItem("app-appearance", "light");
                document.documentElement.setAttribute("app-appearance", "light");
                if (dark_theme && light_theme) {
                    light_theme.removeAttribute('disabled');
                    dark_theme.setAttribute('disabled', 'true');
                }
            });

        const scroll_top = document.getElementById('scroll_top');

        if (scroll_top != null)
            window.addEventListener('scroll', () => {
                this.scrollY <= 100 ? scroll_top.style.display = 'none' : scroll_top.style.display = 'flex';
            });

        const open_nav = document.getElementById('navigation_open'),
            close_nav = document.getElementById('navigation_close'),
            navigation_menu = document.getElementById('navigation_menu');

        if (open_nav != null)
            open_nav.addEventListener('click', () => {
                navigation_menu.classList.add('show_nav');
            });

        if (close_nav != null)
            close_nav.addEventListener('click', () => {
                navigation_menu.classList.remove('show_nav');
            });
    });

/* FOOTER */
fetch('/website/footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });

/* CONTRIBUTE
fetch('/website/contribute.html')
    .then(response => response.text())
    .then(html => {
        const contribute = document.getElementById('contribute');
        if (contribute !== null)
            contribute.innerHTML = html;
    });
 */

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
