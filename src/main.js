/* nagłówki mówiące o tym w jakim formacie aplikacja będzie przyjmowała i wysyłała dane */
var headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

// nasłuchiwanie na event typu DOMContentLoaded, tj na załadowanie się aplikacji
document.addEventListener('DOMContentLoaded', function() {
  /* po załadowaniu strony przypisujemy elementy występujące pod konkretnymi id
   * w pliku index.html do zmiennych, aby mieć do nich łatwy dostęp
   * content - kontener na notatki oraz informację o ładowaniu
   * form - formularz, który zawiera element z tekstem notatki oraz przyciskiem
   * input - element zawierający zawartość tekstową nowej notatki do dodania */
  var content = document.getElementById('content');
  var form = document.getElementById('todos');
  var input = document.getElementById('todo');

  /* funkcja wywoływana dla każdej z notatek */
  function addNote(note) {
    /* tworzymy nowy element typu <div> */
    var element = document.createElement('div');

    /* argument przekazany do funkcji (tekst notatki)
     * zostaje ustawiony jako zawartość nowoutworzonego elementu */
    element.innerHTML = note;

    /* dodajemy nazwę klasy elementu, aby można go było ostylować */
    element.className = 'note';

    /* definiujemy funkcję, która zostanie wywołana gdy użytkownik
     * kliknie w nowo utworzony element */
    element.addEventListener('click', function() {
      /* tworzymy kolejny element, który będzie informował o tym,
       * że dany element został przeznaczony do usunięcia */
      var info = document.createElement('span');

      /* ustawiemy zawartość oraz klasę dla tego elementu */
      info.className = 'info';
      info.innerHTML = 'deleting…';

      /* dodajemy element z informacją o kasowaniu do elementu notatki */
      element.appendChild(info);

      /* wysyłamy zapytanie typu DELETE do serwera, aby skasować notatkę */
      fetch('/notes', {
        method: 'delete' /* ustawiamy metodę (typ) zapytania */,
        headers: headers /* przypisujemy nagłówki */,
        /* payload zapytania to string powstały z obiektu zawierającego notatkę */
        body: JSON.stringify({
          note: note,
        }),
      })
        /* w tym momencie metoda fetch zwraca Promise zawierającego obiekt typu Response */
        .then(function(res) {
          /* po otrzymaniu odpowiedzi z serwera wywołujemy na obiekcie Response metodę .json(),
           * która wyłuska z odpowiedzi dane, które nas interesuję */
          res.json().then(function(data) {
            /* po otrzymaniu danych z odpowiedzi serwera upewniamy się,
             * że należy skasować daną notatkę */
            if (data.deleted === note) {
              content.removeChild(element);
            }
          });
        });
    });

    /* dodajemy element z nowo utworzoną notatką jako kolejny element
     * wewnątrz listy pozostałych notatek
     * WAŻNE: ta linijka znajduje się poza logiką związaną z kasowaniem notatek */
    content.appendChild(element);
  }

  /* nasłuchiwanie na event typu 'submit' na elemencie formularza (<form>);
   * zdefiniowana poniżej funkcja zostanie wywołana kiedy użytkownik
   * zechce wysłać formularz
   */
  form.addEventListener('submit', function(event) {
    /* blokujemy domyślną akcję dla tego typu zdarzenia,
     * aby uniknąć zmiany w adresie URL strony */
    event.preventDefault();

    /* przypisujemy tekst z pola tekstowego do zmiennej */
    var note = input.value;

    /* czyścimy pole tekstowe (zawartość mamy już w zmiennej note) */
    input.value = '';

    /* wywołujemy funkcję addNote z parametrem będącym treścią notatki */
    addNote(note);

    /* wysyłamy zapytanie typu POST, które ma zapisać notatkę na serwerze;
     * parametry zapytania są analogiczne do wcześniejszego zapytania typu DELETE */
    fetch('/notes', {
      method: 'post',
      headers: headers,
      body: JSON.stringify({note: note}),
    });
  });

  /* wykonujemy zapytanie typu GET,
   * które ma na celu pobranie wszystkich notatek z serwera */
  fetch('/notes').then(function(res) {
    res.json().then(function(data) {
      /* po zakończeniu zapytania czyścimy zawartość listy notatek */
      content.innerHTML = '';

      /* iterując po wszystkich pobranych notatkach,
       * wywołujemy funkcję addNote, która stworzy element HTML
       * dla każdej z notatek oraz przypisze odpowiednie akcje */
      data.notes.forEach(function(note) {
        addNote(note);
      });
    });
  });
});
