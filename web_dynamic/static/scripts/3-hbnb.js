$('document').ready(() => {
  const amenities = {};
  $('.amenities H4').css({ height: '16px', width: '85%', 'text-overflow': 'ellipsis', 'white-space': 'nowrap', overflow: 'hidden' });
  $('input[type="checkbox"]').css({ 'margin-right': '10px', padding: '0px' });
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if ($(this).is(':not(:checked)')) {
      delete amenities[$(this).attr('data-id')];
    }
    if (Object.values(amenities).length >= 1) {
      $('.amenities H4').text(Object.values(amenities).join(', '));
    } else {
      $('.amenities H4').html('&nbsp;');
    }
  });
  $.ajax({
    // localhost instead of 0.0.0.0 to work on windows
    url: 'http://localhost:5001/api/v1/status/',
    success: (data) => {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
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
        $('SECTION.places').append(template);
      }
    }
  });
});
$('document').ready(() => {
  const amenities = {};
  $('.amenities H4').css({ height: '16px', width: '85%', 'text-overflow': 'ellipsis', 'white-space': 'nowrap', overflow: 'hidden' });
  $('input[type="checkbox"]').css({ 'margin-right': '10px', padding: '0px' });
  $('input[type="checkbox"]').click(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if ($(this).is(':not(:checked)')) {
      delete amenities[$(this).attr('data-id')];
    }
    if (Object.values(amenities).length >= 1) {
      $('.amenities H4').text(Object.values(amenities).join(', '));
    } else {
      $('.amenities H4').html('&nbsp;');
    }
  });
  $.ajax({
    // localhost instead of 0.0.0.0 to work on windows
    url: 'http://localhost:5001/api/v1/status/',
    success: (data) => {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
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
        $('SECTION.places').append(template);
      }
    }
  });
});