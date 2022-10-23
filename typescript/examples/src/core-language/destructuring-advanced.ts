type Bank = {
    branchNumber: string
    address: string
};

type Account = {
    accountNumber: string,
    customer: string,
    balance: number,
    branch: Bank
};

function transferFundsV1(
    {accountNumber: origin, customer: payer}: Account,
    {accountNumber: destination, customer: payee}: Account
) {

    console.log(`Transferring from account ${origin} of ${payer}`);
    console.log(`\t to account ${destination} of ${payee}`);
    console.log("---");
}

function transferFundsV2(
    {accountNumber: origin, customer: payer, branch: {branchNumber: source}}: Account,
    {accountNumber: destination, customer: payee}: Account
) {

    console.log(`Transferring from account ${origin} of ${payer}`);
    console.log(`\t to account ${destination} of ${payee}`);
    console.log(`\t in case of problems contact branch ${source}`);
    console.log("---");
}

export function showAdvancedDestructuring() {
    const account1 = {
        accountNumber: "AB12",
        customer: "Joe Bloggs",
        balance: 20000.0,
        branch: {
            branchNumber: "XX98",
            address: "10 Arcatia Road"
        }
    };

    const account2 = {
        accountNumber: "CD34",
        customer: "Jane Smith",
        balance: 10000.0,
        branch: {
            branchNumber: "YY76",
            address: "30 University Street"
        }
    };

    transferFundsV1(account1, account2);
    transferFundsV2(account1, account2);
}
