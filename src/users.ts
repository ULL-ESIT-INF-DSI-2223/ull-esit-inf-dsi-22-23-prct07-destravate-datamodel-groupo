type actividades = 'correr'|'bicicleta';

class Usuario {
    ; // IDs de usuarios con los que interacciona
    grupos: { [id: number]: number[] }; // Diferentes colecciones de IDs de usuarios con los que suele realizar rutas
    estadisticas: {
        kmSemana: number;
        desnivelSemana: number;
        kmMes: number;
        desnivelMes: number;
        kmAno: number;
        desnivelAno: number;
    };
    retosActivos: number[]; // IDs de los retos que el usuario está realizando actualmente
    historicoRutas: { fecha: Date; rutaId: number }[]; // Historial de rutas realizadas por el usuario

    constructor(public id: number,public nombre: string,public actividad: actividades,public amigos: number[],public rutasFavoritas: string[]) {
        this.grupos = {};
        this.estadisticas = {
        kmSemana: 0,
        desnivelSemana: 0,
        kmMes: 0,
        desnivelMes: 0,
        kmAno: 0,
        desnivelAno: 0,
        };
        this.retosActivos = [];
        this.historicoRutas = [];
    }

    agregarAmigo(idAmigo: number) {
        this.amigos.push(idAmigo);
    }

    crearGrupo(idGrupo: string, nombreGrupo: string, miembros: string[]) {
        this.grupos[idGrupo] = miembros;
    }

    agregarRutaFavorita(rutaId: string) {
        this.rutasFavoritas.push(rutaId);
    }

    agregarRutaHistorica(rutaId: number, fecha: Date) {
        this.historicoRutas.push({ rutaId, fecha });
    }
    
    obtenerKmPorPeriodo(periodo:string){
        switch (periodo.toLowerCase()) {
            case 'semana':
                return this.estadisticas.kmSemana;
            case 'mes':
                return this.estadisticas.kmMes;
            case 'año':
                return this.estadisticas.kmAno;
            default :
                return undefined;
        }
    }

    obtenerKmDesnivelPorPeriodo(periodo: string) {
        switch (periodo.toLowerCase()) {
            case 'semana':
                return this.estadisticas.desnivelSemana;
            case 'mes':
                return this.estadisticas.desnivelMes;
            case 'año':
                return this.estadisticas.desnivelAno;
            default :
                return undefined;
        }
    }
}