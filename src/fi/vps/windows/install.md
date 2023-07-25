# Windowsin asennus

Windows-käyttöjärjestelmän asentaminen virtuaalipalvelimelle ei ole niin suoraviivaista, kuin tavalliselle tietokoneelle. Sinun tarvitsee asennuksen yhteydessä muistaa ensin ottaa windows-levykuva käyttöön, jonka jälkeen poistat sen, otat käyttöön ajurilevykuvan, jonka jälkeen otat taas Windows-levykuvan käyttöön. Käymme kuitenkin tässä ohjeessa selkeästi vaihe vaiheelta, mitä sinun tarvitsee tehdä asentaaksesi Windowsin onnistuneesti.

Huomaathan myös, että Bittivirta ei tarjoa Windows-lisenssejä maksutta. Palvelimelle saa Microsoftin käyttöehtojen mukaan asentaa vain Windows Server-käyttöjärjestelmiä ja niiden lisenssejä, joten käymme tässä ohjeessa vain Windows Server-käyttöjärjestelmän asennuksen. Palvelimelle voi asentaa myös muita levykuvia, mutta tällöin sinun tarvitsee olla yhteydessä asiakaspalveluun ja pyytää meitä lataamaan levykuva palvelimelle.

## Palvelun tilaaminen​

Huomaathan, että palvelua tilatessasi tarvitset vähintään 2 prosessoriydintä, 2GB RAM-muistia ja 32GB levytilaa. Ilman näiden rajoitusten täyttymistä Windows ei välttämättä edes käynnisty. Suosittelemme valitsemaan vähintään BVPS3-paketin Budjettisarjasta tai VPS2-paketin Premium-sarjastamme. Suosittelemme ehdottomasti ennemmin Premium-sarjan paketteja näiden paremmista prosessoreiden kellotaajuuksista johtuen, josta Windows hyötyy huomattavasti.

Tehdessäsi tilausta aseta palvelimen käyttöjärjestelmäksi mikä tahansa, voit myös jättää oletuksen. Vaihdamme tämän myöhemmin.

Voit tilata VPS-palvelimen täältä: https://bittivirta.cloud/virtuaalipalvelimet.php

## 1. Valitse palvelu​

![](/assets/docs/img/crisp/image_1dhfomj.webp)

:::tip Vinkki: voit antaa palvelulle nimen tunnistaaksesi sen laskuissa ja asiakasalueelle klikkaamalla punaista tekstiä tai myöhemmin palvelun nimeä, joka kuvassa näkyy "Windows Test"-nimenä.
:::

## 2. Valitse ISO-tiedosto​

Siirry kohtaan ISO-tiedostot palvelun hallinnassa:
![](/assets/docs/img/crisp/image_6fdhb6.webp)

Etsi "Windows" ja klikkaa levykuvan latauspainiketta:

:::warning Muista, minkä ISO-tiedoston valitsit, sillä tarvitset tätä tietoa myöhemmin!
:::
![](/assets/docs/img/crisp/image_1plmzko.webp)

:::tip ISO-tiedostot päivittyvät, kun tukemme eri käyttöjärjestelmille laajenee. Suosittelemme valitsemaan Windowsin uusimman vuosiversion, mikäli palvelusi ei ole riippuvainen vanhemmasta ohjelmistosta.
:::
![](/assets/docs/img/crisp/image_mkq0c6.webp)

## 3. Uudelleenkäynnistä palvelin ja aloita asennus​

Siirry "Tiedot" välilehdelle vasemmasta tuotteen hallinnan valikosta.

Käynnistä palvelin uudelleen ja vahvista vielä uudelleenkäynnistys:

![](/assets/docs/img/crisp/image_149f91x.webp)

Avaa konsoli
![](/assets/docs/img/crisp/image_2j3tq6.webp)

:::tip Jos olet juuri käynnistänyt palvelimen uudelleen, saatat saada virheilmoituken siitä, että palvelimen tulee olla käynnissä jotta voit avata konsoliyhteyden. Odota hetki ja päivitä sivu. Jos palvelin ei tunnu käynnistyvän, voit käynnistää sen käsin "Käynnistä"-nappulaa painamalla.
:::

Valitse asennukseen kellonaika- ja valuuttaformaatti sekä näppäimistöasettelu:
![](/assets/docs/img/crisp/image_6c1ick.webp)

![](/assets/docs/img/crisp/image_fax0mh.webp)

Valitse haluamasi lisenssi ja ympäristö:

:::danger Huomaathan, että jos haluat käyttää työpöytäympäristöä: valitse ympäristöksi lisenssi, joka sisältää tekstin (Desktop Experience)
:::

![](/assets/docs/img/crisp/image_1fu80kf.webp)

Hyväksy Windowsin käyttöehdot luettuasi ne:
![](/assets/docs/img/crisp/image_lwebkp.webp)

Valitse asennustyypiksi "**Custom: Install Windows only (advanced)**":
![](/assets/docs/img/crisp/image_jjy9rr.webp)

## 4. Levyajureiden asennus (vaikein osuus)​

Seuraavaksi asennamme levyajurit, jotta Windows tunnistaa palvelimen levyt. Jos levyajureita ei ole asennettu, asennin ei näytä mitään levyjä:

![](/assets/docs/img/crisp/image_59q7yo.webp)

Palaamme seuraavaksi ISO-tiedostojen valintaan. Etsi ISO-tiedostoista teksti "virtio" ja ota käyttöön kuvaa vastaava virtio-ISO-tiedosto ja vahvista ISO-tiedoston kytkentä:
![](/assets/docs/img/crisp/image_3fk9sl.webp)

Palaa konsoliin ja avaa "Load driver"-ikkuna:
![](/assets/docs/img/crisp/image_1lywljc.webp)

Valitse "Browse":
![](/assets/docs/img/crisp/image_scp049.webp)

Seuraavaksi asennamme kolme eri ajuria:

1. Asennamme ensimmäisen, "balloon":
    ![](/assets/docs/img/crisp/image_106398p.webp)
    ![](/assets/docs/img/crisp/image_1f5poob.webp)
2. Asennamme toisen, "NetKVM":
    ![](/assets/docs/img/crisp/image_zximxh.webp)
    ![](/assets/docs/img/crisp/image_19cxa9j.webp)
3. Ja asennamme kolmannen, "vioscsi":
    ![](/assets/docs/img/crisp/image_4mc8ed.webp)
    ![](/assets/docs/img/crisp/image_16eyuq7.webp)

Kun ajurit on asennettu, levyjen pitäisi tulla näkyviin seuraavasti:
![](/assets/docs/img/crisp/image_s83lib.webp)

Seuraavaksi käydään liittämässä Windowsin ISO-tiedosto takaisin. Sinun tulee siis laittaa takaisin täysin sama tiedosto, muuten asennus ei onnistu:
![](/assets/docs/img/crisp/image_1n9bhyr.webp)

## 5. Levytilan osiointi​

Seuraavaksi, suosittelemme poistamaan kaikki levyt, jotka Windows on automaattisesti luotu. Valitse levyt yksi kerrallaan ja klikkaa "Delete".

Jäljelle jäi "Drive 0 Unallocated Space". Käytämme tätä asennuksessa klikkaamalla "Next":

![](/assets/docs/img/crisp/image_854zyf.webp)

Halutessasi voit jättää levytilasta pienen osan, jota voit käyttää muissa tarkoituksissa palvelimella. Emme kuitenkaan suosittele tätä, vaan suosittelemme tilaamaan palvelimelle lisälevytilaa, sillä sitä pystyy suurentamaan helposti päivittämättä koko palvelimen resurssipakettia. Näinollen sinulla voi olla lisälevytilana vaikka 1TB lisälevytilaa.

## 6. Windowsin asennus​

Odottelemme Windowsin asennusta. Asennus vie keskimäärin 5-30 minuuttia riippuen valitsemasi palvelimesi tehosta. VPS3-palvelimella asennus kesti 3 minuuttia.
![](/assets/docs/img/crisp/image_uqj9oa.webp)

## 7. ISO-tiedoston poisto​

Tämä ei ole kriittinen vaihe, mutta voit poistaa ISO-tiedoston turvallisesti palvelimelta heti, kun pääset seuraavaan ruutuun:
![](/assets/docs/img/crisp/image_1ugzkau.webp)

ISO-tiedoston poisto toimii ISO-tiedostot-välilehden "Unmount"-painiketta klikkaamalla:
![](/assets/docs/img/crisp/image_p0ek43.webp)

Vahvista ISO-tiedoston poisto vielä klikkaamalla vahvistuspainiketta, joka aukeaa ponnahdusikkunassa.

## 8. Palvelimen perustietojen täyttö​

Anna palvelimelle turvallinen salasana. Turvallinen salasana on satunnaisesti generoitu, joka sisältää vähintään 10 merkkiä, jotka ovat pieniä ja suuria kirjaimia, numeroita ja erikoismerkkejä. Suosittelemme vähintään 30 merkin salasanoja palvelimille. Susittelemme luomaan salasanan täällä: https://bitwarden.com/password-generator/

Koska asiakasalueen etäyhteys ei tue tekstin liittämistä, voit asettaa palvelimelle väliaikaisesti helpomman salasanan, jonka voit päivittää myöhemmin tavallisella Windowsin etätyöpöytäyhteydellä.

![](/assets/docs/img/crisp/image_117o7cz.webp)

Kun salasana on asetettu, voit kirjautua palvelimelle vielä etäyhteydellä asiakasalueella klikkaamalla seuraavassa ruudussa "Send Ctrl+Alt+Del" -painiketta käyttäen. Tavallien Windowsin "leporuudun" klikkaaminen tai ylös raahaaminen ei toimi oletuksena palvelimilla:
![](/assets/docs/img/crisp/image_ddif5w.webp)

Ensimmäisellä kerralla palvelin pyytää muutaman vahvistuksen. Servermanagerin ohjeen voit ohittaa, mutta Networks-ikkunalle valitse "Yes" tai "No" riippuen, haluatko palvelimesi löytyvän lähiverkossa. Yleensä tähän voi vastata "No", sillä palvelin ei ole lähiverkossa eikä ominaisuus näinollen ole tarpeellinen:
![](/assets/docs/img/crisp/image_1hifz3t.webp)

Asetuksen voi vielä myöhemmin muuttaa.

## 9. Palvelimelle yhdistäminen Windowsin etätyöpöytäyhteydellä​

Voit ottaa palvelimelle etätyöpöytäyhteyden helpoiten suoraan omalta Windows-tietokoneeltasi. Paina Windows-painiketta ja ala kirjoittamaan "Etätyöpöytäyhteys" tai englanniksi "Remote Desktop", tai lyhyelti "rdp".

Avaa seuraava ohjelma:
![](/assets/docs/img/crisp/image_1qgmqvm.webp)

Joka näyttää avattuna tältä:
![](/assets/docs/img/crisp/image_1rdnvw8.webp)

"Computer" -tai "Tietokone"-kenttään tulee palvelimen IP-osoite, jonka löydät palvelimen tiedoista:
https://bittivirta.community/attachments/1622671518190-png.45/

## 10. Palvelimesi on käyttövalmis​

Palvelimesi on nyt käyttövalmiina. Voit Server Managerissa lisätä Windows-palvelimelle tuttuja ympäristöjä, kuten DHCP-palvelimen, Active Directory-palvelimen tai vaikka ISS-palvelimen verkkosivujen tarjoamiseen.

Palvelimella verkkosivujen selaaminen on Internet Exploreria käyttäen aika työlästä muuttamatta oletussääntöä, jonka mukaan jokainen verkkotunnus, jolla käyt on erikseen hyväksyttävä sallittujen osotteiden luetteloon. Lisäksi Explorerin käyttö nykypäivänä on hitaahkoa ja osa sivustoista ei sitä enää tue. Suosittelemme asentamaan jonkin seuraavista selaimista. Ninite nopeuttaa tiedoston hakemista, alla linkit suoraan asentimeen:
* Google Chrome: https://ninite.com/chrome/ninite.exe
* Opera: https://ninite.com/opera/ninite.exe
* Firefox: https://ninite.com/firefox/ninite.exe
* Edge: https://ninite.com/edge/ninite.exe

## Huomautuksia:​
* Salasanan resetointi ei asiakasalueen kautta onnistu, sillä asiakasalue ei tue Windowsin salasananresetointia
* Asiakasalueella saattaa näkyä väärä käyttöjärjestelmä, kun palvelimelle on asennettu oma käyttöjärjestelmä ISO-tiedostoja käyttäen)