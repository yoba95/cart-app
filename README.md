# 🛒 Cart App

[![Angular](https://img.shields.io/badge/Angular-20.1.6-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/status-en%20desarrollo-yellow?style=for-the-badge)]()

Aplicación web de **carrito de compras** desarrollada con **Angular + TypeScript**, que permite gestionar productos, agregarlos al carrito, calcular totales y eliminar artículos.  
Este proyecto forma parte de mis prácticas como Ingeniero en Informática, centradas en el aprendizaje de frameworks modernos y arquitectura modular.

---

## 🌟 Características principales

- 🧩 Listado de productos dinámico.  
- ➕ Agregar productos al carrito.  
- ➖ Eliminar o vaciar el carrito.  
- 💰 Cálculo automático del total.  
- 💾 Persistencia local del carrito (opcional: `localStorage`).  
- 📱 Interfaz responsive compatible con dispositivos móviles.  
- ⚙️ Arquitectura limpia con componentes, servicios y modelos en Angular.  
- 🚀 Preparado para ampliarse con backend, autenticación o pasarelas de pago.

---

## 🧰 Tecnologías utilizadas

| Categoría | Tecnología |
|------------|-------------|
| **Frontend Framework** | Angular CLI v20.1.6 |
| **Lenguaje** | TypeScript |
| **Estilos** | CSS3 / Angular Material (o Tailwind, según configuración) |
| **Gestión de Estado** | Servicios y Observables |
| **Empaquetador** | Angular CLI |
| **Pruebas** | Karma + Jasmine |
| **Control de versiones** | Git + GitHub |

---

## 📦 Instalación y ejecución local

### 🔧 Requisitos previos
- Node.js **v18+**
-  Angular CLI instalado globalmente:
  ```bash
  npm install -g @angular/cli

cart-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── product-list/          # Lista de productos disponibles
│   │   │   ├── product-item/          # Componente individual de producto
│   │   │   ├── cart/                  # Vista y gestión del carrito
│   │   ├── services/
│   │   │   ├── cart.service.ts        # Lógica del carrito
│   │   │   └── product.service.ts     # Fuente de datos de productos
│   │   ├── models/
│   │   │   ├── product.model.ts       # Definición de interfaz Product
│   │   │   └── cart-item.model.ts     # Definición de CartItem
│   │   ├── pages/
│   │   │   ├── home/                  # Página principal (listado)
│   │   │   └── checkout/              # Página de resumen/pago (opcional)
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │   └── app.component.ts
│   ├── assets/
│   │   ├── img/                       # Imágenes y recursos
│   │   └── styles/                    # Hojas de estilo globales
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   └── index.html
├── angular.json
├── package.json
└── README.md

  
- npm **v9+** o **yarn**

