/*function deg_rad(stepeni) {
    return stepeni * Math.PI / 180
}


console.log("60 stepeni u radijane:", deg_rad(60))*/

function tekstualna_vrednost_ocene(ocena, pol="m") {
    if (ocena === 1) {
        return pol==="m" ? "Nedovoljan" : "Nedovoljna"

    } else if (ocena === 2) {
        return pol==="m" ? "Dovoljan" : "Dovoljna"

    } else if (ocena === 3) {
        return pol==="m" ? "Dobar" : "Dobra"

    } else if (ocena === 4) {
        return pol="m" ? "Vrlo dobar" : "Vrlo dobra"

    } else if (ocena === 5) {
        return pol==="m" ?  "Odlican" : "Odlicna"

    } else {
        return "Vrednost mora biti izmedju 1 i 5."

    }
}
console.log(tekstualna_vrednost_ocene(3, "z"))
console.log(tekstualna_vrednost_ocene(5, "z"))
console.log(tekstualna_vrednost_ocene(2, "z"))

/**
 * Funkcija ocena_za_)bodove
 * - prihvata bodove kao argument
 * - vraca ocenu kao broj prema opsegu:
 * -0-50 -5
 * -51-60-6
 * -61-70-7
 * -71-80-8
 * -81-90-9
 * -91-100-10
 */
function ocena_za_bodove (bodovi) {
    if (bodovi>=0 && bodovi <=50){
    return 5}
else if (bodovi >=51 && bodovi <=60){
    return 6
}else if (bodovi >=61 && bodovi<=70) {
    return 7 
}else if (bodovi >=71 && bodovi <=80) { 
    return 8
}else if (bodovi >=81 && bodovi <=90){
    return 9
}else if (bodovi>=91 && bodovi <=100){
    return 10
}
else {
    return -1
}
}
console.log("Ocena za 83 boda:", ocena_za_bodove(83))

function f2x2_5x_3(x) {
    return 2*x**2+5*x-3
}
console.log(f2x2_5x_3(-5))
console.log(f2x2_5x_3(0))
console.log(f2x2_5x_3(5))
