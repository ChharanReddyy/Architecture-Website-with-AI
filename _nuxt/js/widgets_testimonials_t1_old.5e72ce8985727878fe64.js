(window.webpackJsonp = window.webpackJsonp || []).push([
    [215], {
        1193: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V1", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.b),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        widgetKey: f.a.ofAny().required,
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v1",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                indicatorsType: this.sliderIndicatorsType
                            }
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item h-full"
                            }, [t("div", {
                                class: "author-avatar flex justify-center -mb-16"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: s.imageResize,
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t("div", {
                                class: "kmb-widget-background-description h-full md-px-12 px-4 py-16 pb-6"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name mt-4"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-4"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-left text-left"
                            })])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1194: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V2", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(15), n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        var t;
                        return Object(r.a)(this, n), (t = e.apply(this, arguments)).widgetVariation = t.constructor.name, t
                    }
                    return n
                }(v.m),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v2",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                indicators: !0,
                                indicatorsType: this.sliderIndicatorsType,
                                nav: !1
                            }
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n,
                                class: "px-1"
                            }, [t("div", {
                                class: "testimonial-item kmb-widget-row flex flex-row flex-wrap items-center"
                            }, [t("div", {
                                class: "lg-w-1-2 w-full testimonial-item-info kmb-widget-col text-center"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name "
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-5"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-left text-left mt-4"
                            })]), t("div", {
                                class: "author-avatar lg-author-avatar lg-w-1-2 w-full flex justify-center kmb-widget-col lg-mt-0 mt-6"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: s.imageResize,
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "w-full"
                            })])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1195: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V3", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.o),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v3",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                indicatorsType: this.sliderIndicatorsType
                            }
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item"
                            }, [t("div", {
                                class: "kmb-widget-customer-review-info arrow kmb-widget-background-description mt-6 py-10 lg-px-20 px-12"
                            }, [t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review text-left"
                            })]), t("div", {
                                class: "kmb-widget-testimonial-customer-info-top-arrow testimonial-customer-info mt-6 lg-w-1-4 md-w-1-3 w-full"
                            }, [t("div", {
                                class: "testimonial-inner-item "
                            }, [t("div", {
                                class: "author-avatar flex justify-center"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "80",
                                        height: "80"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t("div", {
                                class: "testimonial-item-info text-center mt-3"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-4"
                            })])])])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1196: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V4", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.p),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v4",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "-mx-3"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item rounded-6"
                            }, [t("div", {
                                class: "testimonial-inner-item kmb-widget-background-description lg-px-20 md-px-10 px-5 py-5"
                            }, [t("div", {
                                class: "author-avatar mb-5 flex justify-center"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: s.imageResize,
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-4"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-left text-left"
                            })])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1197: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V5", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.q),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v5",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 4,
                                    infiniteScroll: !0,
                                    breakpoints: {
                                        0: {
                                            itemsToShow: 1
                                        },
                                        768: {
                                            itemsToShow: 2
                                        },
                                        992: {
                                            itemsToShow: 4
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "-mx-4"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item item-has-border kmb-widget-background-description h-full py-5 px-4"
                            }, [t("div", {
                                class: "testimonial-inner-item"
                            }, [t("div", {
                                class: "author-avatar flex justify-center mb-5"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "120",
                                        height: "120"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-4"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes text-left"
                            })])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1198: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V6", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.r),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v6",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 4,
                                    infiniteScroll: !0,
                                    breakpoints: {
                                        992: {
                                            itemsToShow: 4
                                        },
                                        768: {
                                            itemsToShow: 2
                                        },
                                        0: {
                                            itemsToShow: 1
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "-mx-3"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item"
                            }, [t("div", {
                                class: "author-avatar flex justify-center mb-5"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "120",
                                        height: "120"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-4"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes text-left"
                            })])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1199: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V7", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.s),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v7",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 2,
                                    breakpoints: {
                                        768: {
                                            itemsToShow: 2
                                        },
                                        0: {
                                            itemsToShow: 1
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "-mx-3"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item relative mt-16 pt-8"
                            }, [t("div", {
                                class: "testimonial-inner-item"
                            }, [t("div", {
                                class: "author-avatar flex justify-center -mb-16"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "120",
                                        height: "120"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t("div", {
                                class: "kmb-widget-background-description pt-20 pb-5 px-4"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-4"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes text-left"
                            })])])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1200: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V8", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.t),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v8",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 2,
                                    breakpoints: {
                                        768: {
                                            itemsToShow: 2
                                        },
                                        0: {
                                            itemsToShow: 1
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "-mx-3"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item w-full"
                            }, [t("div", {
                                class: "author-avatar flex justify-center mb-4"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "120",
                                        height: "120"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t("div", {
                                class: "testimonial-item-info rounded-6 kmb-widget-background-description  item-has-border-2 py-5 px-4"
                            }, [t("div", {
                                class: "testimonial-inner-item"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-4"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes text-left"
                            })])])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1202: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V10", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.c),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v10",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 2,
                                    breakpoints: {
                                        991: {
                                            itemsToShow: 2
                                        },
                                        768: {
                                            itemsToShow: 1
                                        },
                                        0: {
                                            itemsToShow: 1
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "-mx-4"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item mt-4"
                            }, [t("div", {
                                class: "kmb-widget-customer-review-info arrow kmb-widget-background-description px-8 py-12"
                            }, [t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes text-left"
                            })]), t("div", {
                                class: "kmb-widget-testimonial-customer-info-top-arrow testimonial-customer-info mt-6 lg-w-1-3 md-w-2-5 w-full lg-ml-6"
                            }, [t("div", {
                                class: "testimonial-inner-item "
                            }, [t("div", {
                                class: "author-avatar flex justify-center kmb-widget-el-group"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "80",
                                        height: "80"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t("div", {
                                class: "testimonial-item-info"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-4"
                            })])])])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1203: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V11", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.d),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v11",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-container kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 2.5,
                                    centerMode: !0,
                                    infiniteScroll: !0,
                                    breakpoints: {
                                        991: {
                                            itemsToShow: 2.5,
                                            centerMode: !0
                                        },
                                        768: {
                                            itemsToShow: 1.75,
                                            centerMode: !0
                                        },
                                        0: {
                                            itemsToShow: 1.2,
                                            centerMode: !0
                                        }
                                    }
                                },
                                nav: !1,
                                indicators: !0,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "kmb-slider-navigation-centered-bottom"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "w-1-3 mt-4",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item testimonial-bg-2 kmb-widget-background-description h-full mx-4 py-8 px-5 mb-4"
                            }, [t("div", {
                                class: "testimonial-inner-item"
                            }, [t("div", {
                                class: "author-avatar flex justify-center mb-3"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "120",
                                        height: "120"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-2"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review text-left"
                            })])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1204: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V12", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.e),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v12",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 3,
                                    breakpoints: {
                                        991: {
                                            itemsToShow: 3
                                        },
                                        768: {
                                            itemsToShow: 2
                                        },
                                        0: {
                                            itemsToShow: 1
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            }
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col mt-4",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item item-has-border kmb-widget-background-description py-5 px-4 h-full"
                            }, [t("div", {
                                class: "testimonial-inner-item h-full"
                            }, [t("div", {
                                class: "author-avatar flex justify-center w-1-2 mx-auto mb-5"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "120",
                                        height: "120"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-2"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes text-left mt-3 mb-0"
                            })])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1205: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V13", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.f),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v13",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 3,
                                    breakpoints: {
                                        991: {
                                            itemsToShow: 3
                                        },
                                        768: {
                                            itemsToShow: 2
                                        },
                                        0: {
                                            itemsToShow: 1
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            }
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item py-5 px-4"
                            }, [t("div", {
                                class: "author-avatar flex justify-center w-1-2 mx-auto mb-5"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "120",
                                        height: "120"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-2"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes text-left mt-3"
                            })])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1206: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V14", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.g),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v14",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 3,
                                    breakpoints: {
                                        0: {
                                            itemsToShow: 1
                                        },
                                        768: {
                                            itemsToShow: 2
                                        },
                                        920: {
                                            itemsToShow: 3
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "-mx-3"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col mt-6",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-itesm"
                            }, [t("div", {
                                class: "author-avatar flex justify-center mb-4"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "120",
                                        height: "120"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t("div", {
                                class: "testimonial-item relative kmb-widget-background-description py-4 px-5"
                            }, [t("div", {
                                class: "testimonial-inner-item"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-5"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes mt-3 text-left"
                            })])])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1207: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V15", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.h),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v15",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 3,
                                    breakpoints: {
                                        0: {
                                            itemsToShow: 1
                                        },
                                        768: {
                                            itemsToShow: 2
                                        },
                                        920: {
                                            itemsToShow: 3
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "-mx-3"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col mt-4",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item"
                            }, [t("div", {
                                class: "author-avatar flex justify-center mb-4"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "120",
                                        height: "120"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-5"
                            }), t("div", {
                                class: "testimonial-item relative kmb-widget-background-description px-6 pt-6 pb-3"
                            }, [t("div", {
                                class: "testimonial-inner-item"
                            }, [t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes text-left"
                            })])])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1208: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V16", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.i),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v16",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 2,
                                    breakpoints: {
                                        0: {
                                            itemsToShow: 1
                                        },
                                        768: {
                                            itemsToShow: 2
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "-mx-3"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col mt-4",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item relative kmb-widget-background-description py-4 px-5 h-full"
                            }, [t("div", {
                                class: "testimonial-inner-item h-full"
                            }, [t("div", {
                                class: "author-avatar flex justify-center mb-3"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "120",
                                        height: "120"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-2"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes mt-3 mb-0 text-left"
                            })])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1209: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V17", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.j),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v17",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 2,
                                    breakpoints: {
                                        768: {
                                            itemsToShow: 2
                                        },
                                        0: {
                                            itemsToShow: 1
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "-mx-4"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col mt-4",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item"
                            }, [t("div", {
                                class: "kmb-widget-customer-review-inforounded-6 py-5 px-5 mb-4 kmb-widget-background-description"
                            }, [t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review text-left"
                            })]), t("div", {
                                class: "flex flex-col justify-center mb-4"
                            }, [t("div", {
                                class: "author-avatar mb-4 mx-auto"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "80",
                                        height: "80"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center"
                            })])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1210: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V18", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.k),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, n, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v18",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
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
                            },
                            class: "kmb-widget-titles-description"
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 1
                                },
                                group: "subCarouselTestimonialT3V14",
                                indicatorsType: this.sliderIndicatorsType
                            }
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n,
                                class: "px-1"
                            }, [t("div", {
                                class: "testimonial-item testimonial-item-block kmb-widget-row items-center"
                            }, [t("div", {
                                class: "lg-w-1-2 w-full testimonial-item-info kmb-widget-col"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name "
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-5"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-left text-left mt-4"
                            })]), t("div", {
                                class: "lg-w-1-2 w-full kmb-widget-col lg-mt-0 mt-6"
                            }, [t("div", {
                                class: "author-avatar lg-author-avatar"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: 540,
                                        height: 340
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-full-image"
                            })])])])])
                        }))]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 3,
                                    breakpoints: {
                                        992: {
                                            itemsToShow: 3
                                        },
                                        768: {
                                            itemsToShow: 2
                                        },
                                        0: {
                                            itemsToShow: 1
                                        }
                                    }
                                },
                                group: "subCarouselTestimonialT3V14",
                                indicatorsType: this.sliderIndicatorsType,
                                nav: !1
                            },
                            class: "-mx-3 kmb-sub-slider"
                        }, [null === (n = s.items) || void 0 === n ? void 0 : n.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item"
                            }, [t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes text-left"
                            }), t("div", {
                                class: "testimonial-customer-info flex flex-col items-center"
                            }, [t("div", {
                                class: "author-avatar mt-6 mb-4"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: 120,
                                        height: 120
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image w-full author-avatar-rounded"
                            })]), t("div", {
                                class: "testimonial-item-info mt-3"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "justify-center"
                            })])])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        1211: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V19", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.l),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v19",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content"
                        }, [t("div", {
                            class: "kmb-widget-row items-center -mx-3"
                        }, [t("div", {
                            class: "lg-w-1-3 w-full kmb-widget-col"
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
                        })])]), t("div", {
                            class: "lg-w-2-3 w-full kmb-widget-col"
                        }, [(null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 2,
                                    breakpoints: {
                                        992: {
                                            itemsToShow: 2
                                        },
                                        768: {
                                            itemsToShow: 2
                                        },
                                        0: {
                                            itemsToShow: 1
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            },
                            class: "-mx-3"
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                class: "kmb-widget-col",
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item text-center kmb-widget-background-description relative py-8 px-5 h-full"
                            }, [t("div", {
                                class: "testimonial-inner-item h-full"
                            }, [t("div", {
                                class: "author-avatar flex justify-center mb-3"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: s.imageResize,
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position text-green"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings justify-center mb-2"
                            }), t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-md-quotes mt-3 mb-0 text-left"
                            })])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])])])
                    }
                });
            e.default = k
        },
        1212: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetTestimonialsSettingsT1V20", (function() {
                return T
            }));
            n(12);
            var r = n(0),
                o = n(3),
                c = n(11),
                l = n(6),
                d = (n(17), n(13)),
                m = n(10),
                f = n.n(m),
                v = n(249),
                w = n(146),
                h = n(546);

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
            var T = function(t) {
                    Object(o.a)(n, t);
                    var e = y(n);

                    function n() {
                        return Object(r.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.n),
                k = d.componentFactory.create({
                    props: {
                        widgetIndex: f.a.ofType().default(0),
                        settings: f.a.ofType().required,
                        isEnabledEditor: f.a.ofType().default(!1),
                        sliderIndicatorsType: f.a.ofType().optional
                    },
                    render: function(t) {
                        var e, s = this.settings;
                        return t(w.eb, {
                            class: "testimonials testimonials-t1 testimonials-t1-v20",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info testimonials-content text-center"
                        }, [t("div", {
                            class: "kmb-widget-titles-info mb-4"
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
                        })]), (null == s ? void 0 : s.items) && t(w.Q, {
                            attrs: {
                                settings: {
                                    itemsToShow: 3,
                                    vertical: !0,
                                    breakpoints: {
                                        992: {
                                            itemsToShow: 3
                                        },
                                        768: {
                                            itemsToShow: 2
                                        },
                                        0: {
                                            itemsToShow: 1,
                                            vertical: !1
                                        }
                                    }
                                },
                                indicators: !0,
                                nav: !1,
                                indicatorsType: this.sliderIndicatorsType
                            }
                        }, [null === (e = s.items) || void 0 === e ? void 0 : e.map((function(e, n) {
                            return t(w.R, {
                                attrs: {
                                    index: n
                                },
                                key: e.key || n
                            }, [t("div", {
                                class: "testimonial-item rounded-6 relative px-5 mb-6"
                            }, [t("div", {
                                class: "kmb-widget-row items-center"
                            }, [t("div", {
                                class: "lg-w-1-3 w-full kmb-widget-col"
                            }, [t("div", {
                                class: "kmb-widget-row items-center"
                            }, [t("div", {
                                class: "author-avatar sm-w-1-5 lg-w-1-2 w-full flex justify-center mb-3 kmb-widget-col"
                            }, [t(w.w, {
                                attrs: {
                                    value: e.userImage,
                                    resize: {
                                        width: "120",
                                        height: "120"
                                    },
                                    imageIndex: n,
                                    widgetVariation: s.widgetVariation
                                },
                                class: "kmb-widget-item-rounded-image author-avatar-rounded"
                            })]), t("div", {
                                class: "sm-w-4-5 lg-w-1-2 w-full kmb-widget-col text-left mb-3"
                            }, [t(w.V, {
                                attrs: {
                                    value: e.userName
                                },
                                class: "customer-name"
                            }), t(w.n, {
                                attrs: {
                                    value: e.position
                                },
                                class: "customer-position"
                            }), t(w.M, {
                                attrs: {
                                    value: e.userRating
                                },
                                class: "kmb-widget-testimonial-ratings"
                            })])])]), t("div", {
                                class: "lg-w-2-3 w-full testimonials-description kmb-widget-col"
                            }, [t("div", {
                                class: "lg-pl-16"
                            }, [t(w.n, {
                                attrs: {
                                    value: e.reviewText
                                },
                                class: "kmb-widget-customer-review kmb-widget-customer-review-left kmb-widget-customer-review-md-quotes text-left"
                            })])])])])])
                        }))]), t(h.a, {
                            attrs: {
                                settings: s
                            }
                        })])])])
                    }
                });
            e.default = k
        },
        546: function(t, e, n) {
            "use strict";
            n(15);
            var r = n(13),
                o = n(10),
                c = n.n(o),
                l = n(22),
                d = n(2),
                m = n(1),
                f = n(146),
                v = r.componentFactory.create({
                    name: "TestiomonialFormButton",
                    props: {
                        settings: c.a.ofType().required
                    },
                    created: function() {
                        var t;
                        Object(l.E)(null === (t = this.settings) || void 0 === t ? void 0 : t.testimonialFormButton, "label")
                    },
                    computed: {
                        currentPage: function() {
                            return this.$store.getters.getPage
                        },
                        isEnabledApp: function() {
                            return this.$store.getters.isEnabledApp(d.b.Testimonials)
                        }
                    },
                    render: function(t) {
                        if (this.isEnabledApp) {
                            var e, n, r, s = this.settings;
                            if (s.testimonialFormId && null !== (e = s.testimonialFormButton) && void 0 !== e && e.isEnabled) return t(f.h, {
                                class: "kmb-testimonial-form-btn-refaral-group kmb-widget-btn-group-center mt-4"
                            }, [t(f.g, {
                                attrs: {
                                    value: new m.p({
                                        lczText: new m.L({
                                            lczValue: (null === (n = s.testimonialFormButton.lczText) || void 0 === n ? void 0 : n.lczValue) || this.$t("buttons.writeATestimonial")
                                        }),
                                        urlType: d.Hd.ExternalLink,
                                        externalLink: "/leave-testimonial/".concat(s.testimonialFormId, "?referralSource=").concat(null === (r = this.currentPage) || void 0 === r ? void 0 : r.name),
                                        isTargetBlank: !0,
                                        isEnabled: s.testimonialFormButton.isEnabled
                                    })
                                }
                            })])
                        }
                    }
                });
            e.a = v
        }
    }
]);