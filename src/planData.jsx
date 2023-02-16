const plan = [
  {
    menu: 'How do you drink your coffee?',
    content: [
      {
        title: 'Capsule',
        description: 'Compatible with Nespresso systems and similar brewers',
        isSelected: false,
      },
      {
        title: 'Filter',
        description:
          'For pour over or drip methods like Aeropress, Chemex, and V60',
        isSelected: false,
      },
      {
        title: 'Espresso',
        description:
          'Dense and finely ground beans for an intense, flavorful experience',
        isSelected: false,
      },
    ],
  },
  {
    menu: 'What type of coffee?',
    content: [
      {
        title: 'Single Origin',
        description:
          'Distinct, high quality coffee from a specific family-owned farm',
        isSelected: false,
      },
      {
        title: 'Decaf',
        description:
          'Just like regular coffee, except the caffeine has been removed',
        isSelected: false,
      },
      {
        title: 'Blended',
        description:
          'Combination of two or three dark roasted beans of organic coffees',
        isSelected: false,
      },
    ],
  },
  {
    menu: 'How much would you like?',
    content: [
      {
        title: '250g',
        description:
          'Perfect for the solo drinker. Yields about 12 delicious cups.',
        isSelected: false,
      },
      {
        title: '500g',
        description:
          'Perfect option for a couple. Yields about 40 delectable cups.',
        isSelected: false,
      },
      {
        title: '1000g',
        description:
          'Perfect for offices and events. Yields about 90 delightful cups.',
        isSelected: false,
      },
    ],
  },
  {
    menu: 'Want us to grind them?',
    content: [
      {
        title: 'Wholebean',
        description: 'Best choice if you cherish the full sensory experience',
        isSelected: false,
      },
      {
        title: 'Filter',
        description:
          'For drip or pour-over coffee methods such as V60 or Aeropress',
        isSelected: false,
      },
      {
        title: 'Cafetiére',
        description:
          'Course ground beans specially suited for french press coffee',
        isSelected: false,
      },
    ],
  },
  {
    menu: 'How often should we deliver?',
    content: [
      {
        title: 'Every week',
        description: '$7.20 per shipment. Includes free first-class shipping.',
        isSelected: false,
      },
      {
        title: 'Every 2 weeks',
        description: '$9.60 per shipment. Includes free priority shipping.',
        isSelected: false,
      },
      {
        title: 'Every month',
        description: '$12.00 per shipment. Includes free priority shipping.',
        isSelected: false,
      },
    ],
  },
];

export default plan;
