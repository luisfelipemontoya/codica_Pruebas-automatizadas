import capitalize from '../src/capitalize.js'

if (capitalize('hello') != 'Hello') {
throw new Error('Error: no capitaliza "hello" correctamente');
}

if (capitalize('') != '') {
throw new Error('Error: no maneja cadena vacía correctamente');
}

if (capitalize('world') !== 'World') {
  throw new Error('Error: no capitaliza "world" correctamente');
}

if (capitalize('javaScript') !== 'JavaScript') {
  throw new Error('Error: no respeta el resto de la palabra');
}

console.log('✅ ¡Todas las pruebas han pasado!');
 
