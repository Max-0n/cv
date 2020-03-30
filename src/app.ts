require('./style.scss');
import TypeWriter from './typeWriter';

console.info('%cCreated by Max0n', 'color: #fff; font-weight: bold; background: #47c; padding:3px 5px;');

const introTypewriter: HTMLElement = document.getElementById('introTypewriter');
const introChat: TypeWriter = new TypeWriter(introTypewriter, ['С днём рождения Танечка 💐'], false);
