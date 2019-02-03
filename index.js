/* przypianie zewnętrznych zależności do zmiennych */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

/* definicja portu na którym aplikacja będzie nasłuchiwała */
const PORT = 8081;

/* definicja ścieżki dla zapytań */
const NOTES_URL = '/notes';

/* deklaracja pustej tablicy, w której będziemy przechowywać notatki */
const notes = [];

/* wywołanie funkcji express() tworzy serwer aplikacji */
const app = express();

/* używamy biblioteki bodyParser, aby aplikacja
 * była w stanie parsować dane przychodzące z frontendu */
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

/* obsługa zapytania typu GET */
app.get(NOTES_URL, function(req, res) {
  /* dla zapytanie typu GET zwracamy JSON z listą notatek */
  res.json({notes: notes});
});

/* obsługa zapytania typu POST */
app.post(NOTES_URL, function(req, res) {
  /* na podstawie przesłanych danych tworzymy notatkę */
  const note = req.body.note;

  /* utworzoną notatkę dodajemy do tablicy pozostałych notatek */
  notes.push(note);

  /* w odpowiedzi przesyłamy zawartość notatki jako potwierdzenie jej utworzenia */
  res.json({value: note});
});

/* obsługa zapytania typu DELETE */
app.delete(NOTES_URL, function(req, res) {
  /* na podstawie przesłanych danych tworzymy zmienną zawierającą treść notatki */
  const note = req.body.note;

  /* sprawdzamy na której pozycji w tablicy znajduje się przesłana notatka */
  const index = notes.indexOf(note);

  /* kiedy wiemy już gdzie znajduje się notatka,
   * za pomocą metody .splice()
   * kasujemy 1 element tablicy o podanym indeksie */
  notes.splice(index, 1);

  /* odsyłamy informację o tym, że notatka zostałą skasowana */
  res.json({deleted: note});
});

/* obsługa statycznych plików:
 * jeśli żadna z wcześniejszych ścieżek nie została dopasowana do
 * aktualnego zapytania, wysyłamy użytkownikowi statyczny plik z katalogu `dist`
 * WAŻNE: ta linijka musi znajdować się poniżej wszystkich pozostałych deklaracji
 * ścieżek w aplikacji, ponieważ zawiera wzorzec *,
 * który dopasowuje się do dowolnego tekstu */
app.get('*', express.static(path.resolve(__dirname, 'dist')));

/* gdy wszystko mamy już gotowe, wywołujemy na obiekcie aplikacji
 * metodę .listen(), która rozpoczyna nasłuchiwanie na zdarzenia
 * na zadanym porcie, który zdefiniowaliśmy wcześniej */
app.listen(PORT, function() {
  /* informacja zwrotna po rozpoczęciu nasłuchiwania na wydzrzenia serwera */
  console.log('listening on port', PORT);
});
