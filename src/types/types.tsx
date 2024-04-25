
export interface Inutrition {
    proteins: number;
    fats: number;
    carbohydrates: number;
    kcal: number;
}


export interface Iitem {
    itemCode: string;
    itemName: string;
    itemDescription: string;
    url: string;
    itemWeight: number;
    itemPrice: number;
    nutritionTip: Inutrition;
}


export interface ImenuCategories {
    catName: string;
    catCode: string;
    menuItems: Iitem[];
}


export interface IserviceTimes {
    serviceTimeName: string;
    serviceTimeCode: number;
    serviceTimeZone: string;
    menuCategories: ImenuCategories[];
}

export interface Imain {
    serviceTimes: IserviceTimes[];
}