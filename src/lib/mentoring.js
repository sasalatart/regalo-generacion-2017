import dedent from 'dedent';

export const mentoringIntroduction = {
  title: 'Mentorías',
  subtitle: 'Comparte tus experiencias con un estudiante',
  description: [
    'Cuando tú estabas estudiando, ¿te habría gustado conversar con un ingeniero o ingeniera egresados de la UC para resolver tus dudas? ¡A varios de nosotros sí! Por esto mismo, te invitamos a participar de este proyecto si es que tienes ganas de reunirte con estudiantes a tomarse un café y conversar respecto a la carrera y experiencias extracurriculares o profesionales.',
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

      2. El formulario contendrá preguntas (cortas) acerca de tu motivación por participar en este proyecto y los temas que te interesan conversar.

      3. Quedas inscrito/a en el plan piloto de Mentorías Exalumnos para a iniciar el 1º Semestre 2019.
    `,
  }, {
    header: '¿De qué tipo de temas puedo hacer mentorías?',
    content: dedent`
      Cualquiera en que sientas que puedes apoyar con tu experiencia como estudiante o profesional. A continuación algunos ejemplos:

      * Realizar un postgrado

      * Realizar un intercambio

      * Cómo estructurar la formación académica curricular

      * Crear redes de contacto

      * Equilibrio entre trabajo y vida personal

      * Emprender
    `,
  }, {
    header: 'Cosas que debes saber antes de inscribirte',
    content: dedent`
      * El programa Mentoría Exalumno tiene como objetivo mostrar el rol del Ingeniero y acercar el mundo laboral en el que éste se desenvuelve a los alumnos de la Escuela de Ingeniería de la Pontificia Universidad Católica de Chile. Además, busca contribuir en el desarrollo personal del alumno, a través de la construcción de una relación con un mentor ingeniero que lo apoye en áreas de desarrollo profesional y académico.

      * El programa tiene como duración un semestre académico y deben tener como mínimo dos encuentros entre mentor-alumno durante dicho semestre o el equivalente a 2-4 hrs. Los encuentros se deben realizar en un espacio público definido de común acuerdo entre las partes, como por ejemplo, en la empresa donde trabaja el mentor, cafeterías, entre otros.

      * Ambas partes, tanto mentor como alumno, aceptan participar y tomar el compromiso que involucra el Programa de Mentoría Ingeniería UC.

      * En el caso del mentor, éste se compromete a:
        * Realizar el esfuerzo de llevar a cabo dos encuentros de manera individual con su(s) alumno(s).
        * Enviar a su(s) alumno(s) el primer email de contacto una vez realizada la asignación.
        * Resolver las dudas y plantear temas en relación a los temas de interés que eligió en su ficha y/u otros temas que considere relevantes.
        * Registrar cada encuentro en la plataforma (disponible 1º Semestre 2019) una vez concretado.
        * Al finalizar las mentorías, debe completar la "Encuesta Final" para evaluar el programa.

      * El no cumplimiento de los puntos tratados con anterioridad no conlleva sanciones de por medio. Sin embargo, existe una consecuencia ética, debido a que la oportunidad que le es entregada a los alumnos, debe ser aprovechada oportunamente por ellos.
    `,
  }],
};
