# ProductManager---Blockchain

## Descrizione
Questa applicazione backend consente agli utenti di caricare i dettagli del prodotto su un'istanza locale di IPFS. Memorizza le informazioni sul prodotto e l'hash IPFS del file delle specifiche in uno smart contract sulla blockchain di Polygon. L'applicazione fornisce endpoint API per interagire con lo smart contract.

## Indice
- [Descrizione](#descrizione)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [Struttura del Progetto](#struttura-del-progetto)
- [Autore](#autore)

Vuoi leggere questo in inglese?
- [English](README.md)


## Installazione
Per impostare questo progetto localmente, clona il repository -> `git clone ...`


## Utilizzo
Per utilizzare questo progetto, assicurati di avere installato:
- Un editor di codice (ad es., VS Code)
- PostgreSQL
- IPFS Desktop

Segui poi questi passaggi:

1. Apri la cartella del progetto nell'editor di codice
2. Spostati all'interno della cartella server e installa le dipendenze con `npm install` o `npm i`
3. Apri Postgres (pgAdmin4) e crea il tuo database locale (esempio: `product_manager`)
4. Apri IPFS Desktop
5. Torna all'editor di codice e avvia il server di sviluppo con `npm run start`. Se preferisci usare `NODEMON` per i riavvii automatici in modalità di sviluppo, usa `npm run start:dev`
6. Rinomina `.env.example` in `.env` e aggiorna USERNAME, PASSWORD e DATABASE_NAME come necessario
7. Assicurati che il server rimanga in esecuzione mentre usi l'app
8. Vai alla cartella smartContract per trovare il file ProductManager.sol, che contiene il codice dello smart contract.


## Struttura del Progetto

## Autore
Vincenzo Saccone
