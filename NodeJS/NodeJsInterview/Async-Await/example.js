async function giveMeName() {
    return "Suyash Gehlot"
}

async function main() {
    const name = await giveMeName();
    console.log("My name is : ", name);
}


main();