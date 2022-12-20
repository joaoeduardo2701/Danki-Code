var date = new Date()

console.log("Hoje é dia " + date.getDate() + " do mês " + date.getMonth()) // Pegando o dia e o mês do ano

var diaDaSemana = date.getDay() 

if (diaDaSemana == 0) // Transferindo o getDay() em dias da semana por escrito
{
    diaDaSemana = "Domingo"
}
else if (diaDaSemana == 1)
{
    diaDaSemana = "Segunda-feira"
}
else if (diaDaSemana == 2)
{
    diaDaSemana = "Terça-feira"
}
else if (diaDaSemana == 3)
{
    diaDaSemana = "Quarta-feira"
}
else if (diaDaSemana == 4)
{
    diaDaSemana = "Quinta-feira"
}
else if (diaDaSemana == 5)
{
    diaDaSemana = "Sexta-feira"
}
else if (diaDaSemana == 6)
{
    diaDaSemana = "Sábado"
}

console.log("Hoje é " + diaDaSemana) // Pegando o dia da semana

console.log("Estamos no ano de " + date.getFullYear()) // Pegando o ano
