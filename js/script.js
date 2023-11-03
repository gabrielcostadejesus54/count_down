var dia = document.getElementById('dia')
var hora = document.getElementById('hora')
var minuto = document.getElementById('minuto')
var segundo = document.getElementById('segundo')

var lancamento = '25 dec 2023'

function countDown(){
   var dataLancamento = new Date(lancamento)
   var hoje = new Date()

   var segundosTotais = (dataLancamento - hoje) / 1000

   var finalDias = Math.floor(segundosTotais / 60 / 60 / 24)
   var finalHoras = Math.floor(segundosTotais / 60 / 60) % 24
   var finalMinutos = Math.floor(segundosTotais / 60) % 60
   var finalSegundos = Math.floor(segundosTotais % 60)

   dia.innerHTML = formatarTempo(finalDias)
   hora.innerHTML = formatarTempo(finalHoras)
   minuto.innerHTML = formatarTempo(finalMinutos)
   segundo.innerHTML = formatarTempo(finalSegundos)
}

function formatarTempo(tempo){
    if(tempo < 10){
        return `0${tempo}`
    }else{
        return tempo
    }
}


setInterval(countDown, 1000)

