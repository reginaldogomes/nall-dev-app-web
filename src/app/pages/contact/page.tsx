import { useForm } from 'react-hook-form'
import Title from '@/app/components/elements/Title'

interface FormData {
  firstName: string
  lastName: string
  email: string
}

export default function Page() {
  const { register, handleSubmit, formState } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <section>
      <Title text='Contact Page' />
      <form onSubmit={handleSubmit(onSubmit)} className='p-4'>
        <div className='mb-4'>
          <label className='block text-gray-700'>First Name</label>
          <input
            type='text'
            {...register('firstName', { required: true })}
            className='form-input mt-1 p-2 w-full border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700'>Last Name</label>
          <input
            type='text'
            {...register('lastName', { required: true })}
            className='form-input mt-1 p-2 w-full border rounded'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input
            type='email'
            {...register('email', { required: true })}
            className='form-input mt-1 p-2 w-full border rounded'
          />
        </div>

        <button
          type='submit'
          disabled={formState.isSubmitting}
          className='bg-blue-500 text-white py-2 px-4 rounded'
        >
          Submit
        </button>
      </form>
    </section>
  )
}
