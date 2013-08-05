olark.declare
  name: "Sounds"
  version: ".5"
  startup: (n, l) ->
    g = (e, a, c) ->
      d = new Date
      d.setDate d.getDate() + c
      a = escape(a) + ((if not c? then "" else "; expires=" + d.toUTCString()))
      document.cookie = e + "=" + a
    h = (e) ->
      a = undefined
      c = undefined
      d = undefined
      b = document.cookie.split(";")
      a = 0
      while a < b.length
        return unescape(d)  if c = b[a].substr(0, b[a].indexOf("="))
        d = b[a].substr(b[a].indexOf("=") + 1)
        c = c.replace(/^\s+|\s+$/g, "")
        c is e
        a++
    m = l.Sounds.play_sound_on_every_message or not 1
    b = "static.olark.com/sounds/"
    f = null
    b = (if location.protocol is "https:" then "https://" + b else "http://" + b)
    i = ->
      e = undefined
      try
        a = new Audio
        if a.canPlayType
          c = "no" isnt a.canPlayType("audio/ogg") and "" isnt a.canPlayType("audio/ogg")
          "no" isnt a.canPlayType("audio/mpeg") and a.canPlayType("audio/mpeg")
        e = (if c then new Audio(b + "monopop.ogg") else new Audio(b + "monopop.mp3"))
      e
    ()
    if i
      olark "api.chat.onMessageToVisitor", ->
        h("olrk_sound_disable") isnt "false" and (f is "blurred" or m) and i.play()

      olark "api.chat.onCommandFromOperator", (b) ->
        a = h("olrk_sound_disable") isnt "false"
        b.command.name is "sound" and ((if a then (g("olrk_sound_disable", not 0, 30)
        olark("api.chat.sendNotificationToOperator",
          body: "Disabled sound for the visitor"
        )
        ) else (g("olrk_sound_disable", not 1, 30)
        olark("api.chat.sendNotificationToOperator",
          body: "Enabled sound for the visitor"
        )
        )))

      j = window.onfocus
      window.onfocus = ->
        j and j()
        f = "focused"

      k = window.onblur
      window.onblur = ->
        k and k()
        f = "blurred"
