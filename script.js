const specialFrogs = [
  {
    id: 7,
    name: "Cinder",
    type: "Rana especial de la mazmorra",
    rarity: "Legendaria",
    location: "Die in the Dungeon",
    image: "images/cinder.png",
    description: "Una presencia ardiente que marca el camino.",
    fact: "Una de las protagonistas especiales de esta Frogdex.",
    special: true
  },
  {
    id: 18,
    name: "Lisver",
    type: "Rana especial de la mazmorra",
    rarity: "Legendaria",
    location: "Die in the Dungeon",
    image: "images/lisver.png",
    description: "Silenciosa, precisa y difícil de ignorar.",
    fact: "Su ficha debería sentirse elegante y misteriosa.",
    special: true
  },
  {
    id: 33,
    name: "Mango",
    type: "Rana especial de la mazmorra",
    rarity: "Legendaria",
    location: "Die in the Dungeon",
    image: "images/mango.png",
    description: "Impredecible, brillante y peligrosamente encantadora.",
    fact: "Probablemente no estaba siguiendo el plan.",
    special: true
  },
  {
    id: 47,
    name: "Nera",
    type: "Rana especial de la mazmorra",
    rarity: "Legendaria",
    location: "Die in the Dungeon",
    image: "images/nera.png",
    description: "Pupila de Cinder. Sigue sus pasos por la mazmorra.",
    fact: "Todavía hay mucho misterio alrededor de ella.",
    special: true
  }
];

const normalFrogs = [
  {
    id: 1,
    name: "Rana de ojos rojos",
    type: "Rana arbórea",
    rarity: "Poco común",
    location: "Selvas de América Central",
    image: "images/frog-01.png",
    description: "Sus enormes ojos rojos sirven para asustar a los depredadores con un destello de color.",
    fact: "Duerme con los ojos cerrados y su camuflaje verde la hace casi invisible entre las hojas."
  },
  {
    id: 2,
    name: "Rana dardo dorada",
    type: "Rana venenosa",
    rarity: "Épica",
    location: "Selvas de Colombia",
    image: "images/frog-02.png",
    description: "La criatura más venenosa del planeta. Con tocarla es suficiente.",
    fact: "Un solo individuo produce suficiente veneno para matar a diez personas adultas."
  },
  {
    id: 3,
    name: "Sapo común europeo",
    type: "Sapo terrestre",
    rarity: "Común",
    location: "Europa y Asia",
    image: "images/frog-03.png",
    description: "El anfibio más reconocible de Europa. Lento, verrugoso y completamente inofensivo.",
    fact: "Puede vivir más de 40 años en cautividad. Probablemente te sobreviva."
  },
  {
    id: 4,
    name: "Rana toro americana",
    type: "Rana acuática",
    rarity: "Común",
    location: "América del Norte",
    image: "images/frog-04.png",
    description: "La rana más grande de América del Norte. Su croar resuena como el mugido de un toro.",
    fact: "Es una especie invasora en Europa y Asia, donde devora todo lo que encuentra a su paso."
  },
  {
    id: 5,
    name: "Rana de cristal",
    type: "Rana arbórea",
    rarity: "Rara",
    location: "Selvas de América del Sur",
    image: "images/frog-05.png",
    description: "Su piel ventral es completamente transparente. Se pueden ver sus órganos internos a simple vista.",
    fact: "Algunas especies pueden verse el corazón latiendo desde fuera. Literalmente."
  },
  {
    id: 6,
    name: "Rana tomate",
    type: "Rana terrestre",
    rarity: "Poco común",
    location: "Madagascar",
    image: "images/frog-06.png",
    description: "Redonda, naranja y brillante. Cuando se siente amenazada, se infla como un globo.",
    fact: "Segrega una sustancia pegajosa por la piel que puede causar reacciones alérgicas."
  },
  {
    id: 8,
    name: "Rana de musgo",
    type: "Rana arbórea",
    rarity: "Rara",
    location: "Vietnam y China",
    image: "images/frog-08.png",
    description: "Su piel está cubierta de protuberancias que imitan el musgo con una precisión inquietante.",
    fact: "Es tan buena camuflándose que los coleccionistas ilegales tardan horas en encontrarla aunque esté delante de ellos."
  },
  {
    id: 9,
    name: "Rana voladora de Wallace",
    type: "Rana planeadora",
    rarity: "Poco común",
    location: "Borneo y Malasia",
    image: "images/frog-09.png",
    description: "Tiene membranas entre los dedos tan grandes que puede planear de árbol en árbol.",
    fact: "Fue descubierta por Alfred Russel Wallace, el mismo que formuló la teoría de la evolución de forma independiente a Darwin."
  },
  {
    id: 10,
    name: "Rana Goliat",
    type: "Rana acuática",
    rarity: "Épica",
    location: "Camerún y Guinea Ecuatorial",
    image: "images/frog-10.png",
    description: "La rana más grande del mundo. Puede pesar más de tres kilos y medir 32 centímetros.",
    fact: "Construye sus propios estanques moviendo rocas de hasta dos kilos. Nadie sabe muy bien cómo."
  },
  {
    id: 11,
    name: "Sapo de Surinam",
    type: "Sapo acuático",
    rarity: "Poco común",
    location: "Amazonia",
    image: "images/frog-11.png",
    description: "Completamente plano como una hoja seca. Sus crías nacen directamente de los agujeros de su espalda.",
    fact: "La hembra lleva los huevos incrustados en la piel del dorso durante toda la gestación. Los sapos emergen ya formados."
  },
  {
    id: 12,
    name: "Rana morada de la India",
    type: "Rana fosororial",
    rarity: "Épica",
    location: "Montes Ghats, India",
    image: "images/frog-12.png",
    description: "Pasa casi todo el año bajo tierra. Sale solo dos semanas al año para reproducirse.",
    fact: "No fue descrita por la ciencia hasta 2003, a pesar de llevar 100 millones de años en el planeta."
  },
  {
    id: 13,
    name: "Rana de árbol de leche",
    type: "Rana arbórea",
    rarity: "Poco común",
    location: "Amazonia",
    image: "images/frog-13.png",
    description: "Verde con manchas marrones de joven, va volviéndose gris azulada con la edad.",
    fact: "Segrega una sustancia blanca lechosa cuando se estresa. De ahí su nombre."
  },
  {
    id: 14,
    name: "Rana de uñas africana",
    type: "Rana acuática",
    rarity: "Común",
    location: "África subsahariana",
    image: "images/frog-14.png",
    description: "Acuática, ágil y totalmente carente de lengua. Empuja la comida a la boca con las manos.",
    fact: "Fue el primer test de embarazo de la historia. Las mujeres embarazadas tienen una hormona que hace que estas ranas pongan huevos."
  },
  {
    id: 15,
    name: "Ranita de lluvia",
    type: "Rana fosororial",
    rarity: "Común",
    location: "Sudáfrica y Namibia",
    image: "images/frog-15.png",
    description: "Perfectamente redonda. Camina más de lo que salta y tiene cara de muy pocos amigos.",
    fact: "Solo sale de su madriguera cuando llueve. El resto del tiempo está bajo tierra sin hacer absolutamente nada."
  },
  {
    id: 16,
    name: "Rana verde australiana",
    type: "Rana arbórea",
    rarity: "Común",
    location: "Australia y Nueva Guinea",
    image: "images/frog-16.png",
    description: "Rolliza, tranquila y con una expresión permanente de satisfacción. Es la mascota no oficial de Australia.",
    fact: "Segrega una sustancia en la piel con propiedades antibacterianas y antivirales que están siendo estudiadas."
  },
  {
    id: 17,
    name: "Sapo marino",
    type: "Sapo terrestre",
    rarity: "Común",
    location: "América tropical",
    image: "images/frog-17.png",
    description: "El sapo más grande de América. Invasor, oportunista y tóxico para casi cualquier depredador.",
    fact: "Fue introducido en Australia para controlar plagas y se convirtió él mismo en una de las peores plagas del continente."
  },
  {
    id: 19,
    name: "Ranita de San Antón",
    type: "Rana arbórea",
    rarity: "Común",
    location: "Europa y Asia Menor",
    image: "images/frog-19.png",
    description: "Pequeña, verde brillante y con ventosas en los dedos que le permiten escalar superficies lisas.",
    fact: "En muchas culturas europeas se consideraba un barómetro viviente: si subía, buen tiempo; si bajaba, lluvia."
  },
  {
    id: 20,
    name: "Rana del Titicaca",
    type: "Rana acuática",
    rarity: "Épica",
    location: "Lago Titicaca, Perú y Bolivia",
    image: "images/frog-20.png",
    description: "Vive en uno de los lagos más altos del mundo. Su piel está llena de pliegues para absorber más oxígeno del agua.",
    fact: "Está críticamente amenazada. En los mercados locales se vende licuada como bebida energética, lo cual no ayuda."
  },
  {
    id: 21,
    name: "Rana fantasma del Cabo",
    type: "Rana torrencial",
    rarity: "Épica",
    location: "Montañas de Ciudad del Cabo, Sudáfrica",
    image: "images/frog-21.png",
    description: "Solo vive en los rápidos de montaña de una pequeña zona de Sudáfrica. Casi nadie la ha visto.",
    fact: "Sus renacuajos tienen ventosas en la boca para no ser arrastrados por la corriente. Son los mejores escaladores del mundo anfibio."
  },
  {
    id: 22,
    name: "Rana dardo azul de Azureus",
    type: "Rana venenosa",
    rarity: "Poco común",
    location: "Surinam",
    image: "images/frog-22.png",
    description: "Azul intenso con manchas negras. Uno de los animales más vistosos de la Amazonia.",
    fact: "Su veneno proviene de los insectos que come. En cautividad, sin esa dieta, pierden la toxicidad completamente."
  },
  {
    id: 23,
    name: "Sapo partero común",
    type: "Sapo terrestre",
    rarity: "Poco común",
    location: "Europa occidental",
    image: "images/frog-23.png",
    description: "El macho lleva los huevos enrollados en las patas traseras hasta que están listos para eclosionar.",
    fact: "Es el único anfibio europeo en el que el macho cuida de los huevos. Eso tiene mucho mérito."
  },
  {
    id: 24,
    name: "Rana toro africana",
    type: "Rana terrestre",
    rarity: "Poco común",
    location: "África subsahariana",
    image: "images/frog-24.png",
    description: "Agresiva, territorial y capaz de comerse casi cualquier cosa que quepa en su boca, incluidos ratones.",
    fact: "El macho custodia los renacuajos con ferocidad y llega a atacar a animales mucho más grandes para protegerlos."
  },
  {
    id: 25,
    name: "Rana de árbol de ojos blancos",
    type: "Rana arbórea",
    rarity: "Común",
    location: "Nueva Guinea y norte de Australia",
    image: "images/frog-25.png",
    description: "Una de las ranas arbóreas más grandes del mundo. Sus llamadas pueden oírse a kilómetros de distancia.",
    fact: "Tiene una franja blanca muy característica que va desde la boca hasta la cadera, como si llevara pintura de guerra."
  },
  {
    id: 26,
    name: "Rana dardo fresa",
    type: "Rana venenosa",
    rarity: "Poco común",
    location: "América Central",
    image: "images/frog-26.png",
    description: "Existe en más de 30 variantes de color. Roja, azul, verde, amarilla... todas venenosas.",
    fact: "La hembra transporta a cada renacuajo por separado hasta un charco de agua diferente. Hace decenas de viajes."
  },
  {
    id: 27,
    name: "Rana cohete",
    type: "Rana terrestre",
    rarity: "Rara",
    location: "Panamá",
    image: "images/frog-27.png",
    description: "Pequeña, ágil y capaz de saltar distancias diez veces su tamaño corporal.",
    fact: "Desapareció durante años y se creyó extinta. Fue redescubierta en 2016 en una zona que se había dado por perdida."
  },
  {
    id: 28,
    name: "Rana arbórea de Madagascar",
    type: "Rana arbórea",
    rarity: "Poco común",
    location: "Madagascar",
    image: "images/frog-28.png",
    description: "Madagascar tiene más de 300 especies de ranas, casi todas únicas en el mundo. Esta es una de las más llamativas.",
    fact: "El 99% de las ranas de Madagascar no existen en ningún otro lugar del planeta."
  },
  {
    id: 29,
    name: "Sapo de espuelas ibérico",
    type: "Sapo fosororial",
    rarity: "Poco común",
    location: "Península Ibérica",
    image: "images/frog-29.png",
    description: "Tiene un tubérculo córneo en cada pie trasero que usa para enterrarse en la arena hacia atrás.",
    fact: "Puede pasar meses enterrado sin comer esperando la lluvia. Es básicamente un experto en esperar."
  },
  {
    id: 30,
    name: "Rana rugosa japonesa",
    type: "Rana torrencial",
    rarity: "Poco común",
    location: "Japón y Corea",
    image: "images/frog-30.png",
    description: "Su piel rugosa y áspera le da una apariencia casi pétrea. Se confunde fácilmente con una roca mojada.",
    fact: "Es una de las pocas ranas del mundo que tiene dimorfismo sexual en el color: los machos son verdes y las hembras marrones."
  },
  {
    id: 31,
    name: "Rana pintada ibérica",
    type: "Rana discoglosal",
    rarity: "Común",
    location: "Península Ibérica",
    image: "images/frog-31.png",
    description: "Pequeña y de movimientos rápidos, con un patrón de colores que varía mucho entre individuos.",
    fact: "Tiene la lengua en forma de disco, característica de su familia, muy diferente a la lengua lanzadera del resto de ranas."
  },
  {
    id: 32,
    name: "Rana planeadora de Borneo",
    type: "Rana planeadora",
    rarity: "Rara",
    location: "Borneo",
    image: "images/frog-32.png",
    description: "Verde brillante con membranas interdigitales rojas. Una de las más espectaculares de Asia.",
    fact: "Puede planear más de 15 metros entre árboles inclinando el cuerpo para controlar la dirección del vuelo."
  },
  {
    id: 34,
    name: "Rana cornuda de Pac-Man",
    type: "Rana terrestre",
    rarity: "Poco común",
    location: "Argentina y Uruguay",
    image: "images/frog-34.png",
    description: "Redonda, enorme y con una boca que ocupa prácticamente toda su cara. Come todo lo que puede.",
    fact: "Ha mordido dedos de investigadores con suficiente fuerza como para dejar marca. No discrimina en tamaño de presa."
  },
  {
    id: 35,
    name: "Rana dorada de Madagascar",
    type: "Rana venenosa",
    rarity: "Épica",
    location: "Madagascar",
    image: "images/frog-35.png",
    description: "Naranja brillante y extremadamente tóxica. Solo vive en una pequeña zona de la isla.",
    fact: "Está críticamente amenazada. Se estima que quedan menos de 1.000 individuos en libertad."
  },
  {
    id: 36,
    name: "Rana toro de Cuba",
    type: "Rana arbórea",
    rarity: "Poco común",
    location: "Cuba y Florida",
    image: "images/frog-36.png",
    description: "La rana arbórea más grande de América del Norte. Come otras ranas, ratones y murciélagos.",
    fact: "Es invasora en Florida, donde ha devastado poblaciones locales de anfibios. Nadie la invitó."
  },
  {
    id: 37,
    name: "Ranita meridional",
    type: "Rana arbórea",
    rarity: "Común",
    location: "Sur de Europa y norte de África",
    image: "images/frog-37.png",
    description: "Prima mediterránea de la ranita de San Antón. Más discreta pero igual de ágil.",
    fact: "Se comunica hinchando dos sacos vocales a los lados de la boca que pueden ser más grandes que su propia cabeza."
  },
  {
    id: 38,
    name: "Sapo corredor",
    type: "Sapo terrestre",
    rarity: "Común",
    location: "Europa occidental",
    image: "images/frog-38.png",
    description: "A diferencia de la mayoría de anfibios, corre en lugar de saltar. También es el más ruidoso de Europa.",
    fact: "Es uno de los pocos sapos capaces de vivir en dunas de arena y terrenos muy secos para un anfibio."
  },
  {
    id: 39,
    name: "Rana de dedos de disco gigante",
    type: "Rana arbórea",
    rarity: "Poco común",
    location: "China y Vietnam",
    image: "images/frog-39.png",
    description: "Una de las ranas arbóreas más grandes de Asia. Sus ventosas la permiten trepar por superficies completamente verticales.",
    fact: "Sus puestas de huevos se depositan en nidos de espuma sobre el agua. Cuando los renacuajos nacen, caen directamente al estanque."
  },
  {
    id: 40,
    name: "Rana arbórea esplendorosa",
    type: "Rana arbórea",
    rarity: "Rara",
    location: "Australia occidental",
    image: "images/frog-40.png",
    description: "Una de las ranas más hermosas de Australia, con manchas blancas sobre fondo verde intenso.",
    fact: "Tiene glándulas especiales detrás de los ojos que producen una sustancia con potencial antibacteriano aún en estudio."
  },
  {
    id: 41,
    name: "Rana nariz de cerdo",
    type: "Rana fosororial",
    rarity: "Poco común",
    location: "África subsahariana",
    image: "images/frog-41.png",
    description: "Su hocico puntiagudo y curvado hacia abajo le sirve para excavar en la tierra. No se parece en nada a una rana típica.",
    fact: "Excava hacia adelante en lugar de hacia atrás, lo que la convierte en la única rana del mundo que lo hace así."
  },
  {
    id: 42,
    name: "Rana hoja planeadora",
    type: "Rana planeadora",
    rarity: "Poco común",
    location: "Costa Rica y Panamá",
    image: "images/frog-42.png",
    description: "Pariente de la rana de ojos rojos, pero con la habilidad extra de planear entre los árboles.",
    fact: "Forma grupos reproductores masivos de cientos de individuos durante una sola noche de lluvia."
  },
  {
    id: 43,
    name: "Rana de lluvia del Cabo",
    type: "Rana fosororial",
    rarity: "Rara",
    location: "Ciudad del Cabo, Sudáfrica",
    image: "images/frog-43.png",
    description: "Extremadamente redonda y con una expresión perpetua de disgusto. Solo emerge con lluvias fuertes.",
    fact: "El macho solo mide la mitad que la hembra. Se agarra a ella con una secreción pegajosa durante el apareamiento."
  },
  {
    id: 44,
    name: "Rana herrero",
    type: "Rana arbórea",
    rarity: "Común",
    location: "Brasil y Argentina",
    image: "images/frog-44.png",
    description: "Su llamada suena exactamente como un martillo golpeando yunque. En épocas de lluvia puede escucharse desde lejos.",
    fact: "El macho construye un nido de barro en forma de cuenco en la orilla de ríos para que los huevos no sean arrastrados."
  },
  {
    id: 45,
    name: "Rana de bambú",
    type: "Rana arbórea",
    rarity: "Común",
    location: "Sudeste Asiático",
    image: "images/frog-45.png",
    description: "Verde pálida con manchas, vive en la vegetación densa cerca del agua. Muy común en arrozales.",
    fact: "En Tailandia y Laos es una fuente de proteína importante. Se consume frita o en sopas."
  },
  {
    id: 46,
    name: "Sapo de Surinam plano",
    type: "Sapo acuático",
    rarity: "Poco común",
    location: "Norte de América del Sur",
    image: "images/frog-46.png",
    description: "Prima pequeña del Sapo de Surinam. Igual de plana, igual de extraña, pero más discreta.",
    fact: "Pasa toda su vida bajo el agua. Sus pulmones son tan pequeños que si intenta salir a la superficie se marea."
  },
  {
    id: 48,
    name: "Ranita ibérica",
    type: "Rana torrencial",
    rarity: "Poco común",
    location: "Noroeste de la Península Ibérica",
    image: "images/frog-48.png",
    description: "Pequeña y marrón, vive exclusivamente en ríos de montaña fríos y bien oxigenados.",
    fact: "Es endémica de la Península Ibérica. Si el clima sigue cambiando y los ríos se calientan, no tendrá a dónde ir."
  },
  {
    id: 49,
    name: "Rana verde ibérica",
    type: "Rana acuática",
    rarity: "Común",
    location: "Península Ibérica",
    image: "images/frog-49.png",
    description: "La rana más común de España y Portugal. Verde, ruidosa y permanentemente en o cerca del agua.",
    fact: "Su canto es tan intenso y constante en verano que en algunas zonas rurales se considera una plaga acústica."
  },
  {
    id: 50,
    name: "Rana hoja esplendorosa",
    type: "Rana arbórea",
    rarity: "Rara",
    location: "Colombia y Ecuador",
    image: "images/frog-50.png",
    description: "Verde con manchas anaranjadas y ojos de un naranja vivo. Una de las más llamativas de América del Sur.",
    fact: "Cuando duerme, se dobla sobre sí misma ocultando los colores llamativos y pareciendo completamente una hoja verde."
  }
];

const frogs = [];

for (let id = 1; id <= 50; id++) {
  const special = specialFrogs.find((frog) => frog.id === id);
  const normal = normalFrogs.find((frog) => frog.id === id);

  if (special) {
    frogs.push(special);
  } else if (normal) {
    frogs.push(normal);
  } else {
    frogs.push({
      id,
      name: `Rana misteriosa #${id}`,
      type: "Rana del mundo",
      rarity: "Común",
      location: "Hábitat por investigar",
      image: "images/placeholder-frog.png",
      description: "Todavía falta completar la ficha de esta rana.",
      fact: "Aquí irá una curiosidad real cuando recopilemos información."
    });
  }
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, duration, type = "square", gainVal = 0.15, delay = 0) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
  gain.gain.setValueAtTime(gainVal, audioCtx.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + duration);
  osc.start(audioCtx.currentTime + delay);
  osc.stop(audioCtx.currentTime + delay + duration);
}

function soundOpen(special = false) {
  playSfx("sfx_ui_window_open.wav", 0.7);
  if (special) {
    [330, 440, 550, 660, 880].forEach((f, i) => playTone(f, 0.18, "square", 0.12, i * 0.06));
  }
}

function soundClose() {
  playSfx("sfx_ui_window_close.wav", 0.7);
}

function soundRegister(special = false) {
  playSfx("sfx_ui_click.wav", special ? 1.0 : 0.7, special ? 0.2 : 0);
}

function soundHover(found, special) {
  playSfx("sfx_ui_hover.wav", 3.0, special ? 0.15 : 0.05);
}

function soundVictory() {
  const notes = [
    [330, 0], [330, 0.1], [330, 0.2],
    [262, 0.3], [330, 0.4], [392, 0.5],
    [196, 0.75]
  ];
  notes.forEach(([freq, delay]) => playTone(freq, 0.18, "square", 0.18, delay));

  // acorde final brillante
  [523, 659, 784].forEach((f, i) => playTone(f, 0.5, "square", 0.14, 1.0 + i * 0.05));
}

function soundRemove() {
  playSfx("sfx_ui_click.wav", 0.5, 0);
}

const profesapo = {
  id: 0,
  name: "Profesapo",
  type: "Rana legendaria secreta",
  rarity: "Única",
  location: "La mazmorra entera",
  image: "images/placeholder-frog.png",
  description: "El guardián de la Frogdex. Te ha estado observando desde el principio.",
  fact: "Dice que tiene algo para ti... pero que aún no es el momento.",
  special: true
};

const removeFrogButton = document.getElementById("remove-frog");
const grid = document.getElementById("frog-grid");
const foundCount = document.getElementById("found-count");
const frogModal = document.getElementById("frog-modal");
const tutorialModal = document.getElementById("tutorial-modal");
const reporterToast = document.getElementById("reporter-toast");
const reporterMessage = document.getElementById("reporter-message");
const confirmModal = document.getElementById("confirm-modal");
const confirmText = document.getElementById("confirm-text");
const cancelConfirm = document.getElementById("cancel-confirm");
const acceptConfirm = document.getElementById("accept-confirm");

let pendingFrog = null;
let currentFrog = null;
const victoryModal = document.getElementById("victory-modal");

let foundFrogs = (() => {
  const raw = JSON.parse(localStorage.getItem("foundFrogs")) || [];
  // migrar formato antiguo (array de números) al nuevo (array de objetos)
  return raw.map(entry => typeof entry === "number" ? { id: entry, foundAt: null } : entry);
})();

function isFound(id) { return foundFrogs.some(e => e.id === id); }
function getFoundAt(id) { return foundFrogs.find(e => e.id === id)?.foundAt ?? null; }

function formatFoundAt(isoString) {
  if (!isoString) return null;
  const d = new Date(isoString);
  return d.toLocaleString("es-ES", {
    day: "numeric", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit"
  });
}

function saveProgress() {
  localStorage.setItem("foundFrogs", JSON.stringify(foundFrogs));
}

function updateCounter() {
  foundCount.textContent = foundFrogs.length;
}

function renderGrid() {
  grid.innerHTML = "";

  const allFrogs = localStorage.getItem("profesapoUnlocked") ? [profesapo, ...frogs] : frogs;

  allFrogs.forEach((frog) => {
    const button = document.createElement("button");
    button.className = "frog-card";

    if (frog.special) button.classList.add("special");
    if (frog.id === 0) button.classList.add("profesapo");
    if (isFound(frog.id)) button.classList.add("found");

    button.innerHTML = `
  <span class="frog-number">#${frog.id}</span>
  <span class="frog-icon">
    ${
      isFound(frog.id)
        ? (frog.special ? "✨" : "🐸")
        : "?"
    }
  </span>
`;

    button.addEventListener("click", () => findFrog(frog));

    if (window.matchMedia("(hover: hover)").matches) {
      button.addEventListener("mouseenter", () => soundHover(isFound(frog.id), frog.special));
    }

    grid.appendChild(button);
  });
}

//Finding a frog now also checks if it's already found, and if so, just opens the modal without asking to mark it again.
function findFrog(frog) {
  const wasAlreadyFound = isFound(frog.id);

  if (wasAlreadyFound) {
    openFrogModal(frog);
    return;
  }

  pendingFrog = frog;

  if (frog.special) {
    confirmText.textContent = `⚠️ Esta rana es diferente... ¿Registrar a ${frog.name}?`;
  } else {
    confirmText.textContent = `¿Quieres registrar la rana #${frog.id} en la Frogdex?`;
  }

  confirmModal.classList.remove("hidden");
}

function closeConfirmModal() {
  pendingFrog = null;
  confirmModal.classList.add("hidden");
}

cancelConfirm.addEventListener("click", closeConfirmModal);

acceptConfirm.addEventListener("click", () => {
  if (!pendingFrog) return;

  foundFrogs.push({ id: pendingFrog.id, foundAt: new Date().toISOString() });
  saveProgress();
  updateCounter();
  renderGrid();
  showReporter(`✔ Rana #${pendingFrog.id} registrada en la Frogdex.`, "success");
  soundRegister(pendingFrog.special);
  setTimeout(() => reportProgress(foundFrogs.length, pendingFrog), 3000);
  openFrogModal(pendingFrog);

  closeConfirmModal();
});

removeFrogButton.addEventListener("click", () => {
  if (!currentFrog) return;

  if (!isFound(currentFrog.id)) return;

  foundFrogs = foundFrogs.filter(e => e.id !== currentFrog.id);

  saveProgress();
  updateCounter();
  renderGrid();

  frogModal.classList.add("hidden");

  soundRemove();
  showReporter(`✖ Rana #${currentFrog.id} eliminada del registro.`, "danger");
});

function openFrogModal(frog) {
    currentFrog = frog; 

    const modalCard = document.querySelector("#frog-modal .modal-card");

    if (isFound(frog.id)) {
        removeFrogButton.textContent = "Quitar rana";
        removeFrogButton.disabled = false;
    } else {
        removeFrogButton.textContent = "No registrada";
        removeFrogButton.disabled = true;
    }
    if (frog.special) {
        modalCard.classList.add("special");
    } else {
        modalCard.classList.remove("special");
    }

    document.getElementById("frog-image").src = frog.image;
    document.getElementById("frog-image").alt = frog.name;
    document.getElementById("frog-rarity").textContent = `Rareza: ${frog.rarity}`;
    document.getElementById("frog-name").textContent = frog.name;
    document.getElementById("frog-type").textContent = `Tipo: ${frog.type}`;
    document.getElementById("frog-location").textContent = `Vive en: ${frog.location}`;
    document.getElementById("frog-description").textContent = frog.description;
    document.getElementById("frog-fact").textContent = `Dato: ${frog.fact}`;

    const foundAtEl = document.getElementById("frog-found-at");
    const foundAtStr = formatFoundAt(getFoundAt(frog.id));
    foundAtEl.textContent = foundAtStr ? `Encontrada el ${foundAtStr}` : "";
    foundAtEl.style.display = foundAtStr ? "block" : "none";

    frogModal.classList.remove("hidden");
    soundOpen(frog.special);
}

function reportProgress(count, frog) {
  let messages = [];

  if (frog.special) {
    messages.push(`🛑 ALERTA: ${frog.name} ha sido registrada en la Frogdex.`);
  }

  if (count === 1) {
    messages.push("Primera rana encontrada.");
  } else if (count === 5) {
    messages.push("Ya van 5 ranas.");
  } else if (count === 10) {
    messages.push("10 ranas localizadas.");
  } else if (count === 25) {
    messages.push("Mitad del caso resuelta.");
  } else if (count === 40) {
    messages.push("40 ranas encontradas.");
  } else if (count === 50) {
    messages.push("Las 50 ranas han sido encontradas.");
    setTimeout(() => {
      victoryModal.classList.remove("hidden");
      soundVictory();
    }, 2800);
  }

  if (messages.length) {
    showReporter(messages.join(" "));
  }
}

function showReporter(message, type = "normal") {
  reporterToast.classList.remove("success", "danger", "normal");
  reporterToast.classList.add(type);

  reporterMessage.textContent = message;
  reporterToast.classList.remove("hidden");

  setTimeout(() => {
    reporterToast.classList.add("hidden");
  }, 6500);
}

document.querySelectorAll("[data-close-frog]").forEach((button) => {
  button.addEventListener("click", () => {
    frogModal.classList.add("hidden");
    soundClose();
  });
});

document.getElementById("close-victory").addEventListener("click", () => {
  victoryModal.classList.add("hidden");
  localStorage.setItem("profesapoUnlocked", "true");
  renderGrid();
  setTimeout(() => {
    showReporter("🐸 ¡Profesapo ha aparecido en el grid!");
  }, 300);
});

const sfx = {};

["benignumcroak1.ogg", "sfx_ui_hover.wav", "sfx_ui_click.wav", "sfx_ui_window_open.wav", "sfx_ui_window_close.wav"].forEach(file => {
  fetch(`sfx/${file}`)
    .then(r => r.arrayBuffer())
    .then(buf => audioCtx.decodeAudioData(buf))
    .then(decoded => { sfx[file] = decoded; });
});

function playSfx(file, volume = 1.0, pitchVariance = 0) {
  const buf = sfx[file];
  if (!buf) return;
  const src = audioCtx.createBufferSource();
  const gain = audioCtx.createGain();
  src.buffer = buf;
  src.playbackRate.value = 1 + (Math.random() - 0.5) * pitchVariance;
  gain.gain.value = volume;
  src.connect(gain);
  gain.connect(audioCtx.destination);
  src.start();
}

function playCharCroak() {
  playSfx("benignumcroak1.ogg", 0.35, 0.4);
}

const tutorialLines = [
  "Bienvenida a la Frogdex de la mazmorra.",
  "Hay 50 mini ranas escondidas.",
  "Algunas son del mundo real.",
  "Otras pertenecen a esta mazmorra.",
  "Toca una rana para registrarla y desbloquear su ficha."
];

let typewriterCancel = null;

function runTypewriter() {
  const container = document.getElementById("tutorial-lines");
  const startButton = document.getElementById("tutorial-start-button");
  const sprite = document.getElementById("tutorial-sprite");
  container.innerHTML = "";
  startButton.classList.add("hidden");

  let lineIndex = 0;
  let charsSinceLastCroak = 0;
  let activeInterval = null;
  let cancelled = false;

  typewriterCancel = () => {
    cancelled = true;
    clearInterval(activeInterval);
    sprite.classList.remove("talking");
  };

  function typeLine(text, onDone) {
    const p = document.createElement("p");
    container.appendChild(p);
    let i = 0;
    sprite.classList.add("talking");
    activeInterval = setInterval(() => {
      if (cancelled) return;
      const ch = text[i++];
      p.textContent += ch;
      if (ch !== " ") {
        charsSinceLastCroak++;
        if (charsSinceLastCroak >= 3) {
          playCharCroak();
          charsSinceLastCroak = 0;
        }
      }
      if (i >= text.length) {
        clearInterval(activeInterval);
        p.classList.add("done");
        sprite.classList.remove("talking");
        onDone();
      }
    }, 38);
  }

  function nextLine() {
    if (cancelled) return;
    if (lineIndex >= tutorialLines.length) {
      startButton.classList.remove("hidden");
      startButton.addEventListener("mouseenter", () => playSfx("sfx_ui_hover.wav", 3.0), { passive: true });
      startButton.addEventListener("click", () => playSfx("sfx_ui_click.wav", 0.9), { once: true });
      return;
    }
    typeLine(tutorialLines[lineIndex++], () => setTimeout(nextLine, 220));
  }

  nextLine();
}

document.querySelectorAll("[data-close-tutorial]").forEach((button) => {
  button.addEventListener("mouseenter", () => playSfx("sfx_ui_hover.wav", 3.0), { passive: true });
  button.addEventListener("click", () => {
    if (typewriterCancel) typewriterCancel();
    playSfx("sfx_ui_window_close.wav", 0.7);
    tutorialModal.classList.add("fading");
    setTimeout(() => {
      tutorialModal.classList.add("hidden");
      tutorialModal.classList.remove("fading");
    }, 400);
    localStorage.setItem("tutorialSeen", "true");
  });
});

document.getElementById("reset-button").addEventListener("click", () => {
  foundFrogs = [];
  saveProgress();
  localStorage.removeItem("profesapoUnlocked");
  updateCounter();
  renderGrid();
  showReporter("El caso ha sido reiniciado. Nadie recuerda nada. Excepto yo.");
});

document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key === "F") {
    foundFrogs = frogs.map(f => ({ id: f.id, foundAt: new Date().toISOString() }));
    saveProgress();
    updateCounter();
    renderGrid();
    showReporter("🛠 Modo test: todas las ranas marcadas.");
    reportProgress(50, frogs[frogs.length - 1]);
  }

  if (e.shiftKey && e.key === "R") {
    localStorage.clear();
    location.reload();
  }
});

if (!localStorage.getItem("tutorialSeen")) {
  tutorialModal.classList.remove("hidden");

  const tapPrompt = document.getElementById("tutorial-tap");
  tapPrompt.addEventListener("click", () => {
    audioCtx.resume().then(() => {
      tapPrompt.style.display = "none";
      runTypewriter();
    });
  }, { once: true });
}

updateCounter();
renderGrid();