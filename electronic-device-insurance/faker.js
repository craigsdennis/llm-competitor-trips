const faker = require('faker');

function generateInnovisureUserProfile() {
  const interests = [
    'Technology innovations',
    'cybersecurity',
    'IoT',
    'smart home devices',
    'fitness',
    'travel',
  ];

  const preferredChannels = ['Email', 'social media', 'mobile app notifications'];

  const favoriteProducts = [
    'Smart home devices',
    'wearable tech',
    'cybersecurity software',
  ];

  const productRecommendations = [
    'IoT security solutions',
    'advanced fitness wearables',
    'innovative smart home devices',
  ];

  const crossSellPotential = [
    'cybersecurity',
    'smart home systems',
    'cutting-edge gadgets',
  ];

  return {
    name: faker.name.findName(),
    age: faker.random.number({ min: 18, max: 65 }),
    gender: faker.random.arrayElement(['Male', 'Female']),
    location: faker.address.city(),
    occupation: faker.name.jobTitle(),
    income: faker.random.number({ min: 30000, max: 150000 }),
    education: faker.random.arrayElement([
      "Bachelor's Degree",
      "Master's Degree",
      "Ph.D.",
      "Associate's Degree",
      "High School Diploma",
    ]),
    interests: faker.helpers.shuffle(interests).slice(0, 3),
    preferred_channels: faker.helpers.shuffle(preferredChannels),
    favorite_products: faker.helpers.shuffle(favoriteProducts).slice(0, 2),
    account_created: faker.date.past(5),
    last_purchase: faker.date.recent(),
    purchase_frequency: faker.random.arrayElement([
      '1-2 times per year',
      '3-4 times per year',
      '5-6 times per year',
      '7+ times per year',
    ]),
    average_order_value: faker.random.number({ min: 50, max: 500 }),
    lifetime_value: faker.random.number({ min: 500, max: 10000 }),
    products_viewed: faker.random.number({ min: 10, max: 200 }),
    products_purchased: faker.random.number({ min: 1, max: 50 }),
    referrals: faker.random.number({ min: 0, max: 10 }),
    customer_satisfaction_score: faker.random.number({ min: 1, max: 10 }),
    computed_traits: {
      tech_enthusiast: faker.random.boolean(),
      early_adopter: faker.random.boolean(),
      brand_loyal: faker.random.boolean(),
    },
    predictive_traits: {
      product_recommendations: faker.helpers.shuffle(productRecommendations).slice(0, 3),
      churn_probability: faker.random.arrayElement(['low', 'medium', 'high']),
      cross_sell_potential: faker.helpers.shuffle(crossSellPotential).slice(0, 2),
      response_to_marketing_campaigns: faker.helpers.shuffle(preferredChannels).slice(0, 2),
      future_lifetime_value: faker.random.arrayElement(['expected to grow', 'likely stable', 'potential decline']),
    },
  };
}

// Generate a fake Innovisure user profile
const fakeUserProfile = generateInnovisureUserProfile();
console.log(fakeUserProfile);
