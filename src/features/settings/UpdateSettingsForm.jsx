import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useSettings from './useSettings';
import Spinner from '../../ui/Spinner';
import useUpdateSetting from './useUpdateSetting';

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      id,
      breakfastPrice,
      maxGuestsPerBooking,
      maxBookingLength,
      minBookingLength,
    } = {},
    error,
  } = useSettings();

  const { updateSetting, isUpdating } = useUpdateSetting();

  const handleUpdate = (e) => {
    const newSetting = { newSetting: { [e.target.name]: e.target.value }, id };
    updateSetting(newSetting);
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Form>
        <FormRow label="Minimum nights/booking">
          <Input
            type="number"
            id="min-nights"
            name="minBookingLength"
            defaultValue={minBookingLength}
            onBlur={handleUpdate}
          />
        </FormRow>
        <FormRow label="Maximum nights/booking">
          <Input
            type="number"
            id="max-nights"
            name="maxBookingLength"
            defaultValue={maxBookingLength}
            onBlur={handleUpdate}
          />
        </FormRow>
        <FormRow label="Maximum guests/booking">
          <Input
            type="number"
            id="max-guests"
            name="maxGuestsPerBooking"
            defaultValue={maxGuestsPerBooking}
            onBlur={handleUpdate}
          />
        </FormRow>
        <FormRow label="Breakfast price">
          <Input
            type="number"
            id="breakfast-price"
            name="breakfastPrice"
            defaultValue={breakfastPrice}
            onBlur={handleUpdate}
          />
        </FormRow>
      </Form>
      {isUpdating && <Spinner />}
    </>
  );
}

export default UpdateSettingsForm;
