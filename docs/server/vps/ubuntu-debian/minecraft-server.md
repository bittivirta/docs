# Minecraft-palvelin

Jos etsit helppoa tapaa perustaa Minecraft-palvelimen, tämä ei ole oikea ratkaisu. Jos tavoitteenasi on saada palvelin päälle muutamalla klikkauksella - suosittelemme Bittivirran tarjoamia pelipalvelimia. Bittivirran pelipalvelin lähtee toimintaan parilla klikkauksella, etkä tarvitse tätä monivaiheista ohjetta lainkaan. Kaikki tämä tapahtuu siis Bittivirran pelipalvelimissa automaattisesti. Lue lisää täällä: https://bittivirta.cloud/pelipalvelimet.php

Valmiit pelipalvelimet alk. 5€/kk
https://bittivirta.cloud/pelipalvelimet.php

Virtuaalipalvelimet alk. 3.19€/kk
https://bittivirta.cloud/virtuaalipalvelimet.php

Dedikoidut palvelimet alk. 50€/kk _(+asennuskulut)_
https://bittivirta.cloud/store/dedikoidut-palvelimet

Jos kuitenkin haluat säätää palvelimen kanssa enemmän, esim. muokata JVM-argumentteja tai perustaa suuremman palvelinryppään (BungeeCord), tässä on sinulle oikea ohje. Olemme pyrkineet yksinkertaistamaan palvelimen asennusvaiheet mahdollisimman helpoiksi, jotta uusimmatkin Linux-pohjaisten käyttöjärjestelmien käyttäjät pysyvät perässä.

Jos olet juuri hankkinut virtuaalipalvelimen, suosittelemme lukemaan tämän ohjeen: [Pikaohjeet virtuaalipalvelimen käyttöön]([tulossa])

## 1. Asennetaan Java​

Tarvitsemme Javan Minecraft-palvelimen luomiseen, sillä Minecraft on sillä ohjelmoitu ja vaatii sen toimiakseen.

Jos asennat vanhemman Minecraft-version, tarvitset myös vanhemman Java-version. Tässä suuntaa antava ohjeistus javan versioille:
Java 16 - Minecraft 1.17+
Java 11 - Minecraft 1.12-1.16.5
Java 8 - Java 1.11.2 ja sitä vanhemmat versiot

Java 16:
`sudo apt install openjdk-16-jre`
Java 11:
`sudo apt install openjdk-11-jre`
Java 8:
`sudo apt install openjdk-8-jre`

Javan version voit tarkistaa aina komennolla `java -version`.

Halutessasi voit asentaa vaikka kaikki kolme javan versiota, mutta oletuksena kuitenkin käytetään aina uusinta versiota. Jos asennat uudemman Java-version, mutta sinun tarvitseekin käyttää vanhempaa versiota, sinun tulee muuttaa palvelimen käynnistyskomennon `java`-komennon tilalle javan absoluuttinen polku, eli esim. /usr/lib/jvm/java-1.8.0-openjdk-amd64.

Listan absoluuttisista poluista saat komennolla `update-java-alternatives --list`:
```sh
root@bittivirta: update-java-alternatives --list
java-1.11.0-openjdk-amd64 1111 /usr/lib/jvm/java-1.11.0-openjdk-amd64
java-1.16.0-openjdk-amd64 1611 /usr/lib/jvm/java-1.16.0-openjdk-amd64
java-1.8.0-openjdk-amd64 1081 /usr/lib/jvm/java-1.8.0-openjdk-amd64
```

## 2. Luodaan kansio ja ladataan palvelin​
Tarvitsemme paikan, jossa palvelimen tiedostot ovat. Lisäksi meidän pitää ladata palvelimen .jar-tiedosto, joka luo meille tiedostot ja käynnistää palvelimen.

Luomme kansion ja siirrymme siihen:
`mkdir /home/minecraft/ && cd /home/minecraft/`

Hyväksymme Minecraftin EULA:n luomalla tiedoston eula.txt:
```sh
echo "eula=true" >> eula.txt
```
Huomaathan, että luomalla edellisen tiedoston hyväksyt seuraavat ehdot:
https://account.mojang.com/terms & https://account.mojang.com/documents/minecraft_eula

Seuraavaksi lataamme __server.jar__-tiedoston. Siirry osoitteeseen https://papermc.io/downloads ja valitse haluamasi versio klikkaamalla latauspainiketta oikealla hiiren painikkeella ja valitsemalla URL-osoitteen kopiointi leikepöydälle. Huomaathan, että tarvitset .jar-tiedoston **linkin** sen lataamiseen palvelimelle. Saat tämän esim. selaimesi lataushistorian avulla, jonne pääset näppäinyhdistelmällä `Ctrl + J`.

Seuraavassa esimerkissä korvaa `$LINKKI` kopioimallasi linkillä. Tämä onnistuu helpoiten, kun kirjoitat koodin käsin, liittämällä linkin `$LINKKI`-tekstin tilalle (Dollarinmerkkiä ei siis tule kirjoittaa konsoliin).

`wget $LINKKI -O server.jar`

Seuraavaksi luomme palvelimen käynnistysskriptin:
`echo "java -Xmx2G -Xms2G -jar server.jar nogui" >> start.sh && chmod +x start.sh`
Tässä on nyt siis kohta, jossa korvaat "java"-tekstin javan asennuksen absoluuttisella polulla, mikäli palvelimellesi on asennettu useampi Java-versio.

Mikäli haluat palvelimellesi enemmän kuin 2GB RAM-muistia käyttöön, voit korvata käynnistyskomennosta 2-numeron haluamallasi numerolla. Hyvä nyrkkisääntö kuitenkin on, että jätät palvelimen käyttöjärjestelmälle vähintään 1GB RAM-muistia käyttöön. Jos palvelimellasi on käytössä enemmänkin muistia eikä sille ole muuta käyttöä, kannattaa se valjastaa tätä 1GB vajaa kokonaisuudessaan Minecraftin käyttöön.

## 3. Asennetaan Screen ja käynnistetään palvelin​
Jotta Minecraft-palvelin pysyy päällä jatkuvasti, tarvitaan siihen jokin työkalu. Tähän helpoin on Screen. Screenillä voimme avata konsoli-ikkunoita, jotka pysyvät päällä palvelimella vaikka sulkisit etäyhteyden palvelimelle.

Kerromme tässä ohjeessa kaiken tarpeellisen Minecraft-palvelimen käynnistämisestä Screenissä, mutta olemme kirjoittaneet tarkemmat käyttöohjeet Screenin käyttöön tänne, mikäli sinua kiinnostaa tutustua tarkemmin Screeniin: Screenin käyttö unix-pohjaisilla käyttöjärjestelmillä.

### Screenin asennus:
`sudo apt install screen`

### Seuraavaksi luomme uuden Screenin:
`screen -s Minecraft /home/minecraft/start.sh`

Screen käynnistää aiemmin luomamme .sh-tiedoston ja palvelin käynnistyy. Konsolisi toimii nyt Minecraft-palvelimen konsolina. Minecraftin konsolista pääset palaamaan tavalliseen Bash-konsoliin näppäinyhdistelmällä `Ctrl+A+D`.

Minecraftin Screeniin pääset takaisin komennolla `screen -r Minecraft`.

Palvelimelle pääset liittymään palvelimen IP-osoitteella.

## 4. Käynnistetään palvelin palvelimen käynnistyksen yhteydessä​
Mikäli jostakin syystä palvelin sammuu, voimme luoda komennon, joka ajetaan palvelimen käynnistyksen yhteydessä.

Tehdään tämä muokkaamalla crontabia. Muokkaimeen pääset komennolla `crontab -e`. Ensimmäisellä kerralla sinulta kysytään, mitä tekstieditoria käytät. Nano on helpoin. Paina siis `1` ja `Enter`.

Crontab-kysymys:
```sh
root@bittivireta: crontab -e
no crontab for root - using an empty one

Select an editor. To change later, run 'select-editor'.
1. /bin/nano <---- easiest
2. /usr/bin/vim.basic
3. /usr/bin/vim.tiny
4. /bin/ed

Choose 1-4 [1]:
```

Lisää tekstitiedoston pohjalle teksti:
`@reboot screen -s Minecraft /home/minecraft/start.sh`

Lisättyäsi teksti paina `Ctrl + X`, tämän jälkeen `Y` ja `Enter`.

Ja Minecraft-palvelimesi käynnistyy uudelleen automaattisesti, kun palvelimesi uudelleenkäynnistyy. Näppärää, eikö!