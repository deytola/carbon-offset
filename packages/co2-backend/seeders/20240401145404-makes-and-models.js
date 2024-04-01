'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const MakesAndModels = [
      {
        make: {
          name: 'Toyota',
          originCountry: 'Japan',
        },
        models: [
          {
            modelName: 'Corolla',
            year: 2024,
            mttRatio: 0.09,
          },
          {
            modelName: 'Camry',
            year: 2024,
            mttRatio: 1.19,
          },
          {
            modelName: 'RAV4',
            year: 2024,
            mttRatio: 0.08,
          },
          {
            modelName: 'Tacoma',
            year: 2024,
            mttRatio: 1.01,
          },
          {
            modelName: 'Highlander',
            year: 2024,
            mttRatio: 1.22,
          },
        ],
      },
      {
        make: {
          name: 'Honda',
          originCountry: 'Japan',
        },
        models: [
          {
            modelName: 'Civic',
            year: 2024,
            mttRatio: 0.49,
          },
          {
            modelName: 'Accord',
            year: 2024,
            mttRatio: 1.0,
          },
          {
            modelName: 'CR-V',
            year: 2024,
            mttRatio: 0.77,
          },
          {
            modelName: 'Pilot',
            year: 2024,
            mttRatio: 0.8,
          },
          {
            modelName: 'Odyssey',
            year: 2024,
            mttRatio: 1.36,
          },
        ],
      },
      {
        make: {
          name: 'Chrysler',
          originCountry: 'United States',
        },
        models: [
          {
            modelName: 'Pacifica',
            year: 2024,
            mttRatio: 0.31,
          },
          {
            modelName: '300',
            year: 2024,
            mttRatio: 0.38,
          },
          {
            modelName: 'Pacifica Hybrid',
            year: 2024,
            mttRatio: 0.28,
          },
          {
            modelName: 'Town & Country',
            year: 2024,
            mttRatio: 0.35,
          },
        ],
      },
      {
        make: {
          name: 'Ford',
          originCountry: 'United States',
        },
        models: [
          {
            modelName: 'F-Series',
            year: 2024,
            mttRatio: 1.2,
          },
          {
            modelName: 'Mustang',
            year: 2024,
            mttRatio: 0.8,
          },
          {
            modelName: 'Escape',
            year: 2024,
            mttRatio: 0.7,
          },
          {
            modelName: 'Explorer',
            year: 2024,
            mttRatio: 1.0,
          },
          {
            modelName: 'Bronco',
            year: 2024,
            mttRatio: 1.1,
          },
        ],
      },
      {
        make: {
          name: 'Chevrolet',
          originCountry: 'United States',
        },
        models: [
          {
            modelName: 'Silverado',
            year: 2024,
            mttRatio: 1.3,
          },
          {
            modelName: 'Camaro',
            year: 2024,
            mttRatio: 0.85,
          },
          {
            modelName: 'Equinox',
            year: 2024,
            mttRatio: 0.75,
          },
          {
            modelName: 'Tahoe',
            year: 2024,
            mttRatio: 1.1,
          },
          {
            modelName: 'Suburban',
            year: 2024,
            mttRatio: 1.4,
          },
        ],
      },
      {
        make: {
          name: 'Jeep',
          originCountry: 'United States',
        },
        models: [
          {
            modelName: 'Wrangler',
            year: 2024,
            mttRatio: 1.45,
          },
          {
            modelName: 'Grand Cherokee',
            year: 2024,
            mttRatio: 1.0,
          },
          {
            modelName: 'Cherokee',
            year: 2024,
            mttRatio: 0.8,
          },
          {
            modelName: 'Compass',
            year: 2024,
            mttRatio: 0.7,
          },
          {
            modelName: 'Renegade',
            year: 2024,
            mttRatio: 0.65,
          },
        ],
      },
      {
        make: {
          name: 'RAM',
          originCountry: 'United States',
        },
        models: [
          {
            modelName: '1500',
            year: 2024,
            mttRatio: 1.25,
          },
          {
            modelName: '2500',
            year: 2024,
            mttRatio: 1.35,
          },
          {
            modelName: '3500',
            year: 2024,
            mttRatio: 1.4,
          },
          {
            modelName: 'Charger',
            year: 2024,
            mttRatio: 0.9,
          },
          {
            modelName: 'Challenger',
            year: 2024,
            mttRatio: 0.8,
          },
        ],
      },
      {
        make: {
          name: 'Nissan',
          originCountry: 'Japan',
        },
        models: [
          {
            modelName: 'Sentra',
            year: 2024,
            mttRatio: 0.8,
          },
          {
            modelName: 'Altima',
            year: 2024,
            mttRatio: 0.9,
          },
          {
            modelName: 'Rogue',
            year: 2024,
            mttRatio: 1.1,
          },
          {
            modelName: 'Pathfinder',
            year: 2024,
            mttRatio: 1.2,
          },
          {
            modelName: 'Titan',
            year: 2024,
            mttRatio: 1.3,
          },
        ],
      },
      {
        make: {
          name: 'Hyundai',
          originCountry: 'South Korea',
        },
        models: [
          {
            modelName: 'Elantra',
            year: 2024,
            mttRatio: 0.7,
          },
          {
            modelName: 'Sonata',
            year: 2024,
            mttRatio: 0.85,
          },
          {
            modelName: 'Tucson',
            year: 2024,
            mttRatio: 1.0,
          },
          {
            modelName: 'Palisade',
            year: 2024,
            mttRatio: 1.25,
          },
          {
            modelName: 'Santa Fe',
            year: 2024,
            mttRatio: 1.15,
          },
        ],
      },
      {
        make: {
          name: 'Kia',
          originCountry: 'South Korea',
        },
        models: [
          {
            modelName: 'Forte',
            year: 2024,
            mttRatio: 0.65,
          },
          {
            modelName: 'Optima',
            year: 2024,
            mttRatio: 0.8,
          },
          {
            modelName: 'Sportage',
            year: 2024,
            mttRatio: 0.95,
          },
          {
            modelName: 'Telluride',
            year: 2024,
            mttRatio: 1.3,
          },
          {
            modelName: 'Sorento',
            year: 2024,
            mttRatio: 1.2,
          },
        ],
      },
      {
        make: {
          name: 'Subaru',
          originCountry: 'Japan',
        },
        models: [
          {
            modelName: 'Impreza',
            year: 2024,
            mttRatio: 0.8,
          },
          {
            modelName: 'WRX',
            year: 2024,
            mttRatio: 1.2,
          },
          {
            modelName: 'Legacy',
            year: 2024,
            mttRatio: 0.9,
          },
          {
            modelName: 'Outback',
            year: 2024,
            mttRatio: 0.75,
          },
          {
            modelName: 'Forester',
            year: 2024,
            mttRatio: 0.85,
          },
        ],
      },
      {
        make: {
          name: 'Volkswagen',
          originCountry: 'Germany',
        },
        models: [
          {
            modelName: 'Jetta',
            year: 2024,
            mttRatio: 0.7,
          },
          {
            modelName: 'Passat',
            year: 2024,
            mttRatio: 0.8,
          },
          {
            modelName: 'Tiguan',
            year: 2024,
            mttRatio: 0.75,
          },
          {
            modelName: 'Atlas',
            year: 2024,
            mttRatio: 0.85,
          },
          {
            modelName: 'Golf',
            year: 2024,
            mttRatio: 0.65,
          },
        ],
      },
      {
        make: {
          name: 'BMW',
          originCountry: 'Germany',
        },
        models: [
          {
            modelName: '3 Series',
            year: 2024,
            mttRatio: 1.1,
          },
          {
            modelName: '5 Series',
            year: 2024,
            mttRatio: 1.05,
          },
          {
            modelName: 'X3',
            year: 2024,
            mttRatio: 0.95,
          },
          {
            modelName: 'X5',
            year: 2024,
            mttRatio: 1.0,
          },
          {
            modelName: 'M3',
            year: 2024,
            mttRatio: 1.3,
          },
        ],
      },
      {
        make: {
          name: 'Mercedes-Benz',
          originCountry: 'Germany',
        },
        models: [
          {
            modelName: 'C-Class',
            year: 2024,
            mttRatio: 1.15,
          },
          {
            modelName: 'E-Class',
            year: 2024,
            mttRatio: 1.1,
          },
          {
            modelName: 'GLC',
            year: 2024,
            mttRatio: 1.0,
          },
          {
            modelName: 'GLE',
            year: 2024,
            mttRatio: 1.05,
          },
          {
            modelName: 'S-Class',
            year: 2024,
            mttRatio: 1.2,
          },
        ],
      },
      {
        make: {
          name: 'Audi',
          originCountry: 'Germany',
        },
        models: [
          {
            modelName: 'A3',
            year: 2024,
            mttRatio: 0.8,
          },
          {
            modelName: 'A4',
            year: 2024,
            mttRatio: 0.9,
          },
          {
            modelName: 'Q3',
            year: 2024,
            mttRatio: 0.75,
          },
          {
            modelName: 'Q5',
            year: 2024,
            mttRatio: 0.85,
          },
          {
            modelName: 'A5',
            year: 2024,
            mttRatio: 0.9,
          },
        ],
      },
      {
        make: {
          name: 'Lexus',
          originCountry: 'Japan',
        },
        models: [
          {
            modelName: 'ES',
            year: 2024,
            mttRatio: 0.6,
          },
          {
            modelName: 'RX',
            year: 2024,
            mttRatio: 0.55,
          },
          {
            modelName: 'IS',
            year: 2024,
            mttRatio: 0.8,
          },
          {
            modelName: 'LX',
            year: 2024,
            mttRatio: 0.45,
          },
          {
            modelName: 'GX',
            year: 2024,
            mttRatio: 0.4,
          },
        ],
      },
    ];
    for (let makeAndModels of MakesAndModels) {
      const makeData = makeAndModels.make;
      const nameToFind = makeData.name;
      await queryInterface.bulkInsert('Makes', [{ ...makeData }], {});
      const savedMake = await queryInterface.sequelize.query(
        `SELECT * FROM "Makes" m where name = '${nameToFind}'`,
        {
          type: queryInterface.sequelize.QueryTypes.SELECT,
        },
      );

      const fk_make_id = savedMake[0].id;

      const models = makeAndModels.models.map((model) =>
        Object.assign(model, { fk_make_id }),
      );

      await queryInterface.bulkInsert('Models', models, {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Models', null, {});
    await queryInterface.bulkDelete('Makes', null, {});
  },
};
