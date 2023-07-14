import {Button} from '../components/btn';
import { ButtonProps } from '../intrerface/button';
import './index.css'

import vscodeIcon from '../assets/images/vscode.png';
import chromeIcon from '../assets/images/chrome.png';
import edgeIcon from '../assets/images/edge.png';
import githubIcon from '../assets/images/github.png';
import gptIcon from '../assets/images/chatgpt.png';
import notionIcon from '../assets/images/notion.png';
import youtubeIcon from '../assets/images/youtube.png';

const buttons: ButtonProps[] = [
  { label: 'VS Code', icon: vscodeIcon, endpoint: 'abrir-vscode' },
  { label: 'Chrome', icon: chromeIcon, endpoint: 'abrir-chrome' },
  { label: 'Guia Edge', icon: edgeIcon, endpoint: 'abrir-guia' },
  { label: 'Edge', icon: edgeIcon, endpoint: 'abrir-edge' },
  { label: 'YouTube', icon: youtubeIcon, endpoint: 'abrir-youtube' },
  { label: 'GitHub', icon: githubIcon, endpoint: 'abrir-github' },
  { label: 'Chat GPT', icon: gptIcon, endpoint: 'abrir-gpt' },
  { label: 'Notion', icon: notionIcon, endpoint: 'abrir-notion' },
];

export function StreamDeck() {
  return (
    <div className="stream-deck">
      {buttons.map((button, index) => (
        <Button key={`button-${index}`} label={button.label} icon={button.icon} endpoint={button.endpoint} />
      ))}
    </div>
  );
}
