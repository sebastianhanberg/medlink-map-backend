import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CountiesService } from '../counties/counties.service';

const countiesData = [
  {
    name: 'Stockholm',
    center: [59.3293, 18.0686],
    
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Västra Götaland',
    center: [57.7089, 11.9746],
    
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Skåne',
    center: [55.605, 13.0038],
    
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Uppsala',
    center: [59.8586, 17.6389],
   
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Södermanland',
    center: [59.1753, 16.3606],
    
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Östergötland',
    center: [58.4108, 15.6214],
    
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Jönköping',
    center: [57.7826, 14.1618],
    
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Kronoberg',
    center: [56.8777, 14.8091],
   
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Kalmar',
    center: [56.6634, 16.3567],
    
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Gotland',
    center: [57.6367, 18.2947],
  
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Blekinge',
    center: [56.2784, 15.7698],
  
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Halland',
    center: [56.8969, 12.8032],
  
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Värmland',
    center: [59.5801, 13.1277],
  
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Örebro',
    center: [59.2741, 15.2066],
  
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Västmanland',
    center: [59.6099, 16.5448],
  
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Dalarna',
    center: [60.4853, 14.9023],
  
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Gävleborg',
    center: [60.6749, 16.9114],
    
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Västernorrland',
    center: [62.6156, 17.9244],
    
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Jämtland',
    center: [63.0484, 14.3055],
    
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Västerbotten',
    center: [64.6357, 18.3308],
    
    isRegion: true,
    hasAgreement: true,
  },
  {
    name: 'Norrbotten',
    center: [66.8309, 20.3991],
    
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