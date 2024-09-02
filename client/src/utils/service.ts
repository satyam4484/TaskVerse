export const generateUsername = (email: string, firstName: string, lastName: string): string => {
    // Extract the first three characters of the first name and last name
    const shortFirstName = firstName.slice(0, 3).toLowerCase();
    const shortLastName = lastName.slice(0, 3).toLowerCase();

    // Extract the part before "@" from the email
    const emailUsername = email.split('@')[0].slice(0, 3).toLowerCase();

    // Generate a short random alphanumeric string
    const randomString = Math.random().toString(36).substring(2, 5);

    // Combine the parts to create a unique and short username
    const username = `${shortFirstName}${shortLastName}${randomString}${emailUsername}`;

    // Ensure the username is within 10-15 characters
    return username.slice(0, 15);
};