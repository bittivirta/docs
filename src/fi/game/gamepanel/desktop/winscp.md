# WinSCP

WinSCP on ilmainen, vain Windowsille suunniteltu etätiedostonhallintaohjelma. Voit hallita WinSCP:n avulla Gamepanelissa näkyvää palvelimen tiedostoja.

## Asennus

WinSCP on asennettavissa sen verkkosivuilta. Pääset WinSCP:n lataussivulle klikkaamalla [tätä](https://winscp.net/eng/download.php).

## Palvelimelle yhdistäminen

Kun avaat WinSCP:n, pyytää se yhdistämään palvelimelle. Jos kirjautuminen ei jostakin syystä aukea - löydät kirjautumisikkunan valitsemalla ohjelmiston ylävalikosta "Istunto" » "Uusi istunto...":

![WinSCP - Uusi istunto](https://cdn.bittivirta.fi/docimg/fi/pelipalvelimet/windows/sftp/winscp/uusi-istunto.png =300x)

1. Jos sinulla on jo ennestään kohteita listassa, valitse "Uusi kohde"
2. Liitä palvelimen osoite. Voit liittää tähän SFTP-osoitteen, joka on mallia `sftp://gX.bitti.gg:2022`. Näin SFTP ja portti asettautuvat itsekseen
3. Varmista, että tiedostoprotokolla on `SFTP`
4. Varmista, että portti on `2022`
5. Pelipalvelimen käyttäjänimi, joka on gamepanel-käyttäjänimesi ja palvelimen tunniste, pisteellä erotettuna.
6. Salasana, joka on Gamepanel-käyttäjän salasana. Asiakasalueeen salasana ei ole sama.
7. Valitse "Tallenna". Jos et halua tallentaa palvelimen tietoja tietokoneellesi, valitse "Kirjaudu".

![WinSCP - Uusi istunto](https://cdn.bittivirta.fi/docimg/fi/pelipalvelimet/windows/sftp/winscp/istunto-tallenna.png =600x)

1. Halutessasi voit vaihtaa kohteen nimen, jotta se olisi helpompi muistaa
2. Halutessasi voit määrittää kohteelle kansion
3. Voit tallentaa salasanan, mikäli tietokoneesi ei ole jaettu muiden henkilöiden kanssa
4. Tallenna painamalla OK

![WinSCP - Uusi istunto](https://cdn.bittivirta.fi/docimg/fi/pelipalvelimet/windows/sftp/winscp/istunto-nimea.png =300x)

Voit yhdistää tallennettuun kohteeseen joko tuplaklikkaamalla sen nimeä tai valitsemalla sen ja painamalla "Kirjaudu".

## Tiedostojen hallinta

WinSCP on hyvin käytännöllinen ohjelmisto tiedostojen siirtoon ja hallintaan. Voit siirtää tiedostoja kätevästi "vedä & pudota"-toiminnolla.

WinSCP voittaa FileZillan tiedostojen muokkaamisessa. Tiedoston tallentamista ei tarvitse erikseen vahvistaa ja oletuksena tiedoston tuplaklikkaaminen muokkaa tiedostoa.

<VideoPlayer
    src="https://cdn.bittivirta.fi/docimg/fi/pelipalvelimet/windows/sftp/winscp/tiedostojen-hallinta.webm"
    type="video/webm"
    autoplay
    loop
    muted
/>

## Tiedoston muokkausohjelma

WinSCP:n oletusasetus tiedoston muokkausohjelmalle on hieman kömpelö. Voit valita mieleisesi tiedostonmuokkausohjelmiston ohjelmiston asetuksista valitsemalla ohjelmiston ylävalikosta "Valinnat" » "Asetukset...". Asetukset -ruudussa valitse "Editorit" ja "Lisää...". Valitse joko tietty ohjelmisto ja määritä, mitkä tiedostot se avaa, tai valitse "Liitetty ohjelma", käytä editoria seuraaville tiedostoille `*.*` ja paina "OK".

Poista vielä WinSCP:n oletuksena tarjoamat editorit klikkaamalla niitä ja painamalla "Poista".