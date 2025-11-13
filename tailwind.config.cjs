module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          rojoPasion: '#C41E3A', // Rojo Pasión
          rojoVino: '#8B1538', // Rojo Vino
          cream: '#FFF5E1', // Crema Suave
          gold: '#D4AF37', // Dorado Elegante
          rosaFresa: '#FF6B9D', // Rosa Fresa
          rosaChicle: '#FF92B0', // Rosa Chicle
          rosaPalido: '#FFF1F4', // Rosa Pálido
          chocolate: '#5D4037', // Chocolate (texto)
          pearl: '#F5F5F0' // Gris Perla
        }
      },
      fontFamily: {
        title: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
}
