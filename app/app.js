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


// 2.
$('p.special').click(function() {
  $(this).css({
    'color' : 'red',
    'font-weight' : 'bold'
  });
})


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


// 4.
$('a.thinger').each(function() {
  $(this).attr('href', $(this).attr('href') + '?ajax=true');
});
$('a.thinger').hide();
$('#myButton').click(function(){
  $('a.thinger').show();
})


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


// 8.
if (errorMsg != null && errorMsg.length > 0) {
  // ...
}

// 9.
if (total == null || total == "0") {
  // ...
}

// 10.
if (price == null) {
  // ...
} else if(discountPrice != null && price == discountPrice) {
  // ...
}
