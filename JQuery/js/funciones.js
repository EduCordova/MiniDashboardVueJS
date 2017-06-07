$( document ).ready(function() {
    const BASE_URL = 'http://localhost/api';
    var carrera = edadMin = edadMax = semestre = cantidadAlumnos = 0;
    var municipio = "Todos";

    // Obtener datos de carreras
    fetch(BASE_URL + '/carreras').then(function(response) {
        return response.json();
    }).then(function(data) {
        const carreras = data.carreras;
        carreras.map((x) => $("select#carreras").append(`
            <option value="${x.id}">${x.nombre}</option>
        `));
    }).catch(function(err) {
        console.log(err);
    });

    // Obtener datos de alumnos
    fetch(BASE_URL + '/alumnos').then(function(response) {
        console.log("Obtener datos de alumnos");        
        return response.json();
    }).then(function(data) { 
        const alumnos = data.alumnos;
        
        getAlumnos(carrera, semestre, edadMin, edadMax, municipio);
        
        $("select#carreras").change(function () {
            carrera = parseInt($(this).find("option:selected").val());
            
            getAlumnos(carrera, semestre, edadMin, edadMax, municipio);
        });

        $("select#semestre").change(function () {
            semestre = parseInt($(this).find("option:selected").val());
            
            getAlumnos(carrera, semestre, edadMin, edadMax, municipio);            
        });

        $("select#edadMin").change(function () {
            edadMin = parseInt($(this).find("option:selected").val());
            edadMax = parseInt($("select#edadMax").find("option:selected").val());
            
            getAlumnos(carrera, semestre, edadMin, edadMax, municipio);            
        });

        $("select#edadMax").change(function () {
            edadMin = parseInt($("select#edadMin").find("option:selected").val());
            edadMax = parseInt($(this).find("option:selected").val());
            
            getAlumnos(carrera, semestre, edadMin, edadMax, municipio);            
        });

        $("select#municipio").change(function () {
            municipio = $(this).find("option:selected").val();

            getAlumnos(carrera, semestre, edadMin, edadMax, municipio);            
        });

        function getAlumnos(carrera, semestre, edadMin, edadMax, municipio) {
            $("table tbody").empty();
            
            if ((carrera > 0) && (semestre === 0) && (edadMin === 0) && (edadMax === 0) && (municipio === "Todos")) {                    
                cantidadAlumnos = alumnos.filter((a) => a.carrera.id === carrera)
                                         .map((x) => printData(x))
                                         .reduce((acc, x) => acc + 1, 0);           
            } else if ((carrera > 0) && (semestre === 0) && (edadMin === 0) && (edadMax === 0) && (municipio != "Todos")) {
                cantidadAlumnos = alumnos.filter((a) => (a.carrera.id === carrera) && (a.municipio === municipio))
                                         .map((x) => printData(x))
                                         .reduce((acc, x) => acc + 1, 0);
            } else if ((carrera > 0) && (semestre === 0) && (edadMin > 0) && (edadMax > 0) && (municipio === "Todos")) {
                if (edadMin < edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.carrera.id === carrera) && (a.edad >= edadMin && a.edad < edadMax))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else if (edadMin === edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.carrera.id === carrera) && (a.edad === edadMin))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else {  
                    cantidadAlumnos = 0;
                }
            } else if ((carrera > 0) && (semestre === 0) && (edadMin > 0) && (edadMax > 0) && (municipio != "Todos")) {
                if (edadMin < edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.carrera.id === carrera) && (a.edad >= edadMin && a.edad < edadMax) && (a.municipio === municipio))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else if (edadMin === edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.carrera.id === carrera) && (a.edad === edadMin) && (a.municipio === municipio))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else {  
                    cantidadAlumnos = 0;
                }
            } else if ((carrera > 0) && (semestre > 0) && (edadMin === 0) && (edadMax === 0) && (municipio === "Todos")) {
                cantidadAlumnos = alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre))
                                         .map((x) => printData(x))
                                         .reduce((acc, x) => acc + 1, 0);
            } else if ((carrera > 0) && (semestre > 0) && (edadMin === 0) && (edadMax === 0) && (municipio != "Todos")) {
                cantidadAlumnos = alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre) && (a.municipio === municipio))
                                         .map((x) => printData(x))
                                         .reduce((acc, x) => acc + 1, 0);
            } else if ((carrera > 0) && (semestre > 0) && (edadMin > 0) && (edadMax > 0) && (municipio === "Todos")) {
                if (edadMin < edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre) && (a.edad >= edadMin && a.edad < edadMax))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else if (edadMin === edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre) && (a.edad === edadMin))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else {  
                    cantidadAlumnos = 0;
                }
            } else if ((carrera > 0) && (semestre > 0) && (edadMin > 0) && (edadMax > 0) && (municipio != "Todos")) {
                if (edadMin < edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre) && (a.edad >= edadMin && a.edad < edadMax) && (a.municipio === municipio))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else if (edadMin === edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.carrera.id === carrera) && (a.semestre === semestre) && (a.edad === edadMin) && (a.municipio === municipio))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else {  
                    cantidadAlumnos = 0;
                }
            } else if ((carrera === 0) && (semestre === 0) && (edadMin === 0) && (edadMax === 0) && (municipio === "Todos")) {                    
                cantidadAlumnos = alumnos.map((x) => printData(x))
                                         .reduce((acc, x) => acc + 1, 0);           
            } else if ((carrera === 0) && (semestre === 0) && (edadMin === 0) && (edadMax === 0) && (municipio != "Todos")) {
                cantidadAlumnos = alumnos.filter((a) => a.municipio === municipio)
                                         .map((x) => printData(x))
                                         .reduce((acc, x) => acc + 1, 0);
            } else if ((carrera === 0) && (semestre === 0) && (edadMin > 0) && (edadMax > 0) && (municipio === "Todos")) {
                if (edadMin < edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.edad >= edadMin && a.edad < edadMax))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else if (edadMin === edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.edad === edadMin))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else {  
                    cantidadAlumnos = 0;
                }
            } else if ((carrera === 0) && (semestre === 0) && (edadMin > 0) && (edadMax > 0) && (municipio != "Todos")) {
                if (edadMin < edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.edad >= edadMin && a.edad < edadMax) && (a.municipio === municipio))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else if (edadMin === edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.edad === edadMin) && (a.municipio === municipio))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else {  
                    cantidadAlumnos = 0;
                }
            } else if ((carrera === 0) && (semestre > 0) && (edadMin === 0) && (edadMax === 0) && (municipio === "Todos")) {
                cantidadAlumnos = alumnos.filter((a) => (a.semestre === semestre))
                                         .map((x) => printData(x))
                                         .reduce((acc, x) => acc + 1, 0);
            } else if ((carrera === 0) && (semestre > 0) && (edadMin === 0) && (edadMax === 0) && (municipio != "Todos")) {
                cantidadAlumnos = alumnos.filter((a) => (a.semestre === semestre) && (a.municipio === municipio))
                                         .map((x) => printData(x))
                                         .reduce((acc, x) => acc + 1, 0);
            } else if ((carrera === 0) && (semestre > 0) && (edadMin > 0) && (edadMax > 0) && (municipio === "Todos")) {
                if (edadMin < edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.semestre === semestre) && (a.edad >= edadMin && a.edad < edadMax))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else if (edadMin === edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.semestre === semestre) && (a.edad === edadMin))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else {  
                    cantidadAlumnos = 0;
                }
            } else if ((carrera === 0) && (semestre > 0) && (edadMin > 0) && (edadMax > 0) && (municipio != "Todos")) {
                if (edadMin < edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.semestre === semestre) && (a.edad >= edadMin && a.edad < edadMax) && (a.municipio === municipio))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else if (edadMin === edadMax) {
                    cantidadAlumnos = alumnos.filter((a) => (a.semestre === semestre) && (a.edad === edadMin) && (a.municipio === municipio))
                                             .map((x) => printData(x))
                                             .reduce((acc, x) => acc + 1, 0);
                } else {  
                    cantidadAlumnos = 0;
                }
            } else {  
                cantidadAlumnos = 0;
            }

            getTotalResults(cantidadAlumnos);            
        }

        function printData (x) {
            $("table tbody").append(`
                <tr>
                    <td>${x.id}</td>
                    <td>${x.nombre}</td>
                    <td>${x.apellido_paterno}</td>
                    <td>${x.apellido_materno}</td>
                    <td>${x.edad}</td>
                    <td>${x.semestre}</td>
                    <td>${x.carrera.nombre}</td>
                    <td>${x.municipio}</td>
                </tr>
            `);          
        }

        function getTotalResults(cantidadAlumnos) {
            if(cantidadAlumnos === 0) {                           
                $("table tbody").append(`
                    <tr>
                        <td colspan="8">
                            No existen datos para este criterio de búsqueda.
                        </td>
                    </tr>
                `);
            }

            $("table tbody").append(`
                <tr>
                    <td colspan="7">
                        <label>Alumnos totales</label>
                    </td>
                    <td>${cantidadAlumnos}</td>
                </tr>
            `);             
        }
    }).catch(function(err) {
        console.log(err);
    });
});