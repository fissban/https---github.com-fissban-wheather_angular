import {Day} from "./Day";
import {Hour} from "./Hour";
import {Information} from "./Information";
import {Locality} from "./Locality";

export interface Weather
{
    copyright: string;
    use: string;
    information: Information;
    web: string;
    language: string;
    locality: Locality;
    day1: Day;
    day2: Day;
    day3: Day;
    day4: Day;
    day5: Day;
    hour_hour: Hour,
}