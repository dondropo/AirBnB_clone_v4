$(() => {
  $.get('http://0.0.0.0:5000/0-hbnb/', function (data, textStatus) {
    $('#test').text(data)
  })
})
