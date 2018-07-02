import dedent from 'dedent';

/* eslint-disable import/prefer-default-export */
export const mentoringContents = {
  title: 'MENTORÍAS',
  description: dedent`
    Participa en reuniones con estudiantes y tómate un café para conversar respecto a la carrera, experiencias extracurriculares y/o, o decisiones profesionales.
  `,
  callToAction: {
    title: 'Formulario de inscripción',
    link: 'https://goo.gl/forms/w1wHTfHNZLHSvaok1',
  },
  expansions: [{
    header: '¿Cómo funciona?',
    content: dedent`
      1. Te inscribes [en este link](https://goo.gl/forms/w1wHTfHNZLHSvaok1) y rellenas el formulario.

      2. Te pondremos en contacto con estudiantes que estén interesados en hablar contigo sobre los temas que inscribas.

      3. Te reúnes con ellos :)
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
  }],
};
