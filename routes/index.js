import  express  from "express";
import guardarTestimonial from "../controllers/testimonialController.js";
import {paginaInicio, paginaNosotros, paginaTestimonios, paginaViajes, paginaDetalleViaje} from "../controllers/paginasController.js";

const router = express.Router();

router.get('/', paginaInicio)
router.get('/nosotros',paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/testimonios', paginaTestimonios);
router.post('/testimonios', guardarTestimonial);


export default router;