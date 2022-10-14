import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './style.css';
import * as bootstrap from 'bootstrap';

let box = document.querySelector(".contact-form").getBoundingClientRect();
let contactHeight = box.height;

document.querySelector(".imgWrapper").style.height = `${contactHeight}px`;