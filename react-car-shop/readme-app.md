#Step1
- Create application using create react app commmand.
- Run npm eject (check README.md first).

#Step2
- Architecture for models (components, actions, reducers)
E.g:
  assets/
    images/
    styles/

  components/
     App.jsx
     ...

  reducers/
    index.js
    ...

  actions/
    ...

  store.js

  index.js

#Step3
- Create component for Header, Footer.
- Header component should contain a Login and a Register button.

#Step4
- Create a component for cars listing.

#Step5
- Set up routes.

#Step6
- Create a component for Login Popup.

#Step7
- Create a component for Reset Password Popup.

#Step8
- Connect to API using axios and axios middlewar.e

#Step9
- CRUD Car
- Please treat all cases:
  - pending: disable action buttons
  - success/fail popup message for create, update and delete car show up
  - popup should contain informations about car (mark, model)

#Step 10
- Registration page with validation:
   - Fields must not be empty.
   - Email validation.
   - Password must contains at least: 8 characters, one uppercase, one special character.
   - Confirm password.

#Step 11
- Login popup
- Validations for form fields

#Step 12
- Load more button for cars list.
- 10 items for start and load more 10
- if number of items < 10 the button won't be displayed

#Step 13
- PropTypes for each component that exisist in the project.

  Ex:
      SearchMembers.displayName = 'SearchMembers';

      SearchMembers.propTypes = {
        fields: PropTypes.object,
        statusDisabled: PropTypes.bool,
        handleSubmit: PropTypes.func,
        onCallback: PropTypes.func,
        onResetCallBack: PropTypes.func.isRequired
      };

      SearchMembers.defaultProps = {
        statusDisabled: false
      };

#Step 14
- CRUD for bookings with select for car that will be on that booking.
- New page for booking CRUD
- You can use the flow from car CRUD.

#Step15
- Create a page that list bookings

#Step 15
- Search for booking using start and end date(the bookings should be in this interval)
- You need to use the same page that list bookings.

#Step 16
- Add a new button to car item to list all bookings for that car(exisisting page or modal)
- In the API exist method to get all bookings for a car.(...../car/bookings/:carId)

#Step 17
- Add restriction to all bookings operations if the member it's not logged in.
