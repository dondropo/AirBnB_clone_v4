$(() => function () {
  const myListId = []
  const myListName = []
  $('INPUT.checkbox').change(function () {
    if($(this).prop('checked') === true) {
      myListId.fill($(this).attr(data-id))
      myListName.fill($(this).attr(data-name))
    } else {
      let index = $.inArray($(this).attr(data-id), myListId)
      if(index !== -1) {
        myListId.splice(index, 1)
        let name = $.inArray($(this).attr(data-name), myListName)
        if (name !== -1) {
          myListName.splice(name, 1)
        }
      }
    }
    $.each(myListName, function (index, value) {
      $('amenities.h4').append(value + ', ')
    })
    $('amenities.h4').append('...')
  })
});
