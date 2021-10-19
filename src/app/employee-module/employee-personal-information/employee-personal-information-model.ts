export interface personalInfo {
    nameSection: nameSection;
    contactSection: contactSection;
    addressSection: addressSection;
    employeeSection: employeeSection;
    emergencyContactList: emergencyContact[];
    personalDocumentList: personalDocument[];
    referencePerson: referencePerson;
    hrComment?: string;
    appStatus?: string;
}
export interface nameSection {
    personId: number,
    firstName: string,
    lastName: string,
    middleName: string,
    avatar: string,
    dob: Date,
    age: number,
    gender: string,
    ssn: String,
}
export interface addressSection {
    addressId: number,
    addressLine1: string,
    addressLine2?: string,
    city: string,
    stateAbbr: string,
    stateName: string,
    zipCode: string,
}
export interface contactSection {
    email: string,
    cellphone: string,
    alternatePhone?: string,

}
export interface employeeSection {
    employeeId: number,
    visaType: string,
    visaStartDate: Date,
    visaEndDate: Date,
    startDate: Date,
    endDate: Date,
    title: string,
    car: string,
    driverLicense: string
    driverLicenseExpirationDate: Date,
}

export interface emergencyContact {
    firstName: string,
    lastName: string,
    cellphone: string,
    email: string,
    relationship: string,
    personId: number,

}
export interface personalDocument {
    docId: number,
    path: string,
    title: string,
    createDate: Date,
}

export interface referencePerson {
    personId: number,
    firstName: string,
    lastName: string,
    middleName: string,
    email: string,
    cellphone: string,
    relationship: string,
    addressSection: addressSection;
}