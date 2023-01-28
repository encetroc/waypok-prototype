import { useFieldArray } from 'react-hook-form'
import { Input } from '@/components/Input'

export const CreateTripForm = ({ tripIndex, control, register }) => {
  const {
    fields: stops,
    remove,
    append,
  } = useFieldArray({
    control,
    name: `trips[${tripIndex}].stops`,
  })
  return (
    <>
      <button
        type="button"
        onClick={() =>
          append({
            departureDate: 'departureDate',
            departureAddress: 'departureAddress',
            arrivalDate: 'arrivalDate',
            arrivalAddress: 'arrivalAddress',
          })
        }
      >
        append stop
      </button>
      <ul>
        {stops.map((stop, stopIndex) => {
          return (
            <li
              key={stop.id}
              style={{ display: 'flex', alignItems: 'start', gap: '10px' }}
            >
              <div>
                <h4>{`stop ${stopIndex}`}</h4>
                <button type="button" onClick={() => remove(stopIndex)}>
                  delete stop
                </button>
              </div>
              <div>
                <Input
                  type="datetime-local"
                  name={`trips[${tripIndex}].stops[${stopIndex}].departureDate`}
                  register={register}
                />
                <Input
                  type="text"
                  name={`trips[${tripIndex}].stops[${stopIndex}].departureAddress`}
                  register={register}
                />
                <Input
                  type="datetime-local"
                  name={`trips[${tripIndex}].stops[${stopIndex}].arrivalDate`}
                  register={register}
                />
                <Input
                  type="text"
                  name={`trips[${tripIndex}].stops[${stopIndex}].arrivalAddress`}
                  register={register}
                />
                <hr />
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}