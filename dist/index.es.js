import re, { createContext as te, useState as ne, useContext as ae } from "react";
var T = { exports: {} }, E = {};
var D;
function oe() {
  if (D) return E;
  D = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), d = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(f, o, u) {
    var i = null;
    if (u !== void 0 && (i = "" + u), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      u = {};
      for (var l in o)
        l !== "key" && (u[l] = o[l]);
    } else u = o;
    return o = u.ref, {
      $$typeof: s,
      type: f,
      key: i,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return E.Fragment = d, E.jsx = c, E.jsxs = c, E;
}
var _ = {};
var F;
function se() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case J:
          return "Profiler";
        case q:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case z:
            return e.displayName || "Context";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case k:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function c(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), d(e);
      }
    }
    function f(e) {
      if (e === p) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = x.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function i(e) {
      if (g.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function l(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function b() {
      var e = s(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, R, P) {
      var a = t.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: b
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function S(e, r, t, n, R, P) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (K(a)) {
            for (n = 0; n < a.length; n++)
              h(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(a);
      if (g.call(r, "key")) {
        a = s(e);
        var m = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", I[a + n] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          m,
          a
        ), I[a + n] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), i(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var w in r)
          w !== "key" && (t[w] = r[w]);
      } else t = r;
      return a && l(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        a,
        t,
        o(),
        R,
        P
      );
    }
    function h(e) {
      j(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? j(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function j(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var v = re, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), q = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), Z = /* @__PURE__ */ Symbol.for("react.activity"), Q = /* @__PURE__ */ Symbol.for("react.client.reference"), x = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, K = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, C = {}, Y = v.react_stack_bottom_frame.bind(
      v,
      u
    )(), $ = O(f(u)), I = {};
    _.Fragment = p, _.jsx = function(e, r, t) {
      var n = 1e4 > x.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : Y,
        n ? O(f(e)) : $
      );
    }, _.jsxs = function(e, r, t) {
      var n = 1e4 > x.recentlyCreatedOwnerStacks++;
      return S(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : Y,
        n ? O(f(e)) : $
      );
    };
  })()), _;
}
var L;
function ue() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? T.exports = oe() : T.exports = se()), T.exports;
}
var A = ue();
const M = te(void 0), ce = () => {
  const s = ae(M);
  if (!s) throw new Error("useToast must be used within a ToastProvider");
  return s;
}, ie = ({ children: s }) => {
  const [d, c] = ne([]), f = (o, u = "info") => {
    const i = Date.now();
    c((l) => [...l, { id: i, message: o, type: u }]), setTimeout(() => {
      c((l) => l.filter((b) => b.id !== i));
    }, 3e3);
  };
  return /* @__PURE__ */ A.jsxs(M.Provider, { value: { addToast: f }, children: [
    s,
    /* @__PURE__ */ A.jsx("div", { className: "toast-container", children: d.map((o) => /* @__PURE__ */ A.jsx("div", { className: `toast toast-${o.type}`, children: o.message }, o.id)) })
  ] });
};
export {
  ie as ToastProvider,
  ce as useToast
};
