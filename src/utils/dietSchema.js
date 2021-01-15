const dietSchema = {
  keto: {
    name: 'Standard Ketogenic Diet',
    macro: {
      carbs: '5%',
      proteins: '20%',
      fats: '75%'
    },
    description: 'Ketosis rules! Ditch carbs for fats and you will feel the difference.'
  },
  paleo: {
    name: 'Paleo Diet',
    macro: {
      carbs: '30%',
      proteins: '30%',
      fats: '40%'
    },
    description: 'Includes lean meats, fish, eggs, vegetables, fruits, berries, nuts, avocado, and olive oil.'
  },
  greekMedi: {
    name: 'Greek-Mediterranean Diet',
    macro: {
      carbs: '40%',
      proteins: '20%',
      fats: '40%'
    },
    description: 'While there is no single definition of the Mediterranean diet, it is typically high in vegetables, fruits, whole grains, beans, nut and seeds, and olive oil.'
  },
  carni: {
    name: 'Carnivore Diet',
    macro: {
      carbs: '0%',
      proteins: '0%',
      fats: '0%'
    },
    description: 'Unlike keto, there’s no general macronutrient percentage to follow when eating a carnivore diet.',
  }, 
}

export default dietSchema