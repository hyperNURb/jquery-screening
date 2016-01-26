/*
  Improve the code
 */

// 1.
$('#showMessage').click(function() {
  $('<div>' +
    '<h1>' + $('#messageTitle').val() + '</h1>' +
    '<p>' + $('#messageText').val() + '</p>' +
    '</div>')
    .appendTo('#messageContainer')
});

// 1. Improved code
// Here we can use mustache.js template system and separate HTML code for JS functionality

<div id="output">Loading...</div>

<script type="text/html" id="template">
  <h1>{{message.title}}</h1>
  <p>{{message.text}}</p>
</script>

$(document).ready(function () {
  var output = $("#output"),
      template = $("#template").html(),
      messageTitle = $('#messageTitle').val(),
      messageText = $('#messageText').val();

  var messageContent = {
    message: {
      title: messageTitle,
      text: messageText
    }
  };

  html = Mustache.render(template, messageContent);
  output.html(html);
});

// 2.
$('p.special').click(function() {
  $(this).css({
    'color' : 'red',
    'font-weight' : 'bold'
  });
});

// 2. Improved code
// Here we have to separate presentation (CSS) from structure to keep it easier for maintenance
// CSS of course go into CSS file so this is only for screening purposes
<style>
  .emphasized {
    color: red;
    font-weight: bold;
  }
</style>

$('p.special').click(function() {
  $(this).addClass('emphasized');
}

// 3.
function isItemInArray(item, arr) {
  var inArray = false,
      len = arr.length;

  for (var i = 0; i < len; i++) {
    if (item == arr[i]) {
      inArray = true;
    }
  }

  return inArray;
}

// 3. Improved code
// Here we can simply utilize $.inArray() jQuery method which returns -1 when it doesn't find a match.
// or 0 when the first element within array matches value.
function isItemInArray(item, arr) {
  return $.inArray(item, arr) > -1;
}

// 4.
$('a.thinger').each(function() {
  $(this).attr('href', $(this).attr('href') + '?ajax=true');
});
$('a.thinger').hide();
$('#myButton').click(function(){
  $('a.thinger').show();
})

// 4. Improved code
// Here we can simply chain elements and set their attribute
var thingers = $('a.thinger'),
    button = $('#myButton');

thingers.attr('href', function(i, val) {
  return val + '?ajax=true';
}).hide();

button.click(function() {
  thingers.show();
});

// 5.
$(document).ready(function() {
  $('#enableAwesome').click(function() {
    $('ul.foo li').each(function() {
      var li = $(this);

      li.data('name', li.html())
        .find('a.remove').click(function(e) {
          $.ajax({
            url : $(this).attr('href'),
            dataType : 'json',
            type : 'post',
            success : function(resp) {
              if (resp.ok) { li.remove(); }
            },
            error : console.log
          })
          e.preventDefault();
        });
    })
  });
});

// 5. Improved code
// This is beyond my current skills :)

// 6.
function isItABigNumber(num) {
  if (num > 5000) {
    $('#myContainer').html('<p>It was a big number</p>');
    $('#myInput').val(num);
    $('.thinger').hide();
  } else {
    $('#myContainer').html('<p>It was not a big number</p>');
    $('#myInput').val('');
    $('.thinger').show();
  }
}

// 6. Improved code
// Here we can use some ternary operations and repeat only what's needed
function isItABigNumber(num) {
  var bigNumber = num > 5000;

  // Check if the number is big
  $('#myContainer').html(bigNumber ? '<p>It was a big number</p>' : '<p>It was not a big number</p>');
  // Set proper input value
  $('#myInput').val(bigNumber ? num : '');
  // Show or hide thinger element
  $('.thinger')[bigNumber ? 'hide' : 'show']();
}

// 7.
function crazyConcatenation(selector, word1, word2, word3, repeat) {
  var arr = [],
      words = [],
      joinedWords;

  if (selector == null) { return; }
  if (word1 == null) { return; }

  if (word2 != null) { words.push(word2); }
  if (word3 != null) { words.push(word3); }
  if (!repeat) { repeat = 5; }

  joinedWords = words.join(', ');

  while (repeat--) { arr.push(joinedWords); }

  $(selector).html(arr.join('<br/>'))
}

crazyConcatenation('#foo', 'Hello', null, null, 5);

// 7. Improved code
// This is beyond my current skills :)


// 8.
if (errorMsg != null && errorMsg.length > 0) {
  // ...
}

// 8. Improved code
// No need to do this overtesting, we can simply use
if (errorMsg && errorMsg.length) {
  // ...
}

// 9.
if (total == null || total == "0") {
  // ...
}

// 9. Improved code
// Here we can use negation of parseInt function which parses a string and returns an integer
// Here we check for decimal number
if (!parseInt(total, 10)) {
  // ...
}

// 10.
if (price == null) {
  // ...
} else if(discountPrice != null && price == discountPrice) {
  // ...
}

// 10. Improved code
// In first conditional we check if the price is null so no need to check it again within else if
if (!price) {
  // ...
} else if (price == discountPrice) {
    // ...
}