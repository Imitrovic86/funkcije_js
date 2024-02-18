function tekstualni_prikaz_osobe(osoba) {
    return "Ime:" + osoba.ime + "\n" +
        "Prezime:" + osoba.prezime + "\n" +
        "Godiste:" + osoba.godiste + "\n" +
        "Adresa:" + "\n" +
        "\tUlica:" + osoba.adresa.ulica + "\n" +
        "\tBroj:" + osoba.adresa.broj + "\n" +
        "\tGrad:" + osoba.adresa.grad
}


const osoba = {
    "ime": "Petar",
    "prezime": "Petrovic",
    "godiste": 1995,
    "adresa":
    {
        "ulica": "Cara Dusana",
        "broj": 34,
        "grad": "Beograd"

    }

}
console.log(tekstualni_prikaz_osobe(osoba))

/*console.log(osoba.ime)
console.log(osoba["ime"])
console.log(osoba.adresa.ulica)
console.log(osoba["adresa"]["ulica"])
console.log(osoba.adresa["ulica"])
console.log(osoba["adresa"].ulica)

osoba.ime = "Marko"
console.log(osoba)*/
