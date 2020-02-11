import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tamagotchi} from './tamagotchi'
import homeIcon from '../src/images/tamagotchi.jpeg';


$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();
        const tamagotchi = new Tamagotchi("Hiro")
        const wakeUp = tamagotchi.wakeUp();
        console.log(wakeUp);
        $("#result").text(wakeUp);
        let health = document.getElementById("health")
        health.value -= 10; 
        let input = $(wakeUp).val();
        console.log(input)
        if (health.value == 0){
            alert("You Killed it!");
        }
        // $("#result").text(input);
        
    });
});