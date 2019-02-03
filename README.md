# Wprowadzenie do Node.js
### wersja rozszerzona

## Rozwiązania zadań

### (df81cb765e33dc93ed5f056e7b937050b44278cc)
Katalog projektu tworzymy poleceniem `mkdir` z argumentem będącym nazwą katalogu, np:
```
mkdir app
```

Następnie, po utworzeniu katalogu projektu przechodzimy do niego poleceniem `cd`:
```
cd ~/app
```
Po upewnieniu się, że znajdujemy się w katalogu projektu (polecenie `pwd`), w katalogu `app` tworzymy kolejny podkatalog o nazwie `src` – również poleceniem `mkdir` a następnie przechodzimy do nowoutworzonego katalogu:
```
mkdir src
cd src
```
Znajdując się w katalogu `src` poleceniem `touch` tworzymy wymagane pliki:
```
touch index.html main.js style.css
```

Następnie tworzymy plik `.gitignore` w głównym katalogu aplikacji:
```
touch .gitignore
```
Po stworzeniu pliku, możemy dodać do niego nazwy plików i katalogów, które mają być pomijane przy wersjonowaniu projektu:
```
echo node_modules > .gitignore
echo dist >> .gitignore
```
Aby upewnić się czy `.gitignore` zawiera wszystkie wymagane nazwy plików, możemy wiświetlić jego zawartość poleceniem `cat`:
```
cat .gitignore
```

Następnym krokiem będzie utworzenie repozytorium w głównym katalogu projektu:
```
git init
```

Po utworzeniu repozytorium sprawdzamy status obecnej rewizji poleceniem `git status` a następnie dodajemy wszystkie utworzone pliki:
```
git add src
git add .gitignore
```

Po dodaniu plików zapisujemy obecną rewizję poleceniem:
```
git commit -m "Initial commit"
```

W kolejnym zadaniu tworzymy projekt poleceniem `npm init` i uzupełniamy informacje o projekcie, bądź używamy ustawień domyślnych dodając flagę `-y`:
```
npm init -y
```

Aby sprawdzić zawartość pliku `package.json` możemy użyć polecenia `cat package.json`.

Po utworzeniu projektu uruchamiamy edytor tekstu i tworzymy prostą, statyczną stronę, jak w kodzie źródłowym.
