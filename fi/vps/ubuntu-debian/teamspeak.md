# TeamSpeak 3
Tässä artikkelissa ohjeistetaan Teamspeak -palvelimen asentamisen eri vaiheissa omalle Ubuntu-/Debian -pohjaiselle virtuaalipalvelimelle.

Kirjaudu omalle virtuaalipalvelimellesi käyttämällä SSH yhteyttä. Ohjeet SSH-yhteyden luontiin löydät [täältä]([tulossa]).

Siirry TeamSpeakin sivustolle (https://teamspeak.com/en/downloads/#server) ja kopioi sieltä latauslinkki haluamallesi käyttöjärjestelmälle (linux 64-bit).

![](https://cdn.bittivirta.fi/docimg/crisp/image_1bgdoo7.png)

Aja komennot (korvaa `$LINKKI` kopioimallasi linkillä, usein miten hiiren oikea klikkaus) yksi kerrallaan:
```
sudo mkdir /home/ts3
cd /home/ts3
sudo wget -o ts3.tar.bz2 $LINKKI
sudo tar xvf ts3.tar.bz2 && sudo rm ts3.tar.bz2
cd /home/ts3/teamspeak3-server_linux_amd64
```

Hyväksy TeamSpeak 3 -palvelimen säännöt komennolla:
`sudo touch .ts3server_license_accepted`

Ja käynnistä palvelin:
`./ts3server_startscript.sh start`

Ensimmäisellä kerralla palvelimellesi tulee näkyviin erilaisia tunnuksia, ota käyttöösi tarpeelliset. Tarvitset palvelimen hallinnointia varten ainakin "Privilege key" avaimen, jonka voit syöttää palvelimelle yhdistettyäsi saadaksesi palvelimen hallintaoikeudet.

![](https://cdn.bittivirta.fi/docimg/crisp/image_trwkkl.png)

Kun olet liittynyt palvelimelle TeamSpeak 3 Clientillä tietokoneellasi (käytä virtuaalipalvelimesi IP-osoitetta), voit ottaa hallintaroolisi itsekkesi siirtymällä "Permissions" » "Use Privilege Key" ja liittämällä saamasi tokenin (kuten ylemmässä kuvassa näkyy esimerkki).

![](https://cdn.bittivirta.fi/docimg/crisp/image_axffht.png)