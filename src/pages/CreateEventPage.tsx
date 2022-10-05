import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateEventPage = () => {
  const navigate = useNavigate();

  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'HANDLE INPUT CHANGE':
        return {
          ...state,
          [action.fieldName]: action.payload,
        };
      default:
        return state;
    }
  }

  const initialState = {
    eventName: '',
    hostName: '',
    startTime: '',
    endTime: '',
    location: '',
    eventPhoto: '',
  };

  const [formState, dispatch] = useReducer(reducer, initialState);
  const { eventName, hostName, startTime, endTime, location } = formState;

  const handleFormInputChange = (e: any) => {
    dispatch({
      type: 'HANDLE INPUT CHANGE',
      payload: e.target.value,
      fieldName: e.target.name,
    });
  };

  return (
    <div className='create-event'>
      <button
        type='button'
        className='back-button'
        onClick={() => {
          navigate('/');
        }}
      >
        Back
      </button>
      <form>
        <label htmlFor='eventName'>
          Event Name:
          <input
            type='text'
            name='eventName'
            onChange={(e) => {
              handleFormInputChange(e);
            }}
            value={eventName}
          />
        </label>
        <label htmlFor='hostName'>
          Host Name:
          <input
            type='text'
            name='hostName'
            onChange={(e) => {
              handleFormInputChange(e);
            }}
            value={hostName}
          />
        </label>
        <label htmlFor='startTime'>
          Start Time
          <input
            type='datetime-local'
            name='startTime'
            onChange={(e) => {
              handleFormInputChange(e);
            }}
            value={startTime}
          />
        </label>
        <label htmlFor='endTime'>
          End Time
          <input
            type='datetime-local'
            name='endTime'
            onChange={(e) => {
              handleFormInputChange(e);
            }}
            value={endTime}
          />
        </label>
        <label htmlFor='location'>
          Location
          <input
            type='text'
            name='location'
            onChange={(e) => {
              handleFormInputChange(e);
            }}
            value={location}
          />
        </label>
        <label htmlFor='eventPhoto'>
          Event Photo
          <input
            type='file'
            name='eventPhoto'
            onChange={(e: any) => {
              const reader = new FileReader();

              reader.addEventListener('load', () => {
                dispatch({
                  type: 'HANDLE INPUT CHANGE',
                  payload: reader.result,
                  fieldName: e.target.name,
                });
              });

              reader.readAsDataURL(e.target.files[0]);
            }}
          />
        </label>
        <button type='submit'>Next</button>
      </form>
    </div>
  );
};

export default CreateEventPage;
