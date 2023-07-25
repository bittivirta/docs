# Ubuntu-palvelimen pikakäyttöönotto

Olet siis hankkinut uuden ubuntu-palvelimen (dedikoitu tai virtuaalipalvelin)? Mahtavaa! Tässä ohjeessa käymme pikaisesti läpi, mitä palvelimella kannattaa tehdä, kun sen on ottanut käyttöön.  

## Salasanan ja IP-osoitteen noutaminen​

Ihan ensimmäisenä, tarvitset tietoosi palvelimen IP-osoitteesi ja salasanan. Nämä saat sähköpostitse, mutta saat ne selville myös asiakasalueelta palvelimen hallinnasta. Palvelimen hallinnan löydät asiakasalueelta kohdasta "Minun.." » "Palveluni" » (valitse palvelimesi).  
  
Löydät palvelimen salasanan salasanakentän viereistä silmänappulaa painamalla ja IP-osoitteen löydät kohdasta IPv4-osoite.  

![](/assets/docs/img/crisp/ip_1manl24.webp)

## Yhdistäminen palvelimelle​

Voit yhdistää palvelimelle joko työkaluista löytyvällä "Etäkäyttö"-työkalulla, tai SSH-yhteydellä. SSH-yhteys on huomattavasti parempi kun etäkäyttö, sillä etäkäytön kautta et voi käyttää leikepöytää kunnolla.  
  
Palvelimelle kirjaudutaan ensimmäisellä kerralla root-käyttäjänä ja salasanalla, jonka noudit asiakasalueella.  
  
Kun liität salasanaa leikepöydältäsi, klikkaa hiiren oikealla ja paina enter. Ruutuun ei ilmesty tekstiä, sillä sen syöte on piilotettu turvallisuussyistä.  
  
SSH-yhteyden luontiin voi käyttää seuraavia työkaluja:  
  
**Windows:**
* Komentokehote (Command Prompt)
* PuTTY
* Solarwinds PuTTY
* Termius

**Mac & Linux:**
* Terminaali/Terminal/Konsole/Konsoli ym.
* Termius

Komentorivipohjaisilla ohjelmilla voit käyttää komentoa `ssh root@osoitteesi`, eli esimerkiksi `ssh root@172.0.0.1`, jossa osoitteena on palvelimesi IP-osoite.  

Ensimmäisellä yhteyskerralla SSH ilmoittaa, että palvelimelle ei ole yhdistetty ennen. Tallenna palvelimen "sormenjälki" hyväksymällä tallennus (windowsilla kirjoita yes ja paina enter).  

![](/assets/docs/img/crisp/22terminal_xk6lgt.webp)

Palvelin saattaa pyytää sinua myös vaihtamaan root-käyttäjän salasanan ensimmäisellä kerralla. Jos palvelin ei pyydä vaihtamaan salasanaa, voit vaihtaa sen komennolla passwd.  

Huomaathan, että vaihtamasi salasana ei tallennu Bittivirran asiakasalueelle, eikä Bittivirran henkilökunnalla ole pääsyä palvelimellesi - joten vaihda salasanasi sellaiseen jonka muistat ja kirjoita se ylös vaikka paperilapulle. **Unohtuneen salasanan voi palauttaa vain alustamalla koko palvelimen, joka pyyhkii myös palvelimesi tiedostot.** Vaihdat siis salasanasi omalla vastuulla.  
  

## Mitä seuraavaksi?​

Seuraavaksi suosittelemme ajamaan seuraavat komennot **(kuitenkin vain aina ensimmäisellä kerralla)**:  
  
```sh
sudo apt update #päivitä repositoriot, joista asennettavat paketit haetaan  
sudo apt upgrade -y #päivitetään paketit  
sudo apt dist-upgrade -y #päivitetään palvelimen ohjelmistot ja niiden riippuvuudet  
sudo reboot #käynnistetään palvelin uudelleen
```

![](/assets/docs/img/crisp/update_4lswp.gif)

Tämän jälkeen olet vapaa tekemään palvelimella mitä haluat (Bittivirran käyttöehtoja noudattaen)! Onnea matkaan!