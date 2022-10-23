export function showEnums() {
    numberEnumsDemo();
    stringEnumsDemo();
    constEnumsDemo();
}

enum ChessPieces {
    KING,
    QUEEN,
    BISHOP,
    ROOK,
    KNIGHT = 12,
    PAWN
}

function numberEnumsDemo() {
    const rook = ChessPieces.ROOK;
    console.log(rook);
    console.log(ChessPieces[rook]);

    const knight = ChessPieces.KNIGHT;
    console.log(knight);
    console.log(ChessPieces[knight]);
}

enum Beatles {
    John = "John",
    Paul = "Paul",
    George = "George",
    Ringo = "Ringo",
}


function stringEnumsDemo() {
    console.log(Beatles.Paul);
    console.log(Beatles[Beatles.Paul]);
}


const enum FasterChessPieces {
    KING,
    QUEEN,
    BISHOP,
    ROOK,
    KNIGHT = 12,
    PAWN
}

function constEnumsDemo() {
    const rook = FasterChessPieces.ROOK;
    console.log(rook);

    const knight = FasterChessPieces.KNIGHT;
    console.log(knight);

    // The lines below are no longer valid
    // console.log(FasterChessPieces[rook]);
    // console.log(FasterChessPieces[knight]);
}
