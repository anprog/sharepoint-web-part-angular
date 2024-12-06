![img_2.png](img_2.png)

Nota: sto utilizzando angular 16 (configurazione 2 della tabella di cui sopra)

Prerequisiti

Verifica la versione di SPFx installata:
npm ls @microsoft/sp-core-library

Configura Node.js con NVM:
nvm use 16

Installa Yeoman e il generatore SPFx:
npm install -g yo @microsoft/generator-sharepoint

Installa Angular CLI (versione 16):
npm install -g @angular/cli@16


Passaggi per creare il progetto

Genera la soluzione SPFx:
yo @microsoft/sharepoint

Durante il setup:
•	Nome della soluzione: angular-spfx-webpart
•	Base della soluzione: ./angular-spfx-webpart
•	Seleziona “No JavaScript framework” (perché Angular non è nativo in SPFx).
•	Fornisci i dettagli della web part (es. nome e descrizione).
•	Scegli SharePoint Online only o un'opzione adatta al tuo scenario.

posizionarsi nel progetto angular ed eseguire il comando di compilazione :

ng build --configuration production




Far partire il server locale :

nel mio caso sto utilizzando quello di python :

python -m http.server 8000

File progetto serve.json:

Nel file serve.json viene impostato il percorso per caricare il file html di esempio : test.html


