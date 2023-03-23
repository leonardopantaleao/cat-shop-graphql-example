function userProfile(data) {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };
  }
  module.exports = userProfile;