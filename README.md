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

## 2. Projekt
### 2.1. Możliwość instalacji i przekazania projektu
Prowadzący ma prawo przekazywać projekt innym studentom w celu dzielenia się wiedzą.

### 2.2. Diagram czynności UML
![Use cases diagram](/documentation/activity_diagram.png)

### 2.3. Diagram komponentów i wdrożenia
![Use cases diagram](/documentation/components_diagram.png)


## 3. Scenariusze testów - testy akceptacyjne
### 3.1. T1 - Instalacja aplikacji
**Scenariusz dotyczy:** W1  
**Cel testu:** Testowanie poprawnego pobierania oraz instalowania aplikacji TricictyTravel na urządzeniu mobilnym.  
**Sposób dostępu:** Widok wywoływany.  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wyszukanie aplikacji TricityTravel w sklepie Google Play i klinkięcie przycisku pobierz.

#### Odpowiedź systemu:  
1. Urządzenie mobilne pobierze aplikacje.
2. Urządzenie mobilne poinformuję nas o zainstalowaniu aplikacji.

### 3.2. T2 - Personalizacja ustawień - pogoda
**Scenariusz dotyczy:** W2  
**Cel testu:** Testowanie personalizacji ustawień dotyczących pogody.  
**Sposób dostępu:** Widok wywoływany poprzez wybranie z menu "Ustawienia"  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wpisanie w pole tekstowe nazwy miasta.
2. Wybranie przycisku "Zapisz".
#### Odpowiedź systemu:  
1. Poprawne wyświetlenie pogdoy dla wybranego miasta w zakładce "Pogoda".

### 3.3. T3 - Personalizacja ustawień - transport publiczny
**Scenariusz dotyczy:** W2  
**Cel testu:** Testowanie personalizacji ustawień dotyczących transportu publicznego.  
**Sposób dostępu:** Widok wywoływany poprzez wybranie z menu "Ustawienia"  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wybranie przycisku "Edytuj listę linii".
2. Wybranie przycisku "Dodaj" obok wybranego przystanku.
3. Zaznaczenie checkboxem linii, które chcemy dodać do swoich ustawień.
4. Wybranie przycisku "Zapisz".
#### Odpowiedź systemu:  
1. Wyświetlenie listy przystanków.
2. Dodanie przystanku do listy.

### 3.4. T4 - Personalizacja ustawień - tagi
**Scenariusz dotyczy:** W2  
**Cel testu:**  Testowanie ustawienia tagów do poboru informacji z Trojmiasto.pl
**Sposób dostępu:** Widok wywoływany poprzez wybranie z menu "Ustawienia".  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wpisanie tagu w pole tekstowe.
2. Naciśnięcie enter na klawiaturze ekranowej.
#### Odpowiedź systemu:  
Tag wyświetla się poniżej pola tekstowego.

### 3.5. T5 - Wyświetlenie czasu dojazdu do punktu docelowego
**Scenariusz dotyczy:** W3  
**Cel testu:** Testowanie wyświetlania czasu dojazdu do punktu docelowego dla podanych danych.  
**Sposób dostępu:** Widok wywoływany poprzez wybranie z dolnego menu zakladki "Samochód"  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wpisanie punktu początkowego w pole tekstowe.
2. Wpisanie punktu docelowego w pole tekstowe.
3. Wybranie przycisku "Czas przejazdu"
#### Odpowiedź systemu:  
1. Wyświetlenie informacji na temat czasu dojazdu.

### 3.6. T6 - Usunięcie przystanku z listy
**Scenariusz dotyczy:** W4  
**Cel testu:** Testowanie funkcjonalności usuwania przystanków z listy zapisanych w ustawieniach.  
**Sposób dostępu:** Widok wywoływany poprzez wybranie z dolnego menu zakladki "Transport publiczny".  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Naciśnięcie i przytrzymanie na wybranym przystaku.  
2. Wybranie opcji Tak w celu usunięcia przystanku z listy.
#### Odpowiedź systemu:  
1. Aplikacjia usunie przystanek z listy.  

### 3.7. T7 - Negacja usunięcia przystanku z listy
**Scenariusz dotyczy:** W4  
**Cel testu:** Testowanie funkcjonalności usuwania przystanków z listy zapisanych w ustawieniach.  
**Sposób dostępu:** Widok wywoływany poprzez wybranie z dolnego menu zakladki "Transport publiczny".  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Naciśnięcie i przytrzymanie na wybranym przystaku.  
2. Wybranie opcji Nie w celu usunięcia przystanku z listy.
#### Odpowiedź systemu:  
1. Aplikacjia nie usunie przystanku z listy.  


### 3.8. T8 - Wyświetlenie rzeczywistych czasów przyjazdu
**Scenariusz dotyczy:** W4  
**Cel testu:** Testowanie funkcjonalności wyświetlenia rzeczywistych czasów przyjazdu danego pojazdu.  
**Sposób dostępu:** Widok wywoływany poprzez wybranie z dolnego menu zakladki "Transport publiczny".  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Kliknięcie na wybrany przystanek.  
2. Przeciągnięcie palcem w dół - odświeżenie widoku.
#### Odpowiedź systemu:  
1. Odświeżenie listy linii.
2. Wyświetlenie rzeczywistych czasów przyjazdów(opóźnienie - kolor czerwony, punktualny - kolor zielony, przed czasem - kolor pomarańczowy).

### 3.9. T9 - Wyświetlenie informacji pogodowych
**Scenariusz dotyczy:** W5  
**Cel testu:** Testowanie funkcjonalności wyświetlenia informacji pogodowych.  
**Sposób dostępu:** Widok wywoływany poprzez wybranie z dolnego menu zakladki "Pogoda".  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Kliknięcie przycisku "Odśwież" - odświeżenie danych.
#### Odpowiedź systemu:  
1. Wyświetlenie aktualnych danych pogodowych.

### 3.10. T10 - Wyświetlenie raportu Trójmiasto
**Scenariusz dotyczy:** W6  
**Cel testu:** Testowanie funkcjonalności wyświetlenia Raportu Trójmiasto.  
**Sposób dostępu:** Widok wywoływany poprzez wybranie z dolnego menu zakladki "Raport".  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Brak.
#### Odpowiedź systemu:  
1. Wyświetlenie listy nagłówków z Raportu Trójmiasto.

### 3.11. T11 - Pomiar szykbości aplikacji
**Scenariusz dotyczy:** W7  
**Cel testu:** Testowanie szybkości aplikacji.   
**Sposób dostępu:** Widoki wywoływane przez wybranie z dolnego menu kolejnych zakładek.  
**Scenariusz (kroki testowe):**   
#### Akcje użytkownika:  
1. Wybranie zakładki "Pogoda".
1. Wybranie zakładki "Transport publiczny".
1. Wybranie zakładki "Samochód".
1. Wybranie zakładki "Raport".
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