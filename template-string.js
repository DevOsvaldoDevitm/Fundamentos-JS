const nombre = 'Deadpool';
const nomreal = 'Wade Wilson';


const normal = nombre + ' ' + nomreal;
const template = `${ nombre } ${ nomreal }`;

const html = `
<h1>Hola</h1>
<p>Soy un template string</p>
`;


console.log(normal);
console.log(template);
console.log(html);

// console.log(normal === template)