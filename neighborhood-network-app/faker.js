const faker = require('faker');

// Extending Faker.js to create NeighborNexus profiles
faker.neighborNexus = () => {
  return {
    'profile_overview': {
      'name': faker.name.findName(),
      'age': faker.random.number({ min: 18, max: 65 }),
      'gender': faker.random.arrayElement(['Male', 'Female']),
      'location': faker.address.city() + ', ' + faker.address.stateAbbr(),
      'occupation': faker.name.jobTitle(),
      'marital status': faker.random.arrayElement(['Married', 'Single', 'Divorced', 'Widowed']),
      'children': faker.random.number({ min: 0, max: 5 }),
      'interests': faker.random.arrayElements([
        'Technology', 'Fitness', 'Movies', 'Travel', 'Music', 'Sports', 'Cooking', 'Gardening', 'Reading', 'Photography'
      ], faker.random.number({ min: 1, max: 5 }))
    },
    'computed_traits': {
      'tech_savvy': faker.random.arrayElement(['High', 'Medium', 'Low']),
      'fitness_enthusiast': faker.random.arrayElement(['High', 'Medium', 'Low']),
      'movie_buff': faker.random.arrayElement(['High', 'Medium', 'Low']),
      'travel_frequency': faker.random.arrayElement(['High', 'Medium', 'Low']),
      'social_activity': faker.random.arrayElement(['High', 'Medium', 'Low'])
    },
    'predictive_traits': {
      'homeownership': faker.random.arrayElement(['High', 'Medium', 'Low']),
      'online_shopping': faker.random.arrayElement(['High', 'Medium', 'Low']),
      'fitness_product_purchases': faker.random.arrayElement(['High', 'Medium', 'Low']),
      'streaming_service_subscriptions': faker.random.arrayElement(['High', 'Medium', 'Low']),
      'smart_home_device_adoption': faker.random.arrayElement(['High', 'Medium', 'Low']),
      'interest_in_electric_vehicles': faker.random.arrayElement(['High', 'Medium', 'Low']),
      'family_vacations': faker.random.arrayElement(['High', 'Medium', 'Low']),
      'community_engagement': faker.random.arrayElement(['High', 'Medium', 'Low'])
    }
  };
};

// Generating a fake NeighborNexus profile
const fakeProfile = faker.neighborNexus();
console.log(fakeProfile);
