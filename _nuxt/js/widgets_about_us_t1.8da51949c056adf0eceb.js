(window.webpackJsonp = window.webpackJsonp || []).push([
    [64], {
        543: function(t, e, n) {
            "use strict";
            var r = n(13),
                c = n(10),
                o = n.n(c),
                l = n(14),
                d = n.n(l),
                f = n(1),
                m = n(5),
                w = n(146),
                v = r.componentFactory.create({
                    name: "AboutUsItem",
                    props: {
                        widgetIndex: o.a.ofType().required,
                        settings: o.a.ofAny().required,
                        isSecondaryButton: o.a.ofType().default(!0),
                        isSubtitle: o.a.ofType().default(!0),
                        isEnabledButtons: o.a.ofType().default(!0),
                        smallerTitle: o.a.ofType().default(!1)
                    },
                    created: function() {
                        Object(m.O)(this.settings.isEnabledDivider) && (this.settings.isEnabledDivider = new f.e)
                    },
                    computed: {
                        isEnabledDivier: function() {
                            var t;
                            return null === (t = this.settings.isEnabledDivider) || void 0 === t ? void 0 : t.isEnabled
                        }
                    },
                    render: function(t) {
                        var e;
                        return t("div", {
                            class: d()("kmb-widget-default-info", this.settings.contentAligmentType && (null === (e = m.a[this.settings.contentAligmentType]) || void 0 === e ? void 0 : e.class))
                        }, [t("div", {
                            class: d()("kmb-widget-titles-info kmb-widget-lg-divider text-center", {
                                "kmb-widget-no-divider": !this.isEnabledDivier
                            })
                        }, [this.isSubtitle && t(w.U, {
                            attrs: {
                                value: this.settings.subtitle
                            }
                        }), this.smallerTitle ? t(w.P, {
                            attrs: {
                                value: this.settings.title
                            }
                        }) : t(w.ab, {
                            attrs: {
                                value: this.settings.title,
                                widgetIndex: this.widgetIndex
                            }
                        }), t(w.n, {
                            attrs: {
                                value: this.settings.description
                            },
                            class: "text-center"
                        })]), this.isEnabledButtons && t(w.h, {
                            class: "kmb-widget-btn-group-center -mx-2"
                        }, [t(w.g, {
                            attrs: {
                                value: this.settings.primaryButton
                            }
                        }), this.isSecondaryButton && t(w.g, {
                            attrs: {
                                value: this.settings.secondaryButton,
                                classNames: "kmb-widget-secondary-btn"
                            }
                        })])])
                    }
                });
            e.a = v
        },
        691: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetAboutUsSettingsT1V11", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(58),
                v = n(146),
                h = n(543);

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
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.d),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.eb, {
                            class: "about-us about-us-t1 about-us-t1-v11",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-widget-row-mx-0 items-center"
                        }, [s.image && t("div", {
                            class: "lg-w-3-5 w-full self-stretch"
                        }, [t("div", {
                            class: "kmb-widget-image kmb-lg-widget-col-group h-full"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-full-image kmb-lg-widget-full-h-image kmb-hs-image-h-auto kmb-hs-image-center kmb-widget-image-item-no-rounded"
                        })])]), t("div", {
                            class: "lg-w-2-5 w-full"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: s
                            },
                            class: "kmb-widget-info-left kmb-widget-info-center-btn lg-py-10"
                        })])])])])])])
                    }
                });
            e.default = O
        },
        692: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetAboutUsSettingsT1V12", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(58),
                v = n(146),
                h = n(543);

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
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.e),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.eb, {
                            class: "about-us about-us-t1 about-us-t1-v12",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-md-widget-container kmb-sm-widget-col-group"
                        }, [t(h.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: s,
                                isEnabledButtons: !1
                            }
                        })]), s.image && t("div", {
                            class: "w-full flex justify-center"
                        }, [t("div", {
                            class: "kmb-widget-image kmb-widget-col-group"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-hs-image-h-auto kmb-hs-image-center"
                        })])]), t(v.h, {
                            class: "kmb-widget-btn-group-center"
                        }, [t(v.g, {
                            attrs: {
                                value: this.settings.primaryButton
                            }
                        }), t(v.g, {
                            attrs: {
                                value: this.settings.secondaryButton,
                                classNames: "kmb-widget-secondary-btn"
                            }
                        })])])])])
                    }
                });
            e.default = O
        },
        693: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetAboutUsSettingsT1V13", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(58),
                v = n(146),
                h = n(543);

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
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.f),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.eb, {
                            class: "about-us about-us-t1 about-us-t1-v13",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-widget-row items-center"
                        }, [t("div", {
                            class: "xl-w-1-3 w-full kmb-widget-col kmb-xl-widget-col-group"
                        }, [t("div", {
                            class: "kmb-xs-s-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: s
                            },
                            class: "lg-py-10 pt-10"
                        })])]), s.image && t("div", {
                            class: "xl-w-2-3 w-full kmb-widget-col self-stretch"
                        }, [t("div", {
                            class: "kmb-widget-image h-full"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-full-image kmb-hs-image-h-auto kmb-hs-image-center kmb-widget-image-item-no-rounded kmb-lg-widget-full-h-image"
                        })])])])])])])
                    }
                });
            e.default = O
        },
        694: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetAboutUsSettingsT1V14", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(58),
                v = n(146),
                h = n(543);

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
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.g),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.eb, {
                            class: "about-us about-us-t1 about-us-t1-v14",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-widget-row items-center"
                        }, [s.image && t("div", {
                            class: "xl-w-1-2-2 w-full kmb-widget-col flex justify-center self-stretch"
                        }, [t("div", {
                            class: "kmb-widget-image kmb-xl-widget-col-group h-full"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-hs-image-h-auto kmb-hs-image-center kmb-lg-widget-full-h-image"
                        })])]), t("div", {
                            class: "xl-w-1-2-1 w-full kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: s
                            },
                            class: "lg-py-10"
                        })])])])])])])
                    }
                });
            e.default = O
        },
        695: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetAboutUsSettingsT1V15", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(58),
                v = n(146),
                h = n(543);

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
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.h),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.eb, {
                            class: "about-us about-us-t1 about-us-t1-v15",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [s.image && t("div", {
                            class: "w-full kmb-widget-col-2xl-group kmb-lg-widget-col-group"
                        }, [t("div", {
                            class: "kmb-widget-image"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-full-image kmb-hs-image-h-auto kmb-hs-image-center kmb-widget-image-item-no-rounded"
                        })])]), t("div", {
                            class: "kmb-md-widget-container kmb-widget-col-group"
                        }, [t(h.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: s
                            },
                            class: "kmb-widget-no-divider"
                        })])])])])
                    }
                });
            e.default = O
        },
        696: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetAboutUsSettingsT1V16", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(58),
                v = n(146),
                h = n(543);

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
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.i),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.eb, {
                            class: "about-us about-us-t1 about-us-t1-v16",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-widget-row items-center"
                        }, [t("div", {
                            class: "lg-w-1-2 w-full kmb-widget-col kmb-lg-widget-col-group"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: s
                            },
                            class: "lg-py-10 pt-10"
                        })])]), s.image && t("div", {
                            class: "lg-w-1-2 w-full self-stretch"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-full-image kmb-hs-image-h-auto kmb-hs-image-center kmb-widget-image-item-no-rounded kmb-lg-widget-full-h-image h-full"
                        })])])])])])
                    }
                });
            e.default = O
        },
        697: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetAboutUsSettingsT1V17", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(58),
                v = n(146),
                h = n(543);

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
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.j),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.eb, {
                            class: "about-us about-us-t1 about-us-t1-v17",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [s.image && t("div", {
                            class: "w-full kmb-widget-col-group"
                        }, [t("div", {
                            class: "kmb-widget-image"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-full-image kmb-hs-image-h-auto kmb-hs-image-center kmb-widget-image-item-no-rounded"
                        })])]), t("div", {
                            class: "w-full"
                        }, [t("div", {
                            class: "kmb-md-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: s
                            }
                        })])])])])])
                    }
                });
            e.default = O
        },
        698: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetAboutUsSettingsT1V18", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(58),
                v = n(146),
                h = n(543);

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
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.k),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.eb, {
                            class: "about-us about-us-t1 about-us-t1-v18",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-widget-row items-center"
                        }, [t("div", {
                            class: "lg-w-1-2 w-full kmb-widget-col kmb-lg-widget-col-group"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: s
                            },
                            class: "kmb-widget-info-left kmb-widget-info-center-btn lg-py-10 pt-10"
                        })])]), s.image && t("div", {
                            class: "lg-w-1-2 w-full self-stretch"
                        }, [t("div", {
                            class: "kmb-widget-image h-full"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-widget-full-image kmb-hs-image-h-auto kmb-hs-image-center kmb-widget-image-item-no-rounded kmb-lg-widget-full-h-image"
                        })])])])])])])
                    }
                });
            e.default = O
        },
        699: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetAboutUsSettingsT1V19", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(58),
                v = n(146),
                h = n(543);

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
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.l),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.eb, {
                            class: "about-us about-us-t1 about-us-t1-v19",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-widget-row items-center"
                        }, [t("div", {
                            class: "lg-w-1-2-1 w-full kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-sm-widget-container kmb-lg-widget-col-group kmb-widget-col"
                        }, [t(h.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: s
                            },
                            class: "lg-py-10"
                        })])]), s.image && t("div", {
                            class: "lg-w-1-2-2 w-full flex justify-center kmb-widget-col self-stretch"
                        }, [t("div", {
                            class: "kmb-widget-image h-full"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-hs-image-h-auto kmb-hs-image-center kmb-lg-widget-full-h-image"
                        })])])])])])])
                    }
                });
            e.default = O
        },
        700: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetAboutUsSettingsT1V20", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(58),
                v = n(146),
                h = n(543);

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
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.n),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.eb, {
                            class: "about-us about-us-t1 about-us-t1-v20",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-widget-row items-center"
                        }, [t("div", {
                            class: "lg-w-1-2 w-full kmb-lg-widget-col-group kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: s
                            },
                            class: "lg-py-10"
                        })])]), s.image && t("div", {
                            class: "lg-w-1-2 w-full flex justify-center kmb-widget-col self-stretch"
                        }, [t("div", {
                            class: "kmb-widget-image h-full"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-hs-image-h-auto kmb-hs-image-center kmb-lg-widget-full-h-image"
                        })])])])])])])
                    }
                });
            e.default = O
        },
        701: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetAboutUsSettingsT1V21", (function() {
                return y
            }));
            n(12);
            var r = n(0),
                c = n(3),
                o = n(11),
                l = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                w = n(58),
                v = n(146),
                h = n(543);

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
                        var c = Object(l.a)(this).constructor;
                        n = Reflect.construct(r, arguments, c)
                    } else n = r.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(c.a)(n, t);
                    var e = k(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(w.o),
                O = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(v.eb, {
                            class: "about-us about-us-t1 about-us-t1-v21",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame"
                        }, [t("div", {
                            class: "kmb-widget-content-info"
                        }, [t("div", {
                            class: "kmb-widget-row items-center"
                        }, [t("div", {
                            class: "lg-w-1-2 w-full kmb-lg-widget-col-group kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t(h.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: s
                            },
                            class: "kmb-widget-info-left kmb-widget-info-center-btn lg-py-10"
                        })])]), s.image && t("div", {
                            class: "lg-w-1-2 w-full flex justify-center kmb-widget-col self-stretch"
                        }, [t("div", {
                            class: "kmb-widget-image h-full"
                        }, [t(v.w, {
                            attrs: {
                                value: s.image,
                                resize: s.imageResize,
                                settings: s,
                                widgetVariation: s.widgetVariation
                            },
                            class: "kmb-hs-image-h-auto kmb-hs-image-center kmb-lg-widget-full-h-image"
                        })])])])])])])
                    }
                });
            e.default = O
        }
    }
]);