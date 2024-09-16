import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CountiesService } from '../counties/counties.service';

const countiesData = [
  {
    name: 'Stockholm',
    center: [59.3293, 18.0686],
    population: 2377081,
    area: 6519,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Västra Götaland',
    center: [57.7089, 11.9746],
    population: 1745149,
    area: 23942,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Skåne',
    center: [55.605, 13.0038],
    population: 1386897,
    area: 11034,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Uppsala',
    center: [59.8586, 17.6389],
    population: 383713,
    area: 8207,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Södermanland',
    center: [59.1753, 16.3606],
    population: 303895,
    area: 6060,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Östergötland',
    center: [58.4108, 15.6214],
    population: 473733,
    area: 10603,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Jönköping',
    center: [57.7826, 14.1618],
    population: 382443,
    area: 10495,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Kronoberg',
    center: [56.8777, 14.8091],
    population: 203022,
    area: 8466,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Kalmar',
    center: [56.6634, 16.3567],
    population: 245415,
    area: 11204,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Gotland',
    center: [57.6367, 18.2947],
    population: 61188,
    area: 3184,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Blekinge',
    center: [56.2784, 15.7698],
    population: 159606,
    area: 3060,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Halland',
    center: [56.8969, 12.8032],
    population: 343084,
    area: 5454,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Värmland',
    center: [59.5801, 13.1277],
    population: 282424,
    area: 17791,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Örebro',
    center: [59.2741, 15.2066],
    population: 305643,
    area: 8545,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Västmanland',
    center: [59.6099, 16.5448],
    population: 275634,
    area: 5150,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Dalarna',
    center: [60.4853, 14.9023],
    population: 287779,
    area: 28189,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Gävleborg',
    center: [60.6749, 16.9114],
    population: 287676,
    area: 18199,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Västernorrland',
    center: [62.6156, 17.9244],
    population: 245346,
    area: 21685,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Jämtland',
    center: [63.0484, 14.3055],
    population: 130807,
    area: 49341,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Västerbotten',
    center: [64.6357, 18.3308],
    population: 271736,
    area: 55248,
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Norrbotten',
    center: [66.8309, 20.3991],
    population: 250093,
    area: 98244,
    isRegion: true,
    hasAgreement: true,
  },
];

async function bootstrap() {
  console.log('Starting seeding process...'); // Log start
  const app = await NestFactory.createApplicationContext(AppModule);
  const countiesService = app.get(CountiesService);

  for (const county of countiesData) {
    try {
      await countiesService.create(county);
      console.log(`Added ${county.name} to the database.`); // Log each added entry
    } catch (error) {
      console.error(`Failed to add ${county.name}:`, error.message); // Log errors
    }
  }

  console.log('Seeding counties complete');
  await app.close();
}

bootstrap();