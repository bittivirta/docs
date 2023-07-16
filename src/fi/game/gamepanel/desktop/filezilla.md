# FileZilla

FileZilla on yksi suosituimmista SFTP-ohjelmistoista. Se on avoimen lähdekoodin ohjelmisto ja sitä on saatavilla Windowsille, Macille ja Linuxille.

## Asennus

FileZilla on ladattavissa tietokoneelle [täältä](https://filezilla-project.org/download.php?type=client).

## SFTP-yhteyden luominen

Avaa FileZilla ja täytä tiedot seuraavasti

1. Palvelimen protokolla ja osoite. Osoitteen alkuun liitetään protokolla, joka on `sftp://`.
2. Pelipalvelimen käyttäjänimi, joka on gamepanel-käyttäjänimesi ja palvelimen tunniste, pisteellä erotettuna.
3. Salasana, joka on Gamepanel-käyttäjän salasana. Asiakasalueeen salasana ei ole sama.
4. Palvelimen portti, joka on 2022.
5. Valitse "Pikayhdistä"

![FileZilla, pikayhdistäminen](https://cdn.bittivirta.fi/docimg/fi/pelipalvelimet/windows/sftp/filezilla/pikayhdista.png =600x)

Ensimmäisellä kerralla kun yhdistät FileZillalla palvelimelle, se kysyy haluatko tallentaa palvelimen salasanan. Mikäli vain sinä käytät tietokonettasi, eikä esimerkiksi muilla perheenjäsenilläsi tai työntekijöillä ole pääsyä tietokoneellesi - voit tallentaa salasanan huoletta.

Aina, kun yhdistät palvelimelle – jolle et ole ennen yhdistänyt, pyytää FileZilla varmistamaan palvelimen tunnisteen. Voit vahvistaa, että luotat aina tähän isäntään ja tämän jälkeen OK. Näin ollen FileZilla ei kysy tunnisteen tarkistamista uudelleen ennen tunnisteiden poistamista.

![FileZilla](https://cdn.bittivirta.fi/docimg/fi/pelipalvelimet/windows/sftp/filezilla/fingerprint.png =400x)

:::tip Vinkki!
Ensimmäisen yhdistämisen jälkeen voit käyttää pikayhdistysvalikkoa:

![FileZilla, pikayhdistäminen](https://cdn.bittivirta.fi/docimg/fi/pelipalvelimet/windows/sftp/filezilla/pikayhdistysvalikko.png =400x)
:::

## Tiedostojen siirto ja hallinta

FileZilla on hyvin käytännöllinen ohjelmisto tiedostojen siirtoon ja hallintaan. Voit siirtää tiedostoja kätevästi "vedä & pudota"-toiminnolla.

<VideoPlayer
    src="https://cdn.bittivirta.fi/docimg/fi/pelipalvelimet/windows/sftp/filezilla/tiedostojen-hallinta.webm"
    type="video/webm"
    autoplay
    loop
    muted
/>

## Tiedostojen muokkaaminen

Voit muokata tiedostoja joko klikkaamalla tiedostoa oikealla hiiren napilla ja valita näytä/muokkaa tai voit käydä asettamassa FileZillan asetuksista tiedoston tuplaklikkauksen toiminnon tiedoston muokkaamiseksi.

Voit tehdä yllä mainitun asetuksen näin:

1. Siirry asetuksiin
    ![FileZilla, Windows - Asetuksiin navigointi](https://cdn.bittivirta.fi/docimg/fi/pelipalvelimet/windows/sftp/filezilla/asetukset.png =300x)
2. Valitse "Käyttöliittymä" » "Tiedostolistausket"
3. Aseta "Tiedostojen tuplaklikkauksen toiminta" toiminnaksi "Näytä/Muokkaa"
    ![FileZilla, Windows - Asetuksiin navigointi](https://cdn.bittivirta.fi/docimg/fi/pelipalvelimet/windows/sftp/filezilla/asetukset-tuplaklikkaus.png =600x)

## Tiedostojen muokkausohjelma

Kun avaat jonkin tiedostotyypin ensimmäistä kertaa, FileZilla kysyy, että millä ohjelmalla haluat muokata sitä. Voit valita joko tietokomneen oletuseditorin, FileZillaan määritetyn oletusmuokkaimen tai avata tiedoston tietyssä ohjelmassa.

Voit myös määrittää oletusmuokkausohjelmat FileZillaan sen asetuksissa kohdassa "Tiedoston muokkaus".