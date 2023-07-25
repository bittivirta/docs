# Oman maailman tuominen​

Voit tuoda oman Valheim-palvelimen maailman helposti omalle palvelimellesi noudattamalla seuraavia ohjeita.  

## Maailman löytäminen omalta tietokoneelta​

Ensin tarvitaan maailma, joka siiretään. Saat maailman tiedostot seuraavasti:  

1.  Paina samaan aikaan näppäimistöltäsi + R
2.  Liitä kenttään teksti `"%userprofile%\AppData\LocalLow\IronGate\Valheim\worlds"`, mukaanlukien "-merkit.
3.  Valitse tiedostot `worldname.db`, `worldname.db.old`, `worldname.fwl` ja `worldname.fwl.old`  
    :::warning Huomaa, että et voi vaihtaa maailman nimeä muuttamalla tiedostojen nimeä. Tiedostonimen muuttaminen estää maailman toiminnan.
4.  Pakkaa valitut tiedostot klikkaamalla niitä oikealla ja valitsemalla Lähetä kohteeseen... ja Pakattu (zip) tiedosto  
    ![](/assets/docs/img/crisp/37zip_1ivavpu.webp)

## Maailman siirtäminen palvelimelle​

1.  Avaa Gamepanel ([https://gamepanel.fi](https://gamepanel.fi/)) ja kirjaudu asiakasalueen tunnuksilla tai Gamepanel-käyttäjällä
2.  Valitse Valheim-palvelimesi
3.  Siirry ylänavigaatiossa Management ja File Management
4.  Siirry kansioon `.config/unity3d/IronGate/Valheim/worlds`
5.  Lataa luomasi zip-tiedosto raahaamalla se selaimeen tiedostojen kohdalle tai klikkaamalla Upload ja valitsemalla zip-tiedostosi
6.  Kun tiedosto on latautunut, klikkaa kolmea pistettä tiedoston perässä ja klikka Decompress  
    ![](/assets/docs/img/crisp/356050c21e29435_wz8q5.webp)
7.  Siirry Gamepanelin ylänavigaatiossa kohtaan Configuration ja Startup Parameters
8.  Kirjoita World Name-kohdan kenttään maailman nimi (sama kuin tiedostonimi, kirjainkoko merkitsee, ei .db tai .fwl-päätettä) ja tallenna parametrit  
    ![](/assets/docs/img/crisp/366050c2f687468_1xwmdap.webp)
9.  Käynnistä palvelimesi uudelleen kohdassa System » Console ja klikkaamalla Restart. Yhdistä palvelimelle ja vanhan kartan tulisi olla näkyvillä!

**Mukavia pelihetkiä!**