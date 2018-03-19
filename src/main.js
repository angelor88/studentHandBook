import { Date } from './calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  $('#date').submit(function(event){
    event.preventDefault();
    $('#dateShow').text();

    let birthdate = $('#birthdate').val();


    $('#birthdateShow').text(birthdate);
    let userDate = new Date(birthdate);

    let userDateEarth = userDate.ageInYears();
    $('#ageEarth').text(userDateEarth);
    let userDateMercury = userDate.ageOnMercury();
    $('#ageMercury').text(userDateMercury);
    let userDateVenus = userDate.ageOnVenus();
    $('#ageVenus').text(userDateVenus);
    let userDateMars = userDate.ageOnMars();
    $('#ageMars').text(userDateMars);
    let userDateJupiter = userDate.ageOnJupiter();
    $('#ageJupiter').text(userDateJupiter);

  });
});
