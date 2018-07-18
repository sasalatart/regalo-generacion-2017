import dedent from 'dedent';

export const mentoringIntroduction = {
  title: 'Mentorías',
  description: [
    'Cuando tú estabas estudiando, ¿te habría gustado conversar con un ingeniero o ingeniera egresados de la UC para resolver tus dudas? ¡A varios de nosotros sí! Por esto mismo, te invitamos a participar de este proyecto si es que tienes ganas de reunirte con estudiantes a tomarse un café y conversar respecto a la carrera y experiencias extracurriculares, personales o profesionales.',
    'Creemos que un ex-estudiante es la persona perfecta para orientar en torno a qué especialidad tomar, cómo enfrentar dificultades personales o académicas, cómo participar en selecciones deportivas, irse de intercambio, entre tantas otras decisiones. Las experiencias que fueron importantes para ti, también lo son para las nuevas generaciones. Una simple conversación podría ayudar montones a un estudiante igual a como eras tú.',
  ],
  moreInfo: 'Más Información',
};

export const mentoringContents = {
  title: 'MENTORÍAS',
  description: dedent`
    Participa en reuniones con estudiantes y tómate un café para conversar respecto a la carrera, experiencias extracurriculares y/o, o decisiones profesionales.
  `,
  callToAction: {
    title: 'Quiero inscribirme',
    link: 'https://goo.gl/forms/w1wHTfHNZLHSvaok1',
  },
  expansions: [{
    header: '¿Cómo funciona?',
    content: dedent`
      1. Te inscribes rellenando un formulario.

      2. El formulario contendrá preguntas (cortas) acerca de tu motivación por participar en este proyecto, los temas que te interesan conversar, y una aproximación de en qué momento de este año (o del que viene) podrías participar en esto.

      3. Los estudiantes podrán ver tu perfil en una página web, para que podamos hacer un *match*.

      4. Te reúnes con ellos :)
    `,
  }, {
    header: '¿De qué tipo de temas puedo hacer mentorías?',
    content: dedent`
      ¡Cualquiera! Lo importante es que sientas que puedes ayudar a los estudiantes con ese tema, y te sientas cómodo(a) hablando al respecto.

      A continuación, algunos ejemplos:

      * Cómo estructurar la formación académica para formar un perfil interesante.

      * Realizar un posgrado.

      * Cómo lidiar con problemas personales mientras se es estudiante.

      * Postular a intercambio.

      * Vivir en otra ciudad una vez terminada la carrera.

      * Orientación sobre opciones laborales.

      * Tu tema
    `,
  }, {
    header: 'Cosas que debes saber antes de inscribirte',
    content: dedent`
      * Esta **no es una plataforma de reclutamiento**, por lo que se prohíbe registrarse y concretar reuniones de mentoría con el fin de reclutar estudiantes para la propia empresa del ex-estudiante, o para cualquier otra. No obstante, sí se busca que el mentor ofrezca guías, consejos y comparta experiencias para que el estudiante pueda enfrentar mejor sus procesos de búsqueda de práctica y/o primer trabajo. Así mismo, se espera que los estudiantes no utilicen la plataforma para solicitar prácticas o empleo.

      * Una vez que se hace el calce entre un estudiante y un mentor, se les enviará un correo electrónico para que puedan coordinar el primer encuentro. **Es deber del estudiante tomar la iniciativa para coordinar el primer encuentro**. Para esto debe enviar un email al mentor dentro de los primeros 10 días desde el calce.

      * Creemos que un encuentro tipo tiene una duración de 45 min a una hora. Sin embargo, esto dependerá de ustedes y de la conversación que tengan.

      * Si el ex-estudiante o el estudiante tiene un imprevisto, pueden acordar un nuevo encuentro, siempre que se notifique durante el día anterior o el mismo día. Si un estudiante o ex-estudiante cancela dos veces un mismo encuentro, entonces el equipo del programa evaluará su continuidad (entendiendo cancelar como dar aviso de inasistencia el día anterior o el mismo día del encuentro). Si un ex-estudiante o estudiante no asiste a un encuentro sin avisar ni dar explicación a la contraparte, será retirado del programa.

      * Tu nombre, motivaciones y tema a conversar aparecerán en una página web a la que tendrán acceso los estudiantes para explorar los distintos perfiles de personas con quienes pueden pedir mentorías. Esta información estará en la página por seis meses aproximadamente.

      * Las reuniones deben realizarse en un lugar público, como un café.
    `,
  }],
};
