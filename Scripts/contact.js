class Contact 
{
    // Constructor
    constructor(fullName="", contactNumber="", emailAddress="") 
    {
        this.m_fullName = fullName;
        this.m_contactNumber = contactNumber;
        this.m_emailAddress = emailAddress;

        this.splitFullName();
    }
    // Getters and Setters
    get fullName() 
    {
        return this.m_fullName;
    }

    get contactNumber() 
    {
        return this.m_contactNumber;
    }

    get emailAddress() 
    {
        return this.m_emailAddress;
    }

    set fullName(full_name) 
    {
        this.m_fullName = full_name;
    }

    set contactNumber(contact_number) 
    {
        this.m_contactNumber = contact_number;
    }

    set emailAddress(email_address)
    {
        this.m_emailAddress = email_address;
    }

    // functions
    splitFullName()
    {
        
        let names = this.m_fullName.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }

    /* This method overrides the toString method of the Contact class */
    toString()
    {
        let contactString = `Full Name:         ${this.fullName}
Contact Number:    ${this.contactNumber}
Email Address:     ${this.emailAddress}`;

        return contactString;
    }
/**
 * This method converts the Contact to a JSON object.
 * @return {Object}
 */

    toJSON()
    {
        let json = {};
        json.contactNumber = this.contactNumber;
        json.fullName = this.fullName;
        json.emailAddress = this.emailAddress;

        return json;
    }

    /**
     * This method serializes the properties into s comma-seperated value string.
     * @return {string}
     */
    serialize()
    {
        return `${this.fullName},${this.contactNumber},${this.emailAddress}`;
    }

    /**
     * This method takes a comma-seperated string of contact properties and sets the
     * current contact to these properties.
     * @param {string} data 
     * @return {void}
     */
    deserialize(data)
    {
        // create an array of property data
        let properties = data.split(",");

        this.fullName = properties[0];
        this.contactNumber = properties[1];
        this.emailAddress = properties[2];
    }

}