import { emergencyContact } from "./emergencyContact.model";
import { referencePerson } from "./referencePerson.model";

export interface onboarding {
    firstName: String;
    middleName: String;
    lastName: String;
    email: String;
    gender: String;
    cellphone: String;
    alternatePhone: String;
    ssn: String;
    dob: String;
    addressLine1: String;
    addressLine2: String;
    zipCode: String;
    city: String;
    stateAbbr: String;
    visaType: String;
    driverlicense: String;
    emergencyContact: emergencyContact[];
    referencePerson: referencePerson;
}