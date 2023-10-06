(window.webpackJsonp = window.webpackJsonp || []).push([
    [125], {
        869: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetContactUsSettingsT7V1", (function() {
                return y
            }));
            n(12);
            var c = n(0),
                r = n(3),
                o = n(11),
                l = n(6),
                f = n(13),
                d = n(10),
                w = n.n(d),
                v = n(330),
                m = n(146);

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
                    var n, c = Object(l.a)(t);
                    if (e) {
                        var r = Object(l.a)(this).constructor;
                        n = Reflect.construct(c, arguments, r)
                    } else n = c.apply(this, arguments);
                    return Object(o.a)(this, n)
                }
            }
            var y = function(t) {
                    Object(r.a)(n, t);
                    var e = x(n);

                    function n() {
                        return Object(c.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.b),
                h = f.componentFactory.create({
                    props: {
                        widgetIndex: w.a.ofType().default(0),
                        settings: w.a.ofType().required,
                        isEnabledEditor: w.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(m.eb, {
                            class: "contacts  contacts-t7 contacts-t7-v1",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [t("div", {
                            class: "flex flex-row flex-wrap"
                        }, [t("div", {
                            class: "lg-w-1-2 w-full w-item-0"
                        }, [t("div", {
                            class: "flex justify-center items-center break-words"
                        }, [t("div", {
                            class: "text-center kmb-widget-titles-info"
                        }, [t(m.ab, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                value: s.contactUsContactInformation.title,
                                isEnabledDivider: !1
                            }
                        }), t(m.n, {
                            attrs: {
                                value: s.contactUsContactInformation.description
                            },
                            class: "kmb-widget-description"
                        }), t("div", {
                            class: "contact-information"
                        }, [t(m.k, {
                            attrs: {
                                contactInformations: s.contactUsContactInformation.contactInformation.items
                            },
                            class: "item-full-width"
                        })])])])]), t("div", {
                            class: "kmb-mini-banner-bg lg-w-1-2 w-full"
                        }, [t("div", {
                            class: "flex items-center justify-center break-words"
                        }, [t("div", {
                            class: "text-center kmb-widget-titles-info"
                        }, [t(m.ab, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                value: s.contactUsOpeningHours.title
                            }
                        }), t("div", {
                            class: "flex justify-center text-left"
                        }, [t(m.F, {
                            attrs: {
                                value: s.contactUsOpeningHours.openingHours,
                                isFullDateName: !0,
                                isWidget: !0
                            }
                        })])])])])])])])
                    }
                });
            e.default = h
        }
    }
]);