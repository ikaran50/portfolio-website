import html from '../assets/svg/skills/html.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import java from '../assets/svg/skills/java.svg'
import vitejs from '../assets/svg/skills/vitejs.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import figma from '../assets/svg/skills/figma.svg'
import materialui from '../assets/svg/skills/materialui.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'java':
            return java;
        case 'figma':
            return figma;
        default:
            break;
    }
}