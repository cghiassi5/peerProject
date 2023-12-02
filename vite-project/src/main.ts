import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { openConnection, receiveConnection } from './send.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <input type="text" id="myInput" value="">
      <button id="getInputValue">Get Input Value</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

openConnection(document.querySelector<HTMLButtonElement>('#counter')!);
const getInputValueButton = document.querySelector<HTMLButtonElement>('#getInputValue')!;
getInputValueButton.addEventListener('click', receiveInputValue);

function receiveInputValue() {
  const inputElement = document.querySelector<HTMLInputElement>('#myInput')!;
  const inputValue = inputElement.value;
  console.log("Input Value:", inputValue);

  // Continue with your code...
}
