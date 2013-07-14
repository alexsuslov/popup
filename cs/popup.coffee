
jQuery.fn.popup = ( options )->
  new Popup options, @

class Popup
  label:'Popup'
  ctl:['^','X']
  size: [320,32,320]

  constructor: (@options,@elem)->
    $(@elem).addClass('popup-' + @options?.position) if @options?.position
    @label = @options.label if @options?.label
    @size = @options.size if @options?.size
    @url = @options.url if @options?.url
    $(@elem).css('width', @size[0])
    $(@elem).css('height', @size[1])
    $(@elem).html [
        "<div id='control'>"
        "<span id='label'>" +@label+ "</span>"
        "<span id='ctl'>" +@ctl[0]+ "</span>"
        '</div>'
        "<div id='workspace'></div>"
      ].join('')
    @elControl = $(@elem).find('#control')
    @elControl.css('height', @size[1])
    @elControl.css('background', @options.background) if @options?.background
    @events()

  display: ->
    self= @
    $(@elem).attr('height', self.size[1] + self.size[2])
    $(@elem).find('#workspace').html [
        '<iframe width=100% height="' + @size[2] + '" frameborder=0 src="' + @url + '">'
        '</iframe>'
      ].join('')
  clean:->
    # 
    $(@elem).find('#workspace').html ''

  events: ->
    self = @
    $(@elem).find('#control').on 'click', (e)->
      unless self.open
        $(self.elem).find('#ctl').html self.ctl[1]
        $(self.elem).animate
          height: self.size[1] + self.size[2],
        , 400, ->
          self.open = true;
          self.display();
      else
        $(self.elem).find('#ctl').html self.ctl[0]
        $(self.elem).animate
          height: self.size[1],
        , 400, ->
          self.open = false;
          self.clean();        




