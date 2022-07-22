import { Configuracion } from './configuracion';
import { BancoArchivos } from '../almacenamiento/banco-archivos';
import { BancoDatabase } from '../almacenamiento/banco-database';
import { ModuloEmail } from '../modulos/modulo-email';
import { ModuloExpress } from '../modulos/modulo-express';
import { ModuloAutenticacionWeb } from '../modulos/modulo-autenticacion-web';
import { ModuloWebsocket } from '../modulos/modulo-websocket';
import { ModuloTelegram } from '../modulos/modulo-telegram';
import { TheMoviesDatabase } from '../almacenamiento/the-movies-database';
import { ModuloJuegoJugador } from '../modulos/modulo-juego-jugador';
import { ModuloAutenticacion } from '../modulos/modulos-autenticacion';
import { ModuloJuegoAnfitrion } from '../modulos/modulo-juego-anfitrion';

export interface Wrapper {
  rlp: any;
  conf: Configuracion,
  bancoArchivos: BancoArchivos,
  bancoDatabase: BancoDatabase,
  themoviesDatabase: TheMoviesDatabase,
  moduloEmail: ModuloEmail,
  moduloAutenticacion: ModuloAutenticacion,
  moduloAutenticacionWeb: ModuloAutenticacionWeb,
  moduloExpress: ModuloExpress,
  moduloWebsocket: ModuloWebsocket,
  moduloTelegram: ModuloTelegram,
  moduloJuegoAnfitrion: ModuloJuegoAnfitrion,
  moduloJuegoJugador: ModuloJuegoJugador
};