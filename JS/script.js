const boton1 = document.getElementById('c');
const boton2 = document.getElementById('r');
const boton3 = document.getElementById('p');
const div1 = document.getElementById('cyber');
const div2 = document.getElementById('redes');
const div3 = document.getElementById('Progra');
div1.style.display='none'
div2.style.display = 'none';
div3.style.display = 'none';

boton1.addEventListener('click', () => {
    div1.style.display='inline'
  div2.style.display = 'none';
  div3.style.display = 'none';
});

boton2.addEventListener('click', () => {
    div2.style.display='inline'
    div1.style.display = 'none';
   div3.style.display = 'none';
});
boton3.addEventListener('click', () => {
    div3.style.display='inline'
    div1.style.display = 'none';
    div2.style.display = 'none';
  });
