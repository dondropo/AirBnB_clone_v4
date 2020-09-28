const myListId = [];
const myListName = [];
$(document).ready(function () {
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked') === true) {
      myListId.push($(this).attr('data-id'));
      console.log(myListId);
      myListName.push($(this).attr('data-name'));
      console.log(myListName);
    } else {
      const index = $.inArray($(this).attr('data-id'), myListId);
      if (index !== -1) {
        myListId.splice(index, 1);
        const name = $.inArray($(this).attr('data-name'), myListName);
        if (name !== -1) {
          myListName.splice(name, 1);
        }
      }
    }
    if (myListId.length === 0) {
      $('.amenities h4').html('&nbsp');
    } else {
      $('.amenities h4').text(myListName.join(', '));
      $('.amenities h4').append('...');
    }

  });
});
