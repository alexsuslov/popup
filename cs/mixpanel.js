(function () {
  var p = !0,
    q = null,
    v = !1;

  function C() {
    return function () {}
  }
  (function (t) {
    function l() {}

    function f() {}

    function E(a, b, e) {
      var g, d = "mixpanel" === e ? t : t[e];
      if (d && !c.isArray(d)) s.error("You have already initialized " + e);
      else return g = new f, g.N(a, b, e), g.people = new l, g.people.N(g), A = A || g.e("debug"), c.d(d) || (g.L.call(g.people, d.people), g.L(d)), g
    }

    function k(a) {
      this.props = {};
      this.da = v;
      this.name = a.cookie_name ? "mp_" + a.cookie_name : "mp_" + a.token + "_mixpanel";
      this.load();
      this.ua(a);
      this.fb(a);
      this.save()
    }

    function F() {
      this.na = "submit"
    }

    function B() {
      this.na = "click"
    }

    function w() {}

    function x() {
      if (!x.Ja) J = x.Ja = p, K = v, c.a(y, function (a) {
        a.ya()
      })
    }
    var I = Array.prototype,
      z = Object.prototype,
      L = I.slice,
      D = z.toString,
      G = z.hasOwnProperty,
      u = window.console,
      M = window.navigator,
      r = window.document,
      o = M.userAgent,
      O = "__mps,__mpso,__mpa,__mpap,$people_distinct_id,__alias".split(","),
      z = t && t.__SV || 0,
      H = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
      K = !H && -1 == o.indexOf("MSIE"),
      c = {}, A = v,
      P = {
        api_host: ("https:" == r.location.protocol ? "https://" : "http://") + "api.mixpanel.com",
        cross_subdomain_cookie: p,
        cookie_name: "",
        loaded: C(),
        store_google: p,
        save_referrer: p,
        test: v,
        verbose: v,
        img: v,
        track_pageview: p,
        debug: v,
        track_links_timeout: 300,
        cookie_expiration: 365,
        upgrade: v,
        disable_cookie: v,
        ip: p
      }, J = v;
    (function () {
      var a = I.forEach,
        b = I.indexOf,
        e = Array.isArray,
        g = {}, d = c.a = function (b, e, c) {
          if (b != q)
            if (a && b.forEach === a) b.forEach(e, c);
            else if (b.length === +b.length)
            for (var d = 0, f = b.length; d < f && !(d in b && e.call(c, b[d], d, b) === g); d++);
          else
            for (d in b)
              if (G.call(b, d) && e.call(c, b[d], d, b) === g) break
        };
      c.extend = function (a) {
        d(L.call(arguments,
          1), function (b) {
          for (var e in b) void 0 !== b[e] && (a[e] = b[e])
        });
        return a
      };
      c.isArray = e || function (a) {
        return "[object Array]" === D.call(a)
      };
      c.Ra = function (a) {
        try {
          return /^\s*\bfunction\b/.test(a)
        } catch (b) {
          return v
        }
      };
      c.Oa = function (a) {
        return !(!a || !G.call(a, "callee"))
      };
      c.q = function (a) {
        return !a ? [] : a.q ? a.q() : c.isArray(a) || c.Oa(a) ? L.call(a) : c.hb(a)
      };
      c.hb = function (a) {
        var b = [];
        if (a == q) return b;
        d(a, function (a) {
          b[b.length] = a
        });
        return b
      };
      c.jb = function (a) {
        return a
      };
      c.ha = function (a, e) {
        var c = v;
        if (a == q) return c;
        if (b && a.indexOf ===
          b) return -1 != a.indexOf(e);
        d(a, function (a) {
          if (c || (c = a === e)) return g
        });
        return c
      };
      c.i = function (a, b) {
        return -1 !== a.indexOf(b)
      }
    })();
    c.ja = function (a, b) {
      a.prototype = new b;
      a.$a = b.prototype
    };
    c.g = function (a) {
      return a === Object(a) && !c.isArray(a)
    };
    c.C = function (a) {
      if (c.g(a)) {
        for (var b in a)
          if (G.call(a, b)) return v;
        return p
      }
      return v
    };
    c.d = function (a) {
      return void 0 === a
    };
    c.ka = function (a) {
      return "[object String]" == D.call(a)
    };
    c.Qa = function (a) {
      return "[object Date]" == D.call(a)
    };
    c.Sa = function (a) {
      return "[object Number]" == D.call(a)
    };
    c.fa = function (a) {
      c.a(a, function (b, e) {
        c.Qa(b) ? a[e] = c.Ka(b) : c.g(b) && (a[e] = c.fa(b))
      });
      return a
    };
    c.Ka = function (a) {
      function b(a) {
        return 10 > a ? "0" + a : a
      }
      return a.getUTCFullYear() + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds())
    };
    c.F = function (a) {
      var b = {};
      c.a(a, function (a, g) {
        c.ka(a) && 0 < a.length && (b[g] = a)
      });
      return b
    };
    c.truncate = function (a, b) {
      var e;
      "string" === typeof a ? e = a.slice(0, b) : c.isArray(a) ? (e = [], c.a(a, function (a) {
        e.push(c.truncate(a,
          b))
      })) : c.g(a) ? (e = {}, c.a(a, function (a, d) {
        e[d] = c.truncate(a, b)
      })) : e = a;
      return e
    };
    c.s = function () {
      return function (a) {
        function b(a, c) {
          var j = "",
            i = 0,
            h = i = "",
            h = 0,
            f = j,
            m = [],
            n = c[a];
          n && "object" === typeof n && "function" === typeof n.toJSON && (n = n.toJSON(a));
          switch (typeof n) {
          case "string":
            return e(n);
          case "number":
            return isFinite(n) ? "" + n : "null";
          case "boolean":
          case "null":
            return "" + n;
          case "object":
            if (!n) return "null";
            j += "    ";
            m = [];
            if ("[object Array]" === D.apply(n)) {
              h = n.length;
              for (i = 0; i < h; i += 1) m[i] = b(i, n) || "null";
              return h =
                0 === m.length ? "[]" : j ? "[\n" + j + m.join(",\n" + j) + "\n" + f + "]" : "[" + m.join(",") + "]"
            }
            for (i in n) G.call(n, i) && (h = b(i, n)) && m.push(e(i) + (j ? ": " : ":") + h);
            return h = 0 === m.length ? "{}" : j ? "{" + m.join(",") + "" + f + "}" : "{" + m.join(",") + "}"
          }
        }

        function e(a) {
          var b = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            e = {
              "\u0008": "\\b",
              "\t": "\\t",
              "\n": "\\n",
              "\u000c": "\\f",
              "\r": "\\r",
              '"': '\\"',
              "\\": "\\\\"
            };
          b.lastIndex = 0;
          return b.test(a) ? '"' + a.replace(b, function (a) {
            var b =
              e[a];
            return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
          }) + '"' : '"' + a + '"'
        }
        return b("", {
          "": a
        })
      }
    }();
    c.H = function () {
      function a() {
        switch (h) {
        case "t":
          return d("t"), d("r"), d("u"), d("e"), p;
        case "f":
          return d("f"), d("a"), d("l"), d("s"), d("e"), v;
        case "n":
          return d("n"), d("u"), d("l"), d("l"), q
        }
        j("Unexpected '" + h + "'")
      }

      function b() {
        for (; h && " " >= h;) d()
      }

      function e() {
        var a, b, e = "",
          c;
        if ('"' === h)
          for (; d();) {
            if ('"' === h) return d(), e;
            if ("\\" === h)
              if (d(), "u" === h) {
                for (b = c = 0; 4 > b; b += 1) {
                  a = parseInt(d(),
                    16);
                  if (!isFinite(a)) break;
                  c = 16 * c + a
                }
                e += String.fromCharCode(c)
              } else if ("string" === typeof f[h]) e += f[h];
            else break;
            else e += h
          }
        j("Bad string")
      }

      function c() {
        var a;
        a = "";
        "-" === h && (a = "-", d("-"));
        for (;
          "0" <= h && "9" >= h;) a += h, d();
        if ("." === h)
          for (a += "."; d() && "0" <= h && "9" >= h;) a += h;
        if ("e" === h || "E" === h) {
          a += h;
          d();
          if ("-" === h || "+" === h) a += h, d();
          for (;
            "0" <= h && "9" >= h;) a += h, d()
        }
        a = +a;
        if (isFinite(a)) return a;
        j("Bad number")
      }

      function d(a) {
        a && a !== h && j("Expected '" + a + "' instead of '" + h + "'");
        h = m.charAt(i);
        i += 1;
        return h
      }

      function j(a) {
        throw {
          name: "SyntaxError",
          message: a,
          ib: i,
          text: m
        };
      }
      var i, h, f = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\u0008",
          f: "\u000c",
          n: "\n",
          r: "\r",
          t: "\t"
        }, m, n;
      n = function () {
        b();
        switch (h) {
        case "{":
          var i;
          a: {
            var f, m = {};
            if ("{" === h) {
              d("{");
              b();
              if ("}" === h) {
                d("}");
                i = m;
                break a
              }
              for (; h;) {
                f = e();
                b();
                d(":");
                Object.hasOwnProperty.call(m, f) && j('Duplicate key "' + f + '"');
                m[f] = n();
                b();
                if ("}" === h) {
                  d("}");
                  i = m;
                  break a
                }
                d(",");
                b()
              }
            }
            j("Bad object")
          }
          return i;
        case "[":
          a: {
            i = [];
            if ("[" === h) {
              d("[");
              b();
              if ("]" === h) {
                d("]");
                f = i;
                break a
              }
              for (; h;) {
                i.push(n());
                b();
                if ("]" === h) {
                  d("]");
                  f = i;
                  break a
                }
                d(",");
                b()
              }
            }
            j("Bad array")
          }
          return f;
        case '"':
          return e();
        case "-":
          return c();
        default:
          return "0" <= h && "9" >= h ? c() : a()
        }
      };
      return function (a) {
        m = a;
        i = 0;
        h = " ";
        a = n();
        b();
        h && j("Syntax error");
        return a
      }
    }();
    c.ca = function (a) {
      var b, e, g, d, j = 0,
        i = 0,
        h = "",
        h = [];
      if (!a) return a;
      a = c.gb(a);
      do b = a.charCodeAt(j++), e = a.charCodeAt(j++), g = a.charCodeAt(j++), d = b << 16 | e << 8 | g, b = d >> 18 & 63, e = d >> 12 & 63, g = d >> 6 & 63, d &= 63, h[i++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d); while (j < a.length);
      h = h.join("");
      switch (a.length % 3) {
      case 1:
        h = h.slice(0, -2) + "==";
        break;
      case 2:
        h = h.slice(0, -1) + "="
      }
      return h
    };
    c.gb = function (a) {
      var a = (a + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"),
        b = "",
        e, c, d = 0,
        j;
      e = c = 0;
      d = a.length;
      for (j = 0; j < d; j++) {
        var i = a.charCodeAt(j),
          h = q;
        128 > i ? c++ : h = 127 < i && 2048 > i ? String.fromCharCode(i >> 6 | 192, i & 63 | 128) : String.fromCharCode(i >>
          12 | 224, i >> 6 & 63 | 128, i & 63 | 128);
        h !== q && (c > e && (b += a.substring(e, c)), b += h, e = c = j + 1)
      }
      c > e && (b += a.substring(e, a.length));
      return b
    };
    c.xa = function () {
      function a() {
        function a(b, c) {
          var e, d = 0;
          for (e = 0; e < c.length; e++) d |= j[e] << 8 * e;
          return b ^ d
        }
        var b, c, j = [],
          i = 0;
        for (b = 0; b < o.length; b++) c = o.charCodeAt(b), j.unshift(c & 255), 4 <= j.length && (i = a(i, j), j = []);
        0 < j.length && (i = a(i, j));
        return i.toString(16)
      }

      function b() {
        for (var a = 1 * new Date, b = 0; a == 1 * new Date;) b++;
        return a.toString(16) + b.toString(16)
      }
      return function () {
        var c = (screen.height *
          screen.width).toString(16);
        return b() + "-" + Math.random().toString(16).replace(".", "") + "-" + a() + "-" + c + "-" + b()
      }
    }();
    c.Pa = function () {
      return /(google web preview|baiduspider|yandexbot)/i.test(o) ? p : v
    };
    c.wa = function (a) {
      var b, e, g, d = [];
      "undefined" === typeof b && (b = "&");
      c.a(a, function (a, b) {
        e = encodeURIComponent(a.toString());
        g = encodeURIComponent(b);
        d[d.length] = g + "=" + e
      });
      return d.join(b)
    };
    c.ga = function (a, b) {
      var b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
        c = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
      return c === q ||
        c && "string" !== typeof c[1] && c[1].length ? "" : decodeURIComponent(c[1]).replace(/\+/g, " ")
    };
    c.cookie = {
      get: function (a) {
        for (var a = a + "=", b = r.cookie.split(";"), c = 0; c < b.length; c++) {
          for (var g = b[c];
            " " == g.charAt(0);) g = g.substring(1, g.length);
          if (0 == g.indexOf(a)) return decodeURIComponent(g.substring(a.length, g.length))
        }
        return q
      },
      parse: function (a) {
        var b;
        try {
          b = c.H(c.cookie.get(a)) || {}
        } catch (e) {}
        return b
      },
      set: function (a, b, c, g) {
        var e;
        var d = "",
          j = "";
        g && (e = (d = (d = r.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i)) ?
          d[0] : "") ? "; domain=." + d : "", d = e);
        c && (j = new Date, j.setTime(j.getTime() + 864E5 * c), j = "; expires=" + j.toGMTString());
        r.cookie = a + "=" + encodeURIComponent(b) + j + "; path=/" + d
      },
      remove: function (a, b) {
        c.cookie.set(a, "", -1, b)
      }
    };
    c.pa = function () {
      function a(a, g, d) {
        return function (j) {
          if (j = j || b(window.event)) {
            var i = p,
              h;
            c.Ra(d) && (h = d(j));
            j = g.call(a, j);
            if (v === h || v === j) i = v;
            return i
          }
        }
      }

      function b(a) {
        if (a) a.preventDefault = b.preventDefault, a.stopPropagation = b.stopPropagation;
        return a
      }
      b.preventDefault = function () {
        this.returnValue =
          v
      };
      b.stopPropagation = function () {
        this.cancelBubble = p
      };
      return function (b, c, d, j) {
        b ? b.addEventListener && !j ? b.addEventListener(c, d, v) : (c = "on" + c, b[c] = a(b, d, b[c])) : s.error("No valid element provided to register_event")
      }
    }();
    c.Ia = function () {
      function a(a, c) {
        return 0 <= (" " + a.className + " ").replace(b, " ").indexOf(" " + c + " ")
      }
      var b = /[\t\r\n]/g;
      return function (b) {
        if (!r.getElementsByTagName) return [];
        for (var b = b.split(" "), g, d = Array(r), j = 0; j < b.length; j++)
          if (g = b[j].replace(/^\s+/, "").replace(/\s+$/, ""), -1 < g.indexOf("#")) {
            g =
              g.split("#");
            var i = g[0],
              d = r.getElementById(g[1]);
            if (!d || i && d.nodeName.toLowerCase() != i) return [];
            d = Array(d)
          } else if (-1 < g.indexOf(".")) {
          g = g.split(".");
          var i = g[0],
            h = g[1];
          i || (i = "*");
          g = [];
          for (var f = 0, m = 0; m < d.length; m++) {
            var n;
            n = "*" == i ? d[m].all ? d[m].all : d[m].getElementsByTagName("*") : d[m].getElementsByTagName(i);
            for (var k = 0; k < n.length; k++) g[f++] = n[k]
          }
          d = [];
          for (f = i = 0; f < g.length; f++) g[f].className && c.ka(g[f].className) && a(g[f], h) && (d[i++] = g[f])
        } else if (g.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
          var i =
            RegExp.$1,
            l = RegExp.$2,
            h = RegExp.$3,
            o = RegExp.$4;
          i || (i = "*");
          g = [];
          for (m = f = 0; m < d.length; m++) {
            n = "*" == i ? d[m].all ? d[m].all : d[m].getElementsByTagName("*") : d[m].getElementsByTagName(i);
            for (k = 0; k < n.length; k++) g[f++] = n[k]
          }
          d = [];
          i = 0;
          switch (h) {
          case "=":
            h = function (a) {
              return a.getAttribute(l) == o
            };
            break;
          case "~":
            h = function (a) {
              return a.getAttribute(l).match(RegExp("\\b" + o + "\\b"))
            };
            break;
          case "|":
            h = function (a) {
              return a.getAttribute(l).match(RegExp("^" + o + "-?"))
            };
            break;
          case "^":
            h = function (a) {
              return 0 == a.getAttribute(l).indexOf(o)
            };
            break;
          case "$":
            h = function (a) {
              return a.getAttribute(l).lastIndexOf(o) == a.getAttribute(l).length - o.length
            };
            break;
          case "*":
            h = function (a) {
              return -1 < a.getAttribute(l).indexOf(o)
            };
            break;
          default:
            h = function (a) {
              return a.getAttribute(l)
            }
          }
          d = [];
          for (f = i = 0; f < g.length; f++) h(g[f]) && (d[i++] = g[f])
        } else {
          i = g;
          g = [];
          for (m = f = 0; m < d.length; m++) {
            n = d[m].getElementsByTagName(i);
            for (k = 0; k < n.length; k++) g[f++] = n[k]
          }
          d = g
        }
        return d
      }
    }();
    c.info = {
      Da: function () {
        var a = "",
          b = {};
        c.a("utm_source utm_medium utm_campaign utm_content utm_term".split(" "),
          function (e) {
            a = c.ga(r.URL, e);
            a.length && (b[e] = a)
          });
        return b
      },
      Wa: function (a) {
        return 0 === a.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === a.search("https?://(.*)bing.com") ? "bing" : 0 === a.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === a.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : q
      },
      Xa: function (a) {
        var b = c.info.Wa(a),
          e = {};
        if (b !== q) e.$search_engine = b, a = c.ga(a, "yahoo" != b ? "q" : "p"), a.length && (e.mp_keyword = a);
        return e
      },
      S: function () {
        var a = M.vendor || "";
        return window.opera ? c.i(o, "Mini") ? "Opera Mini" : "Opera" :
          /(BlackBerry|PlayBook|BB10)/i.test(o) ? "BlackBerry" : c.i(o, "Chrome") ? "Chrome" : c.i(a, "Apple") ? c.i(o, "Mobile") ? "Mobile Safari" : "Safari" : c.i(o, "Android") ? "Android Mobile" : c.i(o, "Konqueror") ? "Konqueror" : c.i(o, "Firefox") ? "Firefox" : c.i(o, "MSIE") ? "Internet Explorer" : c.i(o, "Gecko") ? "Mozilla" : ""
      },
      Z: function () {
        return /Windows/i.test(o) ? /Phone/.test(o) ? "Windows Mobile" : "Windows" : /(iPhone|iPad|iPod)/.test(o) ? "iOS" : /Android/.test(o) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(o) ? "BlackBerry" : /Mac/i.test(o) ? "Mac OS X" :
          /Linux/.test(o) ? "Linux" : ""
      },
      Ga: function () {
        return /iPhone/.test(o) ? "iPhone" : /iPad/.test(o) ? "iPad" : /iPod/.test(o) ? "iPod Touch" : /(BlackBerry|PlayBook|BB10)/i.test(o) ? "BlackBerry" : /Windows Phone/i.test(o) ? "Windows Phone" : /Android/.test(o) ? "Android" : ""
      },
      oa: function (a) {
        a = a.split("/");
        return 3 <= a.length ? a[2] : ""
      },
      D: function () {
        return c.F({
          $os: c.info.Z(),
          $browser: c.info.S(),
          $referrer: r.referrer,
          $referring_domain: c.info.oa(r.referrer),
          $device: c.info.Ga(),
          mp_lib: "web"
        })
      },
      Va: function () {
        return c.F({
          $os: c.info.Z(),
          $browser: c.info.S()
        })
      },
      Ua: function (a) {
        return c.F({
          mp_page: a,
          mp_referrer: r.referrer,
          mp_browser: c.info.S(),
          mp_platform: c.info.Z()
        })
      }
    };
    var s = {
      log: function () {
        if (A && !c.d(u) && u) try {
          u.log.apply(u, arguments)
        } catch (a) {
          c.a(arguments, function (a) {
            u.log(a)
          })
        }
      },
      error: function () {
        if (A && !c.d(u) && u) {
          var a = ["Mixpanel error:"].concat(c.q(arguments));
          try {
            u.error.apply(u, a)
          } catch (b) {
            c.a(a, function (a) {
              u.error(a)
            })
          }
        }
      },
      T: function () {
        if (!c.d(u) && u) {
          var a = ["Mixpanel error:"].concat(c.q(arguments));
          try {
            u.error.apply(u, a)
          } catch (b) {
            c.a(a,
              function (a) {
                u.error(a)
              })
          }
        }
      }
    };
    w.prototype.A = C();
    w.prototype.V = C();
    w.prototype.R = C();
    w.prototype.Y = function (a) {
      this.la = a;
      return this
    };
    w.prototype.l = function (a, b, e, g) {
      var d = this,
        j = c.Ia(a);
      if (0 == j.length) s.error("The DOM query (" + a + ") returned 0 elements");
      else return c.a(j, function (a) {
        c.pa(a, this.na, function (a) {
          var c = {}, i = d.A(e, this),
            j = d.la.e("track_links_timeout");
          d.V(a, this, c);
          window.setTimeout(d.sa(g, i, c, p), j);
          d.la.l(b, i, d.sa(g, i, c))
        })
      }, this), p
    };
    w.prototype.sa = function (a, b, c, g) {
      var g = g || v,
        d = this;
      return function () {
        if (!c.Ca) c.Ca = p, a && a(g, b) === v || d.R(b, c, g)
      }
    };
    w.prototype.A = function (a, b) {
      return "function" === typeof a ? a(b) : c.extend({}, a)
    };
    c.ja(B, w);
    B.prototype.A = function (a, b) {
      var c = B.$a.A.apply(this, arguments);
      if (b.href) c.url = b.href;
      return c
    };
    B.prototype.V = function (a, b, c) {
      c.ma = 2 === a.which || a.metaKey || "_blank" === b.target;
      c.href = b.href;
      c.ma || a.preventDefault()
    };
    B.prototype.R = function (a, b) {
      b.ma || setTimeout(function () {
        window.location = b.href
      }, 0)
    };
    c.ja(F, w);
    F.prototype.V = function (a, b, c) {
      c.element = b;
      a.preventDefault()
    };
    F.prototype.R = function (a, b) {
      setTimeout(function () {
        b.element.submit()
      }, 0)
    };
    k.prototype.D = function () {
      var a = {};
      c.a(this.props, function (b, e) {
        c.ha(O, e) || (a[e] = b)
      });
      return a
    };
    k.prototype.load = function () {
      if (!this.disabled) {
        var a = c.cookie.parse(this.name);
        a && (this.props = c.extend({}, a))
      }
    };
    k.prototype.fb = function (a) {
      var b = a.upgrade,
        e;
      if (b) e = "mp_super_properties", "string" === typeof b && (e = b), b = c.cookie.parse(e), c.cookie.remove(e), c.cookie.remove(e, p), b && (this.props = c.extend(this.props, b.all, b.events));
      if (!a.cookie_name &&
        "mixpanel" !== a.name && (e = "mp_" + a.token + "_" + a.name, b = c.cookie.parse(e))) c.cookie.remove(e), c.cookie.remove(e, p), this.k(b)
    };
    k.prototype.save = function () {
      this.disabled || c.cookie.set(this.name, c.s(this.props), this.W, this.U)
    };
    k.prototype.remove = function () {
      c.cookie.remove(this.name, v);
      c.cookie.remove(this.name, p)
    };
    k.prototype.clear = function () {
      this.remove();
      this.props = {}
    };
    k.prototype.k = function (a, b, e) {
      return c.g(a) ? ("undefined" === typeof b && (b = "None"), this.W = "undefined" === typeof e ? this.ea : e, c.a(a, function (a,
        c) {
        if (!this.props[c] || this.props[c] === b) this.props[c] = a
      }, this), this.save(), p) : v
    };
    k.prototype.p = function (a, b) {
      return c.g(a) ? (this.W = "undefined" === typeof b ? this.ea : b, c.extend(this.props, a), this.save(), p) : v
    };
    k.prototype.G = function (a) {
      a in this.props && (delete this.props[a], this.save())
    };
    k.prototype.eb = function () {
      if (!this.da) this.k(c.info.Da()), this.da = p
    };
    k.prototype.va = function (a) {
      this.p(c.info.Xa(a))
    };
    k.prototype.$ = function (a) {
      this.k({
        $initial_referrer: a || "$direct",
        $initial_referring_domain: c.info.oa(a) || "$direct"
      }, "")
    };
    k.prototype.Ma = function () {
      return c.F({
        $initial_referrer: this.props.$initial_referrer,
        $initial_referring_domain: this.props.$initial_referring_domain
      })
    };
    k.prototype.ua = function (a) {
      this.ea = this.W = a.cookie_expiration;
      this.Za(a.disable_cookie);
      this.Ya(a.cross_subdomain_cookie)
    };
    k.prototype.Za = function (a) {
      (this.disabled = a) && this.remove()
    };
    k.prototype.Ya = function (a) {
      if (a !== this.U) this.U = a, this.remove(), this.save()
    };
    k.prototype.La = function () {
      return this.U
    };
    k.prototype.j = function (a, b) {
      var e =
        this.M(a),
        g = b[a],
        d = this.w("$set"),
        j = this.w("$set_once"),
        i = this.w("$add"),
        h = this.w("$append", []);
      "__mps" === e ? (c.extend(d, g), this.z("$add", g)) : "__mpso" === e ? c.a(g, function (a, b) {
        b in j || (j[b] = a)
      }) : "__mpa" === e ? c.a(g, function (a, b) {
        b in d ? d[b] += a : (b in i || (i[b] = 0), i[b] += a)
      }, this) : "__mpap" === e && h.push(g);
      s.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):");
      s.log(b);
      this.save()
    };
    k.prototype.z = function (a, b) {
      var e = this.m(a);
      c.d(e) || (c.a(b, function (a, b) {
        delete e[b]
      }, this), this.save())
    };
    k.prototype.M =
      function (a) {
        if ("$set" === a) return "__mps";
        if ("$set_once" === a) return "__mpso";
        if ("$add" === a) return "__mpa";
        if ("$append" === a) return "__mpap";
        s.error("Invalid queue:", a)
    };
    k.prototype.m = function (a) {
      return this.props[this.M(a)]
    };
    k.prototype.w = function (a, b) {
      var e = this.M(a),
        b = c.d(b) ? {} : b;
      return this.props[e] || (this.props[e] = b)
    };
    f.prototype.Y = function (a, b, c) {
      if ("undefined" === typeof c) s.error("You must name your new library: init(token, config, name)");
      else if ("mixpanel" === c) s.error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
      else return a = E(a, b, c), t[c] = a, a.O(), a
    };
    f.prototype.N = function (a, b, e) {
      this.__loaded = p;
      this.config = {};
      this.qa(c.extend({}, P, b, {
        name: e,
        token: a,
        callback_fn: ("mixpanel" === e ? e : "mixpanel." + e) + "._jsc"
      }));
      this._jsc = C();
      this.J = [];
      this.K = [];
      this.I = [];
      this.u = {
        disable_all_events: v,
        identify_called: v
      };
      this.cookie = new k(this.config);
      this.k({
        distinct_id: c.xa()
      }, "")
    };
    f.prototype.O = function () {
      this.e("loaded")(this);
      this.e("track_pageview") && this.ta()
    };
    f.prototype.ya = function () {
      c.a(this.J, function (a) {
        this.Q.apply(this,
          a)
      }, this);
      c.a(this.K, function (a) {
        this.h.apply(this, a)
      }, this);
      delete this.J;
      delete this.K
    };
    f.prototype.Q = function (a, b) {
      if (this.e("img")) return s.error("You can't use DOM tracking functions with img = true."), v;
      if (!J) return this.J.push([a, b]), v;
      var c = (new a).Y(this);
      return c.l.apply(c, b)
    };
    f.prototype.ba = function (a, b) {
      if (c.d(a)) return q;
      if (H) return function (c) {
        a(c, b)
      };
      var e = this._jsc,
        g = "" + Math.floor(1E8 * Math.random()),
        d = this.e("callback_fn") + '["' + g + '"]';
      e[g] = function (c) {
        delete e[g];
        a(c, b)
      };
      return d
    };
    f.prototype.h = function (a, b, e) {
      if (K) this.K.push(arguments);
      else {
        var g = this.e("verbose");
        this.e("test") && (b.test = 1);
        g && (b.verbose = 1);
        this.e("img") && (b.img = 1);
        e && !H && (b.callback = e);
        b.ip = this.e("ip") ? 1 : 0;
        b._ = (new Date).getTime().toString();
        a += "?" + c.wa(b);
        if ("img" in b) {
          var d = r.createElement("img");
          d.src = a;
          r.body.appendChild(d)
        } else if (H) {
          var f = new XMLHttpRequest;
          f.open("GET", a, p);
          f.withCredentials = p;
          f.onreadystatechange = function () {
            if (4 === f.readyState)
              if (200 === f.status) e && (g ? e(c.H(f.responseText)) : e(Number(f.responseText)));
              else {
                var a = "Bad HTTP status: " + f.status + " " + f.statusText;
                s.error(a);
                e && (g ? e({
                  status: 0,
                  error: a
                }) : e(0))
              }
          };
          f.send(q)
        } else {
          d = r.createElement("script");
          d.type = "text/javascript";
          d.async = p;
          d.defer = p;
          d.src = a;
          var i = r.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(d, i)
        }
      }
    };
    f.prototype.L = function (a) {
      function b(a, b) {
        c.a(a, function (a) {
          this[a[0]].apply(this, a.slice(1))
        }, b)
      }
      var e, g = [],
        d = [],
        f = [];
      c.a(a, function (a) {
        a && (e = a[0], "function" === typeof a ? a.call(this) : c.isArray(a) && "alias" === e ? g.push(a) : c.isArray(a) && -1 != e.indexOf("track") && "function" === typeof this[e] ? f.push(a) : d.push(a))
      }, this);
      b(g, this);
      b(d, this);
      b(f, this)
    };
    f.prototype.push = function (a) {
      this.L([a])
    };
    f.prototype.disable = function (a) {
      "undefined" === typeof a ? this.u.Ha = p : this.I = this.I.concat(a)
    };
    f.prototype.l = function (a, b, e) {
      if ("undefined" === typeof a) s.error("No event name provided to mixpanel.track");
      else if (c.Pa() || this.u.Ha || c.ha(this.I, a)) "undefined" !== typeof e && e(0);
      else return b = b || {}, b.token = b.kb || this.e("token"), this.cookie.va(r.referrer),
      this.e("store_google") && this.cookie.eb(), this.e("save_referrer") && this.cookie.$(r.referrer), b = c.extend({}, c.info.D(), this.cookie.D(), b), a = c.truncate({
        event: a,
        properties: b
      }, 255), b = c.s(a), b = c.ca(b), s.log("MIXPANEL REQUEST:"), s.log(a), this.h(this.e("api_host") + "/track/", {
        data: b
      }, this.ba(e, a)), a
    };
    f.prototype.ta = function (a) {
      if ("undefined" === typeof a) a = r.location.href;
      this.l("mp_page_view", c.info.Ua(a))
    };
    f.prototype.cb = function () {
      return this.Q.call(this, B, arguments)
    };
    f.prototype.bb = function () {
      return this.Q.call(this,
        F, arguments)
    };
    f.prototype.p = function (a, b) {
      this.cookie.p(a, b)
    };
    f.prototype.k = function (a, b, c) {
      this.cookie.k(a, b, c)
    };
    f.prototype.G = function (a) {
      this.cookie.G(a)
    };
    f.prototype.P = function (a, b) {
      var c = {};
      c[a] = b;
      this.p(c)
    };
    f.prototype.X = function (a, b, c, g, d) {
      a != this.o() && a != this.B("__alias") && (this.G("__alias"), this.P("distinct_id", a));
      this.u.Na = p;
      this.people.Aa(b, c, g, d)
    };
    f.prototype.o = function () {
      return this.B("distinct_id")
    };
    f.prototype.Ba = function (a, b) {
      if (a === this.B("$people_distinct_id")) return s.T("Attempting to create alias for existing People user - aborting."), -2;
      var e = this;
      c.d(b) && (b = this.o());
      if (a !== b) return this.P("__alias", a), this.l("$create_alias", {
        alias: a,
        distinct_id: b
      }, function () {
        e.X(a)
      });
      s.error("alias matches current distinct_id - skipping api call.");
      this.X(a);
      return -1
    };
    f.prototype.Ta = function (a) {
      this.P("mp_name_tag", a)
    };
    f.prototype.qa = function (a) {
      c.g(a) && (c.extend(this.config, a), this.cookie && this.cookie.ua(this.config), A = A || this.e("debug"))
    };
    f.prototype.e = function (a) {
      return this.config[a]
    };
    f.prototype.B = function (a) {
      return this.cookie.props[a]
    };
    f.prototype.toString = function () {
      var a = this.e("name");
      "mixpanel" !== a && (a = "mixpanel." + a);
      return a
    };
    l.prototype.N = function (a) {
      this.c = a
    };
    l.prototype.set = function (a, b, e) {
      var g = {}, d = {};
      c.g(a) ? (c.a(a, function (a, b) {
        "$distinct_id" == b || "$token" == b || (d[b] = a)
      }), e = b) : d[a] = b;
      this.v("save_referrer") && this.c.cookie.$(r.referrer);
      d = c.extend({}, c.info.Va(), this.c.cookie.Ma(), d);
      g.$set = d;
      return this.h(g, e)
    };
    l.prototype.ra = function (a, b, e) {
      var g = {}, d = {};
      c.g(a) ? (c.a(a, function (a, b) {
        "$distinct_id" == b || "$token" == b || (d[b] =
          a)
      }), e = b) : d[a] = b;
      g.$set_once = d;
      return this.h(g, e)
    };
    l.prototype.ia = function (a, b, e) {
      var g = {}, d = {};
      c.g(a) ? (c.a(a, function (a, b) {
        "$distinct_id" == b || "$token" == b || (isNaN(parseFloat(a)) ? s.error("Invalid increment value passed to mixpanel.people.increment - must be a number") : d[b] = a)
      }), e = b) : (c.d(b) && (b = 1), d[a] = b);
      g.$add = d;
      return this.h(g, e)
    };
    l.prototype.append = function (a, b, e) {
      var g = {}, d = {};
      c.g(a) ? (c.a(a, function (a, b) {
        "$distinct_id" == b || "$token" == b || (d[b] = a)
      }), e = b) : d[a] = b;
      g.$append = d;
      return this.h(g, e)
    };
    l.prototype.ab =
      function (a, b, e) {
        if (!c.Sa(a) && (a = parseFloat(a), isNaN(a))) {
          s.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
          return
        }
        return this.append("$transactions", c.extend({
          $amount: a
        }, b), e)
    };
    l.prototype.Ea = function (a) {
      return this.set("$transactions", [], a)
    };
    l.prototype.Fa = function () {
      if (this.aa()) return this.h({
        $delete: this.c.o()
      });
      s.error("mixpanel.people.delete_user() requires you to call identify() first")
    };
    l.prototype.toString = function () {
      return this.c.toString() + ".people"
    };
    l.prototype.h =
      function (a, b) {
        a.$token = this.v("token");
        a.$distinct_id = this.c.o();
        var e = c.fa(a),
          g = c.truncate(e, 255),
          e = c.s(e),
          e = c.ca(e);
        if (!this.aa()) return this.za(a), c.d(b) || (this.v("verbose") ? b({
          status: -1,
          error: q
        }) : b(-1)), g;
        s.log("MIXPANEL PEOPLE REQUEST:");
        s.log(g);
        this.c.h(this.v("api_host") + "/engage/", {
          data: e
        }, this.c.ba(b, g));
        return g
    };
    l.prototype.v = function (a) {
      return this.c.e(a)
    };
    l.prototype.aa = function () {
      return this.c.u.Na === p
    };
    l.prototype.za = function (a) {
      "$set" in a ? this.c.cookie.j("$set", a) : "$set_once" in a ?
        this.c.cookie.j("$set_once", a) : "$add" in a ? this.c.cookie.j("$add", a) : "$append" in a ? this.c.cookie.j("$append", a) : s.error("Invalid call to _enqueue():", a)
    };
    l.prototype.Aa = function (a, b, e, g) {
      var d = this,
        f = c.extend({}, this.c.cookie.m("$set")),
        i = c.extend({}, this.c.cookie.m("$set_once")),
        h = c.extend({}, this.c.cookie.m("$add")),
        k = this.c.cookie.m("$append");
      !c.d(f) && c.g(f) && !c.C(f) && (d.c.cookie.z("$set", f), this.set(f, function (b, e) {
        0 == b && d.c.cookie.j("$set", f);
        c.d(a) || a(b, e)
      }));
      !c.d(i) && c.g(i) && !c.C(i) && (d.c.cookie.z("$set_once",
        i), this.ra(i, function (a, b) {
        0 == a && d.c.cookie.j("$set_once", i);
        c.d(g) || g(a, b)
      }));
      !c.d(h) && c.g(h) && !c.C(h) && (d.c.cookie.z("$add", h), this.ia(h, function (a, e) {
        0 == a && d.c.cookie.j("$add", h);
        c.d(b) || b(a, e)
      }));
      if (!c.d(k) && c.isArray(k) && k.length) {
        for (var l = k.length - 1; 0 <= l; l--) {
          var n = k.pop();
          d.append(n, function (a, b) {
            0 == a && d.c.cookie.j("$append", n);
            c.d(e) || e(a, b)
          })
        }
        d.c.cookie.save()
      }
    };
    c.toArray = c.q;
    c.isObject = c.g;
    c.JSONEncode = c.s;
    c.JSONDecode = c.H;
    c.isEmptyObject = c.C;
    f.prototype.init = f.prototype.Y;
    f.prototype.disable =
      f.prototype.disable;
    f.prototype.track = f.prototype.l;
    f.prototype.track_links = f.prototype.cb;
    f.prototype.track_forms = f.prototype.bb;
    f.prototype.track_pageview = f.prototype.ta;
    f.prototype.register = f.prototype.p;
    f.prototype.register_once = f.prototype.k;
    f.prototype.unregister = f.prototype.G;
    f.prototype.identify = f.prototype.X;
    f.prototype.alias = f.prototype.Ba;
    f.prototype.name_tag = f.prototype.Ta;
    f.prototype.set_config = f.prototype.qa;
    f.prototype.get_config = f.prototype.e;
    f.prototype.get_property = f.prototype.B;
    f.prototype.get_distinct_id = f.prototype.o;
    f.prototype.toString = f.prototype.toString;
    k.prototype.properties = k.prototype.D;
    k.prototype.update_search_keyword = k.prototype.va;
    k.prototype.update_referrer_info = k.prototype.$;
    k.prototype.get_cross_subdomain = k.prototype.La;
    k.prototype.clear = k.prototype.clear;
    l.prototype.set = l.prototype.set;
    l.prototype.set_once = l.prototype.ra;
    l.prototype.increment = l.prototype.ia;
    l.prototype.append = l.prototype.append;
    l.prototype.track_charge = l.prototype.ab;
    l.prototype.clear_charges =
      l.prototype.Ea;
    l.prototype.delete_user = l.prototype.Fa;
    l.prototype.toString = l.prototype.toString;
    if (c.d(t)) s.T("'mixpanel' object not initialized. Ensure you are using the latest version of the Mixpanel JS Library along with the snippet we provide.");
    else if (t.__loaded || t.config && t.cookie) s.error("Mixpanel library has already been downloaded at least once.");
    else if (1.1 > z) s.T("Version mismatch; please ensure you're using the latest version of the Mixpanel code snippet.");
    else {
      var y = {};
      c.a(t._i, function (a) {
        var b;
        a && c.isArray(a) && (b = a[a.length - 1], a = E.apply(this, a), y[b] = a)
      });
      var Q = function () {
        c.a(y, function (a, b) {
          "mixpanel" !== b && (t[b] = a)
        });
        t._ = c
      };
      t.init = function (a, b, c) {
        c ? t[c] || (t[c] = y[c] = E(a, b, c), t[c].O()) : (c = t, y.mixpanel ? c = y.mixpanel : a && (c = E(a, b, "mixpanel")), window.mixpanel = t = c, Q())
      };
      t.init();
      c.a(y, function (a) {
        a.O()
      });
      if (r.addEventListener) "complete" == r.readyState ? x() : r.addEventListener("DOMContentLoaded", x, v);
      else if (r.attachEvent) {
        r.attachEvent("onreadystatechange", x);
        z = v;
        try {
          z = window.frameElement == q
        } catch (R) {}
        if (r.documentElement.doScroll &&
          z) {
          var N = function () {
            try {
              r.documentElement.doScroll("left")
            } catch (a) {
              setTimeout(N, 1);
              return
            }
            x()
          };
          N()
        }
      }
      c.pa(window, "load", x, p)
    }
  })(window.mixpanel);
})();