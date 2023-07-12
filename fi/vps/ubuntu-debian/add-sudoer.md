# Sudokäyttäjän lisääminen

Sudo-käyttäjällä on oikeudet käyttää `sudo`-komentoa, eli ajaa komentoja `root`-käyttäjän oikeuksilla ja kirjautua tuolle tilille.

:::danger Älä jaa sudo-oikeuksia kenellekkään, johon et luota. Sudo-käyttäjillä on oikeus tehdä palvelimella **mitä vaan**.
:::

## Voit lisätä uuden sudo-käyttäjän seuraavasti:

1. Lisää käyttäjä:
(korvaa ${color}[#a00a0a]($NEWUSER) käyttäjänimellä, jonka haluat lisätä
```sudo adduser $NEWUSER```
Järjestelmä kysyy sinulta vielä käyttäjän tiedot ja salasanan käyttäjälle.

⚠️ ${color}[#c57020](Käytä vahvaa salasanaa.)

2. Lisää käyttäjä sudo-ryhmään
```sudo usermod -aG sudo $NEWUSER```

## Tämän jälkeen voit kokeilla, toimiko käyttäjän lisääminen:

1. Vaihda kirjautuminen uudelle käyttäjälle:
```sudo su $NEWUSER```

2. Kokeile komentoa, joka vaatii root-oikeudet
```sudo ls /root```

Jos saat virheen, käyttäjän lisääminen sudo-ryhmään epäonnistui.