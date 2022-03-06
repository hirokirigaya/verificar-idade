
function verificar() {
  const data = new Date()
  const ano = data.getFullYear()
  const nasAno = document.querySelector('input.nascimento')
  const res = document.querySelector('div#res')

  if(nasAno.value.length == 0 || Number(nasAno.value) > ano) {
    window.alert('[ERROR] Verifique os dados e tente novamente!')
  }
  else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(nasAno.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked) {
      genero = 'Homem'
      if(idade >= 0 && idade < 10) {
        img.setAttribute('src', './src/img/foto-bebe-m.png')
      }
      else if(idade < 21) {
        img.setAttribute('src', './src/img/foto-jovem-m.png')
      }
      else if(idade < 60) {
        img.setAttribute('src', './src/img/foto-adulto-m.png')
      }
      else {
        img.setAttribute('src', './src/img/foto-idoso-m.png')
      }
    }
    else if(fsex[1].checked) {
      genero = 'Mulher'
      if(idade >= 0 && idade < 10) {
        img.setAttribute('src', './src/img/foto-bebe-f.png')
      }
      else if(idade < 21) {
        img.setAttribute('src', './src/img/foto-jovem-f.png')
      }
      else if(idade < 60) {
        img.setAttribute('src', './src/img/foto-adulto-f.png')
      }
      else {
        img.setAttribute('src', './src/img/foto-idoso-f.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos o sexo ${genero} e a idade ${idade}`
    res.appendChild(img)
  }
}

