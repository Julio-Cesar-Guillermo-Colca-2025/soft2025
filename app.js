<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software 2025</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Proyecto Futurista 2025</h1>
        <nav>
            <a href="#">Inicio</a> |
            <a href="#">Acerca de</a> |
            <a href="#">Calculadora</a> |
            <a href="#">Contacto</a>
        </nav>
    </header>

    <main>
        <section id="profile">
            <h2>Julio César Guillermo Colca</h2>
            <p>Jefe de Soporte Técnico y Redes</p>
            <p>Cerro de Pasco, Perú</p>
        </section>

        <section id="about-me">
            <h3>Sobre mí</h3>
            <p>Licenciado en Computación e Informática de la Universidad Nacional Daniel Alcides Carrión (UNDAC).</p>
            <p>Estudiante del VII semestre en la Universidad Continental.</p>
            <p>Especialista en Ensamblaje y Mantenimiento de equipos informáticos SENATI.</p>
        </section>

        <section id="projects">
            <h3>Proyectos Destacados</h3>
            <h4>Redes Cisco</h4>
            <p>Diseño, configuración y diagnóstico de redes con tecnología Cisco.</p>
            <h4>Soporte Técnico Informático</h4>
            <p>Resolución de problemas de hardware y software en equipos personales y empresariales.</p>
            <h4>Mantenimiento Técnico</h4>
            <p>Mantenimiento preventivo y correctivo para garantizar el funcionamiento óptimo.</p>
            <h4>Instalación de Videovigilancia</h4>
            <p>Instalación y configuración de cámaras analógicas e IP, con visualización en TV, PC y móviles.</p>
            <h4>IoT Futurista</h4>
            <p>Sistemas conectados con tecnología 24/7 para automatización y eficiencia.</p>
            <h4>Robótica Avanzada</h4>
            <p>Soluciones automatizadas e inteligentes para tareas repetitivas y de precisión.</p>
            <h4>Blockchain</h4>
            <p>Tecnología descentralizada para la gestión segura de datos e identidades.</p>
        </section>

        <section id="links">
            <h3>Enlaces</h3>
            <p>
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
                <a href="#">Mi Web Personal</a>
            </p>
        </section>

        <section id="contact">
            <h3>Contacto</h3>
            <p>📧 41925797@continental.edu.pe</p>
            <p>📱 +51 944 979 705</p>
        </section>

        <section id="footer">
            <p>"Vine, vi y programé. Todos los derechos reservados © 2025"</p>
        </section>

        <section id="calculator">
            <h2>Calculadora</h2>
            <div id="calculator-display">0</div>
            <div id="calculator-buttons">
                <button onclick="calculator.press('7')">7</button>
                <button onclick="calculator.press('8')">8</button>
                <button onclick="calculator.press('9')">9</button>
                <button onclick="calculator.press('+')">+</button>
                <button onclick="calculator.press('4')">4</button>
                <button onclick="calculator.press('5')">5</button>
                <button onclick="calculator.press('6')">6</button>
                <button onclick="calculator.press('-')">-</button>
                <button onclick="calculator.press('1')">1</button>
                <button onclick="calculator.press('2')">2</button>
                <button onclick="calculator.press('3')">3</button>
                <button onclick="calculator.press('*')">*</button>
                <button onclick="calculator.press('0')">0</button>
                <button onclick="calculator.press('.')">.</button>
                <button onclick="calculator.calculate()">=</button>
                <button onclick="calculator.clear()">C</button>
                <button onclick="calculator.press('/')">/</button>
            </div>
        </section>
    </main>

    <script src="app.js"></script>
</body>
</html>