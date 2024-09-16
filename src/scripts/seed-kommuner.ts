import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { KommunerService } from '../kommuner/kommuner.service';

const kommunerData = [
  {
    name: 'Ale',
    center: [57.9333, 12.0833],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Alingsås',
    center: [57.9303, 12.5333],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Alvesta',
    center: [56.8982, 14.5511],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Aneby',
    center: [57.8333, 14.8167],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Arboga',
    center: [59.3934, 15.8376],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Arjeplog',
    center: [66.05, 17.8833],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Arvidsjaur',
    center: [65.59, 19.17],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Arvika',
    center: [59.6577, 12.5858],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Askersund',
    center: [58.8785, 14.9023],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Avesta',
    center: [60.1473, 16.1719],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Bengtsfors',
    center: [59.0276, 12.2277],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Berg',
    center: [62.65, 14.4667],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Bjurholm',
    center: [63.9333, 19.2167],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Bjuv',
    center: [56.0833, 12.9167],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Boden',
    center: [65.8256, 21.6889],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Bollebygd',
    center: [57.6679, 12.5982],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Bollnäs',
    center: [61.348, 16.3946],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Borgholm',
    center: [56.8801, 16.6568],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Borlänge',
    center: [60.4872, 15.4274],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Borås',
    center: [57.721, 12.9401],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Botkyrka',
    center: [59.1998, 17.8306],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Boxholm',
    center: [58.1931, 15.0525],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Bromölla',
    center: [56.0758, 14.4817],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Bräcke',
    center: [62.75, 15.4167],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Burlöv',
    center: [55.6497, 13.0793],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Båstad',
    center: [56.4257, 12.8547],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Dals-Ed',
    center: [58.9167, 11.9333],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Danderyd',
    center: [59.4, 18.0333],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Degerfors',
    center: [59.2369, 14.4333],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Dorotea',
    center: [64.2667, 16.4],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Eda',
    center: [59.9, 12.3667],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Ekerö',
    center: [59.2833, 17.8],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Eksjö',
    center: [57.6675, 14.9714],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Emmaboda',
    center: [56.6333, 15.5333],
    population: 9360,
    area: 707,
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Enköping',
    center: [59.6333, 17.0833],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Eskilstuna',
    center: [59.3667, 16.5167],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Eslöv',
    center: [55.8397, 13.3047],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Essunga',
    center: [58.1833, 12.6667],
   
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Fagersta',
    center: [60.0042, 15.7939],
 
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Falkenberg',
    center: [56.9056, 12.4919],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Falköping',
    center: [58.1733, 13.5508],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Falun',
    center: [60.6033, 15.6256],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Filipstad',
    center: [59.7128, 14.1651],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Finspång',
    center: [58.7078, 15.7681],
 
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Flen',
    center: [59.0589, 16.5878],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Forshaga',
    center: [59.5275, 13.4756],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Färgelanda',
    center: [58.4589, 11.9886],
 
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Gagnef',
    center: [60.5953, 15.0786],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Gislaved',
    center: [57.2992, 13.5397],
 
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Gnesta',
    center: [59.0483, 17.3125],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Gnosjö',
    center: [57.3628, 13.7392],
   
    isRegion: false,
    hasAgreement: false,
  },
  
  {
    name: 'Grums',
    center: [59.3517, 13.1097],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Grästorp',
    center: [58.3306, 12.6803],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Gullspång',
    center: [58.9869, 14.0944],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Gällivare',
    center: [67.1337, 20.6505],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Gävle',
    center: [60.6749, 17.1413],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Göteborg',
    center: [57.7089, 11.9746],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Götene',
    center: [58.5277, 13.4934],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Habo',
    center: [57.9167, 14.0833],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hagfors',
    center: [60.0344, 13.6654],
 
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hallsberg',
    center: [59.0653, 15.1086],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hallstahammar',
    center: [59.6142, 16.2292],
 
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Halmstad',
    center: [56.6745, 12.8576],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hammarö',
    center: [59.3, 13.5333],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Haninge',
    center: [59.1673, 18.1327],

    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Haparanda',
    center: [65.8358, 24.1303],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Heby',
    center: [60.0625, 16.8611],

    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hedemora',
    center: [60.2797, 15.9903],

    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Helsingborg',
    center: [56.0465, 12.6945],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Herrljunga',
    center: [58.0803, 13.0303],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hjo',
    center: [58.3011, 14.2828],

    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hofors',
    center: [60.5472, 16.2853],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Huddinge',
    center: [59.2376, 17.9819],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hudiksvall',
    center: [61.7281, 17.1039],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hultsfred',
    center: [57.4883, 15.8425],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hylte',
    center: [56.9897, 13.2356],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Håbo',
    center: [59.56, 17.5444],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hällefors',
    center: [59.7825, 14.5225],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Härjedalen',
    center: [62.0, 13.9167],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Härnösand',
    center: [62.6325, 17.9375],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Härryda',
    center: [57.6688, 12.2436],
   
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hässleholm',
    center: [56.1585, 13.7661],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Höganäs',
    center: [56.2, 12.5833],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Högsby',
    center: [57.1642, 16.0258],
 
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Hörby',
    center: [55.8519, 13.6678],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Höör',
    center: [55.9378, 13.5425],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Jokkmokk',
    center: [66.605, 19.8294],
  
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Järfälla',
    center: [59.4143, 17.8354],
   
    isRegion: false,
    hasAgreement: false,
  },
 
  {
    name: 'Kalix',
    center: [65.8556, 23.145],
    
    isRegion: false,
    hasAgreement: false,
  },
  
  {
    name: 'Karlsborg',
    center: [58.5369, 14.5056],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Karlshamn',
    center: [56.1706, 14.8622],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Karlskoga',
    center: [59.3267, 14.5231],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Karlskrona',
    center: [56.1612, 15.5869],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Karlstad',
    center: [59.3793, 13.5036],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Katrineholm',
    center: [58.995, 16.2075],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Kil',
    center: [59.5067, 13.3119],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Kinda',
    center: [58.0348, 15.6186],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Kiruna',
    center: [67.8557, 20.2251],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Klippan',
    center: [56.1316, 13.1294],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Knivsta',
    center: [59.7256, 17.7875],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Kramfors',
    center: [62.9275, 17.7897],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Kristianstad',
    center: [56.0313, 14.1527],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Kristinehamn',
    center: [59.3091, 14.1064],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Krokom',
    center: [63.3261, 14.4569],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Kumla',
    center: [59.1272, 15.1425],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Kungsbacka',
    center: [57.4875, 12.0767],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Kungsör',
    center: [59.4183, 16.1019],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Kungälv',
    center: [57.8713, 11.9809],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Kävlinge',
    center: [55.7912, 13.1086],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Köping',
    center: [59.5144, 15.9928],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Laholm',
    center: [56.5136, 13.0422],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Landskrona',
    center: [55.8708, 12.8308],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Laxå',
    center: [58.9817, 14.6192],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Lekeberg',
    center: [59.1678, 14.8956],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Leksand',
    center: [60.7342, 14.9069],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Lerum',
    center: [57.7717, 12.2692],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Lessebo',
    center: [56.7494, 15.2669],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Lidingö',
    center: [59.3667, 18.1333],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Lidköping',
    center: [58.5051, 13.1579],
    
    isRegion: false,
    hasAgreement: false,
  },
  {
    name: 'Lilla Edet',
    center: [58.1333, 12.1167],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Lindesberg',
    center: [59.5936, 15.2289],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Linköping',
    center: [58.4108, 15.6214],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ljungby',
    center: [56.8333, 13.9333],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ljusdal',
    center: [61.8294, 16.0947],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ljusnarsberg',
    center: [59.9667, 14.9833],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Lomma',
    center: [55.6728, 13.0681],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ludvika',
    center: [60.1494, 15.1878],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Luleå',
    center: [65.5848, 22.1567],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Lund',
    center: [55.7058, 13.1939],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Lycksele',
    center: [64.5958, 18.6733],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Lysekil',
    center: [58.2733, 11.4408],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Malmö',
    center: [55.605, 13.0038],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Malung-Sälen',
    center: [60.6833, 13.7167],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Malå',
    center: [65.1867, 18.7417],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Mariestad',
    center: [58.7092, 13.8233],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Mark',
    center: [57.5053, 12.5367],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Markaryd',
    center: [56.4581, 13.6],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Mellerud',
    center: [58.7, 12.4667],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Mjölby',
    center: [58.325, 15.1228],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Mora',
    center: [61.0092, 14.5372],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Motala',
    center: [58.5371, 15.0375],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Mullsjö',
    center: [57.9192, 13.8817],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Munkedal',
    center: [58.4678, 11.6806],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Munkfors',
    center: [59.835, 13.5339],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Mölndal',
    center: [57.6554, 12.0137],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Mönsterås',
    center: [57.045, 16.4486],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Mörbylånga',
    center: [56.5275, 16.3847],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Nacka',
    center: [59.3105, 18.1635],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Nora',
    center: [59.5167, 15.0333],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Norberg',
    center: [60.0639, 15.9461],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Nordanstig',
    center: [61.8222, 17.15],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Nordmaling',
    center: [63.5769, 19.4894],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Norrköping',
    center: [58.5942, 16.1826],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Norrtälje',
    center: [59.7578, 18.7056],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Norsjö',
    center: [64.935, 19.4844],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Nybro',
    center: [56.7447, 15.9075],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Nykvarn',
    center: [59.2, 17.4333],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Nyköping',
    center: [58.753, 17.0077],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Nynäshamn',
    center: [58.9035, 17.9468],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Nässjö',
    center: [57.6537, 14.6942],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ockelbo',
    center: [60.891, 16.7163],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Olofström',
    center: [56.2744, 14.5336],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Orsa',
    center: [61.1211, 14.6206],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Orust',
    center: [58.155, 11.6806],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Osby',
    center: [56.3794, 13.9989],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Oskarshamn',
    center: [57.265, 16.4486],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ovanåker',
    center: [61.3486, 15.9389],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Oxelösund',
    center: [58.6667, 17.1],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Pajala',
    center: [67.2131, 23.3678],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Partille',
    center: [57.7392, 12.1061],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Perstorp',
    center: [56.134, 13.3929],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Piteå',
    center: [65.3172, 21.4795],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ragunda',
    center: [63.0044, 16.66],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Robertsfors',
    center: [64.1889, 21.3853],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ronneby',
    center: [56.2108, 15.2761],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Rättvik',
    center: [60.8847, 15.1169],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sala',
    center: [59.9222, 16.6069],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Salem',
    center: [59.24, 17.745],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sandviken',
    center: [60.62, 16.7758],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sigtuna',
    center: [59.6167, 17.7167],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Simrishamn',
    center: [55.555, 14.3503],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sjöbo',
    center: [55.6313, 13.7087],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Skara',
    center: [58.3856, 13.4386],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Skellefteå',
    center: [64.7509, 20.9528],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Skinnskatteberg',
    center: [59.8333, 15.6833],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Skurup',
    center: [55.4783, 13.4989],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Skövde',
    center: [58.3912, 13.8452],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Smedjebacken',
    center: [60.1425, 15.4142],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sollefteå',
    center: [63.1667, 17.2667],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sollentuna',
    center: [59.4281, 17.9509],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Solna',
    center: [59.3609, 18.0],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sorsele',
    center: [65.5325, 17.5389],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sotenäs',
    center: [58.3667, 11.3333],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Staffanstorp',
    center: [55.6444, 13.2114],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Stenungsund',
    center: [58.07, 11.8194],
    isRegion: false,
    hasAgreement: false,
},

{
    name: 'Storfors',
    center: [59.5333, 14.2667],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Storuman',
    center: [65.0979, 17.1167],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Strängnäs',
    center: [59.3781, 17.0319],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Strömstad',
    center: [58.9392, 11.1744],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Strömsund',
    center: [63.8475, 15.5575],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sundbyberg',
    center: [59.3611, 17.9714],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sundsvall',
    center: [62.3908, 17.3069],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sunne',
    center: [59.8383, 13.1375],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Surahammar',
    center: [59.7075, 16.22],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Svalöv',
    center: [55.9167, 13.1064],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Svedala',
    center: [55.5072, 13.2386],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Svenljunga',
    center: [57.4939, 12.6939],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Säffle',
    center: [59.1347, 12.9292],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Säter',
    center: [60.3492, 15.7539],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sävsjö',
    center: [57.4036, 14.6681],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Söderhamn',
    center: [61.2992, 17.0581],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Söderköping',
    center: [58.4797, 16.3225],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Södertälje',
    center: [59.1955, 17.6254],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Sölvesborg',
    center: [56.0478, 14.5778],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Tanum',
    center: [58.7283, 11.3008],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Tibro',
    center: [58.4167, 14.1667],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Tidaholm',
    center: [58.1817, 13.9592],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Tierp',
    center: [60.3411, 17.5122],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Timrå',
    center: [62.4889, 17.3306],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Tingsryd',
    center: [56.5278, 14.9753],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Tjörn',
    center: [58.0333, 11.6],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Tomelilla',
    center: [55.5444, 13.9489],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Torsby',
    center: [60.1361, 13.0047],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Torsås',
    center: [56.4139, 16.0028],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Tranemo',
    center: [57.4872, 13.3592],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Tranås',
    center: [58.0347, 14.9739],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Trelleborg',
    center: [55.3753, 13.1578],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Trollhättan',
    center: [58.2831, 12.2886],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Trosa',
    center: [58.8978, 17.5469],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Tyresö',
    center: [59.2369, 18.2231],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Täby',
    center: [59.4439, 18.0689],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Töreboda',
    center: [58.7058, 14.1211],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Uddevalla',
    center: [58.3499, 11.9499],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ulricehamn',
    center: [57.7931, 13.4122],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Umeå',
    center: [63.8258, 20.263],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Upplands-Bro',
    center: [59.5092, 17.6322],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Upplands Väsby',
    center: [59.5181, 17.9078],
    isRegion: false,
    hasAgreement: false,
},

{
    name: 'Uppvidinge',
    center: [57.1675, 15.3461],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vadstena',
    center: [58.4494, 14.8908],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vaggeryd',
    center: [57.5028, 14.1428],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Valdemarsvik',
    center: [58.2047, 16.5947],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vallentuna',
    center: [59.5339, 18.0775],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vansbro',
    center: [60.5189, 14.2222],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vara',
    center: [58.2642, 12.9547],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Varberg',
    center: [57.1056, 12.2508],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vaxholm',
    center: [59.4036, 18.3525],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vellinge',
    center: [55.4744, 13.0197],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vetlanda',
    center: [57.4261, 15.0844],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vilhelmina',
    center: [64.625, 16.6483],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vimmerby',
    center: [57.6653, 15.8567],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vindeln',
    center: [64.2006, 19.715],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vingåker',
    center: [59.0431, 15.8758],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vårgårda',
    center: [58.0333, 12.8167],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vänersborg',
    center: [58.3808, 12.3231],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Vännäs',
    center: [63.9081, 19.7575],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Värmdö',
    center: [59.325, 18.4072],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Värnamo',
    center: [57.1839, 14.0406],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Västervik',
    center: [57.7584, 16.4486],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Västerås',
    center: [59.6162, 16.5528],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Växjö',
    center: [56.8777, 14.8091],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ydre',
    center: [57.6333, 15.2],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ystad',
    center: [55.4291, 13.8205],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Åmål',
    center: [59.0506, 12.7022],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Ånge',
    center: [62.5242, 15.6531],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Åre',
    center: [63.3981, 13.0819],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Årjäng',
    center: [59.3961, 12.1336],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Åsele',
    center: [64.1553, 17.3472],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Åstorp',
    center: [56.1344, 12.9436],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Åtvidaberg',
    center: [58.2017, 16.0044],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Älmhult',
    center: [56.5525, 14.1375],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Älvdalen',
    center: [61.2167, 13.7828],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Älvkarleby',
    center: [60.5667, 17.425],
    isRegion: false,
    hasAgreement: false,
},
{
    name: 'Älvsbyn',
    center: [65.6775, 21.0158],
    isRegion: false,
    hasAgreement: false,
},
{
  name: 'Älvsbyn',
  center: [65.6742, 21.0167],
  isRegion: false,
  hasAgreement: false,
},
{
  name: 'Ängelholm',
  center: [56.2428, 12.8625],
  isRegion: false,
  hasAgreement: false,
},
{
  name: 'Öckerö',
  center: [57.7128, 11.6472],
  isRegion: false,
  hasAgreement: false,
},
{
  name: 'Ödeshög',
  center: [58.2306, 14.6522],
  isRegion: false,
  hasAgreement: false,
},

{
  name: 'Örkelljunga',
  center: [56.2875, 13.2797],
  isRegion: false,
  hasAgreement: false,
},
{
  name: 'Örnsköldsvik',
  center: [63.2901, 18.7164],
  isRegion: false,
  hasAgreement: false,
},
{
  name: 'Östersund',
  center: [63.1792, 14.6357],
  isRegion: false,
  hasAgreement: false,
},
{
  name: 'Österåker',
  center: [59.4746, 18.2975],
  isRegion: false,
  hasAgreement: false,
},
{
  name: 'Östhammar',
  center: [60.2597, 18.3733],
  isRegion: false,
  hasAgreement: false,
},
{
  name: 'Östra Göinge',
  center: [56.2858, 14.0867],
  isRegion: false,
  hasAgreement: false,
},
{
  name: 'Överkalix',
  center: [66.3239, 22.8417],
  isRegion: false,
  hasAgreement: false,
},
{
  name: 'Övertorneå',
  center: [66.3901, 23.6603],
  isRegion: false,
  hasAgreement: false,
},
  
];

async function bootstrap() {
  console.log('Starting seeding process for kommuner...'); // Log start
  const app = await NestFactory.createApplicationContext(AppModule);
  const kommunerService = app.get(KommunerService);

  for (const kommun of kommunerData) {
    try {
      await kommunerService.create(kommun);
      console.log(`Added ${kommun.name} to the database.`); // Log each added entry
    } catch (error) {
      console.error(`Failed to add ${kommun.name}:`, error.message); // Log errors
    }
  }

  console.log('Seeding kommuner complete');
  await app.close();
}

bootstrap();