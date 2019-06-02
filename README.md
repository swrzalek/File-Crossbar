<img align="right" width="150" height="150" src="documentation/fc_icon.jpg">

# FileCrossbar

## 1. Specyfikacja wymagań
### 1.1. Opis systemu
#### 1.1.1. Nazwa
Nazwa ogólna: FileCrossbar - instant upload service 
Nazwa krótka: FileCross

#### 1.1.2. Uczestnicy
1. Sebastian Wrzalek
2. Piotr Gambowski
3. Mateusz Arendarski

#### 1.1.3. Charakterystyka
Aplikacja wieloplatformowa służąca do łatwego udostępniania plików z telefonu oraz przeglądarki bez konieczności zakładania konta.

###  1.2. Specyfikacja właściwa - historyjki użytkowników

#### 1.2.1 Wymagania Funkcjonalne
**W1.** Jako użytkownik systemu FileCrossbar [kto] poprzez aplikację mobilną lub webową w zakładce "Załąduj zdjęcie" [gdzie] mam możliwość udostępnienia zdjęcia [co].

**W2.** Jako osoba udostępniająca zasób [kto] po udostępnieniu pliku w aplikacji "Załąduj zdjęcie" [gdzie] otrzymam sześciocyfrowy kod dostępu do pliku [co].

**W3.** Jako osoba pobierająca zasób [kto] w zakładce "Odbierz zdjęcie" [gdzie] mam możliwość wpisania kodu dostępu i zobaczenia podglądu pliku [co].

**W4.** Jako osoba pobierająca zasób [kto] w zakładce "Odbierz zdjęcie" [gdzie] mam możliwość pobrania pliku na urządzenie [co].

#### 1.2.2 Wymagania Niefunkcjonalne

**W7.** Jako użytkownik systemu FileCrossbar, [kto] chcę aby moje pliki zostały usunięte z serwera po upływie 24 godzin[co] w celu zapewnienia bezpieczeństwa [dlaczego].

**W8.** Jako użytkownik systemu FileCrossbar, [kto] chcę aby kod dostępu do pliku został zaszyfrowany [co] aby zapobiegać kradzieży danych [dlaczego].

**W9**. Użytkownik aplikacji FileCrossbar [kto] we wszystkich zakładkach aplikacji [gdzie] sprawnie ładuję dane(do 1s)[co].

![Use cases diagram](/documentation/activity_schema.png)

## 2. Projekt
### 2.1. Możliwość instalacji i przekazania projektu
Prowadzący ma prawo przekazywać projekt innym studentom w celu dzielenia się wiedzą.

### 2.2. Diagram czynności UML
![Use cases diagram](/documentation/diagram.png)
### 2.3. Diagram komponentów i wdrożenia
![Use cases diagram](/documentation/components_diagram.png)


## 3. Scenariusze testów - testy akceptacyjne

### 3.1. T1 - Udostępnienie zdjęcia - wybór zdjęcia
**Scenariusz dotyczy:** W1 
**Cel testu:** Testowanie możliwości udostępnienia zdjęcia.  
**Sposób dostępu:** Widok wywoływany poprzez wybranie z menu "SEND".
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wybranie przycisku "CHOOSE FILES".
2. Wybranie zdjęcia.
#### Odpowiedź systemu:  
1. Poprawnie załdowane zdjęcie.

### 3.2. T2 - Udostępnienie zdjęcia - kod zdjęcia
**Scenariusz dotyczy:** W2  
**Cel testu:** Testowanie otrzymania kodu zdjęcia.
**Sposób dostępu:** Widok wywoływany poprzez wybranie przycisku "CHOOSE FILES" i wybraniu zdjęcia.
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wybranie przycisku "SUBMIT".
#### Odpowiedź systemu:  
1. Poprawne wysłanie zdjęcia, oraz otrzymanie wygenerowanego kodu.

### 3.3. T3 - Odebranie zdjęcia 
**Scenariusz dotyczy:** W3
**Cel testu:**  Testowanie odbioru udostępnionego zdjęcia.
**Sposób dostępu:** Widok wywoływany poprzez wybranie "RECIVE". 
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wpisanie sześcio cyfrowego kodu.
2. Wybranie przycisku "SUBMIT".
#### Odpowiedź systemu:  
1. Wyświetlenie zdjęcia gotowego do pobrania.

### 3.4. T4 - Odebranie zdjęcia - pobranie
**Scenariusz dotyczy:** W4  
**Cel testu:** Testowanie pobrania zdjęcia.
**Sposób dostępu:** Widok wywoływany poprzez wpisanie kodu.
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wybranie zdjęcia.
2. Wybranie lokalizacji dla zdjęcia
#### Odpowiedź systemu:  
1. Pobranie zdjęcia w wybrane miejsce.

### 3.5. T5 - Udostępnionie zdjęcia - bezpieczeństwo
**Scenariusz dotyczy:** W7  
**Cel testu:** Testowanie bezpieczenśtwa udostępnionego pliku.   
**Sposób dostępu:** Widoki wywoływane przez wybranie "SEND".  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wybranie zdjęcia.
2. Wybranie przycisku "SUBMIT".
#### Odpowiedź systemu:  
1. Po 24 godzinach od udostępnienia, dany plik zostaje usunięty.

### 3.6. T6 - Odebranie kodu zdjęcia - bezpieczeństwo
**Scenariusz dotyczy:** W8  
**Cel testu:** Testowanie bezpieczenśtwa kodu do pliku.   
**Sposób dostępu:** Widoki wywoływane przez wybranie "SEND".  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wybranie zdjęcia.
2. Wybranie przycisku "SUBMIT".
#### Odpowiedź systemu:  
1. Zaszyfrowanie wygenerowanego kodu.

### 3.7. T7 - Pomiar szykbości aplikacji
**Scenariusz dotyczy:** W8  
**Cel testu:** Testowanie szybkości aplikacji.   
**Sposób dostępu:** Widoki wywoływane przez wybranie z kolejnych zakładek.  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wybranie zakładki "SEND".
2. Wybranie zakładki "RECIVE".
#### Odpowiedź systemu:  
1. Subiektywnie szybkie (do 1s) wyświetlenie widoku.

## 4. Instrukcja instalacji i uruchomienia

### 4.1 Uruchomienie projektu w celu dalszego rozwoju
1. Upewnij się ze NodeJS jest zainstalowany. Możesz wykonać to przez menadżer pakietów lub ze [strony](http://nodejs.org/).
2. Zklonuj to rezpozytorium:
```term
$ git clone https://github.com/willwebberley/NodeDirectUploader.git
```
3. Do poprawnego działania aplikacje wymagane jest konto w serwisie Amazon Simple Storage Service oraz Google Firebase Realtime DB,
4. Zmienić lokalizacje na lokalizacje aplikacji oraz zainstalować "zależności aplikacji":
```term
$ cd NodeDirectUploader
$ yarn
```
5. Jeśli preferujesz  `npm` niż `yarn`, wten wpisz `npm install` .
6. W głównym folderze należy uworzyć plik przechowujący zmienne `.env`:
```dotenv
AWS_ACCESS_KEY_ID=XXXXXXXXXXX
AWS_SECRET_ACCESS_KEY=XXXXXXXXXXX
S3_BUCKET=XXXXXXXXXXX
S3_BUCKET_NAME=XXXXXXXXXXX
FB_APIKEY=XXXXXXXXXXX
FB_AUTHDOMAIN=XXXXXXXXXXX
FB_DATABASEURL=XXXXXXXXXXX
FB_PROJECTID=XXXXXXXXXXX
FB_STORAGEBUCKET=XXXXXXXXXXX
FB_SENDERID=XXXXXXXXXXX
```


## Uruchamianie aplikacji
* Uruchom aplikacje poleceniem `yarn start` (lub `npm start`)
* Przejdź pod adres [localhost:3000/](http://localhost:3000/) 
* Moduł wysyłania w aplikacji znajdziesz pod adresem [localhost:3000/send](http://localhost:3000/send)
* Moduł odbierania w aplikacji znajdziesz pod adresem [localhost:3000/receive](http://localhost:3000/receive)


## Deploy aplikacji

Zobacz artykuł [Deploy jest Git](https://devcenter.heroku.com/articles/git) po więcej informacji o deployu do serwisu Heroku

* Ściągnij i zainstaluj [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
* Commituj twoją aplikacje do lokalnego repozytorium (e.g. `git init`, `git add .`, `git commit -m "version 1 commit"`, etc.)
* Stwórz aplikacje na Heroku dodając Git remote (`$ heroku create`)
* Wypchnij kod na nowe repozytorium(`$ git push heroku master`)

## 5. Uwagi ogólne

### 5.1 Podsumowanie
Projekt pomimo działania wymaga kilku usprawnień, większość z nich to obsługa niechcianych błędów mogącaych zakółcić działanie aplikacji
 oraz zmiany o podłożu UX/UI. Nie chciałem też pisać tej dokumentacji po Polsku, jeżeli czyta to Pani z HR to proszę mieć to na uwadze.
### 5.2 Licencja
```
Copyright © 2019 by Sebastian Wrzalek. TricityTravel
This application is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/.
```