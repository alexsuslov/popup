
jQuery.fn.popup = ( options )->
  new Popup options, @

class Popup
  label:'Popup'
  checkStatus: false
  status: true
  open: false

  constructor: (@options,@elem)->
    $(@elem).hide()
    @position = @options.position if @options?.position
    @label = @options.label if @options?.label
    @url = @options.url if @options?.url

    @checkStatus = @options.checkStatus if @options?.checkStatus
    if @checkStatus
      @checkOnLine()
    else
      @display()

  display:()->
    if @position in ['bottom-right',  'bottom-left']
      $(@elem).html [
        "<h4>" + @label
        "<span class='hide'></span>"
        "</h4>"
        "<div id='workspace'>"
        '<iframe frameborder=0 src="' + @url + '">'
        '</iframe>'
        "</div>"
        ].join('')
    else
      $(@elem).html [
        "<div id='workspace'>"
        '<iframe frameborder=0 src="' + @url + '">'
        '</iframe>'
        "<h4>" + @label
        "<span class='hide'></span>"
        "</h4>"
        "</div>"
        ].join('')
    $(@elem).addClass 'popup-' + @position
    $(@elem).show()
    @events()

  checkOnLine:()->
    self = @
    img = document.body.appendChild document.createElement "img"
    img.onload = ->
      self.status = true
      self.display()
    img.onerror = ->
      self.status = false
      $(self.elem).hide()
    img.src = self.url + "/status.gif"

  events: ->
    self = @
    h4= $(@elem).find('h4')
    span = $(@elem).find('h4 span')
    duration = 400
    h4.on 'click',(e)->
      unless self.open
        if self.position in ['bottom-right',  'bottom-left']
          self.bottom = $(self.elem).css 'bottom'
          options =
            bottom:8
        else
          self.top = $(self.elem).css 'top'
          options =
            top:8

        $(self.elem).animate options, done:()->
            span.show()
            self.open = true
      else
        span.hide()
        if self.position in ['bottom-right',  'bottom-left']
          options =
            bottom:self.bottom
        else
          options = top:self.top
        $(self.elem).animate options, done:()->
            self.open = false




