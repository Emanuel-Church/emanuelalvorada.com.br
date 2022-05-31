var Of = Object.defineProperty,
  jf = Object.defineProperties;
var Df = Object.getOwnPropertyDescriptors;
var ro = Object.getOwnPropertySymbols;
var gs = Object.prototype.hasOwnProperty,
  ks = Object.prototype.propertyIsEnumerable;
var ys = (e, t, n) =>
    t in e
      ? Of(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  R = (e, t) => {
    for (var n in t || (t = {})) gs.call(t, n) && ys(e, n, t[n]);
    if (ro) for (var n of ro(t)) ks.call(t, n) && ys(e, n, t[n]);
    return e;
  },
  H = (e, t) => jf(e, Df(t));
var Je = (e, t) => {
  var n = {};
  for (var r in e) gs.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ro)
    for (var r of ro(e)) t.indexOf(r) < 0 && ks.call(e, r) && (n[r] = e[r]);
  return n;
};
const Af = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerpolicy && (l.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
};
Af();
var p = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kr = Symbol.for("react.element"),
  Ff = Symbol.for("react.portal"),
  zf = Symbol.for("react.fragment"),
  Wf = Symbol.for("react.strict_mode"),
  Uf = Symbol.for("react.profiler"),
  Bf = Symbol.for("react.provider"),
  Hf = Symbol.for("react.context"),
  Vf = Symbol.for("react.forward_ref"),
  Qf = Symbol.for("react.suspense"),
  Zf = Symbol.for("react.memo"),
  Kf = Symbol.for("react.lazy"),
  xs = Symbol.iterator;
function Yf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xs && e[xs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Qa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Za = Object.assign,
  Ka = {};
function nr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ka),
    (this.updater = n || Qa);
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ya() {}
Ya.prototype = nr.prototype;
function uu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ka),
    (this.updater = n || Qa);
}
var su = (uu.prototype = new Ya());
su.constructor = uu;
Za(su, nr.prototype);
su.isPureReactComponent = !0;
var ws = Array.isArray,
  Ga = Object.prototype.hasOwnProperty,
  au = { current: null },
  Xa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ja(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Ga.call(t, r) && !Xa.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return {
    $$typeof: Kr,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: au.current,
  };
}
function Gf(e, t) {
  return {
    $$typeof: Kr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function cu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kr;
}
function Xf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Es = /\/+/g;
function Rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Xf("" + e.key)
    : t.toString(36);
}
function Co(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kr:
          case Ff:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Rl(i, 0) : r),
      ws(o)
        ? ((n = ""),
          e != null && (n = e.replace(Es, "$&/") + "/"),
          Co(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (cu(o) &&
            (o = Gf(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Es, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ws(e)))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var a = r + Rl(l, u);
      i += Co(l, t, n, a, o);
    }
  else if (((a = Yf(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + Rl(l, u++)), (i += Co(l, t, n, a, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function oo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Co(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Jf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null },
  Lo = { transition: null },
  qf = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: Lo,
    ReactCurrentOwner: au,
  };
F.Children = {
  map: oo,
  forEach: function (e, t, n) {
    oo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      oo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!cu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = nr;
F.Fragment = zf;
F.Profiler = Uf;
F.PureComponent = uu;
F.StrictMode = Wf;
F.Suspense = Qf;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qf;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Za({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = au.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Ga.call(t, a) &&
        !Xa.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Kr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Hf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Bf, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Ja;
F.createFactory = function (e) {
  var t = Ja.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Vf, render: e };
};
F.isValidElement = cu;
F.lazy = function (e) {
  return { $$typeof: Kf, _payload: { _status: -1, _result: e }, _init: Jf };
};
F.memo = function (e, t) {
  return { $$typeof: Zf, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Lo.transition;
  Lo.transition = {};
  try {
    e();
  } finally {
    Lo.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Pe.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
F.useId = function () {
  return Pe.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Pe.current.useRef(e);
};
F.useState = function (e) {
  return Pe.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Pe.current.useTransition();
};
F.version = "18.1.0";
p.exports = F;
var D = p.exports,
  Ir = {},
  du = { exports: {} },
  Fe = {},
  qa = { exports: {} },
  ba = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, $) {
    var j = P.length;
    P.push($);
    e: for (; 0 < j; ) {
      var G = (j - 1) >>> 1,
        le = P[G];
      if (0 < o(le, $)) (P[G] = $), (P[j] = le), (j = G);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var $ = P[0],
      j = P.pop();
    if (j !== $) {
      P[0] = j;
      e: for (var G = 0, le = P.length, to = le >>> 1; G < to; ) {
        var Xt = 2 * (G + 1) - 1,
          $l = P[Xt],
          Jt = Xt + 1,
          no = P[Jt];
        if (0 > o($l, j))
          Jt < le && 0 > o(no, $l)
            ? ((P[G] = no), (P[Jt] = j), (G = Jt))
            : ((P[G] = $l), (P[Xt] = j), (G = Xt));
        else if (Jt < le && 0 > o(no, j)) (P[G] = no), (P[Jt] = j), (G = Jt);
        else break e;
      }
    }
    return $;
  }
  function o(P, $) {
    var j = P.sortIndex - $.sortIndex;
    return j !== 0 ? j : P.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    c = [],
    h = 1,
    y = null,
    v = 3,
    k = !1,
    g = !1,
    S = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(P) {
    for (var $ = n(c); $ !== null; ) {
      if ($.callback === null) r(c);
      else if ($.startTime <= P)
        r(c), ($.sortIndex = $.expirationTime), t(a, $);
      else break;
      $ = n(c);
    }
  }
  function x(P) {
    if (((S = !1), m(P), !g))
      if (n(a) !== null) (g = !0), K(w);
      else {
        var $ = n(c);
        $ !== null && ye(x, $.startTime - P);
      }
  }
  function w(P, $) {
    (g = !1), S && ((S = !1), d(M), (M = -1)), (k = !0);
    var j = v;
    try {
      for (
        m($), y = n(a);
        y !== null && (!(y.expirationTime > $) || (P && !de()));

      ) {
        var G = y.callback;
        if (typeof G == "function") {
          (y.callback = null), (v = y.priorityLevel);
          var le = G(y.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof le == "function" ? (y.callback = le) : y === n(a) && r(a),
            m($);
        } else r(a);
        y = n(a);
      }
      if (y !== null) var to = !0;
      else {
        var Xt = n(c);
        Xt !== null && ye(x, Xt.startTime - $), (to = !1);
      }
      return to;
    } finally {
      (y = null), (v = j), (k = !1);
    }
  }
  var N = !1,
    _ = null,
    M = -1,
    A = 5,
    O = -1;
  function de() {
    return !(e.unstable_now() - O < A);
  }
  function pt() {
    if (_ !== null) {
      var P = e.unstable_now();
      O = P;
      var $ = !0;
      try {
        $ = _(!0, P);
      } finally {
        $ ? it() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var it;
  if (typeof f == "function")
    it = function () {
      f(pt);
    };
  else if (typeof MessageChannel != "undefined") {
    var Pt = new MessageChannel(),
      Nt = Pt.port2;
    (Pt.port1.onmessage = pt),
      (it = function () {
        Nt.postMessage(null);
      });
  } else
    it = function () {
      C(pt, 0);
    };
  function K(P) {
    (_ = P), N || ((N = !0), it());
  }
  function ye(P, $) {
    M = C(function () {
      P(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || k || ((g = !0), K(w));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = v;
      }
      var j = v;
      v = $;
      try {
        return P();
      } finally {
        v = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, $) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var j = v;
      v = P;
      try {
        return $();
      } finally {
        v = j;
      }
    }),
    (e.unstable_scheduleCallback = function (P, $, j) {
      var G = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? G + j : G))
          : (j = G),
        P)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = j + le),
        (P = {
          id: h++,
          callback: $,
          priorityLevel: P,
          startTime: j,
          expirationTime: le,
          sortIndex: -1,
        }),
        j > G
          ? ((P.sortIndex = j),
            t(c, P),
            n(a) === null &&
              P === n(c) &&
              (S ? (d(M), (M = -1)) : (S = !0), ye(x, j - G)))
          : ((P.sortIndex = le), t(a, P), g || k || ((g = !0), K(w))),
        P
      );
    }),
    (e.unstable_shouldYield = de),
    (e.unstable_wrapCallback = function (P) {
      var $ = v;
      return function () {
        var j = v;
        v = $;
        try {
          return P.apply(this, arguments);
        } finally {
          v = j;
        }
      };
    });
})(ba);
qa.exports = ba;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ec = p.exports,
  Ae = qa.exports;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var tc = new Set(),
  Tr = {};
function fn(e, t) {
  Xn(e, t), Xn(e + "Capture", t);
}
function Xn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) tc.add(t[e]);
}
var Et = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  ci = Object.prototype.hasOwnProperty,
  bf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ss = {},
  Cs = {};
function ep(e) {
  return ci.call(Cs, e)
    ? !0
    : ci.call(Ss, e)
    ? !1
    : bf.test(e)
    ? (Cs[e] = !0)
    : ((Ss[e] = !0), !1);
}
function tp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function np(e, t, n, r) {
  if (t === null || typeof t == "undefined" || tp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fu = /[\-:]([a-z])/g;
function pu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fu, pu);
    me[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fu, pu);
    me[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(fu, pu);
  me[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hu(e, t, n, r) {
  var o = me.hasOwnProperty(t) ? me[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (np(t, n, o, r) && (n = null),
    r || o === null
      ? ep(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lo = Symbol.for("react.element"),
  Tn = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  mu = Symbol.for("react.strict_mode"),
  di = Symbol.for("react.profiler"),
  nc = Symbol.for("react.provider"),
  rc = Symbol.for("react.context"),
  vu = Symbol.for("react.forward_ref"),
  fi = Symbol.for("react.suspense"),
  pi = Symbol.for("react.suspense_list"),
  yu = Symbol.for("react.memo"),
  Tt = Symbol.for("react.lazy"),
  oc = Symbol.for("react.offscreen"),
  Ls = Symbol.iterator;
function lr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ls && e[Ls]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  Ol;
function mr(e) {
  if (Ol === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ol = (t && t[1]) || "";
    }
  return (
    `
` +
    Ol +
    e
  );
}
var jl = !1;
function Dl(e, t) {
  if (!e || jl) return "";
  jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          u = l.length - 1;
        1 <= i && 0 <= u && o[i] !== l[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (o[i] !== l[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || o[i] !== l[u])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (jl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? mr(e) : "";
}
function rp(e) {
  switch (e.tag) {
    case 5:
      return mr(e.type);
    case 16:
      return mr("Lazy");
    case 13:
      return mr("Suspense");
    case 19:
      return mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Dl(e.type, !1)), e;
    case 11:
      return (e = Dl(e.type.render, !1)), e;
    case 1:
      return (e = Dl(e.type, !0)), e;
    default:
      return "";
  }
}
function hi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case Tn:
      return "Portal";
    case di:
      return "Profiler";
    case mu:
      return "StrictMode";
    case fi:
      return "Suspense";
    case pi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case rc:
        return (e.displayName || "Context") + ".Consumer";
      case nc:
        return (e._context.displayName || "Context") + ".Provider";
      case vu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case yu:
        return (
          (t = e.displayName || null), t !== null ? t : hi(e.type) || "Memo"
        );
      case Tt:
        (t = e._payload), (e = e._init);
        try {
          return hi(e(t));
        } catch {}
    }
  return null;
}
function op(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return hi(t);
    case 8:
      return t === mu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Bt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function lc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function lp(e) {
  var t = lc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != "undefined" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function io(e) {
  e._valueTracker || (e._valueTracker = lp(e));
}
function ic(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = lc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function jo(e) {
  if (
    ((e = e || (typeof document != "undefined" ? document : void 0)),
    typeof e == "undefined")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mi(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Ps(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Bt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function uc(e, t) {
  (t = t.checked), t != null && hu(e, "checked", t, !1);
}
function vi(e, t) {
  uc(e, t);
  var n = Bt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? yi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && yi(e, t.type, Bt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ns(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function yi(e, t, n) {
  (t !== "number" || jo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function gi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function _s(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Bt(n) };
}
function sc(e, t) {
  var n = Bt(t.value),
    r = Bt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Is(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ac(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ki(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ac(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var uo,
  cc = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        uo = uo || document.createElement("div"),
          uo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = uo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ip = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function (e) {
  ip.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e]);
  });
});
function dc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xr.hasOwnProperty(e) && xr[e])
    ? ("" + t).trim()
    : t + "px";
}
function fc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = dc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var up = q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xi(e, t) {
  if (t) {
    if (up[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function wi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ei = null;
function gu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Si = null,
  Hn = null,
  Vn = null;
function Ts(e) {
  if ((e = Xr(e))) {
    if (typeof Si != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = pl(t)), Si(e.stateNode, e.type, t));
  }
}
function pc(e) {
  Hn ? (Vn ? Vn.push(e) : (Vn = [e])) : (Hn = e);
}
function hc() {
  if (Hn) {
    var e = Hn,
      t = Vn;
    if (((Vn = Hn = null), Ts(e), t)) for (e = 0; e < t.length; e++) Ts(t[e]);
  }
}
function mc(e, t) {
  return e(t);
}
function vc() {}
var Al = !1;
function yc(e, t, n) {
  if (Al) return e(t, n);
  Al = !0;
  try {
    return mc(e, t, n);
  } finally {
    (Al = !1), (Hn !== null || Vn !== null) && (vc(), hc());
  }
}
function $r(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Ci = !1;
if (Et)
  try {
    var ir = {};
    Object.defineProperty(ir, "passive", {
      get: function () {
        Ci = !0;
      },
    }),
      window.addEventListener("test", ir, ir),
      window.removeEventListener("test", ir, ir);
  } catch {
    Ci = !1;
  }
function sp(e, t, n, r, o, l, i, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var wr = !1,
  Do = null,
  Ao = !1,
  Li = null,
  ap = {
    onError: function (e) {
      (wr = !0), (Do = e);
    },
  };
function cp(e, t, n, r, o, l, i, u, a) {
  (wr = !1), (Do = null), sp.apply(ap, arguments);
}
function dp(e, t, n, r, o, l, i, u, a) {
  if ((cp.apply(this, arguments), wr)) {
    if (wr) {
      var c = Do;
      (wr = !1), (Do = null);
    } else throw Error(L(198));
    Ao || ((Ao = !0), (Li = c));
  }
}
function pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function gc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ms(e) {
  if (pn(e) !== e) throw Error(L(188));
}
function fp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Ms(o), e;
        if (l === r) return Ms(o), t;
        l = l.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, u = o.child; u; ) {
        if (u === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (u === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = l.child; u; ) {
          if (u === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (u === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function kc(e) {
  return (e = fp(e)), e !== null ? xc(e) : null;
}
function xc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wc = Ae.unstable_scheduleCallback,
  $s = Ae.unstable_cancelCallback,
  pp = Ae.unstable_shouldYield,
  hp = Ae.unstable_requestPaint,
  re = Ae.unstable_now,
  mp = Ae.unstable_getCurrentPriorityLevel,
  ku = Ae.unstable_ImmediatePriority,
  Ec = Ae.unstable_UserBlockingPriority,
  Fo = Ae.unstable_NormalPriority,
  vp = Ae.unstable_LowPriority,
  Sc = Ae.unstable_IdlePriority,
  al = null,
  ct = null;
function yp(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ot = Math.clz32 ? Math.clz32 : xp,
  gp = Math.log,
  kp = Math.LN2;
function xp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((gp(e) / kp) | 0)) | 0;
}
var so = 64,
  ao = 4194304;
function yr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function zo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? (r = yr(u)) : ((l &= i), l !== 0 && (r = yr(l)));
  } else (i = n & ~o), i !== 0 ? (r = yr(i)) : l !== 0 && (r = yr(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & o) === 0 &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ot(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function wp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ep(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - ot(l),
      u = 1 << i,
      a = o[i];
    a === -1
      ? ((u & n) === 0 || (u & r) !== 0) && (o[i] = wp(u, t))
      : a <= t && (e.expiredLanes |= u),
      (l &= ~u);
  }
}
function Pi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Cc() {
  var e = so;
  return (so <<= 1), (so & 4194240) === 0 && (so = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Yr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ot(t)),
    (e[t] = n);
}
function Sp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ot(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function xu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var U = 0;
function Lc(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Pc,
  wu,
  Nc,
  _c,
  Ic,
  Ni = !1,
  co = [],
  Dt = null,
  At = null,
  Ft = null,
  Rr = new Map(),
  Or = new Map(),
  $t = [],
  Cp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Rs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dt = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Ft = null;
      break;
    case "pointerover":
    case "pointerout":
      Rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Or.delete(t.pointerId);
  }
}
function ur(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Xr(t)), t !== null && wu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Lp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Dt = ur(Dt, e, t, n, r, o)), !0;
    case "dragenter":
      return (At = ur(At, e, t, n, r, o)), !0;
    case "mouseover":
      return (Ft = ur(Ft, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Rr.set(l, ur(Rr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Or.set(l, ur(Or.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Tc(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gc(n)), t !== null)) {
          (e.blockedOn = t),
            Ic(e.priority, function () {
              Nc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Po(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ei = r), n.target.dispatchEvent(r), (Ei = null);
    } else return (t = Xr(n)), t !== null && wu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Os(e, t, n) {
  Po(e) && n.delete(t);
}
function Pp() {
  (Ni = !1),
    Dt !== null && Po(Dt) && (Dt = null),
    At !== null && Po(At) && (At = null),
    Ft !== null && Po(Ft) && (Ft = null),
    Rr.forEach(Os),
    Or.forEach(Os);
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ni ||
      ((Ni = !0),
      Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority, Pp)));
}
function jr(e) {
  function t(o) {
    return sr(o, e);
  }
  if (0 < co.length) {
    sr(co[0], e);
    for (var n = 1; n < co.length; n++) {
      var r = co[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Dt !== null && sr(Dt, e),
      At !== null && sr(At, e),
      Ft !== null && sr(Ft, e),
      Rr.forEach(t),
      Or.forEach(t),
      n = 0;
    n < $t.length;
    n++
  )
    (r = $t[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < $t.length && ((n = $t[0]), n.blockedOn === null); )
    Tc(n), n.blockedOn === null && $t.shift();
}
var Qn = Lt.ReactCurrentBatchConfig,
  Wo = !0;
function Np(e, t, n, r) {
  var o = U,
    l = Qn.transition;
  Qn.transition = null;
  try {
    (U = 1), Eu(e, t, n, r);
  } finally {
    (U = o), (Qn.transition = l);
  }
}
function _p(e, t, n, r) {
  var o = U,
    l = Qn.transition;
  Qn.transition = null;
  try {
    (U = 4), Eu(e, t, n, r);
  } finally {
    (U = o), (Qn.transition = l);
  }
}
function Eu(e, t, n, r) {
  if (Wo) {
    var o = _i(e, t, n, r);
    if (o === null) Yl(e, t, r, Uo, n), Rs(e, r);
    else if (Lp(o, e, t, n, r)) r.stopPropagation();
    else if ((Rs(e, r), t & 4 && -1 < Cp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Xr(o);
        if (
          (l !== null && Pc(l),
          (l = _i(e, t, n, r)),
          l === null && Yl(e, t, r, Uo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Yl(e, t, r, null, n);
  }
}
var Uo = null;
function _i(e, t, n, r) {
  if (((Uo = null), (e = gu(r)), (e = tn(e)), e !== null))
    if (((t = pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Uo = e), null;
}
function Mc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (mp()) {
        case ku:
          return 1;
        case Ec:
          return 4;
        case Fo:
        case vp:
          return 16;
        case Sc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ot = null,
  Su = null,
  No = null;
function $c() {
  if (No) return No;
  var e,
    t = Su,
    n = t.length,
    r,
    o = "value" in Ot ? Ot.value : Ot.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (No = o.slice(e, 1 < r ? 1 - r : void 0));
}
function _o(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fo() {
  return !0;
}
function js() {
  return !1;
}
function ze(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(l) : l[u]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? fo
        : js),
      (this.isPropagationStopped = js),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fo));
      },
      persist: function () {},
      isPersistent: fo,
    }),
    t
  );
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cu = ze(rr),
  Gr = q({}, rr, { view: 0, detail: 0 }),
  Ip = ze(Gr),
  zl,
  Wl,
  ar,
  cl = q({}, Gr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Lu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ar &&
            (ar && e.type === "mousemove"
              ? ((zl = e.screenX - ar.screenX), (Wl = e.screenY - ar.screenY))
              : (Wl = zl = 0),
            (ar = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Wl;
    },
  }),
  Ds = ze(cl),
  Tp = q({}, cl, { dataTransfer: 0 }),
  Mp = ze(Tp),
  $p = q({}, Gr, { relatedTarget: 0 }),
  Ul = ze($p),
  Rp = q({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Op = ze(Rp),
  jp = q({}, rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Dp = ze(jp),
  Ap = q({}, rr, { data: 0 }),
  As = ze(Ap),
  Fp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Wp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Up(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wp[e]) ? !!t[e] : !1;
}
function Lu() {
  return Up;
}
var Bp = q({}, Gr, {
    key: function (e) {
      if (e.key) {
        var t = Fp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _o(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lu,
    charCode: function (e) {
      return e.type === "keypress" ? _o(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _o(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Hp = ze(Bp),
  Vp = q({}, cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Fs = ze(Vp),
  Qp = q({}, Gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lu,
  }),
  Zp = ze(Qp),
  Kp = q({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yp = ze(Kp),
  Gp = q({}, cl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Xp = ze(Gp),
  Jp = [9, 13, 27, 32],
  Pu = Et && "CompositionEvent" in window,
  Er = null;
Et && "documentMode" in document && (Er = document.documentMode);
var qp = Et && "TextEvent" in window && !Er,
  Rc = Et && (!Pu || (Er && 8 < Er && 11 >= Er)),
  zs = String.fromCharCode(32),
  Ws = !1;
function Oc(e, t) {
  switch (e) {
    case "keyup":
      return Jp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function jc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $n = !1;
function bp(e, t) {
  switch (e) {
    case "compositionend":
      return jc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ws = !0), zs);
    case "textInput":
      return (e = t.data), e === zs && Ws ? null : e;
    default:
      return null;
  }
}
function e1(e, t) {
  if ($n)
    return e === "compositionend" || (!Pu && Oc(e, t))
      ? ((e = $c()), (No = Su = Ot = null), ($n = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var t1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Us(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!t1[e.type] : t === "textarea";
}
function Dc(e, t, n, r) {
  pc(r),
    (t = Bo(t, "onChange")),
    0 < t.length &&
      ((n = new Cu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Sr = null,
  Dr = null;
function n1(e) {
  Kc(e, 0);
}
function dl(e) {
  var t = jn(e);
  if (ic(t)) return e;
}
function r1(e, t) {
  if (e === "change") return t;
}
var Ac = !1;
if (Et) {
  var Bl;
  if (Et) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var Bs = document.createElement("div");
      Bs.setAttribute("oninput", "return;"),
        (Hl = typeof Bs.oninput == "function");
    }
    Bl = Hl;
  } else Bl = !1;
  Ac = Bl && (!document.documentMode || 9 < document.documentMode);
}
function Hs() {
  Sr && (Sr.detachEvent("onpropertychange", Fc), (Dr = Sr = null));
}
function Fc(e) {
  if (e.propertyName === "value" && dl(Dr)) {
    var t = [];
    Dc(t, Dr, e, gu(e)), yc(n1, t);
  }
}
function o1(e, t, n) {
  e === "focusin"
    ? (Hs(), (Sr = t), (Dr = n), Sr.attachEvent("onpropertychange", Fc))
    : e === "focusout" && Hs();
}
function l1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return dl(Dr);
}
function i1(e, t) {
  if (e === "click") return dl(t);
}
function u1(e, t) {
  if (e === "input" || e === "change") return dl(t);
}
function s1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lt = typeof Object.is == "function" ? Object.is : s1;
function Ar(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ci.call(t, o) || !lt(e[o], t[o])) return !1;
  }
  return !0;
}
function Vs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qs(e, t) {
  var n = Vs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Vs(n);
  }
}
function zc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Wc() {
  for (var e = window, t = jo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = jo(e.document);
  }
  return t;
}
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function a1(e) {
  var t = Wc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Nu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Qs(n, l));
        var i = Qs(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var c1 = Et && "documentMode" in document && 11 >= document.documentMode,
  Rn = null,
  Ii = null,
  Cr = null,
  Ti = !1;
function Zs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ti ||
    Rn == null ||
    Rn !== jo(r) ||
    ((r = Rn),
    "selectionStart" in r && Nu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Cr && Ar(Cr, r)) ||
      ((Cr = r),
      (r = Bo(Ii, "onSelect")),
      0 < r.length &&
        ((t = new Cu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Rn))));
}
function po(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var On = {
    animationend: po("Animation", "AnimationEnd"),
    animationiteration: po("Animation", "AnimationIteration"),
    animationstart: po("Animation", "AnimationStart"),
    transitionend: po("Transition", "TransitionEnd"),
  },
  Vl = {},
  Uc = {};
Et &&
  ((Uc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete On.animationend.animation,
    delete On.animationiteration.animation,
    delete On.animationstart.animation),
  "TransitionEvent" in window || delete On.transitionend.transition);
function fl(e) {
  if (Vl[e]) return Vl[e];
  if (!On[e]) return e;
  var t = On[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Uc) return (Vl[e] = t[n]);
  return e;
}
var Bc = fl("animationend"),
  Hc = fl("animationiteration"),
  Vc = fl("animationstart"),
  Qc = fl("transitionend"),
  Zc = new Map(),
  Ks =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Zt(e, t) {
  Zc.set(e, t), fn(t, [e]);
}
for (var Ql = 0; Ql < Ks.length; Ql++) {
  var Zl = Ks[Ql],
    d1 = Zl.toLowerCase(),
    f1 = Zl[0].toUpperCase() + Zl.slice(1);
  Zt(d1, "on" + f1);
}
Zt(Bc, "onAnimationEnd");
Zt(Hc, "onAnimationIteration");
Zt(Vc, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(Qc, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
fn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
fn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
fn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
fn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var gr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  p1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function Ys(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), dp(r, t, void 0, e), (e.currentTarget = null);
}
function Kc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), a !== l && o.isPropagationStopped())) break e;
          Ys(o, u, c), (l = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            a !== l && o.isPropagationStopped())
          )
            break e;
          Ys(o, u, c), (l = a);
        }
    }
  }
  if (Ao) throw ((e = Li), (Ao = !1), (Li = null), e);
}
function V(e, t) {
  var n = t[ji];
  n === void 0 && (n = t[ji] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Yc(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
  var r = 0;
  t && (r |= 4), Yc(n, e, r, t);
}
var ho = "_reactListening" + Math.random().toString(36).slice(2);
function Fr(e) {
  if (!e[ho]) {
    (e[ho] = !0),
      tc.forEach(function (n) {
        n !== "selectionchange" && (p1.has(n) || Kl(n, !1, e), Kl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ho] || ((t[ho] = !0), Kl("selectionchange", !1, t));
  }
}
function Yc(e, t, n, r) {
  switch (Mc(t)) {
    case 1:
      var o = Np;
      break;
    case 4:
      o = _p;
      break;
    default:
      o = Eu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ci ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Yl(e, t, n, r, o) {
  var l = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = tn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  yc(function () {
    var c = l,
      h = gu(n),
      y = [];
    e: {
      var v = Zc.get(e);
      if (v !== void 0) {
        var k = Cu,
          g = e;
        switch (e) {
          case "keypress":
            if (_o(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Hp;
            break;
          case "focusin":
            (g = "focus"), (k = Ul);
            break;
          case "focusout":
            (g = "blur"), (k = Ul);
            break;
          case "beforeblur":
          case "afterblur":
            k = Ul;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Ds;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Mp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Zp;
            break;
          case Bc:
          case Hc:
          case Vc:
            k = Op;
            break;
          case Qc:
            k = Yp;
            break;
          case "scroll":
            k = Ip;
            break;
          case "wheel":
            k = Xp;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Dp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Fs;
        }
        var S = (t & 4) !== 0,
          C = !S && e === "scroll",
          d = S ? (v !== null ? v + "Capture" : null) : v;
        S = [];
        for (var f = c, m; f !== null; ) {
          m = f;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              d !== null && ((x = $r(f, d)), x != null && S.push(zr(f, x, m)))),
            C)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((v = new k(v, g, null, n, h)), y.push({ event: v, listeners: S }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Ei &&
            (g = n.relatedTarget || n.fromElement) &&
            (tn(g) || g[St]))
        )
          break e;
        if (
          (k || v) &&
          ((v =
            h.window === h
              ? h
              : (v = h.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          k
            ? ((g = n.relatedTarget || n.toElement),
              (k = c),
              (g = g ? tn(g) : null),
              g !== null &&
                ((C = pn(g)), g !== C || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((k = null), (g = c)),
          k !== g)
        ) {
          if (
            ((S = Ds),
            (x = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Fs),
              (x = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (C = k == null ? v : jn(k)),
            (m = g == null ? v : jn(g)),
            (v = new S(x, f + "leave", k, n, h)),
            (v.target = C),
            (v.relatedTarget = m),
            (x = null),
            tn(h) === c &&
              ((S = new S(d, f + "enter", g, n, h)),
              (S.target = m),
              (S.relatedTarget = C),
              (x = S)),
            (C = x),
            k && g)
          )
            t: {
              for (S = k, d = g, f = 0, m = S; m; m = _n(m)) f++;
              for (m = 0, x = d; x; x = _n(x)) m++;
              for (; 0 < f - m; ) (S = _n(S)), f--;
              for (; 0 < m - f; ) (d = _n(d)), m--;
              for (; f--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                (S = _n(S)), (d = _n(d));
              }
              S = null;
            }
          else S = null;
          k !== null && Gs(y, v, k, S, !1),
            g !== null && C !== null && Gs(y, C, g, S, !0);
        }
      }
      e: {
        if (
          ((v = c ? jn(c) : window),
          (k = v.nodeName && v.nodeName.toLowerCase()),
          k === "select" || (k === "input" && v.type === "file"))
        )
          var w = r1;
        else if (Us(v))
          if (Ac) w = u1;
          else {
            w = l1;
            var N = o1;
          }
        else
          (k = v.nodeName) &&
            k.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (w = i1);
        if (w && (w = w(e, c))) {
          Dc(y, w, n, h);
          break e;
        }
        N && N(e, v, c),
          e === "focusout" &&
            (N = v._wrapperState) &&
            N.controlled &&
            v.type === "number" &&
            yi(v, "number", v.value);
      }
      switch (((N = c ? jn(c) : window), e)) {
        case "focusin":
          (Us(N) || N.contentEditable === "true") &&
            ((Rn = N), (Ii = c), (Cr = null));
          break;
        case "focusout":
          Cr = Ii = Rn = null;
          break;
        case "mousedown":
          Ti = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ti = !1), Zs(y, n, h);
          break;
        case "selectionchange":
          if (c1) break;
        case "keydown":
        case "keyup":
          Zs(y, n, h);
      }
      var _;
      if (Pu)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        $n
          ? Oc(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (Rc &&
          n.locale !== "ko" &&
          ($n || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && $n && (_ = $c())
            : ((Ot = h),
              (Su = "value" in Ot ? Ot.value : Ot.textContent),
              ($n = !0))),
        (N = Bo(c, M)),
        0 < N.length &&
          ((M = new As(M, e, null, n, h)),
          y.push({ event: M, listeners: N }),
          _ ? (M.data = _) : ((_ = jc(n)), _ !== null && (M.data = _)))),
        (_ = qp ? bp(e, n) : e1(e, n)) &&
          ((c = Bo(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new As("onBeforeInput", "beforeinput", null, n, h)),
            y.push({ event: h, listeners: c }),
            (h.data = _)));
    }
    Kc(y, t);
  });
}
function zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Bo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = $r(e, n)),
      l != null && r.unshift(zr(e, l, o)),
      (l = $r(e, t)),
      l != null && r.push(zr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gs(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      o
        ? ((a = $r(n, l)), a != null && i.unshift(zr(n, a, u)))
        : o || ((a = $r(n, l)), a != null && i.push(zr(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var h1 = /\r\n?/g,
  m1 = /\u0000|\uFFFD/g;
function Xs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      h1,
      `
`
    )
    .replace(m1, "");
}
function mo(e, t, n) {
  if (((t = Xs(t)), Xs(e) !== t && n)) throw Error(L(425));
}
function Ho() {}
var Mi = null,
  $i = null;
function Ri(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Oi = typeof setTimeout == "function" ? setTimeout : void 0,
  v1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Js = typeof Promise == "function" ? Promise : void 0,
  y1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Js != "undefined"
      ? function (e) {
          return Js.resolve(null).then(e).catch(g1);
        }
      : Oi;
function g1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Gl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  jr(t);
}
function vt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var or = Math.random().toString(36).slice(2),
  at = "__reactFiber$" + or,
  Wr = "__reactProps$" + or,
  St = "__reactContainer$" + or,
  ji = "__reactEvents$" + or,
  k1 = "__reactListeners$" + or,
  x1 = "__reactHandles$" + or;
function tn(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qs(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = qs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Xr(e) {
  return (
    (e = e[at] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function pl(e) {
  return e[Wr] || null;
}
var Di = [],
  Dn = -1;
function Kt(e) {
  return { current: e };
}
function Q(e) {
  0 > Dn || ((e.current = Di[Dn]), (Di[Dn] = null), Dn--);
}
function B(e, t) {
  Dn++, (Di[Dn] = e.current), (e.current = t);
}
var Ht = {},
  Ee = Kt(Ht),
  Me = Kt(!1),
  ln = Ht;
function Jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function Vo() {
  Q(Me), Q(Ee);
}
function bs(e, t, n) {
  if (Ee.current !== Ht) throw Error(L(168));
  B(Ee, t), B(Me, n);
}
function Gc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, op(e) || "Unknown", o));
  return q({}, n, r);
}
function Qo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ht),
    (ln = Ee.current),
    B(Ee, e),
    B(Me, Me.current),
    !0
  );
}
function ea(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = Gc(e, t, ln)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Q(Me),
      Q(Ee),
      B(Ee, e))
    : Q(Me),
    B(Me, n);
}
var mt = null,
  hl = !1,
  Xl = !1;
function Xc(e) {
  mt === null ? (mt = [e]) : mt.push(e);
}
function w1(e) {
  (hl = !0), Xc(e);
}
function Yt() {
  if (!Xl && mt !== null) {
    Xl = !0;
    var e = 0,
      t = U;
    try {
      var n = mt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (mt = null), (hl = !1);
    } catch (o) {
      throw (mt !== null && (mt = mt.slice(e + 1)), wc(ku, Yt), o);
    } finally {
      (U = t), (Xl = !1);
    }
  }
  return null;
}
var E1 = Lt.ReactCurrentBatchConfig;
function be(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Zo = Kt(null),
  Ko = null,
  An = null,
  _u = null;
function Iu() {
  _u = An = Ko = null;
}
function Tu(e) {
  var t = Zo.current;
  Q(Zo), (e._currentValue = t);
}
function Ai(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zn(e, t) {
  (Ko = e),
    (_u = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Te = !0), (e.firstContext = null));
}
function Ze(e) {
  var t = e._currentValue;
  if (_u !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (Ko === null) throw Error(L(308));
      (An = e), (Ko.dependencies = { lanes: 0, firstContext: e });
    } else An = An.next = e;
  return t;
}
var nt = null,
  Mt = !1;
function Mu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Jc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function zt(e, t) {
  var n = e.updateQueue;
  n !== null &&
    ((n = n.shared),
    Wd(e)
      ? ((e = n.interleaved),
        e === null
          ? ((t.next = t), nt === null ? (nt = [n]) : nt.push(n))
          : ((t.next = e.next), (e.next = t)),
        (n.interleaved = t))
      : ((e = n.pending),
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (n.pending = t)));
}
function Io(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xu(e, n);
  }
}
function ta(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Yo(e, t, n, r) {
  var o = e.updateQueue;
  Mt = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var a = u,
      c = a.next;
    (a.next = null), i === null ? (l = c) : (i.next = c), (i = a);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var y = o.baseState;
    (i = 0), (h = c = a = null), (u = l);
    do {
      var v = u.lane,
        k = u.eventTime;
      if ((r & v) === v) {
        h !== null &&
          (h = h.next =
            {
              eventTime: k,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var g = e,
            S = u;
          switch (((v = t), (k = n), S.tag)) {
            case 1:
              if (((g = S.payload), typeof g == "function")) {
                y = g.call(k, y, v);
                break e;
              }
              y = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = S.payload),
                (v = typeof g == "function" ? g.call(k, y, v) : g),
                v == null)
              )
                break e;
              y = q({}, y, v);
              break e;
            case 2:
              Mt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (v = o.effects),
          v === null ? (o.effects = [u]) : v.push(u));
      } else
        (k = {
          eventTime: k,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = k), (a = y)) : (h = h.next = k),
          (i |= v);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (v = u),
          (u = v.next),
          (v.next = null),
          (o.lastBaseUpdate = v),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (a = y),
      (o.baseState = a),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (an |= i), (e.lanes = i), (e.memoizedState = y);
  }
}
function na(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(L(191, o));
        o.call(r);
      }
    }
}
var qc = new ec.Component().refs;
function Fi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ml = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      o = Ut(e),
      l = wt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      zt(e, l),
      (t = Ve(e, o, r)),
      t !== null && Io(t, e, o);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      o = Ut(e),
      l = wt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      zt(e, l),
      (t = Ve(e, o, r)),
      t !== null && Io(t, e, o);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ce(),
      r = Ut(e),
      o = wt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      zt(e, o),
      (t = Ve(e, r, n)),
      t !== null && Io(t, e, r);
  },
};
function ra(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ar(n, r) || !Ar(o, l)
      : !0
  );
}
function bc(e, t, n) {
  var r = !1,
    o = Ht,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ze(l))
      : ((o = $e(t) ? ln : Ee.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Jn(e, o) : Ht)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ml),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function oa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ml.enqueueReplaceState(t, t.state, null);
}
function zi(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = qc), Mu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Ze(l))
    : ((l = $e(t) ? ln : Ee.current), (o.context = Jn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Fi(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ml.enqueueReplaceState(o, o.state, null),
      Yo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
var Fn = [],
  zn = 0,
  Go = null,
  Xo = 0,
  We = [],
  Ue = 0,
  un = null,
  yt = 1,
  gt = "";
function bt(e, t) {
  (Fn[zn++] = Xo), (Fn[zn++] = Go), (Go = e), (Xo = t);
}
function ed(e, t, n) {
  (We[Ue++] = yt), (We[Ue++] = gt), (We[Ue++] = un), (un = e);
  var r = yt;
  e = gt;
  var o = 32 - ot(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - ot(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (yt = (1 << (32 - ot(t) + o)) | (n << o) | r),
      (gt = l + e);
  } else (yt = (1 << l) | (n << o) | r), (gt = e);
}
function $u(e) {
  e.return !== null && (bt(e, 1), ed(e, 1, 0));
}
function Ru(e) {
  for (; e === Go; )
    (Go = Fn[--zn]), (Fn[zn] = null), (Xo = Fn[--zn]), (Fn[zn] = null);
  for (; e === un; )
    (un = We[--Ue]),
      (We[Ue] = null),
      (gt = We[--Ue]),
      (We[Ue] = null),
      (yt = We[--Ue]),
      (We[Ue] = null);
}
var De = null,
  Ie = null,
  Y = !1,
  tt = null;
function td(e, t) {
  var n = Be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function la(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (De = e), (Ie = vt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (De = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = un !== null ? { id: yt, overflow: gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (De = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ui(e) {
  if (Y) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!la(e, t)) {
        if (Wi(e)) throw Error(L(418));
        t = vt(n.nextSibling);
        var r = De;
        t && la(e, t)
          ? td(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (De = e));
      }
    } else {
      if (Wi(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), (De = e);
    }
  }
}
function ia(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  De = e;
}
function cr(e) {
  if (e !== De) return !1;
  if (!Y) return ia(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ri(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if (Wi(e)) {
      for (e = Ie; e; ) e = vt(e.nextSibling);
      throw Error(L(418));
    }
    for (; t; ) td(e, t), (t = vt(t.nextSibling));
  }
  if ((ia(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = vt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = De ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function qn() {
  (Ie = De = null), (Y = !1);
}
function Ou(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
function dr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var u = o.refs;
            u === qc && (u = o.refs = {}),
              i === null ? delete u[l] : (u[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function vo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ua(e) {
  var t = e._init;
  return t(e._payload);
}
function nd(e) {
  function t(d, f) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [f]), (d.flags |= 16)) : m.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function o(d, f) {
    return (d = Vt(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, f, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((d.flags |= 2), f) : m)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, m, x) {
    return f === null || f.tag !== 6
      ? ((f = ni(m, d.mode, x)), (f.return = d), f)
      : ((f = o(f, m)), (f.return = d), f);
  }
  function a(d, f, m, x) {
    var w = m.type;
    return w === Mn
      ? h(d, f, m.props.children, x, m.key)
      : f !== null &&
        (f.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Tt &&
            ua(w) === f.type))
      ? ((x = o(f, m.props)), (x.ref = dr(d, f, m)), (x.return = d), x)
      : ((x = Oo(m.type, m.key, m.props, null, d.mode, x)),
        (x.ref = dr(d, f, m)),
        (x.return = d),
        x);
  }
  function c(d, f, m, x) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = ri(m, d.mode, x)), (f.return = d), f)
      : ((f = o(f, m.children || [])), (f.return = d), f);
  }
  function h(d, f, m, x, w) {
    return f === null || f.tag !== 7
      ? ((f = on(m, d.mode, x, w)), (f.return = d), f)
      : ((f = o(f, m)), (f.return = d), f);
  }
  function y(d, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = ni("" + f, d.mode, m)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case lo:
          return (
            (m = Oo(f.type, f.key, f.props, null, d.mode, m)),
            (m.ref = dr(d, null, f)),
            (m.return = d),
            m
          );
        case Tn:
          return (f = ri(f, d.mode, m)), (f.return = d), f;
        case Tt:
          var x = f._init;
          return y(d, x(f._payload), m);
      }
      if (vr(f) || lr(f))
        return (f = on(f, d.mode, m, null)), (f.return = d), f;
      vo(d, f);
    }
    return null;
  }
  function v(d, f, m, x) {
    var w = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return w !== null ? null : u(d, f, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case lo:
          return m.key === w ? a(d, f, m, x) : null;
        case Tn:
          return m.key === w ? c(d, f, m, x) : null;
        case Tt:
          return (w = m._init), v(d, f, w(m._payload), x);
      }
      if (vr(m) || lr(m)) return w !== null ? null : h(d, f, m, x, null);
      vo(d, m);
    }
    return null;
  }
  function k(d, f, m, x, w) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (d = d.get(m) || null), u(f, d, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case lo:
          return (d = d.get(x.key === null ? m : x.key) || null), a(f, d, x, w);
        case Tn:
          return (d = d.get(x.key === null ? m : x.key) || null), c(f, d, x, w);
        case Tt:
          var N = x._init;
          return k(d, f, m, N(x._payload), w);
      }
      if (vr(x) || lr(x)) return (d = d.get(m) || null), h(f, d, x, w, null);
      vo(f, x);
    }
    return null;
  }
  function g(d, f, m, x) {
    for (
      var w = null, N = null, _ = f, M = (f = 0), A = null;
      _ !== null && M < m.length;
      M++
    ) {
      _.index > M ? ((A = _), (_ = null)) : (A = _.sibling);
      var O = v(d, _, m[M], x);
      if (O === null) {
        _ === null && (_ = A);
        break;
      }
      e && _ && O.alternate === null && t(d, _),
        (f = l(O, f, M)),
        N === null ? (w = O) : (N.sibling = O),
        (N = O),
        (_ = A);
    }
    if (M === m.length) return n(d, _), Y && bt(d, M), w;
    if (_ === null) {
      for (; M < m.length; M++)
        (_ = y(d, m[M], x)),
          _ !== null &&
            ((f = l(_, f, M)), N === null ? (w = _) : (N.sibling = _), (N = _));
      return Y && bt(d, M), w;
    }
    for (_ = r(d, _); M < m.length; M++)
      (A = k(_, d, M, m[M], x)),
        A !== null &&
          (e && A.alternate !== null && _.delete(A.key === null ? M : A.key),
          (f = l(A, f, M)),
          N === null ? (w = A) : (N.sibling = A),
          (N = A));
    return (
      e &&
        _.forEach(function (de) {
          return t(d, de);
        }),
      Y && bt(d, M),
      w
    );
  }
  function S(d, f, m, x) {
    var w = lr(m);
    if (typeof w != "function") throw Error(L(150));
    if (((m = w.call(m)), m == null)) throw Error(L(151));
    for (
      var N = (w = null), _ = f, M = (f = 0), A = null, O = m.next();
      _ !== null && !O.done;
      M++, O = m.next()
    ) {
      _.index > M ? ((A = _), (_ = null)) : (A = _.sibling);
      var de = v(d, _, O.value, x);
      if (de === null) {
        _ === null && (_ = A);
        break;
      }
      e && _ && de.alternate === null && t(d, _),
        (f = l(de, f, M)),
        N === null ? (w = de) : (N.sibling = de),
        (N = de),
        (_ = A);
    }
    if (O.done) return n(d, _), Y && bt(d, M), w;
    if (_ === null) {
      for (; !O.done; M++, O = m.next())
        (O = y(d, O.value, x)),
          O !== null &&
            ((f = l(O, f, M)), N === null ? (w = O) : (N.sibling = O), (N = O));
      return Y && bt(d, M), w;
    }
    for (_ = r(d, _); !O.done; M++, O = m.next())
      (O = k(_, d, M, O.value, x)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? M : O.key),
          (f = l(O, f, M)),
          N === null ? (w = O) : (N.sibling = O),
          (N = O));
    return (
      e &&
        _.forEach(function (pt) {
          return t(d, pt);
        }),
      Y && bt(d, M),
      w
    );
  }
  function C(d, f, m, x) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Mn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case lo:
          e: {
            for (var w = m.key, N = f; N !== null; ) {
              if (N.key === w) {
                if (((w = m.type), w === Mn)) {
                  if (N.tag === 7) {
                    n(d, N.sibling),
                      (f = o(N, m.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  N.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Tt &&
                    ua(w) === N.type)
                ) {
                  n(d, N.sibling),
                    (f = o(N, m.props)),
                    (f.ref = dr(d, N, m)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            m.type === Mn
              ? ((f = on(m.props.children, d.mode, x, m.key)),
                (f.return = d),
                (d = f))
              : ((x = Oo(m.type, m.key, m.props, null, d.mode, x)),
                (x.ref = dr(d, f, m)),
                (x.return = d),
                (d = x));
          }
          return i(d);
        case Tn:
          e: {
            for (N = m.key; f !== null; ) {
              if (f.key === N)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(d, f.sibling),
                    (f = o(f, m.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = ri(m, d.mode, x)), (f.return = d), (d = f);
          }
          return i(d);
        case Tt:
          return (N = m._init), C(d, f, N(m._payload), x);
      }
      if (vr(m)) return g(d, f, m, x);
      if (lr(m)) return S(d, f, m, x);
      vo(d, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = o(f, m)), (f.return = d), (d = f))
          : (n(d, f), (f = ni(m, d.mode, x)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return C;
}
var bn = nd(!0),
  rd = nd(!1),
  Jr = {},
  dt = Kt(Jr),
  Ur = Kt(Jr),
  Br = Kt(Jr);
function nn(e) {
  if (e === Jr) throw Error(L(174));
  return e;
}
function ju(e, t) {
  switch ((B(Br, t), B(Ur, e), B(dt, Jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ki(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ki(t, e));
  }
  Q(dt), B(dt, t);
}
function er() {
  Q(dt), Q(Ur), Q(Br);
}
function od(e) {
  nn(Br.current);
  var t = nn(dt.current),
    n = ki(t, e.type);
  t !== n && (B(Ur, e), B(dt, n));
}
function Du(e) {
  Ur.current === e && (Q(dt), Q(Ur));
}
var X = Kt(0);
function Jo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Jl = [];
function Au() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var To = Lt.ReactCurrentDispatcher,
  ql = Lt.ReactCurrentBatchConfig,
  sn = 0,
  J = null,
  se = null,
  fe = null,
  qo = !1,
  Lr = !1,
  Hr = 0,
  S1 = 0;
function ge() {
  throw Error(L(321));
}
function Fu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lt(e[n], t[n])) return !1;
  return !0;
}
function zu(e, t, n, r, o, l) {
  if (
    ((sn = l),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (To.current = e === null || e.memoizedState === null ? N1 : _1),
    (e = n(r, o)),
    Lr)
  ) {
    l = 0;
    do {
      if (((Lr = !1), (Hr = 0), 25 <= l)) throw Error(L(301));
      (l += 1),
        (fe = se = null),
        (t.updateQueue = null),
        (To.current = I1),
        (e = n(r, o));
    } while (Lr);
  }
  if (
    ((To.current = bo),
    (t = se !== null && se.next !== null),
    (sn = 0),
    (fe = se = J = null),
    (qo = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Wu() {
  var e = Hr !== 0;
  return (Hr = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (J.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function Ke() {
  if (se === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = fe === null ? J.memoizedState : fe.next;
  if (t !== null) (fe = t), (se = e);
  else {
    if (e === null) throw Error(L(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      fe === null ? (J.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function Vr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = se,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      c = l;
    do {
      var h = c.lane;
      if ((sn & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var y = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((u = a = y), (i = r)) : (a = a.next = y),
          (J.lanes |= h),
          (an |= h);
      }
      c = c.next;
    } while (c !== null && c !== l);
    a === null ? (i = r) : (a.next = u),
      lt(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (J.lanes |= l), (an |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ei(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    lt(l, t.memoizedState) || (Te = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function ld() {}
function id(e, t) {
  var n = J,
    r = Ke(),
    o = t(),
    l = !lt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Te = !0)),
    (r = r.queue),
    Uu(ad.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qr(9, sd.bind(null, n, r, o, t), void 0, null),
      ce === null)
    )
      throw Error(L(349));
    (sn & 30) !== 0 || ud(n, t, o);
  }
  return o;
}
function ud(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function sd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), cd(t) && Ve(e, 1, -1);
}
function ad(e, t, n) {
  return n(function () {
    cd(t) && Ve(e, 1, -1);
  });
}
function cd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function sa(e) {
  var t = st();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = P1.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function Qr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function dd() {
  return Ke().memoizedState;
}
function Mo(e, t, n, r) {
  var o = st();
  (J.flags |= e),
    (o.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r));
}
function vl(e, t, n, r) {
  var o = Ke();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (se !== null) {
    var i = se.memoizedState;
    if (((l = i.destroy), r !== null && Fu(r, i.deps))) {
      o.memoizedState = Qr(t, n, l, r);
      return;
    }
  }
  (J.flags |= e), (o.memoizedState = Qr(1 | t, n, l, r));
}
function aa(e, t) {
  return Mo(8390656, 8, e, t);
}
function Uu(e, t) {
  return vl(2048, 8, e, t);
}
function fd(e, t) {
  return vl(4, 2, e, t);
}
function pd(e, t) {
  return vl(4, 4, e, t);
}
function hd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function md(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), vl(4, 4, hd.bind(null, t, e), n)
  );
}
function Bu() {}
function vd(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function yd(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gd(e, t, n) {
  return (sn & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n))
    : (lt(n, t) || ((n = Cc()), (J.lanes |= n), (an |= n), (e.baseState = !0)),
      t);
}
function C1(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (ql.transition = r);
  }
}
function kd() {
  return Ke().memoizedState;
}
function L1(e, t, n) {
  var r = Ut(e);
  (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }),
    xd(e)
      ? wd(t, n)
      : (Ed(e, t, n), (n = Ce()), (e = Ve(e, r, n)), e !== null && Sd(e, t, r));
}
function P1(e, t, n) {
  var r = Ut(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xd(e)) wd(t, o);
  else {
    Ed(e, t, o);
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), lt(u, i))) return;
      } catch {
      } finally {
      }
    (n = Ce()), (e = Ve(e, r, n)), e !== null && Sd(e, t, r);
  }
}
function xd(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function wd(e, t) {
  Lr = qo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ed(e, t, n) {
  Wd(e)
    ? ((e = t.interleaved),
      e === null
        ? ((n.next = n), nt === null ? (nt = [t]) : nt.push(t))
        : ((n.next = e.next), (e.next = n)),
      (t.interleaved = n))
    : ((e = t.pending),
      e === null ? (n.next = n) : ((n.next = e.next), (e.next = n)),
      (t.pending = n));
}
function Sd(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xu(e, n);
  }
}
var bo = {
    readContext: Ze,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  N1 = {
    readContext: Ze,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ze,
    useEffect: aa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mo(4194308, 4, hd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = L1.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: sa,
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = sa(!1),
        t = e[0];
      return (e = C1.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        o = st();
      if (Y) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(L(349));
        (sn & 30) !== 0 || ud(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        aa(ad.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Qr(9, sd.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = ce.identifierPrefix;
      if (Y) {
        var n = gt,
          r = yt;
        (n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Hr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = S1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _1 = {
    readContext: Ze,
    useCallback: vd,
    useContext: Ze,
    useEffect: Uu,
    useImperativeHandle: md,
    useInsertionEffect: fd,
    useLayoutEffect: pd,
    useMemo: yd,
    useReducer: bl,
    useRef: dd,
    useState: function () {
      return bl(Vr);
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = Ke();
      return gd(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(Vr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: ld,
    useSyncExternalStore: id,
    useId: kd,
    unstable_isNewReconciler: !1,
  },
  I1 = {
    readContext: Ze,
    useCallback: vd,
    useContext: Ze,
    useEffect: Uu,
    useImperativeHandle: md,
    useInsertionEffect: fd,
    useLayoutEffect: pd,
    useMemo: yd,
    useReducer: ei,
    useRef: dd,
    useState: function () {
      return ei(Vr);
    },
    useDebugValue: Bu,
    useDeferredValue: function (e) {
      var t = Ke();
      return se === null ? (t.memoizedState = e) : gd(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = ei(Vr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: ld,
    useSyncExternalStore: id,
    useId: kd,
    unstable_isNewReconciler: !1,
  };
function Hu(e, t) {
  try {
    var n = "",
      r = t;
    do (n += rp(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o };
}
function Bi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var T1 = typeof WeakMap == "function" ? WeakMap : Map;
function Cd(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      tl || ((tl = !0), (Ji = r)), Bi(e, t);
    }),
    n
  );
}
function Ld(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Bi(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Bi(e, t),
          typeof r != "function" &&
            (Wt === null ? (Wt = new Set([this])) : Wt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ca(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new T1();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = H1.bind(null, e, t, n)), t.then(e, e));
}
function da(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fa(e, t, n, r, o) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wt(-1, 1)), (t.tag = 2), zt(n, t))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = o), e);
}
var Pd, Hi, Nd, _d;
Pd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Hi = function () {};
Nd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), nn(dt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = mi(e, o)), (r = mi(e, r)), (l = []);
        break;
      case "select":
        (o = q({}, o, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = gi(e, o)), (r = gi(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ho);
    }
    xi(n, r);
    var i;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var u = o[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Tr.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((u = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && a !== u && (a != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (l || (l = []), l.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (l = l || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Tr.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && V("scroll", e),
                  l || u === a || (l = []))
                : (l = l || []).push(c, a));
    }
    n && (l = l || []).push("style", n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
_d = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function fr(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function M1(e, t, n) {
  var r = t.pendingProps;
  switch ((Ru(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ke(t), null;
    case 1:
      return $e(t.type) && Vo(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        er(),
        Q(Me),
        Q(Ee),
        Au(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (cr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), tt !== null && (eu(tt), (tt = null)))),
        Hi(e, t),
        ke(t),
        null
      );
    case 5:
      Du(t);
      var o = nn(Br.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Nd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return ke(t), null;
        }
        if (((e = nn(dt.current)), cr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[at] = t), (r[Wr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < gr.length; o++) V(gr[o], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V("error", r), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              Ps(r, l), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              _s(r, l), V("invalid", r);
          }
          xi(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (l.suppressHydrationWarning !== !0 &&
                      mo(r.textContent, u, e),
                    (o = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (l.suppressHydrationWarning !== !0 &&
                      mo(r.textContent, u, e),
                    (o = ["children", "" + u]))
                : Tr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              io(r), Ns(r, l, !0);
              break;
            case "textarea":
              io(r), Is(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Ho);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ac(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[at] = t),
            (e[Wr] = r),
            Pd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = wi(n, r)), n)) {
              case "dialog":
                V("cancel", e), V("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < gr.length; o++) V(gr[o], e);
                o = r;
                break;
              case "source":
                V("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", e), V("load", e), (o = r);
                break;
              case "details":
                V("toggle", e), (o = r);
                break;
              case "input":
                Ps(e, r), (o = mi(e, r)), V("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = q({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                _s(e, r), (o = gi(e, r)), V("invalid", e);
                break;
              default:
                o = r;
            }
            xi(n, o), (u = o);
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var a = u[l];
                l === "style"
                  ? fc(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && cc(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Mr(e, a)
                    : typeof a == "number" && Mr(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Tr.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && V("scroll", e)
                      : a != null && hu(e, l, a, i));
              }
            switch (n) {
              case "input":
                io(e), Ns(e, r, !1);
                break;
              case "textarea":
                io(e), Is(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Bt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Bn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ho);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) _d(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = nn(Br.current)), nn(dt.current), cr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (l = r.nodeValue !== n) && ((e = De), e !== null))
          )
            switch (e.tag) {
              case 3:
                mo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (Q(X),
        (r = t.memoizedState),
        Y && Ie !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
      ) {
        for (r = Ie; r; ) r = vt(r.nextSibling);
        return qn(), (t.flags |= 98560), t;
      }
      if (r !== null && r.dehydrated !== null) {
        if (((r = cr(t)), e === null)) {
          if (!r) throw Error(L(318));
          if (
            ((r = t.memoizedState), (r = r !== null ? r.dehydrated : null), !r)
          )
            throw Error(L(317));
          r[at] = t;
        } else
          qn(),
            (t.flags & 128) === 0 && (t.memoizedState = null),
            (t.flags |= 4);
        return ke(t), null;
      }
      return (
        tt !== null && (eu(tt), (tt = null)),
        (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null ? cr(t) : (n = e.memoizedState !== null),
            r !== n &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (X.current & 1) !== 0
                  ? ae === 0 && (ae = 3)
                  : Gu())),
            t.updateQueue !== null && (t.flags |= 4),
            ke(t),
            null)
      );
    case 4:
      return (
        er(), Hi(e, t), e === null && Fr(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return Tu(t.type._context), ke(t), null;
    case 17:
      return $e(t.type) && Vo(), ke(t), null;
    case 19:
      if ((Q(X), (l = t.memoizedState), l === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) fr(l, !1);
        else {
          if (ae !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((i = Jo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    fr(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            re() > tr &&
            ((t.flags |= 128), (r = !0), fr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Jo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !Y)
            )
              return ke(t), null;
          } else
            2 * re() - l.renderingStartTime > tr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = re()),
          (t.sibling = null),
          (n = X.current),
          B(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        Yu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (Oe & 1073741824) !== 0 &&
            (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
var $1 = Lt.ReactCurrentOwner,
  Te = !1;
function Se(e, t, n, r) {
  t.child = e === null ? rd(t, null, n, r) : bn(t, e.child, n, r);
}
function pa(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Zn(t, o),
    (r = zu(e, t, n, r, l, o)),
    (n = Wu()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ct(e, t, o))
      : (Y && n && $u(t), (t.flags |= 1), Se(e, t, r, o), t.child)
  );
}
function ha(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Xu(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Id(e, t, l, r, o))
      : ((e = Oo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), (e.lanes & o) === 0)) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ar), n(i, r) && e.ref === t.ref)
    )
      return Ct(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Vt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Id(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Ar(l, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        (e.flags & 131072) !== 0 && (Te = !0);
      else return (t.lanes = e.lanes), Ct(e, t, o);
  }
  return Vi(e, t, n, r, o);
}
function Td(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Un, Oe),
        (Oe |= n);
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        B(Un, Oe),
        (Oe |= r);
    else
      return (
        (e = l !== null ? l.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null,
        }),
        (t.updateQueue = null),
        B(Un, Oe),
        (Oe |= e),
        null
      );
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Un, Oe),
      (Oe |= r);
  return Se(e, t, o, n), t.child;
}
function Md(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Vi(e, t, n, r, o) {
  var l = $e(n) ? ln : Ee.current;
  return (
    (l = Jn(t, l)),
    Zn(t, o),
    (n = zu(e, t, n, r, l, o)),
    (r = Wu()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ct(e, t, o))
      : (Y && r && $u(t), (t.flags |= 1), Se(e, t, n, o), t.child)
  );
}
function ma(e, t, n, r, o) {
  if ($e(n)) {
    var l = !0;
    Qo(t);
  } else l = !1;
  if ((Zn(t, o), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      bc(t, n, r),
      zi(t, n, r, o),
      (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ze(c))
      : ((c = $e(n) ? ln : Ee.current), (c = Jn(t, c)));
    var h = n.getDerivedStateFromProps,
      y =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    y ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== c) && oa(t, i, r, c)),
      (Mt = !1);
    var v = t.memoizedState;
    (i.state = v),
      Yo(t, r, i, o),
      (a = t.memoizedState),
      u !== r || v !== a || Me.current || Mt
        ? (typeof h == "function" && (Fi(t, n, h, r), (a = t.memoizedState)),
          (u = Mt || ra(t, n, u, r, v, a, c))
            ? (y ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Jc(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : be(t.type, u)),
      (i.props = c),
      (y = t.pendingProps),
      (v = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ze(a))
        : ((a = $e(n) ? ln : Ee.current), (a = Jn(t, a)));
    var k = n.getDerivedStateFromProps;
    (h =
      typeof k == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== y || v !== a) && oa(t, i, r, a)),
      (Mt = !1),
      (v = t.memoizedState),
      (i.state = v),
      Yo(t, r, i, o);
    var g = t.memoizedState;
    u !== y || v !== g || Me.current || Mt
      ? (typeof k == "function" && (Fi(t, n, k, r), (g = t.memoizedState)),
        (c = Mt || ra(t, n, c, r, v, g, a) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, g, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, g, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = a),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Qi(e, t, n, r, l, o);
}
function Qi(e, t, n, r, o, l) {
  Md(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && ea(t, n, !1), Ct(e, t, l);
  (r = t.stateNode), ($1.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = bn(t, e.child, null, l)), (t.child = bn(t, null, u, l)))
      : Se(e, t, u, l),
    (t.memoizedState = r.state),
    o && ea(t, n, !0),
    t.child
  );
}
function $d(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bs(e, t.context, !1),
    ju(e, t.containerInfo);
}
function va(e, t, n, r, o) {
  return qn(), Ou(o), (t.flags |= 256), Se(e, t, n, r), t.child;
}
var yo = { dehydrated: null, treeContext: null, retryLane: 0 };
function go(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ya(e, t) {
  return {
    baseLanes: e.baseLanes | t,
    cachePool: null,
    transitions: e.transitions,
  };
}
function Rd(e, t, n) {
  var r = t.pendingProps,
    o = X.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    B(X, o & 1),
    e === null)
  )
    return (
      Ui(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((o = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (o = { mode: "hidden", children: o }),
              (r & 1) === 0 && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = ol(o, r, 0, null)),
              (e = on(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = go(n)),
              (t.memoizedState = yo),
              e)
            : Zi(t, o))
    );
  if (((o = e.memoizedState), o !== null)) {
    if (((u = o.dehydrated), u !== null)) {
      if (i)
        return t.flags & 256
          ? ((t.flags &= -257), ko(e, t, n, Error(L(422))))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((l = r.fallback),
            (o = t.mode),
            (r = ol({ mode: "visible", children: r.children }, o, 0, null)),
            (l = on(l, o, n, null)),
            (l.flags |= 2),
            (r.return = t),
            (l.return = t),
            (r.sibling = l),
            (t.child = r),
            (t.mode & 1) !== 0 && bn(t, e.child, null, n),
            (t.child.memoizedState = go(n)),
            (t.memoizedState = yo),
            l);
      if ((t.mode & 1) === 0) t = ko(e, t, n, null);
      else if (u.data === "$!") t = ko(e, t, n, Error(L(419)));
      else if (((r = (n & e.childLanes) !== 0), Te || r)) {
        if (((r = ce), r !== null)) {
          switch (n & -n) {
            case 4:
              l = 2;
              break;
            case 16:
              l = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              l = 32;
              break;
            case 536870912:
              l = 268435456;
              break;
            default:
              l = 0;
          }
          (r = (l & (r.suspendedLanes | n)) !== 0 ? 0 : l),
            r !== 0 && r !== o.retryLane && ((o.retryLane = r), Ve(e, r, -1));
        }
        Gu(), (t = ko(e, t, n, Error(L(421))));
      } else
        u.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = V1.bind(null, e)),
            (u._reactRetry = t),
            (t = null))
          : ((n = o.treeContext),
            (Ie = vt(u.nextSibling)),
            (De = t),
            (Y = !0),
            (tt = null),
            n !== null &&
              ((We[Ue++] = yt),
              (We[Ue++] = gt),
              (We[Ue++] = un),
              (yt = n.id),
              (gt = n.overflow),
              (un = t)),
            (t = Zi(t, t.pendingProps.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? ((r = ka(e, t, r.children, r.fallback, n)),
        (l = t.child),
        (o = e.child.memoizedState),
        (l.memoizedState = o === null ? go(n) : ya(o, n)),
        (l.childLanes = e.childLanes & ~n),
        (t.memoizedState = yo),
        r)
      : ((n = ga(e, t, r.children, n)), (t.memoizedState = null), n);
  }
  return l
    ? ((r = ka(e, t, r.children, r.fallback, n)),
      (l = t.child),
      (o = e.child.memoizedState),
      (l.memoizedState = o === null ? go(n) : ya(o, n)),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = yo),
      r)
    : ((n = ga(e, t, r.children, n)), (t.memoizedState = null), n);
}
function Zi(e, t) {
  return (
    (t = ol({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ga(e, t, n, r) {
  var o = e.child;
  return (
    (e = o.sibling),
    (n = Vt(o, { mode: "visible", children: n })),
    (t.mode & 1) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n)
  );
}
function ka(e, t, n, r, o) {
  var l = t.mode;
  e = e.child;
  var i = e.sibling,
    u = { mode: "hidden", children: n };
  return (
    (l & 1) === 0 && t.child !== e
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = u),
        (t.deletions = null))
      : ((n = Vt(e, u)), (n.subtreeFlags = e.subtreeFlags & 14680064)),
    i !== null ? (r = Vt(i, r)) : ((r = on(r, l, o, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function ko(e, t, n, r) {
  return (
    r !== null && Ou(r),
    bn(t, e.child, null, n),
    (e = Zi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function xa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ai(e.return, t, n);
}
function ti(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function Od(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Se(e, t, r.children, n), (r = X.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xa(e, n, t);
        else if (e.tag === 19) xa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(X, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Jo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ti(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Jo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ti(t, !0, n, null, l);
        break;
      case "together":
        ti(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (an |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function R1(e, t, n) {
  switch (t.tag) {
    case 3:
      $d(t), qn();
      break;
    case 5:
      od(t);
      break;
    case 1:
      $e(t.type) && Qo(t);
      break;
    case 4:
      ju(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      B(Zo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(X, X.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Rd(e, t, n)
          : (B(X, X.current & 1),
            (e = Ct(e, t, n)),
            e !== null ? e.sibling : null);
      B(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return Od(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        B(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Td(e, t, n);
  }
  return Ct(e, t, n);
}
function O1(e, t) {
  switch ((Ru(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && Vo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        Q(Me),
        Q(Ee),
        Au(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Du(t), null;
    case 13:
      if ((Q(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(L(340));
        qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Q(X), null;
    case 4:
      return er(), null;
    case 10:
      return Tu(t.type._context), null;
    case 22:
    case 23:
      return Yu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xo = !1,
  xe = !1,
  j1 = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ee(e, t, r);
      }
    else n.current = null;
}
function Ki(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var wa = !1;
function D1(e, t) {
  if (((Mi = Wo), (e = Wc()), Nu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            c = 0,
            h = 0,
            y = e,
            v = null;
          t: for (;;) {
            for (
              var k;
              y !== n || (o !== 0 && y.nodeType !== 3) || (u = i + o),
                y !== l || (r !== 0 && y.nodeType !== 3) || (a = i + r),
                y.nodeType === 3 && (i += y.nodeValue.length),
                (k = y.firstChild) !== null;

            )
              (v = y), (y = k);
            for (;;) {
              if (y === e) break t;
              if (
                (v === n && ++c === o && (u = i),
                v === l && ++h === r && (a = i),
                (k = y.nextSibling) !== null)
              )
                break;
              (y = v), (v = y.parentNode);
            }
            y = k;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($i = { focusedElem: e, selectionRange: n }, Wo = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var g = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var S = g.memoizedProps,
                    C = g.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : be(t.type, S),
                      C
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                if (m.nodeType === 1) m.textContent = "";
                else if (m.nodeType === 9) {
                  var x = m.body;
                  x != null && (x.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (w) {
          ee(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (g = wa), (wa = !1), g;
}
function Pr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Ki(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function yl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), jd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[Wr], delete t[ji], delete t[k1], delete t[x1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Dd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ea(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ho));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gi(e, t, n), e = e.sibling; e !== null; ) Gi(e, t, n), (e = e.sibling);
}
function Xi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xi(e, t, n), e = e.sibling; e !== null; ) Xi(e, t, n), (e = e.sibling);
}
var pe = null,
  et = !1;
function _t(e, t, n) {
  for (n = n.child; n !== null; ) Ad(e, t, n), (n = n.sibling);
}
function Ad(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(al, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xe || Wn(n, t);
    case 6:
      var r = pe,
        o = et;
      (pe = null),
        _t(e, t, n),
        (pe = r),
        (et = o),
        pe !== null &&
          (et
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (et
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Gl(e.parentNode, n)
              : e.nodeType === 1 && Gl(e, n),
            jr(e))
          : Gl(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (o = et),
        (pe = n.stateNode.containerInfo),
        (et = !0),
        _t(e, t, n),
        (pe = r),
        (et = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && Ki(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      _t(e, t, n);
      break;
    case 1:
      if (
        !xe &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ee(n, t, u);
        }
      _t(e, t, n);
      break;
    case 21:
      _t(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xe = (r = xe) || n.memoizedState !== null), _t(e, t, n), (xe = r))
        : _t(e, t, n);
      break;
    default:
      _t(e, t, n);
  }
}
function Sa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new j1()),
      t.forEach(function (r) {
        var o = Q1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (pe = u.stateNode), (et = !1);
              break e;
            case 3:
              (pe = u.stateNode.containerInfo), (et = !0);
              break e;
            case 4:
              (pe = u.stateNode.containerInfo), (et = !0);
              break e;
          }
          u = u.return;
        }
        if (pe === null) throw Error(L(160));
        Ad(l, i, o), (pe = null), (et = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (c) {
        ee(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Fd(t, e), (t = t.sibling);
}
function Fd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qe(t, e), ut(e), r & 4)) {
        try {
          Pr(3, e, e.return), yl(3, e);
        } catch (g) {
          ee(e, e.return, g);
        }
        try {
          Pr(5, e, e.return);
        } catch (g) {
          ee(e, e.return, g);
        }
      }
      break;
    case 1:
      qe(t, e), ut(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (
        (qe(t, e),
        ut(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Mr(o, "");
        } catch (g) {
          ee(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && l.type === "radio" && l.name != null && uc(o, l),
              wi(u, i);
            var c = wi(u, l);
            for (i = 0; i < a.length; i += 2) {
              var h = a[i],
                y = a[i + 1];
              h === "style"
                ? fc(o, y)
                : h === "dangerouslySetInnerHTML"
                ? cc(o, y)
                : h === "children"
                ? Mr(o, y)
                : hu(o, h, y, c);
            }
            switch (u) {
              case "input":
                vi(o, l);
                break;
              case "textarea":
                sc(o, l);
                break;
              case "select":
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var k = l.value;
                k != null
                  ? Bn(o, !!l.multiple, k, !1)
                  : v !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Bn(o, !!l.multiple, l.defaultValue, !0)
                      : Bn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Wr] = l;
          } catch (g) {
            ee(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((qe(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (c = e.stateNode), (h = e.memoizedProps);
        try {
          c.nodeValue = h;
        } catch (g) {
          ee(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (qe(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          jr(t.containerInfo);
        } catch (g) {
          ee(e, e.return, g);
        }
      break;
    case 4:
      qe(t, e), ut(e);
      break;
    case 13:
      qe(t, e),
        ut(e),
        (c = e.child),
        c.flags & 8192 &&
          c.memoizedState !== null &&
          (c.alternate === null || c.alternate.memoizedState === null) &&
          (Zu = re()),
        r & 4 && Sa(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xe = (h = xe) || c), qe(t, e), (xe = h)) : qe(t, e),
        ut(e),
        r & 8192)
      ) {
        h = e.memoizedState !== null;
        e: for (y = null, v = e; ; ) {
          if (v.tag === 5) {
            if (y === null) {
              y = v;
              try {
                (o = v.stateNode),
                  h
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((u = v.stateNode),
                      (a = v.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = dc("display", i)));
              } catch (g) {
                ee(e, e.return, g);
              }
            }
          } else if (v.tag === 6) {
            if (y === null)
              try {
                v.stateNode.nodeValue = h ? "" : v.memoizedProps;
              } catch (g) {
                ee(e, e.return, g);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            y === v && (y = null), (v = v.return);
          }
          y === v && (y = null), (v.sibling.return = v.return), (v = v.sibling);
        }
        if (h && !c && (e.mode & 1) !== 0)
          for (T = e, e = e.child; e !== null; ) {
            for (c = T = e; T !== null; ) {
              switch (((h = T), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pr(4, h, h.return);
                  break;
                case 1:
                  if (
                    (Wn(h, h.return),
                    (l = h.stateNode),
                    typeof l.componentWillUnmount == "function")
                  ) {
                    (v = h), (k = h.return);
                    try {
                      (o = v),
                        (l.props = o.memoizedProps),
                        (l.state = o.memoizedState),
                        l.componentWillUnmount();
                    } catch (g) {
                      ee(v, k, g);
                    }
                  }
                  break;
                case 5:
                  Wn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    La(c);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (T = y)) : La(c);
            }
            e = e.sibling;
          }
      }
      break;
    case 19:
      qe(t, e), ut(e), r & 4 && Sa(e);
      break;
    case 21:
      break;
    default:
      qe(t, e), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Mr(o, ""), (r.flags &= -33));
          var l = Ea(e);
          Xi(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ea(e);
          Gi(e, u, i);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      ee(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function A1(e, t, n) {
  (T = e), zd(e);
}
function zd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var o = T,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || xo;
      if (!i) {
        var u = o.alternate,
          a = (u !== null && u.memoizedState !== null) || xe;
        u = xo;
        var c = xe;
        if (((xo = i), (xe = a) && !c))
          for (T = o; T !== null; )
            (i = T),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Pa(o)
                : a !== null
                ? ((a.return = i), (T = a))
                : Pa(o);
        for (; l !== null; ) (T = l), zd(l), (l = l.sibling);
        (T = o), (xo = u), (xe = c);
      }
      Ca(e);
    } else
      (o.subtreeFlags & 8772) !== 0 && l !== null
        ? ((l.return = o), (T = l))
        : Ca(e);
  }
}
function Ca(e) {
  for (; T !== null; ) {
    var t = T;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xe || yl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && na(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                na(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var y = h.dehydrated;
                    y !== null && jr(y);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(L(163));
          }
        xe || (t.flags & 512 && Yi(t));
      } catch (v) {
        ee(t, t.return, v);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function La(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Pa(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yl(4, t);
          } catch (a) {
            ee(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ee(t, o, a);
            }
          }
          var l = t.return;
          try {
            Yi(t);
          } catch (a) {
            ee(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Yi(t);
          } catch (a) {
            ee(t, i, a);
          }
      }
    } catch (a) {
      ee(t, t.return, a);
    }
    if (t === e) {
      T = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (T = u);
      break;
    }
    T = t.return;
  }
}
var F1 = Math.ceil,
  el = Lt.ReactCurrentDispatcher,
  Vu = Lt.ReactCurrentOwner,
  He = Lt.ReactCurrentBatchConfig,
  W = 0,
  ce = null,
  ue = null,
  he = 0,
  Oe = 0,
  Un = Kt(0),
  ae = 0,
  Zr = null,
  an = 0,
  gl = 0,
  Qu = 0,
  Nr = null,
  _e = null,
  Zu = 0,
  tr = 1 / 0,
  ht = null,
  tl = !1,
  Ji = null,
  Wt = null,
  wo = !1,
  jt = null,
  nl = 0,
  _r = 0,
  qi = null,
  $o = -1,
  Ro = 0;
function Ce() {
  return (W & 6) !== 0 ? re() : $o !== -1 ? $o : ($o = re());
}
function Ut(e) {
  return (e.mode & 1) === 0
    ? 1
    : (W & 2) !== 0 && he !== 0
    ? he & -he
    : E1.transition !== null
    ? (Ro === 0 && (Ro = Cc()), Ro)
    : ((e = U),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Mc(e.type))),
      e);
}
function Ve(e, t, n) {
  if (50 < _r) throw ((_r = 0), (qi = null), Error(L(185)));
  var r = kl(e, t);
  return r === null
    ? null
    : (Yr(r, t, n),
      ((W & 2) === 0 || r !== ce) &&
        (r === ce && ((W & 2) === 0 && (gl |= t), ae === 4 && Rt(r, he)),
        Re(r, n),
        t === 1 &&
          W === 0 &&
          (e.mode & 1) === 0 &&
          ((tr = re() + 500), hl && Yt())),
      r);
}
function kl(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function Wd(e) {
  return (ce !== null || nt !== null) && (e.mode & 1) !== 0 && (W & 2) === 0;
}
function Re(e, t) {
  var n = e.callbackNode;
  Ep(e, t);
  var r = zo(e, e === ce ? he : 0);
  if (r === 0)
    n !== null && $s(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $s(n), t === 1))
      e.tag === 0 ? w1(Na.bind(null, e)) : Xc(Na.bind(null, e)),
        y1(function () {
          W === 0 && Yt();
        }),
        (n = null);
    else {
      switch (Lc(r)) {
        case 1:
          n = ku;
          break;
        case 4:
          n = Ec;
          break;
        case 16:
          n = Fo;
          break;
        case 536870912:
          n = Sc;
          break;
        default:
          n = Fo;
      }
      n = Yd(n, Ud.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ud(e, t) {
  if ((($o = -1), (Ro = 0), (W & 6) !== 0)) throw Error(L(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = zo(e, e === ce ? he : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = rl(e, r);
  else {
    t = r;
    var o = W;
    W |= 2;
    var l = Hd();
    (ce !== e || he !== t) && ((ht = null), (tr = re() + 500), rn(e, t));
    do
      try {
        U1();
        break;
      } catch (u) {
        Bd(e, u);
      }
    while (1);
    Iu(),
      (el.current = l),
      (W = o),
      ue !== null ? (t = 0) : ((ce = null), (he = 0), (t = ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Pi(e)), o !== 0 && ((r = o), (t = bi(e, o)))), t === 1)
    )
      throw ((n = Zr), rn(e, 0), Rt(e, r), Re(e, re()), n);
    if (t === 6) Rt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        (r & 30) === 0 &&
          !z1(o) &&
          ((t = rl(e, r)),
          t === 2 && ((l = Pi(e)), l !== 0 && ((r = l), (t = bi(e, l)))),
          t === 1))
      )
        throw ((n = Zr), rn(e, 0), Rt(e, r), Re(e, re()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          en(e, _e, ht);
          break;
        case 3:
          if (
            (Rt(e, r), (r & 130023424) === r && ((t = Zu + 500 - re()), 10 < t))
          ) {
            if (zo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ce(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Oi(en.bind(null, e, _e, ht), t);
            break;
          }
          en(e, _e, ht);
          break;
        case 4:
          if ((Rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - ot(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = re() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * F1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Oi(en.bind(null, e, _e, ht), r);
            break;
          }
          en(e, _e, ht);
          break;
        case 5:
          en(e, _e, ht);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Re(e, re()), e.callbackNode === n ? Ud.bind(null, e) : null;
}
function bi(e, t) {
  var n = Nr;
  return (
    e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && eu(t)),
    e
  );
}
function eu(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function z1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!lt(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Rt(e, t) {
  for (
    t &= ~Qu,
      t &= ~gl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ot(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Na(e) {
  if ((W & 6) !== 0) throw Error(L(327));
  Kn();
  var t = zo(e, 0);
  if ((t & 1) === 0) return Re(e, re()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pi(e);
    r !== 0 && ((t = r), (n = bi(e, r)));
  }
  if (n === 1) throw ((n = Zr), rn(e, 0), Rt(e, t), Re(e, re()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    en(e, _e, ht),
    Re(e, re()),
    null
  );
}
function Ku(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((tr = re() + 500), hl && Yt());
  }
}
function cn(e) {
  jt !== null && jt.tag === 0 && (W & 6) === 0 && Kn();
  var t = W;
  W |= 1;
  var n = He.transition,
    r = U;
  try {
    if (((He.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (He.transition = n), (W = t), (W & 6) === 0 && Yt();
  }
}
function Yu() {
  (Oe = Un.current), Q(Un);
}
function rn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), v1(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((Ru(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vo();
          break;
        case 3:
          er(), Q(Me), Q(Ee), Au();
          break;
        case 5:
          Du(r);
          break;
        case 4:
          er();
          break;
        case 13:
          Q(X);
          break;
        case 19:
          Q(X);
          break;
        case 10:
          Tu(r.type._context);
          break;
        case 22:
        case 23:
          Yu();
      }
      n = n.return;
    }
  if (
    ((ce = e),
    (ue = e = Vt(e.current, null)),
    (he = Oe = t),
    (ae = 0),
    (Zr = null),
    (Qu = gl = an = 0),
    (_e = Nr = null),
    nt !== null)
  ) {
    for (t = 0; t < nt.length; t++)
      if (((n = nt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    nt = null;
  }
  return e;
}
function Bd(e, t) {
  do {
    var n = ue;
    try {
      if ((Iu(), (To.current = bo), qo)) {
        for (var r = J.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        qo = !1;
      }
      if (
        ((sn = 0),
        (fe = se = J = null),
        (Lr = !1),
        (Hr = 0),
        (Vu.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (Zr = t), (ue = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = he),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            h = u,
            y = h.tag;
          if ((h.mode & 1) === 0 && (y === 0 || y === 11 || y === 15)) {
            var v = h.alternate;
            v
              ? ((h.updateQueue = v.updateQueue),
                (h.memoizedState = v.memoizedState),
                (h.lanes = v.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var k = da(i);
          if (k !== null) {
            (k.flags &= -257),
              fa(k, i, u, l, t),
              k.mode & 1 && ca(l, c, t),
              (t = k),
              (a = c);
            var g = t.updateQueue;
            if (g === null) {
              var S = new Set();
              S.add(a), (t.updateQueue = S);
            } else g.add(a);
            break e;
          } else {
            if ((t & 1) === 0) {
              ca(l, c, t), Gu();
              break e;
            }
            a = Error(L(426));
          }
        } else if (Y && u.mode & 1) {
          var C = da(i);
          if (C !== null) {
            (C.flags & 65536) === 0 && (C.flags |= 256),
              fa(C, i, u, l, t),
              Ou(a);
            break e;
          }
        }
        (l = a),
          ae !== 4 && (ae = 2),
          Nr === null ? (Nr = [l]) : Nr.push(l),
          (a = Hu(a, u)),
          (u = i);
        do {
          switch (u.tag) {
            case 3:
              (u.flags |= 65536), (t &= -t), (u.lanes |= t);
              var d = Cd(u, a, t);
              ta(u, d);
              break e;
            case 1:
              l = a;
              var f = u.type,
                m = u.stateNode;
              if (
                (u.flags & 128) === 0 &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Wt === null || !Wt.has(m))))
              ) {
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var x = Ld(u, l, t);
                ta(u, x);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      Qd(n);
    } catch (w) {
      (t = w), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Hd() {
  var e = el.current;
  return (el.current = bo), e === null ? bo : e;
}
function Gu() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    ce === null ||
      ((an & 268435455) === 0 && (gl & 268435455) === 0) ||
      Rt(ce, he);
}
function rl(e, t) {
  var n = W;
  W |= 2;
  var r = Hd();
  (ce !== e || he !== t) && ((ht = null), rn(e, t));
  do
    try {
      W1();
      break;
    } catch (o) {
      Bd(e, o);
    }
  while (1);
  if ((Iu(), (W = n), (el.current = r), ue !== null)) throw Error(L(261));
  return (ce = null), (he = 0), ae;
}
function W1() {
  for (; ue !== null; ) Vd(ue);
}
function U1() {
  for (; ue !== null && !pp(); ) Vd(ue);
}
function Vd(e) {
  var t = Kd(e.alternate, e, Oe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Qd(e) : (ue = t),
    (Vu.current = null);
}
function Qd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = M1(n, t, Oe)), n !== null)) {
        ue = n;
        return;
      }
    } else {
      if (((n = O1(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (ue = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function en(e, t, n) {
  var r = U,
    o = He.transition;
  try {
    (He.transition = null), (U = 1), B1(e, t, n, r);
  } finally {
    (He.transition = o), (U = r);
  }
  return null;
}
function B1(e, t, n, r) {
  do Kn();
  while (jt !== null);
  if ((W & 6) !== 0) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Sp(e, l),
    e === ce && ((ue = ce = null), (he = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      wo ||
      ((wo = !0),
      Yd(Fo, function () {
        return Kn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || l)
  ) {
    (l = He.transition), (He.transition = null);
    var i = U;
    U = 1;
    var u = W;
    (W |= 4),
      (Vu.current = null),
      D1(e, n),
      Fd(n, e),
      a1($i),
      (Wo = !!Mi),
      ($i = Mi = null),
      (e.current = n),
      A1(n),
      hp(),
      (W = u),
      (U = i),
      (He.transition = l);
  } else e.current = n;
  if (
    (wo && ((wo = !1), (jt = e), (nl = o)),
    (l = e.pendingLanes),
    l === 0 && (Wt = null),
    yp(n.stateNode),
    Re(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) r(t[n]);
  if (tl) throw ((tl = !1), (e = Ji), (Ji = null), e);
  return (
    (nl & 1) !== 0 && e.tag !== 0 && Kn(),
    (l = e.pendingLanes),
    (l & 1) !== 0 ? (e === qi ? _r++ : ((_r = 0), (qi = e))) : (_r = 0),
    Yt(),
    null
  );
}
function Kn() {
  if (jt !== null) {
    var e = Lc(nl),
      t = He.transition,
      n = U;
    try {
      if (((He.transition = null), (U = 16 > e ? 16 : e), jt === null))
        var r = !1;
      else {
        if (((e = jt), (jt = null), (nl = 0), (W & 6) !== 0))
          throw Error(L(331));
        var o = W;
        for (W |= 4, T = e.current; T !== null; ) {
          var l = T,
            i = l.child;
          if ((T.flags & 16) !== 0) {
            var u = l.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (T = c; T !== null; ) {
                  var h = T;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(8, h, l);
                  }
                  var y = h.child;
                  if (y !== null) (y.return = h), (T = y);
                  else
                    for (; T !== null; ) {
                      h = T;
                      var v = h.sibling,
                        k = h.return;
                      if ((jd(h), h === c)) {
                        T = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = k), (T = v);
                        break;
                      }
                      T = k;
                    }
                }
              }
              var g = l.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var C = S.sibling;
                    (S.sibling = null), (S = C);
                  } while (S !== null);
                }
              }
              T = l;
            }
          }
          if ((l.subtreeFlags & 2064) !== 0 && i !== null)
            (i.return = l), (T = i);
          else
            e: for (; T !== null; ) {
              if (((l = T), (l.flags & 2048) !== 0))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pr(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (T = d);
                break e;
              }
              T = l.return;
            }
        }
        var f = e.current;
        for (T = f; T !== null; ) {
          i = T;
          var m = i.child;
          if ((i.subtreeFlags & 2064) !== 0 && m !== null)
            (m.return = i), (T = m);
          else
            e: for (i = f; T !== null; ) {
              if (((u = T), (u.flags & 2048) !== 0))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yl(9, u);
                  }
                } catch (w) {
                  ee(u, u.return, w);
                }
              if (u === i) {
                T = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                (x.return = u.return), (T = x);
                break e;
              }
              T = u.return;
            }
        }
        if (
          ((W = o), Yt(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(al, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (He.transition = t);
    }
  }
  return !1;
}
function _a(e, t, n) {
  (t = Hu(n, t)),
    (t = Cd(e, t, 1)),
    zt(e, t),
    (t = Ce()),
    (e = kl(e, 1)),
    e !== null && (Yr(e, 1, t), Re(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3) _a(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _a(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Wt === null || !Wt.has(r)))
        ) {
          (e = Hu(n, e)),
            (e = Ld(t, e, 1)),
            zt(t, e),
            (e = Ce()),
            (t = kl(t, 1)),
            t !== null && (Yr(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function H1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (he & n) === n &&
      (ae === 4 || (ae === 3 && (he & 130023424) === he && 500 > re() - Zu)
        ? rn(e, 0)
        : (Qu |= n)),
    Re(e, t);
}
function Zd(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = ao), (ao <<= 1), (ao & 130023424) === 0 && (ao = 4194304)));
  var n = Ce();
  (e = kl(e, t)), e !== null && (Yr(e, t, n), Re(e, n));
}
function V1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zd(e, n);
}
function Q1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), Zd(e, n);
}
var Kd;
Kd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) Te = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (Te = !1), R1(e, t, n);
      Te = (e.flags & 131072) !== 0;
    }
  else (Te = !1), Y && (t.flags & 1048576) !== 0 && ed(t, Xo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps);
      var o = Jn(t, Ee.current);
      Zn(t, n), (o = zu(null, t, r, e, o, n));
      var l = Wu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((l = !0), Qo(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Mu(t),
            (o.updater = ml),
            (t.stateNode = o),
            (o._reactInternals = t),
            zi(t, r, e, n),
            (t = Qi(null, t, r, !0, l, n)))
          : ((t.tag = 0), Y && l && $u(t), Se(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = K1(r)),
          (e = be(r, e)),
          o)
        ) {
          case 0:
            t = Vi(null, t, r, e, n);
            break e;
          case 1:
            t = ma(null, t, r, e, n);
            break e;
          case 11:
            t = pa(null, t, r, e, n);
            break e;
          case 14:
            t = ha(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        Vi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        ma(e, t, r, o, n)
      );
    case 3:
      e: {
        if (($d(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Jc(e, t),
          Yo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = Error(L(423))), (t = va(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Error(L(424))), (t = va(e, t, r, n, o));
            break e;
          } else
            for (
              Ie = vt(t.stateNode.containerInfo.firstChild),
                De = t,
                Y = !0,
                tt = null,
                n = rd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((qn(), r === o)) {
            t = Ct(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        od(t),
        e === null && Ui(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Ri(r, o) ? (i = null) : l !== null && Ri(r, l) && (t.flags |= 32),
        Md(e, t),
        Se(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ui(t), null;
    case 13:
      return Rd(e, t, n);
    case 4:
      return (
        ju(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = bn(t, null, r, n)) : Se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        pa(e, t, r, o, n)
      );
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          B(Zo, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (lt(l.value, i)) {
            if (l.children === o.children && !Me.current) {
              t = Ct(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var u = l.dependencies;
              if (u !== null) {
                i = l.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = wt(-1, n & -n)), (a.tag = 2);
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (c.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      Ai(l.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(L(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Ai(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Se(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (o = Ze(o)),
        (r = r(o)),
        (t.flags |= 1),
        Se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = be(r, t.pendingProps)),
        (o = be(r.type, o)),
        ha(e, t, r, o, n)
      );
    case 15:
      return Id(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : be(r, o)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        $e(r) ? ((e = !0), Qo(t)) : (e = !1),
        Zn(t, n),
        bc(t, r, o),
        zi(t, r, o, n),
        Qi(null, t, r, !0, e, n)
      );
    case 19:
      return Od(e, t, n);
    case 22:
      return Td(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Yd(e, t) {
  return wc(e, t);
}
function Z1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Be(e, t, n, r) {
  return new Z1(e, t, n, r);
}
function Xu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function K1(e) {
  if (typeof e == "function") return Xu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === vu)) return 11;
    if (e === yu) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Oo(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Xu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Mn:
        return on(n.children, o, l, t);
      case mu:
        (i = 8), (o |= 8);
        break;
      case di:
        return (
          (e = Be(12, n, t, o | 2)), (e.elementType = di), (e.lanes = l), e
        );
      case fi:
        return (e = Be(13, n, t, o)), (e.elementType = fi), (e.lanes = l), e;
      case pi:
        return (e = Be(19, n, t, o)), (e.elementType = pi), (e.lanes = l), e;
      case oc:
        return ol(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case nc:
              i = 10;
              break e;
            case rc:
              i = 9;
              break e;
            case vu:
              i = 11;
              break e;
            case yu:
              i = 14;
              break e;
            case Tt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Be(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function on(e, t, n, r) {
  return (e = Be(7, e, r, t)), (e.lanes = n), e;
}
function ol(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = oc),
    (e.lanes = n),
    (e.stateNode = {}),
    e
  );
}
function ni(e, t, n) {
  return (e = Be(6, e, null, t)), (e.lanes = n), e;
}
function ri(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Y1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fl(0)),
    (this.expirationTimes = Fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ju(e, t, n, r, o, l, i, u, a) {
  return (
    (e = new Y1(e, t, n, u, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Be(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mu(l),
    e
  );
}
function G1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Gd(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return Gc(e, n, t);
  }
  return t;
}
function Xd(e, t, n, r, o, l, i, u, a) {
  return (
    (e = Ju(n, r, !0, e, o, l, i, u, a)),
    (e.context = Gd(null)),
    (n = e.current),
    (r = Ce()),
    (o = Ut(n)),
    (l = wt(r, o)),
    (l.callback = t != null ? t : null),
    zt(n, l),
    (e.current.lanes = o),
    Yr(e, o, r),
    Re(e, r),
    e
  );
}
function xl(e, t, n, r) {
  var o = t.current,
    l = Ce(),
    i = Ut(o);
  return (
    (n = Gd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    zt(o, t),
    (e = Ve(o, i, l)),
    e !== null && Io(e, o, i),
    i
  );
}
function ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ia(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qu(e, t) {
  Ia(e, t), (e = e.alternate) && Ia(e, t);
}
function X1() {
  return null;
}
var Jd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function bu(e) {
  this._internalRoot = e;
}
wl.prototype.render = bu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  xl(e, t, null, null);
};
wl.prototype.unmount = bu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cn(function () {
      xl(null, e, null, null);
    }),
      (t[St] = null);
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = _c();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < $t.length && t !== 0 && t < $t[n].priority; n++);
    $t.splice(n, 0, e), n === 0 && Tc(e);
  }
};
function es(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function El(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ta() {}
function J1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var c = ll(i);
        l.call(c);
      };
    }
    var i = Xd(t, r, e, 0, null, !1, !1, "", Ta);
    return (
      (e._reactRootContainer = i),
      (e[St] = i.current),
      Fr(e.nodeType === 8 ? e.parentNode : e),
      cn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ll(a);
      u.call(c);
    };
  }
  var a = Ju(e, 0, !1, null, null, !1, !1, "", Ta);
  return (
    (e._reactRootContainer = a),
    (e[St] = a.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    cn(function () {
      xl(t, a, n, r);
    }),
    a
  );
}
function Sl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var u = o;
      o = function () {
        var a = ll(i);
        u.call(a);
      };
    }
    xl(t, i, e, o);
  } else i = J1(n, t, e, o, r);
  return ll(i);
}
Pc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 &&
          (xu(t, n | 1),
          Re(t, re()),
          (W & 6) === 0 && ((tr = re() + 500), Yt()));
      }
      break;
    case 13:
      var r = Ce();
      cn(function () {
        return Ve(e, 1, r);
      }),
        qu(e, 1);
  }
};
wu = function (e) {
  if (e.tag === 13) {
    var t = Ce();
    Ve(e, 134217728, t), qu(e, 134217728);
  }
};
Nc = function (e) {
  if (e.tag === 13) {
    var t = Ce(),
      n = Ut(e);
    Ve(e, n, t), qu(e, n);
  }
};
_c = function () {
  return U;
};
Ic = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
Si = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = pl(r);
            if (!o) throw Error(L(90));
            ic(r), vi(r, o);
          }
        }
      }
      break;
    case "textarea":
      sc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
mc = Ku;
vc = cn;
var q1 = { usingClientEntryPoint: !1, Events: [Xr, jn, pl, pc, hc, Ku] },
  pr = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.1.0",
    rendererPackageName: "react-dom",
  },
  b1 = {
    bundleType: pr.bundleType,
    version: pr.version,
    rendererPackageName: pr.rendererPackageName,
    rendererConfig: pr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = kc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: pr.findFiberByHostInstance || X1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var Eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Eo.isDisabled && Eo.supportsFiber)
    try {
      (al = Eo.inject(b1)), (ct = Eo);
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q1;
Fe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!es(t)) throw Error(L(200));
  return G1(e, t, null, n);
};
Fe.createRoot = function (e, t) {
  if (!es(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = Jd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ju(e, 1, !1, null, null, n, !1, r, o)),
    (e[St] = t.current),
    Fr(e.nodeType === 8 ? e.parentNode : e),
    new bu(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = kc(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
  return cn(e);
};
Fe.hydrate = function (e, t, n) {
  if (!El(t)) throw Error(L(200));
  return Sl(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
  if (!es(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Jd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Xd(t, null, e, 1, n != null ? n : null, o, !1, l, i)),
    (e[St] = t.current),
    Fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new wl(t);
};
Fe.render = function (e, t, n) {
  if (!El(t)) throw Error(L(200));
  return Sl(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
  if (!El(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (cn(function () {
        Sl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[St] = null);
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = Ku;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!El(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Sl(e, t, n, !1, r);
};
Fe.version = "18.1.0-next-22edb9f77-20220426";
function qd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qd);
    } catch (e) {
      console.error(e);
    }
}
qd(), (du.exports = Fe);
var Ma = du.exports;
(Ir.createRoot = Ma.createRoot), (Ir.hydrateRoot = Ma.hydrateRoot);
var Cl = { exports: {} },
  Ll = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var e0 = p.exports,
  t0 = Symbol.for("react.element"),
  n0 = Symbol.for("react.fragment"),
  r0 = Object.prototype.hasOwnProperty,
  o0 = e0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  l0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function bd(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) r0.call(t, r) && !l0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: t0,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: o0.current,
  };
}
Ll.Fragment = n0;
Ll.jsx = bd;
Ll.jsxs = bd;
Cl.exports = Ll;
const s = Cl.exports.jsx,
  E = Cl.exports.jsxs,
  I = Cl.exports.Fragment;
function i0() {
  return s("div", {
    className: "_logo",
    children: s("a", {
      href: "https://emanuelalvorada.com.br?track=header",
      title: "Igreja Emanuel",
      target: "_blank",
      rel: "noopener noreferrer",
      children: s("img", {
        src: "https://d8a923b1h5a1n.cloudfront.net/brand/logo.png?track=emanuelalvorada.com.br-Header",
        alt: "Logo da Igreja Emanuel",
      }),
    }),
  });
}
function Qt() {
  let e = [],
    t = [],
    n = {
      enqueue(r) {
        t.push(r);
      },
      addEventListener(r, o, l, i) {
        return (
          r.addEventListener(o, l, i),
          n.add(() => r.removeEventListener(o, l, i))
        );
      },
      requestAnimationFrame(...r) {
        let o = requestAnimationFrame(...r);
        return n.add(() => cancelAnimationFrame(o));
      },
      nextFrame(...r) {
        return n.requestAnimationFrame(() => n.requestAnimationFrame(...r));
      },
      setTimeout(...r) {
        let o = setTimeout(...r);
        return n.add(() => clearTimeout(o));
      },
      add(r) {
        return (
          e.push(r),
          () => {
            let o = e.indexOf(r);
            if (o >= 0) {
              let [l] = e.splice(o, 1);
              l();
            }
          }
        );
      },
      dispose() {
        for (let r of e.splice(0)) r();
      },
      async workQueue() {
        for (let r of t.splice(0)) await r();
      },
    };
  return n;
}
function ts() {
  let [e] = p.exports.useState(Qt);
  return p.exports.useEffect(() => () => e.dispose(), [e]), e;
}
const we =
  typeof window != "undefined"
    ? p.exports.useLayoutEffect
    : p.exports.useEffect;
let oi = { serverHandoffComplete: !1 };
function qr() {
  let [e, t] = p.exports.useState(oi.serverHandoffComplete);
  return (
    p.exports.useEffect(() => {
      e !== !0 && t(!0);
    }, [e]),
    p.exports.useEffect(() => {
      oi.serverHandoffComplete === !1 && (oi.serverHandoffComplete = !0);
    }, []),
    e
  );
}
var $a;
let u0 = 0;
function Ra() {
  return ++u0;
}
let Le =
  ($a = D.useId) != null
    ? $a
    : function () {
        let e = qr(),
          [t, n] = D.useState(e ? Ra : null);
        return (
          we(() => {
            t === null && n(Ra());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function Qe(e) {
  let t = p.exports.useRef(e);
  return (
    we(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let ef = Symbol();
function tf(e, t = !0) {
  return Object.assign(e, { [ef]: t });
}
function b(...e) {
  let t = p.exports.useRef(e);
  p.exports.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = p.exports.useCallback(
    (r) => {
      for (let o of t.current)
        o != null && (typeof o == "function" ? o(r) : (o.current = r));
    },
    [t]
  );
  return e.every((r) => r == null || (r == null ? void 0 : r[ef])) ? void 0 : n;
}
function Z(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((o) => `"${o}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Z), r);
}
var Ye = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Ye || {}),
  kt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(kt || {});
function te({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: o,
  visible: l = !0,
  name: i,
}) {
  let u = nf(t, e);
  if (l) return So(u, n, r, i);
  let a = o != null ? o : 0;
  if (a & 2) {
    let c = u,
      { static: y = !1 } = c,
      v = Je(c, ["static"]);
    if (y) return So(v, n, r, i);
  }
  if (a & 1) {
    let h = u,
      { unmount: y = !0 } = h,
      v = Je(h, ["unmount"]);
    return Z(y ? 0 : 1, {
      [0]() {
        return null;
      },
      [1]() {
        return So(
          H(R({}, v), { hidden: !0, style: { display: "none" } }),
          n,
          r,
          i
        );
      },
    });
  }
  return So(u, n, r, i);
}
function So(e, t = {}, n, r) {
  let h = li(e, ["unmount", "static"]),
    { as: o = n, children: l, refName: i = "ref" } = h,
    u = Je(h, ["as", "children", "refName"]),
    a = e.ref !== void 0 ? { [i]: e.ref } : {},
    c = typeof l == "function" ? l(t) : l;
  if (
    (u.className &&
      typeof u.className == "function" &&
      (u.className = u.className(t)),
    o === p.exports.Fragment && Object.keys(Oa(u)).length > 0)
  ) {
    if (!p.exports.isValidElement(c) || (Array.isArray(c) && c.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((y) => `  - ${y}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((y) => `  - ${y}`).join(`
`),
        ].join(`
`)
      );
    return p.exports.cloneElement(
      c,
      Object.assign({}, nf(c.props, Oa(li(u, ["ref"]))), a)
    );
  }
  return p.exports.createElement(
    o,
    Object.assign({}, li(u, ["ref"]), o !== p.exports.Fragment && a),
    c
  );
}
function nf(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function"
        ? (n[o] != null || (n[o] = []), n[o].push(r[o]))
        : (t[o] = r[o]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](o) {
        let l = n[r];
        for (let i of l) {
          if (o.defaultPrevented) return;
          i(o);
        }
      },
    });
  return t;
}
function ne(e) {
  var t;
  return Object.assign(p.exports.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Oa(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function li(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
var z = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(z || {});
function s0(e) {
  throw new Error("Unexpected object: " + e);
}
var rt = ((e) => (
  (e[(e.First = 0)] = "First"),
  (e[(e.Previous = 1)] = "Previous"),
  (e[(e.Next = 2)] = "Next"),
  (e[(e.Last = 3)] = "Last"),
  (e[(e.Specific = 4)] = "Specific"),
  (e[(e.Nothing = 5)] = "Nothing"),
  e
))(rt || {});
function a0(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(),
    o = r != null ? r : -1,
    l = (() => {
      switch (e.focus) {
        case 0:
          return n.findIndex((i) => !t.resolveDisabled(i));
        case 1: {
          let i = n
            .slice()
            .reverse()
            .findIndex((u, a, c) =>
              o !== -1 && c.length - a - 1 >= o ? !1 : !t.resolveDisabled(u)
            );
          return i === -1 ? i : n.length - 1 - i;
        }
        case 2:
          return n.findIndex((i, u) => (u <= o ? !1 : !t.resolveDisabled(i)));
        case 3: {
          let i = n
            .slice()
            .reverse()
            .findIndex((u) => !t.resolveDisabled(u));
          return i === -1 ? i : n.length - 1 - i;
        }
        case 4:
          return n.findIndex((i) => t.resolveId(i) === e.id);
        case 5:
          return null;
        default:
          s0(e);
      }
    })();
  return l === -1 ? r : l;
}
function br(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && c0(n) ? !1 : r;
}
function c0(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function rf(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function ja(e, t, n) {
  let r = Qe(t);
  p.exports.useEffect(() => {
    function o(l) {
      r.current(l);
    }
    return (
      window.addEventListener(e, o, n),
      () => window.removeEventListener(e, o, n)
    );
  }, [e, n]);
}
var of = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.IgnoreScrollbars = 2)] = "IgnoreScrollbars"),
  e
))(of || {});
function ns(e, t, n = 1) {
  let r = p.exports.useRef(!1),
    o = Qe((l) => {
      if (r.current) return;
      (r.current = !0),
        rf(() => {
          r.current = !1;
        });
      let i = (function a(c) {
          return typeof c == "function"
            ? a(c())
            : Array.isArray(c) || c instanceof Set
            ? c
            : [c];
        })(e),
        u = l.target;
      if (u.ownerDocument.documentElement.contains(u)) {
        if ((n & 2) === 2) {
          let a = 20,
            c = u.ownerDocument.documentElement;
          if (
            l.clientX > c.clientWidth - a ||
            l.clientX < a ||
            l.clientY > c.clientHeight - a ||
            l.clientY < a
          )
            return;
        }
        for (let a of i) {
          if (a === null) continue;
          let c = a instanceof HTMLElement ? a : a.current;
          if (c != null && c.contains(u)) return;
        }
        return t(l, u);
      }
    });
  ja("pointerdown", (...l) => o.current(...l)),
    ja("mousedown", (...l) => o.current(...l));
}
let rs = p.exports.createContext(null);
rs.displayName = "OpenClosedContext";
var ve = ((e) => (
  (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(ve || {});
function hn() {
  return p.exports.useContext(rs);
}
function Pl({ value: e, children: t }) {
  return D.createElement(rs.Provider, { value: e }, t);
}
function Da(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function os(e, t) {
  let [n, r] = p.exports.useState(() => Da(e));
  return (
    we(() => {
      r(Da(e));
    }, [e.type, e.as]),
    we(() => {
      n ||
        !t.current ||
        (t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          r("button"));
    }, [n, t]),
    n
  );
}
function mn(e) {
  return typeof window == "undefined"
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
function d0({ container: e, accept: t, walk: n, enabled: r = !0 }) {
  let o = p.exports.useRef(t),
    l = p.exports.useRef(n);
  p.exports.useEffect(() => {
    (o.current = t), (l.current = n);
  }, [t, n]),
    we(() => {
      if (!e || !r) return;
      let i = mn(e);
      if (!i) return;
      let u = o.current,
        a = l.current,
        c = Object.assign((y) => u(y), { acceptNode: u }),
        h = i.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, c, !1);
      for (; h.nextNode(); ) a(h.currentNode);
    }, [e, r, o, l]);
}
let tu = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var je = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(je || {}),
  Yn = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Yn || {}),
  f0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(f0 || {});
function il(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(tu));
}
var ls = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(ls || {});
function lf(e, t = 0) {
  var n;
  return e === ((n = mn(e)) == null ? void 0 : n.body)
    ? !1
    : Z(t, {
        [0]() {
          return e.matches(tu);
        },
        [1]() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(tu)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
function hr(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let p0 = ["textarea", "input"].join(",");
function h0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, p0)) !=
    null
    ? n
    : !1;
}
function uf(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n),
      l = t(r);
    if (o === null || l === null) return 0;
    let i = o.compareDocumentPosition(l);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function xt(e, t) {
  let n = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    r = Array.isArray(e) ? uf(e) : il(e),
    o = n.activeElement,
    l = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    i = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, r.indexOf(o)) - 1;
      if (t & 4) return Math.max(0, r.indexOf(o)) + 1;
      if (t & 8) return r.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
      );
    })(),
    u = t & 32 ? { preventScroll: !0 } : {},
    a = 0,
    c = r.length,
    h;
  do {
    if (a >= c || a + c <= 0) return 0;
    let y = i + a;
    if (t & 16) y = (y + c) % c;
    else {
      if (y < 0) return 3;
      if (y >= c) return 1;
    }
    (h = r[y]), h == null || h.focus(u), (a += l);
  } while (h !== n.activeElement);
  return (
    t & 6 && h0(h) && h.select(),
    h.hasAttribute("tabindex") || h.setAttribute("tabindex", "0"),
    2
  );
}
function dn(e, t, n, r) {
  let o = Qe(n);
  p.exports.useEffect(() => {
    e = e != null ? e : window;
    function l(i) {
      o.current(i);
    }
    return e.addEventListener(t, l, r), () => e.removeEventListener(t, l, r);
  }, [e, t, r]);
}
function is() {
  let e = p.exports.useRef(!1);
  return (
    we(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Gt(...e) {
  return p.exports.useMemo(() => mn(...e), [...e]);
}
var kr = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(kr || {});
function m0(e, t = 30, { initialFocus: n, containers: r } = {}) {
  let o = p.exports.useRef(null),
    l = p.exports.useRef(null),
    i = is(),
    u = Boolean(t & 16),
    a = Boolean(t & 2),
    c = Gt(e);
  return (
    p.exports.useEffect(() => {
      !u || o.current || (o.current = c == null ? void 0 : c.activeElement);
    }, [u, c]),
    p.exports.useEffect(() => {
      if (u)
        return () => {
          hr(o.current), (o.current = null);
        };
    }, [u]),
    p.exports.useEffect(() => {
      if (!a) return;
      let h = e.current;
      if (!h) return;
      let y = c == null ? void 0 : c.activeElement;
      if (n != null && n.current) {
        if ((n == null ? void 0 : n.current) === y) {
          l.current = y;
          return;
        }
      } else if (h.contains(y)) {
        l.current = y;
        return;
      }
      n != null && n.current
        ? hr(n.current)
        : xt(h, je.First) === Yn.Error &&
          console.warn(
            "There are no focusable elements inside the <FocusTrap />"
          ),
        (l.current = c == null ? void 0 : c.activeElement);
    }, [e, n, a, c]),
    dn(c == null ? void 0 : c.defaultView, "keydown", (h) => {
      !(t & 4) ||
        !e.current ||
        (h.key === z.Tab &&
          (h.preventDefault(),
          xt(
            e.current,
            (h.shiftKey ? je.Previous : je.Next) | je.WrapAround
          ) === Yn.Success &&
            (l.current = c == null ? void 0 : c.activeElement)));
    }),
    dn(
      c == null ? void 0 : c.defaultView,
      "focus",
      (h) => {
        if (!(t & 8)) return;
        let y = new Set(r == null ? void 0 : r.current);
        if ((y.add(e), !y.size)) return;
        let v = l.current;
        if (!v || !i.current) return;
        let k = h.target;
        k && k instanceof HTMLElement
          ? v0(y, k)
            ? ((l.current = k), hr(k))
            : (h.preventDefault(), h.stopPropagation(), hr(v))
          : hr(l.current);
      },
      !0
    ),
    o
  );
}
function v0(e, t) {
  var n;
  for (let r of e) if ((n = r.current) != null && n.contains(t)) return !0;
  return !1;
}
let In = new Set(),
  It = new Map();
function Aa(e) {
  e.setAttribute("aria-hidden", "true"), (e.inert = !0);
}
function Fa(e) {
  let t = It.get(e);
  !t ||
    (t["aria-hidden"] === null
      ? e.removeAttribute("aria-hidden")
      : e.setAttribute("aria-hidden", t["aria-hidden"]),
    (e.inert = t.inert));
}
function y0(e, t = !0) {
  we(() => {
    if (!t || !e.current) return;
    let n = e.current,
      r = mn(n);
    if (r) {
      In.add(n);
      for (let o of It.keys()) o.contains(n) && (Fa(o), It.delete(o));
      return (
        r.querySelectorAll("body > *").forEach((o) => {
          if (o instanceof HTMLElement) {
            for (let l of In) if (o.contains(l)) return;
            In.size === 1 &&
              (It.set(o, {
                "aria-hidden": o.getAttribute("aria-hidden"),
                inert: o.inert,
              }),
              Aa(o));
          }
        }),
        () => {
          if ((In.delete(n), In.size > 0))
            r.querySelectorAll("body > *").forEach((o) => {
              if (o instanceof HTMLElement && !It.has(o)) {
                for (let l of In) if (o.contains(l)) return;
                It.set(o, {
                  "aria-hidden": o.getAttribute("aria-hidden"),
                  inert: o.inert,
                }),
                  Aa(o);
              }
            });
          else for (let o of It.keys()) Fa(o), It.delete(o);
        }
      );
    }
  }, [t]);
}
let sf = p.exports.createContext(!1);
function g0() {
  return p.exports.useContext(sf);
}
function nu(e) {
  return D.createElement(sf.Provider, { value: e.force }, e.children);
}
function k0(e) {
  let t = g0(),
    n = p.exports.useContext(af),
    r = Gt(e),
    [o, l] = p.exports.useState(() => {
      if ((!t && n !== null) || typeof window == "undefined") return null;
      let i = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (i) return i;
      if (r === null) return null;
      let u = r.createElement("div");
      return (
        u.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(u)
      );
    });
  return (
    p.exports.useEffect(() => {
      o !== null &&
        ((r != null && r.body.contains(o)) ||
          r == null ||
          r.body.appendChild(o));
    }, [o, r]),
    p.exports.useEffect(() => {
      t || (n !== null && l(n.current));
    }, [n, l, t]),
    o
  );
}
let x0 = p.exports.Fragment,
  w0 = ne(function (e, t) {
    let n = e,
      r = p.exports.useRef(null),
      o = b(
        tf((c) => {
          r.current = c;
        }),
        t
      ),
      l = Gt(r),
      i = k0(r),
      [u] = p.exports.useState(() => {
        var c;
        return typeof window == "undefined"
          ? null
          : (c = l == null ? void 0 : l.createElement("div")) != null
          ? c
          : null;
      }),
      a = qr();
    return (
      we(() => {
        if (!!i && !!u)
          return (
            i.appendChild(u),
            () => {
              var c;
              !i ||
                !u ||
                (i.removeChild(u),
                i.childNodes.length <= 0 &&
                  ((c = i.parentElement) == null || c.removeChild(i)));
            }
          );
      }, [i, u]),
      a
        ? !i || !u
          ? null
          : du.exports.createPortal(
              te({
                ourProps: { ref: o },
                theirProps: n,
                defaultTag: x0,
                name: "Portal",
              }),
              u
            )
        : null
    );
  }),
  E0 = p.exports.Fragment,
  af = p.exports.createContext(null),
  S0 = ne(function (e, t) {
    let l = e,
      { target: n } = l,
      r = Je(l, ["target"]),
      o = { ref: b(t) };
    return D.createElement(
      af.Provider,
      { value: n },
      te({ ourProps: o, theirProps: r, defaultTag: E0, name: "Popover.Group" })
    );
  }),
  ru = Object.assign(w0, { Group: S0 }),
  cf = p.exports.createContext(null);
function df() {
  let e = p.exports.useContext(cf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, df), t);
  }
  return e;
}
function C0() {
  let [e, t] = p.exports.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    p.exports.useMemo(
      () =>
        function (n) {
          let r = p.exports.useCallback(
              (l) => (
                t((i) => [...i, l]),
                () =>
                  t((i) => {
                    let u = i.slice(),
                      a = u.indexOf(l);
                    return a !== -1 && u.splice(a, 1), u;
                  })
              ),
              []
            ),
            o = p.exports.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props]
            );
          return D.createElement(cf.Provider, { value: o }, n.children);
        },
      [t]
    ),
  ];
}
let L0 = "p",
  P0 = ne(function (e, t) {
    let n = df(),
      r = `headlessui-description-${Le()}`,
      o = b(t);
    we(() => n.register(r), [r, n.register]);
    let l = e,
      i = H(R({ ref: o }, n.props), { id: r });
    return te({
      ourProps: i,
      theirProps: l,
      slot: n.slot || {},
      defaultTag: L0,
      name: n.name || "Description",
    });
  }),
  us = p.exports.createContext(() => {});
us.displayName = "StackContext";
var ou = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  ou || {}
);
function N0() {
  return p.exports.useContext(us);
}
function _0({ children: e, onUpdate: t, type: n, element: r }) {
  let o = N0(),
    l = p.exports.useCallback(
      (...i) => {
        t == null || t(...i), o(...i);
      },
      [o, t]
    );
  return (
    we(() => (l(0, n, r), () => l(1, n, r)), [l, n, r]),
    D.createElement(us.Provider, { value: l }, e)
  );
}
var I0 = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(I0 || {}),
  T0 = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(T0 || {});
let M0 = {
    [0](e, t) {
      return e.titleId === t.id ? e : H(R({}, e), { titleId: t.id });
    },
  },
  ul = p.exports.createContext(null);
ul.displayName = "DialogContext";
function eo(e) {
  let t = p.exports.useContext(ul);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, eo), n);
  }
  return t;
}
function $0(e, t) {
  return Z(t.type, M0, e, t);
}
let R0 = "div",
  O0 = Ye.RenderStrategy | Ye.Static,
  j0 = ne(function (e, t) {
    let Nt = e,
      { open: n, onClose: r, initialFocus: o, __demoMode: l = !1 } = Nt,
      i = Je(Nt, ["open", "onClose", "initialFocus", "__demoMode"]),
      [u, a] = p.exports.useState(0),
      c = hn();
    n === void 0 &&
      c !== null &&
      (n = Z(c, { [ve.Open]: !0, [ve.Closed]: !1 }));
    let h = p.exports.useRef(new Set()),
      y = p.exports.useRef(null),
      v = b(y, t),
      k = Gt(y),
      g = e.hasOwnProperty("open") || c !== null,
      S = e.hasOwnProperty("onClose");
    if (!g && !S)
      throw new Error(
        "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
      );
    if (!g)
      throw new Error(
        "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
      );
    if (!S)
      throw new Error(
        "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
      );
    if (typeof n != "boolean")
      throw new Error(
        `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`
      );
    if (typeof r != "function")
      throw new Error(
        `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${r}`
      );
    let C = n ? 0 : 1,
      [d, f] = p.exports.useReducer($0, {
        titleId: null,
        descriptionId: null,
        panelRef: p.exports.createRef(),
      }),
      m = p.exports.useCallback(() => r(!1), [r]),
      x = p.exports.useCallback((K) => f({ type: 0, id: K }), [f]),
      w = qr() ? (l ? !1 : C === 0) : !1,
      N = u > 1,
      _ = p.exports.useContext(ul) !== null,
      M = m0(
        y,
        w
          ? Z(N ? "parent" : "leaf", {
              parent: kr.RestoreFocus,
              leaf: kr.All & ~kr.FocusLock,
            })
          : kr.None,
        { initialFocus: o, containers: h }
      );
    y0(y, N ? w : !1),
      ns(
        () => {
          var K, ye;
          return [
            ...Array.from(
              (K = k == null ? void 0 : k.querySelectorAll("body > *")) != null
                ? K
                : []
            ).filter(
              (P) =>
                !(
                  !(P instanceof HTMLElement) ||
                  P.contains(M.current) ||
                  (d.panelRef.current && P.contains(d.panelRef.current))
                )
            ),
            (ye = d.panelRef.current) != null ? ye : y.current,
          ];
        },
        () => {
          C === 0 && (N || m());
        },
        of.IgnoreScrollbars
      ),
      dn(k == null ? void 0 : k.defaultView, "keydown", (K) => {
        K.key === z.Escape &&
          C === 0 &&
          (N || (K.preventDefault(), K.stopPropagation(), m()));
      }),
      p.exports.useEffect(() => {
        var K;
        if (C !== 0 || _) return;
        let ye = mn(y);
        if (!ye) return;
        let P = ye.documentElement,
          $ = (K = ye.defaultView) != null ? K : window,
          j = P.style.overflow,
          G = P.style.paddingRight,
          le = $.innerWidth - P.clientWidth;
        return (
          (P.style.overflow = "hidden"),
          (P.style.paddingRight = `${le}px`),
          () => {
            (P.style.overflow = j), (P.style.paddingRight = G);
          }
        );
      }, [C, _]),
      p.exports.useEffect(() => {
        if (C !== 0 || !y.current) return;
        let K = new IntersectionObserver((ye) => {
          for (let P of ye)
            P.boundingClientRect.x === 0 &&
              P.boundingClientRect.y === 0 &&
              P.boundingClientRect.width === 0 &&
              P.boundingClientRect.height === 0 &&
              m();
        });
        return K.observe(y.current), () => K.disconnect();
      }, [C, y, m]);
    let [A, O] = C0(),
      de = `headlessui-dialog-${Le()}`,
      pt = p.exports.useMemo(
        () => [{ dialogState: C, close: m, setTitleId: x }, d],
        [C, d, m, x]
      ),
      it = p.exports.useMemo(() => ({ open: C === 0 }), [C]),
      Pt = {
        ref: v,
        id: de,
        role: "dialog",
        "aria-modal": C === 0 ? !0 : void 0,
        "aria-labelledby": d.titleId,
        "aria-describedby": A,
        onClick(K) {
          K.stopPropagation();
        },
      };
    return D.createElement(
      _0,
      {
        type: "Dialog",
        element: y,
        onUpdate: p.exports.useCallback((K, ye, P) => {
          ye === "Dialog" &&
            Z(K, {
              [ou.Add]() {
                h.current.add(P), a(($) => $ + 1);
              },
              [ou.Remove]() {
                h.current.add(P), a(($) => $ - 1);
              },
            });
        }, []),
      },
      D.createElement(
        nu,
        { force: !0 },
        D.createElement(
          ru,
          null,
          D.createElement(
            ul.Provider,
            { value: pt },
            D.createElement(
              ru.Group,
              { target: y },
              D.createElement(
                nu,
                { force: !1 },
                D.createElement(
                  O,
                  { slot: it, name: "Dialog.Description" },
                  te({
                    ourProps: Pt,
                    theirProps: i,
                    slot: it,
                    defaultTag: R0,
                    features: O0,
                    visible: C === 0,
                    name: "Dialog",
                  })
                )
              )
            )
          )
        )
      )
    );
  }),
  D0 = "div",
  A0 = ne(function (e, t) {
    let [{ dialogState: n, close: r }] = eo("Dialog.Overlay"),
      o = b(t),
      l = `headlessui-dialog-overlay-${Le()}`,
      i = p.exports.useCallback(
        (a) => {
          if (a.target === a.currentTarget) {
            if (br(a.currentTarget)) return a.preventDefault();
            a.preventDefault(), a.stopPropagation(), r();
          }
        },
        [r]
      ),
      u = p.exports.useMemo(() => ({ open: n === 0 }), [n]);
    return te({
      ourProps: { ref: o, id: l, "aria-hidden": !0, onClick: i },
      theirProps: e,
      slot: u,
      defaultTag: D0,
      name: "Dialog.Overlay",
    });
  }),
  F0 = "div",
  z0 = ne(function (e, t) {
    let [{ dialogState: n }, r] = eo("Dialog.Backdrop"),
      o = b(t),
      l = `headlessui-dialog-backdrop-${Le()}`;
    p.exports.useEffect(() => {
      if (r.panelRef.current === null)
        throw new Error(
          "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
        );
    }, [r.panelRef]);
    let i = p.exports.useMemo(() => ({ open: n === 0 }), [n]);
    return D.createElement(
      nu,
      { force: !0 },
      D.createElement(
        ru,
        null,
        te({
          ourProps: { ref: o, id: l, "aria-hidden": !0 },
          theirProps: e,
          slot: i,
          defaultTag: F0,
          name: "Dialog.Backdrop",
        })
      )
    );
  }),
  W0 = "div",
  U0 = ne(function (e, t) {
    let [{ dialogState: n }, r] = eo("Dialog.Panel"),
      o = b(t, r.panelRef),
      l = `headlessui-dialog-panel-${Le()}`,
      i = p.exports.useMemo(() => ({ open: n === 0 }), [n]);
    return te({
      ourProps: { ref: o, id: l },
      theirProps: e,
      slot: i,
      defaultTag: W0,
      name: "Dialog.Panel",
    });
  }),
  B0 = "h2",
  H0 = ne(function (e, t) {
    let [{ dialogState: n, setTitleId: r }] = eo("Dialog.Title"),
      o = `headlessui-dialog-title-${Le()}`,
      l = b(t);
    p.exports.useEffect(() => (r(o), () => r(null)), [o, r]);
    let i = p.exports.useMemo(() => ({ open: n === 0 }), [n]);
    return te({
      ourProps: { ref: l, id: o },
      theirProps: e,
      slot: i,
      defaultTag: B0,
      name: "Dialog.Title",
    });
  }),
  ii = Object.assign(j0, {
    Backdrop: z0,
    Panel: U0,
    Overlay: A0,
    Title: H0,
    Description: P0,
  });
var V0 = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(V0 || {}),
  Q0 = ((e) => (
    (e[(e.ToggleDisclosure = 0)] = "ToggleDisclosure"),
    (e[(e.CloseDisclosure = 1)] = "CloseDisclosure"),
    (e[(e.SetButtonId = 2)] = "SetButtonId"),
    (e[(e.SetPanelId = 3)] = "SetPanelId"),
    (e[(e.LinkPanel = 4)] = "LinkPanel"),
    (e[(e.UnlinkPanel = 5)] = "UnlinkPanel"),
    e
  ))(Q0 || {});
let Z0 = {
    [0]: (e) =>
      H(R({}, e), {
        disclosureState: Z(e.disclosureState, { [0]: 1, [1]: 0 }),
      }),
    [1]: (e) =>
      e.disclosureState === 1 ? e : H(R({}, e), { disclosureState: 1 }),
    [4](e) {
      return e.linkedPanel === !0 ? e : H(R({}, e), { linkedPanel: !0 });
    },
    [5](e) {
      return e.linkedPanel === !1 ? e : H(R({}, e), { linkedPanel: !1 });
    },
    [2](e, t) {
      return e.buttonId === t.buttonId
        ? e
        : H(R({}, e), { buttonId: t.buttonId });
    },
    [3](e, t) {
      return e.panelId === t.panelId ? e : H(R({}, e), { panelId: t.panelId });
    },
  },
  ss = p.exports.createContext(null);
ss.displayName = "DisclosureContext";
function as(e) {
  let t = p.exports.useContext(ss);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, as), n);
  }
  return t;
}
let cs = p.exports.createContext(null);
cs.displayName = "DisclosureAPIContext";
function ff(e) {
  let t = p.exports.useContext(cs);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ff), n);
  }
  return t;
}
let ds = p.exports.createContext(null);
ds.displayName = "DisclosurePanelContext";
function K0() {
  return p.exports.useContext(ds);
}
function Y0(e, t) {
  return Z(t.type, Z0, e, t);
}
let G0 = p.exports.Fragment,
  X0 = ne(function (e, t) {
    let d = e,
      { defaultOpen: n = !1 } = d,
      r = Je(d, ["defaultOpen"]),
      o = `headlessui-disclosure-button-${Le()}`,
      l = `headlessui-disclosure-panel-${Le()}`,
      i = p.exports.useRef(null),
      u = b(
        t,
        tf((f) => {
          i.current = f;
        }, e.as === void 0 || e.as === D.Fragment)
      ),
      a = p.exports.useRef(null),
      c = p.exports.useRef(null),
      h = p.exports.useReducer(Y0, {
        disclosureState: n ? 0 : 1,
        linkedPanel: !1,
        buttonRef: c,
        panelRef: a,
        buttonId: o,
        panelId: l,
      }),
      [{ disclosureState: y }, v] = h;
    p.exports.useEffect(() => v({ type: 2, buttonId: o }), [o, v]),
      p.exports.useEffect(() => v({ type: 3, panelId: l }), [l, v]);
    let k = p.exports.useCallback(
        (f) => {
          v({ type: 1 });
          let m = mn(i);
          if (!m) return;
          let x = (() =>
            f
              ? f instanceof HTMLElement
                ? f
                : f.current instanceof HTMLElement
                ? f.current
                : m.getElementById(o)
              : m.getElementById(o))();
          x == null || x.focus();
        },
        [v, o]
      ),
      g = p.exports.useMemo(() => ({ close: k }), [k]),
      S = p.exports.useMemo(() => ({ open: y === 0, close: k }), [y, k]),
      C = { ref: u };
    return D.createElement(
      ss.Provider,
      { value: h },
      D.createElement(
        cs.Provider,
        { value: g },
        D.createElement(
          Pl,
          { value: Z(y, { [0]: ve.Open, [1]: ve.Closed }) },
          te({
            ourProps: C,
            theirProps: r,
            slot: S,
            defaultTag: G0,
            name: "Disclosure",
          })
        )
      )
    );
  }),
  J0 = "button",
  q0 = ne(function (e, t) {
    let [n, r] = as("Disclosure.Button"),
      o = K0(),
      l = o === null ? !1 : o === n.panelId,
      i = p.exports.useRef(null),
      u = b(i, t, l ? null : n.buttonRef),
      a = p.exports.useCallback(
        (S) => {
          var C;
          if (l) {
            if (n.disclosureState === 1) return;
            switch (S.key) {
              case z.Space:
              case z.Enter:
                S.preventDefault(),
                  S.stopPropagation(),
                  r({ type: 0 }),
                  (C = n.buttonRef.current) == null || C.focus();
                break;
            }
          } else
            switch (S.key) {
              case z.Space:
              case z.Enter:
                S.preventDefault(), S.stopPropagation(), r({ type: 0 });
                break;
            }
        },
        [r, l, n.disclosureState, n.buttonRef]
      ),
      c = p.exports.useCallback((S) => {
        switch (S.key) {
          case z.Space:
            S.preventDefault();
            break;
        }
      }, []),
      h = p.exports.useCallback(
        (S) => {
          var C;
          br(S.currentTarget) ||
            e.disabled ||
            (l
              ? (r({ type: 0 }), (C = n.buttonRef.current) == null || C.focus())
              : r({ type: 0 }));
        },
        [r, e.disabled, n.buttonRef, l]
      ),
      y = p.exports.useMemo(() => ({ open: n.disclosureState === 0 }), [n]),
      v = os(e, i),
      k = e,
      g = l
        ? { ref: u, type: v, onKeyDown: a, onClick: h }
        : {
            ref: u,
            id: n.buttonId,
            type: v,
            "aria-expanded": e.disabled ? void 0 : n.disclosureState === 0,
            "aria-controls": n.linkedPanel ? n.panelId : void 0,
            onKeyDown: a,
            onKeyUp: c,
            onClick: h,
          };
    return te({
      ourProps: g,
      theirProps: k,
      slot: y,
      defaultTag: J0,
      name: "Disclosure.Button",
    });
  }),
  b0 = "div",
  eh = Ye.RenderStrategy | Ye.Static,
  th = ne(function (e, t) {
    let [n, r] = as("Disclosure.Panel"),
      { close: o } = ff("Disclosure.Panel"),
      l = b(t, n.panelRef, () => {
        n.linkedPanel || r({ type: 4 });
      }),
      i = hn(),
      u = (() => (i !== null ? i === ve.Open : n.disclosureState === 0))();
    p.exports.useEffect(() => () => r({ type: 5 }), [r]),
      p.exports.useEffect(() => {
        var y;
        n.disclosureState === 1 &&
          ((y = e.unmount) != null ? y : !0) &&
          r({ type: 5 });
      }, [n.disclosureState, e.unmount, r]);
    let a = p.exports.useMemo(
        () => ({ open: n.disclosureState === 0, close: o }),
        [n, o]
      ),
      c = e,
      h = { ref: l, id: n.panelId };
    return D.createElement(
      ds.Provider,
      { value: n.panelId },
      te({
        ourProps: h,
        theirProps: c,
        slot: a,
        defaultTag: b0,
        features: eh,
        visible: u,
        name: "Disclosure.Panel",
      })
    );
  }),
  oe = Object.assign(X0, { Button: q0, Panel: th });
var nh = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(nh || {}),
  rh = ((e) => (
    (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
  ))(rh || {}),
  oh = ((e) => (
    (e[(e.OpenMenu = 0)] = "OpenMenu"),
    (e[(e.CloseMenu = 1)] = "CloseMenu"),
    (e[(e.GoToItem = 2)] = "GoToItem"),
    (e[(e.Search = 3)] = "Search"),
    (e[(e.ClearSearch = 4)] = "ClearSearch"),
    (e[(e.RegisterItem = 5)] = "RegisterItem"),
    (e[(e.UnregisterItem = 6)] = "UnregisterItem"),
    e
  ))(oh || {});
function ui(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
    r = uf(t(e.items.slice()), (l) => l.dataRef.current.domRef.current),
    o = n ? r.indexOf(n) : null;
  return o === -1 && (o = null), { items: r, activeItemIndex: o };
}
let lh = {
    [1](e) {
      return e.menuState === 1
        ? e
        : H(R({}, e), { activeItemIndex: null, menuState: 1 });
    },
    [0](e) {
      return e.menuState === 0 ? e : H(R({}, e), { menuState: 0 });
    },
    [2]: (e, t) => {
      var n;
      let r = ui(e),
        o = a0(t, {
          resolveItems: () => r.items,
          resolveActiveIndex: () => r.activeItemIndex,
          resolveId: (l) => l.id,
          resolveDisabled: (l) => l.dataRef.current.disabled,
        });
      return H(R(R({}, e), r), {
        searchQuery: "",
        activeItemIndex: o,
        activationTrigger: (n = t.trigger) != null ? n : 1,
      });
    },
    [3]: (e, t) => {
      let n = e.searchQuery !== "" ? 0 : 1,
        r = e.searchQuery + t.value.toLowerCase(),
        o = (
          e.activeItemIndex !== null
            ? e.items
                .slice(e.activeItemIndex + n)
                .concat(e.items.slice(0, e.activeItemIndex + n))
            : e.items
        ).find((i) => {
          var u;
          return (
            ((u = i.dataRef.current.textValue) == null
              ? void 0
              : u.startsWith(r)) && !i.dataRef.current.disabled
          );
        }),
        l = o ? e.items.indexOf(o) : -1;
      return l === -1 || l === e.activeItemIndex
        ? H(R({}, e), { searchQuery: r })
        : H(R({}, e), {
            searchQuery: r,
            activeItemIndex: l,
            activationTrigger: 1,
          });
    },
    [4](e) {
      return e.searchQuery === ""
        ? e
        : H(R({}, e), { searchQuery: "", searchActiveItemIndex: null });
    },
    [5]: (e, t) => {
      let n = ui(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
      return R(R({}, e), n);
    },
    [6]: (e, t) => {
      let n = ui(e, (r) => {
        let o = r.findIndex((l) => l.id === t.id);
        return o !== -1 && r.splice(o, 1), r;
      });
      return H(R(R({}, e), n), { activationTrigger: 1 });
    },
  },
  fs = p.exports.createContext(null);
fs.displayName = "MenuContext";
function Nl(e) {
  let t = p.exports.useContext(fs);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Nl), n);
  }
  return t;
}
function ih(e, t) {
  return Z(t.type, lh, e, t);
}
let uh = p.exports.Fragment,
  sh = ne(function (e, t) {
    let n = p.exports.useReducer(ih, {
        menuState: 1,
        buttonRef: p.exports.createRef(),
        itemsRef: p.exports.createRef(),
        items: [],
        searchQuery: "",
        activeItemIndex: null,
        activationTrigger: 1,
      }),
      [{ menuState: r, itemsRef: o, buttonRef: l }, i] = n,
      u = b(t);
    ns([l, o], (y, v) => {
      var k;
      r === 0 &&
        (i({ type: 1 }),
        lf(v, ls.Loose) ||
          (y.preventDefault(), (k = l.current) == null || k.focus()));
    });
    let a = p.exports.useMemo(() => ({ open: r === 0 }), [r]),
      c = e,
      h = { ref: u };
    return D.createElement(
      fs.Provider,
      { value: n },
      D.createElement(
        Pl,
        { value: Z(r, { [0]: ve.Open, [1]: ve.Closed }) },
        te({
          ourProps: h,
          theirProps: c,
          slot: a,
          defaultTag: uh,
          name: "Menu",
        })
      )
    );
  }),
  ah = "button",
  ch = ne(function (e, t) {
    var n;
    let [r, o] = Nl("Menu.Button"),
      l = b(r.buttonRef, t),
      i = `headlessui-menu-button-${Le()}`,
      u = ts(),
      a = p.exports.useCallback(
        (g) => {
          switch (g.key) {
            case z.Space:
            case z.Enter:
            case z.ArrowDown:
              g.preventDefault(),
                g.stopPropagation(),
                o({ type: 0 }),
                u.nextFrame(() => o({ type: 2, focus: rt.First }));
              break;
            case z.ArrowUp:
              g.preventDefault(),
                g.stopPropagation(),
                o({ type: 0 }),
                u.nextFrame(() => o({ type: 2, focus: rt.Last }));
              break;
          }
        },
        [o, u]
      ),
      c = p.exports.useCallback((g) => {
        switch (g.key) {
          case z.Space:
            g.preventDefault();
            break;
        }
      }, []),
      h = p.exports.useCallback(
        (g) => {
          if (br(g.currentTarget)) return g.preventDefault();
          e.disabled ||
            (r.menuState === 0
              ? (o({ type: 1 }),
                u.nextFrame(() => {
                  var S;
                  return (S = r.buttonRef.current) == null
                    ? void 0
                    : S.focus({ preventScroll: !0 });
                }))
              : (g.preventDefault(), g.stopPropagation(), o({ type: 0 })));
        },
        [o, u, r, e.disabled]
      ),
      y = p.exports.useMemo(() => ({ open: r.menuState === 0 }), [r]),
      v = e,
      k = {
        ref: l,
        id: i,
        type: os(e, r.buttonRef),
        "aria-haspopup": !0,
        "aria-controls": (n = r.itemsRef.current) == null ? void 0 : n.id,
        "aria-expanded": e.disabled ? void 0 : r.menuState === 0,
        onKeyDown: a,
        onKeyUp: c,
        onClick: h,
      };
    return te({
      ourProps: k,
      theirProps: v,
      slot: y,
      defaultTag: ah,
      name: "Menu.Button",
    });
  }),
  dh = "div",
  fh = Ye.RenderStrategy | Ye.Static,
  ph = ne(function (e, t) {
    var n, r;
    let [o, l] = Nl("Menu.Items"),
      i = b(o.itemsRef, t),
      u = Gt(o.itemsRef),
      a = `headlessui-menu-items-${Le()}`,
      c = ts(),
      h = hn(),
      y = (() => (h !== null ? h === ve.Open : o.menuState === 0))();
    p.exports.useEffect(() => {
      let d = o.itemsRef.current;
      !d ||
        (o.menuState === 0 &&
          d !== (u == null ? void 0 : u.activeElement) &&
          d.focus({ preventScroll: !0 }));
    }, [o.menuState, o.itemsRef, u]),
      d0({
        container: o.itemsRef.current,
        enabled: o.menuState === 0,
        accept(d) {
          return d.getAttribute("role") === "menuitem"
            ? NodeFilter.FILTER_REJECT
            : d.hasAttribute("role")
            ? NodeFilter.FILTER_SKIP
            : NodeFilter.FILTER_ACCEPT;
        },
        walk(d) {
          d.setAttribute("role", "none");
        },
      });
    let v = p.exports.useCallback(
        (d) => {
          var f, m;
          switch ((c.dispose(), d.key)) {
            case z.Space:
              if (o.searchQuery !== "")
                return (
                  d.preventDefault(),
                  d.stopPropagation(),
                  l({ type: 3, value: d.key })
                );
            case z.Enter:
              if (
                (d.preventDefault(),
                d.stopPropagation(),
                l({ type: 1 }),
                o.activeItemIndex !== null)
              ) {
                let { dataRef: x } = o.items[o.activeItemIndex];
                (m = (f = x.current) == null ? void 0 : f.domRef.current) ==
                  null || m.click();
              }
              Qt().nextFrame(() => {
                var x;
                return (x = o.buttonRef.current) == null
                  ? void 0
                  : x.focus({ preventScroll: !0 });
              });
              break;
            case z.ArrowDown:
              return (
                d.preventDefault(),
                d.stopPropagation(),
                l({ type: 2, focus: rt.Next })
              );
            case z.ArrowUp:
              return (
                d.preventDefault(),
                d.stopPropagation(),
                l({ type: 2, focus: rt.Previous })
              );
            case z.Home:
            case z.PageUp:
              return (
                d.preventDefault(),
                d.stopPropagation(),
                l({ type: 2, focus: rt.First })
              );
            case z.End:
            case z.PageDown:
              return (
                d.preventDefault(),
                d.stopPropagation(),
                l({ type: 2, focus: rt.Last })
              );
            case z.Escape:
              d.preventDefault(),
                d.stopPropagation(),
                l({ type: 1 }),
                Qt().nextFrame(() => {
                  var x;
                  return (x = o.buttonRef.current) == null
                    ? void 0
                    : x.focus({ preventScroll: !0 });
                });
              break;
            case z.Tab:
              d.preventDefault(), d.stopPropagation();
              break;
            default:
              d.key.length === 1 &&
                (l({ type: 3, value: d.key }),
                c.setTimeout(() => l({ type: 4 }), 350));
              break;
          }
        },
        [l, c, o, u]
      ),
      k = p.exports.useCallback((d) => {
        switch (d.key) {
          case z.Space:
            d.preventDefault();
            break;
        }
      }, []),
      g = p.exports.useMemo(() => ({ open: o.menuState === 0 }), [o]),
      S = e,
      C = {
        "aria-activedescendant":
          o.activeItemIndex === null || (n = o.items[o.activeItemIndex]) == null
            ? void 0
            : n.id,
        "aria-labelledby": (r = o.buttonRef.current) == null ? void 0 : r.id,
        id: a,
        onKeyDown: v,
        onKeyUp: k,
        role: "menu",
        tabIndex: 0,
        ref: i,
      };
    return te({
      ourProps: C,
      theirProps: S,
      slot: g,
      defaultTag: dh,
      features: fh,
      visible: y,
      name: "Menu.Items",
    });
  }),
  hh = p.exports.Fragment,
  mh = ne(function (e, t) {
    let C = e,
      { disabled: n = !1 } = C,
      r = Je(C, ["disabled"]),
      [o, l] = Nl("Menu.Item"),
      i = `headlessui-menu-item-${Le()}`,
      u = o.activeItemIndex !== null ? o.items[o.activeItemIndex].id === i : !1,
      a = p.exports.useRef(null),
      c = b(t, a);
    we(() => {
      if (o.menuState !== 0 || !u || o.activationTrigger === 0) return;
      let d = Qt();
      return (
        d.requestAnimationFrame(() => {
          var f, m;
          (m = (f = a.current) == null ? void 0 : f.scrollIntoView) == null ||
            m.call(f, { block: "nearest" });
        }),
        d.dispose
      );
    }, [a, u, o.menuState, o.activationTrigger, o.activeItemIndex]);
    let h = p.exports.useRef({ disabled: n, domRef: a });
    we(() => {
      h.current.disabled = n;
    }, [h, n]),
      we(() => {
        var d, f;
        h.current.textValue =
          (f = (d = a.current) == null ? void 0 : d.textContent) == null
            ? void 0
            : f.toLowerCase();
      }, [h, a]),
      we(
        () => (l({ type: 5, id: i, dataRef: h }), () => l({ type: 6, id: i })),
        [h, i]
      );
    let y = p.exports.useCallback(
        (d) => {
          if (n) return d.preventDefault();
          l({ type: 1 }),
            Qt().nextFrame(() => {
              var f;
              return (f = o.buttonRef.current) == null
                ? void 0
                : f.focus({ preventScroll: !0 });
            });
        },
        [l, o.buttonRef, n]
      ),
      v = p.exports.useCallback(() => {
        if (n) return l({ type: 2, focus: rt.Nothing });
        l({ type: 2, focus: rt.Specific, id: i });
      }, [n, i, l]),
      k = p.exports.useCallback(() => {
        n || u || l({ type: 2, focus: rt.Specific, id: i, trigger: 0 });
      }, [n, u, i, l]),
      g = p.exports.useCallback(() => {
        n || !u || l({ type: 2, focus: rt.Nothing });
      }, [n, u, l]),
      S = p.exports.useMemo(() => ({ active: u, disabled: n }), [u, n]);
    return te({
      ourProps: {
        id: i,
        ref: c,
        role: "menuitem",
        tabIndex: n === !0 ? void 0 : -1,
        "aria-disabled": n === !0 ? !0 : void 0,
        disabled: void 0,
        onClick: y,
        onFocus: v,
        onPointerMove: k,
        onMouseMove: k,
        onPointerLeave: g,
        onMouseLeave: g,
      },
      theirProps: r,
      slot: S,
      defaultTag: hh,
      name: "Menu.Item",
    });
  }),
  ie = Object.assign(sh, { Button: ch, Items: ph, Item: mh });
var vh = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(vh || {}),
  yh = ((e) => (
    (e[(e.TogglePopover = 0)] = "TogglePopover"),
    (e[(e.ClosePopover = 1)] = "ClosePopover"),
    (e[(e.SetButton = 2)] = "SetButton"),
    (e[(e.SetButtonId = 3)] = "SetButtonId"),
    (e[(e.SetPanel = 4)] = "SetPanel"),
    (e[(e.SetPanelId = 5)] = "SetPanelId"),
    e
  ))(yh || {});
let gh = {
    [0]: (e) =>
      H(R({}, e), { popoverState: Z(e.popoverState, { [0]: 1, [1]: 0 }) }),
    [1](e) {
      return e.popoverState === 1 ? e : H(R({}, e), { popoverState: 1 });
    },
    [2](e, t) {
      return e.button === t.button ? e : H(R({}, e), { button: t.button });
    },
    [3](e, t) {
      return e.buttonId === t.buttonId
        ? e
        : H(R({}, e), { buttonId: t.buttonId });
    },
    [4](e, t) {
      return e.panel === t.panel ? e : H(R({}, e), { panel: t.panel });
    },
    [5](e, t) {
      return e.panelId === t.panelId ? e : H(R({}, e), { panelId: t.panelId });
    },
  },
  ps = p.exports.createContext(null);
ps.displayName = "PopoverContext";
function _l(e) {
  let t = p.exports.useContext(ps);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, _l), n);
  }
  return t;
}
let hs = p.exports.createContext(null);
hs.displayName = "PopoverAPIContext";
function pf(e) {
  let t = p.exports.useContext(hs);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Popover /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, pf), n);
  }
  return t;
}
let ms = p.exports.createContext(null);
ms.displayName = "PopoverGroupContext";
function hf() {
  return p.exports.useContext(ms);
}
let vs = p.exports.createContext(null);
vs.displayName = "PopoverPanelContext";
function kh() {
  return p.exports.useContext(vs);
}
function xh(e, t) {
  return Z(t.type, gh, e, t);
}
let wh = "div",
  Eh = ne(function (e, t) {
    let n = `headlessui-popover-button-${Le()}`,
      r = `headlessui-popover-panel-${Le()}`,
      o = p.exports.useRef(null),
      l = b(t, o),
      i = Gt(o),
      u = p.exports.useReducer(xh, {
        popoverState: 1,
        button: null,
        buttonId: n,
        panel: null,
        panelId: r,
      }),
      [{ popoverState: a, button: c, panel: h }, y] = u;
    p.exports.useEffect(() => y({ type: 3, buttonId: n }), [n, y]),
      p.exports.useEffect(() => y({ type: 5, panelId: r }), [r, y]);
    let v = p.exports.useMemo(
        () => ({ buttonId: n, panelId: r, close: () => y({ type: 1 }) }),
        [n, r, y]
      ),
      k = hf(),
      g = k == null ? void 0 : k.registerPopover,
      S = p.exports.useCallback(() => {
        var w;
        return (w = k == null ? void 0 : k.isFocusWithinPopoverGroup()) != null
          ? w
          : (i == null ? void 0 : i.activeElement) &&
              ((c == null ? void 0 : c.contains(i.activeElement)) ||
                (h == null ? void 0 : h.contains(i.activeElement)));
      }, [k, c, h]);
    p.exports.useEffect(() => (g == null ? void 0 : g(v)), [g, v]),
      dn(
        i == null ? void 0 : i.defaultView,
        "focus",
        () => {
          a === 0 && (S() || !c || !h || y({ type: 1 }));
        },
        !0
      ),
      ns([c, h], (w, N) => {
        a === 0 &&
          (y({ type: 1 }),
          lf(N, ls.Loose) || (w.preventDefault(), c == null || c.focus()));
      });
    let C = p.exports.useCallback(
        (w) => {
          y({ type: 1 });
          let N = (() =>
            w
              ? w instanceof HTMLElement
                ? w
                : w.current instanceof HTMLElement
                ? w.current
                : c
              : c)();
          N == null || N.focus();
        },
        [y, c]
      ),
      d = p.exports.useMemo(() => ({ close: C }), [C]),
      f = p.exports.useMemo(() => ({ open: a === 0, close: C }), [a, C]),
      m = e,
      x = { ref: l };
    return D.createElement(
      ps.Provider,
      { value: u },
      D.createElement(
        hs.Provider,
        { value: d },
        D.createElement(
          Pl,
          { value: Z(a, { [0]: ve.Open, [1]: ve.Closed }) },
          te({
            ourProps: x,
            theirProps: m,
            slot: f,
            defaultTag: wh,
            name: "Popover",
          })
        )
      )
    );
  }),
  Sh = "button",
  Ch = ne(function (e, t) {
    let [n, r] = _l("Popover.Button"),
      o = p.exports.useRef(null),
      l = hf(),
      i = l == null ? void 0 : l.closeOthers,
      u = kh(),
      a = u === null ? !1 : u === n.panelId,
      c = b(o, t, a ? null : (w) => r({ type: 2, button: w })),
      h = b(o, t),
      y = Gt(o),
      v = p.exports.useRef(null),
      k = p.exports.useRef(null);
    dn(
      y == null ? void 0 : y.defaultView,
      "focus",
      () => {
        (k.current = v.current),
          (v.current = y == null ? void 0 : y.activeElement);
      },
      !0
    );
    let g = p.exports.useCallback(
        (w) => {
          var N, _, M, A;
          if (a) {
            if (n.popoverState === 1) return;
            switch (w.key) {
              case z.Space:
              case z.Enter:
                w.preventDefault(),
                  (_ = (N = w.target).click) == null || _.call(N),
                  r({ type: 1 }),
                  (M = n.button) == null || M.focus();
                break;
            }
          } else
            switch (w.key) {
              case z.Space:
              case z.Enter:
                w.preventDefault(),
                  w.stopPropagation(),
                  n.popoverState === 1 && (i == null || i(n.buttonId)),
                  r({ type: 0 });
                break;
              case z.Escape:
                if (n.popoverState !== 0)
                  return i == null ? void 0 : i(n.buttonId);
                if (
                  !o.current ||
                  ((y == null ? void 0 : y.activeElement) &&
                    !o.current.contains(y.activeElement))
                )
                  return;
                w.preventDefault(), w.stopPropagation(), r({ type: 1 });
                break;
              case z.Tab:
                if (n.popoverState !== 0 || !n.panel || !n.button) return;
                if (w.shiftKey) {
                  if (
                    !k.current ||
                    ((A = n.button) != null && A.contains(k.current)) ||
                    n.panel.contains(k.current)
                  )
                    return;
                  let O = il(y == null ? void 0 : y.body),
                    de = O.indexOf(k.current);
                  if (O.indexOf(n.button) > de) return;
                  w.preventDefault(), w.stopPropagation(), xt(n.panel, je.Last);
                } else
                  w.preventDefault(),
                    w.stopPropagation(),
                    xt(n.panel, je.First);
                break;
            }
        },
        [r, n.popoverState, n.buttonId, n.button, n.panel, o, i, a]
      ),
      S = p.exports.useCallback(
        (w) => {
          var N;
          if (
            !a &&
            (w.key === z.Space && w.preventDefault(),
            n.popoverState === 0 && !!n.panel && !!n.button)
          )
            switch (w.key) {
              case z.Tab:
                if (
                  !k.current ||
                  ((N = n.button) != null && N.contains(k.current)) ||
                  n.panel.contains(k.current)
                )
                  return;
                let _ = il(y == null ? void 0 : y.body),
                  M = _.indexOf(k.current);
                if (_.indexOf(n.button) > M) return;
                w.preventDefault(), w.stopPropagation(), xt(n.panel, je.Last);
                break;
            }
        },
        [n.popoverState, n.panel, n.button, a]
      ),
      C = p.exports.useCallback(
        (w) => {
          var N, _;
          br(w.currentTarget) ||
            e.disabled ||
            (a
              ? (r({ type: 1 }), (N = n.button) == null || N.focus())
              : (w.preventDefault(),
                w.stopPropagation(),
                n.popoverState === 1 && (i == null || i(n.buttonId)),
                (_ = n.button) == null || _.focus(),
                r({ type: 0 })));
        },
        [r, n.button, n.popoverState, n.buttonId, e.disabled, i, a]
      ),
      d = p.exports.useMemo(() => ({ open: n.popoverState === 0 }), [n]),
      f = os(e, o),
      m = e,
      x = a
        ? { ref: h, type: f, onKeyDown: g, onClick: C }
        : {
            ref: c,
            id: n.buttonId,
            type: f,
            "aria-expanded": e.disabled ? void 0 : n.popoverState === 0,
            "aria-controls": n.panel ? n.panelId : void 0,
            onKeyDown: g,
            onKeyUp: S,
            onClick: C,
          };
    return te({
      ourProps: x,
      theirProps: m,
      slot: d,
      defaultTag: Sh,
      name: "Popover.Button",
    });
  }),
  Lh = "div",
  Ph = Ye.RenderStrategy | Ye.Static,
  Nh = ne(function (e, t) {
    let [{ popoverState: n }, r] = _l("Popover.Overlay"),
      o = b(t),
      l = `headlessui-popover-overlay-${Le()}`,
      i = hn(),
      u = (() => (i !== null ? i === ve.Open : n === 0))(),
      a = p.exports.useCallback(
        (h) => {
          if (br(h.currentTarget)) return h.preventDefault();
          r({ type: 1 });
        },
        [r]
      ),
      c = p.exports.useMemo(() => ({ open: n === 0 }), [n]);
    return te({
      ourProps: { ref: o, id: l, "aria-hidden": !0, onClick: a },
      theirProps: e,
      slot: c,
      defaultTag: Lh,
      features: Ph,
      visible: u,
      name: "Popover.Overlay",
    });
  }),
  _h = "div",
  Ih = Ye.RenderStrategy | Ye.Static,
  Th = ne(function (e, t) {
    let S = e,
      { focus: n = !1 } = S,
      r = Je(S, ["focus"]),
      [o, l] = _l("Popover.Panel"),
      { close: i } = pf("Popover.Panel"),
      u = p.exports.useRef(null),
      a = b(u, t, (C) => {
        l({ type: 4, panel: C });
      }),
      c = Gt(u),
      h = hn(),
      y = (() => (h !== null ? h === ve.Open : o.popoverState === 0))(),
      v = p.exports.useCallback(
        (C) => {
          var d;
          switch (C.key) {
            case z.Escape:
              if (
                o.popoverState !== 0 ||
                !u.current ||
                ((c == null ? void 0 : c.activeElement) &&
                  !u.current.contains(c.activeElement))
              )
                return;
              C.preventDefault(),
                C.stopPropagation(),
                l({ type: 1 }),
                (d = o.button) == null || d.focus();
              break;
          }
        },
        [o, u, l]
      );
    p.exports.useEffect(() => () => l({ type: 4, panel: null }), [l]),
      p.exports.useEffect(() => {
        var C;
        e.static ||
          (o.popoverState === 1 &&
            ((C = e.unmount) != null ? C : !0) &&
            l({ type: 4, panel: null }));
      }, [o.popoverState, e.unmount, e.static, l]),
      p.exports.useEffect(() => {
        if (!n || o.popoverState !== 0 || !u.current) return;
        let C = c == null ? void 0 : c.activeElement;
        u.current.contains(C) || xt(u.current, je.First);
      }, [n, u, o.popoverState]),
      dn(c == null ? void 0 : c.defaultView, "keydown", (C) => {
        var d;
        if (
          o.popoverState !== 0 ||
          !u.current ||
          C.key !== z.Tab ||
          !(c != null && c.activeElement) ||
          !u.current ||
          !u.current.contains(c.activeElement)
        )
          return;
        C.preventDefault();
        let f = xt(u.current, C.shiftKey ? je.Previous : je.Next);
        if (f === Yn.Underflow)
          return (d = o.button) == null ? void 0 : d.focus();
        if (f === Yn.Overflow) {
          if (!o.button) return;
          let m = il(c.body),
            x = m.indexOf(o.button),
            w = m.splice(x + 1).filter((N) => {
              var _;
              return !((_ = u.current) != null && _.contains(N));
            });
          xt(w, je.First) === Yn.Error && xt(c.body, je.First);
        }
      }),
      dn(
        c == null ? void 0 : c.defaultView,
        "focus",
        () => {
          var C;
          !n ||
            (o.popoverState === 0 &&
              (!u.current ||
                ((c == null ? void 0 : c.activeElement) &&
                  ((C = u.current) == null
                    ? void 0
                    : C.contains(c.activeElement))) ||
                l({ type: 1 })));
        },
        !0
      );
    let k = p.exports.useMemo(
        () => ({ open: o.popoverState === 0, close: i }),
        [o, i]
      ),
      g = { ref: a, id: o.panelId, onKeyDown: v };
    return D.createElement(
      vs.Provider,
      { value: o.panelId },
      te({
        ourProps: g,
        theirProps: r,
        slot: k,
        defaultTag: _h,
        features: Ih,
        visible: y,
        name: "Popover.Panel",
      })
    );
  }),
  Mh = "div",
  $h = ne(function (e, t) {
    let n = p.exports.useRef(null),
      r = b(n, t),
      [o, l] = p.exports.useState([]),
      i = p.exports.useCallback(
        (g) => {
          l((S) => {
            let C = S.indexOf(g);
            if (C !== -1) {
              let d = S.slice();
              return d.splice(C, 1), d;
            }
            return S;
          });
        },
        [l]
      ),
      u = p.exports.useCallback(
        (g) => (l((S) => [...S, g]), () => i(g)),
        [l, i]
      ),
      a = p.exports.useCallback(() => {
        var g;
        let S = mn(n);
        if (!S) return !1;
        let C = S.activeElement;
        return (g = n.current) != null && g.contains(C)
          ? !0
          : o.some((d) => {
              var f, m;
              return (
                ((f = S.getElementById(d.buttonId)) == null
                  ? void 0
                  : f.contains(C)) ||
                ((m = S.getElementById(d.panelId)) == null
                  ? void 0
                  : m.contains(C))
              );
            });
      }, [n, o]),
      c = p.exports.useCallback(
        (g) => {
          for (let S of o) S.buttonId !== g && S.close();
        },
        [o]
      ),
      h = p.exports.useMemo(
        () => ({
          registerPopover: u,
          unregisterPopover: i,
          isFocusWithinPopoverGroup: a,
          closeOthers: c,
        }),
        [u, i, a, c]
      ),
      y = p.exports.useMemo(() => ({}), []),
      v = e,
      k = { ref: r };
    return D.createElement(
      ms.Provider,
      { value: h },
      te({
        ourProps: k,
        theirProps: v,
        slot: y,
        defaultTag: Mh,
        name: "Popover.Group",
      })
    );
  }),
  Gn = Object.assign(Eh, { Button: Ch, Overlay: Nh, Panel: Th, Group: $h });
function Rh(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function si(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function ai(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var lu = ((e) => ((e.Ended = "ended"), (e.Cancelled = "cancelled"), e))(
  lu || {}
);
function Oh(e, t) {
  let n = Qt();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e),
    [l, i] = [r, o].map((u) => {
      let [a = 0] = u
        .split(",")
        .filter(Boolean)
        .map((c) => (c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3))
        .sort((c, h) => h - c);
      return a;
    });
  if (l + i !== 0) {
    let u = [];
    u.push(
      n.addEventListener(
        e,
        "transitionrun",
        () => {
          u.splice(0).forEach((a) => a()),
            u.push(
              n.addEventListener(
                e,
                "transitionend",
                () => {
                  t("ended"), u.splice(0).forEach((a) => a());
                },
                { once: !0 }
              ),
              n.addEventListener(
                e,
                "transitioncancel",
                () => {
                  t("cancelled"), u.splice(0).forEach((a) => a());
                },
                { once: !0 }
              )
            );
        },
        { once: !0 }
      )
    );
  } else t("ended");
  return n.add(() => t("cancelled")), n.dispose;
}
function jh(e, t, n, r) {
  let o = n ? "enter" : "leave",
    l = Qt(),
    i = r !== void 0 ? Rh(r) : () => {},
    u = Z(o, { enter: () => t.enter, leave: () => t.leave }),
    a = Z(o, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = Z(o, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    ai(
      e,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    si(e, ...u, ...c),
    l.nextFrame(() => {
      ai(e, ...c),
        si(e, ...a),
        Oh(
          e,
          (h) => (h === "ended" && (ai(e, ...u), si(e, ...t.entered)), i(h))
        );
    }),
    l.dispose
  );
}
function Dh({
  container: e,
  direction: t,
  classes: n,
  events: r,
  onStart: o,
  onStop: l,
}) {
  let i = is(),
    u = ts(),
    a = Qe(t),
    c = Qe(() =>
      Z(a.current, {
        enter: () => r.current.beforeEnter(),
        leave: () => r.current.beforeLeave(),
        idle: () => {},
      })
    ),
    h = Qe(() =>
      Z(a.current, {
        enter: () => r.current.afterEnter(),
        leave: () => r.current.afterLeave(),
        idle: () => {},
      })
    );
  we(() => {
    let y = Qt();
    u.add(y.dispose);
    let v = e.current;
    if (!!v && a.current !== "idle" && !!i.current)
      return (
        y.dispose(),
        c.current(),
        o.current(a.current),
        y.add(
          jh(v, n.current, a.current === "enter", (k) => {
            y.dispose(),
              Z(k, {
                [lu.Ended]() {
                  h.current(), l.current(a.current);
                },
                [lu.Cancelled]: () => {},
              });
          })
        ),
        y.dispose
      );
  }, [t]);
}
function qt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Il = p.exports.createContext(null);
Il.displayName = "TransitionContext";
var Ah = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Ah || {});
function Fh() {
  let e = p.exports.useContext(Il);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function zh() {
  let e = p.exports.useContext(Tl);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Tl = p.exports.createContext(null);
Tl.displayName = "NestingContext";
function Ml(e) {
  return "children" in e
    ? Ml(e.children)
    : e.current.filter(({ state: t }) => t === "visible").length > 0;
}
function mf(e) {
  let t = Qe(e),
    n = p.exports.useRef([]),
    r = is(),
    o = Qe((i, u = kt.Hidden) => {
      let a = n.current.findIndex(({ id: c }) => c === i);
      a !== -1 &&
        (Z(u, {
          [kt.Unmount]() {
            n.current.splice(a, 1);
          },
          [kt.Hidden]() {
            n.current[a].state = "hidden";
          },
        }),
        rf(() => {
          var c;
          !Ml(n) && r.current && ((c = t.current) == null || c.call(t));
        }));
    }),
    l = Qe((i) => {
      let u = n.current.find(({ id: a }) => a === i);
      return (
        u
          ? u.state !== "visible" && (u.state = "visible")
          : n.current.push({ id: i, state: "visible" }),
        () => o.current(i, kt.Unmount)
      );
    });
  return p.exports.useMemo(
    () => ({ children: n, register: l, unregister: o }),
    [l, o, n]
  );
}
function Wh() {}
let Uh = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function za(e) {
  var t;
  let n = {};
  for (let r of Uh) n[r] = (t = e[r]) != null ? t : Wh;
  return n;
}
function Bh(e) {
  let t = p.exports.useRef(za(e));
  return (
    p.exports.useEffect(() => {
      t.current = za(e);
    }, [e]),
    t
  );
}
let Hh = "div",
  vf = Ye.RenderStrategy,
  yf = ne(function (e, t) {
    let $ = e,
      {
        beforeEnter: n,
        afterEnter: r,
        beforeLeave: o,
        afterLeave: l,
        enter: i,
        enterFrom: u,
        enterTo: a,
        entered: c,
        leave: h,
        leaveFrom: y,
        leaveTo: v,
      } = $,
      k = Je($, [
        "beforeEnter",
        "afterEnter",
        "beforeLeave",
        "afterLeave",
        "enter",
        "enterFrom",
        "enterTo",
        "entered",
        "leave",
        "leaveFrom",
        "leaveTo",
      ]),
      g = p.exports.useRef(null),
      S = b(g, t),
      [C, d] = p.exports.useState("visible"),
      f = k.unmount ? kt.Unmount : kt.Hidden,
      { show: m, appear: x, initial: w } = Fh(),
      { register: N, unregister: _ } = zh(),
      M = p.exports.useRef(null),
      A = Le(),
      O = p.exports.useRef(!1),
      de = mf(() => {
        O.current || (d("hidden"), _.current(A));
      });
    p.exports.useEffect(() => {
      if (A) return N.current(A);
    }, [N, A]),
      p.exports.useEffect(() => {
        if (f === kt.Hidden && !!A) {
          if (m && C !== "visible") {
            d("visible");
            return;
          }
          Z(C, { hidden: () => _.current(A), visible: () => N.current(A) });
        }
      }, [C, A, N, _, m, f]);
    let pt = Qe({
        enter: qt(i),
        enterFrom: qt(u),
        enterTo: qt(a),
        entered: qt(c),
        leave: qt(h),
        leaveFrom: qt(y),
        leaveTo: qt(v),
      }),
      it = Bh({ beforeEnter: n, afterEnter: r, beforeLeave: o, afterLeave: l }),
      Pt = qr();
    p.exports.useEffect(() => {
      if (Pt && C === "visible" && g.current === null)
        throw new Error(
          "Did you forget to passthrough the `ref` to the actual DOM node?"
        );
    }, [g, C, Pt]);
    let Nt = w && !x,
      K = (() =>
        !Pt || Nt || M.current === m ? "idle" : m ? "enter" : "leave")();
    Dh({
      container: g,
      classes: pt,
      events: it,
      direction: K,
      onStart: Qe(() => {}),
      onStop: Qe((j) => {
        j === "leave" && !Ml(de) && (d("hidden"), _.current(A));
      }),
    }),
      p.exports.useEffect(() => {
        !Nt || (f === kt.Hidden ? (M.current = null) : (M.current = m));
      }, [m, Nt, C]);
    let ye = k,
      P = { ref: S };
    return D.createElement(
      Tl.Provider,
      { value: de },
      D.createElement(
        Pl,
        { value: Z(C, { visible: ve.Open, hidden: ve.Closed }) },
        te({
          ourProps: P,
          theirProps: ye,
          defaultTag: Hh,
          features: vf,
          visible: C === "visible",
          name: "Transition.Child",
        })
      )
    );
  }),
  iu = ne(function (e, t) {
    let C = e,
      { show: n, appear: r = !1, unmount: o } = C,
      l = Je(C, ["show", "appear", "unmount"]),
      i = b(t);
    qr();
    let u = hn();
    if (
      (n === void 0 &&
        u !== null &&
        (n = Z(u, { [ve.Open]: !0, [ve.Closed]: !1 })),
      ![!0, !1].includes(n))
    )
      throw new Error(
        "A <Transition /> is used but it is missing a `show={true | false}` prop."
      );
    let [a, c] = p.exports.useState(n ? "visible" : "hidden"),
      h = mf(() => {
        c("hidden");
      }),
      [y, v] = p.exports.useState(!0),
      k = p.exports.useRef([n]);
    we(() => {
      y !== !1 &&
        k.current[k.current.length - 1] !== n &&
        (k.current.push(n), v(!1));
    }, [k, n]);
    let g = p.exports.useMemo(
      () => ({ show: n, appear: r, initial: y }),
      [n, r, y]
    );
    p.exports.useEffect(() => {
      n ? c("visible") : Ml(h) || c("hidden");
    }, [n, h]);
    let S = { unmount: o };
    return D.createElement(
      Tl.Provider,
      { value: h },
      D.createElement(
        Il.Provider,
        { value: g },
        te({
          ourProps: H(R({}, S), {
            as: p.exports.Fragment,
            children: D.createElement(yf, R(R({ ref: i }, S), l)),
          }),
          theirProps: {},
          defaultTag: p.exports.Fragment,
          features: vf,
          visible: a === "visible",
          name: "Transition",
        })
      )
    );
  });
function Vh(e) {
  let t = p.exports.useContext(Il) !== null,
    n = hn() !== null;
  return D.createElement(
    D.Fragment,
    null,
    !t && n ? D.createElement(iu, R({}, e)) : D.createElement(yf, R({}, e))
  );
}
let ft = Object.assign(iu, { Child: Vh, Root: iu });
const Qh = {
  ABOUT: {
    title: "Quem somos",
    link: { href: "/sobre?track=footer", alt: "Sobre a igreja Emanuel" },
  },
  VISAO: {
    title: "Nossa vis\xE3o",
    link: { href: "/sobre#s-visao?track=footer", alt: "Nossa vis\xE3o" },
  },
  INDENT: {
    title: "Nossa identidade",
    link: { href: "/sobre#s-identidade?track=footer", alt: "Nossa identidade" },
  },
  MISSAO: {
    title: "Nossa miss\xE3o",
    link: { href: "/sobre#s-missao?track=footer", alt: "Nossa miss\xE3o" },
  },
  VALORES: {
    title: "Nossos valores",
    link: { href: "/sobre#s-valores?track=footer", alt: "Nossos valores" },
  },
  FUNCTION: {
    title: "Descri\xE7\xE3o de fun\xE7\xF5es",
    link: {
      href: "/sobre#s-funcoes?track=footer",
      alt: "Descri\xE7\xE3o de fun\xE7\xF5es",
    },
  },
};
function gf() {
  return E(Gn, {
    className: "_pover",
    children: [
      s(Gn.Button, { className: "_pover-button", children: "Institucional" }),
      E(Gn.Panel, {
        className: "_pover-panel _pover-panel_insttucional",
        children: [
          s("div", { className: "_pover-arrow" }),
          s("nav", {
            className: "_pover-nav",
            children: Object.entries(Qh).map(([e, t]) =>
              s(
                "a",
                {
                  href: t.link.href,
                  title: t.link.alt,
                  target: "_blank",
                  children: t.title,
                },
                e
              )
            ),
          }),
        ],
      }),
    ],
  });
}
const Zh = {
  HOME: {
    title: "In\xEDcio",
    link: {
      href: "/ministerios?track=footer",
      alt: "Veja todos nossos minist\xE9rios",
    },
  },
  EVANGELISTICO: {
    title: "Evangel\xEDstico",
    link: {
      href: "/ministerios/evangelismo?track=footer",
      alt: "Minist\xE9rio evangelistico",
    },
  },
  APOIO: {
    title: "Apoio",
    link: {
      href: "/ministerios/apoio?track=footer",
      alt: "Minist\xE9rio de Apoio",
    },
  },
  INFANTIL: {
    title: "Infantil",
    link: {
      href: "/ministerios/infantil?track=footer",
      alt: "Minist\xE9rio infantil",
    },
  },
  COMUNICATION: {
    title: "Comunica\xE7\xE3o",
    link: {
      href: "/ministerios/comunicacao?track=footer",
      alt: "Minist\xE9rio da comunica\xE7\xE3o",
    },
  },
  LOUVOR: {
    title: "Louvor",
    link: {
      href: "/ministerios/louvor?track=footer",
      alt: "Minist\xE9rio do louvor",
    },
  },
  CULINARIA: {
    title: "Culin\xE1ria",
    link: {
      href: "/ministerios/culinaria?track=footer",
      alt: "Minist\xE9rio da culin\xE1ria",
    },
  },
  ADMINIST: {
    title: "Administrativo",
    link: {
      href: "/ministerios/administrativo?track=footer",
      alt: "Minist\xE9rio administrativo",
    },
  },
  INTREG: {
    title: "Integra\xE7\xE3o",
    link: {
      href: "/ministerios/integracao?track=footer",
      alt: "Minist\xE9rio de Integra\xE7\xE3o",
    },
  },
  INTERS: {
    title: "Intercess\xE3o",
    link: {
      href: "/ministerios/intercessao?track=footer",
      alt: "Minist\xE9rio da Intercess\xE3o",
    },
  },
  ENSINO: {
    title: "Ensino",
    link: {
      href: "/ministerios/ensino?track=footer",
      alt: "Minist\xE9rio de ensino",
    },
  },
};
function kf() {
  return E(Gn, {
    className: "_pover",
    children: [
      s(Gn.Button, { className: "_pover-button", children: "Minist\xE9rios" }),
      E(Gn.Panel, {
        className: "_pover-panel",
        children: [
          s("div", { className: "_pover-arrow" }),
          s("nav", {
            className: "_pover-nav",
            children: Object.entries(Zh).map(([e, t]) =>
              s(
                "a",
                {
                  href: t.link.href,
                  title: t.link.alt,
                  target: "_blank",
                  children: t.title,
                },
                e
              )
            ),
          }),
        ],
      }),
    ],
  });
}
function Kh() {
  return E("nav", {
    className: "nav",
    children: [
      s("a", { href: "/?track=Header", title: "Home", children: "Home" }),
      s(gf, {}),
      s(kf, {}),
      s("a", {
        href: "/?track=Header",
        title: "Contribua",
        children: "Contribua",
      }),
    ],
  });
}
var Yh = p.exports.createContext({
    color: "currentColor",
    size: "1em",
    weight: "regular",
    mirrored: !1,
  }),
  Ge = function (t, n, r) {
    var o = r.get(t);
    return o
      ? o(n)
      : (console.error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        ),
        null);
  };
function Wa(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var xf = p.exports.forwardRef(function (e, t) {
  var n = e.alt,
    r = e.color,
    o = e.size,
    l = e.weight,
    i = e.mirrored,
    u = e.children,
    a = e.renderPath,
    c = Wa(e, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "renderPath",
    ]),
    h = p.exports.useContext(Yh),
    y = h.color,
    v = y === void 0 ? "currentColor" : y,
    k = h.size,
    g = h.weight,
    S = g === void 0 ? "regular" : g,
    C = h.mirrored,
    d = C === void 0 ? !1 : C,
    f = Wa(h, ["color", "size", "weight", "mirrored"]);
  return E(
    "svg",
    H(
      R(
        {},
        Object.assign(
          {
            ref: t,
            xmlns: "http://www.w3.org/2000/svg",
            width: o != null ? o : k,
            height: o != null ? o : k,
            fill: r != null ? r : v,
            viewBox: "0 0 256 256",
            transform: i || d ? "scale(-1, 1)" : void 0,
          },
          f,
          c
        )
      ),
      {
        children: [
          !!n && s("title", { children: n }),
          u,
          s("rect", { width: "256", height: "256", fill: "none" }),
          a(l != null ? l : S, r != null ? r : v),
        ],
      }
    )
  );
});
xf.displayName = "IconBase";
var Xe = xf,
  vn = new Map();
vn.set("bold", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "40",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("path", {
        d: "M181.1,208A96,96,0,1,1,224,128c0,22.1-8,40-28,40s-28-17.9-28-40V88",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
    ],
  });
});
vn.set("duotone", function (e) {
  return E(I, {
    children: [
      s("circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }),
      s("circle", {
        cx: "128",
        cy: "128",
        r: "40",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("path", {
        d: "M181.1,208A96,96,0,1,1,224,128c0,22.1-8,40-28,40s-28-17.9-28-40V88",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
vn.set("fill", function () {
  return E(I, {
    children: [
      s("path", {
        d: "M128,24A104.1,104.1,0,0,0,24.1,132.1c2.1,54.7,47,98.8,101.8,99.9a104,104,0,0,0,91.4-50.8,4,4,0,0,0-4.1-6,52.5,52.5,0,0,1-9.2.8c-18.3,0-28.5-8-33.9-14.7a43.9,43.9,0,0,1-3.4-5A48,48,0,1,1,128,80a47.4,47.4,0,0,1,32,12.3v-4a8.2,8.2,0,0,1,7.5-8.3,8,8,0,0,1,8.5,8v40c0,14.6,4.9,32,28,32s27.6-16.2,28-30.5V128A104.1,104.1,0,0,0,128,24Z",
      }),
      s("circle", { cx: "128", cy: "128", r: "32" }),
    ],
  });
});
vn.set("light", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "40",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("path", {
        d: "M181.1,208A96,96,0,1,1,224,128c0,22.1-8,40-28,40s-28-17.9-28-40V88",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
    ],
  });
});
vn.set("thin", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "40",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("path", {
        d: "M181.1,208A96,96,0,1,1,224,128c0,22.1-8,40-28,40s-28-17.9-28-40V88",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
    ],
  });
});
vn.set("regular", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "40",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("path", {
        d: "M181.1,208A96,96,0,1,1,224,128c0,22.1-8,40-28,40s-28-17.9-28-40V88",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
var Gh = function (t, n) {
    return Ge(t, n, vn);
  },
  wf = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: Gh })));
  });
wf.displayName = "At";
var Xh = wf,
  yn = new Map();
yn.set("bold", function (e) {
  return s(I, {
    children: s("polyline", {
      points: "48 160 128 80 208 160",
      fill: "none",
      stroke: e,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "24",
    }),
  });
});
yn.set("duotone", function (e) {
  return E(I, {
    children: [
      s("polygon", { points: "48 160 128 80 208 160 48 160", opacity: "0.2" }),
      s("polygon", {
        points: "48 160 128 80 208 160 48 160",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
yn.set("fill", function () {
  return s(I, {
    children: s("path", {
      d: "M213.7,154.3l-80-80a8.1,8.1,0,0,0-11.4,0l-80,80a8.4,8.4,0,0,0-1.7,8.8A8,8,0,0,0,48,168H208a8,8,0,0,0,7.4-4.9A8.4,8.4,0,0,0,213.7,154.3Z",
    }),
  });
});
yn.set("light", function (e) {
  return s(I, {
    children: s("polyline", {
      points: "48 160 128 80 208 160",
      fill: "none",
      stroke: e,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "12",
    }),
  });
});
yn.set("thin", function (e) {
  return s(I, {
    children: s("polyline", {
      points: "48 160 128 80 208 160",
      fill: "none",
      stroke: e,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8",
    }),
  });
});
yn.set("regular", function (e) {
  return s(I, {
    children: s("polyline", {
      points: "48 160 128 80 208 160",
      fill: "none",
      stroke: e,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "16",
    }),
  });
});
var Jh = function (t, n) {
    return Ge(t, n, yn);
  },
  Ef = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: Jh })));
  });
Ef.displayName = "CaretUp";
var qh = Ef,
  gn = new Map();
gn.set("bold", function () {
  return E(I, {
    children: [
      s("circle", { cx: "60", cy: "60", r: "16" }),
      s("circle", { cx: "128", cy: "60", r: "16" }),
      s("circle", { cx: "196", cy: "60", r: "16" }),
      s("circle", { cx: "60", cy: "128", r: "16" }),
      s("circle", { cx: "128", cy: "128", r: "16" }),
      s("circle", { cx: "196", cy: "128", r: "16" }),
      s("circle", { cx: "60", cy: "196", r: "16" }),
      s("circle", { cx: "128", cy: "196", r: "16" }),
      s("circle", { cx: "196", cy: "196", r: "16" }),
    ],
  });
});
gn.set("duotone", function () {
  return E(I, {
    children: [
      s("circle", { cx: "60", cy: "60", r: "12" }),
      s("circle", { cx: "128", cy: "60", r: "12" }),
      s("circle", { cx: "196", cy: "60", r: "12" }),
      s("circle", { cx: "60", cy: "128", r: "12" }),
      s("circle", { cx: "128", cy: "128", r: "12" }),
      s("circle", { cx: "196", cy: "128", r: "12" }),
      s("circle", { cx: "60", cy: "196", r: "12" }),
      s("circle", { cx: "128", cy: "196", r: "12" }),
      s("circle", { cx: "196", cy: "196", r: "12" }),
    ],
  });
});
gn.set("fill", function () {
  return s(I, {
    children: s("path", {
      d: "M60,48A12,12,0,1,0,72,60,12,12,0,0,0,60,48Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116Z",
    }),
  });
});
gn.set("light", function () {
  return E(I, {
    children: [
      s("circle", { cx: "60", cy: "60", r: "10" }),
      s("circle", { cx: "128", cy: "60", r: "10" }),
      s("circle", { cx: "196", cy: "60", r: "10" }),
      s("circle", { cx: "60", cy: "128", r: "10" }),
      s("circle", { cx: "128", cy: "128", r: "10" }),
      s("circle", { cx: "196", cy: "128", r: "10" }),
      s("circle", { cx: "60", cy: "196", r: "10" }),
      s("circle", { cx: "128", cy: "196", r: "10" }),
      s("circle", { cx: "196", cy: "196", r: "10" }),
    ],
  });
});
gn.set("thin", function () {
  return E(I, {
    children: [
      s("circle", { cx: "60", cy: "60", r: "8" }),
      s("circle", { cx: "128", cy: "60", r: "8" }),
      s("circle", { cx: "196", cy: "60", r: "8" }),
      s("circle", { cx: "60", cy: "128", r: "8" }),
      s("circle", { cx: "128", cy: "128", r: "8" }),
      s("circle", { cx: "196", cy: "128", r: "8" }),
      s("circle", { cx: "60", cy: "196", r: "8" }),
      s("circle", { cx: "128", cy: "196", r: "8" }),
      s("circle", { cx: "196", cy: "196", r: "8" }),
    ],
  });
});
gn.set("regular", function () {
  return E(I, {
    children: [
      s("circle", { cx: "60", cy: "60", r: "12" }),
      s("circle", { cx: "128", cy: "60", r: "12" }),
      s("circle", { cx: "196", cy: "60", r: "12" }),
      s("circle", { cx: "60", cy: "128", r: "12" }),
      s("circle", { cx: "128", cy: "128", r: "12" }),
      s("circle", { cx: "196", cy: "128", r: "12" }),
      s("circle", { cx: "60", cy: "196", r: "12" }),
      s("circle", { cx: "128", cy: "196", r: "12" }),
      s("circle", { cx: "196", cy: "196", r: "12" }),
    ],
  });
});
var bh = function (t, n) {
    return Ge(t, n, gn);
  },
  Sf = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: bh })));
  });
Sf.displayName = "DotsNine";
var em = Sf,
  kn = new Map();
kn.set("bold", function () {
  return E(I, {
    children: [
      s("circle", { cx: "128", cy: "128", r: "16" }),
      s("circle", { cx: "64", cy: "128", r: "16" }),
      s("circle", { cx: "192", cy: "128", r: "16" }),
    ],
  });
});
kn.set("duotone", function () {
  return E(I, {
    children: [
      s("circle", { cx: "128", cy: "128", r: "12" }),
      s("circle", { cx: "192", cy: "128", r: "12" }),
      s("circle", { cx: "64", cy: "128", r: "12" }),
    ],
  });
});
kn.set("fill", function () {
  return s(I, {
    children: s("path", {
      d: "M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,192,116ZM64,116a12,12,0,1,0,12,12A12,12,0,0,0,64,116Z",
    }),
  });
});
kn.set("light", function () {
  return E(I, {
    children: [
      s("circle", { cx: "128", cy: "128", r: "10" }),
      s("circle", { cx: "64", cy: "128", r: "10" }),
      s("circle", { cx: "192", cy: "128", r: "10" }),
    ],
  });
});
kn.set("thin", function () {
  return E(I, {
    children: [
      s("circle", { cx: "128", cy: "128", r: "8" }),
      s("circle", { cx: "64", cy: "128", r: "8" }),
      s("circle", { cx: "192", cy: "128", r: "8" }),
    ],
  });
});
kn.set("regular", function () {
  return E(I, {
    children: [
      s("circle", { cx: "128", cy: "128", r: "12" }),
      s("circle", { cx: "192", cy: "128", r: "12" }),
      s("circle", { cx: "64", cy: "128", r: "12" }),
    ],
  });
});
var tm = function (t, n) {
    return Ge(t, n, kn);
  },
  Cf = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: tm })));
  });
Cf.displayName = "DotsThree";
var nm = Cf,
  xn = new Map();
xn.set("bold", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("path", {
        d: "M168,88H152a23.9,23.9,0,0,0-24,24V224",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("line", {
        x1: "96",
        y1: "144",
        x2: "160",
        y2: "144",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
    ],
  });
});
xn.set("duotone", function (e) {
  return E(I, {
    children: [
      s("circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }),
      s("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("path", {
        d: "M168,88H152a23.9,23.9,0,0,0-24,24V224",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("line", {
        x1: "96",
        y1: "144",
        x2: "160",
        y2: "144",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
xn.set("fill", function () {
  return s(I, {
    children: s("path", {
      d: "M232,128a104.3,104.3,0,0,1-91.5,103.3,4.1,4.1,0,0,1-4.5-4V152h24a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.5,8.2,8.2,0,0,0-8.3-7.5H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.5,8.2,8.2,0,0,0,8.3,7.5H120v75.3a4,4,0,0,1-4.4,4C62.8,224.9,22,179,24.1,124.1A104,104,0,0,1,232,128Z",
    }),
  });
});
xn.set("light", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("path", {
        d: "M168,88H152a23.9,23.9,0,0,0-24,24V224",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("line", {
        x1: "96",
        y1: "144",
        x2: "160",
        y2: "144",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
    ],
  });
});
xn.set("thin", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("path", {
        d: "M168,88H152a23.9,23.9,0,0,0-24,24V224",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("line", {
        x1: "96",
        y1: "144",
        x2: "160",
        y2: "144",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
    ],
  });
});
xn.set("regular", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "96",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("path", {
        d: "M168,88H152a23.9,23.9,0,0,0-24,24V224",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("line", {
        x1: "96",
        y1: "144",
        x2: "160",
        y2: "144",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
var rm = function (t, n) {
    return Ge(t, n, xn);
  },
  Lf = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: rm })));
  });
Lf.displayName = "FacebookLogo";
var Ua = Lf,
  wn = new Map();
wn.set("bold", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "34",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("rect", {
        x: "32",
        y: "32",
        width: "192",
        height: "192",
        rx: "48",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("circle", { cx: "180", cy: "76", r: "16" }),
    ],
  });
});
wn.set("duotone", function (e) {
  return E(I, {
    children: [
      s("path", {
        d: "M172,36H84A48,48,0,0,0,36,84v88a48,48,0,0,0,48,48h88a48,48,0,0,0,48-48V84A48,48,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
        opacity: "0.2",
      }),
      s("circle", {
        cx: "128",
        cy: "128",
        r: "40",
        fill: "none",
        stroke: e,
        strokeMiterlimit: "10",
        strokeWidth: "16",
      }),
      s("rect", {
        x: "36",
        y: "36",
        width: "184",
        height: "184",
        rx: "48",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("circle", { cx: "180", cy: "76", r: "12" }),
    ],
  });
});
wn.set("fill", function () {
  return E(I, {
    children: [
      s("circle", { cx: "128", cy: "128", r: "32" }),
      s("path", {
        d: "M172,28H84A56,56,0,0,0,28,84v88a56,56,0,0,0,56,56h88a56,56,0,0,0,56-56V84A56,56,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48,48,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z",
      }),
    ],
  });
});
wn.set("light", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "40",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("rect", {
        x: "36",
        y: "36",
        width: "184",
        height: "184",
        rx: "48",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("circle", { cx: "180", cy: "76", r: "10" }),
    ],
  });
});
wn.set("thin", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "40",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("rect", {
        x: "36",
        y: "36",
        width: "184",
        height: "184",
        rx: "48",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("circle", { cx: "180", cy: "76", r: "8" }),
    ],
  });
});
wn.set("regular", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "128",
        r: "40",
        fill: "none",
        stroke: e,
        strokeMiterlimit: "10",
        strokeWidth: "16",
      }),
      s("rect", {
        x: "36",
        y: "36",
        width: "184",
        height: "184",
        rx: "48",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("circle", { cx: "180", cy: "76", r: "12" }),
    ],
  });
});
var om = function (t, n) {
    return Ge(t, n, wn);
  },
  Pf = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: om })));
  });
Pf.displayName = "InstagramLogo";
var Ba = Pf,
  En = new Map();
En.set("bold", function (e) {
  return E(I, {
    children: [
      s("line", {
        x1: "40",
        y1: "128",
        x2: "216",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("line", {
        x1: "40",
        y1: "64",
        x2: "216",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("line", {
        x1: "40",
        y1: "192",
        x2: "216",
        y2: "192",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
    ],
  });
});
En.set("duotone", function (e) {
  return E(I, {
    children: [
      s("line", {
        x1: "40",
        y1: "128",
        x2: "216",
        y2: "128",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("line", {
        x1: "40",
        y1: "64",
        x2: "216",
        y2: "64",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("line", {
        x1: "40",
        y1: "192",
        x2: "216",
        y2: "192",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
En.set("fill", function () {
  return E(I, {
    children: [
      s("path", { d: "M216,120H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }),
      s("path", { d: "M40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z" }),
      s("path", { d: "M216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" }),
    ],
  });
});
En.set("light", function (e) {
  return E(I, {
    children: [
      s("line", {
        x1: "40",
        y1: "128",
        x2: "216",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("line", {
        x1: "40",
        y1: "64",
        x2: "216",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("line", {
        x1: "40",
        y1: "192",
        x2: "216",
        y2: "192",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
    ],
  });
});
En.set("thin", function (e) {
  return E(I, {
    children: [
      s("line", {
        x1: "40",
        y1: "128",
        x2: "216",
        y2: "128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("line", {
        x1: "40",
        y1: "64",
        x2: "216",
        y2: "64",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("line", {
        x1: "40",
        y1: "192",
        x2: "216",
        y2: "192",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
    ],
  });
});
En.set("regular", function (e) {
  return E(I, {
    children: [
      s("line", {
        x1: "40",
        y1: "128",
        x2: "216",
        y2: "128",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("line", {
        x1: "40",
        y1: "64",
        x2: "216",
        y2: "64",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("line", {
        x1: "40",
        y1: "192",
        x2: "216",
        y2: "192",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
var lm = function (t, n) {
    return Ge(t, n, En);
  },
  Nf = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: lm })));
  });
Nf.displayName = "List";
var im = Nf,
  Sn = new Map();
Sn.set("bold", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "116",
        cy: "116",
        r: "84",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("line", {
        x1: "175.4",
        y1: "175.4",
        x2: "224",
        y2: "224",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
    ],
  });
});
Sn.set("duotone", function (e) {
  return E(I, {
    children: [
      s("circle", { cx: "116", cy: "116", r: "84", opacity: "0.2" }),
      s("circle", {
        cx: "116",
        cy: "116",
        r: "84",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("line", {
        x1: "175.4",
        y1: "175.4",
        x2: "224",
        y2: "224",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
Sn.set("fill", function () {
  return s(I, {
    children: s("path", {
      d: "M176,116a60,60,0,1,1-60-60A60,60,0,0,1,176,116Zm53.6,113.7A8,8,0,0,1,224,232a8.3,8.3,0,0,1-5.7-2.3l-43.2-43.3a92.2,92.2,0,1,1,11.3-11.3l43.2,43.2A8,8,0,0,1,229.6,229.7ZM116,192a76,76,0,1,0-76-76A76.1,76.1,0,0,0,116,192Z",
    }),
  });
});
Sn.set("light", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "116",
        cy: "116",
        r: "84",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("line", {
        x1: "175.4",
        y1: "175.4",
        x2: "224",
        y2: "224",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
    ],
  });
});
Sn.set("thin", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "116",
        cy: "116",
        r: "84",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("line", {
        x1: "175.4",
        y1: "175.4",
        x2: "224",
        y2: "224",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
    ],
  });
});
Sn.set("regular", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "116",
        cy: "116",
        r: "84",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("line", {
        x1: "175.4",
        y1: "175.4",
        x2: "224",
        y2: "224",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
var um = function (t, n) {
    return Ge(t, n, Sn);
  },
  _f = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: um })));
  });
_f.displayName = "MagnifyingGlass";
var sm = _f,
  Cn = new Map();
Cn.set("bold", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "104",
        r: "32",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("path", {
        d: "M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
    ],
  });
});
Cn.set("duotone", function (e) {
  return E(I, {
    children: [
      s("path", {
        d: "M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",
        opacity: "0.2",
      }),
      s("circle", {
        cx: "128",
        cy: "104",
        r: "32",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("path", {
        d: "M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
Cn.set("fill", function () {
  return s(I, {
    children: s("path", {
      d: "M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.2,83.4,134.6a8.3,8.3,0,0,0,9.2,0C136,236.2,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z",
    }),
  });
});
Cn.set("light", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "104",
        r: "32",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("path", {
        d: "M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
    ],
  });
});
Cn.set("thin", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "104",
        r: "32",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("path", {
        d: "M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
    ],
  });
});
Cn.set("regular", function (e) {
  return E(I, {
    children: [
      s("circle", {
        cx: "128",
        cy: "104",
        r: "32",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("path", {
        d: "M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
var am = function (t, n) {
    return Ge(t, n, Cn);
  },
  If = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: am })));
  });
If.displayName = "MapPin";
var cm = If,
  Ln = new Map();
Ln.set("bold", function (e) {
  return E(I, {
    children: [
      s("path", {
        d: "M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("path", {
        d: "M80,103.5A23.9,23.9,0,0,1,104,80h3.5a7.9,7.9,0,0,1,6.8,3.9l7.4,12.3a7.8,7.8,0,0,1,.3,7.7l-4.7,9.6h0a36,36,0,0,0,25.2,25.2h0l9.6-4.7a7.8,7.8,0,0,1,7.7.3l12.3,7.4a7.9,7.9,0,0,1,3.9,6.8V152a23.9,23.9,0,0,1-23.5,24A71.9,71.9,0,0,1,80,103.5Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
    ],
  });
});
Ln.set("duotone", function (e) {
  return E(I, {
    children: [
      s("path", {
        d: "M128,32A96.1,96.1,0,0,0,45.4,177h0L36,210.2a7.9,7.9,0,0,0,9.8,9.8L79,210.6h0A96,96,0,1,0,128,32Zm24.1,152A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6A28.1,28.1,0,0,1,152.1,184Z",
        opacity: "0.2",
      }),
      s("path", {
        d: "M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("path", {
        d: "M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
Ln.set("fill", function () {
  return E(I, {
    children: [
      s("path", {
        d: "M128,24A104,104,0,0,0,36.8,178l-8.5,30A15.9,15.9,0,0,0,48,227.7l30-8.5A104,104,0,1,0,128,24Zm24.1,168H152a88.1,88.1,0,0,1-88-88.1A36,36,0,0,1,100,68a14.9,14.9,0,0,1,12.9,7.5L124.6,96a15.8,15.8,0,0,1-.2,16.1L117.3,124A41.4,41.4,0,0,0,132,138.7l11.9-7.1a15.8,15.8,0,0,1,16.1-.2l20.5,11.7A14.9,14.9,0,0,1,188,156,36,36,0,0,1,152.1,192Z",
      }),
      s("path", {
        d: "M136.5,154.7a8.1,8.1,0,0,1-7.4.4,55.4,55.4,0,0,1-28.2-28.2,8.1,8.1,0,0,1,.4-7.4l9.4-15.6L99.4,84A19.9,19.9,0,0,0,80,103.9,72,72,0,0,0,152,176h.1A19.9,19.9,0,0,0,172,156.6l-19.9-11.3Z",
      }),
    ],
  });
});
Ln.set("light", function (e) {
  return E(I, {
    children: [
      s("path", {
        d: "M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("path", {
        d: "M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
    ],
  });
});
Ln.set("thin", function (e) {
  return E(I, {
    children: [
      s("path", {
        d: "M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("path", {
        d: "M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
    ],
  });
});
Ln.set("regular", function (e) {
  return E(I, {
    children: [
      s("path", {
        d: "M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("path", {
        d: "M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
var dm = function (t, n) {
    return Ge(t, n, Ln);
  },
  Tf = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: dm })));
  });
Tf.displayName = "WhatsappLogo";
var fm = Tf,
  Pn = new Map();
Pn.set("bold", function (e) {
  return E(I, {
    children: [
      s("line", {
        x1: "200",
        y1: "56",
        x2: "56",
        y2: "200",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("line", {
        x1: "200",
        y1: "200",
        x2: "56",
        y2: "56",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
    ],
  });
});
Pn.set("duotone", function (e) {
  return E(I, {
    children: [
      s("line", {
        x1: "200",
        y1: "56",
        x2: "56",
        y2: "200",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("line", {
        x1: "200",
        y1: "200",
        x2: "56",
        y2: "56",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
Pn.set("fill", function () {
  return s(I, {
    children: s("path", {
      d: "M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z",
    }),
  });
});
Pn.set("light", function (e) {
  return E(I, {
    children: [
      s("line", {
        x1: "200",
        y1: "56",
        x2: "56",
        y2: "200",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("line", {
        x1: "200",
        y1: "200",
        x2: "56",
        y2: "56",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
    ],
  });
});
Pn.set("thin", function (e) {
  return E(I, {
    children: [
      s("line", {
        x1: "200",
        y1: "56",
        x2: "56",
        y2: "200",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("line", {
        x1: "200",
        y1: "200",
        x2: "56",
        y2: "56",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
    ],
  });
});
Pn.set("regular", function (e) {
  return E(I, {
    children: [
      s("line", {
        x1: "200",
        y1: "56",
        x2: "56",
        y2: "200",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("line", {
        x1: "200",
        y1: "200",
        x2: "56",
        y2: "56",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
var pm = function (t, n) {
    return Ge(t, n, Pn);
  },
  Mf = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: pm })));
  });
Mf.displayName = "X";
var hm = Mf,
  Nn = new Map();
Nn.set("bold", function (e) {
  return E(I, {
    children: [
      s("polygon", {
        points: "164 128 108 92 108 164 164 128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
      s("path", {
        d: "M24,128c0,29.8,3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2s-3.1-47.2-5.4-56.2A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "24",
      }),
    ],
  });
});
Nn.set("duotone", function (e) {
  return E(I, {
    children: [
      s("path", {
        d: "M226.6,71.8A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128s3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2S228.9,80.8,226.6,71.8ZM112,160V96l48,32Z",
        opacity: "0.2",
      }),
      s("polygon", {
        points: "160 128 112 96 112 160 160 128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("path", {
        d: "M24,128c0,29.8,3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2s-3.1-47.2-5.4-56.2A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
Nn.set("fill", function () {
  return s(I, {
    children: s("path", {
      d: "M234.3,69.8a23.5,23.5,0,0,0-14.5-16.3C185.6,40.3,131,40.4,128,40.4s-57.6-.1-91.8,13.1A23.5,23.5,0,0,0,21.7,69.8C19.1,79.7,16,97.9,16,128s3.1,48.3,5.7,58.2a23.5,23.5,0,0,0,14.5,16.3c32.8,12.7,84.2,13.1,91.1,13.1h1.4c6.9,0,58.3-.4,91.1-13.1a23.5,23.5,0,0,0,14.5-16.3c2.6-9.9,5.7-28.1,5.7-58.2S236.9,79.7,234.3,69.8Zm-72.1,61.5-48,32a3.6,3.6,0,0,1-2.2.7,4.5,4.5,0,0,1-1.9-.5A3.9,3.9,0,0,1,108,160V96a3.9,3.9,0,0,1,2.1-3.5,4,4,0,0,1,4.1.2l48,32a3.9,3.9,0,0,1,0,6.6Z",
    }),
  });
});
Nn.set("light", function (e) {
  return E(I, {
    children: [
      s("polygon", {
        points: "160 128 112 96 112 160 160 128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
      s("path", {
        d: "M24,128c0,29.8,3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2s-3.1-47.2-5.4-56.2A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "12",
      }),
    ],
  });
});
Nn.set("thin", function (e) {
  return E(I, {
    children: [
      s("polygon", {
        points: "160 128 112 96 112 160 160 128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
      s("path", {
        d: "M24,128c0,29.8,3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2s-3.1-47.2-5.4-56.2A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "8",
      }),
    ],
  });
});
Nn.set("regular", function (e) {
  return E(I, {
    children: [
      s("polygon", {
        points: "160 128 112 96 112 160 160 128",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
      s("path", {
        d: "M24,128c0,29.8,3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2s-3.1-47.2-5.4-56.2A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128Z",
        fill: "none",
        stroke: e,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
      }),
    ],
  });
});
var mm = function (t, n) {
    return Ge(t, n, Nn);
  },
  $f = p.exports.forwardRef(function (e, t) {
    return s(Xe, R({}, Object.assign({ ref: t }, e, { renderPath: mm })));
  });
$f.displayName = "YoutubeLogo";
var Ha = $f;
function Rf() {
  return s("div", {
    className: "_search",
    children: s("div", {
      id: "sb-search-input-example",
      children: E("div", {
        className: "_search-input",
        children: [
          s("input", {
            name: "pesquisa",
            placeholder: "Pesquisar",
            type: "search",
            autoComplete: "off",
            id: "myCustomSearchInputID",
          }),
          s("button", {
            title: "Pesquisar!",
            type: "submit",
            className: "_search-ntm",
            id: "myCustomSearchButtonID",
            children: s(sm, {}),
          }),
        ],
      }),
    }),
  });
}
function vm() {
  return E("div", {
    className: "_menu-dkml _menu-dk",
    children: [s(Kh, {}), s(Rf, {})],
  });
}
function ym() {
  return s("div", {
    className: "_menu-dkml _menu-mb",
    children: E(ie, {
      children: [
        s(ie.Button, {
          className: "_btn",
          children: s(im, { weight: "bold" }),
        }),
        s(ie.Items, {
          as: "ul",
          className: "_nav",
          children: E("nav", {
            children: [
              s(ie.Item, {
                as: "header",
                className: "_header",
                children: s(ie.Button, {
                  className: "_btn",
                  children: s(hm, { weight: "bold" }),
                }),
              }),
              s(ie.Item, {
                as: "li",
                children: s("a", {
                  href: "/?track=Header",
                  title: "Home",
                  children: "Home",
                }),
              }),
              s(ie.Item, { as: "li", children: s(gf, {}) }),
              s(ie.Item, { as: "li", children: s(kf, {}) }),
              s(ie.Item, {
                as: "li",
                children: s("a", {
                  href: "/?track=Header",
                  title: "Contribua",
                  children: "Contribua",
                }),
              }),
              s(ie.Item, { as: "li", children: s(Rf, {}) }),
            ],
          }),
        }),
      ],
    }),
  });
}
function gm() {
  return s("div", { className: "_menu-mb", children: s(ym, {}) });
}
function km() {
  return E("section", {
    className: "__ime-header",
    children: [s(i0, {}), s(vm, {}), s(gm, {})],
  });
}
function sl() {
  return s("div", { className: "divisor" });
}
const Va = {
  IME: {
    title: "Igreja Emanuel",
    link: { href: "https://emanuelalvorada.com.br/", alt: "Igreja Emanuel" },
  },
  MINIST: {
    title: "Minist\xE9rios",
    link: {
      href: "https://emanuelalvorada.com.br/ministerios/",
      alt: "Minist\xE9rios",
    },
  },
  EVENTS: {
    title: "Eventos",
    link: { href: "https://emanuelalvorada.com.br/eventos/", alt: "Eventos" },
  },
  CCD: {
    title: "CCD",
    link: { href: "https://emanuelalvorada.com.br/ccd/", alt: "Sistema CCD" },
  },
};
function xm() {
  return E("div", {
    className: "container",
    children: [
      s("nav", {
        className: "nav_mobile",
        children: s(ie, {
          children: E(I, {
            children: [
              s(ie.Button, {
                children: s(em, { weight: "bold", className: "dotsnine_host" }),
              }),
              s(ft, {
                enter: "transition duration-100 ease-out",
                enterFrom: "transform scale-95 opacity-0",
                enterTo: "transform scale-100 opacity-100",
                leave: "transition duration-75 ease-out",
                leaveFrom: "transform scale-100 opacity-100",
                leaveTo: "transform scale-95 opacity-0",
              }),
              s(I, {
                children: s(ie.Items, {
                  children: Object.entries(Va).map(([e, t]) =>
                    s(ie.Item, {
                      children: s(
                        "a",
                        {
                          href: t.link.href,
                          title: t.link.alt,
                          target: "_blank",
                          children: t.title,
                        },
                        e
                      ),
                    })
                  ),
                }),
              }),
            ],
          }),
        }),
      }),
      s("nav", {
        className: "nav_desktop",
        children: Object.entries(Va).map(([e, t]) =>
          s(
            "a",
            {
              href: t.link.href,
              title: t.link.alt,
              target: "_blank",
              children: t.title,
            },
            e
          )
        ),
      }),
    ],
  });
}
function wm() {
  return E("div", {
    className: "navsocial",
    children: [
      s("nav", {
        className: "mobile",
        children: s(ie, {
          children: E(I, {
            children: [
              s(ie.Button, {
                children: s(nm, { width: "bold", className: "dotsthree_icon" }),
              }),
              s(ft, {
                enter: "transition duration-100 ease-out",
                enterFrom: "transform scale-95 opacity-0",
                enterTo: "transform scale-100 opacity-100",
                leave: "transition duration-75 ease-out",
                leaveFrom: "transform scale-100 opacity-100",
                leaveTo: "transform scale-95 opacity-0",
              }),
              s(I, {
                children: E(ie.Items, {
                  children: [
                    s(ie.Item, {
                      children: E("a", {
                        href: "https://i.emanuelalvorada.com.br/",
                        title: "Facebook",
                        rel: "noopener",
                        target: "_blank",
                        children: [s(Ua, { weight: "bold" }), "Facebook"],
                      }),
                    }),
                    s(ie.Item, {
                      children: E("a", {
                        href: "https://i.emanuelalvorada.com.br/",
                        title: "Instagram",
                        rel: "noopener",
                        target: "_blank",
                        children: [s(Ba, { weight: "bold" }), "Instagram"],
                      }),
                    }),
                    s(ie.Item, {
                      children: E("a", {
                        href: "https://i.emanuelalvorada.com.br/",
                        title: "Youtube",
                        rel: "noopener",
                        target: "_blank",
                        children: [s(Ha, { weight: "bold" }), "Youtube"],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      E("nav", {
        className: "desktop",
        children: [
          s("a", {
            href: "https://i.emanuelalvorada.com.br/",
            title: "Facebook",
            rel: "noopener",
            target: "_blank",
            children: s(Ua, {}),
          }),
          s("a", {
            href: "https://i.emanuelalvorada.com.br/",
            title: "Instagram",
            rel: "noopener",
            target: "_blank",
            children: s(Ba, {}),
          }),
          s("a", {
            href: "https://i.emanuelalvorada.com.br/",
            title: "Youtube",
            rel: "noopener",
            target: "_blank",
            children: s(Ha, {}),
          }),
        ],
      }),
    ],
  });
}
function Em() {
  return s("section", {
    className: "__ime-sobheader",
    children: E("nav", {
      className: "sob-header",
      children: [s(xm, {}), s(wm, {})],
    }),
  });
}
Ir.createRoot(document.getElementById("header")).render(
  E(D.StrictMode, { children: [s(Em, {}), s(sl, {}), s(km, {}), s(sl, {})] })
);
function Sm() {
  return s("div", {
    className: "_discl",
    children: E(oe, {
      children: [
        s(oe.Button, {
          className: "_discl-btn",
          children: s("h5", { children: "Contato" }),
        }),
        s(ft, {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0",
          children: E(oe.Panel, {
            as: "nav",
            className: "_discl-panel",
            children: [
              E("span", {
                children: [
                  s(cm, { weight: "bold" }),
                  s("a", {
                    href: "",
                    title: "Ver localiza\xE7\xE3o da Igreja Emanuel.",
                    children: "R. Santa B\xE1rbara, 36",
                  }),
                ],
              }),
              E("span", {
                children: [
                  s(fm, { weight: "bold" }),
                  s("a", {
                    href: "",
                    title:
                      "Entrar em contato pelo WhatsApp do n\xFAmero (51) 99144-9000",
                    children: "(51) 99144-9000",
                  }),
                ],
              }),
              E("span", {
                children: [
                  s(Xh, { weight: "bold" }),
                  s("a", {
                    href: "",
                    title:
                      "Entrar em contato pelo E-mail: iemanuelalvorada@gmail.com",
                    children: "iemanuelalvorada@gmail.com",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const Cm = {
  HOME: {
    title: "In\xEDcio",
    link: { href: "/?track=footer", alt: "Ir ao in\xEDcio" },
  },
  CONTACT: {
    title: "Contato",
    link: { href: "/contato?track=footer", alt: "Entrar em contato" },
  },
  BASE: {
    title: "Base",
    link: { href: "/base?track=footer", alt: "Ver nossa localiza\xE7\xE3o" },
  },
  CONTRIBUA: {
    title: "Contribua",
    link: {
      href: "/apoiar?track=footer",
      alt: "Contribuir para o Reino de Deus",
    },
  },
};
function Lm() {
  return s("div", {
    className: "_discl",
    children: E(oe, {
      children: [
        s(oe.Button, {
          className: "_discl-btn",
          children: s("h5", { children: "Explorar" }),
        }),
        s(ft, {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0",
          children: s(oe.Panel, {
            as: "nav",
            className: "_discl-panel",
            children: Object.entries(Cm).map(([e, t]) =>
              s("span", {
                children: s(
                  "a",
                  {
                    href: t.link.href,
                    title: t.link.alt,
                    target: "_blank",
                    children: t.title,
                  },
                  e
                ),
              })
            ),
          }),
        }),
      ],
    }),
  });
}
const Pm = {
  PRIVACY: {
    title: "Privacidade",
    link: {
      href: "/politicas/privacidade?track=footer",
      alt: "Pol\xEDtica de privacidade",
    },
  },
  TERMS: {
    title: "Termo de uso",
    link: { href: "/politicas/termo?track=footer", alt: "Termo de Uso" },
  },
  COPYRIGHT: {
    title: "Direito Autorais",
    link: {
      href: "/politicas/copyright?track=footer",
      alt: "Direitos Autorais",
    },
  },
  COOKIES: {
    title: "Cokkies",
    link: {
      href: "/politicas/cookies?track=footer",
      alt: "Pol\xEDtica de cookies",
    },
  },
};
function Nm() {
  return s("div", {
    className: "_discl",
    children: E(oe, {
      children: [
        s(oe.Button, {
          className: "_discl-btn",
          children: s("h5", { children: "Pol\xEDticas" }),
        }),
        s(ft, {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0",
          children: s(oe.Panel, {
            as: "nav",
            className: "_discl-panel",
            children: Object.entries(Pm).map(([e, t]) =>
              s("span", {
                children: s(
                  "a",
                  {
                    href: t.link.href,
                    title: t.link.alt,
                    target: "_blank",
                    children: t.title,
                  },
                  e
                ),
              })
            ),
          }),
        }),
      ],
    }),
  });
}
const _m = {
  ABOUT: {
    title: "Quem somos",
    link: { href: "/sobre?track=footer", alt: "Sobre a igreja Emanuel" },
  },
  VISAO: {
    title: "Nossa vis\xE3o",
    link: { href: "/sobre#s-visao?track=footer", alt: "Nossa vis\xE3o" },
  },
  INDENT: {
    title: "Nossa identidade",
    link: { href: "/sobre#s-identidade?track=footer", alt: "Nossa identidade" },
  },
  MISSAO: {
    title: "Nossa miss\xE3o",
    link: { href: "/sobre#s-missao?track=footer", alt: "Nossa miss\xE3o" },
  },
  VALORES: {
    title: "Nossos valores",
    link: { href: "/sobre#s-valores?track=footer", alt: "Nossos valores" },
  },
  FUNCTION: {
    title: "Descri\xE7\xE3o de fun\xE7\xF5es",
    link: {
      href: "/sobre#s-funcoes?track=footer",
      alt: "Descri\xE7\xE3o de fun\xE7\xF5es",
    },
  },
};
function Im() {
  return s("div", {
    className: "_discl",
    children: E(oe, {
      children: [
        s(oe.Button, {
          className: "_discl-btn",
          children: s("h5", { children: "Institucional" }),
        }),
        s(ft, {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0",
          children: s(oe.Panel, {
            as: "nav",
            className: "_discl-panel",
            children: Object.entries(_m).map(([e, t]) =>
              s("span", {
                children: s(
                  "a",
                  {
                    href: t.link.href,
                    title: t.link.alt,
                    target: "_blank",
                    children: t.title,
                  },
                  e
                ),
              })
            ),
          }),
        }),
      ],
    }),
  });
}
const Tm = {
  HOME: {
    title: "In\xEDcio",
    link: {
      href: "/ministerios?track=footer",
      alt: "Veja todos nossos minist\xE9rios",
    },
  },
  EVANGELISTICO: {
    title: "Evangel\xEDstico",
    link: {
      href: "/ministerios/evangelismo?track=footer",
      alt: "Minist\xE9rio evangelistico",
    },
  },
  APOIO: {
    title: "Apoio",
    link: {
      href: "/ministerios/apoio?track=footer",
      alt: "Minist\xE9rio de Apoio",
    },
  },
  INFANTIL: {
    title: "Infantil",
    link: {
      href: "/ministerios/infantil?track=footer",
      alt: "Minist\xE9rio infantil",
    },
  },
  COMUNICATION: {
    title: "Comunica\xE7\xE3o",
    link: {
      href: "/ministerios/comunicacao?track=footer",
      alt: "Minist\xE9rio da comunica\xE7\xE3o",
    },
  },
  LOUVOR: {
    title: "Louvor",
    link: {
      href: "/ministerios/louvor?track=footer",
      alt: "Minist\xE9rio do louvor",
    },
  },
  CULINARIA: {
    title: "Culin\xE1ria",
    link: {
      href: "/ministerios/culinaria?track=footer",
      alt: "Minist\xE9rio da culin\xE1ria",
    },
  },
  ADMINIST: {
    title: "Administrativo",
    link: {
      href: "/ministerios/administrativo?track=footer",
      alt: "Minist\xE9rio administrativo",
    },
  },
  INTREG: {
    title: "Integra\xE7\xE3o",
    link: {
      href: "/ministerios/integracao?track=footer",
      alt: "Minist\xE9rio de Integra\xE7\xE3o",
    },
  },
  INTERS: {
    title: "Intercess\xE3o",
    link: {
      href: "/ministerios/intercessao?track=footer",
      alt: "Minist\xE9rio da Intercess\xE3o",
    },
  },
  ENSINO: {
    title: "Ensino",
    link: {
      href: "/ministerios/ensino?track=footer",
      alt: "Minist\xE9rio de ensino",
    },
  },
};
function Mm() {
  return s("div", {
    className: "_discl",
    children: E(oe, {
      children: [
        s(oe.Button, {
          className: "_discl-btn",
          children: s("h5", { children: "Minist\xE9rios" }),
        }),
        s(ft, {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0",
          children: s(oe.Panel, {
            as: "nav",
            className: "_discl-panel",
            children: Object.entries(Tm).map(([e, t]) =>
              s("span", {
                children: s(
                  "a",
                  {
                    href: t.link.href,
                    title: t.link.alt,
                    target: "_blank",
                    children: t.title,
                  },
                  e
                ),
              })
            ),
          }),
        }),
      ],
    }),
  });
}
const $m = {
  CCD: {
    title: "In\xEDcio",
    link: {
      href: "/edu/ccd/?track=footer",
      alt: "Centro de Crecimento em Deus",
    },
  },
  EFM: {
    title: "EFM",
    link: {
      href: "/edu/ccd/efm/?track=footer",
      alt: "Escola de Forma\xE7\xE3o Ministerial",
    },
  },
};
function Rm() {
  return s("div", {
    className: "_discl",
    children: E(oe, {
      children: [
        s(oe.Button, {
          className: "_discl-btn",
          children: s("h5", { children: "CCD" }),
        }),
        s(ft, {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0",
          children: s(oe.Panel, {
            as: "nav",
            className: "_discl-panel",
            children: Object.entries($m).map(([e, t]) =>
              s("span", {
                children: s(
                  "a",
                  {
                    href: t.link.href,
                    title: t.link.alt,
                    target: "_blank",
                    children: t.title,
                  },
                  e
                ),
              })
            ),
          }),
        }),
      ],
    }),
  });
}
const Om = {
  FACEBOOK: {
    title: "Facebook",
    link: {
      href: "http://i.emanuelalvorada.com.br/xabrBE",
      alt: "Facebook da igreja Emanuel",
    },
  },
  INSTAGRAM: {
    title: "Instagram",
    link: {
      href: "http://i.emanuelalvorada.com.br/a2GnyZ",
      alt: "Instagram da igreja Emanuel",
    },
  },
  YOUTUBE: {
    title: "Youtube",
    link: {
      href: "http://i.emanuelalvorada.com.br/yyhLn7",
      alt: "Youtube da igreja Emanuel",
    },
  },
  WHATSAPP: {
    title: "WhatsApp",
    link: {
      href: "http://i.emanuelalvorada.com.br/Jpo936",
      alt: "WhatsApp da igreja Emanuel",
    },
  },
};
function jm() {
  return s("div", {
    className: "_discl",
    children: E(oe, {
      children: [
        s(oe.Button, {
          className: "_discl-btn",
          children: s("h5", { children: "M\xEDdias" }),
        }),
        s(ft, {
          enter: "transition duration-100 ease-out",
          enterFrom: "transform scale-95 opacity-0",
          enterTo: "transform scale-100 opacity-100",
          leave: "transition duration-75 ease-out",
          leaveFrom: "transform scale-100 opacity-100",
          leaveTo: "transform scale-95 opacity-0",
          children: s(oe.Panel, {
            as: "nav",
            className: "_discl-panel",
            children: Object.entries(Om).map(([e, t]) =>
              s("span", {
                children: s(
                  "a",
                  {
                    href: t.link.href,
                    title: t.link.alt,
                    target: "_blank",
                    children: t.title,
                  },
                  e
                ),
              })
            ),
          }),
        }),
      ],
    }),
  });
}
function Dm() {
  return s("section", {
    className: "__ime-mainfooter",
    children: E("nav", {
      className: "_footer-nav",
      children: [
        E("div", {
          className: "_ft-nav-collums",
          children: [s(Sm, {}), s(Im, {})],
        }),
        E("div", {
          className: "_ft-nav-collums",
          children: [s(Lm, {}), s(Nm, {})],
        }),
        E("div", {
          className: "_ft-nav-collums",
          children: [s(Mm, {}), s(jm, {})],
        }),
        s("div", { className: "_ft-nav-collums", children: s(Rm, {}) }),
      ],
    }),
  });
}
const Am = {
  IME: {
    title: "Igreja Emanuel",
    link: { href: "https://emanuelalvorada.com.br/", alt: "Igreja Emanuel" },
  },
  MINIST: {
    title: "Minist\xE9rios",
    link: {
      href: "https://emanuelalvorada.com.br/ministerios/",
      alt: "Minist\xE9rios",
    },
  },
  EVENTS: {
    title: "Eventos",
    link: { href: "https://emanuelalvorada.com.br/eventos/", alt: "Eventos" },
  },
  CCD: {
    title: "CCD",
    link: { href: "https://emanuelalvorada.com.br/ccd/", alt: "Sistema CCD" },
  },
};
function Fm() {
  return s("nav", {
    className: "___suf-navhost",
    children: Object.entries(Am).map(([e, t]) =>
      s(
        "a",
        {
          href: t.link.href,
          title: t.link.alt,
          target: "_blank",
          children: t.title,
        },
        e
      )
    ),
  });
}
function zm() {
  return E("section", {
    className: "__ime-subfooter",
    children: [
      E("span", {
        className: "___suf-copyright",
        children: [
          "\xA9 2022 ",
          s("a", {
            href: "http://emanuelalvorada.com.br?track=copyright",
            title: "Igreja Emanuel",
            children: "Igreja Emanuel",
          }),
          ".",
        ],
      }),
      s(Fm, {}),
    ],
  });
}
Ir.createRoot(document.getElementById("id-footer")).render(
  E(D.StrictMode, { children: [s(sl, {}), s(Dm, {}), s(sl, {}), s(zm, {})] })
);
function Wm() {
  let [e, t] = p.exports.useState(!0);
  return s(ft, {
    show: e,
    enter: "transition duration-100 ease-out",
    enterFrom: "transform scale-95 opacity-0",
    enterTo: "transform scale-100 opacity-100",
    leave: "transition duration-75 ease-out",
    leaveFrom: "transform scale-100 opacity-100",
    leaveTo: "transform scale-95 opacity-0",
    children: s(ii, {
      className: "_dialog",
      onClose: () => t(!1),
      children: E(ii.Panel, {
        className: "_dialog-panel",
        children: [
          s(ii.Title, {
            className: "_dialog-title",
            children: "Quer um cookie?",
          }),
          E("span", {
            children: [
              'Ao clicar em "Aceitar todos os cookies", voc\xEA concorda que a ',
              s("strong", { children: "Igreja Emanuel" }),
              " pode guardar cookies no seu dispositivo e utilizar essas informa\xE7\xF5es de acordo com a nossa ",
              s("a", {
                href: "/politicas/cookies?track=CookiesAlert",
                title: "Pol\xEDtica de Cookies",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Pol\xEDtica de Cookies",
              }),
              ".",
            ],
          }),
          s("button", { onClick: () => t(!1), children: "Aceitar!" }),
        ],
      }),
    }),
  });
}
jQuery(document).ready(function (e) {
  e("#totop").click(function () {
    return e("body,html").animate({ scrollTop: 0 }, 800), !1;
  });
});
function Um() {
  return s("section", {
    className: "__ime-backtotop",
    children: s("button", {
      title: "Voltar ao topo",
      className: "btn-top",
      id: "totop",
      children: s(qh, { weight: "bold" }),
    }),
  });
}
Ir.createRoot(document.getElementById("widget")).render(
  s(D.StrictMode, { children: E(I, { children: [s(Um, {}), s(Wm, {})] }) })
);
