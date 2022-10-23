export function showDestructuring() {
    function displayValues(title: string, ...values: unknown[]) {
        console.log(title, ":");
        values.forEach(item => console.log(item));
    }

    const sampleData1 = [10, 20, 30, 40, 50, 60];
    const sampleData2 = [100, 200, 300, 400, 500, 600];
    const sampleData3 = [1000, 2000, 3000, 4000, 5000, 6000];
    const sampleData4 = {
        title: "Serenity",
        year: 2005,
        director: "Joss Whedon",
        rating: "PG-13",
        stars: ["Nathan Fillion", "Gina Torres", "Alan Tudyk", "Morena Baccarin"]
    };

    const [var1, var2] = sampleData1;
    displayValues('Destructuring first array', var1, var2);

    const [var3, var4, var5] = sampleData2;
    displayValues('Destructuring second array', var3, var4, var5);

    const [var6, var7, ...var8] = sampleData3;
    displayValues('Destructuring second array', var6, var7, var8);

    const {title, director, rating, stars} = sampleData4;

    displayValues('Destructuring objects', title, director, rating, stars);
}
