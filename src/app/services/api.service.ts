import { NgTemplateOutlet } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  loadAbout() {
    return {
      name: "Thais Crivelatti",
      description: "Estudo e trabalho com programação desde 2013. Apesar das minhas experiências terem sido back-end, tenho estudado para desenvolver minhas habilidades no front-end e tornar-me desenvolvedora full-stack. Sou autodidata e possuo aprendizado rápido. Prezo muito pela escrita de código limpo, soluções simples e documentações detalhadas.",
      education: [
        {
          course: "Jogos Digitais",
          institution: "Centro Universitário FAG",
          type: "Graduação",
          duration: "2019 - 2021",
        },
        {
          course: "Engenharia de Software",
          institution: "Univel",
          type: "Pós-graduação",
          duration:"2017 - 2018",
        },
        {
          course: "Análise e Desenvolvimento de Sistemas",
          institution: "Univel",
          type: "Graduação",
          duration: "2014 - 2016",
        },
        {
          course: "Informática",
          institution: "CEEP Pedro Boaretto Neto",
          type: "Técnico subsequente",
          duration: "2012 - 2013",
        }
      ],
      mainStack: [
        "HTML5",
        "CSS3",
        "Javascript",
        "Angular",
      ],
      experience: [
        {
          name: "SetaDigital / Linx",
          duration: "2017 - 2020",
          role: "Desenvolvedora de sistemas",
          url: "https://www.linx.com.br/seta-digital/"
        },
        {
          name: "Datacoper Software",
          duration: "2013 - 2015",
          role: "Desenvolvedora de sistemas",
          url: "https://www.datacoper.com.br/"
        }
      ]
    };
  }

  loadTools() {
    return [
      "HTML5",
      "CSS3",
      "Javascript",
      "Angular",
      "Python",
      "Java",
      "C#",
      "PHP",
      "Visual Fox Pro",
      "PostgreSQL",
      "MySQL",
      "SVN",
      "Git",
      "Wordpress"
    ]
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
        title:"Super Hero Theming",
        description: "Projeto simples para aprender o funcionamento da troca de tema no Angular.",
        stack: "Angular, Typescript, Firebase",
        link: "https://superhero-theme.web.app/",
        repository: "https://github.com/thaiscrivelatti/superhero-angular-theming",
        image:"assets/img/superherotheming.jpg",
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
        title:"Jogo da memória",
        description: "Jogo desenvolvido durante o bootcamp JavaScript Gamer Developer da DIO.",
        stack: "HTML5, CSS3, Javascript",
        link: "https://thaiscrivelatti.github.io/game-memory",
        repository: "https://github.com/thrivelatti/game-memory",
        image:"assets/img/memory.jpg",
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
}
