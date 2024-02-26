(astraToggleSetupPro = function (e, t, a) {
  var n,
    l,
    o,
    s = !1;
  if (
    0 <
      (n =
        "off-canvas" === e || "full-width" === e
          ? ((l = document.querySelectorAll(
              "#ast-mobile-popup, #ast-mobile-header"
            )),
            (o = t.classList.contains("ast-header-break-point")
              ? document.querySelectorAll(
                  "#ast-mobile-header .main-header-menu-toggle"
                )
              : document.querySelectorAll(
                  "#ast-desktop-header .main-header-menu-toggle"
                )).length)
          : t.classList.contains("ast-header-break-point")
          ? ((l = document.querySelectorAll("#ast-mobile-header")),
            (s = !(
              0 <
              (n = (o = document.querySelectorAll(
                "#ast-mobile-header .main-header-menu-toggle"
              )).length)
            ))
              ? 1
              : n)
          : ((l = document.querySelectorAll("#ast-desktop-header")),
            (o = document.querySelectorAll(
              "#ast-desktop-header .main-header-menu-toggle"
            )).length)) ||
    s
  )
    for (var r = 0; r < n; r++)
      if (
        (s ||
          (o[r].setAttribute("data-index", r), a[r]) ||
          ((a[r] = o[r]),
          o[r].addEventListener("click", astraNavMenuToggle, !1)),
        void 0 !== l[r])
      )
        for (var d, i = 0; i < l.length; i++)
          if (
            0 <
            (d = document
              .querySelector("header.site-header")
              .classList.contains("ast-builder-menu-toggle-link")
              ? l[i].querySelectorAll(
                  "ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"
                )
              : l[i].querySelectorAll("ul.main-header-menu .ast-menu-toggle"))
              .length
          )
            for (var c = 0; c < d.length; c++)
              d[c].addEventListener("click", AstraToggleSubMenu, !1);
}),
  (astraNavMenuTogglePro = function (e, t, a, n) {
    e.preventDefault();
    var l = e.target.closest("#ast-desktop-header"),
      o = document.querySelector(
        "#masthead > #ast-desktop-header .ast-desktop-header-content"
      ),
      s =
        ((l =
          null != l && "" !== l
            ? l.querySelector(".main-header-menu-toggle")
            : document.querySelector(
                "#masthead > #ast-desktop-header .main-header-menu-toggle"
              )),
        document.querySelector(
          "#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation"
        ));
    if ("desktop" === e.currentTarget.trigger_type)
      null !== s &&
        "" !== s &&
        void 0 !== s &&
        (astraToggleClass(s, "toggle-on"),
        s.classList.contains("toggle-on")
          ? (s.style.display = "block")
          : (s.style.display = "")),
        astraToggleClass(l, "toggled"),
        l.classList.contains("toggled")
          ? (t.classList.add("ast-main-header-nav-open"),
            "dropdown" === a && (o.style.display = "block"))
          : (t.classList.remove("ast-main-header-nav-open"),
            (o.style.display = "none"));
    else {
      (e = document.querySelectorAll(
        "#masthead > #ast-mobile-header .main-header-bar-navigation"
      )),
        (s =
          ((menu_toggle_all = document.querySelectorAll(
            "#masthead > #ast-mobile-header .main-header-menu-toggle"
          )),
          "0")),
        (l = !1);
      if (
        (null !== n.closest("#ast-fixed-header") &&
          ((e = document.querySelectorAll(
            "#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"
          )),
          (menu_toggle_all = document.querySelectorAll(
            "#ast-fixed-header .main-header-menu-toggle"
          )),
          (s = "0"),
          (l = !0)),
        void 0 === e[s])
      )
        return !1;
      for (
        var r = e[s].querySelectorAll(".menu-item-has-children"), d = 0;
        d < r.length;
        d++
      ) {
        r[d].classList.remove("ast-submenu-expanded");
        for (
          var i = r[d].querySelectorAll(".sub-menu"), c = 0;
          c < i.length;
          c++
        )
          i[c].style.display = "none";
      }
      -1 !==
        (n.getAttribute("class") || "").indexOf("main-header-menu-toggle") &&
        (astraToggleClass(e[s], "toggle-on"),
        astraToggleClass(menu_toggle_all[s], "toggled"),
        l &&
          1 < menu_toggle_all.length &&
          astraToggleClass(menu_toggle_all[1], "toggled"),
        e[s].classList.contains("toggle-on")
          ? ((e[s].style.display = "block"),
            t.classList.add("ast-main-header-nav-open"))
          : ((e[s].style.display = ""),
            t.classList.remove("ast-main-header-nav-open")));
    }
  });
const accountMenuToggle = function () {
  const n =
      astraAddon.hf_account_action_type &&
      "menu" === astraAddon.hf_account_action_type,
    l =
      n &&
      astraAddon.hf_account_show_menu_on &&
      "click" === astraAddon.hf_account_show_menu_on;
  var e = document.querySelectorAll(".ast-header-account-wrap");
  e &&
    e.forEach((t) => {
      const a = t.querySelector(".ast-account-nav-menu");
      document.addEventListener("pointerup", function (e) {
        (l ||
          (n &&
            document
              .querySelector("body")
              .classList.contains("ast-header-break-point"))) &&
          !t.contains(e.target) &&
          ((a.style.right = ""), (a.style.left = ""));
      });
      var e = t.querySelector(".ast-header-account-link");
      e &&
        e.addEventListener("click", function (e) {
          (l ||
            (n &&
              document
                .querySelector("body")
                .classList.contains("ast-header-break-point"))) &&
            (headerSelectionPosition = e.target.closest(
              ".site-header-section"
            )) &&
            (headerSelectionPosition.classList.contains(
              "site-header-section-left"
            )
              ? ((a.style.left = "" === a.style.left ? "-100%" : ""),
                (a.style.right = "" === a.style.right ? "auto" : ""))
              : ((a.style.right = "" === a.style.right ? "-100%" : ""),
                (a.style.left = "" === a.style.left ? "auto" : "")));
        });
    });
};
document.addEventListener("astPartialContentRendered", function () {
  accountMenuToggle();
}),
  window.addEventListener("load", function () {
    accountMenuToggle();
  }),
  document.addEventListener("astLayoutWidthChanged", function () {
    accountMenuToggle();
  });
!(function () {
  var e;
  function o(e) {
    var t = (t = document.body.className).replace(e, "");
    document.body.className = t;
  }
  function d(e) {
    (e.style.display = "block"),
      setTimeout(function () {
        e.style.opacity = 1;
      }, 1);
  }
  function n(e) {
    (e.style.opacity = ""),
      setTimeout(function () {
        e.style.display = "";
      }, 200);
  }
  (r = "iPhone" == navigator.userAgent.match(/iPhone/i) ? "iphone" : ""),
    (e = "iPod" == navigator.userAgent.match(/iPod/i) ? "ipod" : ""),
    (document.body.className += " " + r),
    (document.body.className += " " + e);
  for (
    var t = document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),
      a = 0;
    t.length > a;
    a++
  )
    t[a].onclick = function (e) {
      var t, a, o, n;
      if (
        (e.preventDefault(),
        (e = e || window.event),
        this.classList.contains("header-cover"))
      )
        for (
          var s = document.querySelectorAll(".ast-search-box.header-cover"),
            c = astraAddon.is_header_builder_active || !1,
            r = 0;
          r < s.length;
          r++
        )
          for (
            var l = s[r].parentNode.querySelectorAll("a.astra-search-icon"),
              i = 0;
            i < l.length;
            i++
          )
            l[i] == this &&
              (d(s[r]),
              s[r].querySelector("input.search-field").focus(),
              c
                ? ((t = s[r]),
                  (n = o = a = void 0),
                  document.body.classList.contains("ast-header-break-point") &&
                    ((n = document.querySelector(".main-navigation")),
                    (a = document.querySelector(".main-header-bar")),
                    (o = document.querySelector(".ast-mobile-header-wrap")),
                    null !== a) &&
                    null !== n &&
                    ((n = n.offsetHeight),
                    (a = a.offsetHeight),
                    (o = o.offsetHeight),
                    (n =
                      n &&
                      !document.body.classList.contains(
                        "ast-no-toggle-menu-enable"
                      )
                        ? parseFloat(n) - parseFloat(a)
                        : parseFloat(a)),
                    t.parentNode.classList.contains("ast-mobile-header-wrap") &&
                      (n = parseFloat(o)),
                    (t.style.maxHeight = Math.abs(n) + "px")))
                : ((a = s[r]),
                  (t = o = void 0),
                  document.body.classList.contains("ast-header-break-point") &&
                    ((t = document.querySelector(".main-navigation")),
                    null !==
                      (o = document.querySelector(".main-header-bar"))) &&
                    null !== t &&
                    ((t = t.offsetHeight),
                    (o = o.offsetHeight),
                    (t =
                      t &&
                      !document.body.classList.contains(
                        "ast-no-toggle-menu-enable"
                      )
                        ? parseFloat(t) - parseFloat(o)
                        : parseFloat(o)),
                    (a.style.maxHeight = Math.abs(t) + "px"))));
      else
        this.classList.contains("full-screen") &&
          (e = document.getElementById(
            "ast-seach-full-screen-form"
          )).classList.contains("full-screen") &&
          (d(e),
          (document.body.className += " full-screen"),
          e.querySelector("input.search-field").focus());
    };
  for (
    var s = document.querySelectorAll(".ast-search-box .close"),
      a = 0,
      c = s.length;
    a < c;
    ++a
  )
    s[a].onclick = function (e) {
      e = e || window.event;
      for (var t = this; ; ) {
        if (t.parentNode.classList.contains("ast-search-box")) {
          n(t.parentNode), o("full-screen");
          break;
        }
        if (t.parentNode.classList.contains("site-header")) break;
        t = t.parentNode;
      }
    };
  (document.onkeydown = function (e) {
    if (27 == e.keyCode)
      for (
        var e = document.getElementById("ast-seach-full-screen-form"),
          t =
            (null != e && (n(e), o("full-screen")),
            document.querySelectorAll(".ast-search-box.header-cover")),
          a = 0;
        a < t.length;
        a++
      )
        n(t[a]);
  }),
    window.addEventListener("resize", function () {
      if (
        "BODY" === document.activeElement.tagName &&
        "INPUT" != document.activeElement.tagName
      ) {
        var e = document.querySelectorAll(".ast-search-box.header-cover");
        if (!document.body.classList.contains("ast-header-break-point"))
          for (var t = 0; t < e.length; t++)
            (e[t].style.maxHeight = ""),
              (e[t].style.opacity = ""),
              (e[t].style.display = "");
      }
    });
  var r = document.getElementById("close");
  r &&
    r.addEventListener("keydown", function (e) {
      "Enter" === e.key
        ? (e.preventDefault(), this.click())
        : "Tab" === e.key && e.preventDefault();
    });
})();
