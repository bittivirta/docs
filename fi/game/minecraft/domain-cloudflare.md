# Verkkotunnuksen lisääminen palvelimelle (CloudFlare)
## 1. Haetaan IP-osoite ja portti​
Kirjaudu Gamepaneliin osoitteessa [https://gamepanel.fi/](https://gamepanel.fi/), valitse palvelin jolle teemme osoitteen. Kopioi IP-osoite sekä portti.

![](https://cdn.bittivirta.fi/docimg/crisp/image_1pifx1h.png)

## 2. Luodaan tietue CloudFlareen​
Siirry CloudFlaressa DNS-hallintaan (valitse verkkotunnuksesi ja klikkaa DNS-painiketta ylhäällä sivuston hallinnassa)  ja lisää seuraava tietue:

![](https://cdn.bittivirta.fi/docimg/crisp/image_15633yb.png)

Tyyppi on `SRV`. Name-kohtaan voit laittaa minkä tahansa tekstin, jonka haluat jolla palvelimelle liitytään (jos haluat, että etuliitettä ei ole, laita name-kentään `@`). Kuvan esimerkin mukaan osoitteeksi tulee sirkulaattori.fi.

**Service**, eli palvelu on `_minecraft` ja protokolla `TCP`.

**TTL**, **priority** ja **weight** ovat vapaasti valittavissa olevia kenttiä. Niihin kuitenkin on pakko laittaa jotakin. Kuvan mukaiset arvot ovat hyvät.

**Port** on palvelimesi portti, niin kuin tässä tapauksessa _25574_.

**Target** on pelipalvelimesi osoite ilman porttia, joka tässä tapauksessa on _g4.bitti.gg_. Halutessasi voit lisätä `SRV` -tietueita lisää niin monta, kuin tarvitset. Aseta nimeksi `mc`, jos haluat, että palvelimelle voi liittyä mc-etuliitteellä, esim. `mc.sirkulaattori.fi`.

**Onnea pelipalvelimen kehitykseen!**
