
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
    $(@elem).hide()
    $(@elem).html [
      "<h4 class='btn'>"+  @label
      "<span></span>"
      "</h4>"
      '<iframe frameborder=0 src="' + @url + '"></iframe>'
      ].join('')
    $(@elem).addClass 'popup-' + @position
    $(@elem).addClass 'popupClose'
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
    iframe = $(@elem).find('iframe')
    duration = 400
    h4.on 'click',(e)->
      unless self.open
        $(self.elem).removeClass 'popupClose'
        $(self.elem).addClass 'popupOpen'
        self.open = true
      else
        $(self.elem).removeClass 'popupOpen'
        $(self.elem).addClass 'popupClose'
        self.open = false




