class CZooAnimal {
  constructor() {
    this.zooAnimals = [];
  }

  agregarAnimal(n, a, nac, mo, ap, ep) {
    this.zooAnimals.push({ IdAnimal:n, name: a, cageNumber: nac, IdTypeAnimal: mo, weight: ap,  weight2: ep });
  }

  generarTablaAnimales() {
    const tablaBody = document.querySelector('#animalTable tbody');
    tablaBody.innerHTML = '';

    this.zooAnimals.forEach(animal => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${animal.IdAnimal}</td>
        <td>${animal.name}</td>
        <td>${animal.cageNumber}</td>
        <td>${animal.IdTypeAnimal}</td>
        <td>${animal.weight}</td>
        <td>${animal.weight2}</td>
      `;
      tablaBody.appendChild(fila);
    });
  }

  contarAnimalesEnJaula5Menor3kg() {
    let i=0,count = [];
    for (const animal of this.zooAnimals) {
      if (animal.cageNumber == 'Argentino') {
        count[i]=animal.IdAnimal;
        count[i].toString();
        i=i+1;
      }
    }

    return count;
  }

  contarFelinosEntreJaulas2y5() {
    let count = [],i=0;
    for (const animal of this.zooAnimals) {
      if (animal.weight >= '1960' && animal.weight<= '1980') {
        count[i]=animal.IdAnimal;
        count[i].toString();
        i=i+1;
      }
    }
    return count;
  }

  listarNombreAnimalJaula4Menor120() {
    let count=0,i=0,ass=0;
    for (const animal of this.zooAnimals) {
      count=count+animal.weight2;
      i=i+1;
    }
    ass=count/i;
    return ass;
  }

contarFelinosEntreJaulas2y50() {
  let count = [],i=0;
  for (const animal of this.zooAnimals) {
      count[i]=animal.IdAnimal;
      count[i].toString();
      i=i+1;
  }
  return count;
}

}
// Crear una instancia de la clase CZooAnimal
const zoo = new CZooAnimal();

// Agregar algunos animales
zoo.agregarAnimal("Gabriel", "García Márquez", "Colombiano", "Cien años de soledad", 1967, 40);
zoo.agregarAnimal("Julio", "Cortázar", "Argentino", "Rayuela", 1963, 48);
zoo.agregarAnimal("Isabel", "Allende", "Chilena", "La casa de los espíritus", 1982, 40);
zoo.agregarAnimal("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45);
zoo.agregarAnimal("Clarice", "Lispector", "Brasileña", "La hora de la estrella", 1977, 56);
zoo.agregarAnimal("Juan", "Rulfo", "Mexicano", "Pedro Páramo", 1955, 38);
zoo.agregarAnimal("Carlos", "Fuentes", "Mexicano", "La región más transparente", 1958, 29);
zoo.agregarAnimal("Eduardo", "Galeano", "Uruguayo", "Las venas abiertas de América Latina", 1971, 31);

// Generar la tabla de animales
zoo.generarTablaAnimales();

// Mostrar la cantidad de animales en la jaula 5 cuyo peso sea menor a 3 kg
document.getElementById("resultado1").textContent = "Autores Argentinos: " + zoo.contarAnimalesEnJaula5Menor3kg();

// Mostrar la cantidad de animales de tipo felinos entre las jaulas 2 y 5
document.getElementById("resultado2").textContent = "Publicaciones entre 1960 y 1980: " + zoo.contarFelinosEntreJaulas2y5();

// Mostrar el nombre del animal en la jaula 4 con peso menor a 120
document.getElementById("resultado3").textContent = "Promedio Edad de Publicaciones: " + zoo.listarNombreAnimalJaula4Menor120() + " años.";

document.getElementById("resultado4").textContent = "Lista de Autores: " + zoo.contarFelinosEntreJaulas2y50();
