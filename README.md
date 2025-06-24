Admin info:
Email: andrea@example.com         Password: admin

User 1:
Email: carlos@example.com        Password: user

# Camanchaca

Descripción: Camanchaca Encuadernaciones es una plataforma innovadora que ofrece agendas personalizadas para estudiantes universitarios, diseñadas específicamente para cada carrera, desde Artes Visuales y Letras hasta Abogacía y Veterinaria. Estas agendas están hechas a medida para cubrir la duración completa de la carrera, con secciones dedicadas al registro de avances, tareas y desempeño académico, ayudando a los estudiantes a mantenerse organizados y al tanto de su progreso.

Público objetivo: Camanchaca está dirigido a estudiantes universitarios comprometidos con su formación y que buscan herramientas prácticas para gestionar su tiempo y mejorar su rendimiento académico en sus estudios.

Descripción personal:¡Hola! Soy Sofía, estudiante universitaria con gran curiosidad por el mundo de las nuevas tecnologías. Me apasionan los animales, el cine y los cómics, y disfruto aprendiendo cosas nuevas cada día. Actualmente, estoy explorando el mundo tech para desarrollar habilidades que me permitan crear y colaborar en proyectos interesantes.

Sitios de referencia:

1. Cuadernos Hachiko: https://hachiko3.mitiendanube.com - venden agendas con la misma funcionalidad, al igual que otros productos de utilidad para la vida universitaria.
2. Craft Vegan Bakery: https://craftveganbakery.com.ar - Me gusta la sección de presentación de las características, y sección de más vendidos.
3. Fawna: https://fawna.com.ar - Me interesaría aplicar el efecto del inicio (imagen de fondo, aparición de nav) y quizá algunas animaciones.
4. Vitalcan: https://vitalcan.com/landing/balanced-natural-recipe/ - Agradable gama de colores y disposición de imágenes
5. Sz Studios: https://www.szstudios.com.ar/es/ - Otra alternativa llamativa para el inicio de una página
6. Brinca: https://campusbrinca.com - Interesantes colores y diseño gráfico

WIREFRAME:

- Home

![Captura de pantalla 2024-11-19 011540](https://github.com/user-attachments/assets/8b047f36-4ea0-4067-b595-1952aef8a6be)

- Detalle de Producto

![Captura de pantalla 2024-11-19 011551](https://github.com/user-attachments/assets/796eec90-bd3c-4054-b15b-345444b99b5a)

- Carrito de Compras

![Captura de pantalla 2024-11-19 011600](https://github.com/user-attachments/assets/31c2d785-79dd-466b-9534-341e76188405)

- Formulario de Registro

![Captura de pantalla 2024-11-19 011617](https://github.com/user-attachments/assets/10006c3f-6263-4991-94fe-4a0c42e8e795)

- Formulario de Login

![Captura de pantalla 2024-11-19 011609](https://github.com/user-attachments/assets/2462e81b-9104-4f17-a191-2e10ff8ea504)

SPRINT 2

Tablero de trabajo: https://trello.com/b/KnnRUatq/organizacion-de-trabajo

INSTRUCCIONES DE USO:

Instalaciones backend

A) Pasos de instalación framework, librerías y middleware:
1) Abrir terminal: Ctrl + Shift + ñ
2) cd backend
3) Realizar las siguientes instalaciones:
 npm install express (framework para crear servidor backend)
 npm install nodemon -D (para reiniciar el servidor de manera automática al
guardar – para desarrollo) -- opcional
 npm install cors (para poder conectar frontend con backend)
 npm install express-session (para gestionar sesiones, ideal para Login basado
en sesión) * Sólo si manejas sesión. Si se usa JWT podría no necesitarse
 npm install mysql2 (permite conectar con la base de datos)
 npm install sequelize (ORM que facilita trabajar con la base de datos)
 npm install squelize-cli –save-dev (Herramienta de línea de comandos de
squelize para crear modelos, migraciones, etc.) * Sólo si se usa migraciones
y seed: npx sequelize-cli init
 npm install multer (middleware para subir archivos con imágenes) * Útil si
se suben imágenes o documentos

B) Luego de las instalaciones, en el backend ingresar al archivo config.json que
contiene datos para la conexión a la db y modificar username y password con sus
datos de conexión:
    &quot;username&quot;: &quot;root&quot;,
    &quot;password&quot;: &quot;1234&quot;,
    &quot;database&quot;: &quot;camanchaca_store&quot;,
    &quot;host&quot;: &quot;127.0.0.1&quot;,
    &quot;dialect&quot;: &quot;mysql&quot;
C) Conectar a la db:
1) En VsCode, instalar la extensión SQLTools
2) Para este proyecto instalar el driver SQLTools MySQL/MariaDB (porque usa
MySQL)
D) Migrar la base de datos con: npx sequelize-cli db:migrate

E) Poblar la base de datos con datos falsos con: npx sequelize-cli db:seed:all

Instalaciones frontend con REACT
Pasos de instalación librerías y middleware:
1) Abrir terminal: Ctrl + Shift + ñ
2) cd frontend (si estás dentro de backend antes: cd .. )
3) Realizar las siguientes instalaciones:
 npm install react
 npm install react-router-dom (para navegación entre páginas)
