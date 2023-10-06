(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        567: function(e, t, n) {
            "use strict";
            var r = n(13),
                o = n(10),
                c = n.n(o),
                l = n(14),
                d = n.n(l),
                f = n(19),
                h = n(22),
                m = n(573),
                y = r.componentFactory.mixin(f.E).create({
                    name: "WebSitePageTemplate",
                    props: {
                        page: c.a.ofType().required
                    },
                    head: function() {
                        var e = Object(h.C)(this.page);
                        return {
                            title: e.title,
                            meta: e.meta
                        }
                    },
                    render: function(e) {
                        if (this.page) return e("div", {
                            class: d()(Object(h.i)(this.page)),
                            attrs: {
                                "data-page-template-type": this.page.pageTemplateType
                            }
                        }, [Object(h.D)(e, m.b, this.page, this.currentSite)]);
                        console.warn("Page is unavailable!")
                    }
                });
            t.a = y
        },
        647: function(e, t, n) {
            "use strict";
            n.r(t);
            n(27), n(28), n(23), n(30), n(31);
            var r = n(7),
                o = n(16),
                c = n(0),
                l = (n(34), n(545)),
                d = n(5),
                f = n(2),
                h = n(567),
                m = n(568);

            function y(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function O(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? y(Object(source), !0).forEach((function(t) {
                        Object(r.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var P = function(e) {
                    var t, n = e || {},
                        r = n.homePageSettings,
                        o = n.enabledApps,
                        c = (null == r ? void 0 : r.pageTemplateType) || f.ec.Page;
                    c === f.ec.BlogPageList && (null !== (t = o[f.b.Blog]) && void 0 !== t && t.isEnabled || (c = f.ec.Page));
                    return c
                },
                v = function e() {
                    Object(c.a)(this, e), this.pageTemplateType = f.ec.Page
                };
            t.default = l.a.extend({
                name: "Home",
                data: function() {
                    return new v
                },
                head: function() {
                    return {
                        bodyAttrs: {
                            class: (e = this.pageTemplateType, e === f.ec.BlogPageList ? ["kmb-blog-template-default"] : ["kmb-general-template-default"])
                        }
                    };
                    var e
                },
                asyncData: function(e) {
                    return Object(o.a)(regeneratorRuntime.mark((function t() {
                        var n, r, o, c, l, d, h, m, y, v, w, j;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.$api, r = e.$site, o = e.$cookies, c = e.i18n, l = e.store, d = e.error, t.prev = 1, h = null, m = (null == r ? void 0 : r.id) || o.get("siteId") || l.getters.getSiteId, y = r || l.getters.getSite || new f.fb, v = y.homePageSettings, w = (null == v ? void 0 : v.pageId) || null, (j = P(y)) !== f.ec.BlogPageList) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.next = 11, n.getSingle(new f.hb({
                                        id: w,
                                        siteId: m,
                                        includeSidebarContent: !0
                                    }));
                                case 11:
                                    h = t.sent, t.next = 17;
                                    break;
                                case 14:
                                    return t.next = 16, n.get(new f.yb(O({
                                        id: w,
                                        siteId: m
                                    }, !w && new f.yb({
                                        pageType: f.fc.Home
                                    }))));
                                case 16:
                                    h = t.sent;
                                case 17:
                                    return l.dispatch("setPage", h), t.abrupt("return", {
                                        page: h,
                                        pageTemplateType: j
                                    });
                                case 21:
                                    return t.prev = 21, t.t0 = t.catch(1), console.log(t.t0), t.abrupt("return", d({
                                        statusCode: 404,
                                        message: null == c ? void 0 : c.t("messages.pageNotFound")
                                    }));
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 21]
                        ])
                    })))()
                },
                beforeDestroy: function() {
                    this.onClearPage()
                },
                methods: {
                    onClearPage: function() {
                        try {
                            this.page = null, this.$store.dispatch("setPage", this.page)
                        } catch (e) {
                            console.log(e)
                        }
                    }
                },
                render: function(e) {
                    if (!Object(d.O)(this.page)) return this.pageTemplateType === f.ec.BlogPageList ? e(m.a, {
                        attrs: {
                            page: this.page
                        }
                    }) : e(h.a, {
                        attrs: {
                            page: this.page
                        }
                    })
                }
            })
        }
    }
]);