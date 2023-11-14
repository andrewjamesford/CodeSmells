export class Game {
  private _lastSymbol: string = " ";
  private readonly BOARD_SIZE: number = 3;
  //   private _board: Board = new Board(3); 🏳️
  private _board: Board = new Board(this.BOARD_SIZE);

  public Play(symbol: string, x: number, y: number): void {
    //if first move
    // Use strict equality === instead of == 🏳️
    if (this._lastSymbol === " ") {
      //if player is X
      if (symbol == "O") {
        throw new Error("Invalid first player");
      }
    }
    //if not first move but player repeated
    // Use strict equality === instead of == 🏳️
    else if (symbol === this._lastSymbol) {
      throw new Error("Invalid next player");
    }
    //if not first move but play on an already played tile
    else if (this._board.TileAt(x, y).Symbol != " ") {
      throw new Error("Invalid position");
    }

    // update game state
    this._lastSymbol = symbol;
    this._board.AddTileAt(symbol, x, y);
  }

  //   Creating a private method to check the winner of a row and avoid repeating the code 🏳️
  private checkRowWinner(row: number): string {
    if (
      this._board.TileAt(row, 0)!.Symbol !== " " &&
      this._board.TileAt(row, 1)!.Symbol ===
        this._board.TileAt(row, 0)!.Symbol &&
      this._board.TileAt(row, 2)!.Symbol === this._board.TileAt(row, 1)!.Symbol
    ) {
      return this._board.TileAt(row, 0)!.Symbol;
    }
    return " ";
  }

  //   calling the private method to check the winner of a row 🏳️
  public Winner(): string {
    for (let i = 0; i < this.BOARD_SIZE; i++) {
      const winner = this.checkRowWinner(i);
      if (winner !== " ") {
        return winner;
      }
    }

    return " ";
  }
  // public Winner() : string {
  //     //if the positions in first row are taken
  //     if (this._board.TileAt(0, 0)!.Symbol != ' ' &&
  //             this._board.TileAt(0, 1)!.Symbol != ' ' &&
  //             this._board.TileAt(0, 2)!.Symbol != ' ') {
  //         //if first row is full with same symbol
  //         if (this._board.TileAt(0, 0)!.Symbol ==
  //                 this._board.TileAt(0, 1)!.Symbol &&
  //                 this._board.TileAt(0, 2)!.Symbol == this._board.TileAt(0, 1)!.Symbol) {
  //             return this._board.TileAt(0, 0)!.Symbol;
  //         }
  //     }

  //     //if the positions in first row are taken
  //     if (this._board.TileAt(1, 0)!.Symbol != ' ' &&
  //             this._board.TileAt(1, 1)!.Symbol != ' ' &&
  //             this._board.TileAt(1, 2)!.Symbol != ' ') {
  //         //if middle row is full with same symbol
  //         if (this._board.TileAt(1, 0)!.Symbol ==
  //                 this._board.TileAt(1, 1)!.Symbol &&
  //                 this._board.TileAt(1, 2)!.Symbol ==
  //                         this._board.TileAt(1, 1)!.Symbol) {
  //             return this._board.TileAt(1, 0)!.Symbol;
  //         }
  //     }

  //     //if the positions in first row are taken
  //     if (this._board.TileAt(2, 0)!.Symbol != ' ' &&
  //             this._board.TileAt(2, 1)!.Symbol != ' ' &&
  //             this._board.TileAt(2, 2)!.Symbol != ' ') {
  //         //if middle row is full with same symbol
  //         if (this._board.TileAt(2, 0)!.Symbol ==
  //                 this._board.TileAt(2, 1)!.Symbol &&
  //                 this._board.TileAt(2, 2)!.Symbol ==
  //                         this._board.TileAt(2, 1)!.Symbol) {
  //             return this._board.TileAt(2, 0)!.Symbol;
  //         }
  //     }

  //     return ' ';
  // }
}

interface Tile {
  X: number;
  Y: number;
  Symbol: string;
}

class Board {
  private _plays: Tile[] = [];

  // boardSize passed as a parameter to the constructor from BOARD_SIZE 🏳️
  constructor(boardSize: number) {
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        const tile: Tile = { X: i, Y: j, Symbol: " " };
        this._plays.push(tile);
      }
    }
  }

  public TileAt(x: number, y: number): Tile {
    // be constant with name of variables , use tile instead of t 🏳️
    const tile = this._plays.find((tile: Tile) => tile.X === x && tile.Y === y);
    // Handle Null in tile variable
    if (tile) {
      return tile;
    } else {
      throw new Error(`Tile not found at X: ${x}, Y: ${y}`);
    }
  }

  public AddTileAt(symbol: string, x: number, y: number): void {
    const tile: Tile = { X: x, Y: y, Symbol: symbol };
    // be constant with name of variables , use tile instead of t 🏳️
    this._plays.find((tile: Tile) => tile.X == x && tile.Y == y)!.Symbol =
      symbol;
  }
}
