# tyel

![logo](doc/tyel-logo-512x192.png)

Vapaa suomalainen työeläkemaksujen prosentit laskeva ohjelmakirjasto. Kirjasto koostuu funktioista, jotka pyrkivät työkaluina toimimisen lisäksi esittämään työeläkkeen monimutkaiset säädökset yksiselitteisellä ohjelmointikielellä monitulkintaisen luonnollisen kielen sijaan.

Esimerkkinä käytöstä 32 vuotiaan työeläkemaksun prosenttiosuus 11.12.2020:

    > tyel.tyontekijanProsentti(32, '2020-12-11')
    7.15

Jos haluat viedä Suomea eteenpäin ja osallistua kehitystyöhön niin luo uusi [issue](https://github.com/axelpale/tyel/issues) tai [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

## Asennus

JavaScript &amp; Node.js:

    $ npm install tyel

## Rajapinta

### tyel.perusProsentti(ika, pvm)

TyEL-perusprosentti sisältää sekä työntekijän että työnantajan osuuden.

Parametrit:

- `ika`: Kokonaisluku. Työntekijän ikä vuosissa.
- `pvm`: Päivämäärä merkkijonona muodossa VVVV-KK-PP, esim `'2020-12-11'`

Heittää virheen mikäli päivämäärä on epäkelpo tai päivämäärälle ei löydy säädöstä.

Palauttaa prosenttiluvun, esimerkiksi `25.3`

### tyel.tyontekijanProsentti(ika, pvm)

Työntekijän bruttopalkasta vähennettävä TyEL-prosenttiosuus.

Parametrit:

- `ika`: Kokonaisluku. Työntekijän ikä vuosissa.
- `pvm`: Palkan päivämäärä merkkijonona muodossa VVVV-KK-PP, esim `'2020-12-11'`

Heittää virheen mikäli päivämäärä on epäkelpo tai päivämäärälle ei löydy säädöstä.

Palauttaa prosenttiluvun, esimerkiksi `7.15`

### tyel.tyonantajanProsentti(tyontekijanIka, pvm)

Työnantajan maksettavaksi jäävä TyEL-prosenttiosuus, eli käytännössä TyEL-perusprosentin ja työntekijän prosentin erotus.

Parametrit:

- `tyontekijanIka`: Kokonaisluku. Työntekijän ikä vuosissa.
- `pvm`: Palkan päivämäärä merkkijonona muodossa VVVV-KK-PP, esim `'2020-12-11'`

Heittää virheen mikäli päivämäärä on epäkelpo tai päivämäärälle ei löydy säädöstä.

Palauttaa prosenttiluvun, esimerkiksi `18.15`

## Lähteet

- [palkanlaskijanopas.fi](https://palkanlaskijanopas.fi/taulukot/palkkahallinnon-tarkeat-luvut/palkkahallinnon-tarkeat-luvut-2020/)

## Vastuuvapauslauseke

Tämä on ilmainen, avoin ja vapaaehtoistyöllä tehty ohjelma. Emme pysty varmuudella takaamaan ohjelman oikeellisuutta. Näin ollen ohjelman toiminnallisuus tarjotaan käyttöön ilman takuuta oikeellisuudesta tai sopivuudesta mihinkään käyttötarkoitukseen.

## Lisenssi

[GPLv3](LICENSE)
