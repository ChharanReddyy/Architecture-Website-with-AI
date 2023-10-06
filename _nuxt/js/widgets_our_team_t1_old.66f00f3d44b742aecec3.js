(window.webpackJsonp = window.webpackJsonp || []).push([
    [157], {
        1010: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V1", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(560);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.b),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v1",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-4 xs-w-1-2 w-full kmb-widget-col kmb-widget-col-group",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    isRoundedImage: !0,
                                    itemIndex: n
                                },
                                class: "kmb-widget-align-column-center kmb-widget-grid-border-item kmb-widget-background-description text-center"
                            })])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = O
        },
        1011: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V2", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(574);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.m),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v2",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-4 xs-w-1-2 w-full kmb-widget-col kmb-widget-col-group",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                }
                            })])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = O
        },
        1012: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V3", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(560);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.o),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v3",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-4 xs-w-1-2 w-full kmb-widget-col kmb-widget-col-group",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                },
                                class: "kmb-widget-align-column-center text-center"
                            })])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = O
        },
        1013: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V4", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(574);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.p),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v4",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "sm-w-1-3 w-full kmb-widget-col kmb-widget-col-group",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                }
                            })])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = O
        },
        1014: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V5", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(574);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.q),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v5",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [s.items && t("div", {
                            class: "kmb-widget-row"
                        }, [t("div", {
                            class: "lg-w-1-3 w-full kmb-widget-col kmb-lg-widget-col-group text-center"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            }
                        }), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])]), s.items && t("div", {
                            class: "lg-w-2-3 w-full kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "xs-w-1-2 w-full kmb-widget-col kmb-widget-col-group",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                }
                            })])
                        }))])])])])])])])])
                    }
                });
            e.default = O
        },
        1015: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V6", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(574);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.r),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v6",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        })]), s.items && t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [t("div", {
                            class: "kmb-widget-our-team-list kmb-widget-col-group"
                        }, [t("div", {
                            class: "kmb-widget-row-mx-0"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-4 sm-w-1-2 w-full",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                }
                            })])
                        }))])])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])
                    }
                });
            e.default = O
        },
        1016: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V7", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(560);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.s),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v7",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        })]), s.items && t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [t("div", {
                            class: "kmb-widget-our-team-list kmb-widget-col-group"
                        }, [t("div", {
                            class: "kmb-widget-row-mx-0"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-4 sm-w-1-2 w-full",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                },
                                class: "kmb-widget-align-column-center text-center"
                            })])
                        }))])])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])
                    }
                });
            e.default = O
        },
        1017: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V8", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(560);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.t),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v8",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        })]), s.items && t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [t("div", {
                            class: "kmb-widget-our-team-list kmb-widget-col-group"
                        }, [t("div", {
                            class: "kmb-widget-row-mx-0"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-4 sm-w-1-2 w-full",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                },
                                class: "kmb-widget-align-column-center text-center"
                            })])
                        }))])])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])
                    }
                });
            e.default = O
        },
        1018: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V9", (function() {
                return h
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146);

            function k(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var h = function(t) {
                    Object(o.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.u),
                y = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v9",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [s.items && t("div", {
                            class: "kmb-widget-row items-center"
                        }, [t("div", {
                            class: "lg-w-1-4 w-full kmb-widget-col kmb-lg-widget-col-group text-center"
                        }, [t(w.U, {
                            attrs: {
                                value: s.subtitle
                            }
                        }), t(w.ab, {
                            attrs: {
                                value: s.title,
                                widgetIndex: this.widgetIndex
                            }
                        }), t(w.n, {
                            attrs: {
                                value: s.description
                            }
                        })]), s.items && t("div", {
                            class: "lg-w-3-4 w-full kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "md-w-1-3 w-full kmb-widget-col kmb-widget-col-group",
                                key: e.key || n
                            }, [t("div", {
                                class: "kmb-team-item text-center"
                            }, [t("div", {
                                class: "kmb-overlay-box-type kmb-overlay-box-type-1"
                            }, [t("div", {
                                class: "kmb-overlay-box"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.image,
                                    resize: s.imageResize,
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation,
                                    settings: s
                                },
                                class: "kmb-box-img-preview",
                                ref: "kmb_box_img_preview_".concat(n)
                            }), (e.memberName.isEnabled || e.position.isEnabled || e.socialLinkList.isEnabled) && t("div", {
                                class: "kmb-hover-box-label"
                            }, [t("div", {
                                class: "kmb-widget-item-content kmb-our-team-item-content"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.memberName
                                },
                                class: "kmb-member-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "kmb-member-position"
                            }), t(w.S, {
                                attrs: {
                                    value: e.socialLinkList
                                },
                                class: "kmb-member-social-links"
                            })])])])])])])
                        }))])])])])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])
                    }
                });
            e.default = y
        },
        1019: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V10", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(560);

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(o.a)(n, t);
                    var e = h(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.c),
                x = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v10",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: " kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [s.items && t("div", {
                            class: "kmb-widget-row items-center"
                        }, [t("div", {
                            class: "lg-w-1-4 w-full kmb-widget-col kmb-lg-widget-col-group text-center"
                        }, [t(w.U, {
                            attrs: {
                                value: s.subtitle
                            }
                        }), t(w.ab, {
                            attrs: {
                                value: s.title,
                                widgetIndex: this.widgetIndex
                            }
                        }), t(w.n, {
                            attrs: {
                                value: s.description
                            }
                        })]), s.items && t("div", {
                            class: "lg-w-3-4 w-full kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "md-w-1-3 w-full kmb-widget-col kmb-widget-col-group",
                                key: e.key || n
                            }, [t(k.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                },
                                class: "kmb-widget-align-column-center text-center"
                            })])
                        }))])])])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = x
        },
        1020: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V11", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(574);

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(o.a)(n, t);
                    var e = h(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.d),
                x = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v11",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-row items-center"
                        }, [t("div", {
                            class: "lg-w-1-3 w-full kmb-widget-col kmb-lg-widget-col-group"
                        }, [t("div", {
                            class: "kmb-widget-titles-info text-center"
                        }, [t(w.U, {
                            attrs: {
                                value: s.subtitle
                            }
                        }), t(w.ab, {
                            attrs: {
                                value: s.title,
                                widgetIndex: this.widgetIndex
                            }
                        }), t(w.n, {
                            attrs: {
                                value: s.description
                            }
                        })])]), s.items && t("div", {
                            class: "lg-w-2-3 w-full kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-widget-our-team-list lg-px-0 px-5"
                        }, [t("div", {
                            class: "kmb-md-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "md-w-1-3 xs-w-1-2 w-full kmb-md-widget-col kmb-widget-col-group",
                                key: e.key || n
                            }, [t(k.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                }
                            })])
                        }))])])])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = x
        },
        1021: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V12", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(560);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.e),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v12",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-4 xs-w-1-2 w-full our-team-no-radius kmb-widget-col kmb-widget-col-group text-center",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                },
                                class: "kmb-widget-align-column-center kmb-widget-grid-border-item kmb-widget-background-description text-center"
                            })])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = O
        },
        1022: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V13", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(560);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.f),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v13",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-4 xs-w-1-2 w-full kmb-widget-col kmb-widget-col-group text-center",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n,
                                    isRoundedImage: !0
                                },
                                class: "kmb-widget-align-column-center text-center"
                            })])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = O
        },
        1023: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V14", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(560);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.g),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v14",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-4 xs-w-1-2 w-full kmb-widget-col our-team-no-radius kmb-widget-col-group text-center",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                },
                                class: "kmb-widget-grid-border-item text-center"
                            })])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = O
        },
        1024: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V15", (function() {
                return O
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(14),
                w = n.n(v),
                k = n(43),
                h = n(146),
                y = n(540);

            function x(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var O = function(t) {
                    Object(o.a)(n, t);
                    var e = x(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(k.h),
                E = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(h.eb, {
                            class: "our-team our-team-t1 our-team-t1-v15",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t(y.a, {
                            attrs: {
                                settings: s
                            },
                            class: "text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-2 xs-w-1-2 sm-w-full w-full kmb-widget-col kmb-widget-col-group",
                                key: e.key || n
                            }, [t("div", {
                                class: "kmb-team-item"
                            }, [t("div", {
                                class: w()("kmb-widget-row", {
                                    "flex-row-reverse": Math.floor(n / 2) % 2 > 0
                                })
                            }, [t("div", {
                                class: "sm-w-1-2 md-w-2-5 lg-w-1-2 w-full kmb-widget-col"
                            }, [t("div", {
                                class: "kmb-team-avatar kmb-sm-widget-col-group"
                            }, [t(h.w, {
                                attrs: {
                                    value: e.image,
                                    resize: s.imageResize,
                                    settings: s,
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                }
                            })])]), t("div", {
                                class: "sm-w-1-2 md-w-3-5 lg-w-1-2 w-full kmb-widget-col flex flex-col justify-center"
                            }, [t("div", {
                                class: "kmb-widget-item-content kmb-our-team-item-content"
                            }, [t(h.V, {
                                attrs: {
                                    value: e.memberName
                                },
                                class: "kmb-member-name"
                            }), t(h.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "kmb-member-position"
                            }), t(h.S, {
                                attrs: {
                                    value: e.socialLinkList
                                },
                                class: "kmb-member-social-links"
                            })])])])])])
                        }))])]), t(h.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(h.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = E
        },
        1025: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V16", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(574);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.i),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v16",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list our-team-no-radius"
                        }, [t("div", {
                            class: "kmb-widget-row-mx-0 justify-center"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "lg-w-1-4 md-w-1-3 xs-w-1-2 w-full",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                }
                            })])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = O
        },
        1026: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V17", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540);

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(o.a)(n, t);
                    var e = h(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.j),
                x = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    methods: {
                        onHoverBoxClick: function(t) {
                            this.$refs["kmb_box_img_preview_".concat(t)].onImageClick()
                        }
                    },
                    render: function(t) {
                        var e, n = this,
                            s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v17",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        })]), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row-mx-0"
                        }, [s.items.map((function(e, r) {
                            return t("div", {
                                class: "lg-w-1-4 sm-w-1-2 w-full",
                                key: e.key || r
                            }, [t("div", {
                                class: "kmb-team-item text-center"
                            }, [t("div", {
                                class: "kmb-team-avatar kmb-widget-lg-el-group",
                                on: {
                                    click: function() {
                                        return n.onHoverBoxClick(r)
                                    }
                                }
                            }, [t(w.w, {
                                attrs: {
                                    value: e.image,
                                    resize: s.imageResize,
                                    imageIndex: r,
                                    widgetVariation: s.widgetVariation,
                                    settings: s
                                },
                                class: "kmb-box-img-preview",
                                ref: "kmb_box_img_preview_".concat(r)
                            })]), (e.memberName.isEnabled || e.position.isEnabled || e.socialLinkList.isEnabled) && t("div", {
                                class: "kmb-hover-box-label px-2"
                            }, [t("div", {
                                class: "kmb-widget-item-content kmb-our-team-item-content"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.memberName
                                },
                                class: "kmb-member-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "kmb-member-position"
                            }), t(w.S, {
                                attrs: {
                                    value: e.socialLinkList
                                },
                                class: "kmb-member-social-links"
                            })])])])])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])
                    }
                });
            e.default = x
        },
        1027: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V18", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(560);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.k),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v18",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "xl-w-1-6 sm-w-1-3 xs-w-1-2 w-full kmb-widget-col kmb-widget-col-group",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    isRoundedImage: !0,
                                    itemIndex: n
                                },
                                class: "kmb-widget-align-column-center text-center"
                            })])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = O
        },
        1028: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V19", (function() {
                return x
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540),
                h = n(560);

            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var x = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.l),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v19",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "kmb-text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, n) {
                            return t("div", {
                                class: "xl-w-1-6 md-w-1-3 xs-w-1-2 w-full kmb-widget-col kmb-widget-col-group",
                                key: e.key || n
                            }, [t(h.a, {
                                attrs: {
                                    settings: s,
                                    item: e,
                                    itemIndex: n
                                },
                                class: "kmb-widget-align-column-center text-center"
                            })])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = O
        },
        1029: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetOurTeamSettingsT1V20", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(43),
                w = n(146),
                k = n(540);

            function h(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Object(l.a)(t);
                    if (e) {
                        var o = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(o.a)(n, t);
                    var e = h(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.n),
                x = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1)
                    },
                    methods: {
                        onHoverBoxClick: function(t) {
                            this.$refs["kmb_box_img_preview_".concat(t)].onImageClick()
                        }
                    },
                    render: function(t) {
                        var e, n = this,
                            s = this.settings;
                        return t(w.eb, {
                            class: "our-team our-team-t1 our-team-t1-v20",
                            attrs: {
                                settings: this.settings
                            }
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info our-team-content"
                        }, [t("div", {
                            class: "kmb-widget-content"
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t(k.a, {
                            attrs: {
                                settings: s
                            },
                            class: "text-center"
                        }), s.items && t("div", {
                            class: "kmb-widget-our-team-list"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [s.items.map((function(e, r) {
                            return t("div", {
                                class: "xl-w-1-6 md-w-1-3 xs-w-1-2 w-full kmb-widget-col kmb-widget-col-group text-center",
                                key: e.key || r
                            }, [t("div", {
                                class: "kmb-team-item kmb-widget-col-group"
                            }, [t("div", {
                                class: "kmb-overlay-box-type kmb-overlay-box-type-1"
                            }, [t("div", {
                                class: "kmb-overlay-box",
                                on: {
                                    click: function() {
                                        return n.onHoverBoxClick(r)
                                    }
                                }
                            }, [t(w.w, {
                                attrs: {
                                    value: e.image,
                                    resize: s.imageResize,
                                    imageIndex: r,
                                    widgetVariation: s.widgetVariation,
                                    settings: s
                                },
                                class: "kmb-box-img-preview",
                                ref: "kmb_box_img_preview_".concat(r)
                            }), (e.memberName.isEnabled || e.position.isEnabled || e.socialLinkList.isEnabled) && t("div", {
                                class: "kmb-hover-box-label"
                            }, [t("div", {
                                class: "kmb-widget-item-content kmb-our-team-item-content"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.memberName
                                },
                                class: "kmb-member-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "kmb-member-position"
                            }), t(w.S, {
                                attrs: {
                                    value: e.socialLinkList
                                },
                                class: "kmb-member-social-links"
                            })])])])])])])
                        }))])]), t(w.h, {
                            attrs: {
                                isEnabled: null === (e = s.button) || void 0 === e ? void 0 : e.isEnabled
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [t(w.g, {
                            attrs: {
                                value: s.button
                            }
                        })])])])])])
                    }
                });
            e.default = x
        },
        540: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return d
            }));
            var r = n(13),
                o = n(10),
                c = n.n(o),
                l = n(146),
                d = r.componentFactory.create({
                    name: "CommonTitles",
                    props: {
                        widgetIndex: c.a.ofType().default(0),
                        settings: c.a.ofAny().required,
                        isDescription: c.a.ofType().default(!0),
                        isEnabledDivider: c.a.ofType().default(!0)
                    },
                    render: function(t) {
                        return t("div", {
                            class: "kmb-widget-titles-info"
                        }, [t(l.U, {
                            attrs: {
                                value: this.settings.subtitle
                            }
                        }), t(l.ab, {
                            attrs: {
                                value: this.settings.title,
                                widgetIndex: this.widgetIndex,
                                isEnabledDivider: this.isEnabledDivider
                            }
                        }), this.isDescription && t(l.n, {
                            attrs: {
                                value: this.settings.description
                            },
                            class: "kmb-widget-description"
                        })])
                    }
                })
        },
        560: function(t, e, n) {
            "use strict";
            var r = n(13),
                o = n(10),
                c = n.n(o),
                l = n(14),
                d = n.n(l),
                m = n(146),
                f = r.componentFactory.create({
                    name: "TeamItemAvatar",
                    props: {
                        settings: c.a.ofAny().required,
                        item: c.a.ofAny().required,
                        isRoundedImage: c.a.ofType().default(!1),
                        itemIndex: c.a.ofType().default(0)
                    },
                    render: function(t) {
                        return t("div", {
                            class: "kmb-team-item"
                        }, [t("div", {
                            class: "kmb-team-avatar kmb-widget-xl-el-group"
                        }, [t(m.w, {
                            attrs: {
                                value: this.item.image,
                                resize: this.settings.imageResize,
                                settings: this.settings,
                                imageIndex: this.itemIndex,
                                widgetVariation: this.settings.widgetVariation
                            },
                            class: d()("object-cover", {
                                "kmb-widget-item-rounded-image": this.isRoundedImage
                            })
                        })]), t("div", {
                            class: "kmb-widget-item-content kmb-our-team-item-content"
                        }, [t(m.V, {
                            attrs: {
                                value: this.item.memberName
                            },
                            class: "kmb-member-name"
                        }), t(m.n, {
                            attrs: {
                                value: this.item.position
                            },
                            class: "kmb-member-position"
                        }), t(m.S, {
                            attrs: {
                                value: this.item.socialLinkList
                            },
                            class: "kmb-member-social-links justify-center"
                        })])])
                    }
                });
            e.a = f
        },
        574: function(t, e, n) {
            "use strict";
            var r = n(13),
                o = n(10),
                c = n.n(o),
                l = n(5),
                d = n(146),
                m = r.componentFactory.create({
                    name: "TeamItem",
                    props: {
                        item: c.a.ofAny().required,
                        settings: c.a.ofAny().required,
                        itemIndex: c.a.ofType().default(0)
                    },
                    computed: {
                        isEnabledContent: function() {
                            var t, e, n, r, o, c;
                            return !Object(l.O)(this.item) && ((null === (t = this.item) || void 0 === t || null === (e = t.memberName) || void 0 === e ? void 0 : e.isEnabled) || (null === (n = this.item) || void 0 === n || null === (r = n.position) || void 0 === r ? void 0 : r.isEnabled) || (null === (o = this.item) || void 0 === o || null === (c = o.socialLinkList) || void 0 === c ? void 0 : c.isEnabled))
                        }
                    },
                    methods: {
                        onHoverBoxClick: function() {
                            this.$refs["kmb_box_img_preview_".concat(this.itemIndex)].onImageClick()
                        }
                    },
                    render: function(t) {
                        var e = this;
                        return t("div", {
                            class: "kmb-team-item text-center"
                        }, [t("div", {
                            class: "kmb-hover-box-type kmb-hover-box-type-1"
                        }, [t("div", {
                            class: "kmb-hover-box",
                            on: {
                                click: function() {
                                    return e.onHoverBoxClick()
                                }
                            }
                        }, [t(d.w, {
                            attrs: {
                                value: this.item.image,
                                resize: this.settings.imageResize,
                                settings: this.settings,
                                imageIndex: this.itemIndex,
                                widgetVariation: this.settings.widgetVariation
                            },
                            class: "kmb-box-img-preview object-cover",
                            ref: "kmb_box_img_preview_".concat(this.itemIndex)
                        }), this.isEnabledContent && t("div", {
                            class: "kmb-hover-box-label"
                        }, [t("div", {
                            class: "kmb-widget-item-content kmb-our-team-item-content"
                        }, [t(d.V, {
                            attrs: {
                                value: this.item.memberName
                            },
                            class: "kmb-member-name"
                        }), t(d.n, {
                            attrs: {
                                value: this.item.position
                            },
                            class: "kmb-member-position"
                        }), t(d.S, {
                            attrs: {
                                value: this.item.socialLinkList
                            },
                            class: "kmb-member-social-links"
                        })])])])])])
                    }
                });
            e.a = m
        }
    }
]);