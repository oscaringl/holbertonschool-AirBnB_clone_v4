let amenitiesChecked = {};
$(() => {
  $('input[type=checkbox]').click(function () {
    if (this.checked) {
      amenitiesChecked[this.dataset.id] = this.dataset.name;
    } else {
      delete amenitiesChecked[this.dataset.id];
    }
    $('.amenities h4').text(Object.values(amenitiesChecked).join(', '));
  });

  $.ajax({
    url: 'http://web-01.pearmountain.space/api/v1/status/',
    type: 'GET',
    dataType: 'json'
  })
    .done(function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      }
    });
});
