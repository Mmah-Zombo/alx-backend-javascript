// teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
};

// director interface
interface Directors extends Teacher{
    numberOfReports: number;
}

// printTeacher interface
interface printTeacher {
    (firstName: string, lastName: string): string;
}

// printTeacher function
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`
}

// student class contrustor interface
interface StudentClassConstructor {
    new (firstName: string, lastName:string): StudentClass;
}

// studentclass interface
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}
// student class
class StudentClass {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName:string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this._firstName;
    }
}