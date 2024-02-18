function c_u_f (celzijusi) {
    const f=celzijusi * 1.8+32
    return f

}

function pozdravna_poruka(ime) {
    return "Zdravo" + ime}
console.log(pozdravna_poruka("Irena"))

console.log(c_u_f(30))
console.log(c_u_f(-10))
console.log(c_u_f(11))

const t=37
console.log(c_u_f(t))
f_t=c_u_f(t)
console.log(f_t)


function cena_sa_porezom(cena, porez=20) {
    const p=1+(porez/100)
    return cena *p
}
console.log("Cena sa porezom:" , cena_sa_porezom(100,20))
console.log("Cena sa porezom:" , cena_sa_porezom(100))
