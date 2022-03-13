type Idade = number | string;
type Systems = "Windows" | "Android" | "Linux"


function userInfo(idade: Idade, nome: string){
    console.log(`O usuário se chama ${nome} e tem ${idade} anos.`);
}

function userOS(Platform: Systems){
    console.log(`O usuário está usando ${Platform}`)
}

userInfo("58", "Teste");
userOS("Windows")