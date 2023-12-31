# Verkkotunnuksen lisääminen (Plesk/Bittivirta)
## 1. Haetaan IP-osoite ja portti​
Kirjaudu Gamepaneliin osoitteessa https://gamepanel.fi/, valitse palvelin jolle teemme osoitteen. Kopioi IP-osoite sekä portti.

![](https://docs.bittivirta.fi/assets/docs/img/crisp/image_1pifx1h.webp)

## 2. Luodaan tietue Pleskissä
Kirjaudu asiakasalueelle ja siirry "Minun..." » "Palveluni" » (Valitse webhotellisi, jossa haluamasi verkkotunnuksen hallinta sijaitsee):
![](https://docs.bittivirta.fi/assets/docs/img/crisp/screenshot-2022-08-18-at-15472_1i5d2ku.webp)

​Valitse "Kirjaudu Pleskiin":
![](https://docs.bittivirta.fi/assets/docs/img/crisp/screenshot-2022-08-18-at-17083_1cvd1xr.webp)

Valitse verkkotunnuksesi ja valitse "DNS-asetukset":
![](https://docs.bittivirta.fi/assets/docs/img/crisp/screenshot-2022-08-18-at-17111_142xl9q.webp)

Valitse "Lisää tietue"-painike:
![](https://docs.bittivirta.fi/assets/docs/img/crisp/screenshot-2022-08-18-at-17135_1l3n2hh.webp)

Täytä tiedot seuraavasti (selitykset alempana):
![](https://docs.bittivirta.fi/assets/docs/img/crisp/screenshot-2022-08-18-at-17182_d971ko.webp)

* **Tietuetyyppi** on `SRV`.
* **Palvelun nimi** on `minecraft`,
* **Protokolla** on `TCP`.
* **Toimialueen nimi**-kenttään voit asettaa minkä tahansa tekstin, jonka haluat - jolla palvelimelle liitytään (jos haluat, että etuliitettä ei ole, jätä kenttä tyhjäksi). Kuvan esimerkin mukaan osoitteeksi tulee mc.sirkulaattori.fi.
* **Port** on palvelimesi portti, niin kuin tässä tapauksessa _25574_.
* **Kohdeisäntä** on pelipalvelimesi osoite ilman porttia, joka tässä tapauksessa on _g5.bitti.gg_.
* **TTL**, **priority** ja **weight** ovat vapaasti valittavissa olevia kenttiä. Pleskin tarjoamat oletukset ovat hyvät arvot.

Halutessasi voit lisätä `SRV` -tietueita lisää niin monta, kuin tarvitset.

**Onnea pelipalvelimen kehitykseen!**
