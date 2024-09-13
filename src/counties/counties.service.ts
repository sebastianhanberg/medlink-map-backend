import { Injectable } from '@nestjs/common';

@Injectable()
export class CountiesService {
  // This is a mock. In a real application, you'd fetch this from a database.
  private counties = [
    {
      name: 'Stockholm',
      center: [59.3293, 18.0686],
      population: 935619,
      area: 188,
    },
    {
      name: 'Gothenburg',
      center: [57.7089, 11.9746],
      population: 579281,
      area: 447,
    },
    // Add more counties here
  ];

  async searchCounty(query: string) {
    return this.counties.find((county) =>
      county.name.toLowerCase().includes(query.toLowerCase()),
    );
  }
}
