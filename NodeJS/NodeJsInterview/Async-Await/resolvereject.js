const getName = async () => {
    throw new Error("Something went wrong");
}

async function main() {

    try {
        const name = await getName();
        console.log("Got the name - ", name);
    } catch (error) {
        console.log("Exception Handling block ", error.message)
    }
}

main();