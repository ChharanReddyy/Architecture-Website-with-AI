(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        556: function(t, e, o) {
            "use strict";
            o.r(e);
            var r = o(13),
                n = o(10),
                c = o.n(n),
                f = o(14),
                d = o.n(f),
                l = o(22),
                h = o(2),
                w = o(146),
                y = r.componentFactory.create({
                    name: "FooterCopiright",
                    props: {
                        site: c.a.ofType().required,
                        isEnabledEditor: c.a.ofType().default(!1),
                        columnSize: c.a.ofType().default("w-full")
                    },
                    render: function(t) {
                        if (Object(l.r)(this.site, h.ab.Copyright) && this.site.footerCopyright) return t("div", {
                            class: d()("kmb-footer-bottom", this.columnSize)
                        }, [t(w.p, {
                            attrs: {
                                value: this.site.footerCopyright,
                                tag: "span"
                            },
                            class: "footer-copyright kmb-widget-text-caption3"
                        })])
                    }
                });
            e.default = y
        }
    }
]);