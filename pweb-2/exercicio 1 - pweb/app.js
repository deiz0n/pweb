const getCats = () => {
    const tarefas = fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
  
    tarefas 
      .then(resposta => resposta.json())
      .then(cats => {
        cats.forEach(cat => {
          const img = document.createElement('img')
          const label = document.createElement('span')
          const section = document.createElement('section')
        
          section.className = 'box'
        
          img.src = cat.url
        
          label.innerHTML =
            `<br> Id: ${cat.id}; <br>
          Width: ${cat.width}px; <br>
          Heigth: ${cat.height}px`
        
          section.appendChild(img)
          section.appendChild(label)
          document.querySelector("#cats").appendChild(section)
        })
      })
    .catch(erro => console.log(erro))
  }
  

const btnMostrar = document.querySelector("#show-cats")
btnMostrar.addEventListener("click", getCats)

const getMarcas = () => {
    const tasks = fetch('https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json')

    tasks
    .then(answers => answers.json())
    .then(marcas => {
        marcas.forEach(marca => {
            const logo = document.createElement('img')
            const label = document.createElement('span')
            const section = document.createElement('section')

            section.className = 'box'

            logo.src = marca.image?.optimized
            label.innerHTML =
            `<br> Nome: ${marca.name}; <br>`
            
            section.appendChild(logo)
            section.appendChild(label)
            document.querySelector("#marcas").appendChild(section)
        }) 
    })
    .catch(erro => console.log(erro))
}

const btnMarcas = document.querySelector("#show-marcas")
btnMarcas.addEventListener("click", getMarcas)