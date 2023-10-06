(window.webpackJsonp = window.webpackJsonp || []).push([
    [9, 13], {
        556: function(o, t, e) {
            "use strict";
            e.r(t);
            var r = e(13),
                l = e(10),
                n = e.n(l),
                d = e(14),
                f = e.n(d),
                c = e(22),
                h = e(2),
                m = e(146),
                y = r.componentFactory.create({
                    name: "FooterCopiright",
                    props: {
                        site: n.a.ofType().required,
                        isEnabledEditor: n.a.ofType().default(!1),
                        columnSize: n.a.ofType().default("w-full")
                    },
                    render: function(o) {
                        if (Object(c.r)(this.site, h.ab.Copyright) && this.site.footerCopyright) return o("div", {
                            class: f()("kmb-footer-bottom", this.columnSize)
                        }, [o(m.p, {
                            attrs: {
                                value: this.site.footerCopyright,
                                tag: "span"
                            },
                            class: "footer-copyright kmb-widget-text-caption3"
                        })])
                    }
                });
            t.default = y
        },
        674: function(o, t, e) {
            "use strict";
            e.r(t);
            var r = e(13),
                l = e(10),
                n = e.n(l),
                d = e(14),
                f = e.n(d),
                c = e(260),
                h = e(556),
                m = r.componentFactory.create({
                    name: "FooterLogo",
                    props: {
                        site: n.a.ofType().required,
                        isEnabledEditor: n.a.ofType().default(!1),
                        columnSize: n.a.ofType().default("lg-w-1-3 md-w-1-3 sm-w-1-2"),
                        hasCopyright: n.a.ofType().default(!1),
                        hasSocialNetworks: n.a.ofType().default(!1)
                    },
                    render: function(o) {
                        var t, e;
                        return o("div", {
                            class: f()(this.columnSize, "w-full kmb-widget-col kmb-footer-column kmb-footer-logo-column")
                        }, [o("div", {
                            class: "kmb-footer-logo footer-logo"
                        }, [o(c.a, {
                            attrs: {
                                logo: null === (t = this.site) || void 0 === t ? void 0 : t.headerLogo,
                                title: null === (e = this.site) || void 0 === e ? void 0 : e.title
                            },
                            class: "kmb-footer-logo-link"
                        })]), this.hasCopyright && o(h.default, {
                            attrs: {
                                site: this.site,
                                isEnabledEditor: this.isEnabledEditor
                            },
                            class: "mt-8"
                        })])
                    }
                });
            t.default = m
        }
    }
]);