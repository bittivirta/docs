---
    title: Haarauttaminen
    icon: code-fork
---

# Haarauttaminen

Jos käsilläsi sattuu olemaan enemmän aikaa, ja haluat osallistua dokumentaation kehittämiseen, voit haarauttaa dokumentaation itsellesi ja tehdä muutoksia siihen. Haarauttaminen onnistuu GitHubin kautta, jossa voit haarauttaa dokumentaation, muokata sitä ja lähettää muutokset tarkastettavaksi.

Kannattaa kuitenkin muistaa, että kyseessä on Bittivirran dokumentaatio, joten muutokset julkaistaan vasta, kun ne on hyväksytty Bittivirran henkilökunnan toimesta. Suuremmissa muutoksissa kannattaa siis kysyä ensin Bittivirran henkilökunnalta, onko muutoksille tarvetta.

Lisäksi, dokumentaatio on Bittivirran immateriaalioikeuksien alaista ja repositorion lisenssinä on omistusoikeuslisenssi (proprietary), joten muutokset siirtyvät Bittivirran omistukseen, kun ne on hyväksytty.

## Haarauttaminen GitHubin kautta

Tee haarautus käyttämällä GitHubin Fork-painiketta. Kun luot uuden haaran, käytä nimessä joko `feature/ominaisuus` tai `fix/korjaus` -muotoa. Kun olet tehnyt muutoksia, luo uusi pull request, jossa muutokset tarkastetaan ja hyväksytään.

Nimeä uusi haara seuraavasti:

- `feature/ominaisuus` Uusi ominaisuus
- `fix/korjaus` Korjaa virhe

Esimerkiksi:

- `feature/new-minecraft-guide` Lisää ohjeet Minecraft-palvelimen käyttöönottoon
- `fix/typos` Korjaa kirjoitusvirheitä

> ⚠️ **Älä tee muutoksia suoraan `main`-haaraan!**

## Muutoksien tekeminen

Muutoksissa (commiteissa) käytetään [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) -menettelyä sekä [Gitmojia](https://gitmoji.dev/) ilmaisemaan tehtyä muutosta. Muutoksissa tulee olla otsikko, emoji ja kuvaus. Otsikko tulee aloittaa jollain seuraavista sanoista:

- `fix`: Korjaa virhe
- `feat`: Uusi ominaisuus

Emoji ilmaisee muutoksen tyyppiä. Emoji tulee lisätä otsikon eteen. Emoji voi olla esimerkiksi seuraavista:

- `:bug:` Korjaa virhe
- `:sparkles:` Uusi ominaisuus
- `:pencil2:` Korjaa kirjoitusvirhe
- `:recycle:` Uudelleenjärjestele ohjeita

Kuvaus voi sisältää esimerkiksi seuraavia asioita:

- Kirjoitusvirheen korjaus
- Virheellisen tiedon korjaus
- Linkin korjaus
- Uuden sisällön lisääminen

## Muutosten lähettäminen

Kun olet tehnyt muutoksia, voit lähettää muutokset tarkastettavaksi. Ennen muutosten lähettämistä päivitä oma haarasi uusimpaan versioon päähaarasta (main). Tämän jälkeen voit lähettää muutokset GitHubiin ja luoda uuden pull requestin. Pull requestin otsikon tulee noudattaa muutosten tekemisessä käytettyä otsikointia. Pull requestin kuvaus tulee sisältää tietoa tehdyistä muutoksista.
