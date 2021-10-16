export interface personalInfo {
    nameSection: nameSection;
    contactSection: contactSection;
    addressSection: addressSection;
    employeeSection: employeeSection;
    emergencyContactList: emergencyContact[];
    personalDocumentList: personalDocument[];
}
export interface nameSection {
    personId: number,
    firstName: string,
    lastName: string,
    avatar: string,
    dob: Date,
    age: number,
    gender: string,
    ssn: number,
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