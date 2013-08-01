
jQuery.fn.popup = ( options )->
  new Popup options, @

class Popup
  label:'Popup'
  ctl:['^','X']
  size: [320,32,320]
  checkStatus: false
  status: true
  open: false

  constructor: (@options,@elem)->
    if @options?.position is 'right'
      @
    # $(@elem).addClass('popup-' + @options?.position) if @options?.position
    @label = @options.label if @options?.label
    @size = @options.size if @options?.size
    @url = @options.url if @options?.url

    @checkStatus = @options.checkStatus if @options?.checkStatus
    if @checkStatus
      @checkOnLine()
    else
      @display()

  display:()->
    $(@elem).html [
      "<h4>" + @label
      "<span class='hide'></span>"
      "</h4>"
      "<div id='workspace'>"
      '<iframe frameborder=0 src="' + @url + '">'
      '</iframe>'
      "</div>"
      ].join('')
    $(@elem).addClass 'rotate'
    @events()

  checkOnLine:()->
    self = @
    img = document.body.appendChild document.createElement "img"
    img.onload = ->
      self.status = true
      self.displayControl()
    img.onerror = ->
      self.status = false
      $(@elem).hide()
    img.src = self.url + "/status.gif"

  events: ->
    self = @
    h4= $(@elem).find('h4')
    span = $(@elem).find('h4 span')
    h4.on 'click',(e)->
      if $(self.elem).hasClass('rotate')
        $(self.elem).toggle 200, ->
          $(self.elem).removeClass 'rotate'
          $(self.elem).addClass 'normal'
          $(self.elem).toggle 200, ->
            span.show()
      if $(self.elem).hasClass('normal')
        $(self.elem).toggle 200, ->
          $(self.elem).removeClass 'normal'
          $(self.elem).addClass 'rotate'
          $(self.elem).toggle 200, ->
            span.hide()




