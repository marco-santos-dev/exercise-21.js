// 21. Escada de blocos. Leia a altura N e desenhe uma escada alinhada à direita usando o caractere #. Não utilize repeat().

const height = Number(prompt("Digite a altura da escada:"));

for (let row = 1; row <= height; row++) {
    let line = "";

    for (let space = 1; space <= height - row; space++) {
        line += " ";
    }

    for (let block = 1; block <= row; block++) {
        line += "#";
    }

    console.log(line);
}