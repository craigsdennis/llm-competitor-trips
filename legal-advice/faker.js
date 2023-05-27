const faker = require('faker');

function generateLegallySavviProfile() {
  const profile = {
    profile_id: `LS-${faker.random.number({ min: 10000, max: 99999 })}`,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    age: faker.random.number({ min: 20, max: 65 }),
    gender: faker.name.gender(),
    location: faker.address.cityName() + ', ' + faker.address.stateAbbr(),
    occupation: 'Paralegal',
    education: "Bachelor's degree in Legal Studies",
    interests: [
      'Legal research',
      'Contract drafting',
      'Intellectual property',
      'Criminal law',
      'Family law',
      'Real estate law',
    ],
    behavioral_data: {
      website_visits_per_week: faker.random.number({ min: 1, max: 7 }),
      average_session_duration_minutes: faker.random.number({ min: 5, max: 20 }),
      preferred_article_topics: [
        'Legal research',
        'Criminal law',
      ],
      social_media_shares: faker.random.boolean(),
      webinars_attended: faker.random.number({ min: 0, max: 5 }),
    },
    computed_traits: {
      high_engagement: faker.random.boolean(),
      strong_interest_criminal_law: faker.random.boolean(),
      strong_interest_legal_research: faker.random.boolean(),
      likely_attend_webinars: faker.random.boolean(),
      potential_brand_advocate: faker.random.boolean(),
    },
    predictive_traits: {
      likely_enroll_advanced_course: faker.random.boolean(),
      high_recommendation_probability: faker.random.boolean(),
      potential_premium_member: faker.random.boolean(),
      interested_in_conference: faker.random.boolean(),
    },
  };

  return profile;
}

const fakeProfile = generateLegallySavviProfile();
console.log(fakeProfile);
