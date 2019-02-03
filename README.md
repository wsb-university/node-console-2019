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

### (86f70928d8219d5c6c241539723bc9958ecef44d)

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


### (f3601584867281a5ecdc24db1a0aff79e910f5c7)

Aby zbudować aplikacją w trybie produkcyjnym dodamy możliwość czytania zmiennej środowiskowej w pliku konfiguracyjnym. Następnie na podstawie jej wartości zbudujemy aplikację dla środowiska produkcyjnego bądź deweloperskiego.


Gdy podstawowa wersja frontendu jest już gotowa, możemy utworzyć plik serwera aplikacji:
```
touch index.js
```

Serwer możemy napisać używając Node.js bez żadnych zależności, jak w kodzie źródłowym.

Chcąc mieć możliwość szybkiego rozwijania projektu backendowego, warto zainstalować narzędzie, które będzie uruchamiało aplikację za każdym razem, kiedy wykryta zostanie zmiana w kodzie. Możemy wykorzystać do tego narzędzie o nazwie `nodemon`, które zainstalujemy korzystając z `npm`:
```
npm install --save-dev nodemon
```

Po zainstalowaniu `nodemon`'a dodajemy kolejne skrypty, które będą startowały serwer w trybie produkcyjnym oraz deweloperskim.

### (227d25bf4f99452a972f8657ca9b788bb887f7d4)

Pomimo możliwości rozwijania aplikacji bez użycia dodatkowych zależności, jest to proces zdecydowanie mało wydajny – zamiast tego warto posłużyć się gotowym frameworkiem, który ułatwi nam definiowanie ścieżek aplikacji, etc. Wykorzystamy do tego celu bibliotekę o nazwie `express` wraz z dodatkiem o nazwie `body-parser`:
```
npm install --save express body-parser
```

W kodzie źródłowym aplikacji zmieniamy wcześniejszą wersję aplikacji na taką, która będzie korzystać z biblioteki `express`.

### (b9b029295282fac7e9977e06a8426e9f904079c2)

W tym momencie mamy dwie części aplikacji (frontend i backend), które są budowane oraz uruchamiane oddzielnymi skryptami. Aby mieć możliwość budowania i uruchamiania frontendu i backendu na raz potrzebujemy jeszcze jednego narzędzia, które zainstalujemy przez `npm`:
```
npm install --save-dev npm-run-all
```

Możemy je wykorzystać aby zrównoleglić uruchamianie serwera oraz procesu budowania frontendu poprzez skonstruowanie odpowiednich skryptów w pliku `package.json`.
