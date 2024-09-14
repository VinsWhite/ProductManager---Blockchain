# ProductManager---Blockchain

## Descrizione
Questa applicazione backend consente agli utenti di caricare i dettagli del prodotto su un'istanza locale di IPFS. Memorizza le informazioni sul prodotto e l'hash IPFS del file delle specifiche in uno smart contract sulla blockchain di Polygon. L'applicazione fornisce endpoint API per interagire con lo smart contract.

## Indice
- [Descrizione](#descrizione)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [API Endpoints](#api-endpoints)
- [Variabili d'Ambiente](#variabili-dambiente)
- [Gestione degli errori](#gestione-degli-errori)
- [Struttura del Progetto](#struttura-del-progetto)
- [Autore](#autore)

Vuoi leggere questo in inglese?
- [English](README.md)


## Installazione
Per impostare questo progetto localmente, clona il repository -> `git clone <repository-url>`


## Utilizzo
Per utilizzare questo progetto, assicurati di avere installato:
- Un editor di codice (ad es., VS Code)
- PostgreSQL
- IPFS Desktop

### Segui poi questi passaggi:

1. Apri la cartella del progetto nell'editor di codice
2. Spostati all'interno della cartella server e installa le dipendenze con `npm install` o `npm i`
3. Avvia Postgres (pgAdmin4) e crea il tuo database locale (esempio: `product_manager`)
4. Avvia IPFS Desktop e usa la configurazione di default (gateway: 8080)
5. Torna all'editor di codice e avvia il server di sviluppo con `npm run start`. Se preferisci usare `NODEMON` per i riavvii automatici in modalità di sviluppo, usa `npm run start:dev`
6. Rinomina `.env.example` in `.env` e aggiorna DATABASE_URL con USERNAME, PASSWORD e DATABASE_NAME come necessario
7. Assicurati che il server rimanga in esecuzione mentre usi l'app
8. Vai alla cartella smartContract per trovare il file ProductManager.sol, che contiene il codice dello smart contract.

### Istruzioni per il deploy del contratto con Polygon Amoy, in quanto Polygon Mumbai è deprecato:

9. Installa l'estensione "Metamask" sul tuo browser preferito ed esegui l'accesso o la registrazione
10. Carica lo smart contract su Remix IDE
11. Usa il contratto (scritto in Solidity), quindi compilalo.
12. Configurare Metamask -> aggiungi una nuova rete e inserisci le informazioni richieste per Amoy - visita la documentazione ufficiale per trovare maggiori dettagli
13. Recati su un servizio di faucet per Polygon Amoy come Polygon Faucet; accedi con discord, aggiungi il tuo indirizzo Wallet ed esegui la richiesta per l'aggiunta dei fondi
14. Su Remix, nella sezione Deploy & Run Transaction, seleziona Injected Web3 ed esegui il deploy del contratto
15. Ora potrai estrarre le informazioni del contratto 
16. Aggiorna il file .env con CONTRACT_ADDRESS, CONTRACT_ABI e WEB3_PROVIDER

### Come testare con il Front-end
17. Apri un terminale nella cartella client
18. Naviga nella cartella product
19. Installa le dipendenze con `npm install` o `npm i`
20. Avvia il client con `npm run dev`


## API Endpoints

### Salva Prodotto
- **Endpoint:** `http://localhost:3000/products`
- **Metodo:** POST
- **Descrizione:** Salva i dettagli del prodotto e l'hash IPFS nello smart contract.

### Ottieni tutti i Prodotti
- **Endpoint:** `http://localhost:3000/products`
- **Metodo:** GET
- **Descrizione:** Recupera tutti i prodotti dal database.

### Recupera File da IPFS
- **Endpoint:** `http://127.0.0.1:8080/ipfs/:hash`
- **Metodo:** GET
- **Descrizione:** Recupera il contenuto del file da IPFS utilizzando l'hash del file.


## Variabili d'Ambiente
- `DATABASE_URL`: URL per connettersi al database PostgreSQL.
- `WEB3_PROVIDER`: URL per il provider Web3.
- `CONTRACT_ADDRESS`: Indirizzo dello smart contract distribuito.
- `CONTRACT_ABI`: ABI dello smart contract per interagire con esso.


## Gestione degli Errori
### Errori Comuni

- **500 Internal Server Error**
  - **Causa:** Questo errore di solito si verifica a causa di problemi con il server o con la configurazione.
  - **Soluzione:** Controlla i log del server per messaggi di errore dettagliati e assicurati che tutti i servizi siano in esecuzione correttamente.

- **400 Bad Request**
  - **Causa:** Questo errore si verifica quando i dati della richiesta sono invalidi o mancano dei campi richiesti.
  - **Soluzione:** Assicurati che tutti i campi richiesti siano forniti nel corpo della richiesta e che i dati siano formattati correttamente.



## Struttura del Progetto
- Client
    - client > product (app client principale)
        - ... > src (cartella principale dell'app client)
            - ... > components (tutti i componenti dell'app)
                - ... > other (componenti minori come ErrorDialog)
            - ... > interface (interfacce TypeScript)
            - ... > api (chiamate API)
            - ... > functions (funzioni separate)
            - ... > App.tsx (file principale dell'app)

- Server 
    - server
        - ... > prisma (configurazione di Prisma ORM)
        - ... > test (cartella per il test del contratto)
        - ... > uploads (tutti i file caricati)
        - ... > src (cartella principale dell'app server)
            - ... > config (tutte le configurazioni, come quella di web3)
            - ... > controllers (tutte le operazioni, come la creazione del prodotto)
            - ... > middlewares
            - ... > routes (tutte le rotte dei prodotti)
            - ... > services (tutti i servizi, come IPFS)
            - ... > app.js (file principale dell'app)
            - ... > prismaClient.js (client locale per Prisma ORM)


## Autore
Vincenzo Saccone
