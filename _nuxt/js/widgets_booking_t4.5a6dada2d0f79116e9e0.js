(window.webpackJsonp = window.webpackJsonp || []).push([
    [111], {
        788: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBookingSettingsT4V1", (function() {
                return h
            }));
            n(12);
            var l = n(0),
                o = n(3),
                r = n(11),
                c = n(6),
                d = n(13),
                f = n(10),
                m = n.n(f),
                v = n(304),
                k = n(146);

            function w(t) {
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
                    var n, l = Object(c.a)(t);
                    if (e) {
                        var o = Object(c.a)(this).constructor;
                        n = Reflect.construct(l, arguments, o)
                    } else n = l.apply(this, arguments);
                    return Object(r.a)(this, n)
                }
            }
            var h = function(t) {
                    Object(o.a)(n, t);
                    var e = w(n);

                    function n() {
                        return Object(l.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(v.b),
                y = d.componentFactory.create({
                    props: {
                        widgetIndex: m.a.ofType().default(0),
                        settings: m.a.ofType().required,
                        isEnabledEditor: m.a.ofType().default(!1)
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(k.eb, {
                            class: "kmb-widget-booking booking-t4 booking-t4-v1",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info booking-content"
                        }, [t("div", {
                            class: "kmb-widget-content kmb-widget-content-container"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [t("div", {
                            class: "lg-w-1-2 w-full kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
                        }, [t(k.ab, {
                            attrs: {
                                value: s.title,
                                widgetIndex: this.widgetIndex,
                                isEnabledDivider: !1
                            }
                        }), t(k.n, {
                            attrs: {
                                value: s.description
                            }
                        })])])]), t("div", {
                            class: "lg-w-1-2 w-full kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-booking-form-wrap kmb-lg-widget-col-group "
                        }, [t(k.f, {
                            attrs: {
                                contactForm: s.contactForm,
                                hasPreviewIcon: !0
                            },
                            class: "kmb-widget-contact-form-left-btn-group"
                        })])])])])])])])])
                    }
                });
            e.default = y
        },
        789: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WidgetBookingSettingsT4V2", (function() {
                return F
            }));
            n(12);
            var l = n(7),
                o = n(0),
                r = n(3),
                c = n(11),
                d = n(6),
                f = (n(23), n(41), n(37), n(15), n(17), n(60), n(13)),
                m = n(10),
                v = n.n(m),
                k = n(5),
                w = n(8),
                h = n(304),
                y = n(146);

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
                    var n, l = Object(d.a)(t);
                    if (e) {
                        var o = Object(d.a)(this).constructor;
                        n = Reflect.construct(l, arguments, o)
                    } else n = l.apply(this, arguments);
                    return Object(c.a)(this, n)
                }
            }
            var F = function(t) {
                    Object(r.a)(n, t);
                    var e = x(n);

                    function n() {
                        return Object(o.a)(this, n), e.apply(this, arguments)
                    }
                    return n
                }(h.c),
                O = [w.f.Location, w.f.Service, w.f.StaffMember, w.f.Date],
                j = f.componentFactory.create({
                    props: {
                        widgetIndex: v.a.ofType().default(0),
                        settings: v.a.ofType().required,
                        isEnabledEditor: v.a.ofType().default(!1)
                    },
                    data: function() {
                        return {
                            formData: null,
                            bookingDetails: null
                        }
                    },
                    mounted: function() {
                        var t, e, n = this.$refs.booking_contact_form_t4_v2;
                        n && (this.formData = null !== (t = null == n ? void 0 : n.contactForm) && void 0 !== t ? t : null, this.bookingDetails = null !== (e = null == n ? void 0 : n.bookingDetails) && void 0 !== e ? e : null)
                    },
                    computed: {
                        summaryFields: function() {
                            return this.settings.contactForm.fields.filter((function(t) {
                                return O.includes(t.name)
                            }))
                        }
                    },
                    methods: {
                        getFieldLabel: function(t) {
                            var e = t || {},
                                label = e.label,
                                n = e.lczText;
                            return (null == n ? void 0 : n.lczValue) || label
                        },
                        renderFormSummary: function(t) {
                            var e = this;
                            if (this.settings.contactForm.fields && this.formData) {
                                var n, o, r = this.bookingDetails,
                                    c = r.locations,
                                    d = r.workers,
                                    f = r.services,
                                    m = r.request,
                                    data = (n = {}, Object(l.a)(n, w.f.Location, c || []), Object(l.a)(n, w.f.StaffMember, d || []), Object(l.a)(n, w.f.Service, f || []), n);
                                return t("div", {
                                    class: "kmb-widget-booking-summary-form lg-p-16 p-6"
                                }, [t("div", {
                                    class: "kmb-booking-form-summary-head mb-5"
                                }, [t(y.y, {
                                    class: "kmb-header-label kmb-booking-form-summary-title kmb-widget-title-h4",
                                    attrs: {
                                        label: "Summary:"
                                    }
                                })]), t("ul", {
                                    class: "kmb-widget-booking-summary-list"
                                }, [null === (o = this.summaryFields) || void 0 === o ? void 0 : o.map((function(n, l) {
                                    var o, r, label = null,
                                        c = n.key,
                                        d = n.name,
                                        f = e.formData.fields,
                                        m = e.getFieldLabel(n),
                                        v = (null == f || null === (o = f.find((function(t) {
                                            return t.key == c
                                        }))) || void 0 === o ? void 0 : o.value) || null,
                                        k = (null == f || null === (r = f.find((function(t) {
                                            return t.key == e.settings.contactForm.fields[l + 1].key
                                        }))) || void 0 === r ? void 0 : r.value) || null;
                                    if (v && data[d]) {
                                        var h, x, F = data[d].find((function(t) {
                                            return t.id == v
                                        }));
                                        label = null !== (h = null !== (x = null == F ? void 0 : F.title) && void 0 !== x ? x : null == F ? void 0 : F.firstName) && void 0 !== h ? h : v
                                    }
                                    return d == w.f.Date ? t("li", {
                                        class: "kmb-widget-xl-group flex"
                                    }, [t("div", {
                                        class: "flex flex-col"
                                    }, [m && t(y.y, {
                                        class: "kmb-inline-label kmb-date-label",
                                        attrs: {
                                            label: "".concat(m, " & ")
                                        }
                                    }), t("span", {
                                        class: "kmb-form-value"
                                    }, [v || "yyyy-mm-dd"])]), t("div", {
                                        class: "flex flex-col"
                                    }, [m && t(y.y, {
                                        class: "kmb-inline-label -ml-10",
                                        attrs: {
                                            label: "".concat(e.$t("labels.time"), ":")
                                        }
                                    }), t("span", {
                                        class: "kmb-form-value ml-2"
                                    }, [k || "hh:mm a"])])]) : t("li", {
                                        class: "kmb-widget-booking-summary-list-item kmb-widget-xl-group flex flex-col"
                                    }, [m && t(y.y, {
                                        class: "kmb-inline-label",
                                        attrs: {
                                            label: "".concat(m, ":")
                                        }
                                    }), t("span", {
                                        class: "kmb-form-value"
                                    }, [label || v || "-"])])
                                })), t("li", {
                                    class: "flex kmb-widget-el-group"
                                }, [t("div", {
                                    class: "kmb-widget-row"
                                }, [t("div", {
                                    class: "flex flex-col kmb-widget-col"
                                }, [t(y.y, {
                                    class: "kmb-inline-label kmb-date-label",
                                    attrs: {
                                        label: "".concat(this.$t("labels.duration"), ":")
                                    }
                                }), t("span", {
                                    class: "kmb-form-value"
                                }, [m.duration || "0 h 00 min"])]), t("div", {
                                    class: "flex flex-col kmb-widget-col"
                                }, [t(y.y, {
                                    class: "kmb-inline-label kmb-date-label",
                                    attrs: {
                                        label: "".concat(this.$t("labels.price"), ":")
                                    }
                                }), t("span", {
                                    class: "kmb-form-value"
                                }, [null != m && m.price ? Object(k.ib)(null == m ? void 0 : m.price) : "00.00", " USD"])])])])])])
                            }
                        }
                    },
                    render: function(t) {
                        var s = this.settings;
                        return t(y.eb, {
                            class: "kmb-widget-booking booking-t4 booking-t4-v2",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-container-fluid"
                        }, [this.isEnabledEditor && this.$scopedSlots.editor && this.$scopedSlots.editor({}), t("div", {
                            class: "kmb-widget-content-info booking-content"
                        }, [t("div", {
                            class: "kmb-widget-content kmb-widget-content-container"
                        }, [t("div", {
                            class: "kmb-widget-row"
                        }, [t("div", {
                            class: "lg-w-1-2 w-full kmb-widget-col"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [t("div", {
                            class: "kmb-widget-titles-info"
                        }, [t(y.ab, {
                            attrs: {
                                value: s.title,
                                widgetIndex: this.widgetIndex,
                                isEnabledDivider: !1
                            }
                        }), t(y.n, {
                            attrs: {
                                value: s.description
                            }
                        })]), t("div", {
                            class: "kmb-widget-booking-form-wrap kmb-lg-widget-col-group"
                        }, [t(y.f, {
                            attrs: {
                                contactForm: s.contactForm,
                                hasPreviewIcon: !0,
                                isEnabledLabel: !1
                            },
                            ref: "booking_contact_form_t4_v2",
                            class: "kmb-widget-form-border-bottom-fields kmb-widget-contact-form-left-btn-group"
                        })])])]), t("div", {
                            class: "lg-w-1-2 w-full kmb-widget-col lg-block hidden"
                        }, [t("div", {
                            class: "kmb-sm-widget-container"
                        }, [this.renderFormSummary(t)])])])])])])])
                    }
                });
            e.default = j
        }
    }
]);