export function getContactInfo() {
  return {
    type: 'contact/GET_INFO',
    payload: {
      request: {
        method: 'GET',
        url: '/contact-info'
      }
    }
  };
}
