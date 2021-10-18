import { emergencyContact } from "./emergencyContact.model";
import { referencePerson } from "./referencePerson.model";

export interface onboarding {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    gender: string;
    cellphone: string;
    alternatePhone: string;
    ssn: string;
    dob: string;
    addressLine1: string;
    addressLine2: string;
    zipCode: string;
    city: string;
    stateAbbr: string;
    visaType: string;
    driverlicense: string;
    emergencyContact: emergencyContact[];
    referencePerson: referencePerson;
    avatar: string;
    visaDocumentPath: string;
    driverLicenseDocumentPath: string;
}