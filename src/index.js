export default class Movie {
    readonly year: string;
    readonly contry: string;
    readonly tagline: array;
    readonly genre: string;
    readonly time: string;
    
    constructor(year: string, contry: string, tagline: array, genre: string, time: string) {
        this.year = year;
        this.contry = contry;
        this.tagline = tagline;
        this.genre = genre;
        this.time = time;
    }
}