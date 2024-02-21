export interface ILocation{
    street: string;
    state: string;
    country: string;
}

export interface IRatings{
    cleanliness: number;
    accuracy: number;
    value: number;
    location: number;
    service: number;
}

export interface IReview{
    reviewerName: string;
    profileUrl: string;
    review: string;
    createdAt: string;
}

export interface IHost{
    name: string;
    profileUrl: string;
    bio: string;
    joinedAt: string;
    totalReviews: number;
    isVerified: boolean;
    isSuperHost: boolean;
}

export interface ICardDetails {
    id:number;
    title: string;
    about: string;
    spaceDescription: string;
    thumbnailUrl:string;
    overallRating: number;
    imageUrls: string[];
    amenities: string[];
    location: ILocation;
    ratings: IRatings;
    reviews: IReview[];
    host: IHost;
    pricePerNightInCents: number;
    cleaningPricePerNightInCents: number;
    servicePricePerNightInCents: number;
    maxGuests: number;
    numberOfBedrooms: number;
    numberOfBeds: number;
    numberOfBathroom: number;
}