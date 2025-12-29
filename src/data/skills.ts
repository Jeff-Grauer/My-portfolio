import { SiNextdotjs } from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
// Languages
import ReactjsSvg from "@/public/icons/reactjs.svg";
import AngularSvg from "@/public/icons/angular.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import VuejsSVG from "@/public/icons/Vue.js_Logo_2.svg";
import Htmlsvg from "@/public/icons/html.svg";
import Javascriptsvg from "@/public/icons/javascript.svg";
import Typescriptsvg from "@/public/icons/typescript.svg";
import Css from "@/public/icons/css.svg";
import ReactNative from "@/public/icons/new icons/devicon--reactnative-wordmark.svg";
import Flutter from "@/public/icons/new icons/logos--flutter.svg";
import Xamarin from "@/public/icons/new icons/xamarin-svgrepo-com.svg";
import UIkit from "@/public/icons/new icons/simple-icons--uikit.svg";
import SwiftUI from "@/public/icons/new icons/material-icon-theme--swift.svg";
import MaterialUI from "@/public/icons/new icons/logos--material-ui.svg";
import Lottie from "@/public/icons/new icons/material-icon-theme--lottie.svg";
import Jetpackcompose from "@/public/icons/new icons/devicon--jetpackcompose.svg";
import Kotlin from "@/public/icons/new icons/vscode-icons--file-type-kotlin.svg";
import Java from "@/public/icons/new icons/devicon--java.svg";
import ObjectiveC from "@/public/icons/new icons/material-icon-theme--objective-c.svg";
import Dart from "@/public/icons/new icons/material-icon-theme--dart.svg";
// Backend
import NodejsSVG from "@/public/icons/nodejs.svg";
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import MysqlSvg from "@/public/icons/mysql.svg";
import PHPsvg from "@/public/icons/PHP.svg";
import NestJS from "@/public/icons/new icons/vscode-icons--file-type-nestjs.svg";
import Django from "@/public/icons/new icons/vscode-icons--file-type-django.svg";
import Flask from "@/public/icons/new icons/cib--flask.svg";
import SpringBoost from "@/public/icons/new icons/bxl--spring-boot.svg";
import Ruby from "@/public/icons/new icons/logos--ruby.svg";
import Rails from "@/public/icons/new icons/skill-icons--rails.svg";
import FastAPI from "@/public/icons/new icons/simple-icons--fastapi.svg";
import SQLite from "@/public/icons/new icons/vscode-icons--file-type-sqlite.svg";
import FireStore from "@/public/icons/new icons/vscode-icons--file-type-firestore.svg";
import Redis from "@/public/icons/new icons/devicon--redis.svg";
// CMS
import Wordpress from "@/public/icons/Wordpress.svg";
import Webflowsvg from "@/public/icons/new icons/skill-icons--webflow.svg";
// ERP
// Cloud & DevOps
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import GitHubSvg from "@/public/icons/github.svg";
import Verselsvg from "@/public/icons/new icons/akar-icons--vercel-fill.svg";
import AWS from "@/public/icons/new icons/logos--aws.svg";
import Azure from "@/public/icons/new icons/material-icon-theme--azure.svg";
import Heroku from "@/public/icons/new icons/material-icon-theme--heroku.svg";
import Kubernetes from "@/public/icons/new icons/pajamas--kubernetes.svg";
import Jenkins from "@/public/icons/new icons/devicon--jenkins.svg";
import Jira from "@/public/icons/new icons/logos--jira.svg";
import Jest from "@/public/icons/new icons/material-icon-theme--jest.svg";
import Cypress from "@/public/icons/new icons/catppuccin--cypress.svg";
export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Frontend",
    skills: [
      {
        name: "Html",
        icon: Htmlsvg,
      },
      {
        name: "CSS",
        icon: Css,
      },
      {
        name: "Javascript",
        icon: Javascriptsvg,
      },
      {
        name: "Typescript",
        icon: Typescriptsvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "AngularJS",
        icon: AngularSvg,
      },
      {
        name: "Vue.Js",
        icon: VuejsSVG,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
    ],
  },
  {
    sectionName: "Mobile",
    skills: [
      {
        name: "React Native",
        icon: ReactNative,
      },
      {
        name: "Flutter",
        icon: Flutter,
      },
      {
        name: "Xamarin",
        icon: Xamarin,
      },
      {
        name: "UIkit",
        icon: UIkit,
      },
      {
        name: "SwiftUI",
        icon: SwiftUI,
      },
      {
        name: "Material-UI",
        icon: MaterialUI,
      },
      {
        name: "Lottie",
        icon: Lottie,
      },
      {
        name: "Jetpack compose",
        icon: Jetpackcompose,
      },
      {
        name: "Kotin",
        icon: Kotlin,
      },
      {
        name: "Java",
        icon: Java,
      },
      {
        name: "Objective-C",
        icon: ObjectiveC,
      },
      {
        name: "Dart",
        icon: Dart,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: NodejsSVG,
      },
      {
        name: "Nest.js",
        icon: NestJS,
      },
      {
        name: "Django.js",
        icon: Django,
      },
      {
        name: "Flask.js",
        icon: Flask,
      },
      {
        name: "Spring Boot",
        icon: SpringBoost,
      },
      {
        name: "Ruby",
        icon: Ruby,
      },
      {
        name: "Rails",
        icon: Rails,
      },
      {
        name: "FastAPI",
        icon: FastAPI,
      },
      {
        name: "FireStore",
        icon: FireStore,
      },
      {
        name: "PHP",
        icon: PHPsvg,
      },
      {
        name: "MySQL",
        icon: MysqlSvg,
      },
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
      {
        name: "SQLite",
        icon: SQLite,
      },
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Redis",
        icon: Redis,
      },
    ],
  },
  {
    sectionName: "CMS",
    skills: [
      {
        name: "WordPress",
        icon: Wordpress,
      },
      {
        name: "Webflow",
        icon: Webflowsvg,
      },
    ],
  },
  {
    sectionName: "Cloud & DevOps",
    skills: [
      {
        name: "AWS",
        icon: AWS,
      },
      {
        name: "Azure",
        icon: Azure,
      },
      {
        name: "Heroku",
        icon: Heroku,
      },
      {
        name: "Kubernetes",
        icon: Kubernetes,
      },
      {
        name: "Jenkins",
        icon: Jenkins,
      },
      {
        name: "Jira",
        icon: Jira,
      },
      {
        name: "Jest",
        icon: Jest,
      },
      {
        name: "Cypress",
        icon: Cypress,
      },
      {
        name: "Doker",
        icon: DockerSvg,
      },
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Vercel",
        icon: Verselsvg,
      },
      {
        name: "GitHub",
        icon: GitHubSvg,
      },
    ],
  },
];