 const niz=[10,35,12,18,27]

console.log("Index 1:" ,niz[1])
console.log("Duzina niza:", niz.length)
const n=niz.length
console.log( "Poslednji element niza:", niz [n-1])

niz.push(10,25)
    console.log("Niz:", niz)
    console.log("Niz:", niz.toString())
    console.log("Niz:", niz.join("; "))
    const poslednji = niz.pop()
    console.log("Poslednji izbaceni element:", poslednji)
    console.log("Izmenjeni niz:", niz.toString())

    const prvi=niz.shift()
    console.log("Prvi izbaceni element:", prvi)
    console.log("Izmenjeni niz:", niz.toString())

    niz.unshift(66,54)
    console.log("Izmenjeni niz posle unshift:", niz.toString())

    niz.splice(2,0,45,42,41)
    console.log("Izmenjeni niz posle prvog splice:", niz.toString())

    niz.splice(4,2)// brisanje 2 elementa od index-a 4
    console.log("Izmenjeni niz posle drugog splice:", niz.toString())

    const drugi_niz= [4,5,6]
    const spojeni_niz= niz.concat(drugi_niz)
    console.log("Spojeni niz:", spojeni_niz.toString())



