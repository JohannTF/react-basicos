# 📘 React Basics Study Repo

Este repositorio contiene ejemplos y conceptos básicos de **React** para aprender y practicar un poco.

## 📖 Índice
> - [📌 Temas cubiertos](#-temas-cubiertos)
> - [🚀 Cómo usar este repositorio](#-cómo-usar-este-repositorio)
> - [📂 Estructura del proyecto](#-estructura-del-proyecto)
> - [📜 Available Scripts](#-available-scripts)
>   - [🚀 `npm start`](#-npm-start)
>   - [🧪 `npm test`](#-npm-test)
>   - [🏗️ `npm run build`](#️-npm-run-build)
>   - [⚠️ `npm run eject`](#️-npm-run-eject)
> - [📚 Recursos adicionales](#-recursos-adicionales)

---

## 📌 Temas cubiertos
✅ **Conceptos fundamentales de React**:
- 🔹 **Eventos en React**  
- 🔹 **Propiedades (Props)**  
- 🔹 **Renderizado condicional**  
- 🔹 **Ciclo de vida de los componentes**  
- 🔹 **Comunicación entre componentes**  
- 🔹 **Uso de APIs con Fetch**
- 🔹 **Renderizado de elementos**

## 🚀 Cómo usar este repositorio
⚡ **Antes de empezar, asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.**  
Luego, sigue estos pasos:

1️⃣ **Clonar el repositorio**
```bash
git clone https://github.com/JohannTF/react-basicos.git && cd react-basicos
```
2️⃣ **Instalar dependencias**
``` sh
npm install
```
3️⃣ **Ejecutar el servidor de desarrollo**
``` sh
npm start
```
📌 Luego, abre 👉 http://localhost:3000 en tu navegador.

## 📂 Estructura del proyecto
``` sh
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── components
│   │   ├── AjaxApis.js
│   │   ├── CicloVida.js
│   │   ├── Componente.js
│   │   ├── ComunicacionComponente.js
│   │   ├── Estado.js
│   │   ├── Eventos.js
│   │   ├── Propiedades.js
│   │   ├── ReactSnippets.jsx
│   │   ├── RenderizadoCondicional.js
│   │   └── RenderizadoElementos.js
│   ├── helpers
│   │   └── data.json
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── structure-project.txt
├── structure-proyect.txt
└── structure.txt

4 directories, 29 files
```

## 📜 Available Scripts
En el directorio del proyecto, puedes ejecutar cualquiera de los siguientes comandos definidos en [package.json](./package.json):

### 🚀 `npm start`
Ejecuta la aplicación en **modo de desarrollo**.  
Abre 👉 [http://localhost:3000](http://localhost:3000) en tu navegador.

### 🧪 `npm test`
Ejecuta el test runner en **modo interactivo**.

### 🏗️ `npm run build`
Genera una **versión optimizada** de la aplicación en la carpeta `build/`.

### ⚠️ `npm run eject`
🔴 **Nota:** Esta es una acción irreversible. Extrae todas las configuraciones del proyecto y te da control total sobre la configuración de Webpack, Babel y más.