const faker = require('faker');

function generateShareSprintUserProfile() {
  const userProfile = {
    full_name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    location: faker.address.city() + ", " + faker.address.stateAbbr() + ", " + faker.address.countryCode(),
    job_title: faker.name.jobTitle(),
    industry: faker.company.industry(),
    company_size: faker.random.number({ min: 50, max: 1000 }) + ' employees',
    annual_revenue: '$' + faker.random.number({ min: 1, max: 50 }) + ' million',
    years_in_business: faker.random.number({ min: 1, max: 20 }) + ' years',
    average_time_spent_on_website: faker.random.number({ min: 5, max: 30 }) + ' minutes',
    number_of_website_visits_per_month: faker.random.number({ min: 1, max: 20 }),
    number_of_successful_referrals: faker.random.number({ min: 0, max: 10 }),
    most_visited_product_category: faker.commerce.department(),
    average_purchase_value: '$' + faker.random.number({ min: 100, max: 500 }),
    customer_lifetime_value: '$' + faker.random.number({ min: 1000, max: 10000 }),
    number_of_customer_support_interactions: faker.random.number({ min: 0, max: 20 }),
    preferred_communication_channel: faker.random.arrayElement(['Email', 'Phone', 'SMS', 'In-App']),
    churn_probability: faker.random.number({ min: 5, max: 30 }) + '%',
    likelihood_of_upgrading_to_higher_plan: faker.random.number({ min: 30, max: 90 }) + '%',
    estimated_clv_in_the_next_year: '$' + faker.random.number({ min: 2000, max: 15000 }),
    next_likely_purchase_category: faker.commerce.department(),
    preferred_time_of_day_for_receiving_communications: faker.random.arrayElement(['10 AM', '2 PM', '6 PM', '9 PM']),
    likelihood_of_attending_share_sprint_webinar: faker.random.number({ min: 20, max: 90 }) + '%',
    likelihood_of_participating_in_customer_survey: faker.random.number({ min: 30, max: 100 }) + '%'
  };

  return userProfile;
}

// To generate a fake profile
const fakeProfile = generateShareSprintUserProfile();
console.log(fakeProfile);
