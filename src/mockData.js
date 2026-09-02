// Mock data for service providers
export const generateMockData = () => {
  const vendorTypes = ['Independent', 'Company'];
  const serviceOfferings = ['Housekeeping', 'Window Cleaning', 'Car Valet'];
  const statuses = ['Onboarded', 'Rejected'];
  
  const ukPostcodes = [
    'SW1A 1AA', 'EC1A 1BB', 'W1A 0AX', 'M1 1AE', 'B33 8TH',
    'C5 9UN', 'EH8 8DX', 'B33 8TH', 'CR2 6XH', 'DN55 1PT',
    'DE55 4EU', 'GL50 1GY', 'HG51 9PY', 'LS2 7EQ', 'M50 1BL',
    'OX1 1AA', 'PE1 1SA', 'SR5 1SU', 'ST16 3EH', 'SW19 4DU',
    'EH8 8DX', 'G2 1BD', 'BT1 5GS'
  ];

  const firstNames = [
    'John', 'Emma', 'Michael', 'Sarah', 'David', 'Jessica', 'Robert', 'Mary',
    'James', 'Patricia', 'William', 'Linda', 'Richard', 'Barbara', 'Joseph',
    'Susan', 'Thomas', 'Jessica', 'Charles', 'Nancy', 'Christopher', 'Karen',
    'Daniel', 'Lisa', 'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark',
    'Sandra', 'Donald', 'Ashley'
  ];

  const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller',
    'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez',
    'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
    'Lee', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis'
  ];

  const companies = [
    'CleanCo', 'Sparkle Services', 'ProClean', 'Elite Cleaning', 'FreshHome',
    'ShineRight', 'DustFree', 'CareClean', 'PureServices', 'BrightHome'
  ];

  const data = [];

  for (let i = 0; i < 52; i++) {
    const isCompany = Math.random() > 0.5;
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = isCompany 
      ? companies[Math.floor(Math.random() * companies.length)]
      : `${firstName} ${lastName}`;

    const signupDate = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    
    data.push({
      id: i + 1,
      email: `${name.toLowerCase().replace(/\s/g, '.')}${i}@example.com`,
      phoneNumber: `+44 ${Math.floor(Math.random() * 9000) + 1000} ${Math.floor(Math.random() * 900000) + 100000}`,
      postcode: ukPostcodes[Math.floor(Math.random() * ukPostcodes.length)],
      vendorType: vendorTypes[Math.floor(Math.random() * vendorTypes.length)],
      serviceOffering: serviceOfferings[Math.floor(Math.random() * serviceOfferings.length)],
      signupDate: signupDate.toISOString().split('T')[0],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      name: name
    });
  }

  return data;
};

export const mockData = generateMockData();
