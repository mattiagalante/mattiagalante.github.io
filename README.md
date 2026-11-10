# Sito personale — bozza

Sito statico in HTML e CSS puro, pensato per GitHub Pages. Non serve installare nulla: per vederlo basta aprire `index.html` nel browser.

## Struttura

```
index.html            home: about me + latest news
cv.html               CV testuale + pulsante per scaricare il PDF
research.html         publications (published, under review, working papers, work in progress), conferences, projects
teaching.html         insegnamento
materials.html        manuali e codici da scaricare
comments.html         elenco delle riflessioni/articoli
comments/             un file HTML per ogni post
affiliations.html     affiliazioni
404.html              pagina "non trovata" (GitHub Pages la usa da sola)
.nojekyll             file vuoto: dice a GitHub di pubblicare i file così come sono
papers/               qui vanno i PDF dei paper
materials/            qui vanno manuali (PDF) e codici (script, zip) della pagina Materials
assets/
  css/style.css       tutto lo stile (colori in cima, sezione 2)
  js/main.js          piccoli effetti (anno nel footer)
  img/                photo.jpg (per cambiarla sostituisci il file, stesso nome), favicon, onde (SVG)
  fonts/              JetBrains Mono, incluso nel sito (licenza OFL): nessuna chiamata a Google Fonts
  cv.pdf              segnaposto: sostituiscilo con il tuo CV mantenendo lo stesso nome
```

## Cose da completare

Tutto ciò che è ancora da riempire è evidenziato in giallo e nel codice è racchiuso in `<span class="todo">...</span>`. Cerca `todo` in tutti i file: quando sistemi un testo, togli lo `<span class="todo">` che lo circonda. I riquadri gialli "Example entry" (`class="todo-note"`) vanno cancellati del tutto.

Da controllare in particolare:

- nome e cognome (in ogni pagina: header, `<title>`, footer)
- email, link alla pagina UniTN, ORCID (home, teaching, footer di ogni pagina)
- titoli e abstract dei paper, nome del dottorato, supervisor, date

## Come aggiungere contenuti

- **News**: in `index.html` copia una riga `<li>...</li>` dentro `<ul class="log">`, in cima (le più recenti prima).
- **Paper**: in `research.html` copia un intero blocco `<article class="pub"> ... </article>` nella sezione giusta (titolo, autori, stato). Per i paper **published** c'è un modello già pronto, nascosto in un commento sotto il titolo "published", con i pulsanti `abstract` e `doi`: copialo fuori dal commento e compilalo.
- **Work in progress**: una riga `<li>` con il solo titolo.
- **Conferenza**: una riga `<li>` nella lista `conferences`.
- **Manuale o codice**: metti il file in `materials/`, poi in `materials.html` copia un blocco `<article class="pub"> ... </article>` nella sezione `manuals` o `code` e fai puntare il pulsante al file (es. `href="materials/guida-apollo.pdf"`). Per un repository GitHub usa direttamente il suo link.
- **Sezione code di Materials**: è nascosta ma resta nel codice. Per mostrarla, in `materials.html` cancella la parola `hidden` nel tag `<section aria-labelledby="code" hidden>` e in `<ul class="toc" hidden>`.
- **Post nei comments**: copia un post esistente in `comments/` (es. `what-counts-as-a-comment.html`), rinominalo (es. `2026-12-cost-vectors.html`), cambia testo e titolo, poi in `comments.html` copia un blocco `<article class="post-item">` che punti al nuovo file.

## Header e footer

Header (menu) e footer sono ripetuti identici in ogni pagina. Se aggiungi o rinomini una voce del menu, cambiala in tutti i file `.html` (anche `comments/*.html` e `404.html`).

## Colori

In `assets/css/style.css`, sezione 2 (`:root`): `--azure` per gli accenti, `--link` per i link, `--ink` per il testo. Se cambi `--footer-top`, cambia anche il colore in `assets/img/wave-footer-front.svg`, altrimenti l'onda sopra il footer non combacia.
