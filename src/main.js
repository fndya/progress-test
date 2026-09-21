import { Progress } from './Progress.js';

const progressContainer = document.querySelector('#progress');
const valueInput = document.querySelector('#value');
const animateInput = document.querySelector('#animate');
const hideInput = document.querySelector('#hide');

const progress = new Progress({
    value: Number(valueInput.value),
    animated: animateInput.checked,
    hidden: hideInput.checked,
});

progress.mount(progressContainer);

valueInput.addEventListener('input', (event) => {
    progress.setValue(event.target.value);
    valueInput.value = progress.getValue();
});

animateInput.addEventListener('change', (event) => {
    progress.setAnimated(event.target.checked);
});

hideInput.addEventListener('change', (event) => {
    progress.setHidden(event.target.checked);
});