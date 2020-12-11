const test = require('tape')
const tyel = require('./index')

test('perusProsentti', t => {
  t.equal(tyel.perusProsentti(25, '2020-01-01'), 25.3, 'jakson alussa')
  t.equal(tyel.perusProsentti(25, '2020-02-28'), 25.3, 'jakson keskellä')
  t.equal(tyel.perusProsentti(25, '2020-04-30'), 25.3, 'jakson lopussa')

  t.equal(tyel.perusProsentti(25, '2020-04-31'), 22.7, 'ylittävä päivä')

  t.equal(tyel.perusProsentti(16, '2020-02-28'), 0, 'alaikäinen')

  t.throws(() => {
    tyel.perusProsentti(25, '1912-01-01')
  }, /ei löytynyt/, 'liian vanha päivämäärä')

  t.throws(() => {
    tyel.perusProsentti(25, '202001-01')
  }, /päivämäärä/, 'rakenteellisesti epäkelpo päivämäärä')


  t.throws(() => {
    tyel.perusProsentti(25, '')
  }, /päivämäärä/, 'tyhjä päivämäärä')

  t.throws(() => {
    tyel.perusProsentti(25)
  }, /päivämäärä/, 'tyhjä päivämäärä')

  t.end()
})

test('tyontekijanProsentti', t => {
  t.equal(tyel.tyontekijanProsentti(16, '2020-01-01'), 0, 'ikäluokan ali')
  t.equal(tyel.tyontekijanProsentti(17, '2020-01-01'), 7.15, 'ikäluokan alku')
  t.equal(tyel.tyontekijanProsentti(52, '2020-01-01'), 7.15, 'ikäluokan loppu')
  t.equal(tyel.tyontekijanProsentti(53, '2020-01-01'), 8.65, 'ikäluokan yli')

  t.end()
})

test('tyonantajanProsentti', t => {
  t.equal(tyel.tyonantajanProsentti(16, '2020-01-01'), 0, 'ikäluokan ali')
  t.equal(tyel.tyonantajanProsentti(17, '2020-01-01'), 18.15, 'ikäluokan alku')
  t.equal(tyel.tyonantajanProsentti(55, '2020-01-01'), 16.65, 'keski-ikä')
  t.equal(tyel.tyonantajanProsentti(67, '2020-01-01'), 18.15, 'ikäluokan loppu')
  t.equal(tyel.tyonantajanProsentti(68, '2020-01-01'), 0, 'eläkeikäinen')

  t.end()
})
