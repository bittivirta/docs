# Whitelist
Whitelist (pääsylista) on työkalu, jolla voidaan rajoittaa pelaajien liittymistä palvelimelle. Kun whitelist on käytössä, vain erikseen "whitelistatut" pelaajat pääsevät palvelimelle.

Vain OP:t voivat käyttää alla mainittuja komentoja. Voit antaa OP-oikeudet konsolissa pelaajalle komennolla `op [pelaaja]`.

:::danger Huomaatan, että pelaajat, joilla on OP voivat antaa OP:n muille pelaajille, vaihtaa pelitilaa ja muuttaa pelin sääntöjä. Anna OP vain pelaajille, joihin todella luotat.

Whitelist-komentoja voi käyttää myös palvelimen konsolissa (ilman /-viivaa).

**Näin varmistat, että whitelist on päällä:**
`/whitelist on`

**Whitelistin voit poistaa käytöstä komennolla:**
`/whitelist off`

**Lisää pelaaja whitelistalle:**
`/whitelist add PELAAJA`

**Poista pelaaja whitelistalta:**
`/whitelist remove PELAAJA`

**Näytä whitelistalla olevat pelaajat:**
`/whitelist list`



Jos haluat, että pelaajat - jotka eivät ole whitelistalla potkitaan palvelimelta, kun whitelist otetaan käyttöön, sinun tulee ottaa palvelinasetus `enforce-whitelist` käyttöön palvelimen asetuksissa.