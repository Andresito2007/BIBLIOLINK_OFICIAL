# BIBLIOLINK
![IMAGEN DE BIBLIOLINK](https://th.bing.com/th/id/OIP.J6MuYuB048SIWCpy3a4JnQHaHa?w=173&h=180&c=7&r=0&o=7&pid=1.7&rm=3)

- BIENVENIDO A BIBLIOLINK PAGINA DONDE PODRAS RESERVAS TUS PRESTAMOS DE LIBROS Y VERLOS

# INTEGRANTES
![IMAGEN DE EQUIPO](https://th.bing.com/th/id/OIP.ImSptT9FDRbxefGhD1vcxAHaDp?w=317&h=172&c=7&r=0&o=7&pid=1.7&rm=3)

- Estefano ochupe

- Andres Choqque

- Rodrigo Tomayquispe

- Rodolfo pariona Quinto

# CONCEPTOS PREVIOS

## ANGULAR
![IMAGEN DE ANGULAR](https://th.bing.com/th/id/OIP.CdcJMpd9jQpmER1LTOwwZwHaD4?w=343&h=180&c=7&r=0&o=7&pid=1.7&rm=3)

- Es un Frakmework de desarrollo para crear apliccacions modernas orientado a componentes

## COMPONENTES: 
- Nos ayudan a modularisar nuestra pagina osea vamos a 

- ir creando componentes segun nuestras necesidades

## SERVICIOS

- Nos permiten separar la logica y los datos que pueden ser reutilizados por componentes distitnos

- La idea es poder "inyectar" ese servcio en cualquier componente

## COMANDOS:
![ALGUNOS COMANDOS DE ANGULAR](https://th.bing.com/th/id/OIP.Qit_mvojOE02ouOPgerfywHaEH?w=303&h=180&c=7&r=0&o=7&pid=1.7&rm=3)

- ng serve (para levantar nuestro servidor)

- ng g c ( para crear un componente)

- ng g s (para crear un servicio)

- ng g g (para crear un guard)

# PASOS:

- INSTALAR NODE JS

- INSTALAR VISUAL STUDIO CODE

- EN LA CARPETA CREADA DE BIBLIOLINK ACCEDEMOS A TERMINAL Y PONEMOS "NPM INSTALL -G @angular/cli"

- (PARA PODER  USAR ANGULAR)

- Ahora creamos nuestro primer poyecto en angular con (ng new bibliolink (nombre de nuestro proyecto))

- importamos boostrap para usarlo (INTEGRAMOS BOOSTRAP)

- creamos nuestro componentes

- obeservacioons: la logica de ts la trabajremos en nuestras variables en .ts (nuestra logica en cada componente ejemplo : inicio.ts ahi se escribe su logica)  ejemplo nombre: string ="nombre1" y lo usa en {{nombre}}

- MODULOS QUE USAMOS :
  -  FormsModule 
  -  CommonModule
  -  RouterLink ( para navegar entre rutas)
  -  inject
  -  RouterLinkActive

- Creamos nuestros Servicios para guardar nuestros datos y manejarlo

- porque si los ponemos en un componente mismo no podremos compartirlos con los otros componente

- implementamos uso de GUARD ( FILTRO DE SEGURIDAD)

- ¿Porque usamos guard? si nos damos cuenta cualquier usarios que haga 

-  http://localhost:4200/administracion va aentrar directo al panel de admin aunque no haya registraod como admin no hay un "portero" que verifica estp.

