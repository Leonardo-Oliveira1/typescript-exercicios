type AccountInfo = {
    nome: string,
    id: number,
    email?: string
}

type CharInfo = {
    nickname: string,
    level: number
}

type Player = AccountInfo & CharInfo;

const Player1: Player = {
    nome: "Leonardo",
    id: 245,
    email: "oleonardo@gmail.com",
    nickname: "TrelosoP",
    level: 352
}


console.log(Player1);