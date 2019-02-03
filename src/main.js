const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

document.addEventListener('DOMContentLoaded', function() {
  var content = document.getElementById('content');
  var form = document.getElementById('todos');
  var input = document.getElementById('todo');

  function addNote(note) {
    var element = document.createElement('div');
    element.innerHTML = note;
    element.className = 'note';
    content.appendChild(element);
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var note = input.value;
    input.value = '';
    addNote(note);
    fetch('/notes', {
      method: 'post',
      headers: headers,
      body: JSON.stringify({note: note}),
    });
  });

  fetch('/notes').then(function(res) {
    res.json().then(function(data) {
      content.innerHTML = '';
      data.notes.forEach(function(note) {
        addNote(note);
      });
    });
  });
});
