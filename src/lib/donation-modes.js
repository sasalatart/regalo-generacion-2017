import dedent from 'dedent';

const teachingContents = {
  title: 'GOing',
  description: dedent`
    En los primeros años de carrera, algunos estudiantes requieren apoyo académico adicional. La demanda por apoyo académico es muy alta. Las ayudantías tradicionales y la Sala de Ayudantes cumplen un rol fundamental, pero son insuficientes.

    A través de GOing podrás donar tus horas para hacer tutorías de un ramo desde el 2018-2 y ayudar a cubrir esta brecha.
  `,
  callToAction: {
    title: 'Quiero inscribirme',
    link: 'https://goo.gl/forms/v8C57ZpADald5f3w2',
  },
  expansions: [{
    header: '¿Cómo funciona?',
    content: dedent`
      * Te inscribes y declaras los ramos de ciencias básicas en los que eres competente y las horas que estás dispuesto a donar el segundo semestre del 2018.

      * Durante el segundo semestre del 2018 deberás especificar tu disponibilidad horaria calendarizada, y los estudiantes se inscribirán en una lista de espera según la disponibilidad horaria de todos los tutores.

      * Con esta información, se hará un “match” para coordinar la reunión, poniendo en contacto al estudiante con el ex-alumno o ex-alumna.
    `,
  }, {
    header: '¿Por qué es importante?',
    content: dedent`
      En el contexto del Regalo de Generación de los titulados de la Escuela de Ingeniería UC el año 2016, surge la idea de diversificar los mecanismos de donación.

      > Según una encuesta oficial realizada el año 2017 a los estudiantes de Talento + Inclusión de la Escuela de Ingeniería, un 83% puso nota 5 o superior (rango de 1 a 7) a la iniciativa de que los egresados entreguen apoyo académico a los alumnos a través de tutorías académicas.

      Durante el último tiempo esta iniciativa se extendió para apoyar a todos los estudiantes de la Escuela.
    `,
  }, {
    header: 'Más información',
    content: dedent`
      GOing ayudará a cubrir la brecha académica que enfrentan los estudiantes durante sus primeros dos años de carrera. Las tutorías por parte de ex-alumnos sería una ampliación de un sistema de tutorías voluntarias que se encuentra en desarrollo.

      En primera instancia, las tutorías comprenderán los ramos de ciencias básicas y fundamentos de la Ingeniería: Cálculo, Álgebra Lineal, Estática y Dinámica, Termodinámica y Programación.

      GOing se creó durante el segundo semestre del 2017 por parte de alumnos en conjunto con la Escuela, con el fin de institucionalizar la idea de tutorías académicas voluntarias.
    `,
  }],
};

const studyMateriaContents = {
  title: 'DONA TU MATERIAL DE ESTUDIO',
  description: dedent`
    Hoy existe una sobre demanda persistente de libros y herramientas de estudio por parte de los estudiantes que lo necesitan.

    Esta opción busca apoyar con material de estudio -que probablemente ya no usas- a los estudiantes de T+I para que siempre cuenten con lo necesario y así aportar a disminuir la brecha académica de los primeros años.
  `,
  callToAction: {
    title: 'Quiero inscribirme',
    link: 'https://goo.gl/forms/awrxrPqjYJBwqRre2',
  },
  expansions: [{
    header: '¿Cómo funciona?',
    content: dedent`
      * Inscribes los materiales de estudio a donar y tus datos de contacto (email y número de teléfono).

      * Un encargado se pondrá en contacto para coordinar la recolección. Puedes facilitar la coordinación enviando o trayendo los materiales directamente a la Escuela de Ingeniería.
    `,
  }, {
    header: '¿Por qué es importante?',
    content: dedent`
      Existe una gran diferencia en el desempeño académico entre los estudiantes de Talento + Inclusión en los primeros dos años de la carrera. Una de las razones es el acceso a material y herramientas de estudio.

      > De todos los encuestados durante el 2017 [54% de los estudiantes de T+I], el 86% valoró con nota 5 o superior la opción de recibir material de estudio. Por lo que tu aporte en material de estudio es importante para la mayoría de los alumnos.
    `,
  }],
};

const monetaryContents = {
  title: 'APORTE MONETARIO',
  description: dedent`
    Tu aporte será destinado a Fondos de Manutención con el fin de que no se vean obligados(as) a trabajar -y estudiar paralelamente- para cubrir estas necesidades, y así no verse afectados académicamente.

    > De todos los encuestados durante el 2017 [54% de los estudiantes de T+I], el 52% de ellos no cuenta con recursos económicos suficientes para cubrir al menos una necesidad básica (alimentación, transporte, residencia y salud), y el 35% ha trabajado para cubrir alguna de éstas
  `,
  callToAction: {
    title: 'Donar recursos',
    link: 'https://www.webpay.cl/portalpagodirecto/pages/institucion.jsf?idEstablecimiento=72395',
  },
  expansions: [{
    header: '¿Cómo donar?',
    content: dedent`
      Elige un fondo a cuál donar:

      # Pago Webpay

      1. Ingresa a este [link](https://www.webpay.cl/portalpagodirecto/pages/institucion.jsf?idEstablecimiento=72395) y presiona pagar a un lado de “Programa Talento más Inclusión”

      2. Ingresa tus datos y en identificación del pago indica alguno de los siguientes fondos:

        * Regalo Generación 2017 – Fondo Manutención

        * Regalo Generación 2017 – Fondo Ayuda y Campamento

      3. Presiona aceptar, selecciona tarjeta de crédito o cuenta corriente y sigue las instrucciones de tu banco.

      # Transferencia Bancaria

      1. Ingresa a la página web o aplicación de tu banco

      2. Selecciona transferencia bancaria e indica tu monto a donar

      3. Transferir a esta cuenta:

        * **Nombre**: Pontificia Universidad Católica de Chile

        * **RUT**: 81.698.900-0

        * **Banco**: Banco Santander

        * **Tipo Cuenta**: Cuenta Corriente

        * **Nº Cuenta**: 0-074-0100683-9

        * **Correo**: becas@ing.puc.cl

        * **Mensaje**: "Regalo Generación 2017 – Fondo Manutención" ó "Regalo Generación 2017 – Fondo Ayuda y Campamento" (¡tú decides a qué fondo va!)

      # Otros

      * El donante recibirá dos reportes al email con un detalle en lo que se ha utilizado el dinero, transparentando los conceptos y montos:

        * El primer reporte se entregará al finalizar el primer semestre.

        * El segundo reporte se entregará al finalizar el segundo semestre.

      Cualquier duda sobre los destinos del dinero la puede hacer directamente por email a **becas@ing.puc.cl**.

      Si quieres realizar donaciones recurrentes con mandatos PAC o PAT, solicita el mandato a **becas@ing.puc.cl**.
    `,
  }, {
    header: '¿Por qué es importante?',
    content: dedent`
      Una encuesta contestada por el 54% de los alumnos T+I (311 de 581)  arrojó que más de la mitad de los encuestados ha presentado problemas para cubrir necesidades básicas y más de un tercio ha tenido que trabajar para compensarlas. Además, algunos alumnos incurren en gastos importantes ante situaciones de emergencias de salud. Por eso, sería un aporte contar con un fondo especialmente reservado para ayuda de estudiantes.

      Además de tener que cubrir estas necesidades, también incurren en gastos importantes ante situaciones de emergencias de salud. Por eso, el Fondo de ayuda Talento e Inclusión es un gran aporte, principalmente para que los estudiantes cuenten con un apoyo en caso de presentar problemas inesperados o emergencias.
    `,
  }, {
    header: 'Más información',
    content: dedent`
      # Tipos de fondos

      ### Becas de Manutención:

      * Establecimos una beca mensual para un alumno de $30.000 para cubrir sus necesidades de mantención.

      * El 79% de los encuestados que reportaron necesidades en alimentación y transporte se verían satisfechos con este monto.

      * Nos gustaría lograr al menos 5 becas anuales para el próximo año (2019). En 10 meses, esto es $1.500.000.

      ### Fondo de Ayuda Talento e Inclusión:

      * El 43% de los alumnos encuestados del programa Talento e Inclusión ha presentado alguna vez durante su estadía en la universidad un problema relacionado a la salud.

      * El 68% de los novatos 2017 de región encuestados reportaron necesidades en residencia durante este año.

      * Nos gustaría alcanzar una primera meta de $2.500.000 para este fondo.

      # Tipos de donación

      ### Donación recurrente (Requieren rellenar un mandato. ¡Es muy sencillo!)

      * PAC – Pago Automático con Cuenta Corriente

      * PAT – Pago Automático con Tarjeta de Crédito

      * Interesados mandato a firmar a becas@ing.puc.cl

      ### Donación única

      Mediante transferencia bancaria o WebPay (Tarjeta de crédito o cuenta corriente)

      ### Montos sugeridos

      Te sugerimos los siguientes montos a donar para cada fondo. Sin embargo, puedes donar lo que quieras y puedas. Le estarás cambiando la vida a un estudiante del programa.

      #### Becas de Manutención

      * $7.500 – Un cuarto de Beca

      * $15.000 – Media Beca

      * $30.000 – Beca Completa

      * Otro

      #### Fondo de Ayuda Talento e Inclusión

      * $10.000 – Si somos 250 compañeros donando esto alcanzaremos la 1ª meta

      * $20.000 – Si somos 125 compañeros donando esto alcanzaremos la 1ª meta

      * $50.000 – Si somos 50 compañeros donando esto alcanzaremos la 1ª meta

      * Otro
    `,
  }, {
    header: 'Preguntas frecuentes',
    content: dedent`
      1. ¿Cómo pago por WebPay si entro directamente desde su página? (https://www.webpay.cl/)

        Es bastante sencillo. Solo selecciona en el campo “Rubros” la opción “Universidades” y a continuación, en “Establecimientos” eliges “PUC FACULTAD INGENIERÍA”

      2. ¿Cómo sé que recibieron mi pago?

        Tanto la Transferencia Bancaria, como WebPay generan un comprobante de pago que envían a tu correo. Sin embargo, te enviaremos un correo de confirmación de pago de donación en un plazo máximo de 48 hrs. hábiles desde la recepción del pago. De todas formas te sugerimos guardar los comprobantes de pago en tu correo.

      3. Tengo muchas dudas de WebPay, ¿dónde puedo recurrir?

        Puedes ingresar directamente a la sección de [preguntas frecuentes del sistema](https://www.webpay.cl/portalpagodirecto/pages/faq.jsf) o escribirnos un correo con tus dudas a becas@ing.puc.cl.

      4. En el mandato PAT me preguntan por “Fecha Otorgamiento Instrucción de Cargo”. ¿Qué es eso?

        Simplemente es la fecha en que rellenas y firmas el PAT.
    `,
  }],
};

export default {
  teachingContents,
  studyMateriaContents,
  monetaryContents,
};
