import { NgTemplateOutlet } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  loadAbout() {
    return {
      name: "Thais Crivelatti",
      description: "Olá, eu sou a Thais! Sou graduada em Análise e Desenvolvimento de Sistemas, Jogos Digitais e possuo especialização em Engenharia de Software. Estudo e trabalho com programação desde 2013. Considero-me uma desenvolvedora full-stack. Sempre fui autodidata e já mexi com diversas tecnologias diferentes, como HTML, CSS, Javascript, Angular, Typescript, Python,  C#, e até mesmo com linguagens legadas como Progress e Visual Fox Pro. Em meu tempo livre gosto de ler, assistir séries e fazer crochê.",
      education: [
        {
          course: "Análise e Desenvolvimento de Sistemas",
          institution: "Univel",
          type: "Graduação",
        },
        {
          course: "Engenharia de Software",
          institution: "Univel",
          type: "Pós-graduação",
        },
        {
          course: "Jogos Digitais",
          institution: "Centro Universitário FAG",
          type: "Graduação",
        },
      ],
      mainStack: [
        "HTML5",
        "CSS3",
        "Javascript",
        "Angular",
        "Python",
      ],
    };
  }

  loadProjects() {
    return [
      {
        title:"Hackathon Online App",
        description: "Plataforma para realização de desafios online. Pensada primariamente para hackathons.",
        stack: "Angular, Typescript, Firebase",
        link: "https://hackathon-online.web.app/",
        repository: null,
        image:"assets/img/hacka.jpg",
      },
      {
        title:"Genius Game",
        description: "Game Genius desenvolvido durante o Bootcamp JavaScript Game Developer da DIO.",
        stack: "HTML5, CSS3, Javascript",
        link: "https://thaiscrivelatti.github.io/game-genius",
        repository: "https://github.com/thrivelatti/game-genius",
        image:"assets/img/genius.jpg",
      },
      {
        title:"Jogo da Velha",
        description: "Jogo desenvolvido durante o bootcamp JavaScript Gamer Developer da DIO.",
        stack: "HTML5, CSS3, Javascript",
        link: "https://thaiscrivelatti.github.io/game-tictactoe/",
        repository: "https://github.com/thrivelatti/game-tictactoe",
        image:"assets/img/tictactoe.jpg",
      },
      {
        title:"Jogo da Velha",
        description: "Jogo desenvolvido durante o bootcamp JavaScript Gamer Developer da DIO.",
        stack: "HTML5, CSS3, Javascript",
        link: "https://thaiscrivelatti.github.io/game-tictactoe/",
        repository: "https://github.com/thrivelatti/game-tictactoe",
        image:"assets/img/tictactoe.jpg",
      },
    ];
  }

  loadExperience() {
    return [
      {
        name: "Setadigital / Linx",
        role: "Desenvolvedora de Software",
        attributions: "Desenvolvimento de funcionalidades e manutenção em software ERP especializado em loja de calçados na linguagem Visual Fox Pro. Manutenção em banco de dados PostgreSQL. Desenvolvimento de funcionalidades para software secundário em C#.",
        tools: "",
      },
      {
        name: "Datacoper Software",
        role: "Desenvolvedora de Software",
        attributions: "Desenvolvimento de funcionalidades e manutenção de software ERP especializado no agronegócio em linguagem Progress.",
        tools: "",
      }
    ];
  }
}
