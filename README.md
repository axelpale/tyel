# tyoelakemaksu

Vapaa suomalainen työeläkemaksujen prosentit kertova funktiokirjasto.

Jos haluat viedä Suomea eteenpäin ja osallistua kehitystyöhön niin luo uusi [issue](issues/new) tai [pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

## Asennus

JavaScript &amp; Node.js:

    $ npm install tyoelakemaksu

## Rajapinta

### tyoelakemaksu.perusProsentti(pvm)

TyEL-perusprosentti sisältää sekä työntekijän että työnantajan osuuden.

Parametrit:

- `pvm`: Päivämäärä merkkijonona muodossa VVVV-KK-PP, esim `'2020-12-11'`

Heittää virheen mikäli päivämäärä on epäkelpo tai päivämäärälle ei löydy säädöstä.

Palauttaa prosenttiluvun, esimerkiksi `25.3`

### tyoelakemaksu.tyontekijanProsentti(ika, pvm)

Työntekijän bruttopalkasta vähennettävä TyEL-prosenttiosuus.

Parametrit:

- `ika`: Kokonaisluku. Työntekijän ikä vuosissa.
- `pvm`: Palkan päivämäärä merkkijonona muodossa VVVV-KK-PP, esim `'2020-12-11'`

Heittää virheen mikäli päivämäärä on epäkelpo tai päivämäärälle ei löydy säädöstä.

Palauttaa prosenttiluvun, esimerkiksi `7.15`

### tyoelakemaksu.tyonantajanProsentti(tyontekijanIka, pvm)

Työnantajan maksettavaksi jäävä TyEL-prosenttiosuus, eli käytännössä TyEL-perusprosentin ja työntekijän prosentin erotus.

Parametrit:

- `ika`: Kokonaisluku. Työntekijän ikä vuosissa.
- `pvm`: Palkan päivämäärä merkkijonona muodossa VVVV-KK-PP, esim `'2020-12-11'`

Heittää virheen mikäli päivämäärä on epäkelpo tai päivämäärälle ei löydy säädöstä.

Palauttaa prosenttiluvun, esimerkiksi `18.15`

## Lähteet

- [palkanlaskijanopas.fi](https://palkanlaskijanopas.fi/taulukot/palkkahallinnon-tarkeat-luvut/palkkahallinnon-tarkeat-luvut-2020/)

## Vastuuvapauslauseke

Tämä on ilmainen, avoin ja vapaaehtoistyöllä tehty ohjelma. Emme pysty varmuudella takaamaan ohjelman oikeellisuutta. Näin ollen ohjelman toiminnallisuus tarjotaan käyttöön ilman takuuta oikeellisuudesta tai sopivuudesta mihinkään käyttötarkoitukseen.

## Lisenssi

[GPLv3](LICENSE)
