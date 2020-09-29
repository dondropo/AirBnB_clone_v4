const amenities = [];
const myListId = {amenities};
const myListName = [];
$(document).ready(function () {
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked') === true) {
      amenities.push($(this).attr('data-id'));
      console.log(amenities);
      myListName.push($(this).attr('data-name'));
      console.log(myListName);
    } else {
      const index = $.inArray($(this).attr('data-id'), amenities);
      if (index !== -1) {
        amenities.splice(index, 1);
        const name = $.inArray($(this).attr('data-name'), myListName);
        if (name !== -1) {
          myListName.splice(name, 1);
        }
      }
    }
    if (amenities.length === 0) {
      $('.myListId h4').html('&nbsp');
    } else {
      $('.amenities h4').text(myListName.join(', '));
      $('.amenities h4').append('...');
    }
    })
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
        $('#api_status').addClass('available')
      } else {
        $('#api_status').removeClass('available')
      }
  });
  $.ajax({
    type: 'POST',
    // localhost instead of 0.0.0.0 to work on windows
    url: 'http://localhost:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: (data) => {
      for (const place of data) {
        const template = `<article>
                               <div class="title_box">
                                  <h2>${place.name}</h2>
                                  <div class="price_by_night">$${place.price_by_night}</div>
                               </div>
                               <div class="information">
                                  <div class="max_guest">${place.max_guest} Guests</div>
                                  <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                                  <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                               </div>
                               <div class="description">${place.description}</div>
                            </article>`;
        $('SECTION.places').append(template);  // Here, appends to the class
      }
    }
  });
  $(':button').click(function () {
    const amenitiesJson = JSON.stringify(myListId) 
    console.log(amenitiesJson)
    console.log(myListId)
    $.ajax({
      type: 'POST',
      url: 'http://localhost:5001/api/v1/places_search/',
      data: amenitiesJson,
      dataType: 'json',
      contentType: 'application/json',
      success: (data) => {
        $('SECTION.places').empty()
        for (const place of data) {
          const template = `<article>
                                 <div class="title_box">
                                    <h2>${place.name}</h2>
                                    <div class="price_by_night">$${place.price_by_night}</div>
                                 </div>
                                 <div class="information">
                                    <div class="max_guest">${place.max_guest} Guests</div>
                                    <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                                    <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                                 </div>
                                 <div class="description">${place.description}</div>
                              </article>`;
          $('SECTION.places').append(template);  // Here, appends to the class
        }
      }
    });
  })
});
