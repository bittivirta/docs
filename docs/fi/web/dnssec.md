# DNSSEC
DNSSEC parantaa turvallisuutta siten, että kukaan ei voi väärentää nimipalvelimiasi. Bittivirran kaikki webhotellit tukevat DNSSEC-ominaisuutta ja suosittelemme vahvasti sen käyttöönottoa. Myös fi-verkkotunnuksien myöntäjä Traficom suosittelee vahvasti DNSSEC:n käyttöä.

Traficomin esite DNSSEC-ominaisuudesta löytyy [täältä](https://www.traficom.fi/sites/default/files/media/file/DNSSec_uusi.pdf)

## 1. Kirjaudu Pleskiin​
Avaa Plesk asiakasalueella OneClick-kirjautumisella tai kirjaudu Pleskiin osoitteessa [https://plesk.bittivirta.cloud/](https://plesk.bittivirta.cloud/)

## 2. Valitse verkkotunnus jota hallitset, valitse "Isännöinti ja DNS" ja valitse DNNSSEC​
![Valitse verkkotunnuksesi, seuraavaksi isännöinti ja dns ja viimeisenä DNSSEC](https://cdn.bittivirta.fi/docimg/fi/web/dnssec/go-to-dnssec.png)

## 3. Allekirjoita DNS-vyöhyke​
![Klikkaa allekirjoita dns-vyöhyke -painiketta](https://cdn.bittivirta.fi/docimg/fi/web/dnssec/sign.png)

## 4. Täytä avaintietolomake ja paina OK​
Voit jättää tiedot oletusarvoisiksi.
![Kenttien arvot jätetään oletusarvoisiksi, ellei tiedossa ole muutoksia](https://cdn.bittivirta.fi/docimg/fi/web/dnssec/form.png)

## 5. Lähetä DS-resurssitietueet verkkotunnuksen rekisteröitsijälle​
![Valmiit DS-tietueet](https://cdn.bittivirta.fi/docimg/fi/web/dnssec/done.png)

Bittivirralla ei ole vielä käytössä automaattista DNSSEC-avaimien talletusta, joten joudut olemaan yhteydessä asiakaspalveluun. Asiakaspalvelu lisää DNSSEC-tietueesi puolestasi verkkotunnuksen rekisteriin. Sinun ei tarvitse lähettää DNSSEC-tietueita meille, löydämme ne nimipalvelimiltasi jos käytät Bittivirran nimipalvelimia tai olet lisännyt tietueet nimipalvelimillesi. Jos käytössäsi on muu verkkotunnuksen palveluntarjoaja, lähetä DS-tietueet heille heidän järjestelmien kautta.