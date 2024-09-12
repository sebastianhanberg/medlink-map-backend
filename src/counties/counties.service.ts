import { Injectable } from '@nestjs/common';
import * as swedenCounties from '../data/sweden-counties.json';

@Injectable()
export class CountiesService {
  search(name: string) {
    const lowercaseName = name.toLowerCase();
    return swedenCounties.features.find((county) =>
      county.properties.name.toLowerCase().includes(lowercaseName),
    );
  }
}
