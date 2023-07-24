import {
    Angular,
  GitHub,
  Instagram,
  Linkedin,
  TikTok,
  Twitter,
  Web,
  Wordpress,
  Css3,
  Nodes
} from "./assets/iconsSvg"
import user1 from "./assets/user1.png"
import user2 from "./assets/user2.png"
import user3 from "./assets/user3.png"
import user5 from "./assets/user5.png"
import user6 from "./assets/user6.png"
import React from "react"

export const ProjectsData = [
  {
    id: 1,
    title: "Scoby Social",
    url: '',
  },
  {
    id: 2,
    title: "Scoby Social",
    url: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Scoby Social",
    url: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "Scoby Social",
    url: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    title: "Scoby Social",
    url: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    title: "Scoby Social",
    url: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    title: "Scoby Social",
    url: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    title: "Scoby Social",
    url: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 9,
    title: "Scoby Social",
    url: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 10,
    title: "Scoby Social",
    url: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

export const social = [
  {
    id: 1,
    name: "Instagram",
    logo: <Instagram />,
  },
  {
    id: 2,
    name: "Linkedin",
    logo: <Linkedin />,
  },
  {
    id: 3,
    name: "Twitter",
    logo: <Twitter />,
  },
  {
    id: 4,
    name: "TikTok",
    logo: <TikTok />,
  },
  {
    id: 5,
    name: "Github",
    logo: <GitHub />,
  },
  {
    id: 6,
    name: "Web",
    logo: <Web />,
  },
]

export const team_members = [
  {
    id: 1,
    name: "Wade Warren",
    role: "CEO",
    img: user1,
    projects: [3, 4, 5],
    lenguages: ["Español", "Ingles"],
    softSkills: [
      "Trabajo en equipo",
      "Liderazgo",
      "Comunicaciòn asertiva",
      "Servicio al cliente",
      "Atenciòn al detalle",
    ],
    skills: [ <Angular />,  <Nodes />,  <Css3 />,<Wordpress/>],
    coverLetter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est. Llamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    social: [
      { ig: true, username: "@warren" },
      { tiktok: true, username: "@warren777" },
      { linkedin: true, username: "@warren" },
      { twitter: true, username: "@wt" },
      { github: true, username: "@warrengit" },
      { web: true, username: "www.mypage.com" },
    ],
  },
  {
    id: 2,
    name: "Wade Warren 2",
    role: "Developer",
    img: user2,
    projects: [1, 4, 9, 3],
    lenguages: ["Español", "Ingles"],
    softSkills: [
      "Trabajo en equipo",
      "Liderazgo",
      "Comunicaciòn asertiva",
      "Servicio al cliente",
      "Atenciòn al detalle",
    ],
    skills: [ <Angular />,  <Nodes />,  <Css3 />,<Wordpress/>],
    coverLetter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est. Llamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    social: [
      { ig: true, username: "@warren" },
      { tiktok: true, username: "@warren777" },
      { linkedin: true, username: "@warren" },
      { twitter: true, username: "@wt" },
      { github: true, username: "@warrengit" },
      { web: true, username: "www.mypage.com" },
    ],
  },
  {
    id: 3,
    name: "Wade Warren",
    role: "Designer",
    img: user3,
    projects: [1, 4, 9, 3],
    lenguages: ["Español", "Ingles"],
    softSkills: [
      "Trabajo en equipo",
      "Liderazgo",
      "Comunicaciòn asertiva",
      "Servicio al cliente",
      "Atenciòn al detalle",
    ],
    skills: [ <Angular />,  <Nodes />,  <Css3 />,<Wordpress/>],
    coverLetter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est. Llamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    social: [
      { ig: true, username: "@warren" },
      { tiktok: true, username: "@warren777" },
      { linkedin: true, username: "@warren" },
      { twitter: true, username: "@wt" },
      { github: true, username: "@warrengit" },
      { web: true, username: "www.mypage.com" },
    ],
  },
  {
    id: 4,
    name: "Wade Warren",
    role: "Mobile Dev",
    img: user1,
    projects: [1, 7, 9, 5],
    lenguages: ["Español", "Ingles"],
    softSkills: [
      "Trabajo en equipo",
      "Liderazgo",
      "Comunicaciòn asertiva",
      "Servicio al cliente",
      "Atenciòn al detalle",
    ],
    skills: [ <Angular />,  <Nodes />,  <Css3 />,<Wordpress/>],
    coverLetter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est. Llamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    social: [
      { ig: true, username: "@warren" },
      { tiktok: true, username: "@warren777" },
      { linkedin: true, username: "@warren" },
      { twitter: true, username: "@wt" },
      { github: true, username: "@warrengit" },
      { web: true, username: "www.mypage.com" },
    ],
  },
  {
    id: 5,
    name: "Wade Warren",
    role: "Cummunity Manager",
    img: user5,
    projects: [1, 4, 9, 3],
    lenguages: ["Español", "Ingles"],
    softSkills: [
      "Trabajo en equipo",
      "Liderazgo",
      "Comunicaciòn asertiva",
      "Servicio al cliente",
      "Atenciòn al detalle",
    ],
    skills: [ <Angular />,  <Nodes />,  <Css3 />,<Wordpress/>],
    coverLetter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est. Llamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    social: [
      { ig: true, username: "@warren" },
      { tiktok: true, username: "@warren777" },
      { linkedin: true, username: "@warren" },
      { twitter: false, username: "" },
      { github: true, username: "@warrengit" },
      { web: true, username: "www.mypage.com" },
    ],
  },
  {
    id: 6,
    name: "Wade Warren",
    role: "Developer",
    img: user6,
    projects: [1, 7, 9, 5],
    lenguages: ["Español", "Ingles"],
    softSkills: [
      "Trabajo en equipo",
      "Liderazgo",
      "Comunicaciòn asertiva",
      "Servicio al cliente",
      "Atenciòn al detalle",
    ],
    skills: [ <Angular />,  <Nodes />,  <Css3 />,<Wordpress/>],
    coverLetter:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est. Llamcorper eget nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus",
    social: [
      { ig: true, username: "@warren" },
      { tiktok: true, username: "@warren777" },
      { linkedin: true, username: "@warren" },
      { twitter: false, username: "" },
      { github: true, username: "@warrengit" },
      { web: true, username: "www.mypage.com" },
    ],
  },
]

export const testimonial = [
  {
    id: 1,
    img: user1,
    comment:
      "Creemos que nuestra industria está cegada por los números. Mientras que las decisiones de compra se basan en la emoción.",
    client: "Scoby Social",
  },
  {
    id: 1,
    img: user1,
    comment:
      "Creemos que nuestra industria está cegada por los números. Mientras que las decisiones de compra se basan en la emoción.",
    client: "Scoby Social",
  },
  {
    id: 1,
    img: user1,
    comment:
      "Creemos que nuestra industria está cegada por los números. Mientras que las decisiones de compra se basan en la emoción.",
    client: "Scoby Social",
  },
  {
    id: 1,
    img: user1,
    comment:
      "Creemos que nuestra industria está cegada por los números. Mientras que las decisiones de compra se basan en la emoción.",
    client: "Scoby Social",
  },
  {
    id: 1,
    img: user1,
    comment:
      "Creemos que nuestra industria está cegada por los números. Mientras que las decisiones de compra se basan en la emoción.",
    client: "Scoby Social",
  },
  {
    id: 1,
    img: user1,
    comment:
      "Creemos que nuestra industria está cegada por los números. Mientras que las decisiones de compra se basan en la emoción.",
    client: "Scoby Social",
  },
]


