// Replicate this basic HTML file above
// When clicking on the Add todo button add the content of the input field to the list
// (Optional) Clicking on a list item should make the text line-through

// when clicked, read content of the input field and append it as <li> do <ul>

// click
$('button').click(() => {

    // read value and load it to variable string
    let string = $('input').val();

    // append value in variable string as <li> into <ul>
    $('ul').append(`<li>${string}</li>`);

    // and clear line in text input
    $('input').val('');
});
