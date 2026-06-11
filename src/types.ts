/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AircraftCategory = 'Super Midsize' | 'Midsize' | 'Light' | 'Heavy' | 'Turboprop';

export interface Aircraft {
  id: string;
  name: string;
  category: AircraftCategory;
  speed: string; // Cruise Speed, e.g., "530 mph"
  range: string; // Range in nautical miles, e.g., "3,400 nm"
  passengers: number; // Max passenger capacity, e.g., 10
  cabinHeight: string; // Cabin height, e.g., "6' 1\""
  cabinWidth: string; // Cabin width, e.g., "7' 2\""
  baggageCapacity: string; // Baggage capacity, e.g., "115 cu ft"
  image: string; // High-quality image URL
  description: string;
  detailedSpecs: {
    label: string;
    value: string;
  }[];
}

export interface QuoteRequest {
  tripType: 'one-way' | 'round-trip' | 'multi-city';
  fromAirport: string;
  toAirport: string;
  date: string;
  passengers: number;
  aircraftCategory: AircraftCategory | 'Any';
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  specialRequests?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  imageUrl: string;
}
