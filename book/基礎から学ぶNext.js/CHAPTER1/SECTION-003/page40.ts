class NewClass {
    property: string;
    constructor() {
        this.property = 'property';
    }
    method() {
        return this.property;
    }
}

const instance = new NewClass();
instance.property;
instance.method();