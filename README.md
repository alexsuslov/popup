# Popup

## Установка
### head
В <head> добавить: 
  <link href="css/popup.css" rel="stylesheet" media="screen">
### body
В конец <body> добавить: 
  <div id="popup"></div>
  <script src="js/popup.js"></script>
  <script>
    $(function() {
      $('#popup').popup({
        url:'http://localhost:3000/'
        , background: '#5e87b0'
        , size:[320,32,480]
        , position:'bottom-right'
        , label:'Контакт'
        });
      });
  </script>

## Настройка

- background фон шапки
- size:[328,32,480] [ширина, высота окна управления, высота окна]
- position:'bottom-right' место размещения
  - top-right
  - top-left
  - bottom-right
  - bottom-left
- label:'Контакт'