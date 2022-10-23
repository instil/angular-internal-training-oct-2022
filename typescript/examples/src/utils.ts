export function wrapConsoleDemo(input: () => void, title: string): () => string {
    function printTitle() {
        console.log("\n\n");
        console.log(`---------- ${title} ----------`);
    }
    return () => {
        printTitle();
        input();
        return "(see console)";
    };
}
