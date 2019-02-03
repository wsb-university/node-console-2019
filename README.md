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

### (1a6ebdecd8e0001da7512d20b68dbd9af2c3b12a)

W kolejnym zadaniu tworzymy projekt poleceniem `npm init` i uzupełniamy informacje o projekcie, bądź używamy ustawień domyślnych dodając flagę `-y`:
```
npm init -y
```

Aby sprawdzić zawartość pliku `package.json` możemy użyć polecenia `cat package.json`.

Po utworzeniu projektu uruchamiamy edytor tekstu i tworzymy prostą, statyczną stronę, jak w kodzie źródłowym.

### (e6c00bbe7b94772a10a90145510ad4b931cd1a9f)

Instalowanie zależności aplikacji odbywa się poprzez polecenie `npm install`.

Aby testowo wyświetlić stronę, użyjemy prostego serwera o nazwie `serve`, który zainstalujemy poleceniem:
```
npm install --save-dev serve
```

Następnie możemy dodać wywołanie polecenia serwowania z odpowiednimi parametrami w `package.json` w sekcji `"scripts"`:
```
"scripts": {
  "dev": "serve -n -p 8080 src"
}
```


Kolejnym krokiem jest instalacja i konfiguracja narzędzia o nazwie `webpack`.

Aby zainstalować narzędzie oraz niezbędne dodatki użyjamy po kolei poleceń:
```
npm install --save-dev webpack webpack-cli
npm install --save-dev webpack-dev-server
npm install --save-dev html-webpack-plugin
npm install --save-dev copy-webpack-plugin
```

Po zainstalowaniu niezbędnych zależności tworzymy plik konfiguracyjny:
```
touch webpack.config.js
```

Po utworzeniu pliku konfiguracyjnego możemy przejść do konfiguracji, jak w kodzie źródłowym.

Po zainstalowaniu i skonfigurowaniu `webpack`'a możemy również wprowadzić zmiany w skrypcie uruchamiającym aplikację, dodając skrypt o nazwie `"build"` oraz zmieniając skrypt `"dev"` na taki, który będzie wywoływał `webpack-dev-server`. `serve` nie będzie nam już potrzebny.
