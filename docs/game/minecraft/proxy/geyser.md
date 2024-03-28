# GeyserMC asennusohje
[GeyserMC](https://geysermc.org) on "paketinkääntäjä", jonka avulla Minecraft Bedrock Edition sekä Minecraft Java Edition pelaajat voivat pelata samalla palvelimella.

## GeyserMC lataaminen
GeyserMC toimii normaalin pluginin/lisäosan tavoin, eli [ladattuasi GeyserMC:n](https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/spigot) siirrä JAR tiedosto palvelimesi `/plugins` kansioon ja uudelleenkäynnistä palvelimesi.

## Peruskonfiguraatio
Jotta Bedrock-pelaajat pääsevät palvelimelle, tulee sinun tehdä muutama muokkaus `/plugins/Geyser-Spigot/config.yml` tiedostoon.

1. Etsi `config.yml` tiedostosta seuraava kohta ja muokkaa `port` kohtaa, johon tulet kirjoittamaan Bedrock-pelaajille tarkoitetun portin.
    ```
    bedrock: 
        # The IP address that will listen for connections. 
        # Generally, you should only uncomment and change this if you want to limit what IPs can connect to your server. 
        #address: 0.0.0.0 

        # The port that will listen for connections. This is the port that Bedrock players will use to connect to your server.
        port: 19132 

        # Some hosting services change your Java port everytime you start the server and require the same port to be used for Bedrock. 
        # This option makes the Bedrock port the same as the Java port every time you start the server. 
        # This option is for the plugin version only. 
        clone-remote-port: false 
    ```
2. Uudelleenkäynnistä palvelimesi muokkausten jälkeen.
3. Varmista että yhteydet palvelimeen toimivat konsolikomennolla `geyser connectiontest <ip>:<portti>`

### Palvelimen portit
Normaalitilanteessa pelipalvelimellasi on vain yksi portti avoinna. Olethan yhteydessä Bittivirta asiakaspalveluun avataksesi uuden portin palvelimellesi.

Kaikki avoimet portit palvelimeltasi löydät kohdasta "Network".

[//]: # (Tähän kuva mistä löytyy)

## GeyserMC dokumentaatio
GeyserMC on luonut oman [dokumentaation](https://wiki.geysermc.org/geyser/understanding-the-config/), joka sukeltaa syvemmälle konfiguraatio mahdollisuuksiin. Kyseinen dokumentaatio on englanniksi.