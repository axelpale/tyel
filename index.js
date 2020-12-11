// tyel
// Author: Akseli Palén <akseli.palen@gmail.com>
// License: GPL-3.0

// Päivämäärän tarkistava muotti
const pvmRegexp = /^\d{4}-\d\d-\d\d$/

const pvmMillisek = (pvm) => {
  // Muuttaa päivämäärän millisekunneiksi päivämäärien vertailua varten.
  //
  // Parametrit:
  //   pvm: päivämäärä merkkijonona muodossa VVVV-KK-PP
  //
  // Heittää virheen mikäli päivämäärä on epäkelpo.
  //
  // Palauttaa
  //   millisekunnit hetkestä 1970-01-01 00:00:00.000 UTC
  //
  if (!pvmRegexp.test(pvm)) {
    throw new Error('Epäkelpo päivämäärä.')
  }

  const pvmMs = Date.parse(pvm)

  if (isNaN(pvmMs)) {
    throw new Error('Epäkelpo päivämäärä.')
  }

  return pvmMs
}

exports.perusProsentti = (ika, pvm) => {
  // Perusprosentti sisältää sekä työntekijän että työnantajan osuuden.
  //
  // Parametrit:
  //   ika
  //     Kokonaisluku, työntekijän ikä vuosissa
  //   pvm
  //     Päivämäärä merkkijonona muodossa VVVV-KK-PP
  //
  const pvmMs = pvmMillisek(pvm)

  if (pvmMs >= Date.parse('2021-01-01')) {
    if (ika >= 17 && ika <= 67) {
      return 24.8
    }
    return 0
  }
  if (pvmMs >= Date.parse('2020-05-01')) {
    if (ika >= 17 && ika <= 67) {
      return 22.7
    }
    return 0
  }
  if (pvmMs >= Date.parse('2020-01-01')) {
    if (ika >= 17 && ika <= 67) {
      return 25.3
    }
    return 0
  }

  throw new Error('Annetulle päivämäärälle ei löytynyt säädöstä.')
}

exports.tyontekijanProsentti = (ika, pvm) => {
  // Parametrit:
  //   ika
  //     Kokonaisluku. Ikä vuosissa.
  //   pvm
  //     Päivämäärä merkkijonona muodossa VVVV-KK-PP
  //
  const pvmMs = pvmMillisek(pvm)

  if (pvmMs >= Date.parse('2020-01-01')) {
    if (ika >= 68) {
      return 0
    }
    if (ika >= 63) {
      return 7.15
    }
    if (ika >= 53) {
      return 8.65
    }
    if (ika >= 17) {
      return 7.15
    }
    return 0
  }

  throw new Error('Annetulle päivämäärälle ei löytynyt säädöstä.')
}

exports.tyonantajanProsentti = (tyontekijanIka, pvm) => {
  // Työnantajan prosenttiosuus
  const ttPros = exports.tyontekijanProsentti(tyontekijanIka, pvm)
  const perusPros = exports.perusProsentti(tyontekijanIka, pvm)
  return perusPros - ttPros
}
